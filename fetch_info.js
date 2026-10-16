const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', err => reject(err));
    }).on('error', err => reject(err));
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function getVideoInfo(videoId) {
  try {
    const html = await fetchUrl(`https://www.youtube.com/watch?v=${videoId}`);
    const title = html.match(/<title>(.*?)<\/title>/);
    return {
      id: videoId,
      title: title ? title[1].replace(' - YouTube', '') : 'Unknown Video'
    };
  } catch (e) {
    return { id: videoId, title: 'Video ' + videoId };
  }
}

async function run() {
  if (!fs.existsSync('public/images')) {
    fs.mkdirSync('public/images', { recursive: true });
  }

  // Download avatars
  const techAvatar = 'https://yt3.googleusercontent.com/ZoO7uyYvN6323dK6mptyRzlp4AAjpEbPZi_mGp2dS9brme1xk_LU2UeM04HuPCeaziyPmNAFew=s900-c-k-c0x00ffffff-no-rj';
  const lifeAvatar = 'https://yt3.googleusercontent.com/ke-iJQK_wvFnsb9_F_6YIKEquEt9GR6qmPEibAhAfqR5UcK3Udeucdbr68FgWYK_da2SVCPxMEo=s900-c-k-c0x00ffffff-no-rj';
  
  await downloadFile(techAvatar, 'public/images/shazaam-tech-avatar.jpg');
  await downloadFile(lifeAvatar, 'public/images/shazaam-life-avatar.jpg');
  console.log('Downloaded channel avatars.');

  const techIds = ['oO8I0Ghtvj8', 'I7E4bV5HBZg', 'mhwG2bUky04', 'cnAiJwT_tJY'];
  const lifeIds = ['6IxMvfr0qVE', 'ezvO3fWNU74', 'yskolSlmeAI', 'Vm7-frFi2jI'];

  console.log('\n--- CallMeShazzam TECH Videos ---');
  for (const id of techIds) {
    const info = await getVideoInfo(id);
    console.log(id, ':', info.title);
    await downloadFile(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`, `public/images/thumb-${id}.jpg`);
  }

  console.log('\n--- LifeofShazzam Videos ---');
  for (const id of lifeIds) {
    const info = await getVideoInfo(id);
    console.log(id, ':', info.title);
    await downloadFile(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`, `public/images/thumb-${id}.jpg`);
  }
}

run();
