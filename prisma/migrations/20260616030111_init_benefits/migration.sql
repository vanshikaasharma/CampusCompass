-- CreateTable
CREATE TABLE "Benefit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "audience" TEXT NOT NULL,
    "provinces" JSONB NOT NULL,
    "provider" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "eligibilitySummary" TEXT NOT NULL,
    "applyUrl" TEXT NOT NULL,
    "studentTypes" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Benefit_pkey" PRIMARY KEY ("id")
);
