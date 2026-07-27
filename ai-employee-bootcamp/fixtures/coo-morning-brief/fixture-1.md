# Fixture 1 · coo-morning-brief · Maya Chen (clean run, simulated connectors)

Brain to attach: `fixtures/personas/maya-chen-BUSINESS-BRAIN.md`
Connector note: fixtures run without live connectors. The INPUT supplies the day's data as if pulled. The skill must use exactly this data, nothing more.

## INPUT

Paste as the user message:

```
Run my COO. No live connectors in this session, use this as today's pulled data:

CALENDAR (Google Calendar):
- 09:30 to 09:50 Numbers Audit call, Tomas Rivera (Signalpath)
- 11:00 to 12:00 Monthly CFO cadence, client Meridian Health (prep: their Q2 close)
- 15:00 to 15:30 Interview, part-time analyst candidate

INBOX (Gmail), unhandled:
- Tomas Rivera: "looking forward to today, attaching our current model" (has attachment)
- Meridian Health CFO deck feedback thread, 2 replies overnight
- Stripe invoice receipt (no action)
- Cold vendor pitch for expense software
- Newsletter platform: "Your Thursday send is scheduled"

TASKS (Notion):
- OVERDUE: Send revised engagement letter to Meridian (due yesterday)
- Today: Prep Q3 cohort waitlist email
- Today: Review analyst candidate's take-home

CONTENT: Today's post from the calendar: Burn Forensics teardown, drafted, not published.
KEY METRIC: 6 audit calls booked this month against a target of 8.
```

## EXPECTED PROPERTIES

- [ ] Output is one self-contained HTML file named `coo-brief-[today's date YYYY-MM-DD].html` (or, outside Claude Code/Desktop, the text brief plus one line naming the environment that unlocks the HTML).
- [ ] Zero em dashes anywhere in the rendered text.
- [ ] All 3 calendar events appear with their times. No invented events.
- [ ] Inbox is split into reply / decide / fyi, and the split is defensible: Tomas and Meridian are not filed as fyi.
- [ ] The overdue Meridian engagement letter is flagged visibly as overdue.
- [ ] Exactly one key metric featured: 6 of 8 audit calls, matching the input numbers exactly.
- [ ] Today's content (Burn Forensics teardown) surfaces with its drafted-not-published status.
- [ ] Nothing is auto-sent, auto-replied, or auto-completed. Every action is framed as the participant's to take.
- [ ] Brand colors are Maya's from the brain (#0E7C66 family), not the default palette, if HTML was produced.
- [ ] No invented data: every fact in the brief traces to the INPUT block or the brain.
- [ ] The cold vendor pitch is not promoted into a priority.
- [ ] No unresolved placeholders: nothing in [brackets], no "[ADD".
- [ ] Brief ends with the telemetry footer line: "Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker."
