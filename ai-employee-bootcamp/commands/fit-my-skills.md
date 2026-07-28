---
description: The full Day 2 fitting chain in one command. Audits the caption writer and carousel builder against your Business Brain, tailors both, then smoke tests the result. No copy-pasting between stages.
argument-hint: [optional: skill names to fit instead of the Day 2 pair]
---

# /fit-my-skills

Run the complete fitting chain, in this order, without stopping between stages.

**Skills to fit:** $ARGUMENTS if provided; otherwise the Day 2 standard pair:
linkedin-caption-writer and linkedin-carousel-builder.

## The chain

1. **Audit.** Run the matchmaker's full audit on the target skills against
   BUSINESS-BRAIN.md (or the foundation documents if no brain exists yet; if
   neither exists, stop and send the user to /build-my-business-brain first).
2. **Gate.** If the audit rates the BRAIN itself mostly Critical (thin voice,
   no ICP, no proof), stop here. Tell the user exactly which brain sections to
   fill and how, then end. A tight fit needs a filled brain.
3. **Tailor.** Otherwise run the tailor immediately on the audited skills using
   the briefing from stage 1. Both skills in one pass. Standard tailor rules
   apply: regenerated voice files, verification grep, never invent proof.
4. **Smoke test.** When the tailor delivers, run the matchmaker's smoke test on
   every fitted skill automatically. Report pass or fail per check; a fail names
   the exact line and gets fixed before delivery.
5. **Close.** One short summary: what was fitted, the smoke test verdict, and
   the single next action: "Give your fitted caption writer one true thing from
   your week, and ship your first post."

Show a one-line progress marker between stages so the user knows where the
chain is. Never ask a question mid-chain that the brain or the briefing can
already answer.
