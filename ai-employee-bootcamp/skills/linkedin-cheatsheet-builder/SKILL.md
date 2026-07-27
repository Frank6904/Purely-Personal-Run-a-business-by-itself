---
name: linkedin-cheatsheet-builder
description: >
  Builds a save-worthy LinkedIn cheat sheet in one of three formats (Listicle, Comparison
  table, Do's & Don'ts), routed by a decision tree, in the participant's exact voice:
  design-ready copy, a caption to post it with, and a rendered 1080x1350 HTML one-pager
  ready for print-to-PDF. ALWAYS use this skill when the user says "cheat sheet",
  "cheatsheet", "listicle", "dos and don'ts", "comparison post", "X vs Y", "reference
  guide", "one-pager for LinkedIn", or wants a single-image reference post their audience
  will save and reopen. Do not draft cheat sheet copy or a comparison table directly
  without running this skill. NOT for multi-slide carousels, use linkedin-carousel-builder
  for that. Part of the Purely Personal system by Daniel Paul.
---

# LinkedIn Cheatsheet Builder · Purely Personal
# by Daniel Paul · Purely Personal

Read the shared references before writing a single word:
- `/references/voice-dna.md` · voice rules, ICP, 5 hook archetypes, banned words
- `/references/human-writing-standards.md` · Invisibility Diagnostic, AI blacklist, hook test
- `/references/design-system.md` · brand tokens for the rendered one-pager
- `/references/visual-standards.md` · environment detection, the HTML+GSAP stack, motion and design rules, the Cheat sheet shape, and the visual quality gate. Step 5 depends on it.

Load exactly ONE format reference after the router picks the format in Step 1:
- `/references/cheatsheet-listicle.md` · 6 main points x 4 takeaways
- `/references/cheatsheet-comparison.md` · X vs Y, Bad vs Good, What They Think vs Reality
- `/references/cheatsheet-dos-donts.md` · Classic sections, Side-by-Side pairs, Numbered Countdown

One job: produce a reference the ICP saves, reopens, and acts on.
If they read it once and scroll on, it failed. A cheat sheet earns the save or it earns nothing.

---

## WHERE THIS SKILL SITS

**Reads from:** BUSINESS-BRAIN.md · the monthly strategy document if one exists in this project. Pull this week's topic, pillar, and intent from it instead of asking.
**Hands off to:** linkedin-caption-writer when the user wants a full standalone post on the same topic · linkedin-carousel-builder when the material needs more than one page.
Tell the user the next step in one line after delivering.

---

## STEP 0 · CONTEXT CHECK (always first, never skipped)

