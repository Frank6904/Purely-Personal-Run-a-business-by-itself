---
name: session-recap
description: Turn a finished session, workshop, or talk into one beautiful visual-summary canvas — a single 16:9 likeable soft-3D recap with a backbone metaphor, content clusters, verbatim quotes, and a next-3-moves flag — ready to send as follow-up or post as social proof. Triggers on "session recap", "graphic recording", "visual summary", "recap canvas", "one-page visual of my session", "visual minutes", or when someone pastes a session transcript, recording notes, or outline and wants the shareable visual keepsake.
---

# Session Recap

You turn a delivered session into ONE canvas: the whole journey on a single likeable 16:9 canvas. This is the AFTER-the-session skill — the follow-up asset that markets the workshop while it serves the attendees. Unlike live teaching visuals, beauty and density are allowed here: nobody has to redraw this, they just have to want to keep it.

Read `${CLAUDE_PLUGIN_ROOT}/references/art-direction.md` (the likeable soft-3D look) and `${CLAUDE_PLUGIN_ROOT}/references/storytelling-grammar.md` (the pro graphic-recording checklist — layout-first, 3 size tiers, color discipline, synthesis over transcription).

## How to run it

### Step 1. Get the source

Best input: a transcript (Granola meeting notes, Zoom transcript, or recording notes). Also fine: the session outline plus the user's memory of what landed. If a `stage-arc` map exists for this session, use its beats as the cluster skeleton. Ask only what's missing:
1. "Transcript or notes? Paste or point me at them."
2. "Session name, date, audience?"
3. "Which moment got the biggest reaction?" (That's the starburst.)

### Step 2. Mine the content

From the source, extract:
- 5–9 content clusters (the beats that were actually taught, not the plan).
- 2–3 verbatim quotes worth a speech bubble — prefer attendee words over presenter words.
- The single biggest aha (accent-red starburst, only red element on the canvas).
- The 3 next moves the audience was told to take (the flag cluster).
- The journey shape → pick the backbone: Road (linear session), Mountain (built to one big insight), Hub (Q&A/non-linear), Bridge (old way → new way).

Confirm the cluster list with the user in one message before drawing.

### Step 3. Deliver the canvas

**`<session-name>-recap.html`** — a page holding one 1920×1080 canvas in the art direction (dark stage, glows, soft-3D):
- Title banner top-left: session name, date, presenter.
- The backbone metaphor as a soft glowing path spanning the canvas; clusters along it in teaching order, each = rounded glass card + Fluent 3D icon + 5-words-max heading + up to 3 Space Mono lines. Characters (correctly cast — hero, attendees, even the client's dog) appear at the human moments.
- Speech-bubble quote cards near their clusters; the biggest aha as the single red-glowing element (with Sparkles); "Your next 3 moves" card bottom-right.
- Signature line bottom edge: presenter name + brand URL in Space Mono.
- Below the canvas (print-hidden): a "Download as PNG" button that renders the SVG to a 1920×1080 PNG via an inline canvas — no external libraries — plus a plain-text summary of the clusters for accessibility and easy copy-paste into a follow-up email.

Offer two variants when asked: the full recap (attendee follow-up) and a teaser crop (3 clusters + starburst, for social — "the full canvas goes to attendees").

## Guardrails

- One canvas. If the session genuinely needs two, it was two sessions — pick the half that sells the next one.
- Quotes must be verbatim from the source. Never invent attendee praise.
- Density limit: if a cluster needs more than 3 annotation lines, cut — a recap canvas is a memory hook, not the notes.
- Max 3 support colors + ink + one accent-red element. The starburst is the only red.
- Never name graphic-recording gurus or branded frameworks in the output.
