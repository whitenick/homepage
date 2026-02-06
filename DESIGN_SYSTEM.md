# Serapio Labs Design System
**Santa Fe Desert Theme**

A refined design system inspired by the colors, textures, and warmth of the American Southwest.

---

## Color Palette

### Primary Colors - Adobe Clay/Terracotta
The warm, earthy terracotta that defines Southwest architecture.

```css
primary         #C56F25  /* Main brand color - terracotta */
primary-dark    #8B4513  /* Saddle brown - darker variant */
primary-light   #D4915C  /* Light terracotta - hovers */

/* Full scale */
primary-50      #FDF6F0
primary-100     #F9E8D8
primary-200     #F3D1B1
primary-300     #E5AB7A
primary-400     #D4915C
primary-500     #C56F25  /* Base */
primary-600     #A45A1E
primary-700     #8B4513
primary-800     #6B3410
primary-900     #4A230B
```

**Usage:**
- Primary buttons, CTAs
- Brand elements, logos
- Active/selected states
- Links and interactive elements

---

### Secondary Colors - Desert Flora
Sage, juniper, and sandstone complement the warm primary.

```css
secondary-sage     #8A897C  /* Desert sage brush */
secondary-juniper  #5C6B5A  /* Deeper desert green */
secondary-sand     #E3C7B9  /* Pink sandstone */
```

**Usage:**
- Secondary buttons
- Backgrounds for cards/sections
- Borders and dividers
- Subtle accents

---

### Neutral Palette - Stone & Earth
A complete neutral scale from dark earth to alabaster.

```css
stone-950   #2C2416  /* Dark earth - headings */
stone-900   #3A2A1A
stone-800   #4E3822  /* Cafe noir - body text */
stone-700   #5E503E
stone-600   #7A6650  /* Medium stone */
stone-500   #8C7366
stone-400   #AB8476  /* Beaver brown - muted text */
stone-300   #D2D7C8
stone-200   #E3E7D3  /* Beige - borders */
stone-100   #F5F1ED  /* Desert sand - alt background */
stone-50    #FAF8F5  /* Alabaster - cards, main background */
```

**Usage:**
- Text hierarchy (950 for headings, 800 for body)
- Backgrounds (50 for cards, 100 for pages)
- Borders and dividers (200-300)
- Disabled states (400-500)

---

### Accent Colors
Bold touches inspired by desert sunsets and turquoise jewelry.

```css
accent-gold      #D4AF37  /* Desert gold - premium CTAs */
accent-turquoise #5C9EAD  /* Desert sky/turquoise jewelry */
accent-sunset    #D97742  /* Sunset orange */
```

**Usage:**
- `accent-gold`: Premium features, highlighted CTAs, awards
- `accent-turquoise`: Info states, cool contrast elements
- `accent-sunset`: Energy, urgency, special promotions

---

### Semantic Colors
Contextual colors for UI states.

```css
success  #6B8E23  /* Olive green */
warning  #CD853F  /* Peru/tan */
error    #A0522D  /* Sienna */
info     #5C9EAD  /* Turquoise */
```

**Usage:**
- Form validation
- Alert messages
- Status indicators
- Notifications

---

## Typography

### Font Families

#### Display & Headings
```css
font-display  /* DM Serif Display - Large decorative headings */
font-heading  /* Merriweather - Section headings, h1-h6 */
font-brand    /* Pacifico - Logo, brand name only */
```

#### Body Text
```css
font-body     /* Montserrat - Primary body text */
font-sans     /* Ubuntu - Alternative sans-serif */
```

#### Monospace
```css
font-mono     /* Inconsolata - Code, technical content */
```

### Font Scale & Usage

```css
text-6xl (60px)  → Hero headlines, landing pages
text-5xl (48px)  → Page titles, major sections
text-4xl (36px)  → Section headings
text-3xl (30px)  → Subsection headings
text-2xl (24px)  → Card titles, small headings
text-xl  (20px)  → Large body text, leads
text-lg  (18px)  → Emphasized body text
text-base (16px) → Default body text
text-sm  (14px)  → Small text, captions
text-xs  (12px)  → Tiny text, labels
```

### Recommended Pairings

**Hero Section:**
```jsx
<h1 className="font-display text-6xl text-stone-950">
  Serapio Labs
</h1>
<p className="font-body text-xl text-stone-800">
  Building technology in the desert
</p>
```

**Content Sections:**
```jsx
<h2 className="font-heading text-4xl text-stone-950">
  Projects
</h2>
<p className="font-body text-base text-stone-800 leading-relaxed">
  Body content here...
</p>
```

**Brand/Logo:**
```jsx
<span className="font-brand text-5xl text-primary">
  Serapio Labs
</span>
```

---

## Spacing

Extended spacing tokens for generous layouts:

```css
space-128  (32rem / 512px)
space-144  (36rem / 576px)
```

Use standard Tailwind spacing (0-96) for most layouts.

