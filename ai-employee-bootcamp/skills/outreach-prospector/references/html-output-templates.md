<!-- SHARED REFERENCE · CANONICAL SOURCE: Purely Personal skill suite v5.2.0 · 2026-07 · If BUSINESS-BRAIN.md exists in the project, its values override this file. Do not edit this copy alone — update the suite. -->
# HTML Output Templates, AI Employee Bootcamp
# Purely Personal · by Daniel Paul
# World-class, self-contained, branded HTML for every executive output.

This file is the single output standard for the executive skills. Every brief, post, prospect pack, and revenue dashboard is delivered as ONE self-contained `.html` file: all CSS inline, fonts and GSAP from CDN, nothing to paste from another file. Open it in any browser, it just works.

Live reference of the finished standard: https://ai-employee-visuals.vercel.app

---

## STEP 0, BRAND COLOR DETECTION (run before building any file)

Before writing a single line of HTML, set the brand color.

1. Look in the user's brain folder / foundation docs (positioning, voice-dna, brand, design notes) for a hex code (`#RRGGBB`).
2. **If a hex is found:** use it as `--primary` throughout the file. Derive `--primary-light` by mixing it ~35% toward white. If you cannot derive cleanly, reuse the same hex for both.
3. **If no hex is found:** default to Purely Personal red `--primary:#E8294C; --primary-light:#F5607A`.
4. Never hardcode a different accent. The whole document adapts to the one brand color, so every client's output looks like THEIR company.

### Theme choice (STANDARD or LIGHT)

Two themes ship in the CORE SHELL, switched by the `data-theme` attribute on `<body>`:

- **STANDARD** (`<body data-theme="standard">`, the default): bold, branded. A solid brand-color header band, white cards with a colored left accent, a dark closing note. High-impact, presentation-ready.
- **LIGHT** (`<body data-theme="light">`): airy, editorial. White background, no color band (the brand color drops to a small kicker and accents), hairline borders, a soft brand-tinted note. Calmer, lighter, closer to a Notion or Linear document.

Default to STANDARD. Use LIGHT when the user asks for a light, minimal, or airy version, when the output is a long read, or when the brand notes lean understated. Both use the exact same BODY templates, only the `data-theme` value changes.

---

## GUARDRAILS (non-negotiable for every file)

- **Self-contained.** One `.html` file. All CSS in a single `<style>` block. No external CSS file, no "paste from design-system" step. Fonts and GSAP via the CDN links in the CORE SHELL only.
- **Font is Rethink Sans.** Never Poppins, never anything else.
- **No em dashes.** Anywhere. Use a comma, a period, or "to" for ranges. This applies to every word of generated copy.
- **Human voice.** No AI tells ("dive in", "unlock", "elevate", "in today's fast-paced", "it's not just X, it's Y"). Read `references/ai-pattern-blacklist.md` and `references/human-writing-standards.md` before writing copy into the file.
- **Never auto-send.** These files are drafts and recommendations. Any drafted message (DM, email reply, post) is shown for approval, never sent. Say so in the file where relevant.
- **Numbers are real or clearly sample.** Never invent revenue or metrics. If a connector returned nothing, show an empty state ("No data yet, connect Gmail") instead of fabricating.
- **Graceful empty states.** Any section with no data renders a calm placeholder, not a broken layout.

---

## THE CORE SHELL (use for ALL four department layouts)

