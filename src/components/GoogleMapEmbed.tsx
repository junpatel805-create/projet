type GoogleMapEmbedProps = {
  className?: string;
  location?: string;
  title?: string;
};

export function GoogleMapEmbed({
  className,
  location = "Surat, Gujarat, India",
  title = "Map location",
}: GoogleMapEmbedProps) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;

  return (
    <div className={`overflow-hidden rounded-3xl border border-border bg-card shadow-soft ${className ?? ""}`}>
      <iframe
        title={title}
        src={mapSrc}
        className="h-full w-full min-h-[260px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
