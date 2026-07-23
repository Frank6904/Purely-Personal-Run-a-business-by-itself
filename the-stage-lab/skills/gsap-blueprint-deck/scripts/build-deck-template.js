const fs = require('fs');
const L = JSON.parse(fs.readFileSync('logos2.json','utf8'));
const GSAP = fs.readFileSync('node_modules/gsap/dist/gsap.min.js','utf8');
const ST = fs.readFileSync('node_modules/gsap/dist/ScrollTrigger.min.js','utf8');

// colored logo wrapper
function clogo(name, px){
  return `<span class="clogo" style="width:${px}px;height:${px}px">${L[name]}</span>`;
}
function chip(name, label, dark){
  return `<span class="tchip${dark?' tchip-d':''}">${clogo(name,18)} ${label}</span>`;
}

// ---------- panel factory for tool heroes ----------
function toolPanel(o){
  // o: {id, cls, bgword, orbs, kicker, title, sub, logo, logoGlow, steps[], output, mock, chips}
  return `
<section class="panel ${o.cls}" id="${o.id}">
  ${o.orbs||''}
  <div class="bgword" aria-hidden="true">${o.bgword}</div>
  <div class="p-wrap">
    <div class="tp-grid">
      <div class="tp-left">
        <div class="tile-wrap rv"><div class="tile" style="--glow:${o.logoGlow}">${clogo(o.logo, 108)}</div></div>
        <div class="kicker rv">${o.kicker}</div>
        <h2 class="tp-title rv">${o.title}</h2>
        <p class="tp-sub rv">${o.sub}</p>
        ${o.output?`<div class="out-chip rv">${o.output}</div>`:''}
      </div>
      <div class="tp-right">
        <ol class="bigsteps rv">${o.steps.map((s,i)=>`<li><span class="bn">${i+1}</span><div>${s}</div></li>`).join('')}</ol>
        ${o.mock?`<div class="rv" style="margin-top:26px">${o.mock}</div>`:''}
        ${o.chips?`<div class="tools-row rv">${o.chips}</div>`:''}
      </div>
    </div>
  </div>
</section>`;
}

function orb(color, size, x, y, op){
  return `<div class="orb" style="background:radial-gradient(circle,${color},transparent 70%);width:${size}px;height:${size}px;left:${x};top:${y};opacity:${op}"></div>`;
}

// ---------- mocks ----------
const mockLinkedIn = `
<div class="mock"><div class="bar"><span class="d" style="background:#ff5f57"></span><span class="d" style="background:#febc2e"></span><span class="d" style="background:#28c840"></span><span class="u">linkedin.com · settings · data privacy</span></div>
<div class="body">
  <div class="li-row"><b>Get a copy of your data</b><span class="li-tag">Data privacy</span></div>
  <div class="li-opt on"><span class="rad"></span> Profile <span class="li-note">fast · ~30 min</span></div>
  <div class="li-opt"><span class="rad off"></span> The works <span class="li-note">hours</span></div>
  <div class="li-btn">Request archive</div>
  <div class="li-mail">✉ Archive ready · check the <b>Social</b> tab · unzip the CSV</div>
</div></div>`;

const mockGmail = `
<div class="mock"><div class="bar"><span class="d" style="background:#ff5f57"></span><span class="d" style="background:#febc2e"></span><span class="d" style="background:#28c840"></span><span class="u">claude.ai · gmail connector</span></div>
<div class="body">
  <div class="cn-row">${clogo('gmail',20)} <b>Gmail</b> <span class="cn-ok">● Connected</span></div>
  <div class="cn-chat">
    <div class="cn-u">Extract everything about how I write and who I talk to…</div>
    <div class="cn-a">Reading your sent mail… found your tone, your clients, your rhythms.<br><span class="cn-file">↓ email-context.md</span></div>
  </div>
</div></div>`;

const mockGPT = `
<div class="mock win-dark"><div class="bar"><span class="d" style="background:#ff5f57"></span><span class="d" style="background:#febc2e"></span><span class="d" style="background:#28c840"></span><span class="u">chatgpt.com · new chat</span></div>
<div class="body"><div class="chat">
  <div><span class="u">You: </span><span class="p">Extract my second brain: everything you know about me…</span></div><br>
  <div class="ok"># WHO YOU ARE</div>
  <div class="dim">## Work · ## Voice · ## Projects · ## People…</div><br>
  <div class="p">Copy → Google Doc → File → Download → <b style="color:#fff">Markdown (.md)</b></div>
</div></div></div>`;

const mockClaude = `
<div class="mock"><div class="bar"><span class="d" style="background:#ff5f57"></span><span class="d" style="background:#febc2e"></span><span class="d" style="background:#28c840"></span><span class="u">claude.ai · new chat</span></div>
<div class="body">
  <div class="cn-chat">
    <div class="cn-u">Same prompt. Extract everything about me from our chats and memory.</div>
    <div class="cn-a">Mining every conversation… your projects, your decisions, your patterns.<br><span class="cn-file">↓ claude-about-me.md</span></div>
  </div>
  <div class="four-files">📁 second-brain now holds <b>4 files</b> · one home</div>
</div></div>`;

const mockCode = `
<div class="mock win-dark"><div class="bar"><span class="d" style="background:#ff5f57"></span><span class="d" style="background:#febc2e"></span><span class="d" style="background:#28c840"></span><span class="u">VS Code · Claude Code extension</span></div>
<div class="body"><div class="chat">
  <div class="dim"># signed in with your Claude subscription</div><br>
  <div><span class="u">&gt; </span><span class="p">hi</span></div>
  <div class="ok">✔ Connected. Working in ~/Desktop/second-brain</div><br>
  <div class="dim">no terminal · no npm · no git bash</div>
  <div><span class="u">&gt; </span><span class="cursor"></span></div>
</div></div></div>`;

const mockVault = `
<div class="mock"><div class="bar"><span class="d" style="background:#ff5f57"></span><span class="d" style="background:#febc2e"></span><span class="d" style="background:#28c840"></span><span class="u">Obsidian · open folder as vault</span></div>
<div class="body">
  <div class="folder">
    <div class="root">📁 second-brain <span class="li-tag" style="margin-left:auto">= the vault</span></div>
    <div class="f"><span class="md">▪</span> linkedin-profile.csv</div>
    <div class="f"><span class="md">▪</span> email-context.md</div>
    <div class="f"><span class="md">▪</span> chatgpt-about-me.md</div>
    <div class="f"><span class="md">▪</span> claude-about-me.md</div>
  </div>
  <div class="four-files" style="margin-top:14px">${clogo('claudecode',16)} Claude writes · ${clogo('obsidian',16)} Obsidian draws · the folder is the bridge</div>
</div></div>`;

const mockGitHub = `
<div class="mock"><div class="bar"><span class="d" style="background:#ff5f57"></span><span class="d" style="background:#febc2e"></span><span class="d" style="background:#28c840"></span><span class="u">github.com · ai-second-brain</span></div>
<div class="body">
  <div class="gh-repo">${clogo('github',22)} <b>ai-second-brain</b> <span class="li-tag">template</span></div>
  <div class="gh-desc">Your personal AI brain. Runs on your markdown files. No database.</div>
  <div class="gh-btn">${clogo('vercel',15)}&nbsp; Deploy to Vercel</div>
  <div class="li-mail" style="margin-top:14px">→ connects your GitHub · forks the repo into your account · automatically</div>
</div></div>`;

const mockVercel = `
<div class="mock win-dark"><div class="bar"><span class="d" style="background:#ff5f57"></span><span class="d" style="background:#febc2e"></span><span class="d" style="background:#28c840"></span><span class="u">vercel.com · new project</span></div>
<div class="body">
  <div class="env">
    <div class="row"><span class="k">BRAIN_ENGINE</span><span class="v">API <span style="opacity:.6">(default)</span></span></div>
    <div class="row"><span class="k">AI_GATEWAY_KEY</span><span class="v">sk-••••-your-own-key</span></div>
    <div class="row"><span class="k">AI_MODEL</span><span class="v">anthropic</span></div>
  </div>
  <div class="deploy" style="margin-top:16px">
    <div class="lbl"><span>Deploying…</span><span class="pct" id="pctTxt">0%</span></div>
    <div class="track2"><div class="fill" id="deployFill"></div></div>
    <div class="steps2"><div class="done">✔ Cloning your fork</div><div class="done">✔ Installing dependencies</div><div id="dstep">▸ Building on server · ~3 min</div></div>
  </div>
</div></div>`;

