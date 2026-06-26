export const mapImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eef2ff" />
      <stop offset="100%" stop-color="#f0fdf4" />
    </linearGradient>
    <linearGradient id="road" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#c7d2fe" />
      <stop offset="100%" stop-color="#e0f2fe" />
    </linearGradient>
  </defs>
  <rect width="800" height="420" fill="#f8fafc" />
  <rect x="24" y="24" width="752" height="372" rx="32" fill="url(#bg)" />
  <g opacity="0.8">
    <path d="M80 120 C140 100 210 90 260 120 S380 180 460 160" fill="none" stroke="url(#road)" stroke-width="22" stroke-linecap="round" />
    <path d="M160 260 C220 240 300 220 360 260 S480 320 560 300" fill="none" stroke="url(#road)" stroke-width="16" stroke-linecap="round" />
    <circle cx="160" cy="120" r="8" fill="#fff" stroke="#60a5fa" stroke-width="8" />
    <circle cx="260" cy="140" r="8" fill="#fff" stroke="#60a5fa" stroke-width="8" />
    <circle cx="420" cy="170" r="8" fill="#fff" stroke="#2563eb" stroke-width="8" />
    <circle cx="500" cy="280" r="8" fill="#fff" stroke="#2563eb" stroke-width="8" />
    <rect x="120" y="280" width="260" height="82" rx="18" fill="#eff6ff" />
    <rect x="430" y="60" width="160" height="52" rx="18" fill="#eff6ff" />
  </g>
  <g>
    <path d="M260 98c-11 0-20 9-20 20 0 9.2 5.4 17.1 13 19.6V164l7-5 7 5v-26.4c7.6-2.5 13-10.4 13-19.6 0-11-9-20-20-20z" fill="#2563eb" />
    <circle cx="260" cy="118" r="8" fill="#fff" />
  </g>
</svg>
`)}`;
