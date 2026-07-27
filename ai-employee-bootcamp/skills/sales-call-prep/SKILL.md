---
name: sales-call-prep
description: >
  Prepares a complete discovery call brief before any sales conversation — pre-call
  intelligence, opening questions, pain excavation sequence, qualification framework,
  objection scripts with word-for-word responses, transition to close, and a post-call
  follow-up template. ALWAYS use this skill when the user says "prep for a call",
  "discovery call", "sales call", "call tomorrow", "meeting with a prospect", "prep me
  for a call with", or mentions that outreach converted to a scheduled conversation.
  Do not improvise call advice or question lists without running this skill. NOT for
  writing proposals — this skill ends at the post-call follow-up email; proposal
  writing is a separate step. Part of the Purely Personal system by Daniel Paul.
---

# Sales Call Prep — Purely Personal
# by Daniel Paul · Purely Personal

Read ALL reference files before building any brief:
- `/references/discovery-call-framework.md` — full call structure, BANT+ framework, the CANONICAL objection library
- `/references/output-examples.md` — good vs weak examples for every section
- `/references/voice-dna.md` — Daniel's ICP, what good looks like for this audience
- `/references/copywriting-frameworks.md` — BAB and PAS for positioning your offer
- `/references/human-writing-standards.md` — writing standards for all scripts
- `/references/visual-standards.md`: the visual output standard (environment detection, HTML+GSAP stack, motion rules, visual gate)

## WHERE THIS SKILL SITS

**Reads from:** BUSINESS-BRAIN.md · the DM thread from dm-sequence-writer — paste the whole conversation; the prospect's exact words are the call's agenda
**Hands off to:** after the call, bring the notes back for the follow-up email — and from there, the proposal step
Tell the user the next step in one line after delivering.

One job: walk into the call knowing more about the prospect's real problem than they've
articulated yet — and knowing exactly what to say when it gets hard.

A discovery call is not a pitch. It is a diagnostic.
The seller who asks the best questions wins — not the seller with the best deck.

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

## STEP 1 — INTAKE

Collect everything before building the brief:

```
╔══════════════════════════════════════════════════════╗
║  PURELY PERSONAL — SALES CALL PREP                  ║
║  by Daniel Paul                                      ║
╚══════════════════════════════════════════════════════╝

Before I build your call brief — 4 things:

1  WHO IS THIS CALL WITH?
   Name, role, company or industry.
   What do you know about their business situation?
   Their company size, stage, and what they sell.

2  HOW DID THEY FIND YOU?
   LinkedIn post / DM sequence / Referral / Inbound from content /
   Cold outreach they responded to / Applied directly?
   The source tells you a lot about the trust level walking in.

3  WHAT DO YOU KNOW ABOUT THEIR SITUATION?
   Paste EVERYTHING — DM conversation, their LinkedIn about section,
   their posts, anything they've said or shared publicly.
   Their exact words are gold. If they said "I've been posting for
   months and nothing is working" — that's the call's entire agenda.

4  GOAL FOR THIS CALL?
   ◆ Qualify — decide if there's a fit before pitching anything
   ◆ Explore — understand the problem deeply before presenting a solution
   ◆ Present and close — you know there's fit, now make the offer
```

---

## STEP 2 — PROSPECT RESEARCH

Run this silently from all available signals before building the brief.

**Research honesty — non-negotiable:**
1. Try to fetch/search the actual source.
2. If unreachable (login walls, no access): ASK the user to paste the content (posts, profile, About section).
3. If unavailable: mark that section `ASSUMED — verify before use` and say what you assumed.
Never present inferred information as observed. Never invent posts, engagement patterns, statistics, or quotes. A visible gap is professional; invented intelligence is a liability.

*If the Apify connector is available in this session:* use the
`supreme_coder--linkedin-profile-scraper` actor to pull the prospect's profile and
recent posts — cap 1 profile plus their recent posts, nothing beyond that. Before
running, state in one line what will be scraped and why, e.g. "Pulling [prospect]'s
public profile and recent posts so the call brief works from their real words."
Scraped data counts as observed.

*Fallback (no Apify, or the profile is blocked — both are normal):*

