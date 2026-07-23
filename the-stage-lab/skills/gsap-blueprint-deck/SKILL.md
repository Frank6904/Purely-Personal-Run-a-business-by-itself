---
name: gsap-blueprint-deck
description: Build cinematic horizontal-scrolling GSAP workshop decks and workflow blueprints as single self-contained HTML files in Purely Personal branding. Full-screen panels with real brand logos, real Wikimedia photographs, story cold opens (monuments), tool-by-tool hero slides, animated diagrams, and one-click-deploy walkthroughs. Trigger on "GSAP diagram", "build a blueprint", "workshop blueprint", "horizontal deck", "animated workflow diagram", "visual diagram of the workflow", "make it scroll sideways", "blueprint deck", "story cold open for the workshop", or any request to turn a process, workshop, or system into a scroll-animated visual journey.
version: 1.0.0
author: daniel-paul
tags: [gsap, blueprint, workshop, deck, animation, purely-personal, html]
---

# GSAP Blueprint Deck

Turns any workflow, workshop, or system into a cinematic, horizontally scrolling HTML experience: a vertical hero, then a pinned track of full-screen panels that glide sideways as the viewer scrolls, with snap-to-panel motion, a progress bar, a panel counter, real brand logos, real photographs, and per-panel GSAP reveals. One self-contained file, no CDN, works offline.

Built and battle-tested on the Purely Personal "Second Brain Blueprint" (23 panels). The template in `scripts/build-deck-template.js` IS that deck; customize it rather than starting from zero.

---

## Non-negotiables

