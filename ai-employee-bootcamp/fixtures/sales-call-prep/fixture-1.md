# Fixture 1 · sales-call-prep · Maya Chen (clean run)

Brain to attach: `fixtures/personas/maya-chen-BUSINESS-BRAIN.md`
Run per `fixtures/README.md`, then smoke-test with /matchmaker.

## INPUT

Paste as the user message:

```
Prep me for a call. Intake answers:

1 WHO: Tomas Rivera, founder/CEO of Signalpath. SaaS, sales-call analytics,
  ~$2.8M ARR, ~30 staff, Series A closed 14 months ago. Sells to mid-market
  sales teams.
2 HOW THEY FOUND ME: DM sequence converted. He replied to my message about his
  board-deck post and booked himself.
3 WHAT I KNOW (his exact words from our DMs):
  "Spent my entire Sunday rebuilding our board deck because Stripe, our CRM and
  our accounting tool gave me three different MRR numbers."
  "Honestly I don't know if our model would survive diligence."
  "We want to raise in Q1 but my co-founder thinks we should wait."
4 GOAL: Explore. Understand the problem deeply before presenting anything.
```

## EXPECTED PROPERTIES

- [ ] Output contains zero em dashes.
- [ ] All 9 sections present, in order: pre-call intelligence, objective + success definition, opening, qualification questions, pain excavation, objection scripts, transition to close, red flags, post-call follow-up.
- [ ] At least two of Tomas's exact quoted lines from the input appear verbatim in the brief (quotes preserved).
- [ ] Call goal in the header says Explore, and the transition-to-close section matches an explore-goal call, not a pitch-and-close script.
- [ ] Exactly 3 objection scripts, each with all four parts: Stated / Real / Response / Move.
- [ ] Every offer fact cited matches the brain exactly: $4,500/month, 3-month minimum, 60-day board-pack guarantee. No drifted numbers.
- [ ] Pain excavation covers all 3 levels with questions specific to the three-different-MRR situation, not generic discovery questions.
- [ ] The follow-up email template ends with Maya's sign-off "Mind the runway, Maya" and is a draft to edit, never framed as auto-sent.
- [ ] Zero words from Maya's banned list: synergy, holistic, journey, empower, unlock.
- [ ] No invented facts about Signalpath beyond the input (no fabricated investors, tools, or team names).
- [ ] No unresolved placeholders: nothing in [brackets] besides the skill's own labels, no "your ICP", no "[ADD".
- [ ] Output ends with the telemetry footer line: "Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker."
