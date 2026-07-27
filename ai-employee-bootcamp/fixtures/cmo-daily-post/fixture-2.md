# Fixture 2 · cmo-daily-post · Rachel Okafor (hard case: no content calendar exists)

Brain to attach: `fixtures/personas/rachel-okafor-BUSINESS-BRAIN.md`
Hard case built in: there is no 30-day calendar to pull a slot from. The skill must say so, propose a topic from the brain's pillars with its reasoning labeled, and never pretend a calendar slot existed.

## INPUT

Paste as the user message:

```
Run my CMO. Heads up: I have not built a content calendar yet. No slots exist.
Whatever you write today, tell me where the topic came from.
Context you can use: it's 10 weeks until the September cohort (12 seats, 4 booked).
Run headless: pick the strongest hook yourself.
```

## EXPECTED PROPERTIES

- [ ] Output contains zero em dashes.
- [ ] The missing calendar is stated plainly at the top of the run. The output does NOT cite a fabricated "Day N" slot.
- [ ] The chosen topic is explicitly attributed to one of the brain's 5 pillars by name, with one line of reasoning, and the output recommends building the calendar (pointing to content-calendar-generator) as the fix.
- [ ] Exactly 5 hooks, each under 12 words, each a different type, strongest chosen with a one-sentence reason.
- [ ] The post uses only facts from the brain and the input. The 10-weeks/12-seats/4-booked context may appear; invented client stories may not.
- [ ] Invisibility Diagnostic scored with quotes per point.
- [ ] Exactly 3 pinned comment options.
- [ ] Exactly one CTA: the 15-minute fit call.
- [ ] P.S. present.
- [ ] Zero words from Rachel's banned list: rockstar, 10x, superpower, servant-leader, journey.
- [ ] Sign-off, if present, is "Ship people, not code. Rachel".
- [ ] HTML output as `cmo-post-[today's date YYYY-MM-DD].html` in Rachel's brand colors (or the environment note), post text character-identical to the approved post.
- [ ] No unresolved placeholders: nothing in [brackets], no "your ICP", no "[ADD".
- [ ] Output ends with the telemetry footer line: "Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker."
