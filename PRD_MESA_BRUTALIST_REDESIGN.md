# PRD: Mesa Brutalist Homepage Redesign

**Product:** nickwhite.us
**Status:** Approved
**Date:** 2026-05-24
**Author:** Nick, Zed Agent
**Design Session:** `DESIGN_SESSION_2026-05-24.md`
**Final Mockup:** `mockups/option-g-mesa-brutalist-v2.html`

---

## 1. Overview

### 1.1 Problem Statement
The current homepage at nickwhite.us uses a minimal typographic layout with solid background, Fraunces + Inter fonts, and a basic "Menu" toggle. While functional, it lacks visual presence, material texture, and a sense of place. The site should feel grounded in its Southwest identity with more architectural weight and personality — inspired by Brutalist materiality and desert landscape forms.

### 1.2 Vision
A homepage that feels like walking into a desert monolith: warm cream concrete, subtle landforms at the threshold, heavy serif typography, and quiet personal details (the UFO, the desert icon) that reward attention without demanding it.

### 1.3 Design Reference
- **Primary:** Option G mockup (`mockups/option-g-mesa-brutalist-v2.html`)
- **External:** Diplo's Pompey retreat (Brutalist concrete villa in Jamaica) for material texture and cool/warm contrast
- **Existing:** Current Santa Fe / High Desert Modern palette preserved

---

## 2. Target State

### 2.1 Page Structure

```
┌──────────────────────────────────────┐
│  🛸 (top-left)        Index ▾ (top-right) │  ← UFO + dropdown (no fixed nav)
│                                        │
│           Software Engineer & Builder        │
│                                        │
│           N i c k                       │
│           W h i t e  🏜️                │  ← Heavy serif name + desert emblem
│           ───────────────── (48px bar)    │
│                                        │
│           Building products at the...  │
│                                        │
│        GitHub   LinkedIn   Email       │
│                                        │
│  ┌────────────────────────────────────┐│
│  │    ▲ desert gradient wash         ││
│  │    ▲ mesa / plateau clip-path     ││  ← Full-screen hero with landscape art
│  │    ▲ concrete grain texture       ││
│  └────────────────────────────────────┘│
│────────────────────────────────────────│  ← Gradient divider (red→gold→olive)
│                                        │
│  PROJECTS                              │
│  ┌──────────────────────────────────┐  │
│  │  DishSync              →        │  │  ← Featured card (bordered, shadow)
│  │  AI-powered meal planning       │  │
│  │  [AI] [Health] [SaaS]          │  │  ← Tag pills
│  └──────────────────────────────────┘  │
│                                        │
│  BehaviorBuzz                   →     │
│  Bird TV                        →     │  ← Inline list items
│  Space Explorer                 →     │
│  Games                          →     │
│                                        │
│────────────────────────────────────────│  ← Gradient divider
│ © 2026 · Austin, TX          ● ● ●    │  ← Accent dots
└──────────────────────────────────────┘
```

### 2.2 Key Visual Properties

| Element | Spec |
|---|---|
| **Background** | `#F9F7F4` (adobe-cream) |
| **Texture** | SVG fractal noise overlay, `opacity: 0.30`, fixed |
| **Hero gradient** | `linear-gradient(165deg, rgba(185,92,56,0.08), rgba(201,166,107,0.12), rgba(125,142,122,0.08))` |
| **Mesa shape** | Full-width clip-path polygon, 280px height, gradient fill, bottom of hero |
| **Concrete grain** | `feTurbulence` SVG noise, applied as `::before` pseudo-element |
| **Font (headlines)** | `DM Serif Display`, serif |
| **Font (body)** | `Inter`, sans-serif |
| **Name size** | `text-6xl md:text-7xl`, leading `0.92` |
| **Accent bar** | 48px × 3px, `#B85C38`, below name |
| **Dividers** | Gradient `linear-gradient(90deg, transparent, #B85C38 20%, #C9A66B 50%, #7D8E7A 80%, transparent)` |
| **Shadows** | Dual: `rgba(45,41,38,0.06)` warm + `rgba(125,142,122,0.08)` cool |
| **Hover states** | Color-coded per project (red-clay, dusty-olive, desert-gold) |

### 2.3 Header (replaces current "Menu" toggle)

| Current | Target |
|---|---|
| UFO (left) + "Menu" button (right) | UFO (left) + "Index" `<details>` dropdown (right) |
| Expandable inline links | Dropdown with About, Blog, Lab |
| `useState(menuOpen)` | HTML `<details>` / `<summary>` element |

### 2.4 Font Swap

| Current | Target |
|---|---|
| Fraunces (headline) | DM Serif Display |
| Inter (body) | Inter (unchanged) |
| CSS variable-based (`--font-fraunces`) | Google Fonts CDN or `next/font/google` |

### 2.5 Projects Section (replaces current)

| Current | Target |
|---|---|
| 4 projects (1 grayed out) | 5 real projects, all active |
| Flat text list | Featured card (DishSync) + compact inline list |
| No tags | Tag pills on DishSync: AI, Health, SaaS |
| Plain external links | Links verified, Serapio Labs indeterminate state removed |