| Problem | What to do |
|---------|------------|
| Apify connector not installed | Ask the user to paste the profile and 2–3 recent posts. Proceed from there. |
| Actor runs but profile is blocked or empty | Same — ask for pastes. |
| Nothing available at all | Mark the affected brief sections `ASSUMED — verify before use` and build from the DM thread and intake only. |

A zero-Apify user gets the full call brief — just from pasted or assumed signals, clearly labelled.

**From their LinkedIn profile:**
- Headline: what words do they use to describe themselves and their value?
- About section: what problem do they put front and center?
- Recent posts: what are they struggling with, celebrating, or talking about publicly?
- Activity: do they engage with content about [your niche]?

**From the DM conversation (if provided):**
- Extract their exact words when describing the problem — quote them
- Note what they said they'd tried that hadn't worked
- Note the specific trigger that made them book this call

**Build a prospect intelligence brief (3–5 bullet points):**
- What they do and who they serve
- The problem as they've described it (in their exact words)
- What they've tried before
- Why they're taking this call today specifically
- Their communication style: direct/data-led or story-driven/relationship-first?

This brief goes into Section 1 of the call prep.

---

## STEP 3 — BUILD THE CALL BRIEF

Read `/references/discovery-call-framework.md` fully before writing any section.
Read `/references/output-examples.md` to calibrate what good looks like.

### SECTION 1 — PRE-CALL INTELLIGENCE

Synthesise everything from Steps 1 and 2.
Pull their exact words where available.
End with: what you expect this call to be really about (the problem underneath the stated reason for booking).

**Weak version:** "This person wants to improve their LinkedIn results."
**Strong version:** "Marcus booked this call after DM'ing with the word 'LEADS' from your conversion post.
He said: 'I've been posting 4x per week for 5 months. Great engagement. Zero inbound calls.'
He's tried a content course before — didn't produce leads. He connects success to profile changes,
not post frequency. The real question on this call is whether the problem is his profile,
his content strategy, or the absence of a system to convert attention into conversations.
Expect him to be frustrated but polished — he won't say 'this is urgent' but it is."

---

### SECTION 2 — CALL OBJECTIVE + SUCCESS DEFINITION

**Primary goal:** [qualify / explore / present and close — pick one]
**Success looks like:** [specific outcome from this call — not "a good conversation"]

Examples:
- Qualify: "We end this call with both of us knowing whether there's a fit. Yes or no — not maybe."
- Explore: "I know their top 3 pains in their exact words, what they've tried, and what's at stake if nothing changes."
- Close: "They say yes or no on the call. Not 'I'll think about it.'"

---

### SECTION 3 — THE OPENING (minutes 1–5)

**The opener that consistently works:**

"Before we get into anything — what made you take this call?
There are 50 things you could be doing right now."

This question does three things:
1. Hands them the floor immediately (80/20 in the first 5 minutes means you listen, not pitch)
2. Reveals the real urgency and the specific trigger
3. Gives you the language they use to describe their problem — which you mirror back later

**Rules for the opening:**
- Never start with your story, your credentials, or your methodology
- Never ask "tell me about your business" — it signals you didn't research them
- Match their energy: high-energy opener for a driver, warmth and curiosity for an amiable

**2–3 follow-up questions tailored to THIS prospect:**
[Generated from the prospect intelligence — specific to their situation, not generic]

---

### SECTION 4 — QUALIFICATION QUESTIONS (BANT+ ordered by priority)

From `/references/discovery-call-framework.md`. Ordered by what matters most.
**Pain first. Always. Budget last. Always.**

**PAIN — The most important questions (ask all of these):**
"Walk me through what [their specific problem] looks like day to day for you."
"How long has this been going on?"
"What have you tried to solve it before?"
"Why didn't [previous attempt] work?"
"What does it cost you every month this stays unsolved?"
"What happens if this is still the same situation in 12 months?"

**NEED / AUTHORITY:**
"When you say 'we' — who else is involved in a decision like this?"
"If everything we talked about today made sense — what would the next steps look like on your end?"
"Is there anyone else you'd want involved in this conversation before moving forward?"

**TIMELINE:**
"Is there a specific deadline or event driving the urgency?"
"What's making now the right time to solve this?"

