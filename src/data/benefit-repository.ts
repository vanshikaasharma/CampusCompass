import type {
  Benefit,
  BenefitAudience,
  BenefitCategory,
  Province,
  StudentType,
} from "@/domain/types";

/**
 * Data access contract for benefits.
 * The API and services depend on this interface, not on Prisma directly.
 */
export interface BenefitRepository {
  findAll(): Promise<Benefit[]>;
  findById(id: string): Promise<Benefit | null>;
  upsertMany(benefits: Benefit[]): Promise<void>;
}

/** Converts a Prisma/database record into our domain Benefit type. */
export function mapRecordToBenefit(record: {
  id: string;
  name: string;
  category: string;
  audience: string;
  provinces: unknown;
  provider: string;
  description: string;
  eligibilitySummary: string;
  applyUrl: string;
  studentTypes: unknown | null;
}): Benefit {
  return {
    id: record.id,
    name: record.name,
    category: record.category as BenefitCategory,
    audience: record.audience as BenefitAudience,
    provinces: record.provinces as Province[],
    provider: record.provider,
    description: record.description,
    eligibilitySummary: record.eligibilitySummary,
    applyUrl: record.applyUrl,
    studentTypes: record.studentTypes
      ? (record.studentTypes as StudentType[])
      : undefined,
  };
}
