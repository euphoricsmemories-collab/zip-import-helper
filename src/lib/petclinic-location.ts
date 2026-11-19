// Exact coordinates from the redirect of the clinic link supplied by the owner.
export const PETCLIN_MAP_POINT = "-10.285294,-36.555820";
export const PETCLIN_MAP_URL = "https://maps.app.goo.gl/nExbLgwUHJczPncF7";
// Maps sharing and directions URLs are public links, not Maps Platform APIs.
export const PETCLIN_DIRECTIONS_URL = `https://www.google.com/maps/dir/?${new URLSearchParams({
  api: "1",
  destination: PETCLIN_MAP_POINT,
})}`;

export const LOCATION_HOURS = [
  { days: "Segunda a sexta-feira", time: "08h às 18h" },
  { days: "Sábado", time: "08h às 12h" },
] as const;

export function petclinEmbedUrl(): string {
  return `https://maps.google.com/maps?${new URLSearchParams({
    q: PETCLIN_MAP_POINT,
    z: "17",
    hl: "pt-BR",
    output: "embed",
  })}`;
}