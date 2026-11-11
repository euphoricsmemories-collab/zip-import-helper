export const CAROUSEL_INTERVAL = 4000;
export const CAROUSEL_TRANSITION = 800;
export const CAROUSEL_RESUME_DELAY = 6000;

export function carouselPosition(index: number, active: number, count: number) {
  const offset = (index - active + count) % count;
  if (offset === 0) return "center";
  if (offset === 1) return "right";
  if (offset === count - 1) return "left";
  return "hidden";
}