import { describe, expect, it } from "vitest";
import { LOCATION_HOURS, petclinEmbedUrl, PETCLIN_MAP_URL } from "@/lib/petclinic-location";

describe("Owner-provided clinic location", () => {
  it("targets the exact point resolved from the owner's Google Maps link", () => {
    const url = new URL(petclinEmbedUrl("public-test-key"));
    expect(url.searchParams.get("q")).toBe("-10.285294,-36.555820");
  });
  it("opens the owner's original location link", () => {
    expect(PETCLIN_MAP_URL).toBe("https://maps.app.goo.gl/nExbLgwUHJczPncF7");
  });

  it("shows the confirmed weekday opening hours", () => {
    expect(LOCATION_HOURS[0]).toEqual({ days: "Segunda a sexta-feira", time: "08h às 18h" });
  });

  it("shows only the confirmed Saturday opening hours", () => {
    expect(LOCATION_HOURS).toHaveLength(2);
    expect(LOCATION_HOURS[1]).toEqual({ days: "Sábado", time: "08h às 12h" });
  });
});