import { describe, expect, it } from "vitest";
import { filterBenefits } from "./filter";
import { SEED_BENEFITS } from "../data/seed-benefits";
import type { BenefitFilters } from "./types";

const intlOntarioUniversity: BenefitFilters = {
  studentAudience: "international",
  province: "ON",
  category: "all",
  studentType: "university",
};

describe("filterBenefits", () => {
  it("shows international and both benefits to international students", () => {
    const results = filterBenefits(SEED_BENEFITS, {
      studentAudience: "international",
      province: "all",
      category: "all",
      studentType: "all",
    });

    const ids = results.map((b) => b.id);
    expect(ids).toContain("uoft-pearson");
    expect(ids).toContain("unidays");
    expect(ids).not.toContain("canada-student-grant");
  });

  it("hides domestic-only benefits from international students", () => {
    const results = filterBenefits(SEED_BENEFITS, intlOntarioUniversity);
    expect(results.map((b) => b.id)).not.toContain("canada-student-grant");
  });

  it("filters by province including national benefits", () => {
    const results = filterBenefits(SEED_BENEFITS, intlOntarioUniversity);

    const ids = results.map((b) => b.id);
    expect(ids).toContain("uoft-pearson");
    expect(ids).toContain("unidays");
    expect(ids).not.toContain("bc-graduate");
  });

  it("filters by category", () => {
    const results = filterBenefits(SEED_BENEFITS, {
      studentAudience: "international",
      province: "all",
      category: "discount",
      studentType: "all",
    });

    expect(results.every((b) => b.category === "discount")).toBe(true);
    expect(results.length).toBeGreaterThan(0);
  });

  it("filters by student type when benefit specifies it", () => {
    const results = filterBenefits(SEED_BENEFITS, {
      studentAudience: "international",
      province: "all",
      category: "all",
      studentType: "grad",
    });

    const ids = results.map((b) => b.id);
    expect(ids).toContain("ontario-trillium");
    expect(ids).not.toContain("uoft-pearson");
  });
});
