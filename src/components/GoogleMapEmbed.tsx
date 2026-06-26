import * as React from "react";

const DEFAULT_SRC =
  "https://www.google.com/maps?q=Surat,+India&output=embed";

interface GoogleMapEmbedProps {
  src?: string;
  title?: string;
  aspectRatio?: string;
  height?: string;
  className?: string;
}

export function GoogleMapEmbed({
  src = DEFAULT_SRC,
  title = "Google Map preview",
  aspectRatio = "56.25%",
  height,
  className,
}: GoogleMapEmbedProps) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        paddingBottom: height ? undefined : aspectRatio,
        height: height ?? 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src={src}
        title={title}
        style={{
          border: 0,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
