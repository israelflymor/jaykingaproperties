import { describe, expect, it } from "vitest";
import { buildInspectionMessage, whatsappLink } from "./whatsapp";

describe("inspection WhatsApp message", () => {
  const msg = buildInspectionMessage({ property: "The Monolith Duplex", date: "Sat, 7 Nov 2026", time: "11:00 AM", name: "Ada", phone: "0803" });
  it("includes property, date and time", () => {
    expect(msg).toContain("The Monolith Duplex");
    expect(msg).toContain("Sat, 7 Nov 2026");
    expect(msg).toContain("11:00 AM");
  });
  it("targets the company WhatsApp number", () => {
    expect(whatsappLink(msg).startsWith("https://wa.me/2349014727494?text=")).toBe(true);
  });
});
