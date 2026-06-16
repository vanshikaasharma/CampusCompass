import { describe, expect, it } from "vitest";
import { parseBenefitFiltersFromSearchParams } from "./validations";

describe("parseBenefitFiltersFromSearchParams", () => {
  it("uses defaults when no query params are provided", () => {
    const filters = parseBenefitFiltersFromSearchParams(new URLSearchParams());
    expect(filters).toEqual({
      studentAudience: "international",
      province: "all",
      category: "all",
      studentType: "all",
    });
  });

  it("parses valid query params", () => {
    const filters = parseBenefitFiltersFromSearchParams(
      new URLSearchParams({
        studentAudience: "domestic",
        province: "ON",
        category: "grant",
        studentType: "college",
      }),
    );

    expect(filters.studentAudience).toBe("domestic");
    expect(filters.province).toBe("ON");
  });

  it("rejects invalid province values", () => {
    expect(() =>
      parseBenefitFiltersFromSearchParams(
        new URLSearchParams({ province: "INVALID" }),
      ),
    ).toThrow();
  });
});

describe("createBenefitSchema", () => {
  it("accepts a valid benefit payload", async () => {
    const { createBenefitSchema } = await import("./validations");
    const result = createBenefitSchema.safeParse({
      id: "test-benefit",
      name: "Test Benefit",
      category: "discount",
      audience: "both",
      provinces: ["national"],
      provider: "Test Co",
      description: "A short description of the test benefit here.",
      eligibilitySummary: "Open to all students with valid enrollment proof.",
      applyUrl: "https://example.com",
    });
    expect(result.success).toBe(true);
  });
});
