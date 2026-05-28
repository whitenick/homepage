# Design Session — Mesa Brutalist Direction

**Date:** 2026-05-24
**Participants:** Nick, Zed Agent

---

## 1. Background

The homepage at [nickwhite.us](https://nickwhite.us) was previously restored to real content after a critical error where Santa Fe design mockup placeholder content had overwritten it. The current live site uses the **Santa Fe / High Desert Modern** design with Inter + Fraunces fonts, an adobe-cream background, and a minimal single-column layout with the AlienSaucer component.

A formal design system exists in `DESIGN_SYSTEM.md` (Serapio Labs Santa Fe Desert Theme), but the documented system is **out of sync** with the code — `DESIGN_SYSTEM.md` describes Montserrat/Merriweather/DM Serif Display, while the live code uses Inter/Fraunces.

---

## 2. External Reference: Diplo's Jamaica House "Pompey"

Analyzed the Galerie Magazine article on Diplo's Pompey retreat in Portland, Jamaica — a **Brutalist concrete villa** cantilevered over tropical foliage, designed by Freecell Architecture + Gia Wolff.

| Pompey Characteristic | Alignment with Current Site |
|---|---|
| Raw concrete, honest materials | Weak — site is flat/typographic, no texture |
| Cool/warm contrast (grey concrete × green foliage) | Weak — site is all warm tones |
| Monumental scale and presence | Weak — site is intimate single-column |
| Deep regionalism rooted in landscape | Strong — both are place-rooted |
| Curated art throughout | Weak — only the AlienSaucer SVG |
| Personal creative refuge | Strong — both are personal projects |

**Key takeaway:** The site needed more **texture, mass, and cool-tone contrast** while preserving its warm desert identity.

---

## 3. Mockups Created

### Option B — Minimal Modern Desert (pre-existing)
`mockups/option-b-minimal.html`
- Wide hero layout with **desert gradient backgrounds**
- **Mesa/plateau clip-path shape** at bottom of hero
- Fixed glass nav bar (`.nav-glass`)
- Modern card hover states
- Full-width layout with grid sections

### Option C — Brutalist Desert
`mockups/option-c-brutalist-desert.html`
- **Concrete grain texture** (SVG noise overlay)
- **DM Serif Display** (heavier serif than Fraunces)
- **Cool/warm dual shadows** for depth
- **Gradient accent dividers** (red→gold→olive)
- **3px accent bar** under name
- **Tag pills** on projects for scannability
- Single-column centered layout (like current site)
- UFO + "Index" dropdown header (no nav bar)
- All 5 real projects

### Option D — Warm Monolith
`mockups/option-d-warm-monolith.html`
- **Two-column grid**: fixed left identity panel + scrollable right content
- **Woven ceramic texture** (cross-hatch pattern)
- Left panel gradient with red-clay edge
- Social links as column with animated dot markers
- All 5 projects in a bordered card container

### Option E — Mesa Brutalist (hybrid)
`mockups/option-e-mesa-brutalist.html`
- Merged: Option C's **concrete grain + DM Serif Display** with Option B's **desert gradient + mesa shapes**
- Added: **Glass nav bar**, UFO in upper-right of hero, real bio/all 5 projects
- Full-screen hero landscape + scrollable projects below

### Option F — Mesa Brutalist Final ✓
`mockups/option-f-mesa-brutalist-final.html`
- **Final direction.** Full-screen mesa landscape hero from Option E, but with **Option C's header treatment** (UFO top-left + "Index" dropdown top-right, no fixed nav bar)
- Projects section uses Option C's centered scroll layout

---

## 4. Decision

### Selected: Option F — Mesa Brutalist

We commit to Option F as the new design direction. Rationale:

| Element | Source | Reason |
|---|---|---|
| Full-screen mesa landscape hero | Option E | Creates architectural presence; grounds the page in Southwest landscape; makes a memorable first impression |
| UFO + "Index" dropdown header | Option C | Quieter, more Minimal than a fixed nav bar; preserves the existing AlienSaucer personality |
| Concrete grain texture | Option C | Adds the Pompey-inspired materiality without heavy images |
| DM Serif Display | Option C | Heavier serif gives Brutalist weight and architectural feel vs. Fraunces |
| Cool/warm dual shadows | Option C | Introduces cool-tone contrast against warm adobe-cream base |
| Gradient accent divider | Option C | Clean visual separator with color |
| 3px accent bar under name | Option C | Structural anchor point for the identity block |
| Tag pills on DishSync | Option C | Improves scannability; adds visual hierarchy |
| All 5 real projects | Option E | Completeness; matches FIX_SUMMARY.md |
| Hover colors per project | Option E | Red-clay, dusty-olive, desert-gold — reinforces the palette |
| Centered scroll layout for projects | Option C | Matches the existing site's rhythm; works well after a full-screen hero |

### Not Selected

| Option | Reason |
|---|---|
| Option B as-is | Glass nav bar felt too busy; layout diverged from current structure |
| Option C as-is | No mesa landscape art; too purely typographic |
| Option D | Two-column layout was a bigger structural change than needed; the single-column centered layout is working |
| Option E | Glass nav bar with the full-screen hero was redundant; two layers of navigation competing |

---

## 5. Delta from Current Live Site

If implemented from the current `pages/index.tsx`:

| Aspect | Current Live Site | Option F Target | Impact |
|---|---|---|---|
| Font family | Fraunces (headline) + Inter (body) | DM Serif Display + Inter | Swap `font-headline` → `font-display` |
| Font family CSS | CSS variables (Fraunces) | Google Fonts (DM Serif Display) | Update `_app.tsx` font loading |
| Header | UFO (left) + "Menu" button (right) | UFO (left) + "Index" dropdown (right) | Replace toggle menu with `<details>` dropdown |
| Hero background | Solid `bg-adobe-cream` | Full-screen `desert-gradient-1` + `mesa-shape` | Adds gradient overlay + clip-path element |
| Name size | `text-4xl md:text-5xl` | `text-6xl md:text-7xl` | Larger |
| Accent under name | None | 48px wide, 3px tall red-clay bar | Adds structural element |
| Projects | Mixed external links + grayed-out Serapio Labs | All 5 real projects, DishSync as featured card | Real content, featured card treatment |
| Tag pills | None | `tag` and `tag-red` classes on projects | New component |
| Texture | None | Concrete grain noise overlay | Full-page pseudo-element |
| Shadows | Custom warm shadows (`rgba(200,92,62)`) | Cool/warm dual shadows (`rgba(45,41,38)` + `rgba(125,142,122)`) | More depth and cool contrast |
| Dividers | Plain `h-px` with `border-adobe-light` | Gradient `block-divider` (red→gold→olive) | Colored separator |
| Footer | Plain line + copyright | Gradient divider + accent dots | Slightly richer |

---

## 6. Next Steps

This document will be turned into a **Product Requirements Document (PRD)** followed by **work items / implementation tasks**.

### Immediate follow-ups:
1. **Translate fonts** — Confirm DM Serif Display license/availability for self-hosting vs. Google Fonts CDN
2. **Accessibility check** — Ensure `rgba(..., /55)` and `rgba(..., /40)` text meets WCAG AA contrast on `#F9F7F4`
3. **Mobile review** — Verify the full-screen hero + mesa shape behaves well on small viewports
4. **Component extraction** — The concrete grain, mesa shape, gradient divider, accent bar, tags, and cool shadows should be extracted as reusable Tailwind utilities or CSS classes

### Files created this session:
- `mockups/option-b-minimal.html` (pre-existing)
- `mockups/option-c-brutalist-desert.html`
- `mockups/option-d-warm-monolith.html`
- `mockups/option-e-mesa-brutalist.html`
- `mockups/option-f-mesa-brutalist-final.html`
- `mockups/option-b-minimal.html` (pre-existing)
- `serve/Caddyfile`
- `DESIGN_SESSION_2026-05-24.md` (this file)

### Remote viewing (Tailscale tailnet):
```
http://100.95.215.50:9090/
```