# Bricks Apps — Unified Visual System
**System Name:** Bricks Soft-Emboss (Monochrome Bas-Relief)  
**Primary Goal:** One cohesive brand language across iOS apps, App Store, website, social, onboarding, and feedback visuals.  
**Brand Signal:** Quiet luxury + tactile clarity. Everything looks pressed into (or gently raised from) a premium off-white surface.  
**Accent Rule:** **#00A6A1 is the ONLY color accent** and appears **exactly once per asset** (or once per screen for complex compositions).

---

## 0) How to Use This Spec (AI Workflow)
When generating or updating any asset:
1. **Identify asset type** (icon, UI screenshot, social image, website hero, feedback board, illustration).
2. **Apply global constraints** (palette, material, lighting, shadow).
3. **Choose composition pattern** for the asset type (defined below).
4. **Insert the single teal accent** once (placement logic below).
5. **Run QC checklist** before finalizing (end of doc).

---

## 1) Brand Foundations

### 1.1 Keywords
- Premium, minimal, systematic
- Calm, confident, “tool you trust”
- Tactile but not playful
- High legibility at small sizes

### 1.2 Non-Negotiables
- **No extra colors** beyond neutrals + **#00A6A1**
- No glow, neon, or gradients on objects
- No noisy micro-details, no text on icons
- One light direction for the whole ecosystem (top-left)

---

## 2) Color System

### 2.1 Accent
- **Teal Accent:** `#00A6A1`
- Use as a **recessed insert / inlay** (never as light/glow).
- Exactly once per icon or single-object asset.
- For complex screens/illustrations: prefer **once per screen**.

### 2.2 Neutrals (Cool Only)
- Off-white base: `#F6F7F8`
- White: `#FFFFFF`
- Cool gray (surface shadow): `#E7ECEF`
- Cool gray (depth plane): `#C9D3DA`
- Cool gray (edge definition): `#9AA7B2`
- Near-black (UI text): `#0B0F14`
- Secondary text gray: `#55626E`

### 2.3 Color Rules
- No warm grays, no beige, no cream.
- Shadows stay neutral/cool (no colored shadows).
- Teal never appears twice.

---

## 3) Material + Depth Model (Variant C)

### 3.1 Material
- Matte ceramic/polymer
- Extremely subtle microtexture (nearly invisible)
- No glossy highlights

### 3.2 Depth Style
- **Soft-emboss bas-relief:** raised/debossed forms with subtle depth
- Avoid full 3D realism; keep it “designed,” not rendered-heavy

### 3.3 Bricks Signature Detail
- **Micro-groove seam** on every object (tiny recessed manufacturing line)
- Seam is subtle: visible at medium size, not noisy at small sizes

---

## 4) Lighting + Shadow

### 4.1 Lighting
- Key light: **top-left**
- Fill: soft, low-contrast
- Ambient occlusion: subtle where forms meet

### 4.2 Shadow
- Single shadow direction: **down-right**
- Soft shadow: small offset, large blur, low opacity
- No double shadows, no hard edges

### 4.3 Background Lighting
- Background is off-white studio sweep OR transparent
- Optional: very subtle vignette to focus attention

---

## 5) Shape Language

### 5.1 Geometry Rules
- 2–3 defining features max
- Chunky, friendly radii
- No thin fragile parts; avoid hairlines

### 5.2 Corner Radius Family (Consistency)
Use one radius family across all assets:
- **R1:** small details
- **R2:** inner cutouts
- **R3:** primary silhouette (largest)

### 5.3 Perspective
- Default: **straight-on bas-relief** (recommended for system consistency)
- If isometric is used for a specific series, it must be used **everywhere in that series** (never mixed).

---

## 6) Teal Accent Placement Logic (System-Wide)
**Accent must be #00A6A1 exactly once**, applied as:
- recessed plate
- inset strip
- notch fill
- small pill insert
- single facet insert (for gem-like forms)

**Placement by category:**
- **Utility objects** (document, folder, trash, tag): teal insert in **lower-right quadrant**
- **Inspect/search** (magnifier): teal insert on **handle underside/end cap**
- **Capture/scan** (scanner): teal insert on **scan bar/button area**
- **Badges** (crown/rocket/gem): teal insert on **one jewel/fin/facet only**
- **UI components** (sliders/toggles): teal on **one knob only**

---

## 7) Typography (for UI, Website, Social, Screenshots)
*(Use when text is required; do not put text on icons.)*

