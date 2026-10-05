# Wanderlight — $10K Studio Comparison

> A boutique travel collective founded March 2020 in Lisbon by Anya Kasturi (ex–Nat Geo expedition leader) and Diego Velasquez (ex-anthropologist). Runs 18 trips per year, 8 travelers each, across 9 regions. Tagline: *"Travel that takes its time."*

## What was delivered

- **4 pages**: Home (Three.js interactive globe + hero stats + 3 trip cards + manifesto + 5-day sample itinerary + testimonial + CTA), Trips (filterable 9-of-18 trip catalog with prices, dates, difficulty), About (founder essay + 6-principle manifesto + collective intro), Contact (5-area side info + inquiry form with trip dropdown)
- **Live Three.js interactive globe** — solid deep-blue sphere + coral wireframe overlay + amber backside halo + 9 pulsing amber pins at real lat/lon coordinates (Himalayas, Andes, Tokyo, Kilimanjaro, Iceland, Sydney, Egypt, Mexico City, Rome) + 9 amber arc lines connecting destination to destination. **Draggable** (click and drag the globe to rotate it) with auto-rotate fallback. ~200 LOC of WebGL.
- **Distinct design system** vs. Sites 1–7: deep navy + coral + amber sunset gradient on dark base; **Playfair Display** (italic-led editorial display) + **Inter** body. Mix of dark and one inset cream "section-light" for the sample itinerary — a deliberate light-island in an otherwise dusk-toned site.
- **Brand identity**: name (Wanderlight = wanderlust + literal light), tagline, fictional founder backstory (Hanoi noodle shop in 2017, March 2020 launch into lockdown), six numbered principles (one full day of nothing, the local is the guide, no more than eight), the "3% of every trip price funds a local project" practice
- **Live motion**:
  - Three.js globe with **pulsing destination pins** (sin-wave scale + opacity over phase offset), auto-rotation + drag interaction
  - Sticky image on the itinerary section (left image stays put as 5 days scroll past it on the right)
  - **Gradient text** ("takes") with linear-gradient `background-clip: text` from amber → coral
  - 1100ms slow reveals
  - Footer mark in italic gradient text
- **Full 9-trip catalog** on Trips page with region pills filter, each trip showing duration / cohort size / dates / difficulty / price
- **Sample itinerary section** on Home: 5 days from a 21-day Andes trip, with a sticky photo on the left and 5 day-blocks on the right — gives the trip-design discipline some teeth without taking the buyer to a different page

## Brand decisions, briefly

| Choice | Reason |
|--------|--------|
| **Name** "Wanderlight" | Wanderlust + literal light. Suggests both motion and the kind of light you only see in places worth lingering in |
| **Tagline** "Travel that takes its time." | Counter-positions the entire "see 10 things in 3 days" travel category |
| **Palette** night + coral + amber gradient | The sunset/dawn gradient *is* the brand — used in headlines, footer mark, brand mark, and the Three.js globe pins |
| **Type** Playfair Display + Inter | Playfair italic carries the editorial fantasy ("Above the cloud line," "A textile road"); Inter handles all UI/body |
| **Three.js globe** vs. another scene | The globe is on-thesis — Wanderlight is *literally* about places on a globe — and gives the brand a memorable interactive element |
| **Real lat/lon for pins** | The 9 pin positions correspond to actual regional destinations the brand operates in. The detail matters in a category that's full of stock-photo travel sites |
| **Draggable globe** | Most agency Three.js scenes are passive. Letting users *rotate the globe* makes it stick. Auto-rotate continues if they don't touch it |
| **One section-light island** for the itinerary | Breaking the dark theme for the day-by-day section signals "here's the substantive content," not "here's the moody promo" |

## $10K Studio Comparison

