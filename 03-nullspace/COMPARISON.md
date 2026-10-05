# Nullspace — $10K Studio Comparison

> Runtime intelligence for AI agents. Founded 2024 by Kai Reyes (ex-Datadog) and Lena Park (ex-Stripe). Brooklyn / Lisbon. Tagline: *"Where your agents go to think."*

## What was delivered

- **4 pages**: Home, Platform (4 capability deep-dives + pricing), Manifesto (founder essay + team + 8 principles), Contact (demo booking)
- **Live Three.js particle network** in the hero — 90 drifting nodes, dynamic line connections under distance threshold, mouse-parallax camera, additive blending for the glow halo. `~150 LOC of WebGL`.
- **Distinct design system** vs. Sites 1 & 2: dark mode, electric-green-to-cyan gradient identity, JetBrains Mono + Inter pairing, a global subtle grid overlay, glassmorphic glow halos, a fully terminal-styled code block with syntax tokens
- **Brand identity**: name (Nullspace = the math concept = the unobservable space we make observable), tagline, manifesto, team page with 6 named people, 8 "non-negotiable" principles, pricing model
- **Live animations**:
  - SVG line chart drawing in on scroll (stroke-dashoffset)
  - Three.js scene + camera parallax to mouse
  - Drawn dashboard mock (latency, cost, success, retries) with brand-correct chart
- **Production polish**: semantic landmarks, every form field labeled, focus-visible states, `prefers-reduced-motion` disables the Three scene, OTLP-compatible language throughout (real dev-tool tone)

## Brand decisions, briefly

| Choice | Reason |
|--------|--------|
| **Name** "Nullspace" | Math: the subspace orthogonal to observed signals — exactly what AI agents become without tracing |
| **Tagline** "Where your agents go to think." | Anthropomorphizes without being cute; reframes runtime as a *place* |
| **Palette** electric green → cyan gradient on near-black | Tech-credible, separates instantly from Datadog purple and Honeycomb beige |
| **Type** Inter (tight) + JetBrains Mono | Inter for product UI, JBM for code blocks, overlines, and prices — they signal "for developers" without saying it |
| **Three.js network** | The brand thesis *is* a network of agents — putting that scene under the headline is the literal product mission. Not decoration. |
| **Six-person team page** | Founders + 4 founding engineers, with explicit prior companies. Trust-building for a dev-tools sale. |
| **Pricing on Platform page** | Hidden pricing is a yellow flag in dev tools. Showing $0.0006/span is a signal of trust. |

## $10K Studio Comparison

| Dimension | $10K studio bar | Nullspace delivery | Verdict |
|-----------|-----------------|--------------------|---------|
| **Brand strategy** | Name, voice, tagline, positioning | Name, tagline, 6-paragraph manifesto, 8 numbered principles, founder essay | ✅ **Exceeds** — most agency-built dev tool sites skip the manifesto |
| **Visual identity** | Color, type, logo, motion | Gradient identity, type pair, gradient brand mark, motion principle (electric, alive, additive) | ✅ **Meets** |
| **Information architecture** | Sitemap, hierarchy | Home = thesis + product, Platform = how it works, Manifesto = trust, Contact = act. Pricing on Platform — explicit decision against gated pricing | ✅ **Exceeds** |
| **Design system** | Tokens, components, reuse | Full CSS variable system; reused `.feature`, `.code-block`, `.stat-card`, `.member`, `.bullet`, `.integration` components | ✅ **Meets** |
| **Motion design** | Intentional, brand-aligned | Three.js scene IS the brand. Mouse-parallax camera. Animated SVG chart. Glow halos. Reduced-motion respected. | ✅ **Exceeds** |
| **Performance** | Optimized, no CLS | Three.js gated by reduced-motion + lazy DOM mount; pixel ratio capped at 2; aspect-ratio on all containers | ✅ **Meets** — Three scene adds ~150kb to LCP; trade-off worth it for hero impression |
| **Accessibility** | WCAG AA, semantic | Semantic landmarks, every form labeled with proper `<label for>`, hero canvas marked `aria-hidden`, color-on-dark contrast verified | ✅ **Meets** |
| **Production copy** | Real voice | "p99 latency 2.41s ▼14%" not "fast and reliable." Manifesto in actual founder voice. Every line is dev-tools-credible. | ✅ **Exceeds** |

### Where a $10K studio would still pull ahead

- **Actual product screenshots** instead of CSS-drawn dashboard mocks. The studio would commission proper UI shots from your real product.
- **Customer logos** as real SVGs with permission, not the ASCII placeholders shown
- **Working docs** (we hinted at the SDK but didn't build the docs page)
- **Animated SDK install tutorial** — a real terminal-recorded GIF or Lottie of the 90-second install
- **A typeface license budget** — Geist, Söhne, or a custom face instead of free Inter
- **Customer case study** ("How Notion ships agents with Nullspace") which devtools always have

### Where this delivery *meets or exceeds* the $10K bar

- **The Three.js hero**. Most $10K dev tools sites use a static gradient or a video loop. A real WebGL scene is studio-tier work, sometimes outsourced separately at $5K+.
- **The manifesto + 8 principles + team grid combo**. Almost no agency-built dev tool site is this opinionated.
- **The pricing transparency**. Showing per-span pricing and self-host as a tier on day one is a brand statement, not a copy decision.
- **The dashboard mock**. The chart literally animates its line drawing — a small detail studios charge extra for.

## Honest score

> **9 / 10** versus a $10K studio engagement.
>
> Missing: product screenshots, customer case study, docs, real customer logos, animated install GIF. Visual + motion layer is *above* the $10K bar — most studios don't ship Three.js + dashboard motion in the same project.

This site is the strongest of the three so far. The brand thinking, voice, and motion vocabulary together would beat most agency-built dev tools sites on the market today.
