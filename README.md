# Website Templates — Multi-Domain Showcase

A collection of 11 fully-designed, production-quality website templates spanning food, medical, IT, marketing, fashion, fintech, real estate, travel, architecture, automotive, and Web3. Every site has its own brand story, fictional name, distinct color system, and unique wireframe — built with vanilla HTML/CSS/JS plus selective use of Three.js and modern motion libraries.

> Licensed under [MIT](./LICENSE). Free to fork, modify, and use in your own projects — commercial or personal.

## Important: fictional brands & disclaimer

**Every brand, founder, address, phone number, email, price, testimonial, award, and biographical detail in these templates is entirely fictional.** They were invented to make the templates feel real and ship-ready — not to represent any real business or person.

Specifically:

- **No brand mentioned exists.** "Mirepoix & Co.," "Lumen Health," "Nullspace," "Ferment Studio," "Maison Vega," "Helix Capital," "Aurelian Estates," "Wanderlight," "Atrium Forma," "Volton," and "Helion Protocol" are invented. Any resemblance to a real business is coincidental.
- **No founder is real.** Names like "Camille Aubert," "Dr. Maya Iyer," "Sarah Chen," "Kai Reyes," "Margaux Whitfield," "Lina Halvorsen," and all others are fictional.
- **All phone numbers** use the **555 prefix** (a North American block reserved for fiction). They cannot dial real people.
- **All testimonials, awards, press citations, and client lists are illustrative.** Trail of Bits, OpenZeppelin, Paradigm, a16z, etc. are real organizations — but none of them have audited, invested in, or endorsed any brand in this repo.
- **Founder, team, and testimonial portraits are stock photos from Unsplash.** They do *not* depict the fictional people they appear to represent. The Unsplash license does not permit implying that a real person endorses a fictional brand. **If you adapt any of these templates for a real business, replace those portraits first.**

## What this portfolio demonstrates

11 distinct brand systems — each with its own color palette, type pairing, motion vocabulary, page architecture, and brand voice. The goal wasn't to prove I can write CSS; it was to show how I direct design at multiple scales: from "what kind of brand should a Saint-Henri bistro be?" down to "the section heading is misaligned by 8px in this screenshot."

Specifically, this portfolio is a record of:

- **Domain judgment** — knowing when a category demands a Three.js scene (Helion, Wanderlight, Volton) and when it demands restraint (Mirepoix's warmth, Atrium Forma's Swiss precision)
- **Brand thinking** — fictional founder stories, six-principle manifestos, signature features (Volton's "Voice," Aurelian's 4-step methodology, Lumen's "80% / 7-min / 400" stat triad) that do more brand work than mood-boards
- **Direction across the stack** — color systems, type pairings, motion principles, image strategy, voice and copy register — chosen specifically for each domain instead of defaulting to "Playfair + photo carousel"
- **An editor's eye** — see the `BUILD_LOG.md` in each site folder for the revision rounds: typography fixes I caught (Lumen's Instrument Serif → Newsreader), alignment bugs I surfaced from screenshots (Mirepoix's menu section heads, Ferment's work-card meta row), broken images I flagged (Ferment's Unsplash 404s), hero readability problems I solved (Helion's text-over-canvas contrast)

## How it was built

