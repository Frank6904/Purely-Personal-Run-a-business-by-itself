---
name: live-visual
description: Turn one concept or framework into a likeable soft-3D diagram that builds live, element by element, as you teach — glowing cards, 3D icons, characters in the nodes, one keypress per idea. Triggers on "live visual", "draw this concept", "build this diagram live", "teaching diagram", "framework visual", "make this model visual", "diagram for my session", or "build visual N from my arc".
---

# Live Visual

One concept → one "soft diagram" that assembles in front of the room, one keypress per element, so the audience builds the idea with you. This replaces the old sketch-style live drawing. Read `${CLAUDE_PLUGIN_ROOT}/references/art-direction.md` (the soft-diagram spec + asset system) and the choreography rules below.

## How to run it

### Step 1. One concept
If handed a whole session, route to `stage-arc` first or ask which beat this serves. From a shot-list spec, build directly. Otherwise ask: the concept in one sentence; what the audience should DO with it; what they currently get wrong.

### Step 2. Choose the geometry
Hub (center + satellites), ladder/steps, bridge (old→new), funnel, flywheel/loop, or two-axis map — pick what the logic actually is; state the choice in one line. Center/first element = the promise. 5–9 elements max, labels ≤5 words.

### Step 3. Design the build choreography
Each keypress adds ONE element paired with one spoken line and a small-yes question ("makes sense?"). Order: anchor → elements in teaching order → connections → the red-accent punchline element last. Write the script table (step, what appears, what you say, the small yes).

### Step 4. Build
Self-contained HTML (`<concept>-visual.html`): dark stage per the art direction; each element a glowing rounded card/circle with a Fluent 3D icon (base64-embedded, fetched per the asset grammar) + label; soft glowing connectors; spring pop-in (250–350ms) per keypress; ←/→ navigation with step counter; `N` notes overlay containing the script; final state = the complete model; print view shows the finished diagram + script table.

### Step 5. Verify
Screenshot the final state: no overlaps, labels readable at back-of-room sizes, exactly one red accent, icons match their meaning. Fix before delivering.

## Guardrails
- Max 9 elements; needing more means wrong geometry — go back to Step 2.
- Icons must carry meaning (brain=memory, rocket=shipping) — never decorative filler.
- One red accent: the punchline element only.
- Sketch/whiteboard mode (rough.js) only if the user explicitly asks for a hand-drawn look.
