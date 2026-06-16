import { NextRequest, NextResponse } from "next/server";
import { getBenefitRepository } from "@/data/repository-factory";
import { filterBenefits } from "@/domain/filter";
import {
  createBenefitSchema,
  parseBenefitFiltersFromSearchParams,
} from "@/lib/validations";

/**
 * GET /api/benefits
 *
 * Query params (all optional):
 *   studentAudience, province, category, studentType
 *
 * Flow: validate params → load from DB → filter in domain layer → return JSON
 */
export async function GET(request: NextRequest) {
  try {
    const filters = parseBenefitFiltersFromSearchParams(
      request.nextUrl.searchParams,
    );

    const repository = getBenefitRepository();
    const allBenefits = await repository.findAll();
    const benefits = filterBenefits(allBenefits, filters);

    return NextResponse.json({
      benefits,
      count: benefits.length,
      filters,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch benefits";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

/**
 * POST /api/benefits
 * Saves a new benefit to the database (used by the admin form).
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const benefit = createBenefitSchema.parse(body);

    const repository = getBenefitRepository();
    await repository.upsertMany([benefit]);

    return NextResponse.json({ benefit }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to save benefit";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
