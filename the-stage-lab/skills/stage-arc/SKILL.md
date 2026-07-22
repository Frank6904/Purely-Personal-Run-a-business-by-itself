---
name: stage-arc
description: Structure a talk, workshop, or online session on the Duarte sparkline — the what-is/what-could-be oscillation — and decide exactly where each visual lands, including the one STAR moment. Triggers on "structure my talk", "stage arc", "sparkline", "plan my session flow", "keynote structure", "where should the visuals go", "map my presentation", or when someone has a session outline, topic, or brain dump and wants the delivery arc before building slides or visuals.
---

# Stage Arc

You turn a session topic or outline into a delivery arc: the emotional oscillation, the beat sheet, and the visual plan. This runs BEFORE the session is built. Its output feeds `story-slides` and `live-visual` (which build the visuals the arc calls for).

Read `${CLAUDE_PLUGIN_ROOT}/references/storytelling-grammar.md` (sparkline rules) and `${CLAUDE_PLUGIN_ROOT}/references/art-direction.md` (the likeable soft-3D look every output uses).

## How to run it

### Step 1. Interview (one question at a time; skip any answered by a pasted outline)

1. "What's the session? Topic, format (online session / stage keynote / workshop), and length?"
2. "Who's in the room, and what is their 'what is' — the frustrating reality they live in today? In their words."
3. "What's the 'what could be' — the future you're selling them on?"
4. "What's the ONE model or idea they must remember if they forget everything else?" (This becomes the STAR moment.)
5. "What do you want them to DO when it ends — the call to adventure?"

If they paste an existing outline, transcript, or curriculum doc, mine it for these five answers and confirm your reading before building.

### Step 2. Build the arc

- Open in "what is" — make the gap sting before any solution appears.
- 3–5 oscillations for 60–90 min, 2–3 for a 20 min keynote. Each turn is a named beat.
- Place the STAR moment at roughly the 60% mark: it is the live build of the model (hand off to `live-visual`) or the story's emotional peak slide (`story-slides`).
- Assign visuals by the contrast rule: "what is" beats are mostly spoken (pain in words), "what could be" beats get pictures (possibility in images). Every visual gets a one-line spec: type, geometry or beat, cast, and its job in one sentence.
- End on the new bliss + the call to adventure. The last visual is the completed model with the audience's next step drawn onto it.

### Step 3. Deliver two outputs

1. **The arc map** — a single HTML file (`<session-name>-arc.html`) in the art direction: dark stage, the sparkline as a smooth glowing path (cool glow on what-is dips, warm glow on what-could-be rises), each beat a soft node with timestamp, the STAR moment the only red element (glowing). Below it, the beat sheet table: beat, minutes, altitude, what you say, what's shown.
2. **The visual shot-list** — every visual the arc calls for, in build order, each with: type (story slide / live visual / demo), cast (which characters, ages, animals — per the casting rules), and its one-line job — ready to feed into `story-slides` or `live-visual` ("build visual 3 from my arc").

## Guardrails

- One STAR moment. If the user wants three big reveals, make them choose: "Which one do they tattoo?"
- Never open with agenda, credentials, or housekeeping — the arc opens in the audience's pain.
- Timings must sum to the stated length minus 10% buffer.
- Never name Duarte or any guru in the output. The structure belongs to the user.
