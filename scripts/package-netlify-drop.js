import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const dropDir = path.join(rootDir, 'netlify-drop');
const zipFile = path.join(rootDir, 'nova-space-netlify-drop.zip');

console.log('🚀 Packaging Netlify Drop deployable bundle...');

// 1. Clean existing output
if (fs.existsSync(dropDir)) {
  fs.rmSync(dropDir, { recursive: true, force: true });
}
if (fs.existsSync(zipFile)) {
  fs.unlinkSync(zipFile);
}
fs.mkdirSync(dropDir, { recursive: true });

// 2. Copy index.html and 404.html
const serverAppDir = path.join(rootDir, '.next', 'server', 'app');
if (fs.existsSync(path.join(serverAppDir, 'index.html'))) {
  fs.copyFileSync(path.join(serverAppDir, 'index.html'), path.join(dropDir, 'index.html'));
  console.log('✓ Copied index.html');
}
if (fs.existsSync(path.join(serverAppDir, '_not-found.html'))) {
  fs.copyFileSync(path.join(serverAppDir, '_not-found.html'), path.join(dropDir, '404.html'));
  console.log('✓ Copied 404.html');
}

// 3. Copy topic HTML pages
const topicSrcDir = path.join(serverAppDir, 'topic');
if (fs.existsSync(topicSrcDir)) {
  const topicDestDir = path.join(dropDir, 'topic');
  fs.mkdirSync(topicDestDir, { recursive: true });

  const files = fs.readdirSync(topicSrcDir);
  for (const file of files) {
    if (file.endsWith('.html')) {
      const slug = file.replace('.html', '');
      // Copy both as topic/<slug>.html and topic/<slug>/index.html for clean URLs
      fs.copyFileSync(path.join(topicSrcDir, file), path.join(topicDestDir, file));
      const subFolder = path.join(topicDestDir, slug);
      fs.mkdirSync(subFolder, { recursive: true });
      fs.copyFileSync(path.join(topicSrcDir, file), path.join(subFolder, 'index.html'));
    }
  }
  console.log('✓ Copied topic pages (aerodynamics, propulsion, astronomy, physics, math, competitions)');
}

// 4. Copy _next/static folder
const staticSrc = path.join(rootDir, '.next', 'static');
const staticDest = path.join(dropDir, '_next', 'static');
if (fs.existsSync(staticSrc)) {
  fs.cpSync(staticSrc, staticDest, { recursive: true });
  console.log('✓ Copied _next/static assets (CSS, JS chunks)');
}

// 5. Copy public/ folder assets (images, headers)
const publicDir = path.join(rootDir, 'public');
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, dropDir, { recursive: true });
  console.log('✓ Copied public assets (/images/milky_way_header.jpg, etc.)');
}

// 6. Create Netlify _redirects file
const redirectsContent = `
# Netlify Redirects & SPA Fallback
/topic/aerodynamics    /topic/aerodynamics/index.html   200
/topic/propulsion      /topic/propulsion/index.html     200
/topic/astronomy       /topic/astronomy/index.html      200
/topic/physics         /topic/physics/index.html        200
/topic/applied-math    /topic/applied-math/index.html   200
/topic/competitions    /topic/competitions/index.html   200
/*                     /index.html                      200
`;
fs.writeFileSync(path.join(dropDir, '_redirects'), redirectsContent.trim());
console.log('✓ Generated Netlify _redirects configuration');

// 7. Zip the directory
console.log('📦 Creating nova-space-netlify-drop.zip ...');
execSync(`cd "${dropDir}" && zip -r "${zipFile}" .`, { stdio: 'inherit' });

const stats = fs.statSync(zipFile);
const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
console.log(`\n🎉 Successfully generated downloadable Netlify bundle: ${zipFile} (${sizeMb} MB)`);
console.log('👉 You can upload this zip file directly to https://app.netlify.com/drop for instant deployment!');
