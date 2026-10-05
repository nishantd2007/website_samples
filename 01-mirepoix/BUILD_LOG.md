# Mirepoix & Co. — Build Log

> Example of a filled-in build log. Use the same shape for each of the other 10 sites — copy `BUILD_LOG_TEMPLATE.md` from the project root and adapt.

---

## The brief I started with

A warm, editorial bistro site that doesn't look like every other restaurant template — no carousel, no reservation chatbot, no Playfair Display. Saint-Henri Montreal vibe (ex-Paris chef, repurposed industrial building), magazine-style asymmetric grid, restrained motion. The brand should feel quiet and considered, not techy. **No Three.js** — would betray the warmth.

---

## Key direction-setting decisions I made

- **Vanilla HTML/CSS/JS as the stack.** Wanted ship-anywhere portability — opens cleanly from any folder, no build step.
- **4-page minimum** (Home, About, Menu, Contact) — depth over breadth.
- **Mixed image strategy per domain**: warm photo-led for Mirepoix, more SVG/3D for tech-domain sites. For this one, real food photography from Unsplash.
- **Skipped Three.js on purpose.** A bistro brand should feel hand-set, not technical. The motion vocabulary is GSAP-style scroll reveals and a soft cursor.
- **Two-font system** (Fraunces SOFT axis + Inter) — wanted the headlines to feel hand-set, not "default Playfair Display."

---

## Feedback I gave during the build

- **Menu section heads — alignment issue.** The original layout used a fixed `200px` left column with `align-items: baseline`. With single-word French headings ("Pour commencer," "Plats principaux"), the column was too narrow and headings wrapped weirdly. I caught this in a screenshot and we moved to `minmax(280px, 1fr) 1.6fr` with `align-items: center` and added a hairline divider below each section head.
- **Contact form — input heights inconsistent.** The native date input rendered taller than the select dropdown. I screenshotted it. We fixed by adding `appearance: none` everywhere and locking all inputs to `52px` with a custom SVG dropdown arrow.

---

## What I'd change before shipping this to production

- **Custom food photography** — a real bistro brand lives on its photo direction. Unsplash is fine for a template but I'd commission a proper shoot.
- **Reservation backend** — integrate Tock / OpenTable / Resy instead of the friendly local-state form.
- **FR + EN translations** — Montreal bistro must ship bilingual at launch.
- **Real wordmark / vector logo** — currently the three overlapping discs are a CSS mark.

---

## What this site taught me

- **The category default for restaurant sites is depressingly uniform** (food carousel + Playfair Display + Toast reservation widget). Stepping away from that required more direction than I expected — without explicit prompting, the work drifted toward the default.
- **Restraint is sometimes the design move.** Choosing *not* to add Three.js was as much a design decision as the colors and typography.
- **Magazine asymmetry needs an editor's eye** to keep readable. The first pass had columns that fought each other; the second pass with center-aligned section heads and a wider left column read clean.

---

## How I worked on this

A directed collaboration with Claude (Anthropic's AI assistant). I wrote the brief, picked the stack (vanilla HTML/CSS/JS), chose the palette and type pairing (Fraunces + Inter), set the motion principles (no Three.js, scroll reveals, custom cursor), and ran 2 revision rounds that fixed the menu-section-head alignment and the contact-form input heights. Claude wrote the CSS, HTML, and copy from those briefs.

The decisions captured above — the direction, the catches, the trade-offs — are mine.
