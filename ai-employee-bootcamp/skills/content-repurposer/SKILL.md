---
name: content-repurposer
description: Repurposes any existing content into new LinkedIn formats without losing the original voice or insight. Trigger with "repurpose this", "turn this into a carousel", "repurpose my podcast", "get more from this post", "new angle on this", "extract posts from this", or any request to transform existing content into a new format. One idea, maximum reach.
category: Content
---

# Content Repurposer
# AI Employee Bootcamp · Purely Personal · by Daniel Paul

## REFERENCE FILES, READ BEFORE EVERY RUN

- `references/copywriting-frameworks.md`, format performance, best repurposing paths by content type, the 8 frameworks
- `references/human-writing-standards.md`, hook science for repurposed content, invisible diagnostic
- `references/execution-playbooks.md`, writing standards for every output format
- `references/ai-pattern-blacklist.md`, run before every output
- `references/voice-dna.md`, voice rules (overridden by the brain, see Step 0)
- `references/post-writing-variations.md`, Variation A (Framework-Heavy) vs Variation B (Story-Flow)

---

## YOUR JOB

Extract maximum value from content that already exists, without losing what made it worth reading. The original voice, insight, and specificity all survive. What changes is only the container.

**The No Invention Rule (law):** nothing invented. Every piece must trace back to something in the source. If a specific detail is needed and not in the source, flag it and ask before writing (interactive) or leave a labeled `[NEEDS DETAIL: ...]` placeholder (headless).

---

## STEP 0 — CONTEXT CHECK (always first, never skipped)

Look for the participant's context, in this priority order:
1. **BUSINESS-BRAIN.md** — project root, Project Knowledge, or attached to the chat. The single source of truth. If present, its Voice DNA, ICP, offer, and banned words OVERRIDE every default in this skill's references folder.
2. If no brain: the individual foundation documents — `icp-[name].md`, `voice-dna-[name].md`, `positioning-[name].md`, `messaging-[name].md`, `rule1-[name].md`, `personal-story-[name].md`, `business-inbox-[name].md` — in the workspace repo root, `/docs`, or `/foundation` (the matchmaker's convention). Use them the same way.
3. If neither: use the bundled references (Daniel Paul's defaults) and label the output header: `DEFAULT VOICE — personalize by adding your BUSINESS-BRAIN.md to this project`.

Resolve [NAME] (default: Daniel Paul) now. Never ship a default where a participant value exists. Never re-ask for anything the brain already answers. The source content still comes from the user — the brain tells you whose voice it must survive in.

---

## WHEN RUNNING HEADLESS (routine / scheduled)

No human is in the loop. Never wait for a choice:
- Skip the one intake question. State the assumption it would have resolved, labeled `DEFAULT — assumed`, and proceed.
- No source content provided by the routine → output nothing invented: one flag, "No source content found. Point the routine at a post, transcript, or file, then rerun."
- Repurposing path not specified → pick the default path for the detected content type (table below) and say so in one line.

**Routine output contract:** the deliverable is a Gmail DRAFT (never send) with email-safe HTML (inline styles only, no external scripts, no GSAP) or clean plain text, and/or a file committed to the repo when the routine prompt says so. Interactive mode keeps the full HTML file behavior per `references/html-output-templates.md`.

---

## STEP 1, INTAKE AND EXTRACTION

Read the source content fully, then extract and write down before anything else:

1. **The single strongest insight** (not the most obvious one)
2. **Best proof point** — the most specific number, result, or name in the source
3. **The tension** — what belief the source challenges
4. **Voice signature** — 2-3 phrasings or rhythms that make it sound like the author

Then ask **ONE question only**, the most important unknown (usually: which format they want, or who the repurposed piece is for). If the answer is already clear from context or the brain, skip the question and build.

---

## STEP 2, PICK THE REPURPOSING PATH

Detect the content type and apply its default path (from `references/copywriting-frameworks.md`):

| Source type | Default path |
|---|---|
| Long post | Carousel brief + hook bank |
| Story post | Cheatsheet + 3 new-angle posts |
| Podcast / transcript | 5 posts + 2 carousel briefs + cheatsheet |
| Framework post | Deep-dive thread + lead magnet outline |
| Client win | Case study post + testimonial carousel |

The user's stated preference always overrides the default. State the chosen path and the source type in one line before producing anything.

---

## STEP 3, PRODUCE THE OUTPUTS

Available output formats: LinkedIn post (text) · Carousel brief (slide-by-slide) · Cheatsheet brief · Hook bank (10 variations) · 3 new-angle posts · Short-form thread.

For every produced piece:
- **Trace it:** each piece opens with a one-line source note (`From: [the line/moment in the source it grew from]`) in the working output, removable on request.
- **Posts** follow `references/post-writing-variations.md`: pick Variation A (Framework-Heavy, optimised for saves) or Variation B (Story-Flow, optimised for comments and DMs), state the choice before writing.
- **Carousel and cheatsheet briefs** follow the standards in `references/execution-playbooks.md`, slide-by-slide, copy written out, never "add content here".
- **Hook banks** apply the hook science in `references/human-writing-standards.md`: under 12 words, specific detail, open gap.
- The insight, proof point, and tension from Step 1 must each appear in at least one produced piece. If one doesn't fit anywhere, say so rather than forcing it.

---

## STEP 4, DELIVERY FORMAT

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REPURPOSED CONTENT, [NAME]
Purely Personal · by Daniel Paul
Source: [type, one-line description] · Path: [chosen path]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXTRACTED CORE
Insight: [one line] · Proof: [one line] · Tension: [one line]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Each produced piece, clearly labeled with its format]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

One line after delivery: `Want any piece pushed further, say the format and I'll go deeper.`

---

## FINAL GATE, BEFORE DELIVERING

□ Every piece traces to something in the source (No Invention Rule holds)
□ The strongest insight, best proof point, and tension each landed in at least one piece
□ Voice signature survived: read a piece aloud next to the source, same author
□ Every post scored on the invisible diagnostic (target 4/4), variation stated
□ Zero em dashes, zero banned words (blacklist + the brain's banned list)
□ No unresolved placeholders except deliberately labeled `[NEEDS DETAIL: ...]` flags

---

*AI Employee Bootcamp · Content Repurposer · Purely Personal · by Daniel Paul*
