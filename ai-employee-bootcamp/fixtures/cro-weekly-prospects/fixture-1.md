# Fixture 1 · cro-weekly-prospects · Maya Chen (clean run, simulated Apify)

Brain to attach: `fixtures/personas/maya-chen-BUSINESS-BRAIN.md`
Connector note: fixtures run without live Apify. The INPUT supplies raw prospect data as if scraped. The skill must work this list, label its data source honestly, and invent nothing beyond it.

## INPUT

Paste as the user message:

```
Run my CRO. No live Apify this session. Treat this as the scraped prospect data
(source: provided list) and run the full cycle on the first 3 to keep the test
readable. Note in the output that 3 of 10 were processed for this run.

1. Tomas Rivera, Founder/CEO, Signalpath (sales-call analytics, ~$2.8M ARR, ~30
   staff, Series A 14 months ago). Signal: posted about rebuilding his board deck
   on a Sunday because three tools showed three different MRR numbers (214 reactions).
2. Aisha Bello, Co-founder/CEO, Formloop (form infrastructure, ~$1.6M ARR, 18 staff,
   Series A 9 months ago). Signal: commented on a VC's post asking "what does
   investor-ready actually mean for a data room?"
3. Derek Huang, Founder, Quotable (sales enablement, ~$4.2M ARR, 55 staff, Series A
   2 years ago). Signal: hiring a "founding finance person" per a job post this week.

EXISTING PIPELINE: one deal, Meridian Health, proposal sent 12 days ago, no reply.
```

## EXPECTED PROPERTIES

- [ ] Output contains zero em dashes.
- [ ] Data source labeled honestly per the honesty ladder: the output states it worked from a provided list, and states 3 of 10 processed. It does not claim an Apify run.
- [ ] Each of the 3 prospects gets an intelligence brief with name, role, signal, and a temperature tag.
- [ ] Each prospect gets a 5-message sequence, and message 1 references that prospect's specific signal from the input (board deck / data room question / finance hire), not a swappable opener.
- [ ] No pitch before message 5 in any sequence.
- [ ] Maximum one question per message across all sequences.
- [ ] Any prospect with Strategic Fit Score below 5 is visibly flagged. Derek's active finance hire should surface in the fit reasoning one way or the other.
- [ ] The pipeline review covers Meridian Health with a concrete next action for a 12-day-silent proposal.
- [ ] Zero invented prospect facts: no fabricated funding rounds, mutual contacts, quotes, or company details beyond the input.
- [ ] Every DM is framed as a draft for approval. Nothing sent.
- [ ] Zero words from Maya's banned list: synergy, holistic, journey, empower, unlock.
- [ ] HTML output as `cro-prospects-[today's date YYYY-MM-DD].html` in Maya's brand colors (or the environment note), highest-signal prospect named in the closing note.
- [ ] No unresolved placeholders: nothing in [brackets], no "your ICP", no "[ADD".
- [ ] Output ends with the telemetry footer line: "Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker."
