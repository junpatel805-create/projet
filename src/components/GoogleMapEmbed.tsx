import * as React from "react";

const DEFAULT_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119180.14490864215!2d72.76870768768452!3d21.170240118876126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b6f5503a4d%3A0x7e067b4fd6febf44!2sSurat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1700873475441!5m2!1sen!2sus";

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