**BUDGET (ask last — never lead with this):**
"Have you invested in solving this kind of problem before?"
"What kind of investment was that?"
"What's the cost of this problem per month right now?" (reframe budget as ROI)

---

### SECTION 5 — PAIN EXCAVATION SEQUENCE

Read `/references/discovery-call-framework.md` for the full framework.
Most calls stop at the surface. Go to all three levels.

**Level 1 — SURFACE (what they say in a professional meeting):**
"Walk me through a specific example from the last two weeks."
This is what they'll say first. It's real but managed.

**Level 2 — REAL (what they say to a trusted peer after a hard week):**
"What's the actual impact of that on your business?"
"If you had to put a revenue number on it — what's this costing you per month?"
"How is this affecting how you feel about [their role/business/effort]?"
This is where the call becomes a real conversation.

**Level 3 — ROOT (the identity cost — what they think about at 2am):**
"When this problem keeps coming back despite everything you've tried — what does that feel like?"
"What's kept this from being solved until now? Is it resources, time, or something else?"
"If this is still the same in 12 months — what does that mean for [their goal/business/vision]?"
This is the level that makes the buying decision feel inevitable rather than considered.

**Guardrail:** Level 3 surfaces real stakes so you can serve them honestly. Ask, listen, reflect back. Never dramatize or amplify insecurity — if the prospect signals discomfort, stop drilling and name what you heard.

---

### SECTION 6 — OBJECTION SCRIPTS (top 3 most likely for THIS prospect)

**The canonical objection library lives in `/references/discovery-call-framework.md` — 6 categories (Price, Time, Trust, Authority, Need, Urgency), each with the stated line, the real fear, and the right response. Its scripts win over any inline wording.**

Select the 3 most likely objections for THIS prospect from the 6 categories in discovery-call-framework.md and instantiate them with the prospect's specifics — their words, their numbers, their previous attempts. Do not invent new base scripts.

Format each selected objection like this (format model — one worked example):

**STATED:** What they'll say out loud.
**REAL:** The fear or uncertainty underneath the stated objection.
**RESPONSE:** Word-for-word what to say. No paraphrasing.
**MOVE:** What to do after the response.

