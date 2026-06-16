import type { Benefit } from "@/domain/types";

/** Shape of a benefit in the external JSON file. */
export type ExternalBenefit = Omit<Benefit, "id"> & { id: string };

/**
 * Reads benefits from data/external-benefits.json.
 * Used by the import script to add more entries without editing seed-benefits.ts.
 */
export async function loadExternalBenefits(): Promise<Benefit[]> {
  const file = await import("../../data/external-benefits.json");
  const list = file.default as ExternalBenefit[];

  return list.map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    audience: item.audience,
    provinces: item.provinces,
    provider: item.provider,
    description: item.description,
    eligibilitySummary: item.eligibilitySummary,
    applyUrl: item.applyUrl,
    studentTypes: item.studentTypes,
  }));
}