Every executive file is the CORE SHELL below with one department BODY (Section further down) pasted into `<!-- BODY -->`, and `--primary` set per STEP 0. Do not change anything else.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[TITLE] · Purely Personal</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{
    --primary:#E8294C; --primary-light:#F5607A;            /* STEP 0 sets these */
    --black:#0A0A0A; --ink:#15151A; --white:#FFFFFF; --off-white:#F8F7F5;
    --gray:#E4E3E0; --gray-text:#5b5b62; --gray-light:#F2F1EE;
    --good:#16A34A; --warn:#D97706; --bad:#DC2626;
    --r-md:14px; --r-lg:22px; --pill:9999px;
    --sh:0 1px 2px rgba(0,0,0,.04),0 8px 28px rgba(0,0,0,.06);
    --grad:linear-gradient(135deg, color-mix(in srgb,var(--primary) 78%, #000) 0%, var(--primary) 48%, var(--primary-light) 100%);
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{font-family:'Rethink Sans',sans-serif;background:radial-gradient(80% 60% at 96% -12%, color-mix(in srgb,var(--primary) 14%, transparent), transparent 60%), radial-gradient(60% 50% at 0% 6%, color-mix(in srgb,var(--primary-light) 10%, transparent), transparent 55%), var(--off-white);background-attachment:fixed;color:var(--ink);line-height:1.6;-webkit-font-smoothing:antialiased;}
  .doc{max-width:840px;margin:0 auto;padding:34px 22px 70px;}

  /* header band, brand gradient (STANDARD theme) */
  .ohead{border-radius:var(--r-md);padding:26px 28px;margin-bottom:22px;color:#fff;background:var(--grad);box-shadow:0 16px 42px color-mix(in srgb,var(--primary) 30%, transparent);position:relative;overflow:hidden;}
  .ohead::after{content:"";position:absolute;width:240px;height:240px;border-radius:50%;background:rgba(255,255,255,.10);top:-120px;right:-60px;pointer-events:none;}
  .ohead .k{font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.82;font-weight:600;}
  .ohead h1{font-size:clamp(24px,4vw,32px);font-weight:800;letter-spacing:-.02em;margin:5px 0 3px;}
  .ohead .d{font-size:13px;opacity:.85;}

  /* building blocks */
  .sec{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--gray-text);font-weight:700;margin:24px 0 12px;}
  .card{background:#fff;border:1px solid var(--gray);border-radius:var(--r-md);box-shadow:var(--sh);padding:18px 20px;margin-bottom:14px;border-left:4px solid var(--primary);}
  .card h4{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--gray-text);margin-bottom:12px;}
  .lead{font-size:16px;}
  .row{display:flex;align-items:center;gap:10px;padding:8px 0;font-size:15px;border-bottom:1px solid var(--gray-light);}
  .row:last-child{border-bottom:none;}
  .row .when{color:var(--gray-text);font-size:13px;width:74px;flex-shrink:0;}
  .tagi{font-size:11px;font-weight:700;padding:2px 9px;border-radius:var(--pill);margin-left:auto;white-space:nowrap;}
  .t-red{background:#fdecec;color:var(--bad);} .t-amb{background:#fdf1de;color:var(--warn);}
  .t-grey{background:var(--gray-light);color:var(--gray-text);} .t-grn{background:#e7f6ee;color:var(--good);} .t-blue{background:#e6f0fc;color:#1E6FE0;}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
  .grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
  .stat{background:#fff;border:1px solid var(--gray);border-radius:var(--r-md);box-shadow:var(--sh);padding:18px 20px;position:relative;overflow:hidden;}
  .stat::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:var(--grad);}
  .stat .l{font-size:12px;color:var(--gray-text);} .stat .n{font-size:34px;font-weight:800;letter-spacing:-.02em;margin-top:4px;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;}
  .stat .delta{font-size:13px;font-weight:700;margin-top:2px;} .up{color:var(--good);} .down{color:var(--bad);}
  .bar{height:14px;border-radius:var(--pill);background:var(--gray-light);overflow:hidden;margin-top:10px;}
  .bar i{display:block;height:100%;width:0;border-radius:var(--pill);background:linear-gradient(90deg,var(--primary),var(--primary-light));}
  .note{background:linear-gradient(135deg, var(--ink) 0%, color-mix(in srgb,var(--primary) 26%, var(--ink)) 100%);color:#fff;border-radius:var(--r-md);padding:18px 22px;font-size:15px;margin-top:6px;box-shadow:0 14px 36px rgba(0,0,0,.16);}
  .note b{color:var(--primary-light);}
  .qbox{width:100%;border:1px dashed var(--gray);border-radius:10px;padding:12px;font-family:inherit;font-size:14px;color:var(--gray-text);background:#fff;margin-top:8px;}

  /* post mock (CMO) */
  .lipost{background:#fff;border:1px solid var(--gray);border-radius:var(--r-md);box-shadow:var(--sh);padding:20px;}
  .lihead{display:flex;align-items:center;gap:10px;margin-bottom:12px;}
  .av{width:46px;height:46px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;}
  .lihead .nm{font-weight:700;font-size:15px;} .lihead .mt{font-size:12px;color:var(--gray-text);}
  .lipost .post{font-size:15px;line-height:1.6;white-space:pre-line;}
  .chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;}
  .chip{font-size:12px;font-weight:600;background:var(--gray-light);color:var(--gray-text);padding:5px 11px;border-radius:var(--pill);}
  .score{display:inline-flex;align-items:center;gap:8px;background:#e7f6ee;color:var(--good);font-weight:700;font-size:13px;padding:6px 13px;border-radius:var(--pill);}

  /* prospect card (CRO) */
  .pcard{background:#fff;border:1px solid var(--gray);border-radius:var(--r-md);box-shadow:var(--sh);padding:16px 18px;}
  .pcard .ph{display:flex;align-items:center;gap:10px;margin-bottom:8px;}
  .pcard .nm{font-weight:700;font-size:15px;} .pcard .rl{font-size:12px;color:var(--gray-text);}
  .pcard .dm{font-size:13px;background:var(--gray-light);border-radius:10px;padding:10px 12px;margin:10px 0;}

  footer{text-align:center;padding:30px 22px 10px;color:var(--gray-text);font-size:13px;}
  footer b{color:var(--ink);}

  /* LIGHT THEME, airy editorial variant. Activate by setting <body data-theme="light">. */
  body[data-theme=light]{background:#fff;}
  [data-theme=light] .ohead{background:#fff;color:var(--ink);border:none;border-bottom:1px solid var(--gray);border-radius:0;padding:4px 2px 18px;margin-bottom:24px;box-shadow:none;}
  [data-theme=light] .ohead::after{display:none;}
  [data-theme=light] .note{box-shadow:none;}
  [data-theme=light] .ohead .k{color:var(--primary);opacity:1;}
  [data-theme=light] .ohead h1{color:var(--ink);}
  [data-theme=light] .ohead .d{color:var(--gray-text);opacity:1;}
  [data-theme=light] .card,[data-theme=light] .stat,[data-theme=light] .pcard,[data-theme=light] .lipost{box-shadow:none;border:1px solid #ECEBE8;}
  [data-theme=light] .card{border-left:1px solid #ECEBE8;}
  [data-theme=light] .note{background:color-mix(in srgb,var(--primary) 7%,#fff);color:var(--ink);}
  [data-theme=light] .note b{color:var(--primary);}
  [data-theme=light] .qbox{background:#fff;}

  @media(max-width:640px){.grid2,.grid3{grid-template-columns:1fr;}}
</style>
</head>
<body data-theme="standard">
  <div class="doc">
    <!-- BODY -->
    <footer>The brain thinks. The team works. You approve. · <b>Built by Daniel Paul · Purely Personal</b></footer>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script>
    window.addEventListener('load',function(){
      if(!window.gsap)return; gsap.registerPlugin(ScrollTrigger);
      gsap.from('.ohead',{y:26,opacity:0,scale:.98,duration:.7,ease:'power3.out'});
      gsap.from('.ohead h1',{y:14,opacity:0,duration:.7,delay:.12,ease:'power3.out'});
      gsap.from('.card,.stat,.pcard,.lipost,.note,.bar',{y:20,opacity:0,duration:.55,stagger:.07,ease:'power2.out',scrollTrigger:{trigger:'.doc',start:'top 85%'}});
      gsap.utils.toArray('.count').forEach(function(el){
        var to=+el.dataset.to,o={v:0};
        gsap.to(o,{v:to,duration:1.4,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 92%'},onUpdate:function(){el.textContent=Math.round(o.v).toLocaleString();}});
      });
      gsap.utils.toArray('.bar i').forEach(function(el){
        gsap.to(el,{width:el.dataset.pct||'75%',duration:1.4,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 94%'}});
      });
    });
  </script>
</body>
</html>
```

Notes on the shell: animated metrics use `<span class="count" data-to="412">0</span>`. Progress bars use `<div class="bar"><i data-pct="75%"></i></div>`. Both animate on scroll automatically. Keep the `.count` class for the count-up animation.

---

## SECTION: DEPARTMENT BODIES

Paste ONE of these into `<!-- BODY -->`. Fill every `[PLACEHOLDER]`. Drop any block that has no data, or give it an empty state.

### BODY, COO morning brief
File name: `coo-brief-[YYYY-MM-DD].html`

```html
<div class="ohead"><div class="k">COO · Morning brief</div><h1>Good morning, [NAME]</h1><div class="d">[WEEKDAY, DD MONTH YYYY] · ran while you slept</div></div>

<div class="card"><h4>Today, in one line</h4><div class="lead">[THE SINGLE MOST IMPORTANT FRAMING FOR THE DAY]</div></div>

<div class="grid2">
  <div class="card"><h4>Calendar</h4>
    <div class="row"><span class="when">[TIME]</span> [EVENT]</div>
    <!-- repeat rows, or empty state: <div class="row">Nothing scheduled. Protect the day.</div> -->
  </div>
  <div class="card"><h4>Inbox · [N] need you</h4>
    <div class="row">[SENDER + ASK]<span class="tagi t-red">reply</span></div>
    <div class="row">[ITEM]<span class="tagi t-amb">decide</span></div>
    <div class="row">[ITEM]<span class="tagi t-grey">fyi</span></div>
  </div>
</div>

<div class="grid2">
  <div class="card"><h4>Overdue</h4><div class="row">[OVERDUE ITEM + HOW LATE]<span class="tagi t-red">act</span></div></div>
  <div class="stat"><div class="l">[KEY METRIC LABEL]</div><div class="n"><span class="count" data-to="[NUMBER]">0</span></div><div class="delta up">[CHANGE vs last week]</div></div>
</div>

<div class="note">One thing to move the needle today: <b>[THE SINGLE HIGHEST-LEVERAGE ACTION]</b>. [If a reply was drafted: "The draft is in your inbox, waiting for your yes." Never sent.]</div>
```

### BODY, CMO daily post
File name: `cmo-post-[YYYY-MM-DD].html`

```html
<div class="ohead"><div class="k">CMO · Daily post</div><h1>Today's post, in your voice</h1><div class="d">Pillar: [PILLAR] · scored and scrubbed</div></div>

<div class="lipost">
  <div class="lihead"><div class="av">[INITIALS]</div><div><div class="nm">[NAME] · 1st</div><div class="mt">[HEADLINE] · now</div></div></div>
  <div class="post">[FULL POST, in the participant's voice, line breaks preserved, no em dashes, ends on a question or specific ask]</div>
  <div class="chips"><span class="chip">[CHAR COUNT] chars</span><span class="chip">Hook: [TYPE]</span><span class="chip">No em dashes</span></div>
</div>

<div class="grid2">
  <div class="card"><h4>Hook options</h4>
    <div class="row">[CHOSEN HOOK]<span class="tagi t-grn">chosen</span></div>
    <div class="row">[ALT HOOK]</div>
    <div class="row">[ALT HOOK]</div>
  </div>
  <div class="card"><h4>Publish check</h4>
    <div class="row">Stops the scroll<span class="tagi t-grn">✓</span></div>
    <div class="row">Matches Voice DNA<span class="tagi t-grn">✓</span></div>
    <div class="row">Specific ask<span class="tagi t-grn">✓</span></div>
  </div>
</div>

<div class="sec">Pinned comment options</div>
<div class="card">
  <div class="row">[COMMENT OPTION 1]</div>
  <div class="row">[COMMENT OPTION 2]</div>
  <div class="row">[COMMENT OPTION 3]</div>
</div>

<div style="text-align:center;margin-top:8px"><span class="score">Invisibility Diagnostic: [SCORE] / 4</span></div>
```

### BODY, CRO weekly prospect pack
File name: `cro-prospects-[YYYY-MM-DD].html`

```html
<div class="ohead"><div class="k">CRO · Weekly prospect pack</div><h1>[N] matched. [H] hot.</h1><div class="d">Sourced from your ICP · DMs drafted, nothing sent</div></div>

<div class="grid3">
  <div class="stat"><div class="l">Prospects</div><div class="n"><span class="count" data-to="[N]">0</span></div></div>
  <div class="stat"><div class="l">Hot</div><div class="n" style="color:var(--good)"><span class="count" data-to="[H]">0</span></div></div>
  <div class="stat"><div class="l">DMs drafted</div><div class="n"><span class="count" data-to="[N]">0</span></div></div>
</div>

<div class="sec">The prospects</div>
<div class="grid2">
  <div class="pcard">
    <div class="ph"><div><div class="nm">[NAME]</div><div class="rl">[ROLE / COMPANY]</div></div><span class="tagi t-grn" style="margin-left:auto">hot</span></div>
    <div style="font-size:13px;color:var(--gray-text)">Signal: [WHY THEY MATCH / RECENT TRIGGER]</div>
    <div class="dm">[FIRST DM, personalised, one specific reference, soft open, no pitch]</div>
  </div>
  <!-- repeat one .pcard per prospect; tags: t-grn hot, t-amb warm, t-blue new -->
</div>

<div class="note">Open your highest-signal prospect first: <b>[NAME]</b>. [Reason]. Every DM here is a draft. You send, after you read it.</div>
```

### BODY, CFO weekly revenue
File name: `cfo-report-[YYYY-MM-DD].html`

```html
<div class="ohead"><div class="k">CFO · Weekly revenue</div><h1>This week: [$AMOUNT]</h1><div class="d">[WEEKDAY, DD MONTH YYYY] · read only, I never move money</div></div>

<div class="grid3">
  <div class="stat"><div class="l">This week</div><div class="n">$<span class="count" data-to="[NUM]">0</span></div><div class="delta up">[CHANGE vs last]</div></div>
  <div class="stat"><div class="l">This month</div><div class="n">$<span class="count" data-to="[NUM]">0</span></div><div class="delta up">[STATUS]</div></div>
  <div class="stat"><div class="l">Pipeline</div><div class="n">$<span class="count" data-to="[NUM]">0</span></div><div class="delta">[N] active deals</div></div>
</div>

<div class="card" style="padding:18px 20px"><div style="display:flex;justify-content:space-between;font-size:13px"><span style="color:var(--gray-text)">Monthly goal · $[GOAL]</span><span style="font-weight:700">[PCT]%</span></div><div class="bar"><i data-pct="[PCT]%"></i></div></div>

<div class="card"><h4>Flags</h4>
  <div class="row">[INVOICE / ITEM + AGE]<span class="tagi t-amb">chase soon</span></div>
  <div class="row">[OVERDUE ITEM + AGE]<span class="tagi t-red">overdue</span></div>
  <!-- empty state: <div class="row">Nothing flagged. Clean week.</div> -->
</div>

<div class="note">One revenue action this week with the biggest impact?<textarea class="qbox" rows="2" placeholder="Type your answer, just for you..."></textarea></div>
```

---

## CEO BRAIN TEMPLATES (Quick Advice, Monday Session, Deep Dive)

The `ceo` skill uses the same CORE SHELL above. Build the file as CORE SHELL + the matching body below.

### BODY, CEO Quick Advice
File name: `ceo-brain-[topic].html`

```html
<div class="ohead"><div class="k">[PILLAR] · Quick advice</div><h1>[QUESTION OR TOPIC]</h1><div class="d">[DATE]</div></div>
<div class="sec">The answer</div>
<div class="card"><div class="lead">[DIRECT ANSWER, the participant's voice, 1 to 2 sentences]</div></div>
<div class="sec">The thinking</div>
<div class="card"><div>[WHY, 2 to 4 short paragraphs, 3 sentences max each]</div></div>
<div class="sec">This week</div>
<div class="note"><b>[ONE SPECIFIC ACTION]</b><br>1. [Step]<br>2. [Step]<br>3. [Step if needed]</div>
```

### BODY, CEO Monday Session
File name: `ceo-brain-monday-[YYYY-MM-DD].html`

```html
<div class="ohead"><div class="k">Weekly review</div><h1>Monday CEO session</h1><div class="d">[DATE]</div></div>
<div class="sec">Session summary</div>
<div class="card"><h4>01 · Last week, review</h4><div>[WINS AND GAPS]</div></div>
<div class="card"><h4>02 · The constraint</h4><div>[THE ONE THING SLOWING THINGS DOWN]</div></div>
<div class="card"><h4>03 · This week, the one thing</h4><div>[SPECIFIC OUTCOME + WHAT DONE LOOKS LIKE + BY WHEN]</div></div>
<div class="card"><h4>04 · Delegate</h4><div>[WHAT GETS HANDED OFF + TO WHOM + BY WHEN]</div></div>
<div class="card"><h4>05 · Protected, not touching</h4><div>[WHAT THEY ARE SAYING NO TO]</div></div>
<div class="note">The one thing: <b>[OUTCOME FROM 03]</b>. Done looks like: [definition]. By: [day].</div>
```

### BODY, CEO Deep Dive
File name: `ceo-brain-deepdive-[topic].html`

```html
<div class="ohead"><div class="k">[PILLAR] · Deep dive</div><h1>[TOPIC]</h1><div class="d">[DATE]</div></div>
<div class="sec">What it is</div><div class="card"><div class="lead">[ONE PLAIN SENTENCE]</div></div>
<div class="sec">Why most people get it wrong</div><div class="card"><div>[THE COMMON MISTAKE]</div></div>
<div class="sec">How to think about it</div><div class="card"><div>[THE PERSPECTIVE, conversational, direct]</div></div>
<div class="sec">The breakdown</div><div class="card"><h4>[CONCEPT NAME]</h4><div>[FULL EXPLANATION WITH A REAL EXAMPLE]</div></div>
<div class="sec">Applied to your situation</div><div class="card"><div>[SPECIFIC APPLICATION TO WHAT THEY SHARED]</div></div>
<div class="sec">This week</div><div class="note"><b>[SPECIFIC ACTION]</b><br>[Why this is the right first move]</div>
```

---

## AUTHORITY CAROUSEL TEMPLATE (default)

**Renders START from this template. Swap tokens, write copy into the slots. Never design a deck from scratch.**

This is the DEFAULT carousel style, transcribed from the client's published, designer-made LinkedIn assets. Dark authority deck: near-black slides, a soft accent glow anchored top-right, the author's face and name on every slide, huge white extra-bold headlines with 1 or 2 accent-colored words, and white UI-mockup cards as the illustration language. Use it unless the brain's visual style words call for calm, minimal, or editorial, in which case use the EDITORIAL CAROUSEL TEMPLATE below.

How it works:
- **Tokens live in ONE `:root` block.** Same contract as every template: `--primary` (accent), `--bg` (near-black slide background), `--paper` (the white mockup cards), `--ink` (dark text inside cards), `--muted` (secondary text on dark), `--canvas`, `--font`. The tailor or the brain's §7 swaps this block and nothing else.
- **Author chrome on EVERY slide, the signature.** Top-left: circular avatar ringed in the accent (img slot with an initials-circle fallback), bold white name, two-line muted headline. Top-right: white pill with a repost glyph and the word "Repost" in accent. Bottom-right: page number in muted white.
- **Avatar slot rule:** use the participant's headshot path if the brain provides one (`<img src="...">` inside `.avatar`); otherwise keep the initials text. Never leave a broken img.
- **Inline logo rule:** the Claude asterisk mark and the LinkedIn badge (components below) ride inline in headlines ONLY when the content genuinely references those products. A deck about fundraising gets zero logos.
- **Slide frame is 540 x 675 px** (LinkedIn 4:5, 1080 x 1350 at 50% scale; type is vector so the printed PDF is crisp). `@page { size: 540px 675px }` makes print-to-PDF produce the upload-ready document.
- **Screen mode** is scroll-snap; **print mode** is one slide per page with all animation off.
- **`.el` is the reveal class.** Final values in the markup, `gsap.from()` inside an `if (window.gsap)` guard. A blocked CDN still shows a complete, static, perfect deck.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[DECK TITLE] · [CLIENT NAME]</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet">
<style>
  /* ── TOKEN BLOCK · the ONLY part that changes per client. Values from the brain's §7. ── */
  :root{
    --primary:#E8294C;               /* brand accent: glow, badges, accent words, avatar ring */
    --bg:#0D0A0B;                    /* near-black slide background */
    --paper:#FFFFFF;                 /* the white UI-mockup cards */
    --ink:#16130F;                   /* dark text inside the cards */
    --muted:rgba(255,255,255,.62);   /* secondary text on dark */
    --canvas:#1A1618;                /* page behind the slides, screen only */
    --font:'Poppins',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{background:var(--canvas);font-family:var(--font);color:#fff}

  /* ── Screen mode: slide-snap vertical scrolling ── */
  .deck{height:100vh;overflow-y:auto;scroll-snap-type:y mandatory;scroll-behavior:smooth}
  .slidewrap{min-height:100vh;display:flex;align-items:center;justify-content:center;scroll-snap-align:center;padding:24px 0}

  /* ── The slide: near-black with a soft accent glow bleeding off top-right ── */
  .slide{width:540px;max-width:100%;height:675px;position:relative;overflow:hidden;
    background:radial-gradient(460px 460px at 106% -10%, color-mix(in srgb,var(--primary) 25%, transparent), transparent 70%), var(--bg);
    display:flex;flex-direction:column;padding:26px 30px 44px;box-shadow:0 10px 40px rgba(0,0,0,.5)}

  /* ── AUTHOR CHROME · on every slide ── */
  .chrome{display:flex;justify-content:space-between;align-items:center}
  .author{display:flex;align-items:center;gap:11px}
  .avatar{width:46px;height:46px;border-radius:50%;flex-shrink:0;border:2.5px solid var(--primary);
    display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);
    font-weight:800;font-size:16px;color:#fff;overflow:hidden}
  .avatar img{width:100%;height:100%;object-fit:cover;border-radius:50%}
  .aname{font-weight:700;font-size:13.5px;line-height:1.25}
  .ahead{font-size:9.5px;line-height:1.35;color:var(--muted)}
  .repost{display:inline-flex;align-items:center;gap:6px;background:var(--paper);color:var(--primary);
    font-weight:700;font-size:11px;padding:7px 13px;border-radius:9999px}
  .repost svg{width:12px;height:12px;display:block}
  .pagenum{position:absolute;right:28px;bottom:18px;font-size:11px;font-weight:600;color:var(--muted)}

  /* ── Display type ── */
  .body{flex:1;display:flex;flex-direction:column;justify-content:center;gap:16px;padding:6px 0}
  .hl{font-size:clamp(30px,7.4vw,40px);font-weight:800;line-height:1.12;letter-spacing:-.02em;color:#fff}
  .hl .acc{color:var(--primary)}
  .cover .hl{font-size:clamp(34px,8.5vw,46px);line-height:1.08}
  .hook{font-size:16px;font-style:italic;font-weight:300;color:var(--muted);line-height:1.55;max-width:96%}
  .sup{font-size:15px;line-height:1.6;color:rgba(255,255,255,.88);max-width:96%}

  /* ── STEP BADGE · above the headline on step slides ── */
  .badge{align-self:flex-start;background:var(--primary);color:#fff;font-weight:700;font-size:11px;
    letter-spacing:.12em;text-transform:uppercase;padding:7px 14px;border-radius:8px}

  /* ── Bullets: accent dot markers, generous line height ── */
  .points{list-style:none;display:flex;flex-direction:column;gap:10px}
  .points li{position:relative;padding-left:20px;font-size:14.5px;line-height:1.6;color:rgba(255,255,255,.9)}
  .points li::before{content:"";position:absolute;left:0;top:.55em;width:8px;height:8px;border-radius:50%;background:var(--primary)}

  /* ── Inline logos ride in headline flow (see COMPONENTS) ── */
  .ilogo{height:.9em;width:auto;vertical-align:-.08em}
  .claude-word{font-family:Georgia,'Times New Roman',serif;font-weight:600;letter-spacing:-.01em}

  /* ── THE PROMPT CARD · dark, accent outline ── */
  .promptcard{border:1.5px solid var(--primary);border-radius:14px;padding:16px 18px;background:rgba(255,255,255,.03)}
  .promptcard .plabel{display:flex;align-items:center;gap:8px;color:var(--primary);font-weight:700;font-size:13px;margin-bottom:8px}
  .promptcard .plabel svg{width:14px;height:14px;display:block}
  .promptcard .ptext{font-size:14.5px;line-height:1.6;color:#fff}

  /* ── UI-MOCKUP CARDS · shared base + skeleton bars (pure CSS, no images) ── */
  .mock{background:var(--paper);color:var(--ink);border-radius:14px;box-shadow:0 12px 34px rgba(0,0,0,.35);overflow:hidden}
  .sk{height:8px;border-radius:4px;background:#E7E4DE}
  .sk.w40{width:40%}.sk.w60{width:60%}.sk.w80{width:80%}.sk.w95{width:95%}

  /* mockup 1 · chat window */
  .chat-head{display:flex;align-items:center;gap:8px;padding:10px 14px;border-bottom:1px solid #ECE9E3;font-size:12px;font-weight:700}
  .chat-head .dots3{margin-left:auto;color:#A9A49C;font-weight:700;letter-spacing:2px}
  .chat-msg{margin:12px 14px 0;padding:9px 12px;border:1px solid #ECE9E3;border-radius:9px;font-size:11.5px;color:#5B564E}
  .chat-reply{display:flex;flex-direction:column;gap:7px;padding:14px}
  .chat-cap{background:#F4F2EE;padding:8px 14px;font-size:10px;font-weight:600;color:#5B564E}

  /* mockup 2 · file-card trio */
  .trio{display:flex;gap:10px}
  .fcard{flex:1;padding:14px 12px;display:flex;flex-direction:column;gap:8px;align-items:flex-start;border-radius:12px}
  .fnum{background:var(--primary);color:#fff;font-size:10px;font-weight:800;padding:3px 8px;border-radius:6px}
  .fdoc{width:20px;height:25px;border:2px solid #C9C4BB;border-radius:3px;position:relative}
  .fdoc::before,.fdoc::after{content:"";position:absolute;left:3px;right:3px;height:2px;background:#DDD9D1}
  .fdoc::before{top:6px} .fdoc::after{top:11px}
  .fname{font-family:ui-monospace,'SF Mono',Menlo,monospace;font-size:10px;font-weight:600;word-break:break-all}

  /* mockup 3 · folder tree */
  .tree{padding:16px 18px;display:flex;flex-direction:column;gap:9px;font-family:ui-monospace,'SF Mono',Menlo,monospace;font-size:11.5px;font-weight:500}
  .trow{display:flex;align-items:center;gap:8px}
  .trow.ind{margin-left:9px;padding-left:16px;border-left:1px dotted #C9C4BB}
  .trow.ind2{margin-left:9px;padding-left:34px;border-left:1px dotted #C9C4BB}
  .folder{width:16px;height:12px;background:var(--primary);border-radius:2px;position:relative;flex-shrink:0}
  .folder::before{content:"";position:absolute;top:-3px;left:0;width:7px;height:3px;background:var(--primary);border-radius:2px 2px 0 0}
  .fdoc.sm{width:12px;height:15px;border-width:1.5px}
  .fdoc.sm::before{top:4px}.fdoc.sm::after{top:7px}

  /* mockup 4 · settings/checklist panel */
  .panel{display:flex}
  .panel-side{width:44px;background:#F4F2EE;padding:12px 0;display:flex;flex-direction:column;gap:8px;align-items:center;flex-shrink:0}
  .panel-side i{width:18px;height:6px;border-radius:3px;background:#DAD6CE;display:block}
  .panel-main{flex:1;padding:12px 14px;display:flex;flex-direction:column;gap:6px}
  .prow{font-size:11px;line-height:1.45;padding:7px 9px;border-radius:7px;color:#3E3A33}
  .prow b{color:#8B857B;margin-right:5px}
  .prow.hot{background:color-mix(in srgb,var(--primary) 12%, #fff);border:1px solid var(--primary);color:var(--ink)}
  .prow.hot b{color:var(--primary)}

  /* ── Print mode: one 540x675 frame per page, all animation off ── */
  @page{size:540px 675px;margin:0}
  @media print{
    html,body{background:var(--bg)}
    .deck{height:auto;overflow:visible;scroll-snap-type:none}
    .slidewrap{min-height:0;padding:0;display:block;page-break-after:always}
    .slide{box-shadow:none;margin:0}
    *,*::before,*::after{animation:none !important;transition:none !important}
  }
</style>
</head>
<body>
<div class="deck" id="deck">

  <!-- SLIDE 1 · COVER (glow + big headline + italic hook) -->
  <div class="slidewrap"><section class="slide cover">
    <div class="chrome">
      <div class="author">
        <span class="avatar">[INITIALS]<!-- or: <img src="[HEADSHOT PATH]" alt="[NAME]"> --></span>
        <div><div class="aname">[NAME]</div><div class="ahead">[HEADLINE LINE 1]<br>[HEADLINE LINE 2]</div></div>
      </div>
      <span class="repost"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11V9a4 4 0 0 1 4-4h9"/><path d="M14 2l3 3-3 3"/><path d="M20 13v2a4 4 0 0 1-4 4H7"/><path d="M10 22l-3-3 3-3"/></svg>Repost</span>
    </div>
    <div class="body">
      <h1 class="hl el">[COVER TITLE with <span class="acc">[1 TO 2 ACCENT WORDS]</span>]</h1>
      <p class="hook el">[ITALIC SUB-HOOK, one line that makes slide 2 unavoidable]</p>
    </div>
    <span class="pagenum">1 / [N]</span>
  </section></div>

  <!-- SLIDE 2..N-1 · STEP-BADGE SLIDE (badge + headline + bullets; swap .points for one mockup card or a .promptcard when the slide calls for it) -->
  <div class="slidewrap"><section class="slide">
    <div class="chrome">
      <div class="author">
        <span class="avatar">[INITIALS]</span>
        <div><div class="aname">[NAME]</div><div class="ahead">[HEADLINE LINE 1]<br>[HEADLINE LINE 2]</div></div>
      </div>
      <span class="repost"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11V9a4 4 0 0 1 4-4h9"/><path d="M14 2l3 3-3 3"/><path d="M20 13v2a4 4 0 0 1-4 4H7"/><path d="M10 22l-3-3 3-3"/></svg>Repost</span>
    </div>
    <div class="body">
      <span class="badge el">STEP [X]: [SHORT LABEL]</span>
      <h2 class="hl el">[HEADLINE with <span class="acc">[ACCENT PHRASE]</span>]</h2>
      <ul class="points">
        <li class="el">[BULLET 1]</li>
        <li class="el">[BULLET 2]</li>
      </ul>
    </div>
    <span class="pagenum">2 / [N]</span>
  </section></div>

  <!-- SLIDE N · CTA -->
  <div class="slidewrap"><section class="slide">
    <div class="chrome">
      <div class="author">
        <span class="avatar">[INITIALS]</span>
        <div><div class="aname">[NAME]</div><div class="ahead">[HEADLINE LINE 1]<br>[HEADLINE LINE 2]</div></div>
      </div>
      <span class="repost"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11V9a4 4 0 0 1 4-4h9"/><path d="M14 2l3 3-3 3"/><path d="M20 13v2a4 4 0 0 1-4 4H7"/><path d="M10 22l-3-3 3-3"/></svg>Repost</span>
    </div>
    <div class="body">
      <h2 class="hl el">[CTA HEADLINE with <span class="acc">[ACCENT PHRASE]</span>]</h2>
      <p class="sup el">[THE ONE ACTION, matches the caption's CTA exactly]</p>
    </div>
    <span class="pagenum">[N] / [N]</span>
  </section></div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
  // Markup is fully rendered by default. Entrances are gsap.from() only, guarded:
  // with the CDN blocked the deck is simply static and complete.
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    var deck = document.getElementById('deck');
    document.querySelectorAll('.slide').forEach(function(slide){
      gsap.from(slide.querySelectorAll('.el'), {
        opacity:0, y:28, duration:0.75, stagger:0.09, ease:'power3.out',
        scrollTrigger:{ trigger: slide, scroller: deck, start: 'top 70%', once: true }
      });
    });
  }
</script>
</body>
</html>
```

### AUTHORITY COMPONENTS (copy-paste, all styled by the CSS above)

**Author chrome** is in the template skeleton: `.chrome` with `.author` (avatar + name + two-line headline) and the `.repost` pill, plus `.pagenum` at the bottom. It appears on EVERY slide, unchanged.

**Step badge** (above the headline on step slides):
```html
<span class="badge el">STEP 1: [SHORT LABEL]</span>
```

**The prompt card** (prompt slides and bottom strips):
```html
<div class="promptcard el">
  <div class="plabel"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8l-5 4v-4H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/></svg>The Prompt:</div>
  <div class="ptext">"[PROMPT TEXT, white, verbatim what the reader should paste]"</div>
</div>
```
The label slot may read "The Prompt:", "The Ask:", or another 2-word accent label when the slide is not a literal prompt.

**Mockup card 1 · chat window** (header row with Claude mark + name + ellipsis, message input, skeleton reply, caption strip):
```html
<div class="mock el">
  <div class="chat-head"><svg class="ilogo" viewBox="0 0 24 24" aria-hidden="true"><g fill="#D97757"><rect x="10.6" y="1.2" width="2.8" height="21.6" rx="1.4"/><rect x="10.6" y="1.2" width="2.8" height="21.6" rx="1.4" transform="rotate(30 12 12)"/><rect x="10.6" y="1.2" width="2.8" height="21.6" rx="1.4" transform="rotate(60 12 12)"/><rect x="10.6" y="1.2" width="2.8" height="21.6" rx="1.4" transform="rotate(90 12 12)"/><rect x="10.6" y="1.2" width="2.8" height="21.6" rx="1.4" transform="rotate(120 12 12)"/><rect x="10.6" y="1.2" width="2.8" height="21.6" rx="1.4" transform="rotate(150 12 12)"/></g></svg> Claude <span class="dots3">···</span></div>
  <div class="chat-msg">[SHORT USER MESSAGE]</div>
  <div class="chat-reply"><div class="sk w95"></div><div class="sk w80"></div><div class="sk w60"></div></div>
  <div class="chat-cap">[ONE-LINE CAPTION]</div>
</div>
```

**Mockup card 2 · file-card trio** (three side-by-side cards: doc icon, accent number chip, mono filename, skeleton lines):
```html
<div class="trio el">
  <div class="mock fcard"><span class="fnum">01</span><span class="fdoc"></span><div class="fname">[file-name.ext]</div><div class="sk w80" style="width:100%"></div><div class="sk w60" style="width:70%"></div></div>
  <div class="mock fcard"><span class="fnum">02</span><span class="fdoc"></span><div class="fname">[file-name.ext]</div><div class="sk w80" style="width:100%"></div><div class="sk w60" style="width:70%"></div></div>
  <div class="mock fcard"><span class="fnum">03</span><span class="fdoc"></span><div class="fname">[file-name.ext]</div><div class="sk w80" style="width:100%"></div><div class="sk w60" style="width:70%"></div></div>
</div>
```

**Mockup card 3 · folder tree**:
```html
<div class="mock tree el">
  <div class="trow"><span class="folder"></span>[project-folder]</div>
  <div class="trow ind"><span class="folder"></span>[sub-folder]</div>
  <div class="trow ind2"><span class="fdoc sm"></span>[file-name.md]</div>
  <div class="trow ind2"><span class="fdoc sm"></span>[file-name.md]</div>
</div>
```

**Mockup card 4 · settings/checklist panel** (small sidebar column + numbered instruction list, one row highlighted accent):
```html
<div class="mock panel el">
  <div class="panel-side"><i></i><i></i><i></i><i></i></div>
  <div class="panel-main">
    <div class="prow"><b>1.</b> [INSTRUCTION]</div>
    <div class="prow hot"><b>2.</b> [THE HIGHLIGHTED STEP]</div>
    <div class="prow"><b>3.</b> [INSTRUCTION]</div>
  </div>
</div>
```

**Inline logo · Claude mark + word** (the asterisk is 6 rotated capsule rays around center, a 12-ray burst, fill #D97757; the word rides in a serif-ish weight). Use ONLY when the content genuinely references Claude:
```html
<svg class="ilogo" viewBox="0 0 24 24" aria-hidden="true"><g fill="#D97757"><rect x="10.6" y="1.2" width="2.8" height="21.6" rx="1.4"/><rect x="10.6" y="1.2" width="2.8" height="21.6" rx="1.4" transform="rotate(30 12 12)"/><rect x="10.6" y="1.2" width="2.8" height="21.6" rx="1.4" transform="rotate(60 12 12)"/><rect x="10.6" y="1.2" width="2.8" height="21.6" rx="1.4" transform="rotate(90 12 12)"/><rect x="10.6" y="1.2" width="2.8" height="21.6" rx="1.4" transform="rotate(120 12 12)"/><rect x="10.6" y="1.2" width="2.8" height="21.6" rx="1.4" transform="rotate(150 12 12)"/></g></svg><span class="claude-word">Claude</span>
```

**Inline logo · LinkedIn badge** (rounded square, fill #0A66C2, white lowercase "in"). Use ONLY when the content genuinely references LinkedIn:
```html
<svg class="ilogo" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="4.5" fill="#0A66C2"/><text x="12" y="17.2" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="800" font-size="13.5" fill="#FFFFFF">in</text></svg>
```
Both logos are sized to ride inline with headline text (`height:.9em; vertical-align:-.08em`, the `.ilogo` class).

Filling rules (Authority):
- One `.slidewrap` per slide, in order. Author chrome identical on every slide; only `.pagenum` changes.
- Copy goes into the slots character-identical to the approved slide copy. No redesign edits, no new CSS classes, no layout inventions.
- Allowed variation per slide: which body block the slide uses (bullets, one mockup card, or a prompt card), matching that slide's Visual idea. Nothing else varies.
- 1 to 2 accent words per headline via `<span class="acc">`. More than 2 dilutes the system.
- Avatar: headshot img if the brain provides a path, else initials. Logos only where the products are genuinely referenced.
- Delivery line, always: "Preview blank? Use Show in folder and double-click the file to open it in your browser."

---

## EDITORIAL CAROUSEL TEMPLATE (alternate)

**The alternate carousel style: light, calm, typographic. Choose it when the brain's visual style words call for calm, minimal, understated, or editorial. Otherwise the AUTHORITY template above is the default.**

This is the light typographic deck, kept as-shipped. It is the render step for `linkedin-carousel-builder` when Editorial is chosen. The Rethink Sans guardrail above applies to executive documents; this deck's font is a token, set from the brain's §7 (default: Poppins per `design-system.md`), always with a system fallback.

How it works:
- **Tokens live in ONE `:root` block.** Brand color, ink, paper, muted, hairline, canvas, and the font stack. The tailor or the brain's §7 swaps this block and nothing else. Every slide recolors and refonts from these seven values.
- **One visual system.** Every slide shares the same background, chrome (wordmark tag + slide number), accent bar, and footer. Cover and CTA intensify with type size only.
- **Slide frame is 540 x 675 px** (LinkedIn 4:5, which is 1080 x 1350 at 50% scale; type is vector so the printed PDF is crisp). `@page { size: 540px 675px }` makes print-to-PDF produce the upload-ready document.
- **Screen mode** is scroll-snap; **print mode** is one slide per page with all animation off.
- **`.el` is the reveal class.** Every element that animates carries `class="el"` (or `el` added to its class list) and its FINAL values in the markup. GSAP animates with `gsap.from()` inside an `if (window.gsap)` guard, so a blocked CDN still shows a complete, static, perfect deck.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[DECK TITLE] · [CLIENT NAME]</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  /* ── TOKEN BLOCK · the ONLY part that changes per client. Values from the brain's §7. ── */
  :root{
    --primary:#E8294C;   /* brand accent, one color does all the work */
    --ink:#0A0A0A;       /* near-black text */
    --paper:#F6F5F2;     /* slide background */
    --muted:#5F5D57;     /* secondary text */
    --line:#E1DFD8;      /* hairlines */
    --canvas:#DDDBD5;    /* page behind the slides, screen only */
    --font:'Poppins',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; /* brand font + system fallback, always */
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{background:var(--canvas);font-family:var(--font);color:var(--ink)}

  /* ── Screen mode: slide-snap vertical scrolling ── */
  .deck{height:100vh;overflow-y:auto;scroll-snap-type:y mandatory;scroll-behavior:smooth}
  .slidewrap{min-height:100vh;display:flex;align-items:center;justify-content:center;scroll-snap-align:center;padding:24px 0}

  /* ── ONE visual system: identical frame, chrome, footer on every slide ── */
  .slide{width:540px;max-width:100%;height:675px;background:var(--paper);display:flex;flex-direction:column;padding:26px 30px 0;box-shadow:0 10px 40px rgba(10,10,10,.14);overflow:hidden;position:relative}
  .chrome{display:flex;justify-content:space-between;align-items:baseline;border-bottom:1.5px solid var(--ink);padding-bottom:10px}
  .wordmark{font-weight:800;font-size:13px;letter-spacing:.34em;text-transform:uppercase}
  .snum{font-size:10px;font-weight:600;letter-spacing:.18em;color:var(--muted)}
  .body{flex:1;display:flex;flex-direction:column;justify-content:center;gap:18px;padding:8px 0}

  /* display type scale */
  .kick{font-size:10px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:var(--primary)}
  .hl{font-size:clamp(24px,5.7vw,31px);font-weight:800;line-height:1.14;letter-spacing:-.015em}
  .hl .u{border-bottom:4px solid var(--primary);padding-bottom:1px}
  .sup{font-size:clamp(14px,3vw,16.5px);line-height:1.55;font-weight:400;max-width:98%}
  .sup + .sup{margin-top:-6px}
  .hero{padding:6px 0}
  .heroline{height:3px;background:var(--primary);width:100%;margin-top:10px}
  .bignum{font-size:clamp(60px,16vw,88px);font-weight:800;letter-spacing:-.03em;line-height:1;color:var(--primary)}
  .strike{color:var(--ink);opacity:.45;text-decoration:line-through;text-decoration-thickness:4px;font-weight:800}
  .herorow{display:flex;align-items:baseline;gap:18px;flex-wrap:wrap}
  .herosmall{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-top:8px}
  .ticks{display:flex;gap:10px;margin-top:12px}
  .ticks i{display:block;width:44px;height:8px;background:var(--primary);opacity:.35}
  .ticks i:first-child{opacity:1}
  .split{display:flex;gap:16px;margin-top:10px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:600}
  .split .good{color:var(--primary)}
  .split .bad{color:var(--muted)}
  .foot{border-top:1px solid var(--line);padding:10px 0 14px;display:flex;justify-content:space-between;align-items:center}
  .foot .credit{font-size:9.5px;color:var(--muted);letter-spacing:.04em}
  .foot .credit b{color:var(--ink);font-weight:600}
  .dots{display:flex;gap:4px}
  .dots i{width:5px;height:5px;border-radius:50%;background:var(--line);display:block}
  .dots i.on{background:var(--primary)}

  /* Cover and CTA intensify the system with type size only */
  .cover .hl{font-size:clamp(38px,9.6vw,52px);line-height:1.06}
  .cover .bignum{font-size:clamp(96px,27vw,150px)}
  .cover .metrics{display:flex;flex-direction:column;gap:5px;margin-top:2px}
  .cover .metrics span{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:var(--ink)}
  .cover .metrics span::before{content:"";display:inline-block;width:16px;height:2px;background:var(--primary);margin-right:10px;vertical-align:middle}
  .cover .subtitle{font-size:18px;line-height:1.5;font-weight:500;color:var(--muted);max-width:95%}
  .cta .follow{font-size:clamp(32px,8vw,44px);font-weight:800;line-height:1.1;letter-spacing:-.02em}
  .cta .follow small{display:block;font-size:12px;letter-spacing:.26em;text-transform:uppercase;color:var(--primary);font-weight:600;margin-bottom:10px}

  /* ── Print mode: one 540x675 frame per page, all animation off ── */
  @page{size:540px 675px;margin:0}
  @media print{
    html,body{background:var(--paper)}
    .deck{height:auto;overflow:visible;scroll-snap-type:none}
    .slidewrap{min-height:0;padding:0;display:block;page-break-after:always}
    .slide{box-shadow:none;margin:0}
    *,*::before,*::after{animation:none !important;transition:none !important}
  }
</style>
</head>
<body>
<div class="deck" id="deck">

  <!-- SLIDE 1 · COVER -->
  <div class="slidewrap"><section class="slide cover">
    <div class="chrome"><span class="wordmark">[BRAND]</span><span class="snum">1 / [N]</span></div>
    <div class="body">
      <div class="kick el">[KICKER]</div>
      <div class="herorow el"><span class="bignum">[BIG NUMBER]</span>
        <div class="metrics"><span>[ITEM]</span><span>[ITEM]</span><span>[ITEM]</span></div>
      </div>
      <h1 class="hl el">[COVER TITLE, 4 to 8 words]</h1>
      <p class="subtitle el">[SUBTITLE, 8 to 15 words]</p>
    </div>
    <div class="foot"><span class="credit"><b>[NAME]</b> · built with the Purely Personal system</span><span class="dots"><i class="on"></i><!-- one <i> per slide, .on marks this slide --></span></div>
  </section></div>

  <!-- SLIDE 2..N-1 · BODY (repeat one .slidewrap per slide; hero block optional per the slide's Visual idea: .bignum, .strike, .heroline, .ticks, or .split) -->
  <div class="slidewrap"><section class="slide">
    <div class="chrome"><span class="wordmark">[BRAND]</span><span class="snum">2 / [N]</span></div>
    <div class="body">
      <div class="kick el">[KICKER, optional]</div>
      <h2 class="hl el">[HEADLINE, 8 words max, key phrase may take <span class="u">the underline</span>]</h2>
      <div class="hero el"><span class="bignum">[HERO STAT]</span><div class="heroline"></div></div>
      <p class="sup el">[SUPPORT LINE 1]</p>
      <p class="sup el">[SUPPORT LINE 2]</p>
    </div>
    <div class="foot"><span class="credit"><b>[NAME]</b> · built with the Purely Personal system</span><span class="dots"><i></i><i class="on"></i></span></div>
  </section></div>

  <!-- SLIDE N · CTA -->
  <div class="slidewrap"><section class="slide cta">
    <div class="chrome"><span class="wordmark">[BRAND]</span><span class="snum">[N] / [N]</span></div>
    <div class="body">
      <h2 class="hl el">[CTA HEADLINE]</h2>
      <div class="follow el"><small>One action</small>[THE ONE ACTION]<div class="heroline"></div></div>
      <p class="sup el">[CTA SUPPORT, matches the caption's CTA exactly]</p>
    </div>
    <div class="foot"><span class="credit"><b>[NAME]</b> · built with the Purely Personal system</span><span class="dots"><i></i><i class="on"></i></span></div>
  </section></div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
  // Markup is fully rendered by default. Entrances are gsap.from() only, guarded:
  // with the CDN blocked the deck is simply static and complete.
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    var deck = document.getElementById('deck');
    document.querySelectorAll('.slide').forEach(function(slide){
      gsap.from(slide.querySelectorAll('.el'), {
        opacity:0, y:28, duration:0.75, stagger:0.09, ease:'power3.out',
        scrollTrigger:{ trigger: slide, scroller: deck, start: 'top 70%', once: true }
      });
    });
  }
</script>
</body>
</html>
```

Filling rules:
- One `.slidewrap` block per slide, in order. The `.dots` row carries one `<i>` per slide with `.on` marking the current slide.
- Copy goes into the slots character-identical to the approved slide copy. No redesign edits, no new CSS classes, no layout inventions.
- Allowed variation per slide: which hero pattern the `.hero` block uses (`.bignum`, `.strike` before/after pair, `.heroline`, `.ticks`, `.split`), matching that slide's Visual idea. Nothing else varies.
- Delivery line, always: "Preview blank? Use Show in folder and double-click the file to open it in your browser."

---

## SINGLE-CANVAS CHEATSHEET TEMPLATE

**Renders START from this template. Swap tokens, write copy into the slots. Never design a sheet from scratch.**

One 1080 x 1350 px canvas (LinkedIn 4:5), same token block as the carousel template, print-to-PDF at 100% scale produces the final asset. The designed table and numbered chip patterns below are the `linkedin-cheatsheet-builder` spec rendered: real column structure, distinct header treatment, ruled rows, filled accent chips. Type, geometry, and color do all the design work.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[SHEET TITLE] · [CLIENT NAME]</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  /* ── TOKEN BLOCK · same contract as the carousel template. Values from the brain's §7. ── */
  :root{
    --primary:#E8294C; --ink:#0A0A0A; --paper:#F6F5F2;
    --muted:#5F5D57; --line:#E1DFD8; --canvas:#DDDBD5;
    --font:'Poppins',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{background:var(--canvas);font-family:var(--font);color:var(--ink)}
  .stage{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px 0}

  /* the single canvas */
  .sheet{width:1080px;height:1350px;background:var(--paper);display:flex;flex-direction:column;padding:56px 64px 0;box-shadow:0 10px 40px rgba(10,10,10,.14);overflow:hidden}
  .chrome{display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid var(--ink);padding-bottom:18px}
  .wordmark{font-weight:800;font-size:20px;letter-spacing:.34em;text-transform:uppercase}
  .tag{font-size:15px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)}
  .head{padding:34px 0 8px}
  .kick{font-size:16px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:var(--primary)}
  .title{font-size:clamp(44px,6vw,62px);font-weight:800;line-height:1.08;letter-spacing:-.015em;margin-top:10px}
  .sub{font-size:23px;line-height:1.5;font-weight:500;color:var(--muted);margin-top:12px;max-width:92%}
  .content{flex:1;display:flex;flex-direction:column;justify-content:center;gap:20px;padding:12px 0}

  /* pattern A · numbered chip cards (Listicle points, Countdown ranks) */
  .pt{display:flex;gap:22px;align-items:flex-start;padding:16px 0;border-bottom:1px solid var(--line)}
  .pt:last-child{border-bottom:none}
  .chipnum{flex-shrink:0;width:56px;height:56px;background:var(--primary);color:var(--paper);font-size:28px;font-weight:800;display:flex;align-items:center;justify-content:center}
  .pt h3{font-size:27px;font-weight:700;line-height:1.2}
  .pt .take{font-size:19px;line-height:1.5;color:var(--muted);margin-top:6px}
  .pt .take b{color:var(--ink);font-weight:600}

  /* pattern B · designed comparison table (never markdown wearing borders) */
  table{width:100%;border-collapse:collapse}
  thead th{font-size:17px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;text-align:left;padding:14px 18px;border-bottom:3px solid var(--ink)}
  thead th.acc{color:var(--primary)}
  tbody td{font-size:19px;line-height:1.45;padding:15px 18px;border-bottom:1px solid var(--line);vertical-align:top}
  tbody tr:nth-child(even){background:rgba(10,10,10,.025)}
  td.dim{color:var(--muted);font-weight:600;font-size:16px;letter-spacing:.06em;text-transform:uppercase}

  /* closing element (Bottom Line, The Shift, Wake-Up Call) */
  .close{border-top:3px solid var(--primary);padding:22px 0 6px;font-size:24px;font-weight:700;line-height:1.35}
  .close small{display:block;font-size:14px;letter-spacing:.26em;text-transform:uppercase;color:var(--primary);font-weight:600;margin-bottom:8px}

  .foot{border-top:1px solid var(--line);padding:18px 0 26px;display:flex;justify-content:space-between;align-items:center}
  .foot .credit{font-size:15px;color:var(--muted)}
  .foot .credit b{color:var(--ink);font-weight:600}

  /* ── Print: the canvas IS the page ── */
  @page{size:1080px 1350px;margin:0}
  @media print{
    html,body{background:var(--paper)}
    .stage{min-height:0;padding:0;display:block}
    .sheet{box-shadow:none;margin:0}
    *,*::before,*::after{animation:none !important;transition:none !important}
  }
</style>
</head>
<body>
<div class="stage"><section class="sheet">
  <div class="chrome"><span class="wordmark">[BRAND]</span><span class="tag">[FORMAT TAG, e.g. CHEAT SHEET]</span></div>
  <div class="head">
    <div class="kick el">[KICKER]</div>
    <h1 class="title el">[SHEET TITLE]</h1>
    <p class="sub el">[SUBHEAD]</p>
  </div>
  <div class="content">
    <!-- Use pattern A (repeat .pt per point) OR pattern B (one table). Never both, never a third invention. -->
    <div class="pt el"><div class="chipnum">1</div><div><h3>[POINT HEADLINE]</h3><div class="take">[TAKEAWAY LINES]</div></div></div>
    <!-- ...more .pt blocks... -->
    <div class="close el"><small>[CLOSING LABEL]</small>[CLOSING LINE]</div>
  </div>
  <div class="foot"><span class="credit"><b>[NAME]</b> · built with the Purely Personal system</span><span class="tag">[HANDLE / URL]</span></div>
</section></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  if (window.gsap) {
    gsap.from(document.querySelectorAll('.el'), {opacity:0, y:24, duration:0.7, stagger:0.08, ease:'power3.out'});
  }
</script>
</body>
</html>
```

Filling rules:
- Verify nothing clips at 1350px height before delivering. Overflow means tighter spacing or smaller type, never cut approved copy.
- Table sheets replace the `.pt` blocks with the `table` pattern; the `.close` element stays.
- Delivery line, always: "Preview blank? Use Show in folder and double-click the file to open it in your browser."

---

## FUNNEL INFOGRAPHIC TEMPLATE (cheatsheet pattern C)

**Renders START from this template. Swap tokens, write copy into the slots. Never design a sheet from scratch.**

The third cheatsheet pattern, for process, system, and how-to topics with 5 to 8 sequential steps. One tall 1080 x 1350 canvas, light background, a CENTER SPINE of accent-filled trapezoid steps narrowing downward, annotations on the left, "The Prompt:" cards on the right, dotted accent connectors, and a full-width dark AUTHOR BAR footer. Same token contract, print-perfect at `@page 1080px 1350px`.

Structure:
- **Header:** big black extra-bold headline with 1 or 2 accent words (`<span class="acc">`) and optional inline logo slots (same `.ilogo` SVGs as the Authority template, same rule: only when the products are genuinely referenced); one-line promise subtitle.
- **Center spine:** 5 to 8 trapezoids (`clip-path` polygons), each narrower than the last via the inline `--w` custom property. Each carries a number chip circle, a white uppercase step title, and a simple glyph slot (typographic or geometric glyphs only, never illustrations).
- **Left column:** annotation blocks per step: an accent bold claim line, "What to do:" bold + short explanation, optional mono slash-commands.
- **Right column:** "The Prompt:" cards, white with an accent border.
- **Connectors:** short dotted accent lines from the side blocks toward the funnel, drawn with CSS dotted borders. Simple and robust; skip a connector rather than fight the layout.
- **Footer:** full-width dark author bar: avatar circle (img slot + initials fallback), bold name, muted tagline, accent Repost pill.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[SHEET TITLE] · [CLIENT NAME]</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  /* ── TOKEN BLOCK · same contract as every template. Values from the brain's §7. ── */
  :root{
    --primary:#E8294C;   /* accent: trapezoids, claims, prompt borders, repost pill */
    --ink:#0A0A0A;       /* near-black text and the author bar */
    --paper:#FBFAF8;     /* the sheet background, white/off-white */
    --muted:#5F5D57;     /* secondary text */
    --line:#E1DFD8;      /* hairlines */
    --canvas:#DDDBD5;    /* page behind the sheet, screen only */
    --font:'Poppins',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{background:var(--canvas);font-family:var(--font);color:var(--ink)}
  .stage{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px 0}

  /* the single canvas */
  .sheet{width:1080px;height:1350px;background:var(--paper);display:flex;flex-direction:column;padding:52px 56px 0;box-shadow:0 10px 40px rgba(10,10,10,.14);overflow:hidden}

  /* header */
  .head{text-align:center;padding-bottom:10px}
  .head h1{font-size:clamp(40px,5vw,54px);font-weight:800;line-height:1.08;letter-spacing:-.015em}
  .head .acc{color:var(--primary)}
  .head .ilogo{height:.9em;width:auto;vertical-align:-.08em}
  .promise{font-size:20px;color:var(--muted);font-weight:500;margin-top:10px}

  /* funnel rows: left annotation · trapezoid · right prompt card */
  .flow{flex:1;display:flex;flex-direction:column;justify-content:center;gap:14px;padding:14px 0}
  .frow{display:grid;grid-template-columns:265px 1fr 265px;gap:20px;align-items:center}

  /* CENTER SPINE · accent trapezoid, narrower each step via --w */
  .ftrap{margin:0 auto;width:var(--w,460px);height:82px;background:var(--primary);color:#fff;
    clip-path:polygon(3.5% 0,96.5% 0,91% 100%,9% 100%);
    display:flex;align-items:center;justify-content:center;gap:14px}
  .fnumc{width:34px;height:34px;border-radius:50%;background:#fff;color:var(--primary);font-weight:800;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .ftitle{font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:18px}
  .fglyph{font-size:20px;font-weight:800;opacity:.85}

  /* LEFT · annotation block with dotted connector toward the funnel */
  .ann{position:relative;text-align:right;padding-right:6px}
  .ann::after{content:"";position:absolute;right:-22px;top:50%;width:24px;border-top:2px dotted var(--primary)}
  .ann .claim{color:var(--primary);font-weight:700;font-size:15px;line-height:1.35}
  .ann .what{font-size:13px;line-height:1.5;color:var(--muted);margin-top:4px}
  .ann .what b{color:var(--ink)}
  .cmd{display:inline-block;font-family:ui-monospace,'SF Mono',Menlo,monospace;font-size:12px;background:#F1EFEA;border:1px solid var(--line);padding:2px 8px;border-radius:6px;margin-top:5px}

  /* RIGHT · prompt card with dotted connector toward the funnel */
  .pcard{position:relative;background:#fff;border:1.5px solid var(--primary);border-radius:12px;padding:13px 15px}
  .pcard::before{content:"";position:absolute;left:-22px;top:50%;width:24px;border-top:2px dotted var(--primary)}
  .pcard .plabel{color:var(--primary);font-weight:700;font-size:13px;margin-bottom:5px}
  .pcard .ptext{font-size:13px;line-height:1.5;color:var(--ink)}

  /* FOOTER · full-width dark author bar */
  .abar{background:var(--ink);color:#fff;margin:14px -56px 0;padding:22px 56px;display:flex;align-items:center;gap:14px}
  .avatar{width:52px;height:52px;border-radius:50%;flex-shrink:0;border:2.5px solid var(--primary);display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.1);font-weight:800;font-size:18px;overflow:hidden}
  .avatar img{width:100%;height:100%;object-fit:cover;border-radius:50%}
  .abar .aname{font-weight:700;font-size:17px}
  .abar .atag{font-size:13px;color:rgba(255,255,255,.62)}
  .abar .repost{margin-left:auto;display:inline-flex;align-items:center;gap:6px;background:#fff;color:var(--primary);font-weight:700;font-size:13px;padding:8px 16px;border-radius:9999px}
  .abar .repost svg{width:13px;height:13px;display:block}

  /* ── Print: the canvas IS the page ── */
  @page{size:1080px 1350px;margin:0}
  @media print{
    html,body{background:var(--paper)}
    .stage{min-height:0;padding:0;display:block}
    .sheet{box-shadow:none;margin:0}
    *,*::before,*::after{animation:none !important;transition:none !important}
  }
</style>
</head>
<body>
<div class="stage"><section class="sheet">
  <div class="head">
    <h1 class="el">[HEADLINE with <span class="acc">[1 TO 2 ACCENT WORDS]</span>]</h1>
    <p class="promise el">[ONE-LINE PROMISE SUBTITLE]</p>
  </div>
  <div class="flow">
    <!-- one .frow per step, 5 to 8 steps, --w shrinking each row (e.g. 560, 520, 480, 440, 400, 360px).
         Drop the .ann or .pcard cell (leave an empty <div></div>) on rows that need only one side. -->
    <div class="frow">
      <div class="ann el"><div class="claim">[ACCENT CLAIM LINE]</div><div class="what"><b>What to do:</b> [SHORT EXPLANATION]</div><span class="cmd">[/slash-command, optional]</span></div>
      <div class="ftrap el" style="--w:560px"><span class="fnumc">1</span><span class="ftitle">[STEP TITLE]</span><span class="fglyph">[GLYPH]</span></div>
      <div class="pcard el"><div class="plabel">The Prompt:</div><div class="ptext">"[PROMPT TEXT]"</div></div>
    </div>
    <!-- ...more .frow blocks, --w decreasing... -->
  </div>
  <div class="abar">
    <span class="avatar">[INITIALS]<!-- or: <img src="[HEADSHOT PATH]" alt="[NAME]"> --></span>
    <div><div class="aname">[NAME]</div><div class="atag">[TAGLINE]</div></div>
    <span class="repost"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11V9a4 4 0 0 1 4-4h9"/><path d="M14 2l3 3-3 3"/><path d="M20 13v2a4 4 0 0 1-4 4H7"/><path d="M10 22l-3-3 3-3"/></svg>Repost</span>
  </div>
</section></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  if (window.gsap) {
    gsap.from(document.querySelectorAll('.el'), {opacity:0, y:24, duration:0.7, stagger:0.08, ease:'power3.out'});
  }
</script>
</body>
</html>
```

Filling rules (Funnel):
- 5 to 8 `.frow` blocks, `--w` strictly decreasing so the spine reads as a funnel.
- Glyph slots take typographic or geometric glyphs only (numbers, arrows, symbols like #, >, =). Never illustrations, never emoji as design elements.
- Avatar: headshot img if the brain provides a path, else initials. Logos only where the products are genuinely referenced.
- Verify nothing clips at 1350px height before delivering. Overflow means tighter spacing or smaller type, never cut approved copy.
- Delivery line, always: "Preview blank? Use Show in folder and double-click the file to open it in your browser."

---

## FINAL CHECK before you hand over the file
- One `.html`, opens standalone, brand color applied from STEP 0.
- Rethink Sans, no Poppins. No em dashes anywhere.
- Every placeholder filled or its block removed. No `[BRACKETS]` left in the output.
- No invented numbers. Empty states where data is missing.
- Any drafted message is marked as a draft for approval, never sent.
- Tell the user the file name you saved and offer to open it.
