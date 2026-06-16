import { PrismaClient } from "@prisma/client";
import { importExternalBenefits } from "../src/lib/import-benefits";

const prisma = new PrismaClient();

async function main() {
  const count = await importExternalBenefits();
  console.log(`Imported ${count} benefits from external-benefits.json`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