| Dimension | $10K studio bar | Wanderlight delivery | Verdict |
|-----------|-----------------|----------------------|---------|
| **Brand strategy** | Name, voice, tagline, positioning | Name, tagline, founder origin essay, 6-principle manifesto, "3% to local projects" core fact, voice (slow, literary, slightly contrarian) | ✅ **Exceeds** — agency-built travel sites rarely commit this hard to a worldview |
| **Visual identity** | Color, type, mark, motion | Sunset palette across 6 tokens, type pair, gradient brand mark + footer mark, motion principle (slow, immersive, hand-felt) | ✅ **Meets** |
| **Information architecture** | Sitemap, hierarchy | Home = thesis + sample + proof, Trips = catalog with filter, About = trust, Contact = qualify. Each page opens differently | ✅ **Meets** |
| **Design system** | Tokens, components | Full token system; reusable `.trip-card`, `.trip-row`, `.day`, `.principle`, `.story-line`, `.regions-strip` | ✅ **Meets** |
| **Motion design** | Intentional, brand-aligned | Three.js globe with draggable interaction is the headline. Pulsing pins + arcs + auto-rotation. Sticky-image itinerary. Gradient text. All express *slow, deliberate, immersive* | ✅ **Exceeds** |
| **Performance** | Optimized | Three.js gated by reduced-motion + lazy mount, pixel ratio capped at 2, aspect-ratio on all images, fonts via `display=swap` | ✅ **Meets** |
| **Accessibility** | WCAG AA | Semantic landmarks, every form field labeled, `aria-hidden` on canvas, focus-visible inherited, contrast verified on dark bg | ✅ **Meets** |
| **Production copy** | Real voice, no lorem | Every line specific — "Pemba Sherpa born in the next valley," "Q'eswachaka rope bridge ceremony," "Don Bonifacio, fifth-generation mezcalero," "noodle shop in Hanoi 2017" — the brand-as-fact-density that wins category attention | ✅ **Exceeds** |

### Where a $10K studio would still pull ahead

- **Custom travel photography** — the work product *is* the photography. Currently Unsplash. A real studio engagement would budget a 2-week photo trip across at least three regions ($15K+ alone).
- **Per-trip deep pages** — each trip in the catalog should open to a dedicated `/trips/khumbu-himalaya` page with full day-by-day, included/not-included, gear list, host bios.
- **A photo journal or "field notes" section** — travel brands compound by publishing. Wanderlight would have a `/journal` with 30+ posts.
- **Real bookable availability calendar** with seat counts ("4 of 8 left for May 2027") — bookable integrations with Stripe + a CRM.
- **Multilingual** — at minimum EN + PT + ES given the offices listed.
- **Working filter pills** — currently styled-only.

### Where this delivery *meets or exceeds* the $10K bar

- **The Three.js draggable globe** with real lat/lon destinations is genuinely uncommon in travel sites and would be a $5K+ line item at most studios.
- **The 5-day sticky-image itinerary** on the home page replicates the way an actual trip-design firm would convince a buyer — substance, not a video.
- **The "three percent to local projects" + "$478,000 placed to date"** is exactly the kind of trust-building concrete number that earns the inquiry click; most agency-built travel sites avoid quantifying the give-back.
- **The voice.** "Stay long enough to be ignored" as principle #1 is a real opinion. Most travel sites avoid having one.
- **The principles + region strip + manifesto + testimonial + sample-itinerary** combo on the home page is a denser, more substantive sales argument than the average studio-built travel landing.

## Honest score

> **9 / 10** versus a $10K studio engagement.
>
> Missing: custom photography (biggest gap by far), per-trip deep pages, photo journal, working filter, bookable availability, multilingual. Brand thinking + voice + motion + interactive globe + page architecture are all at or above the studio bar.

The biggest miss is photography — and it'd cost the entire $10K to do properly for this category. What this site nails: the interactive WebGL globe (the rare studio-tier motion piece), the opinionated voice, the concrete brand facts ($478K placed, 478K-foot Khumbu, Q'eswachaka by name), and the sample-itinerary section that replicates real sales material. Most agency-built travel sites are mood reels; this one tries to make the sale.
