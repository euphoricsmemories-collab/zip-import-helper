import { describe, expect, it } from "vitest";
import { LOCATION_HOURS, petclinEmbedUrl, PETCLIN_MAP_URL, PETCLIN_DIRECTIONS_URL } from "@/lib/petclinic-location";

describe("Owner-provided clinic location", () => {
  it("targets the exact point resolved from the owner's Google Maps link", () => {
    const url = new URL(petclinEmbedUrl());
    expect(url.searchParams.get("q")).toBe("-10.285294,-36.555820");
  });
  it("opens the owner's original location link", () => {
    expect(PETCLIN_MAP_URL).toBe("https://maps.app.goo.gl/nExbLgwUHJczPncF7");
  });

  it("embeds a public map without a key or a Maps Platform endpoint", () => {
    const url = new URL(petclinEmbedUrl());
    expect(url.origin).toBe("https://maps.google.com");
    expect(url.pathname).toBe("/maps");
    expect(url.searchParams.get("output")).toBe("embed");
    expect(url.searchParams.has("key")).toBe(false);
  });

  it("opens directions to the clinic using Maps' current-location default origin", () => {
    const url = new URL(PETCLIN_DIRECTIONS_URL);
    expect(url.origin).toBe("https://www.google.com");
    expect(url.pathname).toBe("/maps/dir/");
    expect(url.searchParams.get("api")).toBe("1");
    expect(url.searchParams.get("destination")).toBe("-10.285294,-36.555820");
    expect(url.searchParams.has("origin")).toBe(false);
    expect(url.searchParams.has("key")).toBe(false);
  });

  it("shows the confirmed weekday opening hours", () => {
    expect(LOCATION_HOURS[0]).toEqual({ days: "Segunda a sexta-feira", time: "08h às 18h" });
  });

  it("shows only the confirmed Saturday opening hours", () => {
    expect(LOCATION_HOURS).toHaveLength(2);
    expect(LOCATION_HOURS[1]).toEqual({ days: "Sábado", time: "08h às 12h" });
  });
});