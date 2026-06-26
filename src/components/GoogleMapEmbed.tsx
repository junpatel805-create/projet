export function GoogleMapEmbed({ className }: { className?: string }) {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800' preserveAspectRatio='xMidYMid slice'>
      <rect width='1200' height='800' rx='32' ry='32' fill='%23f8fafc' />
      <rect x='60' y='60' width='1080' height='680' rx='28' fill='%23e2e8f0' />
      <path d='M180 220 C260 180 340 260 420 230 S620 240 700 210 S880 240 940 220' fill='none' stroke='%23cbd5e1' stroke-width='28' stroke-linecap='round' />
      <path d='M120 400 C200 360 280 420 360 390 S540 400 620 370 S780 420 860 390' fill='none' stroke='%23d1d5db' stroke-width='24' stroke-linecap='round' />
      <path d='M320 120 C380 130 460 140 520 110 S700 120 760 90' fill='none' stroke='%2394a3b8' stroke-width='20' stroke-linecap='round' />
      <path d='M180 540 C240 560 310 520 380 540 S540 560 600 520 S700 580 780 540' fill='none' stroke='%23cbd5e1' stroke-width='16' stroke-linecap='round' />
      <path d='M450 180 L510 210 L470 260 L410 230 Z' fill='%23fff' stroke='%239ca3af' stroke-width='10' />
      <path d='M520 410 A18 18 0 1 1 519.9 410' fill='%23ffffff' stroke='%234b5563' stroke-width='10' />
      <path d='M520 385 L520 450' stroke='%234b5563' stroke-width='8' stroke-linecap='round' />
      <path d='M800 290 A18 18 0 1 1 799.9 290' fill='%23ffffff' stroke='%234b5563' stroke-width='10' />
      <path d='M800 265 L800 330' stroke='%234b5563' stroke-width='8' stroke-linecap='round' />
      <path d='M210 650 A18 18 0 1 1 209.9 650' fill='%23ffffff' stroke='%234b5563' stroke-width='10' />
      <path d='M210 625 L210 690' stroke='%234b5563' stroke-width='8' stroke-linecap='round' />
      <rect x='120' y='120' width='140' height='68' rx='15' fill='%23ffffff' opacity='0.9' />
      <text x='140' y='155' font-family='Inter, sans-serif' font-size='34' fill='%233c4c63' font-weight='700'>Surat</text>
      <text x='140' y='190' font-family='Inter, sans-serif' font-size='16' fill='%236b7280'>Nearby professionals</text>
      <rect x='760' y='610' width='300' height='120' rx='18' fill='%23ffffff' opacity='0.92' />
      <text x='788' y='650' font-family='Inter, sans-serif' font-size='18' fill='%232f3651' font-weight='700'>Showing 12 pros</text>
      <text x='788' y='680' font-family='Inter, sans-serif' font-size='14' fill='%236b7280'>within 5 km · Surat</text>
    </svg>
  `;

  const encoded = encodeURIComponent(svg.trim());

  return (
    <div className={`overflow-hidden rounded-3xl border border-border bg-card shadow-soft ${className ?? ""}`}>
      <img
        src={`data:image/svg+xml;utf8,${encoded}`}
        alt="Static map showing nearby professionals"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
