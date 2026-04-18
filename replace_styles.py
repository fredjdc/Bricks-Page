import re

with open("styles.css", "r") as f:
    lines = f.readlines()

new_lines = []
skip = False
for i, line in enumerate(lines):
    if "/* Hero App Items (Index Hero) */" in line:
        skip = True
    if "/* ── Desktop App Banner ───────────────────────────────────────── */" in line:
        skip = False

    if "/* ── Section Hero Ambient Background ─────────────────────────── */" in line:
        skip = True
    if "/* ── Stagger Delays (wider spread = more choreography) ── */" in line:
        skip = False

    if "/* 🔟 Hero Background Animation */" in line:
        skip = True
    if "/* ── Form Components (Support Page) ── */" in line:
        skip = False

    if not skip:
        new_lines.append(line)

new_styles = """
/* ── NEW HOMEPAGE STYLES ── */
:root {
  --bricks-font-stack: "SF Pro Display", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", system-ui, sans-serif;
  --b-bg: #F6F7F8;
  --b-bg-elevated: #FFFFFF;
  --b-surface-shadow: #E7ECEF;
  --b-text: #0B0F14;
  --b-text-2: #55626E;
  --b-text-3: rgba(11,15,20,0.38);
  --b-border: rgba(11,15,20,0.06);
  --emboss-raised: 12px 12px 24px var(--b-surface-shadow), -12px -12px 24px #FFFFFF;
  --emboss-recessed: inset 6px 6px 12px var(--b-surface-shadow), inset -6px -6px 12px #FFFFFF;
  --emboss-soft: 4px 6px 16px var(--b-surface-shadow), -2px -2px 6px #FFFFFF;
}
[data-theme="dark"] {
  --b-bg: #0B0F14;
  --b-bg-elevated: #12181F;
  --b-surface-shadow: #05080B;
  --b-text: #F2F5F7;
  --b-text-2: #8A96A2;
  --b-text-3: rgba(242,245,247,0.4);
  --b-border: rgba(255,255,255,0.08);
  --emboss-raised: 12px 12px 24px #05080B, -12px -12px 24px #161D25;
  --emboss-recessed: inset 6px 6px 12px #05080B, inset -6px -6px 12px #161D25;
  --emboss-soft: 4px 6px 16px #05080B, -2px -2px 6px #161D25;
}

body { background: var(--b-bg); color: var(--b-text); transition: background 0.4s ease, color 0.4s ease; overflow-x: hidden; }

/* Reveal on scroll */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); }
.reveal.in { opacity: 1; transform: translateY(0); }
.reveal-d1 { transition-delay: 0.08s; }
.reveal-d2 { transition-delay: 0.16s; }
.reveal-d3 { transition-delay: 0.24s; }

@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal.in { transform: none !important; transition: none !important; }
}

@keyframes kenburns {
  0% { transform: scale(1) translate(0,0); }
  100% { transform: scale(1.08) translate(2%, -1%); }
}
"""

with open("styles.css", "w") as f:
    f.writelines(new_lines)
    f.write(new_styles)

with open("Website Redesign/Homepage.html", "r") as f:
    html = f.read()

# remove standard styles blocks
html = re.sub(r'(?s)<style>.*?</style>', '', html)
# add link rel
html = html.replace('</title>\\n<meta', '</title>\\n<link rel="stylesheet" href="styles.css">\\n<meta')

with open("index.html", "w") as f:
    f.write(html)
