---
name: linkedin-carousel-builder
description: >
  Turns a topic, existing post, or brain dump into a complete LinkedIn document carousel:
  8 to 12 slides of copy, one caption to post it with, and a print-ready HTML slide deck
  in the participant's brand. ALWAYS use this skill when the user says "carousel",
  "document post", "slides for LinkedIn", "turn this post into a carousel", "swipe file",
  "PDF post", or describes wanting a multi-slide swipeable asset for LinkedIn. Do not
  write carousel or slide copy directly without running this skill. NOT for one-page
  cheat sheets or reference cards. Use cheatsheet-builder for that. Part of the Purely
  Personal system by Daniel Paul.
---

# LinkedIn Carousel Builder · Purely Personal
# by Daniel Paul

Read ALL reference files before writing a single word:
- `/references/voice-dna.md` · Daniel's 10 voice rules, ICP, hook archetypes, banned words
- `/references/human-writing-standards.md` · Invisibility Diagnostic, AI blacklist, structural rules
- `/references/carousel-frameworks.md` · cover, flow, and CTA patterns per intent, plus a full worked example
- `/references/design-system.md` · brand tokens for the rendered deck
- `/references/visual-standards.md` · environment detection, the HTML+GSAP stack, motion rules, the Carousel shape, and the visual quality gate. Step 9 depends on it.
- `/references/html-output-templates.md` · the AUTHORITY CAROUSEL TEMPLATE (default) and the EDITORIAL CAROUSEL TEMPLATE (alternate). Step 9 starts from one of them, never from a blank file.

One job: turn one idea into a document post the ICP swipes to the end, saves, and acts on.

Document posts are LinkedIn's highest-engagement format (6.6% average engagement),
but only when every slide earns the next swipe. A carousel that smears one thin idea
across 12 slides is worse than no carousel. One idea per slide, or the swipe stops.

---

## WHERE THIS SKILL SITS