Look for the participant's context, in this priority order:
1. **BUSINESS-BRAIN.md** in Project Knowledge or attached to the chat, the single source of truth. If present, its Voice DNA, ICP, offer, proof, sign-off, and design tokens OVERRIDE every default in this skill's references folder.
2. If no brain: individual foundation documents (Voice DNA, ICP, Brand Positioning, Messaging House, Rule of 1, Business in a Box). Use them the same way.
3. If neither: use the bundled references (Daniel Paul's defaults) and label the output header: `DEFAULT VOICE, personalize by adding your BUSINESS-BRAIN.md to this project`.

Resolve these variables now and use them everywhere below:
- [NAME] = participant's name (default: Daniel Paul)
- [SIGN-OFF] = from Voice DNA section (default: plain "[NAME]")
- [CTA-DEFAULT] = primary CTA from the Offer section
Never ship a default where a participant value exists.

---

## STEP 1 · INTENT + FORMAT ROUTER

### 1a. Intake

If the brain and monthly strategy doc answer these, do not ask. Otherwise ask in ONE message:
1. Topic plus brain dump or source material. Raw notes beat polished summaries.
2. Who should save this. Specific ICP, not "founders".
3. Business goal for this piece, if known: teach, build trust, warm up buyers, sell, or spark discussion.
4. The last 2 cheat sheet formats they posted (for rotation).
5. Best specific proof: a real number, client result, or example to anchor the sheet.

### 1b. Pick ONE intent

Every cheat sheet has ONE primary intent that all points serve. Never mix intents.

| Intent | Every point must... | Goal signal |
|--------|--------------------|-------------|
| EDUCATING | build knowledge progressively toward application | "teach", "explain", "framework" |
| NURTURING | reveal insider truth that positions the participant as trusted advisor | "build trust", "authority" |
| SOFT-SELL | make the problem their offer solves undeniable, without naming the offer | "warm up", "create demand" |
| HARD-SELL | showcase the offer's value with proof and a next step | "promote", "launch", "sell" |
| ENGAGEMENT | spark debate, self-assessment, or sharing | "discussion", "poll the room" |

### 1c. Route the format

Walk the tree in order. First YES wins.

1. Two approaches, models, or audiences of roughly equal weight? → **COMPARISON · X vs Y**
2. One widespread belief the participant can debunk from experience? → **COMPARISON · What They Think vs Reality**
3. Wrong way vs right way on one topic?
   - Contrast organized by strategic dimensions (focus, metrics, positioning, messaging) → **COMPARISON · Bad vs Good**
   - Contrast organized as behaviors, each wrong action with one direct correction → **DO'S & DON'TS · Side-by-Side Pairs**
4. A set of mistakes with a clear severity ranking? → **DO'S & DON'TS · Numbered Countdown**
5. A mixed set of distinct dos and don'ts that do not pair 1:1? → **DO'S & DON'TS · Classic Sections**
6. None of the above (one topic that breaks into steps, phases, principles, or a checklist)? → **LISTICLE · 6 points x 4 takeaways**

**Intent tiebreaker** when two routes both fit the material:
- EDUCATING → Listicle
- NURTURING → What They Think vs Reality
- SOFT-SELL → Listicle (Pain, Gap, Need progression) or Bad vs Good
- HARD-SELL → Listicle (Feature, Benefit, Proof progression)
- ENGAGEMENT → Numbered Countdown or What They Think vs Reality

**Rotation rule (Daniel's):** never the same format three times in a row. If the route lands on the format of the last two sheets, take the tiebreaker's next option.

State the route in one line before building, then load ONLY that format's reference file:
`Route: [Format] · [Sub-format] · Intent: [intent] · because [one sentence]`

If the user named a format explicitly, honor it and skip the tree, but still pick one intent.

---

## STEP 2 · BUILD THE CHEAT SHEET

Follow the loaded format reference exactly: its structure, word limits, workflow, and worked example are the spec. These rules hold across all three formats.

**Research honesty, non-negotiable (applies to any source you fetch or extract):**
1. Try to fetch or search the actual source.
2. If unreachable (login walls, no access): ASK the user to paste the content.
3. If unavailable: mark that section `ASSUMED, verify before use` and say what you assumed.
Never present inferred information as observed. Never invent posts, engagement patterns, statistics, or quotes. A visible gap is professional. Invented intelligence is a liability.

**Cross-format writing rules:**
- Content comes ONLY from the brain, the intake, or pasted source material. No invented stats, client results, or examples.
- Vocabulary: grade 3-4 EXCEPT the participant's technical terms. Keep technical terms exactly as they use them: "CAC payback period" stays "CAC payback period". Simplifying jargon reduces credibility with an expert audience.
- Every line passes the "So what?" test: the reader knows WHAT to do and HOW or WHEN to do it.
- Word limits are design constraints, not suggestions. Count them.
- 1 or 2 signature phrases from the Voice DNA across the whole sheet. No more.
- Forbidden: generic advice ("communication is key"), vague instructions ("optimize your processes"), motivational filler, straw men, takeaways that restate their headline.

**Coherence check before moving on:** read the sheet top to bottom. Every point serves the ONE chosen intent, connects to its neighbors, and could not be cut without breaking the flow. If any point fails, restructure before writing the caption.

---

## STEP 3 · WRITE THE CAPTION

The sheet is the asset. The caption earns the stop and sells the save.

- **Hook:** pick the archetype from `/references/voice-dna.md` that matches the intent. Under 12 words, one specific detail, passes the 5-point Hook Quality Test.
- **Body:** 2 to 4 short paragraphs, max 3 lines each. Name the ICP's pain the sheet solves and ONE thing inside it. Never walk through the sheet's content line by line: the image does that.
- **CTA:** one only. Default: "Save this for your next [specific situation]." Use [CTA-DEFAULT] or a keyword DM instead when intent is SOFT-SELL or HARD-SELL.
- **P.S.:** optional. Under 20 words. If present, it is the sharpest line.
- **Length:** 400 to 900 characters. State the measured count.
- All voice rules, banned words, and the AI blacklist apply. No em dashes. No semicolons.

---

## STEP 4 · FINAL GATE · evidence required, then ship

**Invisibility Diagnostic: score each 0 or 1, and QUOTE the exact line that earns the point. No quote = no point.**
1. Specificity: quote one detail that could only come from THIS person's brain/intake/research. If you can't quote one, score 0.
2. Voice: quote one line that matches a rule or sample in their Voice DNA.
3. Stakes: quote the line that shows why this matters to the ICP.
4. Surprise: quote the line a competitor wouldn't dare or think to write.
Target 4/4. For every point you scored 1, also write the one-line edit that would make it a 0. If you can't, you're rubber-stamping. Below 4: fix the failing dimension and re-score. One rewrite maximum, then ship with the score shown.

**Mechanical checks (verify by counting/searching the actual text, not by feel; in Claude Code, verify counts with a shell command):**
- Zero em dashes anywhere.
- Zero words from the banned list (bundled blacklist plus the brain's banned words).
- Length within this skill's stated limits (state the measured number).
- No unresolved placeholders: nothing in [brackets], no "your ICP", no "[ADD ...]".
- Sign-off and CTA are [SIGN-OFF] and [CTA-DEFAULT], not defaults, when a brain exists.

**Skill checks:**
- ONE intent drives every point, row, and pair. Name it and confirm no point serves a different intent.
- Structure matches the format reference template exactly: section order, arrow takeaways, table columns, closing element (Similarities, Keywords, Bottom Line, The Shift, or Wake-Up Call as the format requires).
- Word limits verified by counting: head or title, subheading, every headline, every takeaway or cell. State the count for any line at a limit.
- Every claim, number, and example traces to the brain, the intake, or pasted source. Nothing invented.
- Comparison and Do's & Don'ts only: left and right genuinely contrast. No straw men. The left side is a mistake or belief people actually hold.
- Rotation respected: not the same format as the participant's last two sheets, unless they asked for it.
- Visual gate 1 (when Step 5 renders): every word in the sheet is character-identical to the approved copy block.
- Visual gate 2: tokens are the participant's (grep the HTML for the brain's hex codes).
- Visual gate 3: readable with JS off; prints clean at 1080 x 1350 with animation off in print media.
- Visual gate 4: no banned visual elements (the NEVER list in visual-standards.md).
- Visual gate 5: the Rule of the Room honestly applied. Would the participant show this to someone?

---

## STEP 5 · RENDER THE ONE-PAGER

The copy block in the Delivery Format is ALWAYS delivered: it is the designer handoff and the editable source of truth. The rendered sheet sits beside it. Follow `/references/visual-standards.md` for environment detection, motion, and design rules.

**Environment detection first:**
1. **claude.ai chat**: render the sheet as an HTML artifact. GSAP from cdnjs (`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`) for the optional entrance only.
2. **Claude Desktop / Claude Code**: write `cheatsheet-[topic-slug].html`, one self-contained file in the working folder, and give the path.
3. **Neither**: skip to Delivery and say in one line that the copy block is the handoff and which environment unlocks the rendered sheet.

**Canvas and print:**
1. **Canvas:** exactly 1080 x 1350 px portrait (LinkedIn 4:5). Fixed-size `.sheet` container plus `@page { size: 1080px 1350px; margin: 0; }` so browser print-to-PDF produces the final asset with zero cropping.
2. **Print-perfect is the bar:** `@media print` turns all animation off and shows every element at its final state. Inline all CSS. Poppins via Google Fonts link with `sans-serif` fallback so it still renders offline.

**Design (per the standard):**
3. **Tokens:** from the brain's design section if present, else `/references/design-system.md`. Headings Poppins 700/800, body 400. ONE accent color doing all the work, 90/10 neutral-to-accent: numbers, markers, and rules get it, nothing else does.
4. **Designed tables, not markdown wearing borders:** real column structure, ruled rows, a distinct header treatment, generous cell padding, and an alternating row tint where it helps scanning. This covers the Comparison table and the Countdown table.
5. **Numbered chips:** Listicle points and Countdown ranks get a filled accent chip (circle or square) with the number in display type, never a plain "1." text prefix.
6. **Layout is typographic.** Big head, subhead, then the format's structure: 6 numbered cards for Listicle, a designed table for Comparison, sections or countdown table for Do's & Don'ts. No stock images, no icon fonts, no hand-coded figure SVGs, no stick figures. Type, geometry, and color do all the design work.
7. **Optional GSAP entrance for screen viewing:** one timeline, fade-up 20 to 40px with a 0.06 to 0.12s stagger across cards or rows, ease "power3.out", off in print media. The sheet must read fully with JavaScript disabled.
8. **Footer strip:** [NAME] · brand name, per the design-system footer.
9. **Verify before delivering:** all content fits the 1350px height with nothing clipped, and every word matches the approved copy block exactly, character for character. If it overflows, tighten spacing or type size. Never cut approved copy to fit.

---

## DELIVERY FORMAT

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURELY PERSONAL · YOUR CHEAT SHEET
by Daniel Paul
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CHEAT SHEET COPY · [Format · Sub-format]
[design-ready copy in the exact structure from the format reference]

CAPTION · paste into LinkedIn with the image
[caption]

FILE
[path to rendered HTML or artifact + "print to PDF at 100% scale"] or
[No visual output in this environment. The copy block above is the designer handoff.]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Format: [format · sub-format] · Intent: [intent] · Score: [N]/4
Caption: [char count] chars · Limits: [pass, or the one exception and why]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

One line after delivery, per the pipeline:
`Want the same topic as a full post (linkedin-caption-writer) or a multi-slide carousel (linkedin-carousel-builder)? Say which.`
