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
      <stop offset="0%" style="stop-color:#070d1a"/>
      <stop offset="30%" style="stop-color:#0f1f3d"/>
      <stop offset="60%" style="stop-color:#1B3A6B"/>
      <stop offset="100%" style="stop-color:#1e4d8c"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#D97706"/>
      <stop offset="100%" style="stop-color:#FBBF24"/>
    </linearGradient>
    <linearGradient id="glow" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" style="stop-color:#D97706;stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:#D97706;stop-opacity:0"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000" flood-opacity="0.5"/>
    </filter>
    <clipPath id="roundRect">
      <rect x="0" y="0" width="${width}" height="${height}" rx="0" ry="0"/>
    </clipPath>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- Grid pattern overlay -->
  <g opacity="0.04">
    ${Array.from({ length: 30 }, (_, i) => `<line x1="${i * 40}" y1="0" x2="${i * 40}" y2="${height}" stroke="white" stroke-width="1"/>`).join('\n    ')}
    ${Array.from({ length: 16 }, (_, i) => `<line x1="0" y1="${i * 40}" x2="${width}" y2="${i * 40}" stroke="white" stroke-width="1"/>`).join('\n    ')}
  </g>

  <!-- Decorative circles -->
  <circle cx="1050" cy="120" r="180" fill="none" stroke="#D97706" stroke-width="1" opacity="0.08"/>
  <circle cx="1050" cy="120" r="130" fill="none" stroke="#D97706" stroke-width="1" opacity="0.05"/>
  <circle cx="1050" cy="120" r="80" fill="none" stroke="#D97706" stroke-width="0.5" opacity="0.03"/>

  <!-- Top-left corner accent -->
  <rect x="0" y="0" width="6" height="120" fill="url(#accent)" opacity="0.8"/>

  <!-- Glow effect behind title -->
  <ellipse cx="350" cy="250" rx="350" ry="120" fill="url(#glow)"/>

  <!-- Logo icon area -->
  <g transform="translate(70, 140)">
    <rect x="0" y="0" width="64" height="64" rx="14" fill="url(#accent)" filter="url(#shadow)"/>
    <text x="32" y="44" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="white" text-anchor="middle">C</text>
  </g>

  <!-- Brand label -->
  <text x="150" y="184" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="#D97706" letter-spacing="4">CLAUDE MASTER</text>

  <!-- Main title -->
  <text x="70" y="290" font-family="Arial, sans-serif" font-size="68" font-weight="900" fill="white" letter-spacing="-1">Claude AI</text>
  <text x="70" y="365" font-family="Arial, sans-serif" font-size="52" font-weight="700" fill="#e2e8f0" letter-spacing="-0.5">학습 플랫폼</text>

  <!-- Subtitle -->
  <text x="70" y="425" font-family="Arial, sans-serif" font-size="22" fill="#94a3b8">Claude의 모든 기능을 한 곳에서 학습하세요</text>

  <!-- Feature tags -->
  <g transform="translate(70, 470)">
    <rect x="0" y="0" width="140" height="36" rx="18" fill="#D97706" fill-opacity="0.15" stroke="#D97706" stroke-width="1" stroke-opacity="0.3"/>
    <text x="70" y="23" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#FBBF24" text-anchor="middle">Claude Code</text>

    <rect x="155" y="0" width="140" height="36" rx="18" fill="#8B5CF6" fill-opacity="0.15" stroke="#8B5CF6" stroke-width="1" stroke-opacity="0.3"/>
    <text x="225" y="23" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#A78BFA" text-anchor="middle">Claude Work</text>

    <rect x="310" y="0" width="100" height="36" rx="18" fill="#10B981" fill-opacity="0.15" stroke="#10B981" stroke-width="1" stroke-opacity="0.3"/>
    <text x="360" y="23" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#34D399" text-anchor="middle">API</text>

    <rect x="425" y="0" width="130" height="36" rx="18" fill="#3B82F6" fill-opacity="0.15" stroke="#3B82F6" stroke-width="1" stroke-opacity="0.3"/>
    <text x="490" y="23" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#60A5FA" text-anchor="middle">Agent SDK</text>

    <rect x="570" y="0" width="130" height="36" rx="18" fill="#EF4444" fill-opacity="0.15" stroke="#EF4444" stroke-width="1" stroke-opacity="0.3"/>
    <text x="635" y="23" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#F87171" text-anchor="middle">Prompts</text>
  </g>

  <!-- Bottom bar -->
  <rect x="0" y="590" width="${width}" height="40" fill="#050a14" opacity="0.6"/>
  <rect x="0" y="588" width="${width}" height="2" fill="url(#accent)" opacity="0.4"/>

  <!-- URL in bottom bar -->
  <text x="70" y="616" font-family="Arial, sans-serif" font-size="16" fill="#64748b">claude.dreamitbiz.com</text>

  <!-- Powered by text -->
  <text x="1130" y="616" font-family="Arial, sans-serif" font-size="14" fill="#475569" text-anchor="end">Powered by Anthropic Claude</text>
</svg>`;

async function generate() {
  try {
    await sharp(Buffer.from(svg))
      .png({ quality: 95, compressionLevel: 9 })
      .toFile(join(outputDir, 'default.png'));

    const stats = (await import('fs')).statSync(join(outputDir, 'default.png'));
    console.log(`OG image generated: public/og/default.png (${(stats.size / 1024).toFixed(1)}KB)`);
    console.log(`Dimensions: ${width}x${height}`);
  } catch (err) {
    console.error('Error generating OG image:', err);
    process.exit(1);
  }
}

generate();
