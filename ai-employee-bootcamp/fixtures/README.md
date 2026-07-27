# Test Fixtures · AI Employee Bootcamp
## Purely Personal · by Daniel Paul

Canonical test inputs plus property checklists for the 10 most-used skills. Attach a fixture, run the skill, check every box. That is how you prove a skill works, and how you prove it still works after you tailor it.

**There are no example outputs here. That is deliberate.** An example output becomes a copy-paste temptation, and a skill graded against its own crib sheet proves nothing. The checklist is the contract. The output stays yours.

---

## WHAT IS IN HERE

```
fixtures/
  personas/
    maya-chen-BUSINESS-BRAIN.md      → fixture-1 brain (fractional CFO)
    rachel-okafor-BUSINESS-BRAIN.md  → fixture-2 brain (leadership coach for EMs)
  <skill-name>/
    fixture-1.md   → clean run. Maya Chen, everything the skill needs.
    fixture-2.md   → hard run. Rachel Okafor, plus one deliberate hard case.
```

Covered skills: linkedin-caption-writer, newsletter-writer, dm-sequence-writer, sales-call-prep, content-strategy, linkedin-carousel-builder, linkedin-cheatsheet-builder, coo-morning-brief, cmo-daily-post, cro-weekly-prospects.

---

## HOW TO RUN A FIXTURE

1. Open a fresh session. No other context attached.
2. Attach the persona brain the fixture names (from `personas/`) as the session's `BUSINESS-BRAIN.md`.
3. Paste the fixture's INPUT block as your message and run the skill.
4. Grade the output against the fixture's EXPECTED PROPERTIES. Every assertion is mechanical: count it, search for it, or quote it. In Claude Code, verify counts with a shell command (`wc -m`, `grep`). No vibes-based passes.
5. Then run `/matchmaker` in smoke-test mode with the fixture attached. It runs the same class of checks independently and reports pass/fail per line.

**Pass = every box checked.** One fail = log it, fix the skill with `/tailor`, rerun the same fixture. Rerunning the identical input is the point: it tells you whether the fix worked or just moved the problem.

---

## THE HARD CASES ARE DELIBERATE

Every fixture-2 contains one hard case on purpose: no win to report this week, a prospect with no posts, an empty pipeline, disconnected connectors, a business with no case studies yet. Real weeks look like this. A skill that only passes on easy days is not proven, it is lucky. The checklist for each fixture-2 includes assertions about how the skill must behave when the data is not there: labeled empty states, honest gaps, zero invented facts.

---

## AFTER THE FIXTURES: CLOSE THE LOOP

Fixtures prove a skill works on canonical input. `../TELEMETRY.md` proves it keeps working on real input: after using any output, log SHIPPED AS-IS, LIGHT EDIT, or REWROTE. Skills that keep getting rewritten jump the Matchmaker's audit queue and become the next tailor targets.

Fixture → smoke test → telemetry → audit queue. That is the whole proof layer.

---

*AI Employee Bootcamp · Fixtures · Purely Personal · by Daniel Paul*
