// Exact coordinates from the redirect of the clinic link supplied by the owner.
export const PETCLIN_MAP_POINT = "-10.285294,-36.555820";
export const PETCLIN_MAP_URL = "https://maps.app.goo.gl/nExbLgwUHJczPncF7";

export const LOCATION_HOURS = [
  { days: "Segunda a sexta-feira", time: "08h às 18h" },
  { days: "Sábado", time: "08h às 12h" },
] as const;

export function petclinEmbedUrl(browserKey: string): string {
  return `https://www.google.com/maps/embed/v1/place?${new URLSearchParams({
    key: browserKey,
    q: PETCLIN_MAP_POINT,
    zoom: "17",
    language: "pt-BR",
    region: "BR",
  })}`;
}