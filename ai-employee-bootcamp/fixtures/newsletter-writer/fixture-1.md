# Fixture 1 · newsletter-writer · Maya Chen (clean run)

Brain to attach: `fixtures/personas/maya-chen-BUSINESS-BRAIN.md`
Run per `fixtures/README.md`, then smoke-test with /matchmaker.

## INPUT

Paste as the user message:

```
Write this week's edition of "Mind the Runway".

This week's idea: most founders compute runway as cash divided by last month's burn.
That number lies because it ignores committed spend already signed: annual contracts
renewing next quarter, the two offers out to candidates, the AWS committed-use deal.
Teach the reader to compute "committed runway" instead, with a simple 3-line method.
This connects to the client story in my brain (the founder who found 5 months of
extra runway).
CTA: the Numbers Audit call.
```

## EXPECTED PROPERTIES

- [ ] Output contains zero em dashes.
- [ ] Exactly 3 subject line options, each using a different formula, each under 50 characters with the measured count stated per option.
- [ ] One subject line is recommended with a one-sentence reason.
- [ ] Body word count 400 to 600, measured number stated.
- [ ] The 3-line committed-runway method from the input appears in the body. Not a generic runway explainer.
- [ ] The client story used is the one from the brain (5 months of extra runway, $12M raise). No invented clients or numbers.
- [ ] Exactly one CTA: the Numbers Audit call.
- [ ] Sign-off is "Mind the runway, Maya". Not "Until next week, Daniel".
- [ ] Zero words from Maya's banned list: synergy, holistic, journey, empower, unlock.
- [ ] No unresolved placeholders: nothing in [brackets], no "your ICP", no "[ADD".
- [ ] Delivery footer states mode, framework, word count, and Invisibility score with quotes.
- [ ] Output ends with the telemetry footer line: "Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker."
