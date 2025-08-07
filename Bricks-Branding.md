# Bricks - Brand Guidelines

## 🎨 Brand Overview

Bricks is a mortgage calculator app designed for the Peruvian market, focusing on simplicity, clarity, and professional financial tools. The brand emphasizes trust, accessibility, and modern design principles.

**Brand Personality:**
- Professional yet approachable
- Modern and clean
- Trustworthy and reliable
- User-friendly and intuitive
- Accessible to all users

---

## 🎯 Color Palette

### Primary Colors
```css
/* Main Brand Blue */
brand: "#007AFF"        /* Primary brand color - Apple Blue */
brand-foreground: "hsl(0 0% 98%)"  /* White text on brand background */

/* Success Colors */
success: "#34C85A"      /* Success green */
success-foreground: "hsl(0 0% 98%)"  /* White text on success background */

/* Accent Colors */
accent: "hsl(240 4.8% 95.9%)"      /* Light gray accent */
accent-foreground: "hsl(240 5.9% 10%)"  /* Dark text on accent background */
```

### Text Colors
```css
foreground: "hsl(240 10% 3.9%)"    /* Primary text - Very dark gray */
muted-foreground: "hsl(240 3.8% 46.1%)"  /* Secondary text - Medium gray */
```

### Background Colors
```css
background: "hsl(0 0% 100%)"           /* Main background - White */
card: "hsl(0 0% 100%)"                 /* Card background - White */
card-foreground: "hsl(240 10% 3.9%)"   /* Card text - Dark gray */
popover: "hsl(0 0% 100%)"              /* Popover background - White */
popover-foreground: "hsl(240 10% 3.9%)" /* Popover text - Dark gray */
```

### Border & Input Colors
```css
border: "hsl(240 5.9% 90%)"        /* Standard border - Light gray */
input: "hsl(240 5.9% 90%)"         /* Input border - Light gray */
ring: "hsl(240 5% 64.9%)"          /* Focus ring - Medium gray */
```

### Additional Colors
```css
secondary: "hsl(240 4.8% 95.9%)"   /* Secondary background - Very light gray */
secondary-foreground: "hsl(240 5.9% 10%)"  /* Secondary text - Dark gray */
destructive: "hsl(0 84.2% 60.2%)"  /* Error red */
destructive-foreground: "hsl(0 0% 98%)"    /* White text on error background */
muted: "hsl(240 4.8% 95.9%)"       /* Muted background - Very light gray */
```

---

## 📝 Typography

### Font Family
- **Primary Font:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700, 800
- **Fallback:** system-ui, sans-serif

### Font Usage Guidelines

#### Headings
```css
/* Hero Title */
text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter

/* Section Headings */
text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl

/* Subsection Headings */
text-xl font-semibold
```

#### Body Text
```css
/* Large Body Text */
text-xl leading-relaxed

/* Standard Body Text */
text-base leading-relaxed

/* Small Text */
text-sm
```

#### Navigation
```css
/* Navigation Links */
text-sm font-medium
```

---

## 🎨 Design Elements

### Shadows

```css
/* Soft Shadow */
shadow-soft: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)"

/* Soft Medium Shadow */
shadow-soft-md: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)"

/* Soft Large Shadow */
shadow-soft-lg: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)"

/* Soft Extra Large Shadow */
shadow-soft-xl: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)"

/* Hover Shadow */
shadow-hover: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
```

### Border Radius
```css
/* Small radius */
rounded-lg    /* 8px */

/* Medium radius */
rounded-xl    /* 12px */

/* Large radius */
rounded-2xl   /* 16px */

/* Extra large radius */
rounded-3xl   /* 24px */

/* Full circle */
rounded-full  /* 50% */
```

### Gradients

#### Hero Background
```css
.bg-gradient-to-b {
    background: linear-gradient(to bottom, from-slate-50 to-white);
}
```

#### Brand Background
```css
.bg-brand {
    background-color: #007AFF;
}
```

---

## 🎭 Component Styles

### Buttons

#### Primary Button
```css
.btn-primary {
    background-color: #007AFF;
    color: white;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    transition: all 0.2s;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

.btn-primary:hover {
    background-color: #0056b3;
}
```

#### Secondary Button
```css
.btn-secondary {
    background-color: hsl(240 4.8% 95.9%);
    color: hsl(240 5.9% 10%);
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    transition: all 0.2s;
}

.btn-secondary:hover {
    background-color: rgba(244, 244, 245, 0.8);
}
```

