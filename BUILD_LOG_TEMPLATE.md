# [Brand Name] — Build Log

> A short, honest record of the direction-setting and feedback rounds that shaped this site.
>
> Copy this file into each site folder as `BUILD_LOG.md` and fill in the sections below.

---

## The brief I started with

What did I ask for when I started this site? What did I have in my head — domain, audience, vibe, must-haves, must-avoids?

*(2–4 sentences. The pitch I would have given a designer at a coffee shop.)*

Example: *"A warm, editorial bistro site. Saint-Henri Montreal vibe, ex-Paris chef, asymmetric magazine grid, no Three.js — should feel quiet and considered, not techy."*

---

## Key direction-setting decisions I made

The choices I made before or during the build that shaped the output. These are the decisions a designer would have made.

*Examples of what to write:*

- *Stack choice and why (vanilla HTML/CSS/JS — wanted ship-anywhere portability)*
- *Page count (4 pages — Home, About, Menu/Product, Contact — chose depth over breadth)*
- *Whether to use Three.js or not, and why for this domain*
- *Image strategy (mix of real photos vs. SVG vs. illustration per domain)*
- *Anti-patterns I explicitly avoided (no carousel, no chatbot, no parallax X)*

---

## Feedback I gave during the build

Specific things I caught and asked to be changed. The screenshots I pushed back on. The corrections I made.

*Examples of what to write:*

- *"Menu section heads had baseline-alignment issues on the wide column. I caught it in a screenshot and we moved to `align-items: center` with a wider left column."*
- *"The original Instrument Serif headlines were too tight at small sizes. I asked to swap to Newsreader and bump weights on h3/h4."*
- *"Caught broken Unsplash photo IDs on the work cards — flagged them, swapped to verified IDs."*

---

## What I'd change before shipping this to production

Honest reflection. Where the gap is between what's here and what a $10K studio would deliver. (The `COMPARISON.md` in this folder is a longer version of this — distill the most important 3–4 items here.)

*Examples:*

- *Commission real food photography to replace Unsplash — a bistro brand lives on its photos*
- *Build a real reservation backend (Tock / OpenTable) — currently form is local-state only*
- *Ship FR + EN translations — Montreal bistro needs both at launch*

---

## What this site taught me

What did I learn — about the domain, about design systems, about working with an AI collaborator?

*Examples:*

- *"The category-default for restaurants is 'photo + Playfair Display + reservation button.' Stepping away from that with the editorial layout took more direction than I expected."*
- *"I learned that Three.js doesn't fit every brand — restraint is sometimes the design move."*

---

## How I worked on this

A directed collaboration with Claude (Anthropic's AI assistant): I wrote the brief, made every brand and visual decision-of-record, picked the stack and motion principles, and ran [N] revision rounds that changed the output materially. Claude wrote the CSS, HTML, copy, and any Three.js scene from those briefs.

The decisions captured above — the direction, the catches, the trade-offs — are mine.