These templates were built as a directed collaboration with Claude (Anthropic's AI assistant). I wrote each brief, set every brand decision, picked the color systems and type pairings, chose where to use Three.js and where not to, and gave multiple rounds of feedback that materially changed the output. Claude wrote the CSS, HTML, and copy from those briefs.

I'm documenting the collaboration transparently — in this README and in per-site `BUILD_LOG.md` files — because **how a designer briefs, directs, and edits is increasingly the relevant skill,** and these logs are the clearest signal of how I think. The thinking and the judgment calls are mine; the typing is shared.

## Showcase Index

| # | Folder | Brand | Domain | Theme |
|---|--------|-------|--------|-------|
| 1 | [01-mirepoix](./01-mirepoix) | Mirepoix & Co. | Food / Bistro | Warm editorial, magazine asymmetric |
| 2 | [02-lumen-health](./02-lumen-health) | Lumen Health | Medical / Wellness | Clinical minimal, soft motion |
| 3 | [03-nullspace](./03-nullspace) | Nullspace | IT / Developer SaaS | Dark neon, Three.js particle network |
| 4 | [04-ferment-studio](./04-ferment-studio) | Ferment Studio | Marketing Agency | Brutalist-playful, broken grid |
| 5 | [05-maison-vega](./05-maison-vega) | Maison Vega | Luxury Fashion | Editorial black/gold, custom cursor |
| 6 | [06-helix-capital](./06-helix-capital) | Helix Capital | Fintech | Dark navy, animated data |
| 7 | [07-aurelian-estates](./07-aurelian-estates) | Aurelian Estates | Real Estate | Warm bronze luxury, parallax |
| 8 | [08-wanderlight](./08-wanderlight) | Wanderlight | Travel | Sunset gradients, Three.js globe |
| 9 | [09-atrium-forma](./09-atrium-forma) | Atrium Forma | Architecture | Swiss minimal, grid portfolio |
| 10 | [10-volton](./10-volton) | Volton | EV / Automotive | Futuristic, Three.js car |
| 11 | [11-helion-protocol](./11-helion-protocol) | Helion Protocol | Crypto / Web3 | Cyberpunk glassmorphism |

## Per-Site Structure

Each site folder contains:

```
01-mirepoix/
├── index.html        # Home
├── about.html        # Brand story
├── menu.html         # Services / Menu / Products (domain-specific)
├── contact.html      # Contact / Reservation
├── css/
│   └── style.css
├── js/
│   └── main.js
└── COMPARISON.md     # $10K studio comparison
```

## How to View

Each site is **vanilla HTML/CSS/JS** — open `index.html` directly in a browser, or serve the folder with any static server:

```bash
# From the root
npx serve 01-mirepoix
# or
python -m http.server 8000 --directory 01-mirepoix
```

External libraries (Three.js, GSAP, fonts) load via CDN — no install step required.

## The $10K Comparison Framework

After each site, `COMPARISON.md` benchmarks the deliverable against what you'd get from a high-end design studio at the $10,000 price point. The rubric:

| Dimension | What a $10K studio delivers |
|-----------|----------------------------|
| **Brand strategy** | Named brand, voice, tagline, positioning, 1-page brand brief |
| **Visual identity** | Custom color system, type system, logo concept, motion principles |
| **Information architecture** | Sitemap, content priority, scannable hierarchy |
| **Design system** | Reusable tokens, spacing scale, component library |
| **Motion design** | Intentional, meaningful animation tied to brand personality |
| **Performance** | Optimized images, lazy loading, no CLS, fast first paint |
| **Accessibility** | WCAG AA contrast, semantic HTML, focus states, reduced-motion |
| **Production quality** | Polished copy, real photography, no lorem ipsum |

Each site is rated on these dimensions with honest notes on where it meets, exceeds, or trades off versus the $10K bar.

---

**Build status:** complete — all 11 sites delivered with full design systems, four pages each, and a $10K studio comparison writeup. See `COMPARISON.md` inside each folder for the per-site analysis.

## Three.js scenes — by site

| Site | Scene | LOC |
|------|-------|-----|
| 03-nullspace | Particle network with dynamic distance-based line connections | ~150 |
| 06-helix-capital | DNA-style double helix (emerald + gold), 32 connecting rungs | ~150 |
| 08-wanderlight | Interactive draggable globe with 9 pulsing destination pins at real lat/lon + 9 connecting arcs | ~200 |
| 10-volton | Stylized 3D car silhouette (low body, sloped cockpit, 4 wheels) with underglow + drifting dust particles | ~190 |
| 11-helion-protocol | Holographic node network: central icosahedron hub + 38 octahedron nodes + flowing data packets | ~190 |

All Three.js scenes:
- Gated by `prefers-reduced-motion: reduce` (cleanly disabled if requested)
- Capped at `Math.min(window.devicePixelRatio, 2)` for performance
- Built with primitives (no model imports) so each site stays under 200 LOC of WebGL

## Cursor variants

- **01 Mirepoix** — terracotta dot, blend-mode: multiply
- **04 Ferment** — tomato circle that grows into a 60px chartreuse halo on interactive elements
- **05 Maison Vega** — 24px gold ring + lagging 4px gold dot (dual-element luxe cursor)
- **Other sites** — native cursor (intentional — restraint is the brand on Lumen, Atrium, etc.)