// ---------- monument panels ----------
const WM = f => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}?width=1800`;
const MON = {
  pyramids: WM('Kheops-Pyramid.jpg'),
  taj: WM('Taj_Mahal_(Edited).jpeg'),
  wall: WM('The_Great_Wall_of_China_at_Jinshanling-edit.jpg'),
  colosseum: WM('Colosseum_in_Rome,_Italy_-_April_2007.jpg'),
  burj: WM('Burj_Khalifa_(16260269606).jpg'),
};

const FALL = {
  pyramids: `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"><rect width="1440" height="900" fill="#141115"/><circle cx="1080" cy="240" r="90" fill="rgba(233,13,65,.55)"/><path d="M120 700 L520 300 L920 700 Z" fill="#0c0a0d" stroke="rgba(233,13,65,.5)" stroke-width="2"/><path d="M700 700 L1010 420 L1320 700 Z" fill="#0f0c10" stroke="rgba(233,13,65,.35)" stroke-width="2"/><path d="M60 700 L260 520 L460 700 Z" fill="#100d11" stroke="rgba(233,13,65,.3)" stroke-width="2"/><line x1="0" y1="700" x2="1440" y2="700" stroke="rgba(250,248,244,.25)"/></svg>`,
  taj: `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"><rect width="1440" height="900" fill="#131015"/><circle cx="330" cy="210" r="70" fill="rgba(233,13,65,.5)"/><path d="M720 330 C650 400 640 460 640 520 L800 520 C800 460 790 400 720 330 Z" fill="#0d0b0e" stroke="rgba(233,13,65,.55)" stroke-width="2"/><rect x="560" y="520" width="320" height="140" fill="#0d0b0e" stroke="rgba(233,13,65,.4)" stroke-width="2"/><rect x="450" y="430" width="26" height="230" fill="#0d0b0e" stroke="rgba(233,13,65,.4)" stroke-width="2"/><rect x="964" y="430" width="26" height="230" fill="#0d0b0e" stroke="rgba(233,13,65,.4)" stroke-width="2"/><line x1="0" y1="660" x2="1440" y2="660" stroke="rgba(250,248,244,.25)"/><line x1="360" y1="730" x2="1080" y2="730" stroke="rgba(233,13,65,.3)"/></svg>`,
  wall: `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"><rect width="1440" height="900" fill="#121014"/><circle cx="1150" cy="200" r="80" fill="rgba(233,13,65,.5)"/><path d="M0 720 L240 520 L480 640 L760 400 L1040 560 L1240 430 L1440 520 L1440 900 L0 900 Z" fill="#0d0b0e"/><path d="M0 700 L240 500 L480 620 L760 380 L1040 540 L1240 410 L1440 500" fill="none" stroke="rgba(233,13,65,.55)" stroke-width="9" stroke-linejoin="round"/><path d="M0 686 L240 486 L480 606 L760 366 L1040 526 L1240 396 L1440 486" fill="none" stroke="rgba(250,248,244,.3)" stroke-width="2" stroke-dasharray="14 10"/></svg>`,
};

function monPanel(o){
  return `
<section class="panel dark-p mon" id="${o.id}">
  <div class="ph-fall">${o.fall||''}</div>
  <img class="ph-img" src="${o.img}" alt="${o.alt}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">
  <div class="ph-shade"></div>
  <div class="mon-num">${o.numeral}</div>
  <div class="p-wrap">
    <div style="max-width:640px">
      <div class="kicker rv">${o.kicker}</div>
      <h2 class="mon-title rv">${o.title}</h2>
      <p class="mon-story rv">${o.story}</p>
      <div class="mon-stats">
        ${o.stats.map(s=>`<div class="mstat rv"><div class="n">${s[0]}</div><div class="l">${s[1]}</div></div>`).join('')}
      </div>
    </div>
  </div>
  <div class="mon-cred">photo · wikimedia commons</div>
</section>`;
}

const storyPanels = `
  <!-- S1 STORY INTRO -->
  <section class="panel dark-p" id="story">
    ${orb('rgba(233,13,65,.3)','780','80%','15%','1')}
    <div class="bgword">A STORY</div>
    <div class="p-wrap" style="text-align:center">
      <div class="kicker rv">Before we begin</div>
      <h2 class="h2big rv">Forget AI for five minutes.</h2>
      <p class="p-lede rv" style="margin:0 auto">Before we open a single tool, I want to show you a few things humans built without any of this. Look closely at each one. At the end, I will ask you one question.</p>
      <div class="rv" style="margin-top:44px;font-family:var(--mono);font-size:12px;letter-spacing:.25em;color:rgba(250,248,244,.55)">KEEP SCROLLING <span style="color:var(--red);font-size:16px">→→→</span></div>
    </div>
  </section>

  ${monPanel({
    id:'mon-pyramids', numeral:'I', img:MON.pyramids, fall:FALL.pyramids, alt:'The Great Pyramid of Giza',
    kicker:'Monument I · Giza, Egypt', title:'The Great Pyramid',
    story:'Two point three million blocks of stone, each one heavier than a car. Twenty years of relentless, coordinated work. Nobody remembers how hard it was. Everybody remembers that it stands.',
    stats:[['2.3M','stone blocks'],['20 yrs','to build'],['4,500 yrs','still standing']]
  })}

  ${monPanel({
    id:'mon-taj', numeral:'II', img:MON.taj, fall:FALL.taj, alt:'The Taj Mahal',
    kicker:'Monument II · Agra, India', title:'The Taj Mahal',
    story:'Twenty thousand artisans. A thousand elephants hauling marble across the empire. Twenty-two years for one building. Built once, with total commitment. Admired forever.',
    stats:[['20,000','artisans'],['22 yrs','to build'],['1,000','elephants']]
  })}

  ${monPanel({
    id:'mon-wall', numeral:'III', img:MON.wall, fall:FALL.wall, alt:'The Great Wall of China at Jinshanling',
    kicker:'Monument III · China', title:'The Great Wall',
    story:'Twenty-one thousand kilometres, raised across two thousand years. Most of the people who built it never saw it finished. They built it anyway, one stone at a time.',
    stats:[['21,196 km','long'],['~2,000 yrs','of building'],['Generations','of hands']]
  })}

  <!-- S5 PAIR -->
  <section class="panel dark-p" id="mon-pair">
    ${orb('rgba(233,13,65,.24)','700','12%','10%','1')}
    <div class="bgword">BUILDERS</div>
    <div class="p-wrap">
      <div class="kicker rv">Monuments IV &amp; V · Rome and Dubai</div>
      <h2 class="h2big rv">The tools changed.<br>The rule did not.</h2>
      <div class="pair-grid">
        <div class="pair-card rv">
          <img src="${MON.colosseum}" alt="The Colosseum in Rome" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">
          <div class="sh"></div>
          <div class="tx"><h4>The Colosseum</h4><p>50,000+ seats · 8 years of work · standing for 1,950 years and counting.</p></div>
        </div>
        <div class="pair-card rv">
          <img src="${MON.burj}" alt="Burj Khalifa in Dubai" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">
          <div class="sh"></div>
          <div class="tx"><h4>Burj Khalifa</h4><p>828 metres · 12,000 workers a day · finished in 6 years with modern tools.</p></div>
        </div>
      </div>
      <p class="p-lede rv" style="margin-top:26px">From twenty years to six. Better tools keep collapsing the time. But no tool has ever removed the need for builders who show up.</p>
    </div>
  </section>

  <!-- S6 QUESTION -->
  <section class="panel red-p" id="question">
    <div class="bgword">COMMON</div>
    <div class="p-wrap">
      <div class="kicker rv">One question before we start</div>
      <h2 class="h2big rv" style="color:#fff">What is the one thing<br>all of these have in common?</h2>
      <div class="q-lines">
        <div class="q-line rv">Not the stone.</div>
        <div class="q-line rv">Not the size.</div>
        <div class="q-line rv dark-hit">They all took time. Patience. And committed hands.</div>
      </div>
    </div>
  </section>

  <!-- S7 BRIDGE -->
  <section class="panel dark-p" id="bridge">
    ${orb('rgba(233,13,65,.34)','860','50%','-8%','1')}
    <div class="bgword">YOUR TURN</div>
    <div class="p-wrap" style="text-align:center">
      <div class="kicker rv">Why this session matters</div>
      <h2 class="h2big rv">Today, you start<br>your <span style="color:var(--red)">monument</span>.</h2>
      <p class="p-lede rv" style="margin:0 auto">Let me be honest with you. What we build in this workshop is not easy. It will ask for patience when a step takes thirty minutes. Commitment when something needs a retry. And your full involvement, both days, all the way through.</p>
      <div class="vow-row">
        <div class="vow rv">Patience</div>
        <div class="vow rv">Commitment</div>
        <div class="vow rv">Involvement</div>
      </div>
      <p class="p-lede rv" style="margin:26px auto 0"><b style="color:var(--cream)">The difference?</b> Your monument will not take twenty years. It takes two days. And when it is done, it thinks in your voice.</p>
    </div>
  </section>

  <!-- S8 WIIFY -->
  <section class="panel" id="wiify">
    ${orb('rgba(233,13,65,.14)','700','85%','12%','1')}
    <div class="bgword">FOR YOU</div>
    <div class="p-wrap">
      <div class="kicker rv">What is in it for you</div>
      <h2 class="h2big rv">You walk out with a working brain.<br>Not notes.</h2>
      <div class="stage-cards" style="grid-template-columns:repeat(4,1fr)">
        <div class="sc rv"><div class="n">TAKEAWAY 01</div><h3>A live AI brain</h3><p>Your own app, on your own URL, answering from your history in your voice.</p></div>
        <div class="sc rv"><div class="n">TAKEAWAY 02</div><h3>Your Voice DNA</h3><p>How you sound, distilled into a document that is yours forever.</p></div>
        <div class="sc rv"><div class="n">TAKEAWAY 03</div><h3>The modern toolkit</h3><p>Claude Code, Obsidian, GitHub, Vercel. You will use all four without writing code.</p></div>
        <div class="sc rv"><div class="n">TAKEAWAY 04</div><h3>A compounding system</h3><p>Feed the folder and the brain grows. It gets more useful every single week.</p></div>
      </div>
    </div>
  </section>
`;

