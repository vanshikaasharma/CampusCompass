import type { BenefitRepository } from "./benefit-repository";
import { InMemoryBenefitRepository } from "./in-memory-benefit-repository";
import { PrismaBenefitRepository } from "./prisma-benefit-repository";

let repository: BenefitRepository | null = null;

/**
 * Returns the shared benefit repository.
 * Uses Postgres when DATABASE_URL is set, otherwise falls back to in-memory seed data.
 */
export function getBenefitRepository(): BenefitRepository {
  if (repository) return repository;

  if (process.env.DATABASE_URL) {
    repository = new PrismaBenefitRepository();
  } else {
    repository = new InMemoryBenefitRepository();
  }

  return repository;
}

/** Resets the cached repository — used in tests only. */
export function resetBenefitRepositoryForTests(): void {
  repository = null;
}
