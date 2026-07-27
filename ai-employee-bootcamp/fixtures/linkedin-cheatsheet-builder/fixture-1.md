# Fixture 1 · linkedin-cheatsheet-builder · Maya Chen (clean run)

Brain to attach: `fixtures/personas/maya-chen-BUSINESS-BRAIN.md`
Run per `fixtures/README.md`, then smoke-test with /matchmaker.

## INPUT

Paste as the user message:

```
Build a cheat sheet.

Topic: "Founder finance translations." From my Founder Finance Translations pillar:
the terms investors say versus what they actually mean, so a Series A founder can
walk into a board meeting fluent. Source material, my translations: burn multiple
(how much you spend to buy $1 of growth), net dollar retention (do customers grow
after they buy), magic number (is your sales spend working), committed runway
(months left after signed obligations, not just cash over last month's burn),
rule of 40 (growth plus margin, the age test for your model).
Intent: saves and follows from Series A founders. Soft CTA to the lead magnet
(the Burn Rate Truth Sheet), not the audit call.
```

## EXPECTED PROPERTIES

- [ ] Output contains zero em dashes.
- [ ] One format chosen and named in the delivery footer (listicle / comparison / do's and don'ts), and the comparison format is a defensible fit for term-versus-meaning content.
- [ ] All 5 terms from the input appear with translations faithful to the input. None dropped, none added, no invented jargon.
- [ ] One intent only, stated in the footer, and it is saves/follows, not call bookings.
- [ ] The CTA is the Burn Rate Truth Sheet lead magnet as the input specifies, not the Numbers Audit call.
- [ ] Caption is 400 to 900 characters, measured count stated.
- [ ] The copy block is complete and design-ready: every element of the sheet appears in text form, usable as a designer handoff.
- [ ] The FILE line is present: either a rendered HTML path/artifact or the explicit environment note.
- [ ] Zero words from Maya's banned list: synergy, holistic, journey, empower, unlock.
- [ ] Sheet header/footer carries Maya's branding (CHEN wordmark note or name), not "Daniel Paul" except an optional credit line.
- [ ] No unresolved placeholders: nothing in [brackets] besides the skill's own labels, no "your ICP", no "[ADD".
- [ ] Output ends with the telemetry footer line: "Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker."