// ---------- HTML ----------
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Second Brain Blueprint · Purely Personal</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<script>${GSAP}</script>
<script>${ST}</script>
<style>
:root{
  --red:#e90d41; --red-deep:#c70a38; --red-soft:#fce8ed; --red-whisper:#fdf2f5;
  --cream:#faf8f4; --dark:#0f0f10; --ink:#1a1a1a; --ink2:#6b6b6b; --divider:#e8e2d8;
  --disp:'Rethink Sans',system-ui,sans-serif; --body:'Inter',system-ui,sans-serif; --mono:'JetBrains Mono',monospace;
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:var(--body);background:var(--cream);color:var(--ink);-webkit-font-smoothing:antialiased;overflow-x:hidden}
.clogo{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;flex:none}
.clogo svg{display:block}

/* HUD */
#hud{position:fixed;inset:0;pointer-events:none;z-index:300}
#hud .brand{position:absolute;top:26px;left:34px;font-family:var(--disp);font-weight:800;font-size:16px;letter-spacing:-.01em;color:var(--ink);mix-blend-mode:difference;filter:invert(1)}
#hud .brand em{color:var(--red);font-style:normal;filter:invert(1)}
#hud .count{position:absolute;top:28px;right:36px;font-family:var(--mono);font-size:12px;letter-spacing:.2em;color:#888}
#hud .count b{color:var(--red)}
#prog{position:fixed;bottom:0;left:0;height:4px;width:0;background:linear-gradient(90deg,var(--red),#ff5d84);z-index:301;box-shadow:0 0 16px rgba(233,13,65,.7)}

/* generic */
.kicker{font-family:var(--mono);font-size:12px;letter-spacing:.26em;text-transform:uppercase;color:var(--red);font-weight:700}
.dark-p, .panel.dark-p{background:var(--dark);color:var(--cream)}
.dark-p .tp-sub,.dark-p .bigsteps li{color:rgba(250,248,244,.72)}
.orb{position:absolute;border-radius:50%;filter:blur(70px);pointer-events:none;transform:translate(-50%,-50%)}
.bgword{position:absolute;left:50%;bottom:-3.5vw;transform:translateX(-50%);font-family:var(--disp);font-weight:800;font-size:min(21vw,300px);letter-spacing:-.03em;line-height:.8;white-space:nowrap;color:transparent;-webkit-text-stroke:1.5px rgba(15,15,16,.10);z-index:0;pointer-events:none}
.dark-p .bgword{-webkit-text-stroke:1.5px rgba(250,248,244,.10)}

