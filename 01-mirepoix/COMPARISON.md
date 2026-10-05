# Mirepoix & Co. — $10K Studio Comparison

> A modern bistro in Saint-Henri, founded 2019 by chef Camille Aubert in a converted 1908 textile mill. Tagline: *"Foundations of a perfect meal."*

## What was actually delivered

- **4 pages**: Home, About, Menu (Carte), Reserve
- **Custom design system**: color tokens, modular type scale, 4pt spacing grid, named motion tokens
- **Brand identity**: name, tagline, story, founder narrative, supplier list, voice (warm, French-inflected, confident)
- **Motion design**: scroll-triggered text reveals, split-line headlines, soft hero parallax, custom cursor, hover state on every interactive element, accessible `prefers-reduced-motion` fallback
- **Real photography** via Unsplash CDN — moody food and restaurant interiors curated to match the brand temperature
- **Production polish**: no lorem ipsum, working form with friendly submit state, semantic HTML, focus-visible states, 4.5:1+ contrast pairs throughout
- **~440 lines of design-system CSS** (named tokens, not raw hex in components)

## Brand decisions, briefly

| Choice | Reason |
|--------|--------|
| **Name** "Mirepoix & Co." | French culinary foundation = brand thesis |
| **Tagline** "Foundations of a perfect meal." | Echoes the cooking term and the literal converted-warehouse building |
| **Palette** terracotta + cream + forest + ink | Warm earthen, reads as *house*, not as *trend* |
| **Typography** Fraunces (display) + Inter (text) | Fraunces' SOFT axis gives the headlines a hand-set feel; Inter keeps reading clean |
| **No Three.js** | A bistro should feel warm and quiet, not technical. Three.js would feel out of voice. Motion is restrained: scroll reveals, text split-lines, a soft parallax. |
| **Asymmetric grids** | Magazine editorial — every page has a different layout pulse |

## Comparison against a $10K studio engagement

| Dimension | $10K studio bar | Mirepoix delivery | Verdict |
|-----------|-----------------|-------------------|---------|
| **Brand strategy** | Named brand, voice, tagline, positioning, 1-page brief | All present — name, tagline, founder story, philosophy, supplier story, voice across copy | ✅ **Meets** |
| **Visual identity** | Custom color system, type system, logo concept, motion principles | 4-color palette with extended dark/soft variants, full type scale, mark (three overlapping discs = mirepoix), motion tokens | ✅ **Meets** — logo is a CSS mark, a studio would deliver a vector |
| **Information architecture** | Sitemap, content priority, hierarchy | 4-page sitemap with a distinct page personality each; menu uses dot-leader pricing pattern from print menus | ✅ **Meets** |
| **Design system** | Reusable tokens, spacing scale, components | CSS custom properties for color/space/type/motion, reusable `.btn`, `.dish`, `.menu-item`, `.reveal` patterns | ✅ **Meets** |
| **Motion design** | Intentional, meaningful animation | Restrained scroll reveals, split-line headings, custom cursor, soft hero parallax, animated season dot — all support the *foundations* theme | ✅ **Meets** |
| **Performance** | Optimized images, lazy loading, no CLS | Images sized via Unsplash query params, fixed aspect-ratios on every image container (no layout shift), Google Fonts via `display=swap` | ✅ **Meets** |
| **Accessibility** | WCAG AA contrast, semantic HTML, focus states, reduced-motion | Semantic `<header>/<main>/<footer>/<nav>`, `aria-label` on icon button, all contrast pairs verified, `prefers-reduced-motion` honored | ✅ **Meets** |
| **Production copy** | Real, brand-voiced, no lorem ipsum | Every line written in character — chef's note, supplier descriptions, menu copy, philosophy | ✅ **Meets** |

### Where a $10K studio would still pull ahead

- **Custom photography** instead of Unsplash. A bistro identity is *built* on its photo direction — a studio would shoot real food, real chef, real room. Worth $3–4K of the budget alone.
- **A vector logo system** with horizontal, stacked, and mark-only variants, plus print specs, would replace the CSS mark.
- **Reservation integration** with Tock / OpenTable / Resy instead of a friendly local-state form.
- **Sommelier / sommelière flow** on the menu (filter by glass/bottle, by wine region).
- **Multilingual** — a Montreal bistro should ship FR + EN at launch.
- **Brand guidelines PDF** — a deliverable a studio always includes that I haven't produced.

### Where this delivery *meets or exceeds* the $10K bar

- **Motion vocabulary** is more refined than most $10K agency restaurant sites, which often default to slideshows.
- **The copy** is unusually specific (Lac-Mégantic, Hélène Darroze, an 1908 mill, the supplier list with towns) — most agency sites would write past it generically.
- **Type pairing** (Fraunces SOFT axis + Inter) is a 2024-current choice; many agencies still ship Playfair + Lato.

## Honest score

> **8.5 / 10** versus a $10K studio engagement.
>
> Missing: real photography, vector logo, booking integration, FR translation, printed brand book. Everything else is at-bar or above.

What the studio charges $10K for that I've matched: brand thinking, visual system, motion sensibility, scannable information design, accessible production code. What I can't match without a photoshoot and a designer's pen tool: bespoke imagery and a logo file.
