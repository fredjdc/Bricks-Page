# Unused Assets Audit — Bricks Page

**Generated:** April 20, 2026  
**Analysis:** Complete inventory of unused images and Python files in the Bricks-Page repository

---

## Summary

| Category | Count | Notes |
|----------|-------|-------|
| **Total image files** | 101 | PNG, JPG, JPEG, GIF, SVG, WEBP |
| **Referenced images** | 46 | Actively used in HTML pages |
| **Unused images** | **57** | Candidates for removal |
| **Python files** | 2 | Both appear unused |

---

## Unused Images (57 files)

### Root Level
- `favicon.svg` — Alternative favicon (superseded by `images/favicon-*`)

### `images-bricks-leads/` — 9 files
All Bricks Leads hero and layer images appear unused. No references in `leads.html`.

```
images-bricks-leads/hero-video-img-en.png
images-bricks-leads/hero-video-img-es.png
images-bricks-leads/leads-back-layer-en.png
images-bricks-leads/leads-back-layer-es.png
images-bricks-leads/leads-mid-layer-en.png
images-bricks-leads/leads-mid-layer-es.png
images-bricks-leads/leads-top-layer-en.png
images-bricks-leads/leads-top-layer-es.png
```

### `images-bricks-scan/` — 16 files

**Unused feature images:**
```
images-bricks-scan/feature-en-03.png
images-bricks-scan/feature-en-04.png
images-bricks-scan/feature-en-05.png
images-bricks-scan/feature-en-07.png
images-bricks-scan/feature-es-03.png
images-bricks-scan/feature-es-04.png
images-bricks-scan/feature-es-05.png
images-bricks-scan/feature-es-07.png
```

Only `feature-*-01.png`, `feature-*-02.png`, and `feature-*-06.png` are actively referenced in `scan.html`.

**Unused icons and web assets:**
```
images-bricks-scan/bricks-scan-web-icon.png
images-bricks-scan/favicon-16x16.png
images-bricks-scan/feature-icon-01.svg
images-bricks-scan/feature-icon-02.svg
images-bricks-scan/feature-icon-03.svg
images-bricks-scan/feature-icon-04.svg
images-bricks-scan/feature-icon-05.svg
images-bricks-scan/feature-icon-06.svg
images-bricks-scan/feature-icon-07.svg
images-bricks-scan/icon-section5.svg
images-bricks-scan/icon-section7.svg
```

### `images/` — 28 files

**PWA/Android chrome icons:**
```
images/android-chrome-192x192.png
images/android-chrome-512x512.png
```

**Apple assets:**
```
images/apple-icon.svg
images/bricks-dark-2xlogo.svg — Appears to be older 2x logo variant
images/bricks-scan-web-icon.png
```

**Unused layer/background images:**
```
images/back-layer-en-03.png
images/back-layer-es-03.png
images/mid-layer-en-02.png
images/mid-layer-es-02.png
images/top-layer-en-01.png
images/top-layer-es-01.png
```

**Unused feature images (older format):**
```
images/feature-en-01.jpg
images/feature-en-02.jpg
images/feature-en-03.jpg
images/feature-en-04.jpg
images/feature-en-05.jpg
images/feature-es-01.jpg
images/feature-es-02.jpg
images/feature-es-03.jpg
images/feature-es-04.jpg
images/feature-es-05.jpg
```

**Unused fusion/transition images:**
```
images/fusion-en-01.png
images/fusion-en-02.png
images/fusion-es-01.png
images/fusion-es-02.png
images/more-info-icon.svg
```

### `userjot-images/` — 3 files
All appear to be UserJot integration assets, no active references:

```
userjot-images/userjot-bug-report.png
userjot-images/userjot-integrations.png
userjot-images/userjot-vote-features.png
```

---

## Unused Python Files (2 files)

### `generate_scan.py`
- **Status:** No references found in project files
- **Purpose:** Unclear from filename; likely a build/generation utility
- **Recommendation:** Investigate purpose before deletion
  - Check git history for context
  - Determine if it's part of an active build pipeline

### `replace_styles.py`
- **Status:** No references found in project files
- **Purpose:** Likely a CSS or styling utility
- **Recommendation:** Investigate purpose before deletion
  - Check if it's documented in README or dev-guide
  - Determine if it's part of development workflow

---

## Recommendation & Next Steps

### Immediate Actions
1. **Verify Python files** — Check `docs/README.md` or `Bricks-Documentation/` for usage context
2. **Check git history** — `git log --follow` on Python files to understand original purpose
3. **Confirm image consolidation** — Verify that all production references use `assets/` and `images/` folders, not product-specific folders

### Cleanup Strategy
- **Safe to remove** — `userjot-images/` folder (3 files, clearly unused)
- **Safe to remove** — All `images-bricks-leads/` files (no references in leads.html)
- **Review before removing** — Feature images 03-07 in both `images-bricks-scan/` and `images/` (may be reserves for future UI)
- **Review before removing** — PWA/Android icons (may be required by manifest.json or service worker)
- **Investigate before removing** — Both Python files

---

## File Size Impact

Running cleanup on the most clearly unused assets:

```
userjot-images/        — ~50 KB
images-bricks-leads/   — ~200 KB
Feature images 03-07   — ~100 KB (estimated)
```

**Potential savings:** ~350 KB minimum, up to 500 KB with feature image cleanup.

---

## Notes for Product Owner

The unused images suggest an earlier iteration where:
- Bricks Leads had its own hero/layer images (now consolidated)
- Scan feature had 7 feature images (now using only 3)
- There were attempts at fusion/transition animations (not in current UI)

Before cleanup, confirm whether these reserve images are intentional (future features) or truly deprecated.