#### Outline Button
```css
.btn-outline {
    border: 1px solid hsl(240 5.9% 90%);
    background-color: hsl(0 0% 100%);
    color: hsl(240 10% 3.9%);
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    transition: all 0.2s;
}

.btn-outline:hover {
    background-color: hsl(240 4.8% 95.9%);
    color: hsl(240 5.9% 10%);
}
```

### Form Elements

#### Input Fields
```css
.form-input {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid hsl(240 5.9% 90%);
    background-color: hsl(0 0% 100%);
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    transition: all 0.2s;
}

.form-input:focus {
    outline: none;
    border-color: #007AFF;
    box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.25);
}
```

### Cards

#### Feature Cards
```css
.feature-card {
    background: white;
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    border: 1px solid hsl(240 5.9% 90%);
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
```

#### Icon Containers
```css
/* Feature icons */
w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center mb-4

/* Success icons */
w-5 h-5 text-success mr-2 mt-1
```

---

## 🎬 Animations & Interactions

### Floating Animation
```css
.animate-float {
    animation: float 4s ease-in-out infinite;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0.1px);
    }
    50% {
        transform: translateY(-10px);
    }
}
```

### Pulse Animation
```css
@keyframes pulse {
    0%, 100% {
        opacity: 0.3;
        transform: scale(0.97);
    }
    50% {
        opacity: 0.5;
        transform: scale(1);
    }
}
```

### Hover Effects
```css
.hover-lift {
    transition: transform 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-3px);
}
```

### Transitions
```css
/* Standard transition */
transition: all 0.2s

/* Smooth transition */
transition: all 0.3s ease
```

---

## 📱 Layout Guidelines

### Spacing System
```css
/* Section padding */
py-12 md:py-24

/* Container max width */
max-w-7xl mx-auto

/* Grid gaps */
gap-8    /* Cards */
gap-16   /* Hero sections */
gap-12   /* Footer sections */
```

### Responsive Breakpoints
```css
/* Mobile first approach */
sm: 640px   /* Small screens */
md: 768px   /* Medium screens */
lg: 1024px  /* Large screens */
xl: 1280px  /* Extra large screens */
2xl: 1200px /* Custom breakpoint for container */
```

### Grid Layouts
```css
/* Hero section */
grid gap-12 md:grid-cols-2 md:gap-16 items-center

/* Feature cards */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8

/* Pricing cards */
grid grid-cols-1 md:grid-cols-3 gap-8
```

---

## 🎨 Visual Hierarchy

### Text Sizes
```css
/* Hero title */
text-4xl md:text-5xl lg:text-6xl

/* Section headings */
text-3xl sm:text-4xl md:text-5xl

/* Subsection headings */
text-xl

/* Body text */
text-xl (large)
text-base (standard)
text-sm (small)
```

### Icon Sizes
```css
/* Large icons */
text-4xl

/* Medium icons */
text-3xl

/* Small icons */
text-2xl

/* Feature icons */
w-12 h-12
```

---

## 🔧 Technical Implementation

### TailwindCSS Configuration
```javascript
tailwind.config = {
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                DEFAULT: "100%",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1200px",
                "2xl": "1200px"
            }
        },
        extend: {
            colors: {
                border: "hsl(240 5.9% 90%)",
                input: "hsl(240 5.9% 90%)",
                ring: "hsl(240 5% 64.9%)",
                background: "hsl(0 0% 100%)",
                foreground: "hsl(240 10% 3.9%)",
                primary: {
                    DEFAULT: "hsl(240 5.9% 10%)",
                    foreground: "hsl(0 0% 98%)"
                },
                secondary: {
                    DEFAULT: "hsl(240 4.8% 95.9%)",
                    foreground: "hsl(240 5.9% 10%)"
                },
                destructive: {
                    DEFAULT: "hsl(0 84.2% 60.2%)",
                    foreground: "hsl(0 0% 98%)"
                },
                muted: {
                    DEFAULT: "hsl(240 4.8% 95.9%)",
                    foreground: "hsl(240 3.8% 46.1%)"
                },
                accent: {
                    DEFAULT: "hsl(240 4.8% 95.9%)",
                    foreground: "hsl(240 5.9% 10%)"
                },
                popover: {
                    DEFAULT: "hsl(0 0% 100%)",
                    foreground: "hsl(240 10% 3.9%)"
                },
                card: {
                    DEFAULT: "hsl(0 0% 100%)",
                    foreground: "hsl(240 10% 3.9%)"
                },
                brand: {
                    DEFAULT: "#007AFF",
                    foreground: "hsl(0 0% 98%)"
                },
                success: {
                    DEFAULT: "#34C85A",
                    foreground: "hsl(0 0% 98%)"
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"]
            },
            boxShadow: {
                "soft-md": "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                "soft-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
                "soft-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)"
            }
        }
    }
}
```

