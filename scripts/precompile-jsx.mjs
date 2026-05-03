import { promises as fs, watch as watchFs } from "node:fs";
import path from "node:path";
import process from "node:process";
import * as esbuild from "esbuild";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "compiled");
const PAGES = [
  "index.html",
  "calc.html",
  "refinance.html",
  "refinanciamiento.html",
  "scan.html",
  "leads.html",
  "about.html",
  "help.html",
  "support.html",
  "privacy.html",
  "terms.html",
  "thank-you.html",
  "thank-you-feedback.html",
];

const args = new Set(process.argv.slice(2));
const shouldWatch = args.has("--watch");
const shouldCheck = args.has("--check");
const shouldApplyHtml = args.has("--apply-html");

const BABEL_INCLUDE_RE = /[ \t]*<script[^>]*src=["'][^"']*@babel\/standalone[^"']*["'][^>]*><\/script>\s*\n?/g;
const COMPILED_MARKER_RE = /\n?[ \t]*<!-- JSX compiled to compiled\/[^>]+ -->\n?[ \t]*<script src="compiled\/[^"]+" defer><\/script>\n?/g;

function getBabelScriptRegex() {
  return /[ \t]*<script\s+type=(["'])text\/babel\1[^>]*>([\s\S]*?)<\/script>\s*\n?/g;
}

function pageToBundle(page) {
  return page.replace(/\.html$/, ".js");
}

function extractBabelBlocks(html) {
  const blocks = [];
  const regex = getBabelScriptRegex();
  let match;
  while ((match = regex.exec(html)) !== null) {
    blocks.push(match[2].trim());
  }
  return blocks;
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function readPage(page) {
  const filepath = path.join(ROOT, page);
  const html = await fs.readFile(filepath, "utf8");
  return { filepath, html };
}

async function buildPage(page) {
  const { filepath, html } = await readPage(page);
  const sourceBlocks = extractBabelBlocks(html);
  if (sourceBlocks.length === 0) {
    throw new Error(`No text/babel blocks found in ${page}`);
  }

  const source = sourceBlocks.join("\n\n");
  const outfile = path.join(OUT_DIR, pageToBundle(page));

  await ensureDir(OUT_DIR);

  return esbuild.build({
    stdin: {
      contents: source,
      resolveDir: path.dirname(filepath),
      sourcefile: page,
      loader: "jsx",
    },
    outfile,
    format: "iife",
    target: "es2020",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    minify: true,
    sourcemap: true,
    legalComments: "none",
    charset: "utf8",
    define: {
      "process.env.NODE_ENV": "\"production\"",
    },
    logLevel: "silent",
  });
}

async function checkPage(page) {
  const sourcePath = path.join(ROOT, page);
  const bundlePath = path.join(OUT_DIR, pageToBundle(page));
  const [sourceStat, bundleStat] = await Promise.all([
    fs.stat(sourcePath),
    fs.stat(bundlePath).catch(() => null),
  ]);

  if (!bundleStat) {
    return `${page}: missing ${path.relative(ROOT, bundlePath)}`;
  }

  if (bundleStat.mtimeMs < sourceStat.mtimeMs) {
    return `${page}: bundle is older than source HTML`;
  }

  return null;
}

async function applyHtml(page) {
  const filepath = path.join(ROOT, page);
  const original = await fs.readFile(filepath, "utf8");
  const bundlePath = `compiled/${pageToBundle(page)}`;
  const compiledTag = `<!-- JSX compiled to ${bundlePath} -->\n    <script src="${bundlePath}" defer></script>\n`;
  const babelScriptRegex = getBabelScriptRegex();

  if (!babelScriptRegex.test(original)) {
    throw new Error(`Cannot apply compiled output to ${page}: no text/babel blocks found`);
  }

  const withoutBabel = original
    .replace(BABEL_INCLUDE_RE, "")
    .replace(getBabelScriptRegex(), "")
    .replace(COMPILED_MARKER_RE, "");

  const updated = withoutBabel.replace("</body>", `${compiledTag}</body>`);
  await fs.writeFile(filepath, updated, "utf8");
}

async function main() {
  if (shouldCheck) {
    const failures = (await Promise.all(PAGES.map(checkPage))).filter(Boolean);
    if (failures.length > 0) {
      for (const failure of failures) {
        console.error(failure);
      }
      process.exitCode = 1;
    }
    return;
  }

  if (shouldWatch) {
    await ensureDir(OUT_DIR);
    for (const page of PAGES) {
      await buildPage(page);
      const filepath = path.join(ROOT, page);
      let timer = null;
      watchFs(filepath, () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(async () => {
          try {
            await buildPage(page);
            console.log(`Rebuilt ${page}`);
          } catch (error) {
            console.error(`Failed to rebuild ${page}: ${error.message}`);
          }
        }, 75);
      });
    }
    console.log("Watching JSX pages for changes...");
    return;
  }

  for (const page of PAGES) {
    await buildPage(page);
  }

  if (shouldApplyHtml) {
    for (const page of PAGES) {
      await applyHtml(page);
    }
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
