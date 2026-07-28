<!-- SHARED REFERENCE · CANONICAL SOURCE: Purely Personal skill suite v5.0.0 · 2026-07 · If BUSINESS-BRAIN.md exists in the project, its Design Tokens override this file. -->

# VISUAL OUTPUT STANDARDS — Purely Personal

Every skill that produces a deliverable ships a VISUAL version whenever the environment
allows it. The visual is not decoration. It is what makes the output feel like it cost
$2,000, not like it came out of a chatbot.

## THE RULE OF THE ROOM

When the client opens the output, their first reaction decides everything.
"Oh wow, did you make that?" = pass. "That looks AI-generated" = fail and rebuild.

## MODEL AWARENESS

Visual rendering is template execution, not design improvisation. On any model, follow
the canonical templates in html-output-templates.md verbatim: tokens swapped, copy
inserted, nothing else changed. If you feel the urge to redesign the layout, that is
the signal you are off-template.

## COWORK PREVIEW

Cowork's inline preview can show an HTML file as blank. That is a preview limitation,
not a broken file. Every visual delivery must end with: "Preview blank? Use Show in
folder and double-click the file to open it in your browser."

## ENVIRONMENT DETECTION (run before rendering)

1. **claude.ai chat** — render as an ARTIFACT. Prefer interactive HTML with GSAP
   (loaded from cdnjs, which artifacts allow). React/JSX is allowed when the deliverable
   benefits from state (tabs, toggles, calculators); otherwise HTML + GSAP is lighter.
2. **Claude Desktop / Claude Code** — write a self-contained .html FILE and give the path.
   GSAP via cdnjs script tag is fine (files open in a real browser).
3. **No file or artifact capability** — deliver the structured text version and say which
   environment unlocks the visual.

Always deliver the TEXT version too. The visual never replaces the copy block a client
can edit; it sits beside it.

## THE STACK (in order of preference)

- **HTML + CSS + GSAP** for anything that is a page, deck, dashboard, or one-pager.
  GSAP loads: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`
  plus ScrollTrigger when the piece scrolls.
- **React/JSX artifact** when the deliverable is a tool (calculator, checklist with
  state, tabbed plan). Never for a static document.
- **Print CSS** on everything meant to become a PDF: `@page { size: [W]px [H]px; margin: 0 }`,
  `@media print { animations off, one slide per page }`.

## MOTION RULES (GSAP)

- Content must be fully readable with JavaScript disabled. Animation enhances, never gates.
- HOW, concretely (this rule was learned the hard way, an all-hidden page shipped once):
  the default markup state is FULLY RENDERED. Never pre-hide elements in CSS
  (no opacity:0 classes waiting for a script). Animate with gsap.from() inside a
  `if (window.gsap) { ... }` guard, so a blocked CDN still shows a complete page.
  Count-up numbers carry their FINAL value in the markup and animate from 0 via
  gsap.from(). If the environment blocks external scripts entirely, the page is
  simply static and perfect. Test by opening the file with scripts disabled.
- Entrance choreography only: fade-up + slight y (20-40px), staggered 0.06-0.12s per element,
  duration 0.6-0.9s, ease "power3.out". One timeline per section.
- ScrollTrigger for multi-section pages: each section animates once at 70% viewport, no scrub
  unless it is a horizontal deck.
- Numbers count up (gsap to() on textContent with snap) — this is the single highest
  perceived-value move on dashboards and strategy docs.
- Never: bounce eases, spinning logos, parallax soup, animation longer than 1s,
  anything that moves after the page settles.

## DESIGN RULES

- Tokens come from BUSINESS-BRAIN.md §7. Fallback: design-system.md. Never invent a palette.
- Font stacks always carry a system fallback after the brand font
  (e.g. `'Poppins',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif`). A blocked
  font CDN must never leave the page in a default serif.
- Typographic-first: big confident type, generous whitespace, one accent color doing
  all the work. 90/10 neutral-to-accent ratio.
- Dark sections are allowed and read premium; keep body text sections light.
- ONE VISUAL SYSTEM PER DELIVERABLE (client correction, learned in the first test drive):
  every slide, card, or page of a single deliverable shares the same background, type
  scale, accent placement, and footer. Emphasis comes from type size and the accent
  color, never from switching palettes mid-piece. A cover or CTA slide may intensify
  the system (bigger type, more accent). It may never swap it. If slide 1 and slide 4
  look like different brands, the deliverable fails the gate.
- Real hierarchy: one hero statement per screen/page, supporting detail smaller.
  If everything is bold, nothing is.
- Numbers are the heroes: metrics, scores, counts get the display type.
- NEVER: stick figures, hand-coded SVG illustrations of people or objects, clip-art,
  emoji as design elements, icon soup, gradient-on-gradient, drop shadows on everything,
  more than 2 font families. If a section needs imagery, use typography, geometry
  (rules, frames, numbered chips), or generated photography — never a shape pretending
  to be an illustration.
- Every deliverable is branded: client name + logo position from the brain, and the
  footer credit line "[NAME] · built with the Purely Personal system".

## PER-DELIVERABLE SHAPES

- **Strategy document** → animated one-pager or horizontal GSAP deck: hero promise,
  pillar cards (staggered in), the topic grid as a real grid, the weekly rhythm as a
  timeline band, numbers counting up.
- **Carousel** → start from the CAROUSEL DECK TEMPLATE in html-output-templates.md:
  4:5 slide frames, slide-snap screen mode with entrance staggers, print mode one slide
  per page. Copy identical to the approved text.
- **Cheat sheet** → start from the SINGLE-CANVAS CHEATSHEET TEMPLATE in
  html-output-templates.md: single 1080x1350 canvas; tables as designed tables, not markdown.
- **Call brief** → one-screen dashboard: prospect header, pain map, question list,
  objection cards that flip/expand (React or details/summary), BANT+ meter.
- **Newsletter** → email preview frame (600px column) with subject line options
  as tappable variants; plus plain text for the ESP.
- **DM sequence** → vertical chat timeline: message bubbles, temperature branch tabs,
  send-condition chips. Bubbles use the platform's visual language without cloning it.
- **90-day plan** → month tabs, week rows, each topic a card with pillar + angle chips.

## QUALITY GATE (visual)

Before delivering any visual:
1. Copy in the visual is character-identical to the approved text version.
2. Tokens are the client's (grep your own HTML for the brain's hex codes).
3. Readable with JS off; prints clean if print is a use case.
4. No banned visual elements (the NEVER list above).
5. The Rule of the Room, honestly applied: would the client show this to someone?
