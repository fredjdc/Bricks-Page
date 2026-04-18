# Bricks Apps — Design System

A focused design system for **Bricks**, a suite of native Apple apps for real estate professionals. Three products share one visual language; only a single accent color changes per app.

| Product | What it does | Accent | Hex |
|---|---|---|---|
| **Bricks** (umbrella) | Parent brand, marketing, main site | Dark / Black | `#0B0F14` |
| **Bricks Scan** | Document scanning with AI auto-organization and on-device search | Teal | `#00A6A1` (web: `#00C7B2`) |
| **Bricks Calc** | Mortgage calculator for agents, built for on-the-spot modeling | Blue | `#007AFF` |
| **Bricks Leads** | Clean CRM for real estate agents — leads, follow-ups, schedule | Orange | `#FF9500` |

**One rule:** everything else — material, typography, spacing, shadow system, voice — is identical across products. Only the accent slot changes.

---

## Sources

These are the materials this system was derived from. Paths are informational; a downstream reader may or may not have access.

- **Brand docs** (in this project under `uploads/`)
  - `uploads/brand-foundation.md` — story, personality, archetypes, core design principles
  - `uploads/brand-system.md` — the canonical brand system doc
- **GitHub repos** (`fredjdc/*`, imported where relevant)
  - `fredjdc/Bricks-Page` — marketing site. Source of `styles.css` (Soft-Emboss system), the umbrella logos, Scan feature icons, iconography patterns.
  - `fredjdc/Bricks-Scan` — SwiftUI app for iOS / iPadOS / macOS (document scanning + AI). ~200 Swift files.
  - `fredjdc/Bricks-Calc` — SwiftUI mortgage calculator app. Includes `AppTheme.swift`.
  - `fredjdc/Bricks-Leads` — SwiftUI CRM app. Includes `MeshGradients.swift`, layouts for Client/Property/Schedule.
  - `fredjdc/Bricks-Leads-Page` — marketing site for Leads. Source of Leads logos.

> The referenced `fredjdc/Bricks-Documentation` repo was not accessible to this agent; if it exists and is connected later it should supersede anything here that conflicts.

---

## Contents (manifest)

```
/
├── README.md                 ← you are here
├── SKILL.md                  ← agent-invocable skill definition
├── colors_and_type.css       ← all design tokens as CSS vars + semantic roles
│
├── assets/                   ← logos, icon sets
│   ├── bricks-dark-logo.svg, bricks-light-logo.svg, bricks-dark-2xlogo.svg
│   ├── Leads-Logo.svg, leads-full-logo.svg
│   ├── checkmark.svg, globe-icon.svg, more-info-icon.svg, apple-icon.svg
│   ├── icon-instagram.svg, icon-linkedin.svg, icon-x.svg
│   └── feature-icon-01..07.svg, icon-section5.svg, icon-section7.svg
│
├── preview/                  ← small HTML cards rendered in the Design System tab
│
└── ui_kits/
    ├── website/              ← marketing site kit (Soft-Emboss, monochrome + 1 accent)
    ├── scan/                 ← Bricks Scan iOS app kit
    ├── calc/                 ← Bricks Calc iOS app kit
    └── leads/                ← Bricks Leads iOS app kit
```

---

## Content Fundamentals

**Voice** — Bricks speaks like a thoughtful, capable person: clear, calm, useful, refined. Product-focused, not promotional.

**Tone calibration** (from brand docs): Formal 40 · Playful 20 · Emotional 35 · Promotional 15 · Expressiveness 30 · Clarity 95. Clarity always wins.

**Copy formula.** Three steps, in order:
1. State what it does.
2. Say why it matters.
3. Stop.

**Voice pillars (non-negotiable).**
- Clear, not clever — no wordplay that reduces clarity
- Helpful, not pushy — no urgency tactics, no "you should"
- Confident, not hypey — avoid superlatives unless provable
- Human, not performative — no forced friendliness, no trend slang
- Practical, not abstract — focus on outcomes the user can recognize
- Refined, not ornamental — elegance through restraint

**Second person.** "You" / "your" — but sparingly. Often the sentence is better without a pronoun.

**Casing.** Sentence case for everything — headings, buttons, labels. No TITLE CASE. No ALL CAPS except short eyebrow labels (e.g. `COMING SOON`) with tracked letter-spacing.

**Emoji.** None. Not in UI, not in marketing. Unicode symbols only when functional (`↓`, `·`, checkmarks rendered as SVG not glyphs).