### 7.1 Typeface Direction
- Clean, modern, highly legible
- Prefer iOS-native feel for app content
- Headlines: neutral, minimal, not “techy loud”

### 7.2 Typesetting Rules
- Large headings, generous line-height
- Avoid all-caps unless labeling micro UI
- Keep emphasis through weight/scale, not color
- Use teal sparingly: only for one key highlight per composition (or none)

---

## 8) Layout System (Universal Composition Patterns)

### 8.1 Grid + Spacing
- Use an 8pt grid logic
- Prefer generous negative space
- Align to a consistent baseline grid when text exists

### 8.2 Composition Patterns (Pick One Per Asset)
1. **Centered Hero Object** (single icon/illustration)
2. **Stacked Cards** (UI + layered depth)
3. **Split Layout** (text left, object right)
4. **Feature Trio** (3 equal modules, consistent icon scale)
5. **Screenshot Frame** (device frame + minimal callouts)

### 8.3 Do / Don’t
- Do: bold silhouette, consistent depth
- Don’t: clutter, multiple focal points, repeated accents

---

## 9) Asset Specifications by Category (Prompts + Rules)

# 9A) In-App Icons (App UI)
**Purpose:** Functional symbols in app UI, must read small.

**Rules**
- Single object only
- 2–3 features max
- Off-white/gray bas-relief
- Teal accent once

**Prompt Template**
> “Create an in-app icon for Bricks Apps in Variant C: soft-emboss monochrome bas-relief on off-white. Matte premium material, extremely subtle microtexture, clean minimal geometry, 2–3 defining features. Add the Bricks micro-groove seam. Use #00A6A1 exactly once as a recessed inlay (no glow). Lighting: soft studio, key top-left, single soft shadow down-right. Background: transparent or #F6F7F8. Centered with generous padding. No text.”

---

# 9B) App Store Icons
**Purpose:** Brand recognition + premium feel at small size.

**Rules**
- Same object language as in-app icons
- Slightly stronger silhouette and depth
- Off-white tile background allowed (still monochrome)
- Teal once

**Prompt Template**
> “Design an App Store icon for Bricks Apps using Variant C: monochrome soft-emboss bas-relief on an off-white tile. Matte premium finish, subtle depth, minimal geometry, bold silhouette. Bricks micro-groove seam detail. Use #00A6A1 exactly once as a recessed inlay. Lighting top-left, single soft shadow down-right. Background #F6F7F8 with subtle vignette. No text, no extra colors.”

---

# 9C) App Store Screenshots (iOS)
**Purpose:** Communicate value quickly, consistent brand.

**Rules**
- Screenshots sit on off-white background
- Device frames optional but consistent across set
- Only one teal accent per screenshot (or per set if you want ultra-minimal)
- Callouts use neutral text; teal used sparingly

**Composition Options**
- **Phone centered + headline above**
- **Phone left + benefit bullets right**
- **Multi-screen carousel** (3 screens staggered)

**Prompt Template**
> “Create an App Store screenshot composition for Bricks Apps in Variant C. Background off-white #F6F7F8 with subtle vignette. Place iPhone UI screenshot(s) as primary focus with clean spacing. Add minimal callouts in near-black #0B0F14 and secondary gray #55626E. Use #00A6A1 exactly once as a small highlight (single underline, pill, or icon accent). Keep everything calm, premium, and highly legible. No extra colors.”

---

# 9D) Website (Hero, Features, Sections)
**Purpose:** Brand story + product clarity.

**Rules**
- Off-white base, neutral UI cards, bas-relief objects as visuals
- Use teal once per section max (or once per page for very premium feel)
- Strong hierarchy, generous spacing

**Hero Patterns**
1. Headline + Subhead + CTA + embossed hero object
2. Split hero: copy left, product mock right
3. Centered hero with stacked cards behind

**Prompt Template**
> “Design a website section for Bricks Apps in Variant C: off-white base #F6F7F8, monochrome embossed UI cards, and a single bas-relief hero object. Matte premium look, soft shadows down-right, lighting top-left. Typography clean and modern, high legibility. Use #00A6A1 exactly once as a subtle highlight (CTA fill or small underline). No additional colors.”

---

# 9E) Global Website Headers & Navigation
**Purpose:** Consistent navigation across all subpages.

**Rules**
- Use `<header class="container site-header">` without `sticky` positioning.
- Include the logo on the left.
- Include a simple language switcher button on the right, styled with `.btn.btn-secondary`.
- Text-only language switcher (e.g., `Español`); **do not** include material symbol icons for the language.