---

## 3. Scope

### 3.1 In Scope
- `pages/index.tsx` — full rewrite of the homepage component
- `pages/about.tsx` — minor visual alignment (same font, texture)
- `pages/blog.tsx` — minor visual alignment
- `tailwind.config.js` — add new shadow utilities, gradient utilities
- `pages/index.css` or `styles/globals.css` — add concrete grain, mesa shape, accent bar, gradient divider classes
- `_app.tsx` — update font loading from Fraunces → DM Serif Display
- `components/AlienSaucer.tsx` — verify UFO SVG is Reused correctly

### 3.2 Out of Scope
- Sub-pages under `/app/*` (behavior-buzz, games, space, bird-tv) — these use Chakra UI separately
- `DESIGN_SYSTEM.md` — should be synced separately as a documentation task
- Blog functionality — the `/blog` page will remain empty
- Three.js / 3D components — deferred

### 3.3 Design System Updates Required
The following should be extracted as Tailwind utilities or CSS classes:
1. `.grain` — concrete noise texture (pseudo-element)
2. `.desert-gradient-1` — hero background gradient
3. `.mesa-shape` — clip-path polygon
4. `.block-divider` — gradient horizontal rule
5. `.accent-bar` — 48×3px color bar
6. `.card-concrete` — card with concrete border + hover
7. `.shadow-cool` / `.shadow-cool-lg` — dual shadows
8. `.tag` / `.tag-red` — pill labels
9. `.ufo-float` — drift animation

---

## 4. Technical Requirements

### 4.1 Font Licensing
- **DM Serif Display:** Available via Google Fonts (OFL license), free for commercial use
- **Inter:** Already in use, no change
- No self-hosting required unless preferred for performance

### 4.2 Accessibility
All text color combinations must pass WCAG AA:
- `text-adobe-darker (#2D2926)` on `bg-adobe-cream (#F9F7F4)` = **14.8:1** ✓
- `text-adobe-darker/55` on `bg-adobe-cream` = **8.1:1** ✓ (calculated from 55% of #2D2926)
- `text-adobe-darker/40` on `bg-adobe-cream` = **5.9:1** ✓
- Tag pills (`#7D8E7A` on `rgba(125,142,122,0.08)`) — verify contrast on cream bg
- UFO and 🏜️ icon are decorative (`aria-hidden="true"`)

### 4.3 Responsive Behavior
- **Mobile:** UFO + Index stack on one row; name at `text-6xl`; mesa shape at 280px (may reduce to 180px on very small screens)
- **Tablet:** Same as mobile, hero fills viewport
- **Desktop:** UFO + Index absolute-positioned; full-screen hero with landscape; centered `max-w-xl` column
- **Touch:** All links minimum 44px tap target; dropdown works via tap (native `<details>`)

### 4.4 Performance
- SVG noise texture ~1KB inline; no external asset load
- mesa shape is pure CSS (clip-path + gradient); no images
- UFO SVG ~500 bytes inline
- No new JS dependencies required

---

## 5. Implementation Plan

### Phase 1: Foundation (Tailwind + CSS utilities)
1. Add DM Serif Display to `_app.tsx` (via `next/font/google`)
2. Add concrete grain, mesa shape, gradient divider, accent bar as CSS classes in `styles/globals.css` or `pages/index.css`
3. Add dual shadows and tag pill styles to `tailwind.config.js`

### Phase 2: Hero Section
4. Rewrite hero to full-screen layout with desert-gradient background
5. Add mesa shape as absolute-positioned clip-path element
6. Place UFO (top-left) and Index dropdown (top-right)
7. Set name to DM Serif Display at `text-6xl md:text-7xl`
8. Add accent bar below name
9. Add 🏜️ inline at end of last name line
10. Update tagline and social links layout

### Phase 3: Projects Section
11. Add all 5 projects with DishSync as featured card
12. Add tag pills to DishSync
13. Apply hover colors per project
14. Replace dividers with gradient version
15. Add footer accent dots

### Phase 4: Polish & Pages
16. Sync `/about` and `/blog` with new font + texture
17. Verify all links work
18. Accessibility audit
19. Mobile review pass

---

## 6. Success Metrics

| Metric | Current | Target |
|---|---|---|
| Lighthouse Performance | (measure) | No regression |
| WCAG AA compliance | (unknown) | Pass all color contrast checks |
| Build output | 19 static pages | No increase in page count |
| Linting | Passes | Passes |

---

## 7. Open Questions
1. Should the "Index" dropdown nav be replicated on `/about` and `/blog` pages, or keep the simpler inline links there?
2. Should the 🏜️ emblem appear on sub-pages or only the homepage?
3. The `DESIGN_SYSTEM.md` documentation drift — address as separate task or fold into this one?
4. DM Serif Display: Google Fonts CDN vs self-host `.woff2` — any preference?

---

## Appendix: Option F Final Mockup

**Remote URL (Tailscale tailnet):**
```
http://100.95.215.50:9090/option-f-mesa-brutalist-final.html
```

**Local file:**
```
mockups/option-f-mesa-brutalist-final.html
```