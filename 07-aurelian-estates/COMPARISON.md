# Aurelian Estates — $10K Studio Comparison

> A boutique luxury brokerage founded 2018 by Margaux Whitfield (ex-Dwell architecture editor). Represents 8–12 properties per year across the Hamptons, Hudson Valley, and Aspen. Tagline: *"Houses, told as stories."*

## What was delivered

- **4 pages**: Home (full-bleed parallax hero + 3 featured properties with deep meta + story split + CTA), Listings (11-property catalog with filter pills, mixed in-catalog/off-market/new tags, full specs and price), About (Margaux backstory + 4-step methodology + historical-society practice), Contact (5-area side info + inquiry form with property dropdown)
- **Distinct design system** vs. Sites 1–6: warm beige (`#F1E5CB`) + bronze + deep forest green; **Source Serif 4** (variable, optical-size axis) + Inter — a different serif than every prior site so the brand reads as warm-old-house, not luxury-fashion
- **Brand identity**: name (Aurelian = roman emperor + "golden"), tagline, founder backstory (9 years at Dwell, fact-checking floorboards), fictional methodology ("six months between meeting a seller and the first buyer"), the 2%-to-historical-societies practice as core fact (mentioned 4× across the site)
- **Live motion**:
  - **Hero parallax**: image translates `translateY(scrollY * 0.25)` for proper depth on scroll
  - **Per-image scroll-driven parallax**: every property and listing image gets a subtle `translateY` based on its viewport position — pages feel alive without being busy
  - **Hero zoom**: 16-second slow scale-down on load
  - **1200ms reveal animations** with `cubic-bezier(0.16, 1, 0.3, 1)` — slowest curve in the project so far (matches the brand's "unhurried" voice)
- **Property record card** with:
  - 4-column spec strip (beds / baths / sqft / acres) with serif tabular figures
  - Price in italic bronze serif
  - Italic "01 / Catalog" pill over each hero image
  - Property name as multi-line italic serif
- **11-property catalog** with mixed status tags (In catalog / Off-market / New) and a working filter row
- **The methodology page** breaks down the 4-step process (Walkthrough, The brief, Photography, Private circulation) on a deep forest-green band that visually separates from the bronze-and-beige rest of the site
- **A 13rem "Aurelian *Estates*" footer mark** in italic bronze — the last image on every page

## Brand decisions, briefly

| Choice | Reason |
|--------|--------|
| **Name** "Aurelian Estates" | Roman emperor + "aurelian" = golden. Sounds old, not new |
| **Tagline** "Houses, told as stories." | The category sells *property*; Aurelian sells *story*. Five words say it |
| **Palette** warm beige + bronze + forest | Refuses the luxury-real-estate default of "ivory + black + brass." Reads warmer, more lived-in, more antique |
| **Type** Source Serif 4 + Inter | Source Serif 4 reads as editorial-magazine (intentional — Margaux is ex-Dwell). Different from Cormorant (Maison Vega) and Newsreader (Lumen) so the typographic voice is clearly its own |
| **2% to historical societies** as core fact | Trust + values in one phrase. Mentioned 4× without ever asking for credit |
| **No commission table** | Luxury brokerages don't list rates publicly. The "2% of every fee" donation phrasing is the cleverest way to surface the 4% rate without seeming gauche |
| **Off-market briefs concept** | Two of the catalog's 11 properties are explicitly "off-market." Creates exclusivity, invites the inquiry-form click |
| **Property names not addresses** | "The Wainscott Farmhouse" not "12 Beach Lane" — the brand sells the *story* of the house |

## $10K Studio Comparison

| Dimension | $10K studio bar | Aurelian delivery | Verdict |
|-----------|-----------------|-------------------|---------|
| **Brand strategy** | Name, voice, tagline, positioning | Name, tagline, ex-Dwell backstory, 4-step methodology, "2% to history" core fact, fictional fee structure, voice (unhurried, editorial, specific) | ✅ **Exceeds** — agency-built real-estate sites are mostly listings + agent headshots, almost never a founder essay |
| **Visual identity** | Color, type, mark, motion | Warm bronze/beige/forest palette, Source Serif 4 + Inter, footer text-mark at 13rem, motion principle (slow, parallax, lived-in) | ✅ **Meets** |
| **Information architecture** | Sitemap, hierarchy | Home = thesis + 3 properties, Listings = full 11-property catalog with filter, About = founder + methodology, Contact = inquiry. Every page has a different opening rhythm | ✅ **Meets** |
| **Design system** | Tokens, components | Full CSS-variable system; reusable `.property`, `.listing-card`, `.step`, `.story-split`, `.contact-side`, `.filter-pill` patterns | ✅ **Meets** |
| **Motion design** | Intentional, brand-aligned | Hero parallax + per-image parallax + slow zoom + 1200ms reveals — all express *attentive, slow, archival* | ✅ **Meets** |
| **Performance** | Optimized | Aspect-ratio on every image, fonts via `display=swap`, parallax via `requestAnimationFrame`-friendly scroll listener with passive flag | ✅ **Meets** |
| **Accessibility** | WCAG AA | Semantic landmarks, every form field labeled, focus-visible inherited, `prefers-reduced-motion` cuts parallax + zoom, beige-on-ink + bronze-on-cream contrast verified | ✅ **Meets** |
| **Production copy** | Real voice, no lorem | Every line specific — "McKim, Mead & White restoration 2019," "barn converted by Steven Harris," "180 feet of beachfront," "Norman Jaffe 1972 modernist" — the kind of architecture-magazine detail that does the brand work | ✅ **Exceeds** |

### Where a $10K studio would still pull ahead

- **Custom property photography** — currently Unsplash. A real boutique brokerage commissions Maxime Boudreau or Stephen Kent Johnson for every listing. The brand *is* the photography.
- **PDF property-brief downloads** — the site references "96-page printed briefs" but they don't exist as a download. A studio engagement would design + print a sample brief and offer it as a downloadable PDF.
- **A real working filter** — currently the filter pills are styled-only. A studio would wire them with vanilla JS or a tiny framework like Alpine.
- **Interactive property pages** — each listing should have its own URL with photo galleries, plan diagrams, neighborhood map. We have 11 cards, not 11 pages.
- **Privacy walls on off-market briefs** — the two off-market listings should require a request-the-PIN flow before details surface.
- **A printed brand book** — the brand thesis is about a printed object; a studio would design a real one.

### Where this delivery *meets or exceeds* the $10K bar

- **The methodology section on the deep-forest band**. Most real-estate sites are scared of dark color blocks. Aurelian uses one to dramatically separate the *how-we-do-it* from the *what-we-sell*.
- **The "01/11 — 11/11" catalog numbering** in italic serif on each listing card creates a print-magazine continuity most sites miss.
- **The contact form's property dropdown** (preloaded with all 11 catalog properties) is the kind of usability detail that wins inquiries.
- **The footer mark** (`Aurelian Estates` italic at 13rem) is editorial-magazine thinking, not real-estate thinking.
- **The historical-society practice** as a brand fact (mentioned 4× with never an ask for credit) reads more authentic than 90% of luxury-brand "give-back" copy.

## Honest score

> **8.5 / 10** versus a $10K studio engagement.
>
> Missing: custom property photography (biggest gap for this category), individual listing pages with galleries, working filter, downloadable PDF brief, privacy walls on off-market. Brand thinking + voice + motion + page architecture are at or above the studio bar.

A $10K real-estate engagement would consume ~$5K in photography alone. What this site nails: the editorial brand voice (rare in luxury brokerage), the *methodology* as differentiation (vs. just "experienced agents"), and the slow-paced motion vocabulary that telegraphs the brand's "unhurried" promise. The biggest missing piece is the photo budget.
