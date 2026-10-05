# Maison Vega — $10K Studio Comparison

> An Italian–French luxury maison founded 1948 in Milan by Aurelio Vega. Independent through 2026, refused three acquisition offers in four years. Current creative director: Elena Vega. Tagline: *"Quiet luxury, loud convictions."*

## What was delivered

- **4 pages**: Home (full-bleed Aurum campaign + bar marquee + 5-look preview + atelier teaser), Collection (Aurum AW26 lookbook with 12 looks across an irregular editorial grid), Atelier (founder origin + four-chapter timeline + craft + Elena's quote), Contact (4 boutiques + appointment form)
- **Distinct design system** vs. Sites 1–4: black + cream + brushed gold on warm paper, **Cormorant** (variable serif, full weight + italic axis) + **Outfit** sans, generous editorial whitespace, hairline-thin borders, dotted-letter-spaced uppercase overlines, full-bleed cinema imagery
- **Brand identity**: name (Vega = Aurelio's family name), tagline, a deep fictional founder story (Mauthausen survivor, 1948 opening, Anita Ekberg's last dress, Antonioni and Visconti), four-chapter timeline, Elena Vega creative-director quote, "twenty-eight people" core fact
- **Live motion**:
  - **Hero zoom**: 14-second slow scale-from-1.06-to-1 on page load, the kind of cinematic entrance luxury houses pay $$$ for
  - **Custom luxe cursor**: a 24px gold ring + 4px gold dot, with the ring lagging behind the dot, growing to 60px with a subtle gold-fill on interactive elements
  - **Bar marquee** with `letter-spacing: 0.4em` Outfit-sans in muted gold — 50-second loop, much slower than Ferment's
  - **Slow image zooms** (1.8–2s ease) on every look and editorial image
  - **Look hover de-saturation removal** — looks start at `grayscale(0.05)` and resolve to full color on hover
  - **Generous reveal motion**: 1400ms `cubic-bezier(0.16, 1, 0.3, 1)` — much slower than any prior site
- **Irregular lookbook grid** on Collection page: mix of `look-wide` (8 cols), `look-tall` (4 cols × 2 rows with 3:5 portrait), and standard 4-col looks — feels like a print fashion magazine
- **Underline-only form fields** on the appointment form — no boxes, no fills, just hairline gold dividers and gold-soft labels in spaced uppercase
- **The footer** uses a 16rem "Maison **Vega**" mark with italic gold accent — the kind of last-image-on-the-page that a print magazine would close on

## Brand decisions, briefly

| Choice | Reason |
|--------|--------|
| **Name** "Maison Vega" | Italian-French construction, Aurelio's surname; reads as old-house not new-tech |
| **Tagline** "Quiet luxury, loud convictions." | The category is full of "quiet luxury" — adding "loud convictions" inverts and signals editorial brand voice |
| **Palette** Black + cream + brushed gold | The luxury default — but used with restraint: no pure white, no chrome gold, no purple |
| **Type** Cormorant + Outfit | Cormorant carries the editorial display weight; Outfit handles the spaced-uppercase labels that signal couture. Both Google-Fonts free, but read as paid-foundry |
| **Founder backstory in detail** | Specific names (Anita Ekberg, Antonioni, Visconti), specific year (1968), specific street (Via Verri 11) — luxury sells via specificity, not abstraction |
| **"Refused $340M LVMH offer"** subtext | Independence is the active positioning. Said three times across the site without ever using the word "independent" as a tagline |
| **Slow cursor** | A luxe cursor is the digital equivalent of a doorman in white gloves — it telegraphs slowness and care |
| **By-appointment-only architecture** | Every page ends in "request an appointment" — replicates the boutique sales funnel |

## $10K Studio Comparison

| Dimension | $10K studio bar | Maison Vega delivery | Verdict |
|-----------|-----------------|----------------------|---------|
| **Brand strategy** | Name, voice, tagline, positioning | Name, tagline, 1948 origin essay, 4-chapter timeline, Elena Vega quote, "twenty-eight people" + "refused three offers" core facts woven through every page | ✅ **Exceeds** — most fashion brand sites are *image* + minimal copy. We layered editorial prose |
| **Visual identity** | Color, type, mark, motion | 3-color palette with extended tones, Cormorant + Outfit type pair, italic-gold display mark in footer at 16rem, motion principle (slow, cinematic, deliberate) | ✅ **Meets** |
| **Information architecture** | Sitemap, hierarchy | Each page has a unique opening rhythm — Home = campaign cinema, Collection = lookbook grid, Atelier = essay + timeline + craft, Contact = boutique cards + form | ✅ **Exceeds** |
| **Design system** | Tokens, components | Full CSS variable system; reusable `.look`, `.craft`, `.boutique`, `.year`, `.editorial` patterns; consistent overline / lead.serif / italic conventions | ✅ **Meets** |
| **Motion design** | Intentional | Cinematic hero zoom, custom dual-element cursor (ring + dot), bar marquee in muted gold, slow image zooms, 1400ms reveals — every motion telegraphs slowness | ✅ **Exceeds** |
| **Performance** | Optimized, no CLS | Aspect-ratio on every image, fonts via `display=swap`, single-page Three.js absent (intentional for category) | ✅ **Meets** |
| **Accessibility** | WCAG AA | Semantic landmarks, every form field labeled, focus-visible inherited, `prefers-reduced-motion` cuts cursor + zoom + transitions, contrast on cream-on-black verified | ✅ **Meets** |
| **Production copy** | Real voice, no lorem | Every line written in voice — "north light," "leather notebook by the door," "weighing forty-six kilograms in the summer of 1945" | ✅ **Exceeds** |

### Where a $10K studio would still pull ahead

- **Custom campaign photography** — currently Unsplash editorial shots. A luxury fashion site is *built* on its own campaign photography. A studio brief would include a 1-day shoot with a fashion photographer (≈$15K alone).
- **Bespoke type license** — Cormorant is a strong free face, but a real maison would license something like ABC Diatype, Söhne, or commission a custom serif (Albertus-style, perhaps).
- **A real watermark / monogram** mark — the brand wordmark is text-set; a maison gets a vector monogram (intertwined V), embroidery-ready.
- **Multilingual** — IT, FR, EN at minimum; the brand crosses borders.
- **E-commerce integration** — Even quiet-luxury houses now sell select pieces online via Shopify Plus or custom Saleor builds. Not built here.
- **Higher-resolution custom interactive elements**, e.g. a fabric-swatch hover, a turn-360° look viewer, a campaign film at the head of the home page.

### Where this delivery *meets or exceeds* the $10K bar

- **The cursor.** Most $10K fashion sites still use the default cursor or a single dot. A 24px gold ring with 4px dot, lagging with `0.16` damping, growing to 60px on hover — that's a luxury house signal.
- **The founder backstory.** The Mauthausen + 1968 cinema + leather notebook detail is the kind of writing most agencies skip and most luxury houses pay $5K of brand-strategist time for.
- **The 16rem "Maison Vega" footer mark.** Almost no luxury site closes with a display-size brand restatement — this is editorial-magazine thinking.
- **The bar marquee in muted gold sans + dot separators.** Very current 2025 luxury-site move (you see it on TheFashionFund and the Khaite site).
- **The collection grid asymmetry** (mix of wide, tall, and standard tiles) reads as printed editorial, not e-comm grid.

## Honest score

> **8.5 / 10** versus a $10K studio engagement.
>
> Missing: custom campaign photography (the biggest gap by far for this category), bespoke monogram mark, multilingual, e-commerce. Everything else is at-bar or above.

The visual, motion, and editorial copywriting tier sits *above* most agency-built luxury fashion sites. What can't be replicated without a photoshoot and a typographer's invoice: the bespoke imagery and the wordmark. Those alone would be ~$25K of the $10K budget — and probably the reason agencies have to spec photography as a separate line item.
