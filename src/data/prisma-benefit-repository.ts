import { PrismaClient } from "@prisma/client";
import type { Benefit } from "@/domain/types";
import {
  BenefitRepository,
  mapRecordToBenefit,
} from "./benefit-repository";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// Reuse one Prisma client in dev to avoid too many DB connections on hot reload.
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

/** Postgres implementation of BenefitRepository via Prisma. */
export class PrismaBenefitRepository implements BenefitRepository {
  async findAll(): Promise<Benefit[]> {
    const records = await prisma.benefit.findMany({
      orderBy: [{ category: "asc" }, { name: "asc" }],
    });
    return records.map(mapRecordToBenefit);
  }

  async findById(id: string): Promise<Benefit | null> {
    const record = await prisma.benefit.findUnique({ where: { id } });
    return record ? mapRecordToBenefit(record) : null;
  }

  async upsertMany(benefits: Benefit[]): Promise<void> {
    await prisma.$transaction(
      benefits.map((benefit) =>
        prisma.benefit.upsert({
          where: { id: benefit.id },
          create: {
            id: benefit.id,
            name: benefit.name,
            category: benefit.category,
            audience: benefit.audience,
            provinces: benefit.provinces,
            provider: benefit.provider,
            description: benefit.description,
            eligibilitySummary: benefit.eligibilitySummary,
            applyUrl: benefit.applyUrl,
            studentTypes: benefit.studentTypes ?? undefined,
          },
          update: {
            name: benefit.name,
            category: benefit.category,
            audience: benefit.audience,
            provinces: benefit.provinces,
            provider: benefit.provider,
            description: benefit.description,
            eligibilitySummary: benefit.eligibilitySummary,
            applyUrl: benefit.applyUrl,
            studentTypes: benefit.studentTypes ?? undefined,
          },
        }),
      ),
    );
  }
}