**Reads from:** BUSINESS-BRAIN.md · the monthly strategy document if one exists in this project (pull today's topic, pillar, and intent from it instead of asking) · an existing post from linkedin-caption-writer when the user says "turn this post into a carousel"
**Hands off to:** linkedin-caption-writer when the user wants a text-only version of the same idea
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

## STEP 1 · CHOOSE ONE INTENT

Every carousel has ONE primary intent. It determines the cover, the flow, and the CTA.
Never mix intents. An educating carousel with a hard-sell CTA converts nobody.

| Intent | Use when | Body flow | CTA type |
|--------|----------|-----------|----------|
| Educating | Teaching a framework or system | Problem → Steps → Why it works | Follow |
| Nurturing | Building trust through lived experience | Before → Journey → Lessons → Application | Follow |
| Soft Selling | Showing results without a pitch | Challenge → Failed approaches → System → Results | Comment keyword or Follow |
| Hard Selling | Direct offer promotion | Problem → Benefits → Proof → Urgency | Comment or DM keyword |
| Engagement | Contrarian take, bold stance | Wrong belief → Truth → Proof → Meaning | Follow for the niche |

If the monthly strategy document names an intent for this piece, use it. Otherwise infer
from the input, state your choice, and let the user override before you write slides.
Cover, body, and CTA must all support the same intent. Check this again at the final gate.

---

## STEP 2 · INTAKE

Ask only what Step 0 and Step 1 did not already answer, in ONE message:

```
╔══════════════════════════════════════════════════════╗
║  PURELY PERSONAL · LINKEDIN CAROUSEL BUILDER        ║
║  by Daniel Paul                                      ║
╚══════════════════════════════════════════════════════╝

Before I build your carousel:

1  THE SOURCE
   A topic, an existing post, or a raw brain dump.
   Paste whatever you have. Messy beats vague.

2  THE INTENT
   Educating / Nurturing / Soft Sell / Hard Sell / Engagement.
   Or say "you pick" and I'll choose from the source.

3  THE READER
   Who should stop mid-scroll at slide 1?
   Not "coaches". "Leadership coaches at 4K followers with zero inbound."

4  THE PROOF
   Real numbers, a real client result, a real timeline.
   Required for Soft Sell and Hard Sell. Never invented.

5  THE KEYWORD (selling intents only)
   The comment/DM keyword and what you'll send when they use it.
```

Never write slides before the source and the proof question are answered.
If the user gave an existing post as the source, mine it: its hook becomes cover raw
material, its specifics become body slides. Do not ask them to repeat what it contains.

---

## STEP 3 · RESEARCH DECISION

Research only if the carousel makes a claim that needs external proof (a platform trend,
a market stat, "what's working on LinkedIn right now"). One sharp data point maximum,
woven into a body slide as proof, never as filler.

**Research honesty, non-negotiable:**
1. Try to fetch/search the actual source.
2. If unreachable (login walls, no access): ASK the user to paste the content (posts, profile, About section).
3. If unavailable: mark that section `ASSUMED · verify before use` and say what you assumed.
Never present inferred information as observed. Never invent posts, engagement patterns, statistics, or quotes. A visible gap is professional; invented intelligence is a liability.

The same rule covers the user's own numbers: use only results they gave you.
No hallucinated stats, client stories, or timelines. Ever.

---

## STEP 4 · SLIDE MAP

Pick the slide count from the shape of the content:

| Content shape | Slides | Structure |
|---------------|--------|-----------|
| Single framework or system (3 to 5 moving parts) | 8 | Cover · setup · 5 body · CTA |
| Listicle or step-by-step (6 items) | 10 | Cover · setup · 6 items · proof · CTA |
| Listicle or step-by-step (7 to 8 items) | 11 to 12 | Cover · setup · 1 slide per item · proof · CTA |

Then pick the flow pattern that matches the intent (Patterns A to D in
`/references/carousel-frameworks.md`) and write the slide map: one line per slide,
stating that slide's single idea. If any line needs an "and", split it or cut it.
Show the map only if the user asked to review structure first; otherwise proceed.

---

## STEP 5 · COVER SLIDE (the scroll-stopper)

The cover decides whether anyone sees slide 2. Highest priority of the build.

**Title: 4 to 8 words.** Creates curiosity OR promises a specific outcome. Uses numbers
when possible ("6-Step", "5+ Calls", "in 4 Minutes"). Sounds like the client speaking,
not a corporate headline. Must be punchy. This is the one shot.

**Subtitle: 8 to 15 words.** Expands the promise or adds specificity. Names the audience
or the method. Reads as a natural continuation of the title.

**Visual idea: one line.** Must work at thumbnail size: outcome stat, before/after split,
or bold typographic claim.

Principles: specific over vague ("5+ calls in 1 week" beats "more leads") · outcome over
lesson · conversational over corporate ("I Trained Claude" beats "How to Use AI") ·
a curiosity gap the reader can only close by swiping.

Forbidden: "Steal My Exact Process!!" · "The Ultimate Guide to" · "The Secret to" ·
"Everything You Need to Know" · multiple exclamation marks · buzzwords without numbers.

Per-intent title and subtitle patterns with examples: `/references/carousel-frameworks.md`.
Write the cover LAST, after the body, so it promises exactly what the slides deliver.

---

## STEP 6 · BODY SLIDES

Strict format for every body slide:

```
Slide [N]
Headline: [8 words maximum. Hooks attention, sounds spoken, never "The Power of..."]
Support:  [2 to 3 lines, 15 words maximum each]
Visual:   [one specific idea, e.g. "bar chart: replies before vs after", not "graph"]
```

Support line rules:
- Line 1: the core insight of this slide.
- Line 2: the supporting detail, example, or consequence.
- Line 3: only if needed to complete the thought. Cut it if the slide works without it.
- Full sentences, never bullet fragments. Vary line length for natural rhythm.
- Conversational: use "you", ask questions, be direct.

Slide rules:
- ONE idea per slide. If you can't state the idea in one sentence, split the slide.
- No two slides make the same point in different words.
- Every slide connects to the next: a bridging question ("So what does this mean?"),
  a consequence ("When that happens..."), or a building pattern (First → Then → Finally).
- Keep the client's technical terms exactly as they use them ("Voice DNA", "ICP",
  "EMR integration"). Never simplify jargon their audience expects.
- Not every headline starts "How to". Zero headlines start "Why You Need".
- Vocabulary at grade 3 to 4 reading level, except the client's own technical terms.
- Expert-level insight, not beginner basics. Every slide must add something the ICP
  did not already know or had not seen framed this way.

