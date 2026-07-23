const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport:{width:1440,height:900}, deviceScaleFactor:1.5 });
  p.on('pageerror', e => console.log('PAGEERR', e.message));
  await p.goto('file:///home/claude/diagram/test-nosnap.html', { waitUntil:'load' });
  await p.waitForTimeout(1800);
  for (let k=0;k<15;k++){
    await p.evaluate(_y=>window.scrollTo(0,_y), 900 + k*1440);
    await p.waitForTimeout(1500);
    const id = await p.evaluate(()=>{const c=document.elementFromPoint(720,450);const pl=c?c.closest('.panel'):null;return (pl?pl.id:'?')+' x='+Math.round(new DOMMatrix(getComputedStyle(document.getElementById('track')).transform).e);});
    console.log('k='+k, id);
    await p.screenshot({path:`z${k}.png`});
  }
  await b.close();
})();
