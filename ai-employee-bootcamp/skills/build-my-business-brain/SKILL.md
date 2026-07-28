---
name: build-my-business-brain
description: >
  Reads every foundation document it can find (claude.ai Project files, or the
  workspace folder in Cowork and Claude Code) and fills the Business Brain template
  completely: real numbers and real phrases quoted from source, never invented.
  Marks unsourced sections GAP and interviews the participant one question at a
  time until the brain is full or they say skip. Includes the design tokens step
  that locks the brand colors every HTML output in the system will carry. ALWAYS
  use this skill when the user says "build my business brain", "build my brain",
  "create my business brain", "fill the brain template", or wants their foundation
  documents turned into one BUSINESS-BRAIN.md. NOT for auditing skills against the
  brain, that is the matchmaker. Part of the Purely Personal system by Daniel Paul.
---

# Build My Business Brain · Purely Personal
# by Daniel Paul · Purely Personal

Read the reference file before writing a single section:
- `references/business-brain-template.md`: the 8-section canonical Business Brain template this skill fills

One job: produce a BUSINESS-BRAIN.md so specific that every downstream skill
sounds like this participant on its first run.

The brain is the single source of truth for the whole system. A vague brain makes
every skill vague at once. A specific brain fixes them all at once. One real number
beats three vague claims, every time.

---

## WHERE THIS SKILL SITS

**Reads from:** every foundation document in the project or workspace folder
**Writes:** BUSINESS-BRAIN.md, the one file every other skill reads FIRST
**Hands off to:** /matchmaker to fit the first skill against the finished brain
Tell the user the next step in one line after delivering.

---

## STEP 0 · CONTEXT CHECK (always first, never skipped)

Find every source before writing anything. Check, in this order:

1. **An existing BUSINESS-BRAIN.md** (also accept `business-brain.md` and `brain.md`)
   in Project Knowledge, attached to the chat, or in the workspace folder.
   If one exists, this run becomes an UPDATE: keep every filled section exactly as
   it is, fill only the gaps, and never overwrite a real value with a guess.
2. **The 7-file bootcamp convention.** In claude.ai: the Project files. In Cowork
   or Claude Code: the connected workspace folder, its root, or a `/docs` or
   `/foundation` subfolder. The filenames:

   | File | Feeds template section |
   |---|---|
   | `icp-[name].md` | §2 ICP |
   | `voice-dna-[name].md` | §5 Voice DNA |
   | `positioning-[name].md` | §1 Identity, §7 Design Tokens |
   | `messaging-[name].md` | §6 Messaging, §4 Proof |
   | `rule1-[name].md` | §6 Messaging (Rule of 1) |
   | `personal-story-[name].md` | §1 Identity (unique angle) |
   | `business-inbox-[name].md` (alias `inbox-[name].md`) | §3 Offer, §8 Standing Facts |

3. **Any recognizable foundation document** regardless of filename: a Voice DNA,
   ICP profile, Brand Positioning, Messaging House, offer doc, about page, sales
   page, pitch deck notes, testimonial list. If it holds real facts about this
   business, it is a source. Read it.
4. **Nothing found:** say so plainly, then build the brain entirely through the
   gap interview in Step 3. Never refuse to run because the folder is empty.

Open with one short block: documents found (by name), documents missing. Then start.

---

## STEP 1 · READ AND EXTRACT

Read every source found in Step 0, completely, before filling anything.

Extraction rules:
- **Quote, do not paraphrase.** The ICP pain lines, signature phrases, and hooks
  in the brain must be the participant's exact words from the source documents.
- **Real numbers only.** "80+ coaches", "3 clients in 6 weeks", "$4k/month".
  If a source gives a number, carry the number. If it marks it approximate,
  carry the "~" too.
- **Never invent.** No source, no value. An unsourced section becomes GAP, never
  a plausible guess. Downstream skills omit what is empty; they cannot un-learn
  what was fabricated.
- **Newest source wins.** On conflict between two documents, prefer the more
  recent or more specific one, and note the conflict to the user in one line.

---

## STEP 2 · FILL THE TEMPLATE

Work through `references/business-brain-template.md` section by section, in order:

1 Identity · 2 ICP · 3 Offer · 4 Proof · 5 Voice DNA · 6 Messaging ·
7 Design Tokens · 8 Standing Facts

For every field:
- **Source exists:** fill it with the quoted, specific value.
- **Source partially covers it:** fill what is covered, mark the rest `GAP`.
- **No source:** write `GAP` on the line. Do not leave template placeholder
  brackets behind; a live brain never ships with `[Full Name]` in it.

Keep the finished file under 400 lines. The template's own rule stands: specific
beats complete.

---

## STEP 3 · GAP INTERVIEW (one question at a time)

