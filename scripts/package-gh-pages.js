import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const outDir = path.join(rootDir, 'gh-pages');

console.log('🚀 Packaging GitHub Pages static site bundle...');

// 1. Clean existing output
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// 2. Add .nojekyll (CRITICAL: prevents GitHub Pages from ignoring _next directory)
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
console.log('✓ Created .nojekyll');

// 3. Copy index.html and 404.html
const serverAppDir = path.join(rootDir, '.next', 'server', 'app');
if (fs.existsSync(path.join(serverAppDir, 'index.html'))) {
  fs.copyFileSync(path.join(serverAppDir, 'index.html'), path.join(outDir, 'index.html'));
  console.log('✓ Copied index.html');
}
if (fs.existsSync(path.join(serverAppDir, '_not-found.html'))) {
  fs.copyFileSync(path.join(serverAppDir, '_not-found.html'), path.join(outDir, '404.html'));
  console.log('✓ Copied 404.html');
}

// Helper to copy category HTML pages (e.g. topic, designer-genes)
function copyHtmlCategory(categoryName) {
  const srcCatDir = path.join(serverAppDir, categoryName);
  if (fs.existsSync(srcCatDir)) {
    const destCatDir = path.join(outDir, categoryName);
    fs.mkdirSync(destCatDir, { recursive: true });

    const files = fs.readdirSync(srcCatDir);
    let count = 0;
    for (const file of files) {
      if (file.endsWith('.html')) {
        const slug = file.replace('.html', '');
        fs.copyFileSync(path.join(srcCatDir, file), path.join(destCatDir, file));
        const subFolder = path.join(destCatDir, slug);
        fs.mkdirSync(subFolder, { recursive: true });
        fs.copyFileSync(path.join(srcCatDir, file), path.join(subFolder, 'index.html'));
        count++;
      }
    }
    console.log(`✓ Copied ${count} ${categoryName} pages`);
  }
}

// 4. Copy subpath pages
copyHtmlCategory('topic');
copyHtmlCategory('designer-genes');

// 5. Copy remote-sensing HTML page
const remoteSensingFile = path.join(serverAppDir, 'remote-sensing.html');
if (fs.existsSync(remoteSensingFile)) {
  const remoteDestDir = path.join(outDir, 'remote-sensing');
  fs.mkdirSync(remoteDestDir, { recursive: true });
  fs.copyFileSync(remoteSensingFile, path.join(outDir, 'remote-sensing.html'));
  fs.copyFileSync(remoteSensingFile, path.join(remoteDestDir, 'index.html'));
  console.log('✓ Copied remote-sensing standalone page');
}

// 6. Copy _next/static folder
const staticSrc = path.join(rootDir, '.next', 'static');
const staticDest = path.join(outDir, '_next', 'static');
if (fs.existsSync(staticSrc)) {
  fs.cpSync(staticSrc, staticDest, { recursive: true });
  console.log('✓ Copied _next/static assets (CSS, JS chunks)');
}

// 7. Copy public/ folder assets (images, etc.)
const publicDir = path.join(rootDir, 'public');
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, outDir, { recursive: true });
  console.log('✓ Copied public assets (/images/milky_way_header.jpg, etc.)');
}

console.log('\n🎉 Successfully packaged GitHub Pages site into gh-pages/');
