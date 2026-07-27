---
name: dm-sequence-writer
description: >
  Writes complete LinkedIn DM sequences — connection requests, cold openers, follow-ups,
  warm signal responses, and re-engagement messages — calibrated to the specific prospect,
  their communication style, and the temperature of the conversation, with the Cardinal Rule
  applied: if you could send it to anyone, send it to no one. ALWAYS use this skill when the
  user says "write me a DM", "DM sequence", "LinkedIn messages", "cold outreach",
  "connection request", "follow-up", "message this prospect", or describes wanting to reach
  out to someone on LinkedIn without naming a format. ALSO use when the user pastes an
  ongoing DM thread and asks "they replied", "what do I say back", or "what next" — that
  runs LIVE CONVERSATION MODE. Do not draft prospecting messages
  directly without running this skill. NOT for Instagram DMs — this skill is LinkedIn-only.
  Part of the Purely Personal system by Daniel Paul.
---

# DM Sequence Writer — Purely Personal
# by Daniel Paul · Purely Personal

Read ALL reference files before writing a single message:
- `/references/voice-dna.md` — Daniel's voice rules, ICP snapshot, banned words
- `/references/human-writing-standards.md` — AI blacklist, structural rules
- `/references/copywriting-frameworks.md` — PAS and BAB for value messages
- `/references/chat-selling.md` — the live conversation layer: ladder, chunking, reply patterns, call transition
- `/references/design-system.md` — brand tokens
- `/references/visual-standards.md`: the visual output standard (environment detection, HTML+GSAP stack, motion rules, visual gate)

## WHERE THIS SKILL SITS

**Reads from:** BUSINESS-BRAIN.md · the prospect's own content (profile, posts, About section) — the Human Hook comes from there
**Hands off to:** sales-call-prep the moment outreach converts to a booked call — paste the whole DM thread there
Tell the user the next step in one line after delivering.

> Templates are what people send when they don't care who they're talking to.
> This skill writes the opposite.

**The Cardinal Rule:** If you could send this to anyone, send it to no one.
Every message must pass this test before delivery.

---

## STEP 0 — CONTEXT CHECK (always first, never skipped)

