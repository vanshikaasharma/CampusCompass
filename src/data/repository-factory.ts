import type { BenefitRepository } from "./benefit-repository";
import { InMemoryBenefitRepository } from "./in-memory-benefit-repository";
import { PrismaBenefitRepository } from "./prisma-benefit-repository";

let repository: BenefitRepository | null = null;

export function getBenefitRepository(): BenefitRepository {
  if (repository) return repository;

  if (process.env.DATABASE_URL) {
    repository = new PrismaBenefitRepository();
  } else {
    repository = new InMemoryBenefitRepository();
  }

  return repository;
}

/** For tests only — reset cached repository between test runs */
export function resetBenefitRepositoryForTests(): void {
  repository = null;
}
