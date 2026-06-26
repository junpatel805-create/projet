export const mapImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420">
  <defs>
    <linearGradient id="mapbg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eaf5ff" />
      <stop offset="100%" stop-color="#f7fcf7" />
    </linearGradient>
    <linearGradient id="road" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#93c5fd" />
      <stop offset="100%" stop-color="#bae6fd" />
    </linearGradient>
  </defs>
  <rect width="800" height="420" fill="#f8fafc" />
  <rect x="18" y="18" width="764" height="384" rx="32" fill="url(#mapbg)" stroke="#dbeafe" stroke-width="4" />
  <path d="M120 100 C180 90 210 110 240 110 S320 120 360 100 420 80 460 98" fill="none" stroke="url(#road)" stroke-width="20" stroke-linecap="round" />
  <path d="M140 270 C180 240 225 220 285 240 S380 300 430 280 500 250 540 270" fill="none" stroke="url(#road)" stroke-width="14" stroke-linecap="round" />
  <path d="M300 140 C330 130 360 140 390 170" fill="none" stroke="#dbeafe" stroke-width="10" stroke-linecap="round" />
  <path d="M230 320 C260 300 310 310 340 330" fill="none" stroke="#dbeafe" stroke-width="10" stroke-linecap="round" />
  <circle cx="250" cy="120" r="9" fill="#2563eb" />
  <circle cx="420" cy="175" r="9" fill="#2563eb" />
  <circle cx="500" cy="255" r="9" fill="#2563eb" />
  <circle cx="390" cy="280" r="9" fill="#60a5fa" />
  <text x="252" y="154" fill="#1d4ed8" font-family="Inter, sans-serif" font-size="28" font-weight="700">Surat</text>
  <text x="190" y="190" fill="#475569" font-family="Inter, sans-serif" font-size="18">દુમસ</text>
  <text x="430" y="105" fill="#475569" font-family="Inter, sans-serif" font-size="18">કાડોદરા</text>
  <rect x="40" y="40" width="118" height="36" rx="14" fill="#ffffff" stroke="#d1d5db" stroke-width="1" />
  <text x="56" y="64" fill="#2563eb" font-family="Inter, sans-serif" font-size="18" font-weight="700">Maps</text>
  <path d="M128 50 L144 50 L144 66" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" />
  <path d="M128 66 L144 50" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" />
  <rect x="28" y="48" width="10" height="10" rx="2" fill="#dbeafe" />
</svg>
`)}`;
