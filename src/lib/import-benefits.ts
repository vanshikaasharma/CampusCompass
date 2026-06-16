import { getBenefitRepository } from "@/data/repository-factory";
import { loadExternalBenefits } from "@/lib/load-external-benefits";

/**
 * Imports benefits from data/external-benefits.json into the database.
 * Run with: npm run db:import
 */
export async function importExternalBenefits(): Promise<number> {
  const benefits = await loadExternalBenefits();
  const repository = getBenefitRepository();
  await repository.upsertMany(benefits);
  return benefits.length;
}
