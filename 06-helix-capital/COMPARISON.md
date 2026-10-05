# Helix Capital — $10K Studio Comparison

> A wealth platform for high-earning operators, founded 2022 by Aanya Mehra (ex-Goldman quant) and Lucas Rivera (ex-Stripe finance, CPA). New York + Singapore. Tagline: *"Compounding, with intention."*

## What was delivered

- **4 pages**: Home (Three.js helix + animated portfolio card + 3 pillars + 4-step process + sample performance report + security band), Platform (4 capability deep-dives + 3-tier pricing), About (founder manifesto + 2 detailed founder bios + 6-principle investment philosophy), Contact (qualifier intake form)
- **Live Three.js double-helix** in the hero — two intertwined point strands (emerald + gold) with 32 connecting rungs and additive-blended glow halos, mouse-parallax camera, slow Y-rotation. The brand mark *is* the 3D scene. ~150 LOC of WebGL.
- **Distinct design system** vs. Sites 1–5: navy + emerald + gold + warm-cream highlight; Inter Tight + Inter + Spectral italic (editorial accent) + Space Grotesk (tabular figures). Restrained motion. Sophisticated card-elev shadows.
- **Animated portfolio dashboard card** with:
  - Count-up animation: `$0.00 → $2,384,112.47` over 2.2s on intersection
  - Two SVG chart lines drawing in via `stroke-dashoffset` (your portfolio + benchmark), with linear-gradient fill fading in after
  - A glowing dot at the line's endpoint, dropped-shadow on the green
  - Three-stat footer: 1Y return / tax savings / Sharpe ratio
- **Sample performance card** on home: every line tax-adjusted, every comparison vs. S&P after-tax — a real differentiator vs. industry "compare to index, ignore taxes" reporting
- **Brand identity**: name (Helix = the DNA-helix wordmark *and* compound growth metaphor), tagline, fictional founder origin (Aanya's six-figure AMT bill nobody modeled for her, Lucas's spreadsheet-equity at Stripe), 6-principle investment philosophy, security/trust band (Apex custody, SIPC, SOC 2, "no payment for order flow")
- **3-tier pricing** with thresholds and basis-point fees (0.30% → 0.25% → 0.18%) — transparent fintech, refreshing in the category
- **Pre-built brand mark SVG**: two intertwined paths (emerald + gold) used consistently in nav, footer, and the Three.js scene's color palette

## Brand decisions, briefly

| Choice | Reason |
|--------|--------|
| **Name** "Helix Capital" | Double meaning: DNA-helix as the brand mark, and compounding as a *helical* growth model |
| **Tagline** "Compounding, with intention." | Counter-positions the entire roboadvisor category ("automated, hands-off") with a values-based phrase |
| **Palette** navy + emerald + gold | Navy = trust, emerald = data/growth, gold = wealth without ostentation. Avoids the Mint-green / WealthFront-blue defaults |
| **Type** Inter Tight + Inter + Spectral italic + Space Grotesk | Sans family for UI; Spectral italic for *editorial emphasis* ("with intention," "tax-adjusted"); Space Grotesk for tabular financial figures with tabular-nums |
| **Three.js helix vs. another particle scene** | A particle scene would echo Nullspace too closely. A double-helix is the literal brand mark, in 3D — same logic as Nullspace's network |
| **Show real numbers everywhere** | "$2,384,112.47," "0.30%," "$8,140 tax savings" — concrete numbers do more brand work than "best-in-class returns" |
| **No "AI-powered" anywhere** | The platform is algorithmic + tax-aware, but the brand doesn't reach for an AI category that's losing trust in fintech |
| **A named CFP — for life** | Counter to robo + family-office tiering. "Sasha Kraus, CFP®" appears on every page with photo, response time, and credentials |

## $10K Studio Comparison