1. **Content before code.** Extract the real workflow from the transcript/notes/conversation first. If a "change of plans" happened, the FINAL plan is the truth; show the old plan only as a struck-through pivot panel.
2. **Brand: black + cream + red.** Call `mcp__Purely_Personal__get_brand_colours` if available; otherwise use `--red:#e90d41 --red-deep:#c70a38 --cream:#faf8f4 --dark:#0f0f10`, fonts Rethink Sans 800 / Inter / JetBrains Mono. Tool-brand colors are allowed ONLY as per-panel accent glows and logo tiles.
3. **No em dashes anywhere.** Use commas, periods, or a middot. The build script asserts this.
4. **Self-contained file.** Inline GSAP + ScrollTrigger from npm (`npm i gsap`, read `node_modules/gsap/dist/*.min.js` into `<script>` tags). NEVER use a CDN script tag; sandboxes and offline venues block them silently and the whole deck degrades.
5. **Real logos, full color.** Never hand-draw a brand mark when a real one exists. Sources (all on npm, registry is allowlisted even when the web is blocked):
   - `@lobehub/icons-static-svg` for AI brands (claude-color, claudecode-color, openai, obsidian-color, gemini-color)
   - `devicon` for dev brands (linkedin, vscode, github, vercel originals)
   - `super-tiny-icons` for Gmail's four-color M (strip its white background rect)
   - `simple-icons` as monochrome fallback with official hex
   Run `scripts/assemble-logos.js` (edit its source map for the deck's tool list). It namespaces SVG ids to prevent collisions when inlining multiple logos.
6. **Real photographs via Wikimedia hotlinks.** The user's browser loads them; sandboxes often cannot. Workflow:
   - Verify the exact filename exists with WebSearch restricted to `commons.wikimedia.org` (search the quoted filename).
   - Hotlink `https://commons.wikimedia.org/wiki/Special:FilePath/<File_Name.jpg>?width=1800` (no hash needed, redirect resolves).
   - Every photo gets `onerror="this.style.display='none'"` AND a designed duotone SVG scene underneath (`.ph-fall`), so a failed image still looks intentional, never broken.
   - Credit line: `photo · wikimedia commons`, bottom right, mono 10px.

## Deck architecture (what the template already implements)

- Vertical hero (100vh, dark, red radial glows, grid mask, staggered line reveal, "the journey moves sideways →→→" cue).
- `#hwrap > #track`: flex row of `.panel` (each 100vw × 100vh). GSAP pins `#hwrap` and scrubs `x` to `-(track.scrollWidth - innerWidth)`; snap `1/(N-1)`, `directional:false`, small delay.
- Per-panel reveals: elements carry class `.rv`; a loop creates a `fromTo` with `containerAnimation: tween, start: 'left 62%'`. Background giant outlined word (`.bgword`) parallaxes via scrub; monument photos drift (`scale 1.14→1.02`).
- HUD: fixed brand mark top left, `01 / N` counter top right, red progress bar bottom.
- Mobile fallback: below 861px the track stacks vertically, everything visible without animation. Guard ALL gsap.set/hidden states behind the desktop matchMedia check so content is never invisible on mobile or when JS fails.

### Panel library (mix and match; all exist in the template)

| Panel | Use for |
|---|---|
| `story` intro | "Forget X for five minutes" cold open before the content |
| `monPanel()` monument | Full-bleed photo hero + roman numeral + 3 big stats + 2-sentence story (Pyramids 2.3M blocks/20 yrs/4,500 yrs; Taj 20,000 artisans/22 yrs/1,000 elephants; Wall 21,196 km/2,000 yrs/generations) |
| pair panel | Two photo cards contrasting old vs new builders (Colosseum vs Burj Khalifa: "The tools changed. The rule did not.") |
| question (red) | "What do all of these have in common?" dimmed wrong answers, cream-card punch answer |
| bridge | "Today, you start your monument." + glowing vow chips (Patience · Commitment · Involvement) |
| WIIFY | 4 takeaway cards, "You walk out with a working brain. Not notes." |
| mission | 3-stage overview cards with logo rows |
| `toolPanel()` | One platform per panel: giant logo tile with brand glow, huge title, numbered steps of what happens INSIDE that tool, recreated UI mock window, output chip (`→ file.md`) |
| convergence | SVG: N source cards, drawing bezier paths, animated dots, pulsing hub ("one folder, one home") |
| graph | Obsidian-style constellation, nodes pop with back.out, "YOU" core |
| pivot (red) | Change of plans: struck-through old plan vs dark final-plan card |
| deploy | env-var mock + animated progress bar that fills to "Live" on entry |
| result | 4 gradient-text stat counters that count up |
| route | N-step boxed map row + brand outro |

## Build and verify workflow

1. Clarify with AskUserQuestion if needed: aesthetic already fixed (brand), but confirm scope, story cold open, and which tools get hero panels.
2. `cd` a work dir; `npm i gsap simple-icons @lobehub/icons-static-svg super-tiny-icons devicon --no-audit --no-fund`.
3. Edit `assemble-logos.js` source map → run → `logos2.json`.
4. Copy `build-deck-template.js`, rewrite the panel content for THIS deck. Keep the CSS/JS engine intact. Keep `process.env.NOSNAP` and the writeFileSync switch.
5. `node build.js` (ships with snap) and `NOSNAP=1 node build.js` (writes `test-nosnap.html` for testing). The build prints an em-dash check; it must say `clean`.
6. Verify with Playwright against the NOSNAP build (snap + programmatic scroll = velocity overshoot; never test panel alignment on the snapped build). Chromium lives at `/opt/pw-browsers/chromium-*/chrome-linux/chrome`; adapt `verify-deck.js`. Scroll to `heroHeight + k*1440` for each k, screenshot, and READ the screenshots. Check: every panel lands at exactly `x = -k*1440`, dark panels are dark (see gotchas), text is legible, mocks intact.
7. Deliver with SendUserFile (`display: render`). Offer to persist as an artifact if the desktop tool is connected.

## Hard-won gotchas (each of these was a real bug)

- **CSS order**: `.panel{background:var(--cream)}` is declared AFTER `.dark-p`; always write dark variants as `.dark-p, .panel.dark-p{...}` or dark panels silently render cream with invisible cream text.
- **Snap eats programmatic jumps**: ScrollTrigger snap projects with scroll velocity, so `window.scrollTo` big jumps overshoot panels. That is fine for humans, fatal for tests. Test on the NOSNAP build.
- **Playwright executablePath**: `/opt/pw-browsers/chromium/chrome-linux/chrome` does not exist; glob `chromium-*`.
- **SVG id collisions**: multiple inlined brand SVGs reuse `id="a"` masks/gradients; namespace ids per icon (assemble script does this).
- **Google Fonts may be blocked in the sandbox** but load user-side; keep the link, rely on system fallbacks for screenshots.
- **foreignObject for logos inside SVG diagrams**; plain `<img>` inside SVG will not render.
- **`page.evaluate` twice** with a wait between when you must settle scroll in tests.

## Voice for deck copy

Short declarative lines. Concrete numbers over adjectives ("2.3M stone blocks", "~30 minutes", "3 keys"). Second person. One idea per panel. Kickers in mono caps ("MONUMENT I · GIZA, EGYPT", "STEP 02 · INSIDE VERCEL"). Titles are promises or punches ("Three keys. Three minutes. Live."). Every tool panel ends in an output the attendee can see on their own machine.

See `references/second-brain-content.md` for the complete worked example content map.
