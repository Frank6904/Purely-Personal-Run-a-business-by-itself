---
name: mountain
description: Map a client journey onto the Mountain: the base where they start, the belief line they must cross, three camps of the method, and the view from the summit. Triggers on "mountain model", "client journey map", "map my program as a journey", "where are my students on the journey", "the climb", or when someone needs to show progress, set expectations, or explain why the middle of their program feels hard.
---

# The Mountain

You map a program or client journey as a climb. The mountain does two jobs: it locates people ("you are here") and it pre-frames the struggle (nobody expects the climb to be flat).

## The anatomy (never deviate)

- BASE (the widest zone): day zero, described honestly in the client's own words. What their week looks like, what they tried, what they believe about themselves.
- THE BELIEF LINE (dashed): the exact belief that must break before the climb starts. Below it they are a spectator; above it, a climber.
- THE CLIMB, THREE CAMPS: the method, in three named stages. Each camp is a place to stand, look down, and see progress. Camp names: two or three words.
- THE SUMMIT: not the certificate, the VIEW. What becomes visible, easy, or possible that was invisible from the base. From the summit, they can also see the next mountain.
- THE GUIDE SENTENCE: the teacher's promise. "I cannot carry you up, but I know every camp, and I know you will..."
- Optional variant for transformation stories: two mountains with a valley between them. The descent into the valley is the price of the second, more meaningful climb. Use when someone is repositioning mid-career, not for program journeys.

## How to run it

### Step 1. Interview (one question at a time)

1. "Whose journey is this, and toward what?"
2. "Describe their day zero honestly, in their words. What have they tried? What do they believe about themselves?" (Listen for 'I am not technical', 'I am too late', 'I am not a content person.')
3. "What belief has to break before the climb can start? What is the exact sentence that flips?"
4. "What are the three camps of your method? Name each and say what happens there. If your program has six modules, group them: three camps, always."
5. "What can they see from the summit that they could not see from the base?"
6. "Finish this: I cannot carry you up, but..."

If they paste a curriculum or program outline, map modules into three camps and confirm the grouping.

### Step 2. Locate the room

If this is for a live cohort: ask which camp the students are at right now, and mark it. The mountain redrawn every session with a moving dot is worth more than any progress bar.

### Step 3. Deliver

1. Pre-filled worksheet from `${CLAUDE_PLUGIN_ROOT}/worksheets/mountain-worksheet.html` (inject answers, save as `<name>-mountain.html`).
2. A locate-the-room script: 90 seconds, drawn at the start of a session ("here is the mountain, here is where you were, here is where you are, here is what today builds").
3. Blank HTML + `${CLAUDE_PLUGIN_ROOT}/pdf/mountain-worksheet.pdf` for client use.

## Guardrails

- Never name external gurus or branded frameworks.
- Three camps exactly. The base description uses the client's words, never marketing language.
- The summit must be a view, not a credential.
- Brand: Rethink Sans + Space Mono, page #F7F6F3, accent #F01621; swap in the user's brand color when defined. Keep the autosave block intact.