**Example — Price (instantiated from the framework's Price category):**
STATED: "The investment is more than I was expecting."
REAL: "I'm not convinced the return justifies the risk — I've spent money on this before and it didn't work."
RESPONSE: "I hear you on price — let me make sure I understand the picture. You mentioned this problem is costing you [their number] per month. If we solve it in [timeframe], the investment is [amount]. Does the math work, or is the uncertainty about whether it'll work?"
MOVE: Get specific about ROI before defending price. If the uncertainty is about it working, address that gap — not the number.

---

### SECTION 7 — TRANSITION TO CLOSE

For a qualify or explore call:
"Based on everything you've shared — I think [honest assessment: fit / not fit / more info needed].
What I'd suggest as a next step is [specific action] by [specific date]. Does that work for you?"

For a present and close call:
"Everything you've described maps directly to what [your offer] addresses.
The investment is [amount], and based on what you've told me the cost of staying where you are
is [the number they gave you]. Does it make sense to move forward?"

**If they say "let me think about it" on a close call:**
"What would make this a yes today versus a maybe? I want to make sure I'm giving you
the right information to make this decision confidently."

**If there's no fit:**
"I want to be honest with you — based on what you've described, I don't think [your offer]
is the right next step for where you are. Here's what I think would actually help you first: [genuine recommendation]."
This response builds more trust than any closed deal. They refer people.

---

### SECTION 8 — RED FLAGS (stop and investigate immediately)

- "We're just gathering quotes to compare options" → find out if they have a real budget and decision-maker
- "Can you send a deck I can share with my team?" → find the real decision-maker before sending anything
- "We tried this kind of thing before" → find out exactly what failed before continuing
- "Budget is already allocated for this quarter" → is this true or is it an objection?
- They haven't described a specific pain, only a vague desire → the problem isn't urgent enough

---

### SECTION 9 — POST-CALL FOLLOW-UP

Send within 2 hours of the call ending.

**Template:**
"[Name] — thank you for the time today.

Here's what I understood: [their problem in their exact words — 2 sentences].
What we agreed: [specific next step + date].

[If moving forward]: The agreement is [attached/linked]. Let me know if you have any questions.
[If no decision yet]: I'll send [specific thing] by [specific date] as we discussed.
[If not a fit]: Based on what you shared, I'd suggest [specific resource or referral] as a better next step.

[SIGN-OFF]"

**Rules:**
- Send within 2 hours — not next-day
- Use their exact words to describe their problem — not your summary
- One clear next step with a specific date
- Under 100 words — they don't need a novel

---

## DELIVERY FORMAT

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURELY PERSONAL — SALES CALL BRIEF
[Prospect Name] · Goal: [qualify/explore/close]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 1 — PRE-CALL INTELLIGENCE
[Prospect research + their exact words]

SECTION 2 — CALL OBJECTIVE + SUCCESS DEFINITION
[One line each]

SECTION 3 — THE OPENING
[Opener + 2–3 tailored follow-up questions]

SECTION 4 — QUALIFICATION QUESTIONS
[BANT+ in priority order]

SECTION 5 — PAIN EXCAVATION SEQUENCE
[All 3 levels with specific questions]

SECTION 6 — OBJECTION SCRIPTS (top 3)
[Each: Stated / Real / Response / Move]

SECTION 7 — TRANSITION TO CLOSE
[Exact language for this prospect's call type]

SECTION 8 — RED FLAGS
[Most likely for this prospect]

SECTION 9 — POST-CALL FOLLOW-UP
[Template ready to edit and send]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## STEP 4 · VISUAL DELIVERY (the call brief dashboard)

This is the highest-value visual in the suite. The user opens it on a second screen DURING the live call, so hierarchy and glanceability rule everything: the eye must find any section in under a second, mid-conversation.

Read `/references/visual-standards.md` and run its environment detection before rendering:
1. claude.ai chat: render as an artifact. React is justified here (expanding objection cards); HTML + details/summary is the lighter alternative.
2. Claude Desktop / Claude Code: write a self-contained .html file and give the path.
3. Neither: ship the text brief only and say which environment unlocks the visual.

The 9-section text brief is ALWAYS the primary deliverable. The visual sits beside it.

**Call brief dashboard shape (one screen, per visual-standards.md):**
- Prospect header with company and role chips
- Pain map section, their exact words quoted
- The opening questions as numbered cards
- Objection cards that expand on click (details/summary in HTML; React if artifact)
- BANT+ status meter
- Follow-up template in a copy-ready block

Rules:
- GSAP entrance on load only. Nothing moves during use; the user is on a live call.
- Copy in the visual must be character-identical to the approved text brief.
- Tokens from BUSINESS-BRAIN.md §7; fallback `/references/design-system.md`. Readable with JS off.
- Footer credit: "[NAME] · built with the Purely Personal system".

---

## FINAL GATE — evidence required, then ship

The brief and follow-up email are client-facing prose. They pass the same bar as a published post.

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
□ Step 0 context resolved (brain / foundation docs / labelled default)
□ All 6 reference files read before building
□ All 4 intake fields collected before research
□ Prospect research conducted — exact words captured, gaps marked ASSUMED, nothing invented
□ Pre-call intelligence: specific, uses their words, predicts real agenda
□ Call objective: specific success definition — not "a good conversation"
□ Opening: tailored follow-up questions specific to this prospect
□ Qualification: BANT+ ordered correctly (Pain first, Budget last)
□ Pain excavation: all 3 levels with specific questions; Level 3 guardrail respected
□ Objection scripts: 3 selected from the framework's 6 categories, instantiated with prospect specifics
□ Each objection: Stated / Real / Response / Move all complete
□ Transition: matched to call type (qualify / explore / close)
□ Red flags: specific to this prospect's signals
□ Post-call follow-up: ready to send within 2 hours, uses their exact words, signed [SIGN-OFF]
□ Visual (if shipped): copy character-identical to the approved text brief
□ Visual (if shipped): tokens are the client's, verified in the HTML itself
□ Visual (if shipped): readable with JS off, prints clean if print is a use case
□ Visual (if shipped): zero banned visual elements from the NEVER list
□ Visual (if shipped): Rule of the Room honestly applied, the client would show it to someone
□ Final test: would [NAME] walk into this call prepared? If not — rebuild.