/* HERO (vertical) */
#hero{min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;background:
  radial-gradient(1000px 620px at 85% -10%, rgba(233,13,65,.38), transparent 60%),
  radial-gradient(800px 600px at -10% 110%, rgba(233,13,65,.22), transparent 60%),
  linear-gradient(160deg,#151516 0%, #0f0f10 55%, #1a0b10 100%);color:var(--cream)}
#hero .grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:56px 56px;mask-image:radial-gradient(ellipse 75% 65% at 50% 45%,#000 25%,transparent 75%)}
.hero-inner{position:relative;z-index:2;max-width:1240px;margin:0 auto;padding:0 72px;width:100%}
.hero-badge{display:inline-flex;align-items:center;gap:9px;border:1px solid rgba(250,248,244,.2);border-radius:100px;padding:9px 18px;font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;margin-bottom:32px;background:rgba(250,248,244,.04)}
.hero-badge .dot{width:7px;height:7px;border-radius:50%;background:var(--red);box-shadow:0 0 12px var(--red);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
#hero h1{font-family:var(--disp);font-weight:800;font-size:clamp(50px,9vw,126px);line-height:.92;letter-spacing:-.03em;margin-bottom:26px}
#hero h1 .ln{display:block;overflow:hidden}
#hero h1 em{font-style:normal;background:linear-gradient(100deg,var(--red) 20%,#ff6d92 80%);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero-sub{font-size:clamp(16px,2vw,21px);max-width:660px;color:rgba(250,248,244,.75);line-height:1.6;margin-bottom:40px}
.hero-logos{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
.hlogo{display:inline-flex;align-items:center;gap:10px;background:rgba(250,248,244,.96);color:var(--ink);border-radius:14px;padding:11px 16px;font-size:13.5px;font-weight:600;box-shadow:0 10px 30px -12px rgba(0,0,0,.5)}
.scroll-cue{position:absolute;bottom:34px;left:50%;transform:translateX(-50%);z-index:3;font-family:var(--mono);font-size:10.5px;letter-spacing:.25em;text-transform:uppercase;color:rgba(250,248,244,.55);display:flex;align-items:center;gap:12px}
.scroll-cue .arrow{color:var(--red);font-size:16px;animation:nudge 1.6s infinite}
@keyframes nudge{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}

/* HORIZONTAL STAGE */
#hwrap{overflow:hidden;position:relative}
#track{display:flex;height:100vh;width:max-content}
.panel{width:100vw;height:100vh;flex:none;position:relative;overflow:hidden;display:flex;align-items:center;background:var(--cream)}
.p-wrap{max-width:1280px;margin:0 auto;padding:0 76px;width:100%;position:relative;z-index:2}

/* tool panel layout */
.tp-grid{display:grid;grid-template-columns:1fr 1.05fr;gap:70px;align-items:center}
.tile-wrap{margin-bottom:26px}
.tile{width:168px;height:168px;border-radius:42px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 34px 70px -28px rgba(15,15,16,.35), 0 0 0 1px rgba(15,15,16,.05), 0 0 90px -10px var(--glow);position:relative}
.dark-p .tile{box-shadow:0 34px 70px -20px rgba(0,0,0,.7), 0 0 110px -8px var(--glow)}
.tp-title{font-family:var(--disp);font-weight:800;font-size:clamp(42px,5.4vw,76px);line-height:.98;letter-spacing:-.028em;margin:16px 0 18px}
.tp-sub{font-size:17px;line-height:1.62;color:var(--ink2);max-width:520px}
.out-chip{display:inline-flex;align-items:center;gap:9px;margin-top:24px;font-family:var(--mono);font-size:13px;font-weight:700;color:var(--red);background:var(--red-soft);border:1px solid rgba(233,13,65,.25);border-radius:100px;padding:10px 18px}
.dark-p .out-chip{background:rgba(233,13,65,.14)}
.bigsteps{list-style:none;display:flex;flex-direction:column;gap:16px}
.bigsteps li{display:flex;gap:16px;font-size:16px;line-height:1.55;color:#3c3c3c}
.bigsteps .bn{flex:none;width:30px;height:30px;border-radius:9px;background:linear-gradient(135deg,var(--red),var(--red-deep));color:#fff;font-family:var(--disp);font-weight:800;font-size:13px;display:flex;align-items:center;justify-content:center;margin-top:1px;box-shadow:0 6px 16px -6px rgba(233,13,65,.6)}
.bigsteps b{font-weight:700;color:inherit}
.tools-row{display:flex;flex-wrap:wrap;gap:9px;margin-top:24px}
.tchip{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--divider);border-radius:10px;padding:8px 13px;font-size:12.5px;font-weight:600;background:#fff;color:var(--ink)}
.tchip-d{background:rgba(250,248,244,.95);border-color:transparent}

/* mocks */
.mock{background:#fff;border:1px solid var(--divider);border-radius:18px;overflow:hidden;box-shadow:0 30px 60px -30px rgba(15,15,16,.3)}
.mock .bar{display:flex;align-items:center;gap:7px;padding:11px 15px;background:#f3efe8;border-bottom:1px solid var(--divider)}
.mock .bar .d{width:11px;height:11px;border-radius:50%}
.mock .bar .u{margin-left:12px;font-family:var(--mono);font-size:11px;color:var(--ink2);background:#fff;border:1px solid var(--divider);border-radius:6px;padding:3px 10px}
.mock .body{padding:18px 20px}
.win-dark .bar{background:#1c1c1f;border-color:#2a2a2e}
.win-dark{background:#151517;border-color:#2a2a2e;color:#e6e6e6}
.win-dark .bar .u{background:#252528;border-color:#333;color:#9a9a9a}
.chat{font-family:var(--mono);font-size:12.5px;line-height:1.7}
.chat .u{color:#7ea6ff}.chat .p{color:#e6e6e6}.chat .ok{color:#4ec98a}.chat .dim{color:#8a8a8a}
.cursor{display:inline-block;width:7px;height:14px;background:var(--red);vertical-align:middle;animation:blink 1s steps(1) infinite;margin-left:2px}
@keyframes blink{50%{opacity:0}}
.li-row{display:flex;align-items:center;gap:10px;font-size:14px;padding-bottom:12px;border-bottom:1px solid var(--divider);margin-bottom:12px}
.li-tag{margin-left:auto;font-family:var(--mono);font-size:10px;color:var(--ink2);background:#f3efe8;border-radius:6px;padding:3px 8px}
.li-opt{display:flex;align-items:center;gap:10px;font-size:13.5px;padding:9px 0;color:var(--ink)}
.li-opt .rad{width:16px;height:16px;border-radius:50%;border:5px solid #0a66c2;flex:none}
.li-opt .rad.off{border:2px solid #c9c4ba}
.li-note{margin-left:auto;font-family:var(--mono);font-size:10.5px;color:var(--ink2)}
.li-btn{margin-top:10px;background:#0a66c2;color:#fff;border-radius:100px;text-align:center;padding:9px;font-weight:700;font-size:13.5px}
.li-mail{margin-top:14px;font-size:12.5px;color:var(--ink2);background:var(--red-whisper);border:1px solid var(--red-soft);border-radius:10px;padding:10px 13px;line-height:1.5}
.cn-row{display:flex;align-items:center;gap:9px;font-size:13.5px;padding-bottom:12px;border-bottom:1px solid var(--divider)}
.cn-ok{margin-left:auto;color:#1c9e5a;font-family:var(--mono);font-size:11px}
.cn-chat{display:flex;flex-direction:column;gap:10px;margin-top:14px}
.cn-u{align-self:flex-end;background:var(--red);color:#fff;border-radius:14px 14px 4px 14px;padding:10px 14px;font-size:12.5px;max-width:85%;line-height:1.5}
.cn-a{align-self:flex-start;background:#f3efe8;border-radius:14px 14px 14px 4px;padding:10px 14px;font-size:12.5px;max-width:88%;line-height:1.55;color:#3c3c3c}
.cn-file{display:inline-block;margin-top:8px;font-family:var(--mono);font-size:11.5px;font-weight:700;color:var(--red)}
.four-files{margin-top:14px;font-size:12.5px;color:var(--ink2);display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.folder{font-family:var(--mono);font-size:13px;line-height:2.05}
.folder .root{color:var(--ink);font-weight:700;display:flex;align-items:center;gap:8px}
.folder .f{padding-left:22px;color:var(--ink2);display:flex;align-items:center;gap:8px}
.folder .f .md{color:var(--red);font-weight:700}
.gh-repo{display:flex;align-items:center;gap:10px;font-size:15px;padding-bottom:10px}
.gh-desc{font-size:13px;color:var(--ink2);padding-bottom:16px;border-bottom:1px solid var(--divider);margin-bottom:16px}
.gh-btn{display:flex;align-items:center;justify-content:center;gap:4px;background:#000;color:#fff;border-radius:10px;padding:12px;font-weight:700;font-size:14px}
.gh-btn .clogo{filter:invert(1)}
.env{font-family:var(--mono);font-size:12px}
.env .row{display:grid;grid-template-columns:1fr 1.25fr;gap:10px;padding:10px 0;border-bottom:1px dashed #2c2c30}
.env .k{color:#ff5d84;font-weight:700}.env .v{color:#9a9a9a;word-break:break-all}
.deploy .lbl{display:flex;justify-content:space-between;font-family:var(--mono);font-size:12px;margin-bottom:9px}
.deploy .pct{color:#ff5d84;font-weight:700}
.track2{height:9px;background:#2a2a2e;border-radius:100px;overflow:hidden}
.deploy .fill{height:100%;width:0;background:linear-gradient(90deg,var(--red),#ff5d84);border-radius:100px}
.steps2{margin-top:14px;font-family:var(--mono);font-size:11.5px;line-height:1.9;color:#9a9a9a}
.steps2 .done{color:#4ec98a}

/* mission panel */
.stage-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:44px}
.sc{background:#fff;border:1px solid var(--divider);border-radius:22px;padding:28px;position:relative;overflow:hidden}
.sc::after{content:"";position:absolute;inset:auto 0 0 0;height:4px;background:linear-gradient(90deg,var(--red),#ff6d92)}
.sc .n{font-family:var(--mono);font-size:11.5px;color:var(--red);letter-spacing:.14em;font-weight:700}
.sc h3{font-family:var(--disp);font-weight:800;font-size:26px;margin:12px 0 8px;letter-spacing:-.015em}
.sc p{font-size:14px;line-height:1.6;color:var(--ink2)}
.sc .icons{display:flex;gap:10px;margin-top:18px;align-items:center}
.h2big{font-family:var(--disp);font-weight:800;font-size:clamp(38px,4.8vw,68px);line-height:1.0;letter-spacing:-.026em;margin:16px 0 18px}
.p-lede{font-size:17px;line-height:1.62;color:var(--ink2);max-width:640px}
.dark-p .p-lede{color:rgba(250,248,244,.7)}

/* collect intro cards */
.col-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:44px}
.cc{background:rgba(250,248,244,.05);border:1px solid rgba(250,248,244,.12);border-radius:20px;padding:24px 22px;backdrop-filter:blur(4px)}
.cc .cc-logo{width:46px;height:46px;border-radius:13px;background:#fff;display:flex;align-items:center;justify-content:center;margin-bottom:16px;box-shadow:0 10px 26px -10px rgba(0,0,0,.55)}
.cc h4{font-family:var(--disp);font-weight:700;font-size:17px;margin-bottom:6px}
.cc p{font-size:12.5px;line-height:1.55;color:rgba(250,248,244,.62)}
.cc .file{margin-top:14px;font-family:var(--mono);font-size:10.5px;font-weight:700;color:#ff5d84}

/* convergence */
.conv-svg{width:100%;max-height:56vh;display:block;overflow:visible}
.src-card{fill:#fff;stroke:rgba(250,248,244,.1)}
.node-lbl{font-family:var(--body);font-weight:700;font-size:13px;fill:var(--ink)}
.node-sub{font-family:var(--mono);font-size:9.5px;fill:var(--ink2)}
.flow-path{fill:none;stroke:var(--red);stroke-width:2.2;stroke-linecap:round;opacity:.7}
.flow-dot{fill:#ff5d84}
.hub-ring{fill:rgba(233,13,65,.14);stroke:var(--red);stroke-width:2.5}
.hub-lbl{font-family:var(--disp);font-weight:800;fill:var(--cream)}
.hub-sub{font-family:var(--mono);font-size:10px;fill:#ff5d84;letter-spacing:.1em}

/* graph */
.graph-stage{position:relative;height:56vh;border:1px solid rgba(250,248,244,.12);border-radius:24px;overflow:hidden;background:radial-gradient(circle at 50% 45%,rgba(233,13,65,.13),transparent 62%)}
.gsvg{position:absolute;inset:0;width:100%;height:100%}
.g-edge{stroke:rgba(233,13,65,.45);stroke-width:1.3}
.g-node circle{fill:#fff}
.g-core{fill:var(--red)!important}
.g-node text{font-family:var(--mono);font-size:10px;fill:rgba(250,248,244,.85);text-anchor:middle}

/* monuments */
.ph-fall{position:absolute;inset:0;z-index:0}
.ph-fall svg{width:100%;height:100%;display:block}
.ph-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1}
.ph-shade{position:absolute;inset:0;z-index:2;background:linear-gradient(88deg,rgba(15,15,16,.95) 10%,rgba(15,15,16,.66) 46%,rgba(15,15,16,.16) 80%,rgba(15,15,16,.4) 100%),linear-gradient(0deg,rgba(15,15,16,.55),transparent 36%)}
.mon .p-wrap{z-index:3}
.mon-title{font-family:var(--disp);font-weight:800;font-size:clamp(52px,6.6vw,100px);line-height:.95;letter-spacing:-.03em;color:var(--cream);margin:14px 0 20px}
.mon-story{font-size:17.5px;line-height:1.68;color:rgba(250,248,244,.88);max-width:560px}
.mon-stats{display:flex;gap:42px;margin-top:46px;flex-wrap:wrap}
.mstat .n{font-family:var(--disp);font-weight:800;font-size:clamp(30px,3.4vw,50px);letter-spacing:-.02em;background:linear-gradient(120deg,var(--red),#ff6d92);-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1}
.mstat .l{font-family:var(--mono);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:rgba(250,248,244,.62);margin-top:8px}
.mon-num{position:absolute;top:7vh;right:4vw;z-index:2;font-family:var(--disp);font-weight:800;font-size:min(11vw,150px);line-height:1;color:transparent;-webkit-text-stroke:2px rgba(250,248,244,.3);pointer-events:none}
.mon-cred{position:absolute;bottom:16px;right:22px;z-index:3;font-family:var(--mono);font-size:10px;letter-spacing:.08em;color:rgba(250,248,244,.4)}
.pair-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:38px}
.pair-card{position:relative;border-radius:24px;overflow:hidden;min-height:44vh;border:1px solid rgba(250,248,244,.16);background:#131015}
.pair-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.pair-card .sh{position:absolute;inset:0;background:linear-gradient(0deg,rgba(15,15,16,.94) 8%,rgba(15,15,16,.15) 62%)}
.pair-card .tx{position:absolute;left:26px;right:26px;bottom:24px;z-index:2}
.pair-card h4{font-family:var(--disp);font-weight:800;font-size:25px;color:var(--cream);margin-bottom:7px;letter-spacing:-.015em}
.pair-card p{font-size:13.5px;line-height:1.55;color:rgba(250,248,244,.78)}
.q-lines{margin-top:38px;display:flex;flex-direction:column;gap:14px}
.q-line{font-family:var(--disp);font-weight:800;font-size:clamp(26px,3.6vw,50px);line-height:1.12;letter-spacing:-.02em;color:rgba(255,255,255,.55)}
.q-line.dark-hit{color:var(--dark);background:var(--cream);display:inline-block;align-self:flex-start;padding:10px 22px;border-radius:16px;box-shadow:0 24px 50px -18px rgba(0,0,0,.4)}
.vow-row{display:flex;gap:16px;justify-content:center;margin-top:38px;flex-wrap:wrap}
.vow{font-family:var(--disp);font-weight:800;font-size:clamp(20px,2.4vw,30px);letter-spacing:-.015em;color:var(--cream);border:2px solid var(--red);border-radius:100px;padding:14px 34px;background:rgba(233,13,65,.12);box-shadow:0 0 50px -12px rgba(233,13,65,.6)}

/* change of plans + question share the red canvas */
#pivot,.red-p{background:linear-gradient(135deg,var(--red) 0%,var(--red-deep) 55%,#8f0726 100%);color:#fff}
#pivot .bgword,.red-p .bgword{-webkit-text-stroke:1.5px rgba(255,255,255,.14)}
#pivot .kicker,.red-p .kicker{color:#ffd9e2}
#pivot .p-lede,.red-p .p-lede{color:rgba(255,255,255,.85)}
.swap{display:grid;grid-template-columns:1fr auto 1fr;gap:24px;align-items:stretch;margin-top:42px}
.swap .box{border-radius:18px;padding:26px;font-size:14.5px;line-height:1.75}
.swap .old{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);color:rgba(255,255,255,.85)}
.swap .old .h,.swap .new .h{font-family:var(--mono);font-size:11px;text-transform:uppercase;letter-spacing:.14em;margin-bottom:12px;font-weight:700}
.swap .old .h{color:rgba(255,255,255,.7)}
.swap .old s{opacity:.75}
.swap .new{background:var(--dark);color:var(--cream);box-shadow:0 30px 60px -20px rgba(0,0,0,.5)}
.swap .new .h{color:#ff5d84}
.swap .arrow{font-size:34px;display:flex;align-items:center;color:#fff}

/* result stats */
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:46px}
.stat{text-align:center;padding:26px 16px;border:1px solid rgba(250,248,244,.12);border-radius:20px;background:rgba(250,248,244,.03)}
.stat .big{font-family:var(--disp);font-weight:800;font-size:clamp(40px,4.6vw,64px);background:linear-gradient(120deg,var(--red),#ff6d92);-webkit-background-clip:text;background-clip:text;color:transparent;letter-spacing:-.03em;line-height:1}
.stat .lbl{font-size:13px;color:rgba(250,248,244,.6);margin-top:10px}

/* route map */
.map-row{display:flex;align-items:stretch;flex-wrap:wrap;margin-top:42px}
.map-step{flex:1;min-width:120px;padding:20px 16px;border:1px solid var(--divider);border-right:none;position:relative;background:#fff}
.map-step:first-child{border-radius:16px 0 0 16px}
.map-step:last-child{border-right:1px solid var(--divider);border-radius:0 16px 16px 0}
.map-step .mn{font-family:var(--mono);font-size:11px;color:var(--red);font-weight:700}
.map-step h4{font-family:var(--disp);font-weight:700;font-size:14.5px;margin:8px 0 5px}
.map-step p{font-size:11px;color:var(--ink2);line-height:1.45}
.map-step .arw{position:absolute;right:-8px;top:50%;transform:translateY(-50%);z-index:3;color:var(--red);background:#fff;font-size:13px;width:16px;text-align:center}
.outro{margin-top:60px;text-align:center}
.outro .mark{font-family:var(--disp);font-weight:800;font-size:34px;letter-spacing:-.02em}
.outro .mark em{color:var(--red);font-style:normal}
.outro .by{font-family:var(--mono);font-size:11.5px;letter-spacing:.22em;text-transform:uppercase;color:var(--ink2);margin-top:12px}

.rv{will-change:transform,opacity}

@media(max-width:860px){
  #track{flex-direction:column;height:auto}
  .panel{width:100%;height:auto;min-height:70vh;padding:70px 0}
  .tp-grid{grid-template-columns:1fr;gap:40px}
  .p-wrap{padding:0 24px}
  .stage-cards,.col-cards,.stats{grid-template-columns:1fr 1fr}
  .pair-grid{grid-template-columns:1fr}
  .stage-cards[style*="repeat(4"]{grid-template-columns:1fr 1fr!important}
  .swap{grid-template-columns:1fr}.swap .arrow{transform:rotate(90deg);justify-content:center}
  .bgword{font-size:34vw}
  .hero-inner{padding:0 24px}
  #hud .count{display:none}
}
</style>
</head>
<body>
<div id="hud">
  <div class="brand">Purely <em>Personal</em></div>
  <div class="count"><b id="pcur">00</b> / <span id="ptot">15</span></div>
</div>
<div id="prog"></div>

<!-- HERO -->
<section id="hero">
  <div class="grid-bg"></div>
  <div class="hero-inner">
    <div class="hero-badge"><span class="dot"></span>Build Your Second Brain · The Workshop Blueprint</div>
    <h1><span class="ln">The Second</span><span class="ln">Brain <em>Blueprint</em></span></h1>
    <p class="hero-sub">Two days. Your scattered data becomes a living, personal AI brain. Built locally with Obsidian and Claude Code, then deployed live to Vercel in one click.</p>
    <div class="hero-logos">
      <span class="hlogo">${clogo('linkedin',20)} LinkedIn</span>
      <span class="hlogo">${clogo('gmail',20)} Gmail</span>
      <span class="hlogo">${clogo('chatgpt',20)} ChatGPT</span>
      <span class="hlogo">${clogo('claude',20)} Claude</span>
      <span class="hlogo">${clogo('obsidian',20)} Obsidian</span>
      <span class="hlogo">${clogo('github',20)} GitHub</span>
      <span class="hlogo">${clogo('vercel',18)} Vercel</span>
    </div>
  </div>
  <div class="scroll-cue">Scroll · the journey moves sideways <span class="arrow">→→→</span></div>
</section>

<!-- HORIZONTAL JOURNEY -->
<div id="hwrap">
<div id="track">

  ${storyPanels}

  <!-- P1 MISSION -->
  <section class="panel" id="mission">
    ${orb('rgba(233,13,65,.18)','700','85%','15%','1')}
    <div class="bgword">MISSION</div>
    <div class="p-wrap">
      <div class="kicker rv">What you will do</div>
      <h2 class="h2big rv">Two days. One folder.<br>A brain that talks like <span style="color:var(--red)">you</span>.</h2>
      <p class="p-lede rv">Every workshop participant walks the same road: collect their data, build the brain locally, then push it live. Nine moves, three stages, zero terminal fear.</p>
      <div class="stage-cards">
        <div class="sc rv"><div class="n">STAGE 01 · DAY 1</div><h3>Collect</h3><p>Export yourself from four platforms into one desktop folder.</p><div class="icons">${clogo('linkedin',22)}${clogo('gmail',22)}${clogo('chatgpt',22)}${clogo('claude',22)}</div></div>
        <div class="sc rv"><div class="n">STAGE 02 · DAY 1</div><h3>Build</h3><p>Claude Code structures it. Obsidian draws the map of your mind.</p><div class="icons">${clogo('vscode',22)}${clogo('claudecode',22)}${clogo('obsidian',22)}</div></div>
        <div class="sc rv"><div class="n">STAGE 03 · DAY 2</div><h3>Deploy</h3><p>One click through GitHub to Vercel. Live AI brain in three minutes.</p><div class="icons">${clogo('github',22)}${clogo('vercel',20)}</div></div>
      </div>
    </div>
  </section>

  <!-- P2 COLLECT INTRO -->
  <section class="panel dark-p" id="collect">
    ${orb('rgba(233,13,65,.3)','800','15%','0%','1')}
    ${orb('rgba(233,13,65,.16)','600','90%','100%','1')}
    <div class="bgword">COLLECT</div>
    <div class="p-wrap">
      <div class="kicker rv">Phase 01 · Data collection</div>
      <h2 class="h2big rv">What we're collecting,<br>and exactly how.</h2>
      <p class="p-lede rv">First move: create a folder on your desktop called <b style="color:var(--cream)">second-brain</b>. Four exports land in it. That single folder is the entire system.</p>
      <div class="col-cards">
        <div class="cc rv"><div class="cc-logo">${clogo('linkedin',26)}</div><h4>LinkedIn</h4><p>Your professional record. Official archive export, profile only.</p><div class="file">→ linkedin-profile.csv</div></div>
        <div class="cc rv"><div class="cc-logo">${clogo('gmail',26)}</div><h4>Gmail</h4><p>How you write and who you talk to, via the Claude connector.</p><div class="file">→ email-context.md</div></div>
        <div class="cc rv"><div class="cc-logo">${clogo('chatgpt',26)}</div><h4>ChatGPT</h4><p>Everything its memory and chats know about you. One prompt.</p><div class="file">→ chatgpt-about-me.md</div></div>
        <div class="cc rv"><div class="cc-logo">${clogo('claude',26)}</div><h4>Claude</h4><p>Same extraction prompt, run on your Claude history.</p><div class="file">→ claude-about-me.md</div></div>
      </div>
    </div>
  </section>

  ${toolPanel({
    id:'p-linkedin', cls:'', bgword:'LINKEDIN',
    orbs: orb('rgba(10,102,194,.22)','760','80%','10%','1') + orb('rgba(233,13,65,.10)','520','5%','95%','1'),
    kicker:'Step 01 · Inside LinkedIn', logo:'linkedin', logoGlow:'rgba(10,102,194,.45)',
    title:'Your professional history', sub:'LinkedIn already wrote your resume. We take the official archive, not a scrape. Profile only keeps it fast.',
    output:'→ linkedin-profile.csv', mock: mockLinkedIn,
    steps:[
      '<b>Click your profile photo</b> → Settings &amp; Privacy.',
      '<b>Data privacy</b> → Get a copy of your data.',
      'Tick <b>Profile</b> only. The full archive takes hours, this takes <b>~30 minutes</b>.',
      '<b>Request archive.</b> The email lands in your <b>Social</b> tab, so look there.',
      'Unzip → drop the <b>CSV</b> into second-brain.'
    ]
  })}

  ${toolPanel({
    id:'p-gmail', cls:'', bgword:'GMAIL',
    orbs: orb('rgba(234,67,53,.16)','600','12%','8%','1') + orb('rgba(66,133,244,.16)','600','88%','92%','1') + orb('rgba(251,188,4,.12)','420','75%','12%','1'),
    kicker:'Step 02 · Inside Gmail, via Claude', logo:'gmail', logoGlow:'rgba(234,67,53,.35)',
    title:'The voice in your inbox', sub:'Your sent mail is the purest sample of how you actually write. Claude reads it through the Gmail connector and distills it.',
    output:'→ email-context.md', mock: mockGmail,
    steps:[
      'In Claude: <b>plus button → Connectors</b> → confirm <b>Gmail</b> is connected.',
      'Open a <b>new chat</b> and paste the email extraction prompt.',
      'Claude mines your <b>sent mail</b>. Answer its follow-up questions.',
      'It returns one clean <b>.md</b> file. Save it into second-brain.'
    ]
  })}

  ${toolPanel({
    id:'p-chatgpt', cls:'dark-p', bgword:'CHATGPT',
    orbs: orb('rgba(16,163,127,.3)','740','82%','12%','1') + orb('rgba(233,13,65,.14)','520','8%','92%','1'),
    kicker:'Step 03 · Inside ChatGPT', logo:'chatgpt', logoGlow:'rgba(16,163,127,.5)',
    title:'Everything it knows about you', sub:'Months of conversations and memory, condensed into one document about who you are, what you do, and how you think.',
    output:'→ chatgpt-about-me.md', mock: mockGPT,
    steps:[
      'Open a <b>new chat</b> in ChatGPT.',
      'Paste the <b>second brain extraction prompt</b>. It scans memory plus your chats.',
      'Copy the output into a <b>Google Doc</b> (or any notes app).',
      '<b>File → Download → Markdown (.md)</b> → into second-brain.'
    ]
  })}

  ${toolPanel({
    id:'p-claude', cls:'', bgword:'CLAUDE',
    orbs: orb('rgba(217,119,87,.26)','740','80%','14%','1') + orb('rgba(233,13,65,.10)','500','6%','90%','1'),
    kicker:'Step 04 · Inside Claude', logo:'claude', logoGlow:'rgba(217,119,87,.5)',
    title:'Your other memory', sub:'Claude has seen a different side of you: your projects, decisions and drafts. Same prompt, second perspective, richer brain.',
    output:'→ claude-about-me.md', mock: mockClaude,
    steps:[
      'Open a <b>new chat</b> in Claude.',
      'Run the <b>same extraction prompt</b> on your Claude history and memory.',
      'It writes the file for you. <b>Download the .md</b>.',
      'Drop it in the folder. <b>All four exports now live in one home.</b>'
    ]
  })}

  <!-- P7 ONE FOLDER -->
  <section class="panel dark-p" id="home">
    ${orb('rgba(233,13,65,.32)','820','50%','110%','1')}
    <div class="bgword">HOME</div>
    <div class="p-wrap">
      <div style="text-align:center;max-width:760px;margin:0 auto 8px">
        <div class="kicker rv">The rule that runs everything</div>
        <h2 class="h2big rv">Every piece of information<br>has <span style="color:var(--red)">one home</span>.</h2>
      </div>
      <svg class="conv-svg rv" viewBox="0 0 1180 430" preserveAspectRatio="xMidYMid meet">
        <path class="flow-path" id="fp0" d="M150,64 C150,190 590,140 590,225"/>
        <path class="flow-path" id="fp1" d="M430,64 C430,170 590,170 590,225"/>
        <path class="flow-path" id="fp2" d="M750,64 C750,170 590,170 590,225"/>
        <path class="flow-path" id="fp3" d="M1030,64 C1030,190 590,140 590,225"/>
        ${[['LinkedIn','linkedin-profile.csv','linkedin',60],['Gmail','email-context.md','gmail',340],['ChatGPT','chatgpt-about-me.md','chatgpt',660],['Claude','claude-about-me.md','claude',940]].map((s,i)=>`
        <g class="src-node">
          <rect class="src-card" x="${s[3]}" y="12" width="180" height="52" rx="13"/>
          <foreignObject x="${s[3]+13}" y="24" width="30" height="30"><div xmlns="http://www.w3.org/1999/xhtml" style="width:26px;height:26px">${L[s[2]]}</div></foreignObject>
          <text class="node-lbl" x="${s[3]+50}" y="35">${s[0]}</text>
          <text class="node-sub" x="${s[3]+50}" y="51">${s[1]}</text>
        </g>`).join('')}
        <g class="hub-node">
          <circle class="hub-ring" cx="590" cy="292" r="68"/>
          <text class="hub-lbl" x="590" y="290" text-anchor="middle" font-size="27">📁</text>
          <text class="hub-lbl" x="590" y="318" text-anchor="middle" font-size="15">second-brain</text>
          <text class="hub-sub" x="590" y="338" text-anchor="middle">ONE FOLDER · ONE HOME</text>
        </g>
        ${[0,1,2,3].map(i=>`<circle class="flow-dot" r="4.5"><animateMotion dur="${2.2+i*0.35}s" repeatCount="indefinite"><mpath href="#fp${i}"/></animateMotion></circle>`).join('')}
      </svg>
      <p class="p-lede rv" style="text-align:center;margin:6px auto 0">Ask a question later, and Claude follows the same path every time. It always tells you which file the answer came from.</p>
    </div>
  </section>

  ${toolPanel({
    id:'p-code', cls:'dark-p', bgword:'2 CLICKS',
    orbs: orb('rgba(0,122,204,.28)','760','82%','10%','1') + orb('rgba(233,13,65,.16)','560','8%','95%','1'),
    kicker:'Phase 02 · The engine', logo:'vscode', logoGlow:'rgba(0,122,204,.5)',
    title:'Claude Code, no terminal', sub:'The install that used to eat 3 to 4 hours of every workshop is now two clicks inside VS Code. No Git Bash, no Node, no npm errors.',
    output:'✓ install time: minutes, not hours', mock: mockCode,
    chips: chip('vscode','VS Code',true) + chip('claudecode','Claude Code extension',true),
    steps:[
      'Install <b>VS Code</b> for your OS.',
      '<b>Extensions panel</b> → search "Claude Code" → <b>Install</b>.',
      'Click the Claude icon → <b>new session</b> → sign in with your Claude subscription → authorise.',
      'Type <b>"hi"</b>. It answers. You also get a file editor for pasting later.'
    ]
  })}

  ${toolPanel({
    id:'p-obsidian', cls:'dark-p', bgword:'OBSIDIAN',
    orbs: orb('rgba(124,58,237,.34)','780','80%','12%','1') + orb('rgba(124,58,237,.16)','540','10%','95%','1'),
    kicker:'Phase 03 · The lens', logo:'obsidian', logoGlow:'rgba(124,58,237,.55)',
    title:'Open the folder as a vault', sub:'Obsidian and Claude Code are never wired together. They both watch the same folder. Claude writes the files, Obsidian draws them.',
    output:'✓ 4 notes detected in the sidebar', mock: mockVault,
    chips: chip('claudecode','Claude writes',true) + chip('obsidian','Obsidian draws',true),
    steps:[
      'Download <b>Obsidian</b> (obsidian.md) and open it.',
      'On the welcome screen choose <b>Open folder as vault</b>.',
      'Select the same <b>second-brain</b> folder.',
      'Your files appear in the sidebar. Keep Obsidian open <b>beside</b> Claude Code and watch.'
    ]
  })}

  <!-- P10 BUILD -->
  <section class="panel dark-p" id="p-build">
    ${orb('rgba(233,13,65,.3)','800','15%','5%','1')}
    <div class="bgword">THE BRAIN</div>
    <div class="p-wrap">
      <div class="tp-grid">
        <div class="tp-left">
          <div class="kicker rv">Phase 04 · Extract &amp; build</div>
          <h2 class="tp-title rv" style="font-size:clamp(38px,4.6vw,64px)">Voice DNA first, then the graph lights up</h2>
          <p class="tp-sub rv">One prompt distills how you sound. Three more grow the brain, until Obsidian's graph view is a constellation of you.</p>
          <ol class="bigsteps rv" style="margin-top:24px">
            <li><span class="bn">♥</span><div><b>Voice extraction</b> → produces <b>Voice DNA</b> (how you sound) + <b>Business Context</b>.</div></li>
            <li><span class="bn">1</span><div><b>Build the structure.</b> Claude lays out the file tree, one home per topic.</div></li>
            <li><span class="bn">2</span><div><b>Write CLAUDE.md.</b> The wiki-link layer that keeps improving the brain.</div></li>
            <li><span class="bn">3</span><div><b>Ingestion.</b> Everything is read, linked and organised. Open the graph view.</div></li>
          </ol>
        </div>
        <div class="tp-right rv">
          <div class="graph-stage"><svg class="gsvg" id="graph" viewBox="0 0 560 520" preserveAspectRatio="xMidYMid meet"></svg></div>
          <div style="text-align:center;font-family:var(--mono);font-size:11px;color:rgba(250,248,244,.5);margin-top:14px;letter-spacing:.12em">OBSIDIAN GRAPH VIEW · MORE DATA = BIGGER BRAIN</div>
        </div>
      </div>
    </div>
  </section>

  <!-- P11 PIVOT -->
  <section class="panel" id="pivot">
    <div class="bgword">FINAL</div>
    <div class="p-wrap">
      <div class="kicker rv">Day 2 · Change of plans · the final route</div>
      <h2 class="h2big rv" style="color:#fff">We killed the<br>complicated deploy.</h2>
      <p class="p-lede rv">The brain runs entirely on your markdown files. So the database went, the command-line tools went, and deployment became a single button.</p>
      <div class="swap">
        <div class="box old rv">
          <div class="h">Was going to be</div>
          <s>Supabase database setup</s><br>
          <s>Supabase CLI + terminal login</s><br>
          <s>Netlify + env wiring by hand</s><br>
          <s>Multiple prompts &amp; error-fixing</s>
        </div>
        <div class="arrow rv">→</div>
        <div class="box new rv">
          <div class="h">The final plan</div>
          <b>One-click deploy template</b><br>
          ${clogo('github',15)} Connect GitHub · add 3 keys<br>
          ${clogo('vercel',13)} Deploy to <b>Vercel</b><br>
          Live in ~3 minutes · no database
        </div>
      </div>
    </div>
  </section>

  ${toolPanel({
    id:'p-github', cls:'', bgword:'FORK',
    orbs: orb('rgba(15,15,16,.10)','700','82%','10%','1') + orb('rgba(233,13,65,.12)','520','8%','92%','1'),
    kicker:'Step 01 of Day 2 · Inside GitHub', logo:'github', logoGlow:'rgba(15,15,16,.3)',
    title:'One button forks the brain', sub:'The template repo holds the whole app. You never touch the code. GitHub copies it into your account the moment you hit deploy.',
    output:'→ your own copy of the app', mock: mockGitHub,
    steps:[
      'Create a free <b>GitHub account</b> if you do not have one yet.',
      'Open the <b>ai-second-brain</b> template repo link.',
      'Click <b>Deploy to Vercel</b>.',
      'Authorise GitHub when asked. It <b>forks the repo</b> into your account automatically.'
    ]
  })}

  ${toolPanel({
    id:'p-vercel', cls:'dark-p', bgword:'DEPLOY',
    orbs: orb('rgba(250,248,244,.10)','700','80%','8%','1') + orb('rgba(233,13,65,.22)','620','10%','100%','1'),
    kicker:'Step 02 of Day 2 · Inside Vercel', logo:'vercel', logoGlow:'rgba(250,248,244,.35)',
    title:'Three keys. Three minutes. Live.', sub:'Vercel builds your fork on its own servers and hands you a link. Your brain, on your URL, powered by your key.',
    output:'→ your-brain.vercel.app', mock: mockVercel,
    chips: chip('github','Auto-forked',true) + chip('vercel','Free tier · 1 project',true),
    steps:[
      'Vercel asks for <b>3 environment variables</b>: Brain Engine, AI Gateway key, AI model.',
      'Paste your own <b>API key</b>. The gateway is free, you only pay your model usage. <b>Never share a key.</b>',
      'Click <b>Deploy</b>. The server builds it in <b>~3 minutes</b>.',
      'Open your link. Then upload your own <b>.md files</b> via the settings gear. Demo data is stripped, your Voice DNA maps in.'
    ]
  })}

  <!-- P14 RESULT -->
  <section class="panel dark-p" id="result">
    ${orb('rgba(233,13,65,.35)','900','50%','-10%','1')}
    <div class="bgword">YOURS</div>
    <div class="p-wrap" style="text-align:center">
      <div class="kicker rv">The result</div>
      <h2 class="h2big rv">Your own AI brain.<br>Live, and <span style="color:var(--red)">only yours</span>.</h2>
      <p class="p-lede rv" style="margin:0 auto">It answers in your voice, cites which file it drew from, and grows every time you feed the folder. This build ships the marketing (CMO) engine.</p>
      <div class="stats">
        <div class="stat rv"><div class="big" data-count="4">4</div><div class="lbl">Data sources merged</div></div>
        <div class="stat rv"><div class="big" data-count="2">2</div><div class="lbl">Clicks to install Claude Code</div></div>
        <div class="stat rv"><div class="big" data-count="3" data-suffix=" min">3 min</div><div class="lbl">To deploy live</div></div>
        <div class="stat rv"><div class="big" data-count="1">1</div><div class="lbl">Folder runs it all</div></div>
      </div>
    </div>
  </section>

  <!-- P15 ROUTE -->
  <section class="panel" id="route">
    ${orb('rgba(233,13,65,.12)','700','85%','90%','1')}
    <div class="bgword">THE MAP</div>
    <div class="p-wrap">
      <div class="kicker rv">The whole route</div>
      <h2 class="h2big rv">Nine moves, end to end.</h2>
      <p class="p-lede rv">If our team can do it, the students can do it. That's the benchmark.</p>
      <div class="map-row rv">
        ${[['01','Export','LinkedIn · Gmail · ChatGPT · Claude'],['02','One folder','second-brain on the desktop'],['03','Claude Code','VS Code extension · 2 clicks'],['04','Vault','Same folder opened in Obsidian'],['05','Voice DNA','Extract how you sound'],['06','Build','Structure · CLAUDE.md · ingest'],['07','Graph','Obsidian lights up'],['08','Deploy','GitHub fork → Vercel'],['09','Live brain','Upload .md · talk to you']].map((m,i,a)=>`
        <div class="map-step">${i<a.length-1?'<span class="arw">→</span>':''}<div class="mn">${m[0]}</div><h4>${m[1]}</h4><p>${m[2]}</p></div>`).join('')}
      </div>
      <div class="outro rv">
        <div class="mark">Purely <em>Personal</em></div>
        <div class="by">The Second Brain Blueprint · by Daniel Paul</div>
      </div>
    </div>
  </section>

</div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function(){
  var hasGSAP = window.gsap && window.ScrollTrigger;
  if(hasGSAP) gsap.registerPlugin(ScrollTrigger);
  var desktop = window.matchMedia('(min-width: 861px)').matches;

  // ---- obsidian graph ----
  (function(){
    var svg=document.getElementById('graph'); if(!svg) return;
    var W=560,H=520,cx=280,cy=260, NS='http://www.w3.org/2000/svg';
    var groups=['Voice','Business','LinkedIn','Email','ChatGPT','Claude'];
    var nodes=[{x:cx,y:cy,r:20,core:true,label:'YOU'}], edges=[];
    groups.forEach(function(g,gi){
      var ang=(gi/groups.length)*Math.PI*2 - Math.PI/2;
      var gx=cx+Math.cos(ang)*140, gy=cy+Math.sin(ang)*150;
      nodes.push({x:gx,y:gy,r:11,label:g}); var gIdx=nodes.length-1; edges.push([0,gIdx]);
      var leaves=2+(gi%3);
      for(var k=0;k<leaves;k++){
        var a2=ang+(k-(leaves-1)/2)*0.5;
        var lx=Math.max(24,Math.min(W-24,gx+Math.cos(a2)*(58+k*6)));
        var ly=Math.max(24,Math.min(H-24,gy+Math.sin(a2)*(58+k*6)));
        nodes.push({x:lx,y:ly,r:6,label:''}); edges.push([gIdx,nodes.length-1]);
      }
    });
    edges.forEach(function(e){
      var a=nodes[e[0]],b=nodes[e[1]],ln=document.createElementNS(NS,'line');
      ln.setAttribute('x1',a.x);ln.setAttribute('y1',a.y);ln.setAttribute('x2',b.x);ln.setAttribute('y2',b.y);
      ln.setAttribute('class','g-edge g-e'); svg.appendChild(ln);
    });
    nodes.forEach(function(n){
      var g=document.createElementNS(NS,'g'); g.setAttribute('class','g-node g-n');
      var c=document.createElementNS(NS,'circle');
      c.setAttribute('cx',n.x);c.setAttribute('cy',n.y);c.setAttribute('r',n.r);
      if(n.core)c.setAttribute('class','g-core');
      g.appendChild(c);
      if(n.label){var t=document.createElementNS(NS,'text');t.setAttribute('x',n.x);t.setAttribute('y',n.y-n.r-5);t.textContent=n.label;
        if(n.core){t.setAttribute('y',n.y+4);t.setAttribute('style','font-family:Rethink Sans;font-weight:800;fill:#fff;font-size:11px');}
        g.appendChild(t);}
      svg.appendChild(g);
    });
  })();

  function finishDeploy(instant){
    var f=document.getElementById('deployFill'),t=document.getElementById('pctTxt'),s=document.getElementById('dstep');
    if(instant){ if(f)f.style.width='100%'; if(t)t.textContent='Live'; if(s){s.className='done';s.textContent='✔ Deployed · your brain is live';} return; }
    var o={v:0};
    gsap.to(o,{v:100,duration:2.6,ease:'power1.inOut',onUpdate:function(){
      if(f)f.style.width=o.v+'%'; if(t)t.textContent=Math.round(o.v)+'%';
    },onComplete:function(){ if(s){s.className='done';s.textContent='✔ Deployed · your brain is live';} if(t)t.textContent='Live'; }});
  }

  if(!hasGSAP || !desktop){
    // everything visible; complete the deploy bar; done
    finishDeploy(true);
    return;
  }

  // ---- hero intro ----
  gsap.set('#hero h1 .ln',{yPercent:110});
  gsap.set(['.hero-badge','.hero-sub','.hero-logos'],{opacity:0,y:20});
  gsap.timeline({delay:.15})
    .to('.hero-badge',{opacity:1,y:0,duration:.6})
    .to('#hero h1 .ln',{yPercent:0,duration:.9,stagger:.12,ease:'power4.out'},'-=.2')
    .to('.hero-sub',{opacity:1,y:0,duration:.6},'-=.5')
    .to('.hero-logos',{opacity:1,y:0,duration:.6},'-=.4');

  // ---- horizontal scroll ----
  var track=document.getElementById('track');
  var panels=gsap.utils.toArray('.panel');
  var N=panels.length;
  document.getElementById('ptot').textContent=(N<10?'0':'')+N;

  var tween=gsap.to(track,{
    x:function(){return -(track.scrollWidth - window.innerWidth);},
    ease:'none',
    scrollTrigger:{
      trigger:'#hwrap', start:'top top', pin:true, anticipatePin:1, scrub:1,
      end:function(){return '+=' + (track.scrollWidth - window.innerWidth);},
      invalidateOnRefresh:true,
      ${process.env.NOSNAP ? '' : "snap:{snapTo:1/(N-1), duration:{min:.15,max:.5}, ease:'power1.inOut', directional:false, delay:.06},"}
      onUpdate:function(self){
        document.getElementById('prog').style.width=(self.progress*100)+'%';
        var idx=Math.round(self.progress*(N-1))+1;
        document.getElementById('pcur').textContent=(idx<10?'0':'')+idx;
      }
    }
  });

  // ---- per-panel reveals ----
  panels.forEach(function(panel){
    var els=panel.querySelectorAll('.rv');
    if(!els.length) return;
    gsap.fromTo(els,{opacity:0,y:46},{opacity:1,y:0,duration:.85,stagger:.09,ease:'power3.out',
      scrollTrigger:{trigger:panel,containerAnimation:tween,start:'left 62%'}});
    // parallax bg word
    var w=panel.querySelector('.bgword');
    if(w) gsap.fromTo(w,{xPercent:-42},{xPercent:-56,ease:'none',
      scrollTrigger:{trigger:panel,containerAnimation:tween,start:'left right',end:'right left',scrub:true}});
    // cinematic drift on monument photos
    var ph=panel.querySelector('.ph-img');
    if(ph) gsap.fromTo(ph,{scale:1.14,xPercent:2.5},{scale:1.02,xPercent:-2.5,ease:'none',
      scrollTrigger:{trigger:panel,containerAnimation:tween,start:'left right',end:'right left',scrub:true}});
  });

  // ---- convergence draw ----
  gsap.utils.toArray('.flow-path').forEach(function(p){
    var len=p.getTotalLength(); gsap.set(p,{strokeDasharray:len,strokeDashoffset:len});
    gsap.to(p,{strokeDashoffset:0,duration:1.4,ease:'power2.inOut',
      scrollTrigger:{trigger:'#home',containerAnimation:tween,start:'left 55%'}});
  });
  gsap.fromTo('.hub-node',{scale:.6,transformOrigin:'590px 292px',opacity:0},{scale:1,opacity:1,duration:.9,ease:'back.out(1.7)',
    scrollTrigger:{trigger:'#home',containerAnimation:tween,start:'left 50%'}});

  // ---- graph pop ----
  gsap.set('.g-e,.g-n',{opacity:0});
  ScrollTrigger.create({trigger:'#p-build',containerAnimation:tween,start:'left 55%',once:true,onEnter:function(){
    gsap.to('.g-e',{opacity:1,duration:.5,stagger:.015});
    gsap.fromTo('.g-n',{opacity:0,scale:0,transformOrigin:'center'},{opacity:1,scale:1,duration:.5,stagger:.025,ease:'back.out(2)',delay:.1});
  }});

  // ---- deploy fill ----
  ScrollTrigger.create({trigger:'#p-vercel',containerAnimation:tween,start:'left 50%',once:true,onEnter:function(){finishDeploy(false);}});

  // ---- counters ----
  gsap.utils.toArray('.big[data-count]').forEach(function(el){
    var end=+el.getAttribute('data-count'), suf=el.getAttribute('data-suffix')||'', o={v:0};
    ScrollTrigger.create({trigger:'#result',containerAnimation:tween,start:'left 55%',once:true,onEnter:function(){
      gsap.to(o,{v:end,duration:1.3,ease:'power2.out',onUpdate:function(){el.textContent=Math.round(o.v)+suf;}});
    }});
  });

  // ---- floating tiles ----
  gsap.utils.toArray('.tile').forEach(function(t,i){
    gsap.to(t,{y:-10,duration:2.4+i*.2,repeat:-1,yoyo:true,ease:'sine.inOut'});
  });

  ScrollTrigger.refresh();
});
</script>
</body>
</html>`;

fs.writeFileSync(process.env.NOSNAP ? 'test-nosnap.html' : 'second-brain-blueprint-v2.html', html);
console.log('written', (html.length/1024).toFixed(1)+'kb, em-dash check:', html.includes('—') ? 'FOUND' : 'clean');
