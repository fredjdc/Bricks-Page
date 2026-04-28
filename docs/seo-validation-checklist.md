# SEO Validation Checklist

Use this checklist after metadata, schema, sitemap, crawlability, or performance changes.

## Search Console

Submit sitemap:

- `https://bricks.pe/sitemap.xml`

Inspect these URLs:

- `https://bricks.pe/`
- `https://bricks.pe/calc.html`
- `https://bricks.pe/scan.html`
- `https://bricks.pe/leads.html`
- `https://bricks.pe/about.html`
- `https://bricks.pe/help.html`
- `https://bricks.pe/support.html`
- `https://bricks.pe/purchase-guide-01.html`
- `https://bricks.pe/privacy.html`
- `https://bricks.pe/terms.html`
- `https://bricks.pe/survey.html`

For each URL, verify:

- `URL is on Google` for pages that should be indexed
- `User-declared canonical` matches the page canonical
- `Google-selected canonical` matches the intended canonical
- Live fetch succeeds
- Indexing is allowed for pages that should be indexed
- `noindex` is respected for:
  - `https://bricks.pe/thank-you.html`
  - `https://bricks.pe/thank-you-feedback.html`

If needed:

- Use `Request Indexing` after major page updates

Review these reports:

- `Pages`
- `Sitemaps`
- `Core Web Vitals`
- `HTTPS`

Watch for these failures:

- Crawled or discovered but not indexed
- Alternate page with proper canonical
- Duplicate without user-selected canonical
- Soft 404
- Excluded by `noindex`

## Rich Results Test

Run Google Rich Results Test on:

- `https://bricks.pe/`
- `https://bricks.pe/calc.html`
- `https://bricks.pe/scan.html`
- `https://bricks.pe/leads.html`
- `https://bricks.pe/about.html`
- `https://bricks.pe/help.html`
- `https://bricks.pe/support.html`
- `https://bricks.pe/purchase-guide-01.html`
- `https://bricks.pe/privacy.html`
- `https://bricks.pe/terms.html`
- `https://bricks.pe/survey.html`

Confirm:

- JSON-LD parses without errors
- Detected schema types match expectations
- No missing required fields for eligible result types
- Breadcrumbs are detected where expected
- FAQ schema is detected where expected

Expected schema by page:

- `index.html`: `Organization`, `SoftwareApplication`
- `calc.html`: `SoftwareApplication`, `BreadcrumbList`, `FAQPage`
- `scan.html`: `SoftwareApplication`, `BreadcrumbList`, `FAQPage`
- `leads.html`: `SoftwareApplication`, `BreadcrumbList`, `FAQPage`
- `about.html`: `Organization`, `AboutPage`, `BreadcrumbList`
- `help.html`: `CollectionPage`, `BreadcrumbList`
- `support.html`: `ContactPage`, `BreadcrumbList`
- `purchase-guide-01.html`: `Article`, `BreadcrumbList`
- `privacy.html`: `WebPage`, `BreadcrumbList`
- `terms.html`: `WebPage`, `BreadcrumbList`
- `survey.html`: `WebPage`

If warnings appear:

- Decide whether they affect eligibility

If errors appear:

- Fix before considering the rollout complete

## Lighthouse / PageSpeed

Run Lighthouse in Chrome DevTools or PageSpeed Insights for:

- `https://bricks.pe/`
- `https://bricks.pe/calc.html`
- `https://bricks.pe/scan.html`
- `https://bricks.pe/leads.html`
- `https://bricks.pe/help.html`
- `https://bricks.pe/support.html`

Test order:

- Mobile first
- Desktop second

Record these scores:

- Performance
- Accessibility
- Best Practices
- SEO

Check these conditions:

- Valid page title
- Meta description present
- Canonical valid
- Page is indexable when intended
- Links are crawlable
- Images have `alt`
- No obvious excessive JS execution time
- Main-thread blocking time is reasonable
- LCP is acceptable
- CLS is stable
- Total blocking time is reasonable

Pay special attention to:

- Pages still using browser Babel
- Large inline scripts
- Heavy React render cost
- Typeform or other third-party embed pages
- GTM, GA, and Meta Pixel overhead

## Completion Criteria

The rollout is in good shape when:

- Search Console canonical selection matches the intended canonical
- Sitemap is accepted without new coverage issues
- Rich Results Test shows no schema errors
- Lighthouse SEO is strong on core pages
- Mobile performance has no obvious script-related bottlenecks

## Tracking Template

Use a simple tracking table:

| URL | Indexed | Canonical OK | Rich Results OK | Lighthouse SEO | Mobile Performance | Notes | Action Needed |
|---|---|---|---|---|---|---|---|
| `https://bricks.pe/` |  |  |  |  |  |  |  |
| `https://bricks.pe/calc.html` |  |  |  |  |  |  |  |
| `https://bricks.pe/scan.html` |  |  |  |  |  |  |  |
| `https://bricks.pe/leads.html` |  |  |  |  |  |  |  |
| `https://bricks.pe/about.html` |  |  |  |  |  |  |  |
| `https://bricks.pe/help.html` |  |  |  |  |  |  |  |
| `https://bricks.pe/support.html` |  |  |  |  |  |  |  |
| `https://bricks.pe/purchase-guide-01.html` |  |  |  |  |  |  |  |
| `https://bricks.pe/privacy.html` |  |  |  |  |  |  |  |
| `https://bricks.pe/terms.html` |  |  |  |  |  |  |  |
| `https://bricks.pe/survey.html` |  |  |  |  |  |  |  |
