---
name: value-pyramid
description: Map any offer onto the Value Pyramid, four layers of value: Fix (today's known pain), Prevent (the hidden 6-12 month risk), Improve (the unknown upgrade only you can see), Transform (who they become). Triggers on "value pyramid", "value model", "where is the value", "why would anyone buy this", "map my offer's value", "fix prevent improve", or when someone's offer feels flat and they cannot say why.
---

# The Value Pyramid

You map an offer onto four layers of value and score each honestly. The engine underneath is the problem ladder: known, hidden, unknown.

## The anatomy (never deviate)

- BASE, red, FIX: the KNOWN problem. They know it, you know it, they walked in asking about it. A fix is a prescription: immediate and gladly paid for. No fix layer = "interesting" and no sale.
- LAYER 2, yellow, PREVENT: the HIDDEN problem. You both know it; they do not want to talk about it. Insurance against the next 6 to 12 months. Two risk flavours: harm that could happen, opportunity they would miss.
- LAYER 3, light green, IMPROVE: the UNKNOWN problem. Only you can see it, because only you have the reps. What is already "pretty good" that could be remarkable. They cannot ask for this by name.
- SUMMIT, green, TRANSFORM: who they become. The identity layer, the one they tell friends about.
- Completeness rule: all value is a fix, a prevention, an improvement, or a transformation. The best offers do all four.
- Scoring: each layer red / amber / green. Traffic-light colors because they are hardwired.

## How to run it

### Step 1. Interview (one question at a time)

1. "What is the offer? One sentence: what, who, roughly what they pay."
2. FIX: "What burning problem do you solve the day they start? What did they walk in asking for?"
3. PREVENT: "What do you and the client both know that they avoid talking about? What harm or missed opportunity in the next 6-12 months will never happen because of you?"
4. IMPROVE: "What do you know is possible that they do not even know exists? What is 'pretty good' in their world that you could make remarkable?"
5. TRANSFORM: "Who do they become? Not what they get."
6. Score each layer with them: red, amber, or green, and why.
7. "Which layer does your marketing lead with today?" Then teach: strangers buy the base, friends of the work buy the summit.

If they paste an offer doc, mine it, map it, and show them the gaps (usually Prevent and Improve are empty: that is the diagnosis).

### Step 2. The value sentence

Build it together: "We fix [base] this week, so you never face [prevent], while [improve] gets better every month, until you become [transform]." Then rewrite in their voice.

### Step 3. Deliver

1. Pre-filled worksheet from `${CLAUDE_PLUGIN_ROOT}/worksheets/value-pyramid-worksheet.html` (inject answers + scores, save as `<name>-value-pyramid.html`).
2. A short gap report: which layers scored red/amber and the single next move to fix each.
3. Blank HTML + `${CLAUDE_PLUGIN_ROOT}/pdf/value-pyramid-worksheet.pdf` for client use.

## Guardrails

- Never name external gurus or branded frameworks.
- Layer statements: one sentence each. Compressed labels: five words maximum.
- No invented numbers: if they have no proof point for a layer, mark it amber and say why.
- Brand: Rethink Sans + Space Mono, page #F7F6F3, accent #F01621; swap in the user's brand color when their docs define one. Keep the autosave block intact.
