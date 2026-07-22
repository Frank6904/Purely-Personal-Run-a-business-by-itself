---
name: story-slides
description: Turn any story into a Pixar-style cinematic slide deck — real 3D-animation-film imagery generated from the plugin's permanent 13-character cast (Higgsfield, ~2 credits/scene), one emotional beat per slide, consistent characters, assembled as a self-contained offline HTML deck for stage and online sessions. Triggers on "story slides", "illustrate this story", "visual story", "story deck", "cinematic slides", "pixar style slides", "turn this story into pictures", or when someone wants images advancing behind them while they narrate.
---

# Story Slides

The flagship skill. One story → 5–9 Pixar-grade cinematic slides, generated from the permanent cast, narrated live by the presenter. Read these first:
- `${CLAUDE_PLUGIN_ROOT}/cast/CAST.md` — the 13 permanent characters, their identity strings, and the edit-based generation rules.
- `${CLAUDE_PLUGIN_ROOT}/references/storytelling-grammar.md` — beat spine, beat→shot→light table, caption laws.
- `${CLAUDE_PLUGIN_ROOT}/references/art-direction.md` — typography, deck styling, composition.

## How to run it

### Step 1. Get the story
Ask only what's missing: the story (who, what breaks, what turns, how it ends); venue + narration length (~30–60s per slide); whose story it is (real clients get fictionalized — cast members play them; never a real person's likeness).

### Step 2. Beats + casting + budget (confirm BEFORE generating)
- 5–9 beats on the 8-beat spine; per beat: `{action, emotion, location, shot, light, caption}`.
- Cast from `CAST.md` by role archetype — kids play kids, elders play elders, Buddy/Pixel for pets. One hero per deck; ≤2 supporting characters per scene.
- Tell the user the beat list, the cast, and the credit estimate (~2 credits × beats + 1–2 retries) in one short table and get a yes. Never generate before this yes.

### Step 3. Generate the scenes (edit, don't create)
For each beat, ONE Higgsfield generation (`generate_image`, model `nano_banana_pro`, 16:9, 2k):
- Reference: the cast member's anchor (upload the PNG from `${CLAUDE_PLUGIN_ROOT}/cast/` via `media_upload`, or reuse a prior job id) in `medias` with role `image`. Two characters in one scene → pass both anchors.
- Prompt = identity string (verbatim from CAST.md) + the beat's scene/action/emotion + shot & light from the grammar table + "subject in the {left|right} third, large clean negative space on the {other} side for text overlay" (alternate sides) + "Cinematic film still, 3D animated feature-film style" + "Keep the facial features, hairstyle and wardrobe exactly the same as the reference image. No text, no watermark."
- QA each result (view it): same face/wardrobe as the anchor, negative space clear, no text artifacts. Drift → regenerate that beat once with a stronger preservation clause; report any spend beyond the estimate.

### Step 4. Assemble the deck
One self-contained `<story>-deck.html`: images base64-embedded full-bleed (offline on stage), caption in the reserved negative space — kicker (Space Mono, red) / headline ≤5 words (Rethink Sans 800) / optional sub, gradient scrim only if the image needs it. Click/space/→ advance, ← back, progress dots, `N` presenter-notes overlay with the narration line per slide, fade transitions, optional slow Ken Burns zoom (transform-only, respect `prefers-reduced-motion`). Print view = beat table + narration script.

### Step 5. Final check
Click through full-screen: hero identical on every slide, captions never sit on the character, beat 6 is the darkest frame, the last slide mirrors the first but warmer. Report total credits spent.

## Guardrails
- 5–9 slides; the story must turn.
- Permanent cast only — invent a new character ONLY if no archetype fits, then follow CAST.md's new-member procedure (generate anchor once, add the row).
- Confirm beats + cast + credits before any generation; never regenerate anchors.
- Headlines ≤5 words; captions never describe the image (caption laws).
- No Higgsfield connected or user says "no credits" → deliver the full prompt pack (identity strings + per-beat prompts) for manual generation instead, and assemble the deck from images the user drops in a folder.
