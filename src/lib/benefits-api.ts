import type { BenefitFilters } from "@/domain/types";
import type { Benefit } from "@/domain/types";

type BenefitsApiResponse = {
  benefits: Benefit[];
  count: number;
  filters: BenefitFilters;
  error?: string;
};

/** Builds the /api/benefits URL from the current filter state. */
export function buildBenefitsApiUrl(filters: BenefitFilters): string {
  const params = new URLSearchParams({
    studentAudience: filters.studentAudience,
    province: filters.province,
    category: filters.category,
    studentType: filters.studentType,
  });
  return `/api/benefits?${params.toString()}`;
}

/** Fetches filtered benefits from the backend API. */
export async function fetchBenefits(
  filters: BenefitFilters,
): Promise<BenefitsApiResponse> {
  const response = await fetch(buildBenefitsApiUrl(filters));
  const data = (await response.json()) as BenefitsApiResponse;

  if (!response.ok) {
    throw new Error(data.error ?? "Failed to load benefits");
  }

  return data;
}
