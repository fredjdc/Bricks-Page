---
design:
  tokens:
    colors:
      palette:
        off-white: "#F6F7F8"
        white: "#FFFFFF"
        cool-gray-light: "#E7ECEF"
        cool-gray-medium: "#C9D3DA"
        cool-gray-dark: "#9AA7B2"
        near-black: "#0B0F14"
        slate-gray: "#55626E"
        dark-blue-gray: "#12181F"
        deep-black: "#05080B"
        midnight-gray: "#161D25"
      functional:
        light:
          background: "#F6F7F8"
          surface: "#FFFFFF"
          shadow: "#E7ECEF"
          text-primary: "#0B0F14"
          text-secondary: "#55626E"
          text-tertiary: "rgba(11, 15, 20, 0.38)"
          border: "rgba(11, 15, 20, 0.06)"
        dark:
          background: "#0B0F14"
          surface: "#12181F"
          shadow: "#05080B"
          text-primary: "#F2F5F7"
          text-secondary: "#8A96A2"
          text-tertiary: "rgba(242, 245, 247, 0.4)"
          border: "rgba(255, 255, 255, 0.08)"
      accents:
        scan:
          base: "#00A6A1"
          vivid: "#00C7B2"
        calc:
          base: "#007AFF"
          vivid: "#2E90FF"
        leads:
          base: "#FF9500"
          vivid: "#FFAD33"
        amber: "#F59E0B"
    typography:
      family:
        brand: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", system-ui, sans-serif'
      sizes:
        display: 56px
        hero: 48px
        title: 36px
        subtitle: 22px
        body: 18px
        metadata: 14px
        eyebrow: 12px
      weights:
        black: 900
        bold: 700
        semibold: 600
        medium: 500
        regular: 400
      letter-spacing:
        tight: "-0.035em"
        normal: "-0.02em"
        wide: "0.12em"
      line-height:
        compact: 1.02
        loose: 1.6
    spacing:
      sm: 32px
      md: 64px
      lg: 96px
      container: 1100px
      reading: 720px
    radii:
      small: 12px
      inner: 24px
      primary: 48px
      pill: 100px
    elevation:
      light:
        raised: "12px 12px 24px #E7ECEF, -12px -12px 24px #FFFFFF"
        recessed: "inset 6px 6px 12px #E7ECEF, inset -6px -6px 12px #FFFFFF"
        soft: "4px 6px 16px #E7ECEF, -2px -2px 6px #FFFFFF"
      dark:
        raised: "12px 12px 24px #05080B, -12px -12px 24px #161D25"
        recessed: "inset 6px 6px 12px #05080B, inset -6px -6px 12px #161D25"
        soft: "4px 6px 16px #05080B, -2px -2px 6px #161D25"
    motion:
      expo-out: "cubic-bezier(0.16, 1, 0.3, 1)"
      spring: "cubic-bezier(0.175, 0.885, 0.32, 1.15)"
      reveal: "cubic-bezier(0.2, 0.8, 0.2, 1)"
---

# Design System: Bricks Soft-Emboss

Bricks is a suite of focused, calm tools for real estate agents. The design language, **Soft-Emboss**, is a monochromatic bas-relief aesthetic that prioritizes clarity, tactile feedback, and a premium "Apple-native" feel.

## Visual Philosophy

### 1. Bas-Relief Depth (Soft-Emboss)
The signature look of Bricks is the "Soft-Emboss" effect. Instead of relying on borders or flat surfaces, the UI uses light and shadow to simulate a physical material that has been molded or pressed. 
- **Raised elements** appear to lift toward the user with a light source from the top-left, creating a soft shadow on the bottom-right and a subtle highlight on the top-left.
- **Recessed elements** appear to be pressed into the surface, with shadows and highlights reversed.

### 2. The Calm Aesthetic
The palette is intentionally restrained, using "Cool Neutrals" to create a quiet, professional environment. This "calm" philosophy ensures that the user's focus remains on the data and the task at hand. Color is never decorative; it is strictly functional, used as a "Product Accent" to distinguish the different apps in the suite.

### 3. Apple-Native Premium Feel
Bricks is built specifically for users on Apple devices. The design honors this by:
- **Typography**: Utilizing SF Pro Display with extreme weights (900/Black) and tight negative tracking (-0.035em) for headers, creating a bold, modern, and high-end editorial look.
- **Radii**: Employing generous corner radii (up to 48px) that mirror the hardware industrial design of modern iPhones and iPads.
- **Glassmorphism**: Using high-blur, high-saturation glass backdrops for navigation elements to maintain spatial context.

## Core Components

### The Bas-Relief Card
The primary container for content. It uses the `raised` elevation token to "float" above the background. The card itself is the same color as the background, relying entirely on shadow for definition.

### The Floating Header
A pill-shaped navigation bar that "floats" above the content. It uses `backdrop-filter: blur(20px) saturate(180%)` to create a premium glass effect. It is designed to be "aware" of the user's focus, hiding during downward scrolls to maximize screen real estate and reappearing instantly on upward flick.

### Product Accent System
Each tool in the Bricks suite has a dedicated accent color that serves as its visual identity:
- **Bricks Scan**: Teal (`#00A6A1`) — evoking precision and organization.
- **Bricks Calc**: Blue (`#007AFF`) — mirroring the native iOS Calculator app and financial tools.
- **Bricks Leads**: Orange (`#FF9500`) — suggesting energy and action for follow-ups.

## Motion & Interaction
Motion is a core part of the "alive" feel of Bricks:
- **Reveal**: Content doesn't just appear; it "reveals" itself with a smooth slide-and-fade using a custom `expo-out` curve.
- **The "Press" Effect**: Interactive elements like buttons and cards provide tactile feedback by "pressing" into the surface on click (switching from `raised` to `recessed` elevation and scaling down slightly).
- **Parallax Imagery**: Product screenshots often sit within a depth-field, moving slightly as the user scrolls to emphasize the multi-layered nature of the UI.
