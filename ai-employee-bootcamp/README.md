# AI Employee Bootcamp Plugin
## Purely Personal · by Daniel Paul
### Complete Plugin Architecture · v5.2.0 · Updated July 2026

---

## WHAT THIS PLUGIN IS

One brain. Five executives. Real work, on a schedule.

Install once. Your AI team runs on a schedule, drafting posts, finding prospects, briefing your morning, reporting your revenue, while you sleep.

---

## THE STRUCTURE

```
Layer 1, Your Brain
  Your Business Brain folder (7 foundation documents)
  /build-my-business-brain → fills BUSINESS-BRAIN.md from your foundation documents
  Everything downstream reads from this.

Layer 2, The Build Room
  /matchmaker    → audits skills against your foundation
  /tailor        → customises skills to your specific business
  /build-your-own-employee → builds new employees from scratch

Layer 3, The AI CEO
  /ceo           → orchestrates all executives, one answer

Layer 4, The Executives
  /cmo-daily-post        → Marketing (daily post, hooks, pinned comments)
  /cro-weekly-prospects  → Sales (10 prospects, sequences, pipeline review)
  /coo-morning-brief     → Operations (calendar, inbox, tasks, content)
  /cfo-weekly-revenue    → Finance (revenue, pipeline, unpaid invoices)

Layer 5, The Skills (wired to executives)
  CMO skills:
    /linkedin-caption-writer     → posts in participant's voice
    /content-strategy            → content pillars and positioning
    /content-pillars-extractor   → builds 3–5 content territories
    /content-calendar-generator  → 30-day posting calendar
    /batch-writing-sequencer     → timed batch writing session plan
    /newsletter-writer           → weekly email in participant's voice
    /linkedin-carousel-builder   → 8–12 slide document carousel + caption + branded HTML deck
    /linkedin-cheatsheet-builder → save-worthy one-page cheat sheet (listicle / comparison / do's & don'ts)

  CRO skills:
    /outreach-prospector         → full intelligence brief per prospect
    /outreach-writer             → 5-message sequence per prospect
    /outreach-closer             → conversation diagnosis + next message
    /outreach-reactivator        → re-engage gone-quiet or cold leads
    /deal-tracker                → pipeline triage + next-action plan
    /sales-call-prep             → discovery call brief + objection scripts
    /dm-sequence-writer          → standalone DM sequences

Layer 6, Connectors
  Gmail · Google Calendar · Notion · Apify · Google Drive · Canva · Publisher
```

---

## EXECUTIVES AND THEIR SKILLS

### CMO, Marketing
**Runs:** Daily (weekdays, 7:30 AM)
**Skills wired:**
- `linkedin-caption-writer`, writes the post
- `content-pillars-extractor`, knows what territory to post in
- `content-calendar-generator`, knows which slot to fill today
- `batch-writing-sequencer`, for weekly batch sessions
- `linkedin-carousel-builder`, turns a post or topic into a document carousel *(new in v5.0.0)*
- `linkedin-cheatsheet-builder`, builds a save-worthy one-page cheat sheet *(new in v5.0.0)*
- Hook generator (embedded in CMO skill)
- Pinned comment writer (embedded in CMO skill)

### CRO, Sales
**Runs:** Every Monday (8:00 AM)
**Skills wired:**
- `outreach-prospector`, intelligence brief per prospect
- `outreach-writer`, 5-message sequence per prospect
- `outreach-closer`, diagnoses active conversations
- `outreach-reactivator`, re-engages cold leads
- `deal-tracker`, weekly pipeline triage
- `sales-call-prep`, pre-call brief for booked calls

### COO, Operations
**Runs:** Daily (weekdays, 7:00 AM)
**Connectors used:** Notion · Gmail · Google Calendar
**Output:** Branded HTML morning brief

### CFO, Finance
**Runs:** Every Friday (6:00 PM)
**Connectors used:** Notion · Gmail
**Output:** HTML revenue dashboard

---

## THE 5 RECOMMENDED ROUTINES

