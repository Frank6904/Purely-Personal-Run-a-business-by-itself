---
name: batch-writing-sequencer
description: Takes a 30-day content calendar and builds a timed batch writing session plan. Groups posts by format, sequences easiest first for momentum, saves conversion posts for last, includes break points, ends with an editing pass. Outputs session blocks with exact time estimates, which posts to write in each block, and a done checklist. Trigger with "batch write my posts", "build my writing session", "help me write all 30 posts", "batch writing plan", or "write all my content in one sitting".
category: Content
---

# Batch Writing Sequencer
# AI Employee Bootcamp · Purely Personal · by Daniel Paul

## REFERENCE FILES, READ BEFORE EVERY RUN

- `references/execution-playbooks.md`, post writing standards for every format
- `references/copywriting-frameworks.md`, frameworks to speed up writing, time estimates per format
- `references/ai-pattern-blacklist.md`, run before every output
- `references/human-writing-standards.md`, invisible diagnostic (score every post 0-4)
- `references/voice-dna.md`, voice rules (overridden by the brain, see Step 0)
- `references/post-writing-variations.md`, Variation A (Framework-Heavy) vs Variation B (Story-Flow)

---

## YOUR JOB

Turn the 30-day calendar into a timed session plan that makes writing everything feel achievable. Goal: 30 days of content planned into under 2 focused hours of writing.

The sequencer does not write the posts. It builds the session that makes writing them fast: the order, the blocks, the breaks, and the editing pass. If the participant asks you to write during the session, each post follows the calendar entry's variation (A or B from `references/post-writing-variations.md`, stated before writing) and the voice rules from Step 0.

---

## STEP 0 — CONTEXT CHECK (always first, never skipped)

Look for the participant's context, in this priority order:
1. **BUSINESS-BRAIN.md** — project root, Project Knowledge, or attached to the chat. The single source of truth. If present, its Voice DNA, ICP, offer, and banned words OVERRIDE every default in this skill's references folder. If the brain or workspace contains a 30-day calendar (from the Content Calendar Generator), use it directly — do not re-ask for it.
2. If no brain: the individual foundation documents — `icp-[name].md`, `voice-dna-[name].md`, `positioning-[name].md`, `messaging-[name].md`, `rule1-[name].md`, `personal-story-[name].md`, `business-inbox-[name].md` — in the workspace repo root, `/docs`, or `/foundation` (the matchmaker's convention). Use them the same way.
3. If neither: use the bundled references (Daniel Paul's defaults) and label the output header: `DEFAULT VOICE — personalize by adding your BUSINESS-BRAIN.md to this project`.

Resolve [NAME] (default: Daniel Paul) now. Never ship a default where a participant value exists. Never re-ask for anything the brain already answers.

---

## WHEN RUNNING HEADLESS (routine / scheduled)

No human is in the loop. Never wait for a choice:
- Session preference not stated → default to B (weekly batches), labeled `DEFAULT — assumed`.
- No calendar found in the brain or workspace → output the plan shell with an empty state and one flag: "No 30-day calendar found. Run the Content Calendar Generator, then rerun."
- Never pause between blocks for confirmation. Deliver the full plan in one pass.

**Routine output contract:** the deliverable is a Gmail DRAFT (never send) with email-safe HTML (inline styles only, no external scripts, no GSAP) or clean plain text, and/or a file committed to the repo when the routine prompt says so. Interactive mode keeps the full HTML file behavior per `references/html-output-templates.md`.

---

## STEP 1, INTAKE

If Step 0 did not surface a calendar, ask for:
1. The 30-day calendar (paste it, or the file path)
2. Total post count (if not obvious from the calendar)
3. Session preference:
   A → All in one sitting
   B → Weekly batches (4 sessions)
   C → Custom (they name the session length, you fit the blocks)

Ask only for what's missing. One message.

---

## STEP 2, SORT THE POSTS

Apply the sorting logic in this exact order:

1. **Group by format.** All text posts together, all carousel briefs together, all polls together. Context-switching between formats is the biggest hidden time cost.
2. **Within each format, easiest first:** Educate → Authority → Story → Convert. Momentum comes from finishing, so the session starts where finishing is fastest.
3. **Conversion posts always last.** They carry the most weight and deserve the sharpest attention, after the writing muscles are warm.
4. **Insert a break point every 25-30 minutes** of planned writing (5 min break).
5. **End with the editing pass** (15 min): blacklist scrub, diagnostic score, voice check across everything written.

**Time estimates (from `references/copywriting-frameworks.md`):**
- Short text post (under 800 chars) → 4-6 min
- Medium text post (800-1,200 chars) → 8-12 min
- Long text post (1,200+ chars) → 15-20 min
- Carousel brief → 20-25 min
- Poll → 3-5 min

Use the midpoint of each range when totaling. State the total before building blocks; if a single session exceeds 2.5 hours of writing time, say so and recommend splitting (preference B) instead of pretending.

---

## STEP 3, BUILD THE SESSION BLOCKS

For every block:

```
BLOCK [N], [Time range], [Format]
Posts: [Day numbers + topics from the calendar]
Focus: [one micro-instruction for this block, e.g. "hooks first, write all 4 hooks before any body"]
Variation: [A / B / mixed, from the calendar entries]
Target time: [X min]
☐ Done
```

Rules:
- No block longer than 30 minutes of writing.
- Every block has exactly one format and one micro-instruction.
- Break rows appear between blocks: `BREAK, 5 min, stand up, no phone`.
- The final block is always `EDITING PASS, 15 min` with its own checklist (see gate).

---

## STEP 4, DELIVERY FORMAT

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BATCH WRITING SESSION PLAN, [NAME]
Purely Personal · by Daniel Paul
Calendar: [N] posts · Mode: [A / B / C] · Total: [X h Y min]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Session blocks in order, with breaks]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SESSION SUMMARY
Total posts: [N] · Writing time: [X min] · Breaks: [N] · Editing: 15 min
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EDITING CHECKLIST (final block)
☐ Every post scrubbed against the AI pattern blacklist
☐ Every post scored on the invisible diagnostic (target 4/4)
☐ Voice check: reads like [NAME], not like a content tool
☐ Zero em dashes, zero banned words, all CTAs singular
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

One line after delivery: `Start Block 1 and I'll write alongside you, or say "adjust" to resequence.`

---

## FINAL GATE, BEFORE DELIVERING THE PLAN

□ Every calendar post appears in exactly one block, none dropped, none doubled
□ Blocks are single-format, easiest intent first within format
□ Conversion posts are in the last writing block
□ A break every 25-30 minutes, editing pass at the end
□ Time estimates match the stated table, total stated and honest
□ If total writing time exceeds 2.5 hours in mode A, a split was recommended
□ Zero em dashes, zero banned words in the plan itself

---

*AI Employee Bootcamp · Batch Writing Sequencer · Purely Personal · by Daniel Paul*
