const fs = require('fs');
const src = {
  linkedin: 'node_modules/devicon/icons/linkedin/linkedin-original.svg',
  gmail: 'node_modules/super-tiny-icons/images/svg/gmail.svg',
  chatgpt: 'node_modules/@lobehub/icons-static-svg/icons/openai.svg',
  claude: 'node_modules/@lobehub/icons-static-svg/icons/claude-color.svg',
  claudecode: 'node_modules/@lobehub/icons-static-svg/icons/claudecode-color.svg',
  obsidian: 'node_modules/@lobehub/icons-static-svg/icons/obsidian-color.svg',
  vercel: 'node_modules/devicon/icons/vercel/vercel-original.svg',
  github: 'node_modules/devicon/icons/github/github-original.svg',
  vscode: 'node_modules/devicon/icons/vscode/vscode-original.svg',
};
const out = {};
for (const [name, file] of Object.entries(src)) {
  let s = fs.readFileSync(file, 'utf8');
  s = s.replace(/<\?xml[^>]*\?>/g, '').replace(/<title>[^<]*<\/title>/g, '');
  // strip white background rect in gmail
  if (name === 'gmail') s = s.replace(/<path\s+d="m0 0H512V512H0"\s+fill="#fff"\s*\/>/, '');
  // namespace ids to avoid collisions
  s = s.replace(/id="([^"]+)"/g, `id="${name}-$1"`);
  s = s.replace(/url\(#([^)]+)\)/g, `url(#${name}-$1)`);
  s = s.replace(/(xlink:href|href)="#([^"]+)"/g, `$1="#${name}-$2"`);
  // normalize size attrs -> fill parent
  s = s.replace(/<svg([^>]*)>/, (m, attrs) => {
    attrs = attrs.replace(/\s(width|height|style)="[^"]*"/g, '');
    return `<svg${attrs} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">`;
  });
  out[name] = s.trim();
}
fs.writeFileSync('logos2.json', JSON.stringify(out));
console.log('assembled:', Object.keys(out).join(', '));
console.log('sizes:', Object.entries(out).map(([k,v])=>k+':'+(v.length/1024).toFixed(1)+'kb').join(' '));