As of v5.0.0 every skill has a built-in headless mode: when a routine runs it, the skill
never waits for input, picks its strongest option and states why, marks missing data as a
labeled empty state or `DEFAULT — assumed` note, and delivers the result as a **Gmail
DRAFT (never sent)**. Check your Gmail Drafts folder each morning — that's where every
routine's output lands.

### Routine 1, COO Morning Brief
```
Name: COO Morning Brief
Schedule: Weekdays at 7:00 AM
Instructions: Run the COO morning brief. Pull from Notion, Gmail, and Google Calendar. 
Output as HTML using my brand colors from my documents. Save the file. 
Then create a Gmail draft with the subject "Morning Brief – [Today's Date]" 
and paste the brief content into the email body. Run headless: never send the email, 
never wait for my input — if data is missing, note it in the brief and continue.
Folder: [My Business Brain] or [GitHub repo]
```

### Routine 2, CMO Daily Post
```
Name: CMO Daily Post
Schedule: Weekdays at 7:30 AM
Instructions: Run the CMO daily post skill. Check my 30-day content calendar for today's 
slot. Generate 5 hooks, write the post in my voice using my Voice DNA document. 
Score it on the Invisibility Diagnostic. Then create a Gmail draft with subject 
"LinkedIn Post Draft – [Today's Date]" containing the scored post. Run headless: 
pick the strongest hook yourself and say why — never wait for my input, never send, 
draft only.
Folder: [My Business Brain] or [GitHub repo]
```

### Routine 3, CRO Weekly Prospects
```
Name: CRO Weekly Prospects
Schedule: Mondays at 8:00 AM
Instructions: Run the CRO weekly prospects skill. Find 10 qualified LinkedIn prospects 
matching my ICP using Apify. Run a full intelligence brief on each. For each one, draft 
a personalised 5-message DM sequence in my voice. Output as an HTML prospect pack. 
Then create a Gmail draft with subject "Weekly Prospect List – [Date]". Run headless: 
if Apify is unavailable, degrade honestly to the next-best data source and label it — 
never invent prospects, never wait for my input, never send, draft only.
Folder: [My Business Brain] or [GitHub repo]
```

### Routine 4, CFO Weekly Revenue
```
Name: CFO Weekly Revenue
Schedule: Fridays at 6:00 PM
Instructions: Run the CFO weekly revenue skill. Summarise this week's revenue activity, 
pipeline movement, and any unpaid invoices. Flag anything that needs my attention. 
Output as a clean HTML dashboard. Then create a Gmail draft with subject 
"Weekly Revenue Report – [Week of Date]". Run headless: mark any metric you can't 
verify as a labeled empty state — never estimate silently, never wait for my input, 
never send, draft only.
Folder: [My Business Brain] or [GitHub repo]
```

### Routine 5, Content Planning
```
Name: Weekly Content Planning
Schedule: Sundays at 9:00 AM
Instructions: Run the content-pillars-extractor to review my content territories, 
then run the content-calendar-generator to plan next week's posts. 
Output as an HTML content calendar. Then create a Gmail draft with subject 
"Content Plan – Week of [Date]". Run headless: never wait for my input — make the 
strongest call, state the assumption, never send, draft only.
Folder: [My Business Brain] or [GitHub repo]
```

---

## SKILL COUNT

| Category | Skills |
|----------|--------|
| Foundation | 1 (build-my-business-brain) |
| Executive layer | 5 (CEO, CMO, CRO, COO, CFO) |
| Content skills | 10 (caption writer, viral hook generator, content strategy, pillars, calendar, batch, repurposer, newsletter, carousel builder, cheatsheet builder) |
| Sales skills | 7 (prospector, outreach writer, closer, reactivator, deal tracker, call prep, DM writer) |
| Build tools | 3 (matchmaker, tailor, build-your-own) |
| **Total** | **26 skills** |

---

## REQUIRED FOUNDATION DOCUMENTS

Before running any skill, the participant's Business Brain folder must contain:

