# Stage Lab — Art Direction (chosen by Danny, 2026-07-22)

Two tiers, one family:

1. **CINEMATIC CAST (story slides — the flagship look)**: true Pixar-style 3D-animation-film imagery generated on Higgsfield (nano_banana_pro, ~2 credits/scene) from the permanent 13-character cast in `../cast/CAST.md`. Anchors are generated ONCE and only ever edited into scenes. This is the look Danny wants on stage.
2. **SOFT-3D (diagrams, arc maps, recap canvases — the free/instant look)**: Microsoft Fluent 3D assets composed in code, described below. Same warmth, zero credits, instant. Used wherever a generated cinematic frame is overkill.

No sketch styles, no stick figures, no flat clip-art unless Danny explicitly asks.

## The look

- **Characters & props**: Microsoft Fluent Emoji **3D style** (github.com/microsoft/fluentui-emoji, MIT — safe to embed in every generated file). Soft-3D rendered people with human skin tones, kids, animals, and hundreds of objects. This is the closest license-safe, code-only system to a Pixar feel: rounded, warm, glossy, likeable.
- **Stage**: dark cinematic backgrounds with colored radial glows (never flat black, never white for stage decks). Base tones: night `#0b0d12`, turn `#14100e`/`#100e16`, bliss `#1a1410`. One glow per slide, positioned behind the character, colored by the beat's lighting grammar (cool blue = grind, violet = mystery/turn, warm amber/gold = possibility/bliss).
- **Depth**: every character gets `filter: drop-shadow(0 30px 70px rgba(0,0,0,.6))` and sits IN the glow. Optional soft floor ellipse. Nothing flat.
- **Typography**: Rethink Sans 800 headlines (≤5 words, `clamp(42px,5.4vw,92px)`, `#F5F2EC`, `text-wrap:balance`), Space Mono kickers (letterspaced .32em, `#F01621`) and subs (~60% opacity). Brand red is the kicker + one accent only.
- **Likability rules**: rounded everything, generous whitespace, one character (or one clear group) per slide, faces big enough to read emotion from the back row, gentle humor allowed in subs (the dog belongs in the story).

## Asset system (Fluent 3D)

Base URL: `https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets`

- **Objects/animals** (no skin tone): `<base>/{Name}/3D/{snake_name}_3d.png` — e.g. `Brain/3D/brain_3d.png`.
- **People** (skin tones: `Default`(yellow — NEVER use for story humans), `Light`, `Medium-Light`, `Medium`, `Medium-Dark`, `Dark`): `<base>/{Name}/{Tone}/3D/{snake_name}_3d_{tone-lower}.png` — e.g. `Woman technologist/Medium-Light/3D/woman_technologist_3d_medium-light.png`.
- Name → snake: lowercase, spaces→underscores, hyphens kept (`E-mail` → `e-mail_3d.png`).
- Fetch with curl at build time, embed as **base64 data URIs** (decks must work offline on stage). If a name 404s, probe variants with `curl -sI` (e.g. "Older woman" is not a name; try "Old woman") or browse the repo's assets folder.

**Verified catalog (2026-07-22):**
- People (all tones): Woman/Man technologist · Woman running · Woman/Person raising hand · Person shrugging · Woman office worker · Woman teacher · Woman gesturing ok · Person in bed · **Boy · Girl · Baby**
- Animals: Dog · Cat
- Story props: Brain · Sparkles · Rocket · E-mail · Calendar · Chart increasing · Alarm clock · Wastebasket · Light bulb · Trophy · Fire · Money bag · Laptop · Megaphone · Sun · Crescent moon · Party popper · Hourglass done
- Also available (unverified, probe first): hundreds more — professions, gestures, food, transport, weather.

## Casting rules

- **Right character for the role**: a kid role gets Boy/Girl/Baby, an adult role gets an adult, an elder gets an elder emoji, a pet gets the animal. Never cast against age/species — it breaks believability.
- **Hero consistency**: one deck = one hero. Pick the hero's emoji-person family (e.g. the blonde Medium-Light woman) and reuse ONLY assets from that same person across beats (Woman technologist → Person shrugging → Woman running all render the same-looking woman in Fluent). Verify visually — if a pose renders a different-looking person, choose another pose.
- **Skin tone is a deliberate choice**: vary across decks/characters; keep constant within a character.
- **Group scenes**: 2–3 characters max, hero largest, supporting cast smaller and lower. The dog/cat as emotional garnish earns its place.

## Composition recipe (every story slide)

1. Background: base tone + one radial glow behind the character (`radial-gradient(60% 55% at CX CY, glowColor, transparent 60%)`).
2. Character block: right or left third (alternate sides across the deck per shot-variety rule), vertically centered, `width:min(52vh,34vw)` hero / `min(24vh,15vw)` sidekick.
3. Text block: opposite third — kicker / headline / sub.
4. Optional prop: one 3D object near the character (floating slightly above, smaller), only if it adds story.
5. Shot grammar still applies (see storytelling-grammar.md): close-up beats = scale the character LARGER (face crop via overflow), wide beats = smaller character + more environment glow.

## Motion rules

- Slide transitions: opacity fade 600–700ms only.
- Element entrances: characters may "pop" in with a 250–350ms scale spring (0.92→1) — likeable, not bouncy-clownish. Ration per slide.
- Diagrams build progressively: one node per keypress, spring pop-in.
- Respect `prefers-reduced-motion`.

## Diagrams in this language ("soft diagrams")

No boxes-and-arrows. A soft diagram = dark stage + glowing rounded cards or circles, each with a 3D icon + short label, connected by soft glowing lines (2px, rgba white .18, optionally dashed), center element largest with the strongest glow. Same typography as slides. Build order follows the drawing choreography: center → nodes → connections → punchline (red accent). Whiteboard/sketch mode (rough.js) exists only as an explicit opt-in — it is NOT the default anymore.
