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

const provinceValues = ["ON", "BC", "AB", "QC", "national"] as const;
const studentTypeValues = ["college", "university", "grad"] as const;

/** Validates a new benefit submitted through the admin form. */
export const createBenefitSchema = z.object({
  id: z
    .string()
    .min(2)
    .max(60)
    .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and hyphens only"),
  name: z.string().min(2).max(120),
  category: z.enum([
    "scholarship",
    "grant",
    "discount",
    "bursary",
    "resource",
  ]),
  audience: z.enum(["international", "domestic", "both"]),
  provinces: z.array(z.enum(provinceValues)).min(1),
  provider: z.string().min(2).max(120),
  description: z.string().min(10).max(500),
  eligibilitySummary: z.string().min(10).max(500),
  applyUrl: z.string().url(),
  studentTypes: z.array(z.enum(studentTypeValues)).optional(),
});

export type CreateBenefitInput = z.infer<typeof createBenefitSchema>;

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