Look for the participant's context, in this priority order:
1. **BUSINESS-BRAIN.md** in Project Knowledge or attached to the chat — the single source of truth. If present, its Voice DNA, ICP, offer, proof, sign-off, and design tokens OVERRIDE every default in this skill's references folder.
2. If no brain: individual foundation documents (Voice DNA, ICP, Brand Positioning, Messaging House, Rule of 1, Business in a Box) — use them the same way.
3. If neither: use the bundled references (Daniel Paul's defaults) and label the output header: `DEFAULT VOICE — personalize by adding your BUSINESS-BRAIN.md to this project`.

Resolve these variables now and use them everywhere below:
- [NAME] = participant's name (default: Daniel Paul)
- [SIGN-OFF] = from Voice DNA section (default: "Until next week, Daniel" for newsletters, plain "[NAME]" elsewhere)
- [CTA-DEFAULT] = primary CTA from the Offer section
Never ship a default where a participant value exists.

---

## MODE CHECK (right after Step 0)

Two modes. Pick one, say which, run only that one:
- **SEQUENCE MODE** (default): the user wants outreach written for a prospect. Run Steps 1-4 below.
- **LIVE CONVERSATION MODE**: the user pasted an ongoing DM thread, or says "they replied" / "what do I say back". Skip Steps 1-4 and jump to LIVE CONVERSATION MODE below. A pasted reply means the plan just met reality. Coach the next message, do not re-plan the sequence.

---

## STEP 1 — INTAKE

Collect everything before writing a single word:

```
╔══════════════════════════════════════════════════════╗
║  PURELY PERSONAL — DM SEQUENCE WRITER               ║
║  by Daniel Paul                                      ║
╚══════════════════════════════════════════════════════╝

Before I write your sequence — 6 things:

1  THE PROSPECT
   Name, role, company or industry.
   What do they do and who do they serve?

2  CONVERSATION TEMPERATURE
   ◆ Cold — no prior contact whatsoever
   ◆ Warm — connected but never spoken
   ◆ Hot — they engaged with your content or you've met

3  THE HUMAN HOOK (most important)
   What specific, verifiable thing do you know about them?
   ◆ A post they wrote (quote the specific line)
   ◆ A result they shared publicly
   ◆ A job change or promotion
   ◆ A podcast they appeared on
   ◆ A mutual connection who mentioned them
   Vague = ignored. Specific = opened.

4  THEIR MOST LIKELY PAIN RIGHT NOW
   Based on their role and situation — what problem are they
   probably losing sleep over this week?

5  YOUR OFFER IN ONE SENTENCE
   What do you do? What specific result do you create?
   Not "I help people grow their brand" but
   "I help fractional consultants get 5+ inbound leads
    per month from LinkedIn without paid ads."

6  GOAL OF THIS SEQUENCE
   Book a discovery call / Start a conversation /
   Get a referral / Reconnect with a cold lead
```

---

## STEP 2 — PROSPECT RESEARCH (run silently if signals exist)

**Research honesty — non-negotiable:**
1. Try to fetch/search the actual source.
2. If unreachable (login walls, no access): ASK the user to paste the content (posts, profile, About section).
3. If unavailable: mark that section `ASSUMED — verify before use` and say what you assumed.
Never present inferred information as observed. Never invent posts, engagement patterns, statistics, or quotes. A visible gap is professional; invented intelligence is a liability.

*If the Apify connector is available in this session:* use the
`supreme_coder--linkedin-profile-scraper` actor to pull the prospect's profile and
recent posts — cap 1 profile plus their recent posts, nothing beyond that. Before
running, state in one line what will be scraped and why, e.g. "Pulling [prospect]'s
public profile and recent posts to find a real Human Hook." Scraped data counts as
observed.

*Fallback (no Apify, or the profile is blocked — both are normal):*

| Problem | What to do |
|---------|------------|
| Apify connector not installed | Ask the user to paste the profile and 2–3 recent posts. Proceed from there. |
| Actor runs but profile is blocked or empty | Same — ask for pastes. |
| Nothing available at all | Mark the research section `ASSUMED — verify before use` and work down the fallback hook ladder below. |

A zero-Apify user gets the full sequence — just from pasted or assumed signals, clearly labelled.

Before writing, extract maximum intelligence from available signals:

**From their LinkedIn profile (if URL or content provided):**
- Headline language — what words do they use to describe themselves?
- About section — what pain or desire do they put front and center?
- Recent posts — what topics, what tone, what level of vulnerability?
- Engagement pattern — do they respond to questions? To data? To stories?
- Featured section — what are they promoting right now?

**From their posts and activity:**
- What hook types get their highest engagement? (Stat? Story? Contrarian?)
- What do they argue for or against publicly?
- What do their followers say in comments?

**Fallback hook ladder — if the prospect has no visible post history:**
Work down this ladder and build the Human Hook from the first rung that holds:
1. **Recent job change** — "Noticed you stepped into the CRO seat at Halden three weeks ago."
2. **Company news or announcement** — "Saw Halden just opened its Manchester office — that's usually when pipeline pressure doubles."
3. **Mutual connection** — "Sarah Okafor mentioned you when I asked who actually understands mid-market SaaS pricing."
4. **Industry event or moment** — "The new FCA reporting rules land in October — most ops leads I talk to are only just realising what that means."
Each rung must still be specific and verifiable. If no rung holds, tell the user the sequence needs a real hook before it can be written — do not invent one.

**Communication style calibration:**
First, get real signals: fetch the profile/posts if a URL was given, or ask the user to paste the profile and 2–3 recent posts. Then assign a communication style:

| Style | Signals | How to write to them |
|-------|---------|---------------------|
| **Driver** | Direct posts, short sentences, data-led, results-focused | Get to the point fast. Lead with the outcome. Skip the warm-up. |
| **Expressive** | Story-heavy posts, personal vulnerability, high engagement | Open with a genuine observation about their work. Be human. |
| **Analytical** | Long-form posts, frameworks, research references, technical depth | Lead with insight. Show you've done the work to understand their world. |
| **Amiable** | Community-focused, asks questions, celebrates others, warm tone | Open with something that shows you see them, not just their resume. |

Apply the communication style to every message in the sequence. Never name the framework.

If no profile, posts, or pasted content are available, do NOT present a guess as analysis. Output: `Style: DEFAULT [Amiable-Analytical] — assumed, recalibrate after first reply` and write to that default.

---

## STEP 3 — PROFILE AUDIT (run before writing, flag issues)

The strongest sequence dies on a weak profile. Check:

| Profile element | Green light | Red flag |
|----------------|------------|---------|
| Headline | Names the ICP + the result | Generic job title only |
| About section | Opens with reader's problem | Starts with "I am a..." |
| Featured | Lead magnet or booking link | Empty or irrelevant |
| Social proof | Visible results or testimonials | Empty recommendations |
| Recent content | Active posting (last 14 days) | Inactive or scattered topics |

If red flags found → add a "Fix before sending" note at the end of the sequence.
A profile that undermines the DM sequence costs more than no outreach at all.

---

## STEP 4 — WRITE THE SEQUENCE

**Chunking discipline (applies to every message below):** written the way a person types on a phone. One question per message, maximum. Acknowledge before asking. If a message can split into two short, natural chunks, split it. Full rules in `/references/chat-selling.md`.

### TEMPERATURE BRANCH — decide which messages exist before writing any

| Temperature | Sequence |
|-------------|----------|
| **COLD** | M1 → M2 → M3 → M4 → M5. Full sequence. |
| **WARM** | Skip M1 (already connected). Open with the M2 warm variant, then M3 → M4 → M5. |
| **HOT** | Open with the M2 hot variant, then M3, then the M4 soft ask. Compress to 3 messages total — heat dies in long sequences. |

Write only the messages the branch calls for. Label the delivered sequence with the branch used.

### MESSAGE 1 — CONNECTION REQUEST (Cold only — Warm/Hot skip this per the branch table)
**Under 300 characters. Non-negotiable.**
**Never pitch. Never explain what you do. Never "I'd love to connect."**
**Job:** One genuine reason to accept. Built from the Human Hook.

```
Formula: [Specific thing you noticed] + [why it resonated or prompted connection]

Strong examples:
"Your post on [specific topic] last week — the line about [specific thing] is exactly
what I've been trying to articulate for months. Worth connecting."

"Noticed you just moved from [role] to [role]. The fractional world is wild.
Connecting because I'm navigating the same thing."

"[Mutual name] mentioned you specifically when I asked about [topic].
Wanted to connect directly."
```

---

### MESSAGE 2 — THE OPENER (24–48 hours after they accept)
**Never pitch. One question. Maximum 100 words.**
**Job:** Start a conversation about them. Surface a pain without naming it.

```
Formula: [Specific observation about their situation] + [one question that opens a gap]

Strong examples (Cold):
"[Name] — saw you've been posting consistently about [topic] for a few months.
[One specific observation about what you noticed in their content].
Quick question: is [the core challenge behind their content topic] something you're
actively trying to solve right now, or more of a longer-term thing?"

Strong examples (Hot — they engaged with your content):
"[Name] — noticed you saved the post on [topic].
Curious — is [the specific problem that post addressed] something you're
working through right now, or more of a 'someday' goal?"

Strong examples (Warm — connected but never spoken):
"[Name] — we've been connected for a while and I've been following your content.
Your [specific recent post or activity] stood out.
Are you finding that [specific challenge implied by their content] is getting harder or easier lately?"
```

---

### MESSAGE 3 — THE VALUE BRIDGE
**Send only if Message 2 received a reply. Never cold-send this.**
**Under 100 words. Zero pitch.**
**Job:** Deliver genuine value related to their pain. No ask.

```
Formula: [Mirror their words] + [specific insight or resource] + [soft invitation to continue]

Strong example:
"That makes sense — [echo their exact words back].
Something that's worked for [type of person in similar situation]:
[specific, actionable insight in 2–3 sentences].
Not saying it's the right move for your situation but based on what you described,
it might be worth testing. Worth exploring or is the timing off right now?"
```

Apply PAS or BAB from `/references/copywriting-frameworks.md` to structure the insight.
The value must be genuinely useful — not a teaser for a pitch.
Deliver it as 2-3 phone-length chunks, not one block. The question arrives last, and alone.

---

### MESSAGE 4 — THE SOFT ASK
**Send after Message 3, or after 5–7 days of silence following Message 2.**
**Under 75 words. One ask. Easy yes or no.**
**Job:** Make the next step feel natural, not transactional.

```
Formula (after conversation):
"Based on what you've shared — [mirror their pain in their exact words].
Would a 20-minute call be worth it to see if there's anything useful I can point you toward?
No pitch — I just want to make sure I'm not missing something obvious if I can actually help.
[Specific day/time option]?"

Formula (no reply to Message 2 — re-engage):
"[Name] — my last message clearly caught you at the wrong moment.
One honest question before I leave you alone:
Is [their pain] something that's actually a priority right now, or is it a back-burner thing?
Either answer is completely fine — just saves us both time."
```

---

### MESSAGE 5 — THE EXIT / RE-ENGAGEMENT (optional — if no response after Message 4)
**Only use if there's been genuine interest at some point (a saved post, a comment, prior reply).**
**Under 60 words. No desperation. Clean.**

```
"[Name] — I'll stop reaching out after this.
Saw you [specific recent activity — posted about X / shared Y / commented on Z].
[One insight directly relevant to that activity — 1 sentence].
If that's something you want to dig into at some point, you know where I am."
```

---

## LIVE CONVERSATION MODE (the thread is real, coach the next message)

The user pasted an ongoing conversation. Read `/references/chat-selling.md` before drafting anything. Then:

**1. Read the whole thread and locate it.**
- **Ladder rung:** Rapport / Situation / Problem / Implication / Invite (the conversation ladder in chat-selling.md).
- **Reply pattern of their last message:** Interested / Curious but guarded / Just looking / Objection / Ghost.
State both in one line each, with the evidence quoted from the thread.

**2. Draft ONE next message.** Matched to the rung they are ON, not the rung the user wishes they were on. Never skip rungs. If the user asks for a pitch while the thread sits at Rapport or Situation, refuse the pitch, say why in one sentence, and draft the rung-correct message instead.

**3. Apply the chunking rules.** 1-3 sentences, one question maximum, acknowledge their last message before asking, match their message length. Voice-note suggestion only where chat-selling.md allows it.

**4. If the thread sits at Implication with the problem named in their words and confirmed as a priority,** run THE CALL TRANSITION sequence from chat-selling.md, one step at a time. Permission before logistics, logistics before link, link before confirmation. Never all at once.

**5. Deliver in this shape (never a 5-message sequence in this mode):**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LIVE CONVERSATION: NEXT MESSAGE
Rung: [ladder phase] · Their last reply: [pattern]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE READ: [2 lines: where this conversation actually is, and why]

SEND THIS:
[the one message, ready to copy]

WATCH FOR: [what their reply will tell you, and which rung comes next]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Step 0 (context check), the style calibration table, the Cardinal Rule, and the FINAL GATE all still apply in this mode. The mechanical checks run on the one message.
When the call books, hand the whole thread to sales-call-prep and tell the user so in one line.

---

## DELIVERY FORMAT

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURELY PERSONAL — DM SEQUENCE
Prospect: [name/type] · Temperature: [cold/warm/hot]
Style: [Driver/Expressive/Analytical/Amiable — or DEFAULT, assumed]
Mode: [Sequence / Live conversation]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
(Deliver only the messages the temperature branch calls for.)

MESSAGE 1 — CONNECTION REQUEST (Cold only)
[under 300 chars]

MESSAGE 2 — OPENER (send 24–48hrs after connecting)
[under 100 words]

MESSAGE 3 — VALUE BRIDGE (only if M2 gets a reply)
[under 100 words]

MESSAGE 4 — SOFT ASK (after M3 or 5–7 days after M2)
[under 75 words]

MESSAGE 5 — EXIT / RE-ENGAGE (optional)
[under 60 words]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BEFORE YOU SEND:
[Profile audit — red flags if any]
[Communication style rationale — one sentence, or "DEFAULT — assumed, recalibrate after first reply"]
[Temperature branch applied — per the TEMPERATURE BRANCH table in Step 4: which messages are in, which were skipped]
Mode: [Sequence / Live conversation]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## STEP 5 · VISUAL DELIVERY (Sequence Mode only)

**Live Conversation Mode stays text-only. Explicitly: never render a visual in that mode. Speed matters there, and the one coached message must never wait on a build.**

For Sequence Mode, read `/references/visual-standards.md` and run its environment detection:
1. claude.ai chat: render as an artifact. HTML + GSAP from cdnjs; React only if state earns it (the tabs qualify).
2. Claude Desktop / Claude Code: write a self-contained .html file and give the path.
3. Neither: ship the text sequence only and say which environment unlocks the visual.

The text sequence is ALWAYS the primary deliverable. The visual sits beside it.

**DM sequence shape (per visual-standards.md):**
- Vertical chat timeline: message bubbles in platform-neutral chat styling, the platform's visual language without cloning it.
- Temperature branch shown as tabs (Cold / Warm / Hot), the delivered branch active by default; each tab shows only that branch's messages.
- Send-condition chips on each message ("only if M2 got a reply", "5-7 days after M2 if silent").
- Day markers between messages.

Rules:
- Copy in the bubbles must be character-identical to the approved text messages.
- Tokens from BUSINESS-BRAIN.md §7; fallback `/references/design-system.md`. GSAP entrance only; readable with JS off.
- Footer credit: "[NAME] · built with the Purely Personal system".

---

## FINAL GATE — evidence required, then ship

**Invisibility Diagnostic — score each 0 or 1, and QUOTE the exact line that earns the point. No quote = no point.**
1. Specificity: quote one detail that could only come from THIS person's brain/intake/research. If you can't quote one, score 0.
2. Voice: quote one line that matches a rule or sample in their Voice DNA.
3. Stakes: quote the line that shows why this matters to the ICP.
4. Surprise: quote the line a competitor wouldn't dare or think to write.
Target 4/4. For every point you scored 1, also write the one-line edit that would make it a 0 — if you can't, you're rubber-stamping. Below 4: fix the failing dimension and re-score. One rewrite maximum, then ship with the score shown.

**Mechanical checks (verify by counting/searching the actual OUTPUT text only — never this skill's own files; in Claude Code, verify counts with a shell command run against the output):**
- Zero em dashes (—) anywhere in the output.
- Zero words from the banned list (bundled blacklist + the brain's banned words).
- Length within this skill's stated limits (state the measured number).
- No unresolved placeholders: nothing in [brackets], no "your ICP", no "[ADD ...]".
- Sign-off and CTA are [SIGN-OFF] and [CTA-DEFAULT], not defaults, when a brain exists.

**Skill checks:**
□ All 6 reference files read before writing
□ Step 0 context resolved (brain / foundation docs / labelled default)
□ Mode check run: Sequence or Live conversation, stated in the output
□ All 6 intake fields collected before writing
□ Prospect research conducted from available signals — nothing invented
□ Communication style calibrated from real signals, or explicitly marked DEFAULT/assumed
□ Temperature branch applied — only the branch's messages delivered
□ Profile audit completed — red flags noted
□ Message 1: under 300 chars, zero pitch, built from Human Hook (or fallback ladder)
□ Message 2: one question only, surfaces pain without naming it, under 100 words
□ Message 3: genuine value, no teaser, no pitch, framework applied
□ Message 4: one ask, low-friction, mirrors their own words
□ Message 5: clean exit, no desperation, specific observation
□ Live mode only: ONE message delivered, rung and reply pattern stated with quoted evidence, no skipped rungs
□ Live mode only: call transition only attempted at Implication with the problem confirmed in their words
□ Chunking: one question per message, phone-length chunks, acknowledge before ask
□ Cardinal Rule: every message passes the "could not send to anyone else" test
□ Visual (if shipped, Sequence Mode only): copy character-identical to the approved text messages
□ Visual (if shipped): tokens are the client's, verified in the HTML itself
□ Visual (if shipped): readable with JS off, prints clean if print is a use case
□ Visual (if shipped): zero banned visual elements from the NEVER list
□ Visual (if shipped): Rule of the Room honestly applied, the client would show it to someone
□ Read aloud: sounds like a real person, not a sales email