### CSS Custom Properties
```css
:root {
    --accent-color: #007aff;
    --accent-hover: #0056b3;
    --success-color: #34c85a;
    --animation-timing: 0.3s ease;
    --shadow-soft: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    --shadow-hover: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --radius: 0.5rem;
}
```

### Custom Scrollbar
```css
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #007AFF;
    border-radius: 40px;
}

::-webkit-scrollbar-thumb:hover {
    background: #0056b3;
}
```

---

## 📋 Usage Guidelines

### Do's ✅
- Use the brand blue (#007AFF) for primary actions and branding
- Maintain consistent spacing with the defined system
- Use Inter font family for all text
- Apply hover effects on interactive elements
- Use soft shadows for depth and hierarchy
- Maintain proper contrast ratios for accessibility
- Use rounded corners consistently (rounded-lg, rounded-xl, rounded-2xl)
- Implement smooth transitions (0.2s or 0.3s ease)

### Don'ts ❌
- Don't use colors outside the defined palette
- Don't mix different font families
- Don't skip hover states on interactive elements
- Don't use hard shadows (always use the defined shadow system)
- Don't use border radius values outside the defined system
- Don't use gradients unless specified in the guidelines
- Don't use animations that are too fast or jarring

### Accessibility
- Ensure sufficient color contrast (WCAG AA compliant)
- Use semantic HTML elements
- Provide focus indicators for keyboard navigation
- Maintain readable font sizes (minimum 16px for body text)
- Use proper heading hierarchy (h1, h2, h3, etc.)

---

## 🎯 Brand Consistency

### Design Principles
- **Simplicity:** Clean, uncluttered interfaces
- **Clarity:** Easy-to-understand information hierarchy
- **Trust:** Professional appearance that builds confidence
- **Accessibility:** Inclusive design for all users
- **Modern:** Contemporary design patterns and interactions

### Component Patterns
- **Cards:** Always use rounded corners and soft shadows
- **Buttons:** Consistent padding, border-radius, and hover states
- **Forms:** Clear labels, proper spacing, and focus states
- **Navigation:** Simple, intuitive menu structures
- **Typography:** Consistent font weights and sizes

### File Structure
```
Bricks-Calc-Page/
├── index.html          /* Main landing page */
├── styles.css          /* Custom styles and animations */
├── scripts.js          /* Interactive functionality */
├── images/             /* Brand assets and screenshots */
│   ├── hero-en-us.png  /* Hero mockup */
│   ├── hero-es-pe.png  /* Spanish hero mockup */
│   └── carousel/       /* App screenshots */
├── favicon.ico         /* Site favicon */
└── Bricks-Branding.md  /* This file */
```

---

## 🔄 Version History

### v2.0 (Current)
- Updated to reflect actual implemented styles
- Added comprehensive TailwindCSS configuration
- Included all color variations and semantic naming
- Added detailed component specifications
- Enhanced accessibility guidelines
- Included animation and interaction patterns

### v1.0 (Previous)
- Initial brand implementation
- Basic color and typography guidelines
- Simple component specifications

---

## 🎨 Implementation Notes

### Key Design Decisions
1. **Apple Blue (#007AFF):** Chosen for its association with trust, technology, and accessibility
2. **Inter Font:** Selected for excellent readability and modern appearance
3. **Soft Shadows:** Used to create subtle depth without being overwhelming
4. **Rounded Corners:** Applied consistently to create a friendly, approachable feel
5. **HSL Color System:** Used in Tailwind config for better color manipulation

### Performance Considerations
- Use CSS custom properties for consistent theming
- Implement efficient animations with transform and opacity
- Optimize images and assets for web delivery
- Use semantic HTML for better SEO and accessibility

---

*This document should be updated whenever brand changes are made to maintain consistency across all Bricks products. Last updated: January 2025* 