| Dimension | $10K studio bar | Helix delivery | Verdict |
|-----------|-----------------|----------------|---------|
| **Brand strategy** | Name, voice, tagline, positioning | Name with double meaning, tagline, founder essay, 6-principle philosophy, "tax-adjusted" core differentiator | ✅ **Exceeds** — most fintech sites stop at "feature + benefit" |
| **Visual identity** | Color, type, mark, motion | 4-color palette, 4-font system with deliberate roles, SVG brand mark + Three.js extension of it, motion principle (slow, precise, premium) | ✅ **Meets** |
| **Information architecture** | Sitemap, hierarchy | Home = thesis + product preview, Platform = how it works + price, About = trust, Contact = qualify. Every page has a distinct rhythm | ✅ **Meets** |
| **Design system** | Tokens, components | Full token system; reusable `.portfolio-card`, `.pillar`, `.perf-row`, `.security-bullet`, `.capability`, `.tier`, `.bullet` | ✅ **Meets** |
| **Motion design** | Intentional, brand-aligned | Three.js helix (brand-mark-as-scene), count-up portfolio value, dual SVG line-draw, drop-shadow dot, hover-lift cards. All restrained — luxury fintech, not dev-tools loud | ✅ **Exceeds** |
| **Performance** | Optimized | Three.js gated by reduced-motion, pixel ratio capped at 2, aspect-ratio everywhere | ✅ **Meets** |
| **Accessibility** | WCAG AA | Semantic landmarks, every form labeled, `aria-hidden` on canvas, focus-visible inherited, contrast verified on navy bg | ✅ **Meets** |
| **Production copy** | Real voice | "$8,140 tax savings YTD," "Sasha Kraus, CFP®, 12 yrs at Wealthfront + Vanguard," "0.30% — the category averages 110bp" — every figure specific | ✅ **Exceeds** |

### Where a $10K studio would still pull ahead

- **Real client-onboarding flow** instead of a friendly local-state form (DocuSign + Apex onboarding integration)
- **Real Form ADV link** and Reg ADV PDF — required by the SEC for any registered investment advisor site
- **A working portfolio simulator** where you input your equity comp and see your projected allocation in real time
- **Customer-permission case studies** with real client logos (Stripe / Vercel / Anthropic, etc.) and quantified outcomes
- **Founder photography** instead of Unsplash portraits — and ideally a 90-second founder video on the About page
- **Regulatory page** — disclosures, Form CRS, fee table per California / NY / TX residents
- **Login + dashboard prototype** linked from the nav — the hero-card is a preview; the studio would build a click-through Figma flow

### Where this delivery *meets or exceeds* the $10K bar

- **The Three.js helix** as both brand mark *and* hero scene is a creative move most fintech sites would never attempt — and most studios would price separately at $5K+
- **The animated count-up + dual-line chart + glow dot combo** in the portfolio card is at-or-above-bar with Wealthfront / Betterment hero work, achieved with vanilla SVG + 50 LOC
- **The "tax-adjusted everywhere" positioning** is genuinely sharp — most fintech marketing trips on this and we've made it a literal copy pillar across three sections
- **The pricing transparency** (showing 0.30% / 0.25% / 0.18% on Platform page, no "talk to sales" gates) is a brand statement most agency-built RIA sites avoid
- **The named-CFP-with-credentials pattern** ("Sasha Kraus, CFP® · 12 yrs at Wealthfront + Vanguard · same-day by 5pm") repeated three times — most fintech sites have a generic stock photo "advisor"
- **The performance report card** on Home (Starting → return → vs. S&P → tax savings → fee → Ending balance) replicates a real quarterly report layout, on the marketing page. That's the kind of detail that earns the trust click

## Honest score

> **9 / 10** versus a $10K studio engagement.
>
> Missing: real client-onboarding plumbing, regulatory PDFs, founder video, working simulator, real client logos with permission. Visual + motion + brand thinking + copy are at or above the $10K bar.

The biggest miss is the onboarding/regulatory plumbing — a real RIA site needs Apex integration, signed-document flow, Form CRS, and quarterly disclosures. Those are engineering items, not design ones, and would consume a separate $20K+ budget. What this site nails: the brand thesis, the visual system, the motion vocabulary, and the differentiated voice in a saturated category.