### Personal Authority Foundation
- `personal-story-[name].md`
- `voice-dna-[name].md`

### Business Authority Foundation
- `icp-[name].md`
- `messaging-[name].md`
- `rule1-[name].md`
- `positioning-[name].md`
- `business-inbox-[name].md` (older folders may use `inbox-[name].md` — both are accepted)

A single `BUSINESS-BRAIN.md` is the preferred source and overrides all of the above.

---

## WHAT CHANGED IN v5.2.0

- v5.2.0: Authority carousel design system (author chrome, UI mockup cards, prompt cards, inline logos), funnel infographic cheatsheets.

## WHAT CHANGED IN v5.1.1

- v5.1.1: canonical visual templates, model-proof rendering, Cowork preview guidance

## WHAT CHANGED IN v5.1.0

- `/build-my-business-brain` skill: reads every foundation document it can find, fills the Business Brain template with quoted real numbers and phrases, interviews you one question at a time for the gaps, and locks your brand hex codes into §7 (with a labeled default if you have none yet)
- Day 2 pair tailoring: the Tailor's default after a Matchmaker audit is `linkedin-caption-writer` + `linkedin-carousel-builder` fitted together in one run, since they share the same voice and brain work
- Matchmaker audits any skill, including third-party skills bought or downloaded anywhere, and every full-audit report now closes with an automatic handoff: audit → tailor → smoke test in one conversation
- Test fixtures + telemetry: `fixtures/` checklists for the 10 most-used skills and the `TELEMETRY.md` edit-distance loop (landed just before this release)

## WHAT CHANGED IN v5.0.0

- Business Brain everywhere — every skill reads `BUSINESS-BRAIN.md` first, foundation docs second, labeled defaults last
- Evidence gates — skills refuse to invent ICP, proof, or metrics; missing data becomes a labeled empty state
- Shared visual standards — one design reference fanned into every skill's HTML output
- 2 new builders — `linkedin-carousel-builder` and `linkedin-cheatsheet-builder`
- Apify honesty ladder — CRO degrades honestly through data sources and labels which one it used
- Headless routine mode — scheduled runs never wait for input and deliver as Gmail drafts (never sent)
- Bug fixes — CFO run-rate math, stub skill upgrades, foundation-file naming consistency

---

## PROVING IT WORKS

Two instruments, one loop.

- **`fixtures/`**: canonical test inputs plus mechanical property checklists for the 10 most-used skills, two fixtures each (one clean run, one deliberate hard case). Attach a fixture's persona brain, paste the input, run the skill, check every box, then run /matchmaker in smoke-test mode. No example outputs on purpose: the checklist is the contract, the output stays yours.
- **`TELEMETRY.md`**: the edit-distance loop. After using any output, log one of three grades: SHIPPED AS-IS, LIGHT EDIT, or REWROTE. One sheet, three grades, one 15-minute weekly review. Skills that keep getting rewritten jump the Matchmaker's audit queue and become the next /tailor targets.

Fixture → smoke test → telemetry → audit queue. That is the proof layer.

---

## UPDATING YOUR FORK

If you forked this repo during the bootcamp, pull new versions like this:

**Easiest:** on your fork's GitHub page, click **Sync fork → Update branch**.

**Or from the command line:**

```bash
git remote add upstream https://github.com/danielpaulai/Purely-Personal-Run-a-business-by-itself
git fetch upstream
git merge upstream/main
```

**Will this overwrite my stuff?** No. Your `BUSINESS-BRAIN.md`, foundation documents, and
Tailor-fitted skill zips live outside the plugin folders, so updates never touch them. If
you edited the plugin's skill files directly, expect merge conflicts — keep your
customisations in Tailor-fitted copies instead and the merge stays clean.

**Installed via the plugin marketplace instead of a fork?** Just run:

```bash
claude plugin marketplace update purely-personal-marketplace
```

---

*AI Employee Bootcamp · Purely Personal · by Daniel Paul · v5.2.0 · Updated July 2026*
