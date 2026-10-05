# Lumen Health — $10K Studio Comparison

> A modern preventive primary care membership, founded 2021 by Dr. Maya Iyer and Sarah Chen. Located in Mission Bay, San Francisco. Tagline: *"Healthcare you can feel coming."*

## What was delivered

- **4 pages**: Home, About, Membership (3-tier pricing), Contact (intake + intro-call booking)
- **Custom design system** distinct from Site 1: sage palette, Instrument Serif + Manrope, soft generous spacing, rounded corners, breathing motion
- **Brand identity**: name, tagline, founder story (a kitchen in Bernal Heights), positioning ("not insurance"), six wall-mounted principles, voice (calm, confident, slightly editorial)
- **Animated stats** that count up on scroll into view (80%, 60 min, 400 patients)
- **Breathing micro-motion** on the brand mark, overline dots, hero badge — a quiet visual heartbeat tying the medical theme together
- **3-tier pricing matrix** with featured middle tier (Lumen+)
- **Real photography** via Unsplash, curated for warmth and humanity over clinical sterility
- **Production polish**: focus states, accessible form labels, semantic HTML, `prefers-reduced-motion` honored

## Brand decisions, briefly

| Choice | Reason |
|--------|--------|
| **Name** "Lumen Health" | A *lumen* is both a unit of light and an anatomical opening — soft and clinical at once |
| **Tagline** "Healthcare you can feel coming." | Inverts the usual reactive-care framing in five words |
| **Palette** sage + sand + coral accent | Warmer than the typical "trustworthy blue" — feels like a wellness brand, not a corporate hospital |
| **Type** Instrument Serif + Manrope | Editorial display + friendly geometric body; reads as boutique, not pharma |
| **Breathing dot motif** | Subtle pulse from the brand mark to overline dots to hero badge — a literal "heartbeat" of the brand |
| **No Three.js** | Calm clinical brands should not feel busy. We used breathing CSS animations and soft radial gradients instead. |

## $10K Studio Comparison

| Dimension | $10K studio bar | Lumen delivery | Verdict |
|-----------|-----------------|----------------|---------|
| **Brand strategy** | Named brand, voice, tagline, positioning | All present — name, tagline, "we vs. them" framing in 80%/7-min stats, founder narrative, six principles | ✅ **Meets** |
| **Visual identity** | Custom color, type, motion, mark | Sage palette with extended tones, type pair, breathing mark, motion principle (subtle, slow, calm) | ✅ **Meets** |
| **Information architecture** | Sitemap, content priority, hierarchy | Each page has a clear single job: Home = thesis, About = trust, Membership = decide, Contact = act | ✅ **Meets** |
| **Design system** | Tokens, components, reuse | All color/space/type/motion as CSS variables; reusable `.tier`, `.pillar`, `.principle`, `.contact-card`, `.form-option` | ✅ **Meets** |
| **Motion design** | Intentional, brand-aligned | Slow `cubic-bezier(0.45, 0, 0.2, 1)`, breathing pulse, count-up stats — all express *attentive, slow, intentional* | ✅ **Meets** |
| **Performance** | Optimized, no CLS | Aspect-ratio everywhere, two-weight Manrope, image lazy loading native | ✅ **Meets** |
| **Accessibility** | WCAG AA, semantic | Semantic landmarks, focus-visible, sufficient contrast (sage on off-white verified), reduced-motion handled | ✅ **Meets** |
| **Production copy** | Real voice, no lorem | Every line specific — "Lac-Mégantic"-equivalent details (Bernal Heights kitchen, "stage-three diagnosis," Apple Health) | ✅ **Meets** |

### Where a $10K studio would still pull ahead

- **A booking integration** with a real scheduling backend (Healthie, Spruce, Cal.com). Currently the form is friendly local-state only.
- **HIPAA-compliant intake** — a clinical brand at this price point needs at minimum a BAA-covered form vendor disclosed in the privacy line.
- **Original founder photography** — Unsplash portraits are stand-ins; a real clinic ships photos of the *actual* Dr. Iyer.
- **Trust artifacts**: clinical advisory board, residency credentials, NPI numbers, state licensure.
- **Insurance / billing FAQ page** — primary care members are anxious about whether their HSA/FSA applies, in/out of network, etc.

### Where this delivery *meets or exceeds* the $10K bar

- **Restraint**. Most $10K studio healthcare sites are over-designed with stock-iconography grids of "lab work / video visits / messaging." This one trusts the reader.
- **The principles page**. Six numbered, named, opinionated tenets is a brand move most agencies skip.
- **The "80% / 7-min / 400" stat trio**. That triad of facts does more brand work than a hero video.

## Honest score

> **8 / 10** versus a $10K studio engagement.
>
> Missing: scheduling integration, HIPAA-ready intake, real founder photography, insurance/billing FAQ, clinical-trust artifacts. Visual + content layer is at-bar.

The brand thinking, color/type/motion system, and the writing all reach the studio bar. What's missing is the *clinical infrastructure layer* — booking, HIPAA, credentials — which is a $4–5K engineering budget separate from design.
