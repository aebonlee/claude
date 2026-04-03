import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '..', 'public', 'og');

mkdirSync(outputDir, { recursive: true });

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f1b33"/>
      <stop offset="50%" style="stop-color:#1B3A6B"/>
      <stop offset="100%" style="stop-color:#2a5298"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#D97706"/>
      <stop offset="100%" style="stop-color:#F59E0B"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect x="60" y="500" width="200" height="4" rx="2" fill="url(#accent)"/>
  <text x="60" y="260" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white">Claude Master</text>
  <text x="60" y="340" font-family="Arial, sans-serif" font-size="36" fill="#D97706">Claude AI 학습 플랫폼</text>
  <text x="60" y="420" font-family="Arial, sans-serif" font-size="24" fill="#94a3b8">Claude Code · Claude Work · API · Agent SDK</text>
  <text x="60" y="560" font-family="Arial, sans-serif" font-size="20" fill="#64748b">claude.dreamitbiz.com</text>
</svg>`;

async function generate() {
  try {
    await sharp(Buffer.from(svg))
      .png()
      .toFile(join(outputDir, 'default.png'));
    console.log('OG image generated: public/og/default.png');
  } catch (err) {
    console.error('Error generating OG image:', err);
  }
}

generate();
