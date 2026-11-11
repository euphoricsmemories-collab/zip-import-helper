import { describe, expect, it } from "vitest";
import { CAROUSEL_INTERVAL, CAROUSEL_TRANSITION, carouselPosition } from "@/lib/about-carousel";

describe("About carousel rules", () => {
  it("rotates every four seconds", () => { expect(CAROUSEL_INTERVAL).toBe(4000); });
  it("transitions over 800 milliseconds", () => { expect(CAROUSEL_TRANSITION).toBe(800); });
  it("moves right to center, center to left and left to right", () => {
    expect([0, 1, 2].map((index) => carouselPosition(index, 0, 3))).toEqual(["center", "right", "left"]);
    expect([0, 1, 2].map((index) => carouselPosition(index, 1, 3))).toEqual(["left", "center", "right"]);
  });
  it("keeps only three positions visible with additional photos", () => {
    expect([0, 1, 2, 3, 4].map((index) => carouselPosition(index, 4, 5))).toEqual(["right", "hidden", "hidden", "left", "center"]);
  });
});