# Telemetry · The Edit-Distance Loop
## Purely Personal · by Daniel Paul

The honest measure of an AI employee is not "did it produce output." It is: **how much did you change the output before you shipped it?** That distance, tracked over weeks, tells you exactly which skills are earning their seat and which need the Tailor.

---

## THE SYSTEM

After you USE any skill output (post it, send it, read the brief), log one grade:

| Grade | Meaning | Mechanical test |
|-------|---------|-----------------|
| **SHIPPED AS-IS** | Used it untouched | Zero edits |
| **LIGHT EDIT** | Kept the structure, tweaked the words | Under 2 minutes of changes |
| **REWROTE** | Kept the idea, replaced the words | You opened a blank page or gutted paragraphs |

Log the grade, the skill name, and the date. That is the whole habit. Ten seconds per output.

Every skill's delivery ends with a reminder line, so you never have to remember on your own:

> Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker.

---

## THE TRACKER (Google Sheets, ready to copy)

Create one sheet per participant (or one tab per person on a team sheet). Columns:

| Column | Type | Example |
|--------|------|---------|
| Date | date | 2026-07-27 |
| Skill | text | linkedin-caption-writer |
| Output type | text | LinkedIn post / newsletter / DM sequence / call brief / morning brief / prospect pack |
| Grade | one of: SHIPPED AS-IS · LIGHT EDIT · REWROTE | LIGHT EDIT |
| What you changed | one line, only if edited | "Softened the CTA, hook was fine" |
| Time saved estimate | minutes | 35 |

Header row to paste straight in:

```
Date	Skill	Output type	Grade	What you changed	Time saved estimate
```

Rules that keep the data honest:
- Log only outputs you actually used. An output you never used is its own signal: note it as REWROTE with "never used" in the change column.
- "What you changed" is one line, not an essay. "Hook felt generic" is enough.
- Time saved is a gut estimate versus writing it yourself. Rough is fine, blank is not.

---

## THE WEEKLY REVIEW RITUAL (team, 15 minutes)

Same slot every week. Friday works.

1. **Count grades per skill** for the week. A pivot table on Skill x Grade does it in one click.
2. **Read the REWROTE column out loud.** The "what you changed" lines are the diagnosis: same complaint twice is a pattern, not a mood.
3. **Pick the target.** The skill with the most REWROTE grades this week is the next `/tailor` target. Two skills tied: take the one with more total runs.
4. **Fix and verify.** Tailor the skill, rerun its fixtures from `fixtures/`, smoke-test with `/matchmaker`.
5. **Celebrate the boring number.** Percentage SHIPPED AS-IS, week over week, is the one metric of the whole system. It should climb.

A skill that logs REWROTE two weeks running jumps the Matchmaker's audit queue automatically: mention your tracker when you run `/matchmaker` and it reads the pattern (see the TELEMETRY READ note in smoke-test mode).

---

## HOW THE LOOP CLOSES

```
fixtures/          → prove the skill works on canonical input
/matchmaker        → smoke-test the fitted skill, pass/fail per check
you, daily         → grade every used output: SHIPPED / EDITED / REWROTE
weekly review      → most-rewritten skill becomes the next tailor target
/tailor            → fix it, rerun the fixtures, close the loop
```

No dashboards, no integrations, no new tools. One sheet, three grades, one weekly look.

---

*AI Employee Bootcamp · Telemetry · Purely Personal · by Daniel Paul*
