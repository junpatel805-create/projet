const GOOGLE_STATIC_MAP_BASE = "https://maps.googleapis.com/maps/api/staticmap";
const params = [
  "center=Surat,India",
  "zoom=12",
  "size=640x320",
  "scale=2",
  "maptype=roadmap",
  "markers=color:blue%7Clabel:S%7CSurat,India",
];
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const mapImage = apiKey
  ? `${GOOGLE_STATIC_MAP_BASE}?${params.join("&")}&key=${encodeURIComponent(apiKey)}`
  : "https://via.placeholder.com/640x320?text=Google+Map+Preview";
