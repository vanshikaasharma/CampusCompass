import { describe, expect, it } from "vitest";
import { InMemoryBenefitRepository } from "./in-memory-benefit-repository";
import { SEED_BENEFITS } from "./seed-benefits";

describe("InMemoryBenefitRepository", () => {
  it("returns all seed benefits", async () => {
    const repo = new InMemoryBenefitRepository();
    const benefits = await repo.findAll();
    expect(benefits.length).toBe(SEED_BENEFITS.length);
  });

  it("finds a benefit by id", async () => {
    const repo = new InMemoryBenefitRepository();
    const benefit = await repo.findById("unidays");
    expect(benefit?.name).toContain("UNiDAYS");
  });

  it("upserts new benefits", async () => {
    const repo = new InMemoryBenefitRepository([]);
    await repo.upsertMany([
      {
        id: "test-benefit",
        name: "Test Benefit",
        category: "resource",
        audience: "both",
        provinces: ["national"],
        provider: "Test",
        description: "For testing",
        eligibilitySummary: "Everyone",
        applyUrl: "https://example.com",
      },
    ]);

    const found = await repo.findById("test-benefit");
    expect(found?.name).toBe("Test Benefit");
  });
});