**Signature pattern — "Short Stack".** One action per line, three lines, no punctuation. Used as hero copy, social, app store.
```
Scan documents
Search instantly
Stay organized
```

**Words to prefer.** Scan · Find · Organize · Search · Keep · Save · Ready · Private · On your device · Automatic · Clear · Calm · Simple · Organized

**Words to avoid.** Transform · Revolutionize · Unlock · Supercharge · Seamless · Powerful (unless tied to a specific function) · Cutting-edge · Magical · Delightful · Game-changing · Effortless · Next-level · Best-in-class

**Before / after.**
- ❌ "Advanced AI-powered document organization system" → ✅ "Your scans organize themselves."
- ❌ "Enterprise-grade privacy with cutting-edge on-device AI" → ✅ "Everything stays on your device."
- ❌ "Your document has been successfully processed!" → ✅ "Ready"
- ❌ "Upgrade now to unlock the full experience" → ✅ "Remove limits. Keep everything organized."

**Channel discipline.**
- **Product UI:** ultra-concise. "Ready." not "Your scan has been processed."
- **App Store:** slightly more expressive, still restrained. Ground every benefit in a real outcome.
- **Website:** most room for narrative. Still minimal — explain philosophy without abstraction.
- **Social:** most human tone, never trendy, never hypey.

**Litmus test before shipping copy.** Is this trying to impress or explain? Can it be said in fewer words? Any word unnecessary? Any hidden hype? Would a real person say this?

---

## Visual Foundations

**Identity language.** Called **Soft-Emboss** (monochrome bas-relief). The entire brand is a single calibrated material — an off-white plane with soft, cool-neutral shadows that make every surface feel pressed into or raised out of one continuous sheet.

**Color philosophy.**
- Base is cool-neutral — `#F6F7F8` canvas with shadows trending `#E7ECEF → #C9D3DA → #9AA7B2`.
- No warm grays. No beige. No sepia.
- Text is near-black `#0B0F14` on light, never pure `#000`.
- The product accent appears **once per asset**, as a recessed inlay or a thin highlight — never as a dominant fill. Most of a page/screen contains no accent at all.
- No color gradients on objects. No glow. No neon.

**Type.** SF Pro across everything. Web falls back to `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif`. Display weights go heavy (900) with `-0.03em` tracking; body stays at 400 with `1.6` leading. Code uses SF Mono. No decorative or display typefaces — ever.

> **Font substitution flag.** SF Pro ships with Apple devices but is license-restricted for static webfont hosting. This system has no `fonts/` folder. If the output will be viewed on non-Apple devices and you need an exact match, the closest free substitute is **Inter** (Variable). Flag this when doing so. No TTFs were included in the source repos.

**Spacing.** 8 pt grid (`--bricks-space-*`: 8 · 16 · 32 · 64 · 96 · 120). Native apps use SwiftUI spacing constants; web mirrors them.

**Radii — three-tier family.**
- `12px` small details (chips, feature icon containers, list items)
- `24px` inner cutouts, buttons, form fields
- `48px` primary silhouette — hero cards, screenshot frames, large wells

**Shadow system — bas-relief, not drop shadows.** Two directional shadows per surface:
- Raised: `12px 12px 24px #E7ECEF, -12px -12px 24px #FFFFFF`
- Recessed (well): `inset 6px 6px 12px #E7ECEF, inset -6px -6px 12px #FFFFFF`
- Soft (cards, icons): `4px 6px 16px #E7ECEF, -2px -2px 6px #FFFFFF`
- Primary dark button: traditional `0 12px 32px rgba(11,15,20,.24)` — the only non-emboss shadow, reserved for the one high-priority CTA.

**Backgrounds.** Mostly the flat `#F6F7F8` canvas. The umbrella marketing hero is the one exception — a full-bleed editorial photograph desaturated to ~72%, brightened down to 62%, with a film-grain SVG overlay at 3% opacity and a slow Ken-Burns pan. Hero content uses `section-hero::before` layered dark gradients and a teal `rgba(0,166,161,0.08)` radial bloom top-right. No stock illustration. No geometric decoration.

**Animation.**
- Easings: `--bricks-ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)` for most reveals; `--bricks-ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.15)` for playful moments (rare).
- Reveal: `translateY(20px) → 0` over 0.8s, staggered via `delay-100…delay-400`.
- Ambient loops: hero image "breathes" over 14–30 s. Float on decorative icons: 6s up-down, 10 px amplitude.
- No bounces on primary interactions. No rotation. No scale-in pops.
- All motion respects `prefers-reduced-motion: reduce`.

