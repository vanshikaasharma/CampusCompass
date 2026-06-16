import { PrismaClient } from "@prisma/client";
import { SEED_BENEFITS } from "../src/data/seed-benefits";

const prisma = new PrismaClient();

async function main() {
  for (const benefit of SEED_BENEFITS) {
    await prisma.benefit.upsert({
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
    });
  }

  console.log(`Seeded ${SEED_BENEFITS.length} benefits into the database.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
