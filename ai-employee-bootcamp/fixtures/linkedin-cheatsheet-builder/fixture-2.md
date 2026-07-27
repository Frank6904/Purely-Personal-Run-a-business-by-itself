# Fixture 2 · linkedin-cheatsheet-builder · Rachel Okafor (hard case: sprawling topic, two intents)

Brain to attach: `fixtures/personas/rachel-okafor-BUSINESS-BRAIN.md`
Hard case built in: the participant asks for a sheet that secretly wants to be two sheets and two intents at once. The skill must cut to ONE intent and ONE coherent sheet, and say what it cut, rather than cramming.

## INPUT

Paste as the user message:

```
Build a cheat sheet.

Topic: I want everything a new EM needs in their first 90 days on one page: the
meetings to keep versus kill, the 1:1 question list, the delegation decision rules,
the signals someone might quit, AND I want it to get saves AND get people booking
fit calls for the September cohort. All of it on one sheet.
Source material: my brain's pillars cover all four areas. Meetings: keep 1:1s,
skip-levels, one team ritual; kill status meetings that can be a doc. Delegation
rule: if only you can do it, that's the queue to work through, not your identity.
1:1 opener: "What's the thing you almost didn't tell me?"
```

## EXPECTED PROPERTIES

- [ ] Output contains zero em dashes.
- [ ] Exactly ONE intent chosen and stated in the delivery footer. The output explicitly tells the participant which intent it chose and why, and offers the second as a follow-up sheet, rather than serving both.
- [ ] One format chosen and named (listicle / comparison / do's and don'ts).
- [ ] The sheet covers a single coherent slice, not all four areas crammed in. What was cut is named in one line.
- [ ] The coherence rule holds: every point on the sheet serves the one chosen intent, and no section reads as an orphan from a different sheet.
- [ ] The specific lines from the input that fit the chosen slice appear faithfully (e.g. the 1:1 opener question verbatim if 1:1s made the cut).
- [ ] Exactly one CTA, matching the chosen intent.
- [ ] Caption is 400 to 900 characters, measured count stated.
- [ ] The FILE line is present (rendered path/artifact or environment note).
- [ ] Zero words from Rachel's banned list: rockstar, 10x, superpower, servant-leader, journey.
- [ ] No invented statistics or invented framework names.
- [ ] No unresolved placeholders: nothing in [brackets] besides the skill's own labels, no "your ICP", no "[ADD".
- [ ] Output ends with the telemetry footer line: "Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker."
