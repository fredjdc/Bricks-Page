# Bricks Website — Development Guide

## Overview

The Bricks marketing website is a static site (HTML/CSS/JS). No build system or framework — files are served directly. The site lives at bricks.pe.

---

## Site Structure

| File / Folder | Purpose |
|---|---|
| `index.html` | Home page |
| `bricks-scan.html` | Bricks Scan product page |
| `bricks-calc.html` | Bricks Calc product page |
| `bricks-leads.html` | Bricks Leads product page |
| `about.html` | About page |
| `help.html` | Help / FAQ |
| `support.html` | Support contact |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms of service |
| `purchase-guide-01.html` | Purchase flow guide |
| `survey.html` | User survey |
| `thank-you.html` / `thank-you-feedback.html` | Confirmation pages |
| `purrfect-yarn.html` | Purrfect Yarn product page |
| `styles.css` | Global stylesheet |
| `scripts.js` | Global JavaScript |
| `hero-background.js` | Hero section background animation |
| `images/` | Shared images and icons |
| `images-bricks-scan/` | Bricks Scan screenshots and assets |
| `images-bricks-calc/` | Bricks Calc screenshots and assets |
| `images-bricks-leads/` | Bricks Leads screenshots and assets |
| `apple-app-site-association` | Universal links configuration |
| `robots.txt` | Crawler configuration |
| `sitemap.xml` | SEO sitemap |

---

## Design Conventions

Follow the Bricks brand system exactly. See [`Bricks-Documentation/brand/brand-system.md`](../Bricks-Documentation/brand/brand-system.md) for the full spec.

Key rules for the web:

- **No hardcoded hex colors** — use CSS custom properties or the system color values defined in brand-system.md
- **Monochromatic base** — restrained use of color; accent colors are product-specific (Scan = Teal, Calc = Blue, Leads = Orange)
- **Soft-Emboss visual language** — subtle shadows and surface depth; no heavy borders or sharp contrasts
- **SF Pro typography** — use system font stack that resolves to SF Pro on Apple devices
- **No ornamental copy** — brand voice is clear, calm, practical. State what it does, why it matters, stop

---

## Adding or Updating a Product Page

1. Follow the structure of an existing product page (e.g., `bricks-scan.html`)
2. Use the same section order: hero → features → screenshots → download CTA
3. Update `sitemap.xml` if adding a new page
4. Place product-specific images in the matching `images-[product]/` folder
5. Verify `robots.txt` does not block the new page

---

## Universal Links

`apple-app-site-association` and `apple-app-site-association.json` configure universal links for Bricks apps. These files must be served without any file extension at `/.well-known/apple-app-site-association` and should not be modified without coordinating with the app developers. The `_headers` file configures response headers for hosting (e.g., content-type for the AASA file).

---

## Deployment

The site is static. Deploy by pushing to the hosting provider. No build step required.

After deploying:
- Verify universal links still work by testing a deep link on device
- Verify `sitemap.xml` is accessible
- Check that `apple-app-site-association` is served correctly (Content-Type: `application/json`, no extension in the URL)
