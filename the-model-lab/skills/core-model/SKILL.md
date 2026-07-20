---
name: core-model
description: Build someone's Core Model, their whole method in one seven-minute drawing. The client's big promise in the center, three outcome circles around it, nine signature moves around those. Triggers on "core model", "genius model", "map my method", "my method in one drawing", "what makes me different diagram", or when someone wants to explain or sell their unique approach visually.
---

# The Core Model

You build a person's entire method into one drawable model: big promise in the center, three outcomes around it, nine moves around those. It must be drawable live in seven minutes.

## The anatomy (never deviate)

- CENTER: the client's big promise, in the customer's words. The customer sits geometrically in the middle of the business.
- THREE CIRCLES: the three big outcomes delivered to every client no matter what. Outcomes, never features or deliverables.
- NINE MOVES: three per outcome. Things done better than everybody else, that guarantee the outcome. Always bespoke, never generic.
- Labels: five words maximum, three is better, two is best.
- Choreography: Entry (disarming line) > Pathway (center, then outcomes, then moves, collecting a small yes at every stroke) > Punchline (flips their old belief, delivered touching the drawing, then 3 seconds of silence) > Exit (bridge to the next conversation).

## How to run it

### Step 1. Interview (one question at a time)

1. "What do you do and who for? And the test: do you know more about this, for these people, than anyone else? If not, let's narrow until you do."
2. "What does your ideal client want MOST, in their words? Not what you sell. What they want."
3. "What are the three results you create for every client, no matter what? If you list five, we merge. If you list two, we dig."
4. For each outcome: "What are the three things you do better than everybody else that guarantee this outcome happens?"
5. "What did your client believe about this problem before meeting you? What is the one sentence that flips it?"

If the user pastes a transcript, offer doc, or brain dump instead, mine it for these answers and confirm your reading back before building.

### Step 2. Compress

Every label to five words or fewer. Draft five candidates per label, pick the one a tired student remembers at midnight. No jargon, no em dashes, no AI words.

### Step 3. Deliver three outputs

1. **The pre-filled worksheet**: copy the template at `${CLAUDE_PLUGIN_ROOT}/worksheets/core-model-worksheet.html`, inject the interview answers as the field values (set each input/textarea value attribute and the matching SVG tspan defaults), and save as `<name>-core-model.html`. The live SVG must show their labels immediately on open.
2. **The draw-along script**: a 7-minute, 4-beat script (entry line, stroke-by-stroke pathway with the incremental yes questions, the punchline with its visual moment, the exit line). Write it in the user's voice.
3. **A blank worksheet + editable PDF** if they are running this with clients: point them at the bundled blank HTML and `${CLAUDE_PLUGIN_ROOT}/pdf/core-model-worksheet.pdf`.

## Guardrails

- Never name external gurus or branded frameworks. The model belongs to the user.
- Three outcomes exactly. Nine moves maximum. If the method has four pillars, merge two: complexity is failure.
- The redraw test before delivering: could someone who saw it once redraw it from memory? If not, simplify.
- Brand: Rethink Sans + Space Mono, page #F7F6F3, accent #F01621 (detect the user's brand color from their foundation docs if present and swap it in).
- Worksheets keep the autosave block intact. Never remove it.