**Hover state.** Cards: `translateY(-6px)` + increase shadow. Buttons: shadow amplifies. Links: `opacity: 0.7`. Navigation: animated bottom underline, `width: 0% → 100%`, 0.28 s.

**Press / active state.** Emboss flips inside-out — the raised surface becomes recessed. `box-shadow: var(--bricks-emboss-recessed)` + `transform: scale(0.97) translateY(0)` + 0.1s transition. This is the hallmark feedback of the whole system.

**Borders.** Effectively absent on raised surfaces (the shadow pair does the job). Thin `1px` cool-neutral borders (`var(--bricks-depth-plane)` or `rgba(255,255,255,0.4)` on cards) only where needed for definition against a dark field or glass surface.

**Transparency & blur.** Used sparingly. Navigation header uses frosted glass (`rgba(255,255,255,0.65)` + `backdrop-filter: blur(20px)`). Modal backdrops use `rgba(11,15,20,0.4)` + `blur(8px)`. Never apply blur to content — only chrome.

**Cards.** Radius 48 px, background `#F6F7F8`, raised emboss shadow, no visible border on light, soft 1 px inner highlight from white. On a dark hero, cards become frosted glass (62% white + saturation-boosted backdrop blur).

**Hero imagery.** Full-bleed photography only on the umbrella page. Desaturated, darkened, with grain. Product pages use flat canvas + product screenshots, no backgrounds.

**Product screenshots.** Rendered at device size, radius 48 px to match frame, dropped onto the canvas with shadow `0 12px 24px rgba(0,0,0,0.08)` — a traditional drop (exception to the emboss rule) because they're standing proud of the surface.

**Layout rules.** Max content width 1100 px, reading width 720 px. Gutter 24 px. Fixed floating header in a pill shape, 24 px from top, 48 px inset. No full-width nav bar.

**Iconography.** See `ICONOGRAPHY` below.

---

## Iconography

**Approach.** Hand-crafted SVG icons designed specifically for the brand — warm, embossed, slightly chunky. They mirror the Soft-Emboss material: you'll see cool-gray soft shadows inside the SVGs themselves. No icon font. No Lucide/Heroicons/Feather. No emoji. No unicode-as-icon.

**In this project** (`assets/`):
- **Logos** — `bricks-dark-logo.svg`, `bricks-light-logo.svg`, `bricks-dark-2xlogo.svg` (umbrella); `Leads-Logo.svg`, `leads-full-logo.svg` (Leads product mark); App icons per-product live inside each app's `Assets.xcassets` (not exported as SVG).
- **Utility icons** — `checkmark.svg`, `globe-icon.svg` (language picker), `more-info-icon.svg` (CTA glyph), `apple-icon.svg` (App Store badge).
- **Social** — `icon-instagram.svg`, `icon-linkedin.svg`, `icon-x.svg`.
- **Feature illustrations** — `feature-icon-01.svg` through `feature-icon-07.svg`: these are richer illustrated icons used on product pages (Scan specifically) — they carry the Soft-Emboss look with gentle shading. Prefer these for feature grids. `icon-section5.svg`, `icon-section7.svg` are larger illustrative moments.

**Inside the native apps.** The Swift codebases use `SF Symbols` (e.g. `Image(systemName: "doc.text.magnifyingglass")`) for all in-app iconography. This is Apple's system icon font and adapts automatically to weight, color, and dynamic type. On web recreations, we substitute the nearest SF Symbol clone as inline SVG, stroke-based, 1.5 px weight.

**Rules for new icons.**
- Filled or stroke (1.5 px), never both in the same set.
- Cool-neutral color only — `currentColor` bound to text tokens; the accent color is applied at most once per screen as a background tint behind a neutral icon.
- No gradients inside icons. No drop shadows inside icons.
- Match existing feature icons' radius vocabulary — circles and the `r1-small` (12 px) square only.
- For emoji-like gesture (reactions, status), use SF Symbols or the existing feature set. No 😀.

---

## Further reading

- `colors_and_type.css` — copy into any artifact; everything below is built on it
- `ui_kits/website/index.html` — marketing site kit
- `ui_kits/scan/index.html` — iOS app kit for Bricks Scan
- `ui_kits/calc/index.html` — iOS app kit for Bricks Calc
- `ui_kits/leads/index.html` — iOS app kit for Bricks Leads
- `SKILL.md` — agent-invocable summary

