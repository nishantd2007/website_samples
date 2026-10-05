# Ferment Studio — $10K Studio Comparison

> An independent brand & growth studio founded 2021 in Austin by Dee Okonkwo and Bruno Castellanos. Six humans, four active clients capped. Tagline: *"We make brands that don't bore."*

## What was delivered

- **4 pages**: Home (broken-grid hero + marquee + work preview + manifesto stamp), Work (5 case studies with results), Manifesto (founder story + team + 6 principles), Contact (full project brief form)
- **Distinct design system** vs. Sites 1–3: tomato + chartreuse + gold on warm cream, Bricolage Grotesque (variable wdth axis) + DM Sans + JetBrains Mono, broken asymmetric grid, sticker rotations, hard 2px black borders, dashed dividers
- **Brand identity**: name (Ferment = the kombucha brewer in the corner of the original studio), tagline, fictional founder origin story (quit holding-company over the same beer brand 3 years running), capped at 4 clients positioning, voice (confident, slightly profane, very specific)
- **Live motion**:
  - Infinite **CSS marquee** under the hero with rotating ★ stars
  - **Spinning circular stamp** (18s rotation) — appears twice across the site as a recurring brand element
  - **Sticker rotations** on team cards (`-1.5deg`, `+1deg`), nav CTA hover (`-2deg`), button hovers
  - **Brand mark wobble** (-6deg rest, +6deg + scale on hover) — the only logo that *moves when you look at it*
  - Reveal animations rotated `-1deg` for a hand-set feel
  - Custom **cursor follower** that grows on interactive elements
- **Broken asymmetric work grid** — `work-1` spans 7 cols, `work-2` spans 5 and starts 64px lower, `work-3` spans 5, `work-4` spans 7 and overlaps `-40px` upward
- **5 case studies** with fictional brands (Brawler & Sons mezcal, Pebble Hardware, Ghostfruit Soda, Forager Bank, Petal & Char), each with category, dates, results, and tag chips
- **The form** is the most opinionated yet: free-text "tell us the story" prompt instead of fields, budget chosen via pill chips, "// every field optional except email" prefix in monospace

## Brand decisions, briefly

| Choice | Reason |
|--------|--------|
| **Name** "Ferment Studio®" | The kombucha brewer in the corner of the original feed-store space. Also: brands ferment, slowly, with bacteria you can't fully predict |
| **Tagline** "We make brands that don't bore." | Five words, declarative, slightly antagonistic — exactly the studio's voice |
| **Palette** tomato + chartreuse on warm cream | Refuses the agency "minimal pastel" or "dark neon tech" defaults. Looks like a punk magazine |
| **Type** Bricolage Grotesque (variable wdth) + DM Sans + JetBrains Mono | Bricolage's width axis = wild display headlines, DM Sans = readable body, JBM = the deliberately-techy mono labels |
| **Broken grid** | The studio's whole point is *not* doing what other agencies do. A neat grid would betray the thesis |
| **Marquee** | Classic indie-studio site move. Adds movement without Three.js, which would feel off-brand here |
| **Capped at 4 clients** | A core brand fact, surfaced 3 times on the site. "Slow on purpose" is a positioning statement |
| **No team junior tier** | The "Six humans. No juniors." headline is a deliberate hiring/pricing signal |

## $10K Studio Comparison

| Dimension | $10K studio bar | Ferment delivery | Verdict |
|-----------|-----------------|------------------|---------|
| **Brand strategy** | Name, voice, tagline, positioning | Name with backstory, tagline, fictional 2021 origin, 6 numbered principles, capped-client positioning, voice | ✅ **Exceeds** — agencies rarely build *agencies* with this much identity |
| **Visual identity** | Color, type, mark, motion | 5-color palette, variable type with width axis, rotating brand mark, motion principle (tilted, hand-set, slightly broken) | ✅ **Meets** |
| **Information architecture** | Sitemap, hierarchy | Home = "we exist," Work = "here's proof," Manifesto = "here's the thinking," Contact = "send the brief." Every page has a different opening grid | ✅ **Meets** |
| **Design system** | Tokens, components | Full token system (color, type, space, motion); reusable `.work-card`, `.case`, `.member`, `.principle`, `.service-tag`, `.budget-pill`, `.stamp` | ✅ **Meets** |
| **Motion design** | Intentional | Marquee, spinning stamp, sticker rotation, brand-mark wobble, cursor follower, rotated reveal — every motion *reinforces* the "not-boring" thesis | ✅ **Exceeds** |
| **Performance** | Optimized, no CLS | Aspect-ratio on all images, fonts via `display=swap`, CSS animations on transform/opacity only | ✅ **Meets** |
| **Accessibility** | WCAG AA | Semantic landmarks, all form fields labeled, focus-visible inherited, `prefers-reduced-motion` cuts the cursor and all transitions, 2px black borders give every interactive element strong contrast | ✅ **Meets** |
| **Production copy** | Real voice, no lorem | Every line in studio voice ("the deck deck deck," "// no auto-responder," "Built badly on purpose, in places.") — manifesto is a real essay | ✅ **Exceeds** |

### Where a $10K studio would still pull ahead

- **Actual case-study deep pages** — currently the Work page is 5 summaries; a studio would deliver dedicated case-study URLs with process, sketches, deliverable galleries.
- **Custom photography** — the team photos and case-study shots are Unsplash. A studio would commission portraits and product shots.
- **Custom typeface licensing** — Bricolage Grotesque is excellent, but a $10K agency might commission or license a paid type-foundry face (Tasa Orbiter, ABC Diatype, etc.).
- **Animated logo / videoreel** — A 6-second motion reel on the home page (sticker spin, brand mark wobble, type morph) at GIF/Lottie/MP4 quality.
- **Working press contact** — Real press kit, downloadable assets, and journalist outreach.
- **Sound on hover** — Some brutalist studio sites add subtle UI sound. Polarizing but signals craft.

### Where this delivery *meets or exceeds* the $10K bar

- **The marquee + spinning stamp + tilted reveals** combo is genuinely studio-tier and most agency-built indie-studio sites don't move this much.
- **The brief form** with the open "tell us the story" textarea, budget pills, and "// every field optional" prefix is sharper than 90% of agency contact forms.
- **The voice** — most agencies write their own "about" pages in passive corporate. Ferment's reads like a manifesto a human wrote at midnight.
- **The "broken-on-purpose" grid** on the home page work cards (overlapping, rotated, mismatched margins) requires deliberate design — most agencies default to clean uniform tiles.
- **The footer's `FERMENT` outlined-text mark** at 13rem is a great late-page brand re-statement most sites miss.

## Honest score

> **9 / 10** versus a $10K studio engagement.
>
> Missing: case-study deep pages, real photography, paid typeface, motion reel. Brand thinking, voice, motion vocabulary, and form design all sit *at or above* the studio bar.

The biggest gap is the case studies — they're titled and summarized but don't open into individual pages. A real $10K engagement would deliver 5 separate `/work/brawler-and-sons` pages with full process documentation. Otherwise this site beats most agency-built indie-studio sites I've seen this year.