Slide vocabulary (name the type in each slide's Visual idea so Step 9 renders it right):
- **Step-badge slides:** sequential steps or numbered mistakes carry an accent badge chip
  ("STEP 1: ...") above the headline (Authority style).
- **Mockup-card slides:** when the slide shows a tool, files, a folder structure, or a
  settings flow, name which UI-mockup card renders it: chat window, file-card trio,
  folder tree, or settings/checklist panel (Authority components).
- **Prompt-card slides:** when the slide hands the reader something to paste or ask,
  the visual is the accent-outlined prompt card with its label and verbatim text.

---

## STEP 7 · CTA SLIDE (the closer)

Match the CTA type to the intent chosen in Step 1. Full formulas and examples per type
in `/references/carousel-frameworks.md`.

Rules:
- ONE clear action. Never follow AND comment AND DM.
- Specific outcome named: "voice-trained AI systems", not "helpful content".
- Genuine scarcity only. Fake urgency kills trust and is banned.
- Selling intents use [CTA-DEFAULT] and the keyword from intake.
- Forbidden: "Like, comment, and follow!" · "Don't miss this!" · generic "Follow for more content" · paragraphs explaining the offer.

---

## STEP 8 · THE CAPTION

The carousel carries the value; the caption sells the swipe. 500 to 900 characters:

- Hook: under 12 words, one specific detail, passes the Hook Quality Test in
  `/references/human-writing-standards.md`. Related to the cover but never identical to it.
- 2 to 3 short paragraphs of context that make swiping feel necessary. Do not summarize
  the slides. Tease the sharpest one: "Slide 7 is the one most people get wrong."
- One CTA line that matches the CTA slide exactly (same keyword, same action).
- Optional P.S. under 20 words.

All voice rules and the AI blacklist apply to the caption at full strength.

---

## STEP 9 · RENDER THE DECK

The slide-by-slide copy in the Delivery Format is ALWAYS delivered. The rendered deck sits
beside it, never instead of it. Follow `/references/visual-standards.md` for environment
detection, motion, and design rules.

**Template first, on any model:** start from a canonical carousel template in
`references/html-output-templates.md`. Swap the `:root` tokens from the brain (§7,
else `/references/design-system.md`), fill the copy slots, change nothing structural.
Rendering is template execution, not design improvisation. If you feel the urge to
redesign the layout, that is the signal you are off-template.

**Style choice (make it before rendering, state it in the delivery footer):**
- **Default: the AUTHORITY CAROUSEL TEMPLATE** (dark, author chrome on every slide,
  accent glow, step badges, UI-mockup cards, prompt cards).
- **Use the EDITORIAL CAROUSEL TEMPLATE** (light, typographic) when the brain's §7
  visual style words call for calm, minimal, understated, or editorial.
- State the chosen style in the delivery footer: `Style: Authority` or `Style: Editorial`.
- Authority extras: avatar slot uses the participant's headshot path if the brain
  provides one, else the initials circle. Inline Claude/LinkedIn logos ONLY when the
  content genuinely references those products.

**Environment detection first:**
1. **claude.ai chat**: render the deck as an interactive HTML artifact with GSAP from cdnjs
   (`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js` plus ScrollTrigger).
2. **Claude Desktop / Claude Code**: build ONE self-contained file `carousel-[topic-slug].html`,
   same GSAP script tag (files open in a real browser), and give the path.
3. **Neither**: deliver the copy slide-by-slide and say in one line which environment
   unlocks the rendered deck.

**Print mode (unchanged, the PDF source of truth):**
- Each slide is the template's 4:5 frame, 540 x 675 px (1080 x 1350 at 50% scale; type is
  vector so the PDF stays crisp), one frame per printed page:
  `@page { size: 540px 675px; margin: 0; }` with the template's `@media print` block as shipped.
- `@media print`: all animation off, every element at its final visible state, one slide
  per page. Print output is identical to the pre-GSAP static deck.

**Screen mode (how the client reviews and approves it):**
- Slide-snap vertical scrolling: `scroll-snap-type: y mandatory` on the container, each
  slide a snap point.
- GSAP entrance staggers per slide via ScrollTrigger: headline, support lines, and chip
  fade up 20 to 40px, staggered 0.06 to 0.12s, duration 0.6 to 0.9s, ease "power3.out",
  animating once when the slide reaches 70% viewport. Nothing moves after a slide settles.
- The cover slide gets the display-type treatment: the title as the largest type in the
  deck, animated in first.
- Content fully readable with JavaScript disabled. Animation enhances, never gates.

