# Fixture 1 · linkedin-caption-writer · Maya Chen (clean run)

Brain to attach: `fixtures/personas/maya-chen-BUSINESS-BRAIN.md`
Run per `fixtures/README.md`, then smoke-test with /matchmaker.

## INPUT

Paste as the user message:

```
Write today's LinkedIn post.

Topic: the Burn Forensics pillar. This week I found $28k of annual burn at a client:
a "temporary" analytics tool from 2024 still billing $2,340/month, forgotten after
the team that used it was restructured. The founder thought their burn was $195k/month.
Goal of the post: get Series A founders to question their own tooling line.
CTA: the Numbers Audit call.
```

## EXPECTED PROPERTIES

Every check is mechanical: count, search, or quote. No quote, no pass.

- [ ] Output contains zero em dashes.
- [ ] Character count of the post body is 1,100 to 1,500 and the measured number is stated in the delivery footer.
- [ ] Hook is under 12 words and contains a specific number from the input ($28k, $2,340, or $195k).
- [ ] No unresolved placeholders: nothing in [brackets], no "your ICP", no "[ADD".
- [ ] Zero words from Maya's banned list: synergy, holistic, journey, empower, unlock.
- [ ] Exactly one CTA, and it is the Numbers Audit call (the brain's [CTA-DEFAULT]), not an invented one.
- [ ] Sign-off, if the post carries one, is "Mind the runway, Maya". "Daniel" appears nowhere except an optional credit line.
- [ ] Every number in the post traces to the input or the brain. No invented clients, results, or stats.
- [ ] P.S. present and under 20 words.
- [ ] Invisibility Diagnostic score shown with a quoted line per point earned.
- [ ] Delivery block shows framework name, hook archetype, and measured character count.
- [ ] Output ends with the telemetry footer line: "Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker."