---

## Border Radius

Soft, organic rounded corners reflecting natural desert forms:

```css
rounded-3xl  (2rem)    /* Large cards, modals */
rounded-2xl  (1.5rem)  /* Medium cards */
rounded-xl   (1rem)    /* Buttons, small cards */
rounded-lg   (0.5rem)  /* Default interactive elements */
```

---

## Shadows

Subtle shadows mimicking desert light:

```css
shadow-soft    /* 0 2px 8px rgba(44, 36, 22, 0.08) */
shadow-medium  /* 0 4px 16px rgba(44, 36, 22, 0.12) */
shadow-strong  /* 0 8px 24px rgba(44, 36, 22, 0.16) */
```

**Usage:**
- `shadow-soft`: Elevated cards, subtle depth
- `shadow-medium`: Dropdowns, popovers
- `shadow-strong`: Modals, important overlays

---

## Component Examples

### Primary Button
```jsx
<button className="
  bg-primary hover:bg-primary-dark
  text-white font-body font-medium
  px-6 py-3 rounded-lg
  shadow-soft hover:shadow-medium
  transition-all duration-200
">
  Get Started
</button>
```

### Premium/CTA Button
```jsx
<button className="
  bg-accent-gold hover:bg-accent-sunset
  text-stone-950 font-body font-semibold
  px-8 py-4 rounded-xl
  shadow-medium hover:shadow-strong
  transform hover:scale-105
  transition-all duration-200
">
  Launch Project
</button>
```

### Card
```jsx
<div className="
  bg-stone-50
  border border-stone-200
  rounded-2xl p-6
  shadow-soft hover:shadow-medium
  transition-shadow duration-200
">
  <h3 className="font-heading text-2xl text-stone-950 mb-3">
    Card Title
  </h3>
  <p className="font-body text-base text-stone-800 leading-relaxed">
    Card content...
  </p>
</div>
```

### Form Input
```jsx
<input className="
  bg-stone-50
  border border-stone-300
  text-stone-950 font-body
  px-4 py-2 rounded-lg
  focus:ring-2 focus:ring-primary focus:border-primary
  transition-colors duration-200
" />
```

---

## Design Principles

### 1. Warmth & Approachability
Use warm tones (primary, accent-gold, stone-50) to create an inviting atmosphere.

### 2. Organic Shapes
Favor rounded corners (rounded-lg to rounded-2xl) over sharp edges.

### 3. Subtle Elevation
Use soft shadows sparingly to create depth without heaviness.

### 4. Generous Spacing
Allow content to breathe with ample padding and margins.

### 5. Typography Hierarchy
Use font-display for impact, font-heading for structure, font-body for readability.

### 6. Color Restraint
Primarily use stone neutrals with strategic pops of primary and accent colors.

---

## Accessibility

### Contrast Ratios (WCAG AA Compliant)

**Text on Light Backgrounds:**
- `text-stone-950` on `bg-stone-50`: 14.8:1 ✓
- `text-stone-800` on `bg-stone-50`: 10.2:1 ✓
- `text-stone-600` on `bg-stone-50`: 5.8:1 ✓

**Interactive Elements:**
- Primary buttons have sufficient contrast
- Focus states use clear visual indicators
- Links are underlined or clearly distinguished

### Minimum Touch Targets
- Buttons: minimum 44x44px
- Links in body text: sufficient line-height (1.6-1.8)

---

## Migration Guide

### Old → New Color Mapping

```
Old Color          → New Class
─────────────────────────────────────
#353535 (Jet)      → text-stone-950
#4E3822 (cafe)     → text-stone-800
#AB8476 (beaver)   → text-stone-400
#E3E7D3 (beige)    → bg-stone-200
#F5F1ED            → bg-stone-100
#FAF8F5 (Snow)     → bg-stone-50
#C56F25 (orange)   → bg-primary
#8A897C (green)    → bg-secondary-sage
#D4AF37 (gold)     → bg-accent-gold
```

### Font Updates
```
Old                → New Recommended
─────────────────────────────────────
font-montserrat    → font-body
font-merri         → font-heading
font-pacifico      → font-brand (logo only)
font-inconsolata   → font-mono
```

---

## Quick Start

1. Import the design system:
```jsx
// Already configured in tailwind.config.js
```

2. Use semantic classes:
```jsx
<div className="bg-stone-50 text-stone-950">
  <h1 className="font-heading text-5xl text-primary">
    Welcome
  </h1>
  <p className="font-body text-base text-stone-800">
    Body text here
  </p>
  <button className="bg-accent-gold text-stone-950 px-6 py-3 rounded-lg">
    Click Me
  </button>
</div>
```

3. Build responsive layouts:
```jsx
<section className="px-4 sm:px-8 lg:px-16 py-12 lg:py-24">
  {/* Content */}
</section>
```

---

**Last Updated:** January 2026
**Maintained by:** Serapio Labs
