# Fixture 2 · dm-sequence-writer · Rachel Okafor (hard case: prospect has no posts)

Brain to attach: `fixtures/personas/rachel-okafor-BUSINESS-BRAIN.md`
Hard case built in: the prospect has never posted on LinkedIn. There is no content to hook on. The skill must build the human hook from the non-content facts given and must not reference posts that do not exist.

## INPUT

Paste as the user message:

```
Write a DM sequence. Intake answers:

1 PROSPECT: Priya Nair, newly promoted Engineering Manager at Loopwell (Series C,
  logistics software). Manages 7 engineers. LinkedIn shows the promotion 3 months
  ago. She has NEVER posted. No articles, no comments visible.
2 TEMPERATURE: Warm. We connected 2 months ago after a conference. Never spoken.
3 HUMAN HOOK: Only two verifiable facts: the promotion 3 months ago (title change
  on her profile), and we both attended LeadDev London in June (her profile lists it).
4 LIKELY PAIN: Three months in, still carrying an IC workload while running the team.
5 MY OFFER: I turn senior engineers into managers their teams don't quit on, inside
  the first 90 days, via a 12-week cohort.
6 GOAL: Book a 15-minute fit call.
```

## EXPECTED PROPERTIES

- [ ] Output contains zero em dashes.
- [ ] Warm branch delivered: no connection request message. The sequence starts at the opener. The BEFORE YOU SEND block says which messages were skipped and why.
- [ ] The opener's hook uses ONLY the two verifiable facts (the promotion, LeadDev London). The sequence never references a post, article, or comment by Priya, because none exist.
- [ ] Message word limits hold: opener under 100 words, value bridge under 100 words, soft ask under 75 words, exit under 60 words. Measured.
- [ ] Maximum one question per message.
- [ ] No pitch, price, or call ask before the soft ask message.
- [ ] The profile audit in BEFORE YOU SEND flags the thin-data situation explicitly rather than papering over it.
- [ ] Zero words from Rachel's banned list: rockstar, 10x, superpower, servant-leader, journey.
- [ ] No invented facts about Priya (no fabricated team size changes, projects, tech stack, or quotes).
- [ ] The soft ask is the 15-minute fit call.
- [ ] No unresolved placeholders: nothing in [brackets] besides the skill's own labels, no "your ICP", no "[ADD".
- [ ] Output ends with the telemetry footer line: "Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker."
