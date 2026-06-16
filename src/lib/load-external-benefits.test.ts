import { describe, expect, it } from "vitest";
import { loadExternalBenefits } from "./load-external-benefits";

describe("loadExternalBenefits", () => {
  it("loads benefits from the external JSON file", async () => {
    const benefits = await loadExternalBenefits();
    expect(benefits.length).toBeGreaterThan(0);
    expect(benefits[0]).toHaveProperty("name");
    expect(benefits[0]).toHaveProperty("applyUrl");
  });
});
