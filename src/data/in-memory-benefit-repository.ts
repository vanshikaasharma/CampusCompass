import type { Benefit } from "@/domain/types";
import type { BenefitRepository } from "./benefit-repository";
import { SEED_BENEFITS } from "./seed-benefits";

/**
 * In-memory repository backed by seed data.
 * Used for local dev when no DATABASE_URL is configured.
 */
export class InMemoryBenefitRepository implements BenefitRepository {
  private benefits: Benefit[];

  constructor(initialBenefits: Benefit[] = SEED_BENEFITS) {
    this.benefits = [...initialBenefits];
  }

  async findAll(): Promise<Benefit[]> {
    return [...this.benefits];
  }

  async findById(id: string): Promise<Benefit | null> {
    return this.benefits.find((benefit) => benefit.id === id) ?? null;
  }

  async upsertMany(benefits: Benefit[]): Promise<void> {
    for (const benefit of benefits) {
      const index = this.benefits.findIndex((item) => item.id === benefit.id);
      if (index >= 0) {
        this.benefits[index] = benefit;
      } else {
        this.benefits.push(benefit);
      }
    }
  }
}
