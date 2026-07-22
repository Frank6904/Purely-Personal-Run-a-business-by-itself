# Stage Lab v2 — Technical Foundations (from master research, 2026-07-22)

Verified findings that every Stage Lab skill MUST build on. Licenses were checked at source.

## Character illustration system (the "humans, not stick figures" rule)

- **PRIMARY: Open Peeps** (openpeeps.com, **CC0** — safe to embed in every generated file). Hand-drawn ink people with ~30 real facial expressions (tired, awe, driven, concerned, rage, smile, solemn, suspicious…), dozens of hairstyles/heads, accessories. Programmatic composition via **DiceBear**: `npm i @dicebear/core @dicebear/collection`, then `createAvatar(openPeeps, {face:['tired'], head:['bun'], skinColor:[…], clothingColor:['f01621'], …}).toString()` → SVG string, fully offline, deterministic.
- **SECONDARY: Open Doodles** (opendoodles.com, CC0, same artist) — full-body action poses (running, sitting, dancing) for wide shots. **Props: Khushmeen Doodle Icons** (451 icons, CC0). **Alternative engine: comicgen** (gramener/comicgen, MIT code + CC0 characters) — named characters with emotion×pose matrices.
- **NEVER vendor**: Storyset (attribution + no-redistribution), Blush SVGs (paywalled + no-redistribution), unDraw at catalog scale (anti-pack clause), DrawKit/ManyPixels (no-compilation clauses).
- **Never mix illustration families in one deck** — line weight and fill philosophy clash ("clip-art soup"). Open Peeps + Open Doodles + Khushmeen icons share one hand-drawn ink language and may mix.
- Character consistency = a **frozen character recipe** (head, skin, clothing color, accessories) reused verbatim across all slides; only `face` (emotion) and pose change per beat. Brand thread: clothing/accent in #F01621.
- Composition bugs to avoid: prefix SVG ids per instance (defs/clipPath collisions), flip with `scaleX(-1)` to face the text, `vector-effect="non-scaling-stroke"` when scaling stroked art.

## Scene recipe (every story slide)

1. **Mood layer** — generated CSS/SVG gradient washes (never from a library): lighting grammar decides color (see storytelling-grammar.md).
2. **Environment** — 0–3 CC0 doodle props, scaled large, ink color from palette.
3. **Character** — Open Peeps assembly matching the beat's emotion, in the third of the frame opposite the text, facing the text.
4. **Typography** — HTML overlay (never SVG text): Space Mono kicker (letterspaced, accent color), Rethink Sans 800 headline ≤5 words, optional one-line Space Mono sub at ~60% opacity. Film grain overlay (inline SVG feTurbulence data-URI) unifies the frame.
5. Emotion enum → (face, pose, mood-color) triples defined once per deck.

## Hand-drawn diagram rendering (kills the amateur-wobble problem)

- **rough.js** (rough-stuff/rough, MIT, <9 kB, powers Excalidraw + Mermaid): generate CLEAN geometry, let rough.js apply sketchiness — `rough.svg(el).rectangle(x,y,w,h,{roughness:1.5, fill, fillStyle:'hachure', seed:42})`. Hand-authoring wobbly paths is the amateur failure mode; never do it. `seed` gives deterministic output. Vendor `bundled/rough.js` inline.
- **Excalifont or Virgil** (both OFL-1.1): hand-drawn label font, embed as base64 woff2 data-URI (~20–30 kB subsetted). Sketch shapes labeled in a clean geometric font read as broken. AVOID xkcd-script (CC-BY-NC).
- **perfect-freehand** (MIT, tiny): expressive ink annotations — tapered underlines, circles, arrows (output is a fill → reveal via clip-path, not dash).
- **Stroke-reveal animation**: rough.js outputs stroked paths → animate with vivus.js (MIT) `oneByOne`, or dependency-free `stroke-dasharray`/`stroke-dashoffset` via `getTotalLength()`. Both pair perfectly with rough.js (even its hachure fills are strokes).
- Charts: chart.xkcd or roughViz (both MIT). Skip tldraw (proprietary license).

## Deck runtime (one framework for everything)

- **reveal.js, vendored inline** (MIT, ~230 KB raw / ~70 KB gz: reveal.css + reset.css + reveal.js + notes plugin + minimal custom theme). Officially supports opening from file:// with no server. No CDN references ever.
- Config: `controls:false, progress:true, transition:'fade', backgroundTransition:'fade', hash:true`. Hardware clickers = keyboard events, work out of the box.
- **Images as base64 data URIs** (no flash-load on stage, single-file portability). For huge decks: `--linked-assets` mode with `data-preload` + `viewDistance:3`.
- **Ken Burns**: full-bleed `<img>` layer inside each `<section>` (NOT data-background-image), transform-only keyframes 20–28s, 4 alternating pan variants, restart on `slidechanged`, respect `prefers-reduced-motion`.
- **Captions**: bottom-anchored over gradient scrim `linear-gradient(180deg, transparent 40%, rgba(0,0,0,.75))`, `text-wrap:balance`.
- **Speaker notes**: always write `<aside class="notes">`. reveal's two-window speaker view does NOT work from file:// (verified) → ship a custom in-deck notes overlay (N key: translucent notes + timer) + footer hint that `python3 -m http.server` unlocks full speaker view (S).
- **Progressive-reveal drawing slides**: same reveal.js runtime — fragments + `data-fragment-index` trigger stroke-dashoffset transitions on `.visible`; `data-auto-animate` for morphs; `pdfSeparateFragments:true` makes handout PDFs show each build step.
- **PDF export**: decktape (`decktape reveal deck.html deck.pdf`); `?print-pdf` also wired. PPTX only as lossy escape hatch (PptxGenJS, screenshots-into-slides).
- Steal from AMP stories (don't use the format — CDN-dependent): segmented progress bar, tap-left/right zones, background-color fallback behind every image.

## Character-consistency discipline (from film/AI-storyboard research, applies to illustration too)

- One **character bible**, written once, reused verbatim — never paraphrased per slide.
- **Layout diversity vs identity consistency**: the character stays identical, the FRAMING must vary every beat (shot size, side, scale). Ten identical medium shots of a character facing camera = amateur signature.
- Best-of-N: generate variants of the hero character first, let the user pick the anchor before building the sequence.
- Data model per beat (from Story2Board/Storyboarder): `{beat_id, action, emotion, location, shot_size, angle, light, caption}`.
