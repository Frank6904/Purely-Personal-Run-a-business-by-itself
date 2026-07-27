# Fixture 2 · coo-morning-brief · Rachel Okafor (hard case: connectors down, empty calendar)

Brain to attach: `fixtures/personas/rachel-okafor-BUSINESS-BRAIN.md`
Hard case built in: Notion and Gmail are not connected, and the calendar is empty. The brief must degrade honestly per the connector-failure table: labeled empty states and fallback asks, never invented tasks or fake fullness.

## INPUT

Paste as the user message:

```
Run my COO. Connector situation this morning:

CALENDAR (Google Calendar): connected. Zero events today. Genuinely empty.
INBOX (Gmail): NOT CONNECTED, returns auth error.
TASKS (Notion): NOT CONNECTED.
CONTENT: No calendar exists yet. One thing I know myself: I promised a "Skip Level"
newsletter issue goes out tomorrow and it is not written.
KEY METRIC: 4 fit calls booked for the September cohort against a target of 12 seats.
```

## EXPECTED PROPERTIES

- [ ] Output is one self-contained HTML file named `coo-brief-[today's date YYYY-MM-DD].html` (or the text brief plus the environment note).
- [ ] Zero em dashes in the rendered text.
- [ ] The empty calendar is shown as a labeled empty state. The brief does NOT invent meetings, and does not silently skip the calendar section.
- [ ] Gmail and Notion appear with their not-connected status per the connector failure handling, each with the fallback ask (connect it, or paste the data), not with invented inbox items or tasks.
- [ ] The unwritten newsletter due tomorrow is surfaced as the day's priority, since it is the only real commitment in the input.
- [ ] Exactly one key metric: 4 of 12 seats, numbers matching the input exactly.
- [ ] The empty day is framed as usable (the brief may suggest using open time for the newsletter), but every suggestion traces to input or brain facts. No generic filler task list.
- [ ] Nothing auto-sent or auto-created anywhere.
- [ ] Brand colors are Rachel's from the brain (#2D5BFF family), not Maya's and not the default, if HTML was produced.
- [ ] Zero invented data points. Every fact traces to the INPUT block or the brain.
- [ ] No unresolved placeholders: nothing in [brackets], no "[ADD".
- [ ] Brief ends with the telemetry footer line: "Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker."