Count the GAP lines. Tell the user the number. Then interview:

- **ONE question per message. Never a questionnaire.** Ask the highest-impact gap
  first: Offer promise, then ICP pains in their words, then proof points, then
  voice, then everything else.
- Make each question concrete and answerable in one breath:
  "What is the exact promise of your offer, result plus timeframe? Example shape:
  'first 3 clients in 60 days'."
- Write the answer into the brain, confirm in one line, ask the next.
- **Skip is allowed.** If the user says skip (or "I don't have that yet"), leave
  the section empty with a one-line comment: `<!-- intentionally empty, skills
  will omit this rather than invent it -->`. Empty is safe. Invented is not.
- Stop when every GAP is filled or skipped.

---

## STEP 4 · DESIGN TOKENS (do not rush this one)

Before filling §7, tell the participant this, plainly:

**The colors in §7 become every HTML output the system produces: carousels,
dashboards, reports, briefs. Whatever goes here is what every visual will wear.**

Then:
1. Ask for their real brand hex codes (primary first, then accents), plus fonts
   if they have them.
2. **Validate the format.** A hex code matches `#` plus 3 or 6 hex characters
   (e.g. `#E8294C`). If what they paste does not validate, show them the corrected
   form or ask again. Never write an invalid code into the brain.
3. **No brand colors yet?** Default to Purely Personal red `#E8294C` and write
   this note next to it in §7: `<!-- default Purely Personal red, every visual
   will carry this color until you update it here -->`. Say the same to the user
   in one line so the default is a decision, not a surprise.

---

## STEP 5 · VOICE CHECK (before accepting §5)

Before locking the Voice DNA section, run the read-aloud test:

- Read the 10-second voice summary and the writing samples in §5 aloud.
- Ask: would this person actually say these sentences at a dinner table?
- If any line sounds assembled rather than spoken, or could describe any coach or
  consultant in the niche, push back once: quote the flat line, ask for one real
  sentence they have actually written or said, and use that instead.
- Three real writing samples beat every adjective. If §5 has zero samples, ask for
  one before accepting the section (skip is still allowed).

---

## STEP 6 · DELIVERY

Ship the finished brain as a file, never as a chat-only markdown block:

- **claude.ai:** write `BUSINESS-BRAIN.md` to `/mnt/user-data/outputs/` and present
  it as a downloadable file.
- **Cowork / Claude Code:** save `BUSINESS-BRAIN.md` to the workspace root and give
  the absolute path.

Delivery format:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURELY PERSONAL · YOUR BUSINESS BRAIN
by Daniel Paul
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sections filled: [N]/8 · Gaps skipped: [list, or "none"]
Sources used: [document names]
Brand color: [hex, and whether it is theirs or the labeled default]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Then exactly two lines:
1. Where to put it: claude.ai users add it to their Project files; Cowork and
   Claude Code users keep it in the workspace root. Every skill reads it from there.
2. `Next: /matchmaker to fit your first skill.`

---

## FINAL GATE · evidence required, then ship

**Score each 0 or 1, and QUOTE the exact line from the finished brain that earns
the point. No quote = no point.**
1. Specificity: quote one real number with its timeframe or context that came
   from a source document or the participant's own answer.
2. Voice: quote one §5 line that only this participant would say.
3. ICP truth: quote one §2 pain line that is the ICP's exact words, not a
   paraphrase.
4. Honesty: name every section that is empty or skipped, and confirm each is
   labeled rather than filled with a guess. A brain with honest gaps passes;
   a brain with one invented value fails.

**Mechanical checks (verify against the finished BUSINESS-BRAIN.md itself; in
Claude Code, verify with a shell command against the file):**
- Zero unresolved template placeholders: nothing in [brackets], no "GAP" left
  unlabeled, no template comment headers left in place.
- §7 primary color is a valid hex code, and if it is the `#E8294C` default, the
  default note sits beside it.
- Every number in §4 Proof traces to a source document or a direct user answer.
  If you cannot say where a number came from, remove it.
- File is under 400 lines.
- File saved and the location line delivered.

**Skill checks:**
□ Step 0 ran first: sources listed, found and missing named to the user
□ Every found document read completely before filling began
□ Update mode respected: no existing brain value overwritten with a guess
□ Gap interview: one question per message, highest-impact first, skip honored
□ Design tokens warning delivered before §7 was filled
□ Hex codes validated, default labeled if used
□ Voice check: read-aloud test run, flat lines challenged once
□ Delivered as a saved or downloadable file with the location line
□ Handoff line delivered: `Next: /matchmaker to fit your first skill.`
□ Final test: could a stranger run any suite skill with this brain and sound
  like this participant? If not, name the weakest section and offer one more pass

Then end the delivery with the telemetry footer:
`Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker.`