---

# 9F) Social Media Generated Images (Posts, Ads, Stories)
**Purpose:** Fast comprehension + brand consistency in feed.

**Rules**
- Use one composition pattern (center hero, split, or feature trio)
- Strong headline, minimal copy
- One teal accent total
- Keep object count low (1 hero object or 3 small icons max)

**Prompt Template**
> “Create a social media post image for Bricks Apps using Variant C. Off-white background #F6F7F8 with subtle vignette. One primary embossed bas-relief object or UI card. Clean typography in near-black and cool gray. Use #00A6A1 exactly once as a single highlight (small pill, underline, or accent insert). Soft studio lighting top-left, one soft shadow down-right. Premium, minimal, no extra colors.”

---

# 9G) User Feedback Board Images (Feature Requests, Bugs, Praise)
**Purpose:** Friendly but consistent; avoid playful color.

**Rules**
- Use paired symbols sparingly (two icons max)
- Keep forms chunky and soft
- Teal once (often on one symbol only)

**Prompt Template**
> “Create a user feedback board icon image for Bricks Apps in Variant C. Two simple embossed symbols on off-white. Matte bas-relief, soft shadows, minimal detail. Bricks micro-groove seam. Use #00A6A1 exactly once as a recessed inlay on one symbol only. No extra colors, no text.”

---

# 9H) Onboarding Graphics
**Purpose:** Explain features quickly, in the same material world as the app.

**Rules**
- Embossed UI frames/cards
- One focal element
- Teal once per screen
- No tiny UI details; keep it symbolic

**Prompt Template**
> “Create an onboarding illustration for Bricks Apps in Variant C: embossed UI card(s) on off-white #F6F7F8, minimal placeholders (no readable text). Soft studio lighting top-left, single soft shadow down-right. Add one bas-relief object that matches the feature theme. Use #00A6A1 exactly once as a recessed insert. Calm, premium, minimal.”

---

## 10) Subject Library (Naming + Constraints)
Use this list to keep icon meanings consistent.

### Core Utility Subjects
- Document (fold corner)
- Folder (tab + opening)
- Tag (hole + simple contour)
- Trash (cylinder + 2–3 grooves)
- Magnifier (thick ring + handle)
- Scanner device (slot + scan bar)

### Badge / Status Subjects
- Crown (chunky, 3 points max)
- Rocket (simple silhouette)
- Gem (few facets)

### Feedback Subjects
- Heart, thumbs-up
- Bug, warning triangle
- Puzzle piece
- Phone + laptop
- Controls panel (sliders/toggles)

---

## 11) Output Requirements (Always Specify)
- Background: **transparent** or **#F6F7F8**
- No text on icons
- No extra objects
- Clean edges, professional finish
- Consistent shadow direction and softness

---

## 12) Quality Control Checklist (Run Before Final)
- [ ] Teal (#00A6A1) used **exactly once**
- [ ] Neutrals are cool; no warm tones
- [ ] Soft-emboss bas-relief (not heavy 3D)
- [ ] Key light top-left; shadow down-right
- [ ] 2–3 defining features only
- [ ] Bricks micro-groove seam present but subtle
- [ ] Silhouette readable at small sizes
- [ ] No text on icons; no patterns; no glow

---

## 13) Prompt Assembly Template (Fill-In Form)
Use this to generate any new asset quickly:

**ASSET TYPE:** (in-app icon / app store icon / screenshot / website hero / social post / onboarding / feedback)  
**SUBJECT:** (single object or scene)  
**COMPOSITION PATTERN:** (center hero / split / stacked cards / trio / screenshot frame)  
**ACCENT PLACEMENT:** (where the single teal insert goes)  
**BACKGROUND:** (transparent or #F6F7F8)  
**NOTES:** (avoid X, emphasize Y)

**FINAL PROMPT:**
> “Create [ASSET TYPE] for Bricks Apps using Variant C: soft-emboss monochrome bas-relief on off-white. Matte premium material, extremely subtle microtexture, minimal geometry, 2–3 defining features. Include the Bricks micro-groove seam. Use #00A6A1 exactly once as a recessed inlay at [ACCENT PLACEMENT] (no glow). Lighting: soft studio, key top-left, single soft shadow down-right. Composition: [COMPOSITION PATTERN], generous negative space, crisp edges, professional. Background: [BACKGROUND]. No extra colors, no patterns, no text unless required for the asset type (if text is required, keep it minimal, near-black/gray only).”