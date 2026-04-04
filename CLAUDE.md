# Bricks Page — Claude Context

Bricks Page is the static marketing website for Bricks Apps at bricks.pe. It contains product pages for Bricks Scan, Bricks Calc, and Bricks Leads, plus legal, support, and help pages. No build system — pure HTML, CSS, and JavaScript.

---

## Read These First

Before editing any web content, read these:

1. [`Bricks-Documentation/website/overview.md`](../Bricks-Documentation/website/overview.md) — what the site covers
2. [`Bricks-Documentation/brand/brand-foundation.md`](../Bricks-Documentation/brand/brand-foundation.md) — brand voice and personality
3. [`Bricks-Documentation/brand/brand-system.md`](../Bricks-Documentation/brand/brand-system.md) — visual system, colors, typography
4. [`docs/dev-guide.md`](./docs/dev-guide.md) — site structure and deployment

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
- Do not add copy that contradicts product positioning — check `Bricks-Documentation/bricks-[product]/positioning.md` before writing product descriptions.

---

## Product & Brand Context

For brand voice: [`Bricks-Documentation/brand/brand-foundation.md`](../Bricks-Documentation/brand/brand-foundation.md)

For product positioning: [`Bricks-Documentation/bricks-scan/positioning.md`](../Bricks-Documentation/bricks-scan/positioning.md), [`Bricks-Documentation/bricks-calc/positioning.md`](../Bricks-Documentation/bricks-calc/positioning.md)