**Design (both modes):**
- Design tokens: the brain's design section (§7) if present, else `/references/design-system.md`
  defaults (Purely Personal red #E8294C, near-black, warm off-white, Poppins).
- Bold typographic slides, no photography required. The chosen template's type scale and
  chrome are the design. ONE visual system: every slide shares the same background and
  chrome. Authority: identical author chrome + page number on every slide, mockup and
  prompt cards built from the template's components only. Editorial: wordmark tag +
  slide number + progress dots, cover and CTA intensify with type size only, per the
  template's `.cover` and `.cta` classes.
- Everything inline except the GSAP cdnjs tag; fonts with system fallback. The deck must
  still read and print correctly if the script fails to load.
- Copy in the file must be character-identical to the approved slide copy. No redesign edits.

Then give the user the export path:
1. Open the file in Chrome. 2. Press Cmd+P (Ctrl+P on Windows). 3. Destination: Save as PDF.
4. Margins: None. 5. Tick "Background graphics". 6. Save, then upload the PDF to LinkedIn
via "Add a document" on a new post, and paste the caption.

---

## DELIVERY FORMAT

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURELY PERSONAL · YOUR CAROUSEL
by Daniel Paul
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COVER
[Title]
[Subtitle]
Visual: [idea]

SLIDE 2 ... SLIDE [N-1]
[Headline]
[Support lines]
Visual: [idea]

CTA SLIDE
[Title]
[Content]
Visual: [idea]

CAPTION
[full caption, paste-ready]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Intent: [intent] · Slides: [N] · Style: [Authority / Editorial] · Score: [N]/4
Deck: [file path / artifact / "copy only" plus the environment that unlocks the deck]
Preview blank? Use Show in folder and double-click the file to open it in your browser.
Research: [conducted / not needed]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

One line after delivering: `Want a text-only version of this idea? Say the word and I'll hand it to linkedin-caption-writer.`

Then end the delivery with the telemetry footer: `Rate this output when you use it: SHIPPED / EDITED / REWROTE. Log it in your tracker.`

---

## FINAL GATE · evidence required, then ship

**Invisibility Diagnostic: score each 0 or 1, and QUOTE the exact line that earns the point. No quote = no point.**
1. Specificity: quote one detail that could only come from THIS person's brain/intake/research. If you can't quote one, score 0.
2. Voice: quote one line that matches a rule or sample in their Voice DNA.
3. Stakes: quote the line that shows why this matters to the ICP.
4. Surprise: quote the line a competitor wouldn't dare or think to write.
Target 4/4. For every point you scored 1, also write the one-line edit that would make it a 0. If you can't, you're rubber-stamping. Below 4: fix the failing dimension and re-score. One rewrite maximum, then ship with the score shown.

**Mechanical checks (verify by counting/searching the actual text, not by feel; in Claude Code, verify counts with a shell command):**
- Zero em dashes anywhere.
- Zero words from the banned list (bundled blacklist + the brain's banned words).
- Length within this skill's stated limits (state the measured numbers).
- No unresolved placeholders: nothing in [brackets], no "your ICP", no "[ADD ...]".
- Sign-off and CTA are [SIGN-OFF] and [CTA-DEFAULT], not defaults, when a brain exists.

**Skill checks:**
- One-idea rule: state every slide's idea in one sentence each. Any slide needing two sentences gets split or cut.
- One visual system across all slides: same background, type scale, accent placement, and footer on every slide. Palette swaps mid-deck fail the gate.
- Cover scroll-stop test: title is 4 to 8 words (count them), subtitle 8 to 15 words (count them), contains a specific detail, and creates a gap only swiping can close.
- Every body headline is 8 words or fewer; every support line is 15 words or fewer. Count, never estimate.
- Cover, body flow, and CTA all serve the ONE intent from Step 1.
- No two slides repeat the same point. Reread the deck in sequence to confirm flow.
- CTA slide has exactly one action; caption CTA uses the same keyword and action.
- Caption is 500 to 900 characters (state the count).
- If rendered: deck follows the Step 9 environment detection, every frame is the template's 540 x 675 (4:5), screen mode snaps and staggers, print mode kills all animation, print instructions delivered.
- Output uses the canonical template structure (Authority default, or Editorial when the brain's style calls for it), and the chosen style is stated in the delivery footer. A from-scratch layout fails the gate.
- Visual gate 1: copy in the deck is character-identical to the approved slide copy and caption.
- Visual gate 2: tokens are the client's (grep the HTML for the brain's hex codes).
- Visual gate 3: readable with JS off; prints clean, one slide per page, animation off in print media.
- Visual gate 4: no banned visual elements (the NEVER list in visual-standards.md).
- Visual gate 5: the Rule of the Room honestly applied. Would the client show this to someone?
