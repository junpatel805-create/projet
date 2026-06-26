export function GoogleMapEmbed({ className }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-border bg-card shadow-soft ${className ?? ""}`}>
      <img
        src="/static-map.svg"
        alt="Static map showing nearby professionals"
        className="h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
