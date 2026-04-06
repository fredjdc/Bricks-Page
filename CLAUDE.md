# Bricks Page — Claude Context

Bricks Page is the static marketing website for Bricks Apps at bricks.pe. It contains product pages for Bricks Scan, Bricks Calc, and Bricks Leads, plus legal, support, and help pages. No build system — pure HTML, CSS, and JavaScript.

---

## Read These First

Before editing any web content, read these:

1. [`Bricks-Documentation/apps/bricks-website/product/overview.md`](../Bricks-Documentation/apps/bricks-website/product/overview.md) — what the site covers
2. [`Bricks-Documentation/shared/brand/brand-foundation.md`](../Bricks-Documentation/shared/brand/brand-foundation.md) — brand voice and personality
3. [`Bricks-Documentation/shared/brand/brand-system.md`](../Bricks-Documentation/shared/brand/brand-system.md) — visual system, colors, typography
4. [`Bricks-Documentation/apps/bricks-website/engineering/dev-guide.md`](../Bricks-Documentation/apps/bricks-website/engineering/dev-guide.md) — site structure and deployment
5. [`docs/README.md`](./docs/README.md) — local setup and site map

---

## Key Conventions

- **Follow the Bricks brand voice exactly** — clear, calm, practical, trustworthy. No hype, no hollow enthusiasm, no ornamental phrasing. State what it does → why it matters → stop.
- **Follow the brand visual system** — monochromatic base, product accent colors, Soft-Emboss surface language. Do not introduce new color values without checking brand-system.md.
- **No new frameworks or build tools** — the site is intentionally simple. No npm, no bundlers, no CSS preprocessors.
- **Update sitemap.xml when adding pages** — keep the sitemap accurate for SEO.
- **Never modify apple-app-site-association without coordination** — this file controls universal links for all Bricks apps on iOS/macOS.

---

## Do Not

- Do not use hardcoded hex colors — reference CSS custom properties or the values defined in brand-system.md.
- Do not introduce JavaScript frameworks (React, Vue, etc.) — the site uses vanilla JS.
- Do not add copy that contradicts product positioning — check `Bricks-Documentation/apps/[product]/product/positioning.md` before writing product descriptions.

---

## Documentation Requirement

Documentation is part of the deliverable. The task is not complete until code and relevant documentation are aligned.

When implementation changes behavior, structure, workflow, or limits:

- Identify the affected canonical docs in `Bricks-Documentation`.
- Update those canonical docs in the same pass.
- Update local `docs/` files only when repo-specific workflow changed.
- Add new canonical docs only if they fit the approved structure, then update `docs-manifest.yaml` and `documentation-backlog.md` in the same pass.
- Never leave new behavior undocumented.
- Never move a doc to `active`. At most, move it to `needs-review`.
- If no docs need changes, state why explicitly.

Update docs when changes affect any of:

- user-facing behavior or feature scope
- architecture, state ownership, or persistence
- setup, testing, or release workflow
- support guidance, limits, or pricing-related behavior
- AI routing or agent instructions

---

## Product & Brand Context

For brand voice: [`Bricks-Documentation/shared/brand/brand-foundation.md`](../Bricks-Documentation/shared/brand/brand-foundation.md)

For product positioning: [`Bricks-Documentation/apps/bricks-scan/product/positioning.md`](../Bricks-Documentation/apps/bricks-scan/product/positioning.md), [`Bricks-Documentation/apps/bricks-calc/product/positioning.md`](../Bricks-Documentation/apps/bricks-calc/product/positioning.md)
