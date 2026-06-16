import { z } from "zod";

/**
 * Allowed query params for GET /api/benefits.
 * Defaults match our primary audience: international students browsing all of Canada.
 */
export const benefitFiltersQuerySchema = z.object({
  studentAudience: z.enum(["international", "domestic"]).default("international"),
  province: z
    .enum(["ON", "BC", "AB", "QC", "national", "all"])
    .default("all"),
  category: z
    .enum(["scholarship", "grant", "discount", "bursary", "resource", "all"])
    .default("all"),
  studentType: z
    .enum(["college", "university", "grad", "all"])
    .default("all"),
});

export type BenefitFiltersQuery = z.infer<typeof benefitFiltersQuerySchema>;

/**
 * Parses and validates URL search params into typed filters.
 * Throws if a param has an invalid value (returns 400 from the API).
 */
export function parseBenefitFiltersFromSearchParams(
  searchParams: URLSearchParams,
): BenefitFiltersQuery {
  return benefitFiltersQuerySchema.parse({
    studentAudience: searchParams.get("studentAudience") ?? undefined,
    province: searchParams.get("province") ?? undefined,
    category: searchParams.get("category") ?? undefined,
    studentType: searchParams.get("studentType") ?? undefined,
  });
}
