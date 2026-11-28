import { describe, expect, it } from "vitest";

import { serviceWhatsappUrl } from "@/lib/petclinic";

describe("Service WhatsApp links", () => {
  it("uses the clinic number and encodes the selected service in the requested message", () => {
    expect(serviceWhatsappUrl("Banho e Tosa")).toBe(
      "https://wa.me/558299605249?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20Banho%20e%20Tosa.",
    );
  });
});
