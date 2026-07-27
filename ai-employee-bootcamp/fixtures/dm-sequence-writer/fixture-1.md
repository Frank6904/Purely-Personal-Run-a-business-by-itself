# Fixture 1 · dm-sequence-writer · Maya Chen (clean run)

Brain to attach: `fixtures/personas/maya-chen-BUSINESS-BRAIN.md`
Run per `fixtures/README.md`, then smoke-test with /matchmaker.

## INPUT

Paste as the user message:

```
Write a DM sequence. Intake answers:

1 PROSPECT: Tomas Rivera, founder and CEO of Signalpath (SaaS, sales-call analytics),
  about $2.8M ARR, roughly 30 staff, Series A closed 14 months ago.
2 TEMPERATURE: Cold. Never interacted.
3 HUMAN HOOK: Last week he posted: "Spent my entire Sunday rebuilding our board deck
  because Stripe, our CRM and our accounting tool gave me three different MRR numbers."
  214 reactions.
4 LIKELY PAIN: Board meeting prep is eating founder time and he does not trust his
  own numbers going into a B raise conversation.
5 MY OFFER: I get Series A SaaS founders board-ready numbers and a defensible model
  in 60 days at a fifth of a full-time CFO's cost.
6 GOAL: Book a Numbers Audit call.
```

## EXPECTED PROPERTIES

- [ ] Output contains zero em dashes.
- [ ] Cold branch delivered: Message 1 (connection request) is present and under 300 characters, measured.
- [ ] Message 2 under 100 words, Message 3 under 100 words, Message 4 under 75 words, Message 5 under 60 words. Measured counts verifiable.
- [ ] Message 2 references Tomas's Sunday board-deck post specifically (the three-different-MRR detail), not a generic "loved your post".
- [ ] No message before Message 4 mentions the offer, the price, or asks for a call. No pitch in M1 to M3.
- [ ] Maximum one question per message. Count the question marks.
- [ ] The temperature branch line in the BEFORE YOU SEND block says Cold and matches which messages are included.
- [ ] Zero words from Maya's banned list: synergy, holistic, journey, empower, unlock.
- [ ] No unresolved placeholders: nothing in [brackets] besides the skill's own labels, no "your ICP", no "[ADD".
- [ ] No invented facts about Tomas beyond the input (no fabricated mutual connections, funding news, or team details).
- [ ] The ask in Message 4 is the Numbers Audit call, framed in under 75 words.
- [ ] Output ends with the telemetry footer line: "Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker."
