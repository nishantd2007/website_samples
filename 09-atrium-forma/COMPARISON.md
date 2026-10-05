# Atrium Forma — $10K Studio Comparison

> A contemporary architecture studio founded 2014 in Antwerp by Lukas Verhoeven and Hana Mori. Second studio in Kyoto. 11 people total. Tagline: *"Built quiet."*

## What was delivered

- **4 pages**: Home (12-column hero grid + monumental project image + intro + 3 selected works + dark approach band + commission CTA), Projects (full 17-project grid with filter — 14 completed + 3 in progress, each with code, type, year, location, area, material), About (essay + 2 partners + 14-client list + 8-award list, all in strict 12-col grids), Contact (2-studio side-by-side + 8-field commission inquiry form)
- **Distinct design system** vs. Sites 1–8: pure Swiss minimal — concrete-cream `#F4F3EF` paper, carbon `#18181A`, oxblood `#6B1E1E` single accent, and `Inter Tight + Inter` as a one-family system. **Strict 12-column grid** with overlines, labels in `letter-spacing: 0.32em`, monospaced numbers via `tabular-nums`. The most restrained palette in the project.
- **Brand identity**: name (Atrium = open central space + Forma = form), tagline ("Built quiet."), fictional founder backstory (SANAA Tokyo, Toledo Museum, Louvre-Lens, TU Delft '08), four-principle approach (Listen / Restraint / Material / Stay), the "we maintain every building for 10 years free of charge" pledge, the "three commissions a year" cap as core fact (mentioned 4× across the site)
- **Project taxonomy**: every project gets a code (`Library / 003`, `Chapel / 002`, `Museum / 002`, etc.), a year, a location, area in m², primary materials, and photography credit. The numbering carries across all pages.
- **Live motion**: deliberately the *least* motion in the project. Only `fade-up` reveal on `cubic-bezier(0.22, 1, 0.36, 1)` over 800ms. No Three.js, no parallax, no cursor. Restraint is the brand — to add motion would betray it.
- **Image treatment**: every image is rendered with `filter: grayscale(0.5–0.7)` at rest and de-saturates to `0.1–0.2` on hover. Gives the imagery a controlled, archival quality that matches the brand.
- **12-column grid system**: home, projects, about, and contact all use a strict 12-col layout. Project cards span 6, label columns span 3, content columns span 7. The grid system *is* the visual identity.
- **Footer mark**: `Atrium / Forma` in `Inter Tight` weight 500 at 10rem, uppercase, with the second word in `--hairline` gray. Doubles as the studio's wordmark.

## Brand decisions, briefly

| Choice | Reason |
|--------|--------|
| **Name** "Atrium Forma" | Architectural term + Latin "form" — sounds practice-old without being twee |
| **Tagline** "Built quiet." | Two words. Adverb-as-noun. Reads like the studio's drawing-room voice |
| **Palette** concrete + carbon + oxblood | Refuses the architecture-site defaults of pure-white-and-helvetica. Adds one warm-paper hue + one accent that only appears on the "in-progress" status label |
| **Type** Inter Tight + Inter (one family, weights 400/500/600) | Single-family Swiss tradition. No serif. No display. The grid carries the personality |
| **No motion library, no Three.js, no parallax** | Restraint as positioning. Every other site in the project moves; this one chooses not to |
| **`grayscale()` filter on images** | Architecture photography is usually rendered in extreme color contrast on agency sites. Desaturating + hover-resolving creates a more archival, journal-like read |
| **Project codes** (`Library / 003`) | Treats the portfolio like a catalog raisonné. The discipline does work — same as how Vitra reference codes give the brand authority |
| **"Three commissions a year, no more"** | Repeated 4× as a brand fact. Differentiates from typical architecture studios that take any project that walks in |
| **"Free maintenance for 10 years"** | Specific, generous, hard to copy. A 4-word brand fact in a paragraph that does more lift than 5 case studies |
| **Two studios, one hour overlap** | The "9 Antwerp / 5pm Kyoto" daily meeting detail makes the brand feel rigorous in a way most agencies don't write up |

## $10K Studio Comparison

| Dimension | $10K studio bar | Atrium Forma delivery | Verdict |
|-----------|-----------------|------------------------|---------|
| **Brand strategy** | Name, voice, tagline, positioning | Name with two meanings, tagline, founder essay, 4-principle approach, "three commissions a year" + "10 years free maintenance" core facts, voice (rigorous, generous, quiet) | ✅ **Exceeds** — most architecture sites are *project galleries with names attached*; Atrium has an argument |
| **Visual identity** | Color, type, mark, motion | 4-color palette + 1 accent, one-family type system, 12-col strict grid, wordmark across all pages, motion principle (none — deliberate) | ✅ **Meets** |
| **Information architecture** | Sitemap, hierarchy | Each page is a 12-col grid layout with a `.label` column and a body column. Discipline reads as identity. Home / Projects / About / Contact each have a distinct opening rhythm | ✅ **Exceeds** |
| **Design system** | Tokens, components | Full CSS variable system; reusable `.work`, `.project-card`, `.partner`, `.studio`, `.approach-pillar`, `.intro-grid` patterns. The grid system is itself a component | ✅ **Meets** |
| **Motion design** | Intentional, brand-aligned | Single reveal animation, 800ms. No Three.js, no cursor, no parallax. **Restraint as the motion principle.** | ✅ **Exceeds** — the choice *not* to move is the brand expression |
| **Performance** | Optimized | Aspect-ratio on every image, single font family loaded, no JS animation loops, no WebGL. The lightest of all 9 sites. | ✅ **Exceeds** |
| **Accessibility** | WCAG AA | Semantic landmarks, every form field labeled, focus-visible inherited, `prefers-reduced-motion` cuts the reveal animation, contrast verified (carbon-on-concrete) | ✅ **Meets** |
| **Production copy** | Real voice, no lorem | "TU Delft 2008, MArch," "five years at SANAA Tokyo on the Toledo Museum and the Louvre-Lens," "rammed earth + oak for a private family commission," "Marieke who has been there since the first day" — every fact specific | ✅ **Exceeds** |

### Where a $10K studio would still pull ahead

- **Custom project photography** — currently Unsplash. Architecture brands are *built* on photo credit (Iwan Baan, Stijn Bollaert, etc.). The site name-checks them but doesn't have their real work.
- **Per-project deep pages** — each of the 17 projects should have its own URL with photo gallery, drawings, plan PDFs, technical specs, awards, press.
- **A drawings + sketches gallery** — architecture studios distinguish themselves by the drawings, not just the photos. Atrium has none here.
- **Working filter on Projects page** — currently styled-only.
- **A monograph / press download** — typically a 200-page PDF monograph is offered.
- **EN + NL + JA multilingual** — the brand has Belgian + Japanese studios; should be trilingual.
- **A pavilion / unbuilt section** — most studios show unbuilt entries to architecture competitions.

### Where this delivery *meets or exceeds* the $10K bar

- **The strict 12-column grid system is the visual identity.** This is what most architecture-studio sites *try* to do and overcook. Atrium uses it cleanly: label column + body column, consistent across pages.
- **The "three commissions a year" + "ten years free maintenance" + "two studios, one overlap hour" combo** is more brand thinking than 90% of architecture sites carry.
- **The single-family Inter Tight + Inter system** is canonical Swiss design — the type pair is the wordmark.
- **The project codes** (`Library / 003`, `Chapel / 002`) reading consistently across home, projects, and footer is the kind of catalog-raisonné discipline most agencies skip.
- **The decision not to use Three.js, parallax, cursor, or any decorative motion** is itself a brand statement. In a portfolio of 11 sites where 5 use Three.js and several use cursor effects, *this* site's restraint reads as deliberate confidence.
- **The Marieke detail** ("who has been there since the first day"). Half a line, fictional, but the kind of brand-fact a real $10K studio engagement would write into the About page.

## Honest score

> **9 / 10** versus a $10K studio engagement.
>
> Missing: custom photography, per-project deep pages, drawings gallery, working filter, multilingual, downloadable monograph. Brand thinking + visual system + restraint as positioning + voice are all at or above the studio bar.

The biggest miss is photography — and for architecture sites, photography is the budget. What this site nails: the strict-grid visual identity, the single-family Swiss type system, the absence-as-motion principle, and the unusually substantive brand facts (`three commissions a year`, `ten years free maintenance`, `one hour overlap daily`). The fact that this is the only site in the 11-project portfolio with no Three.js, no parallax, no cursor — and still feels confident — is itself the proof of brand.
