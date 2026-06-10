import type { Benefit, BenefitFilters, Province } from "./types";

function passesAudience(benefit: Benefit, filters: BenefitFilters): boolean {
  if (benefit.audience === "both") return true;
  return benefit.audience === filters.studentAudience;
}

function passesProvince(benefit: Benefit, filters: BenefitFilters): boolean {
  if (filters.province === "all") return true;
  return (
    benefit.provinces.includes("national") ||
    benefit.provinces.includes(filters.province)
  );
}

function passesCategory(benefit: Benefit, filters: BenefitFilters): boolean {
  if (filters.category === "all") return true;
  return benefit.category === filters.category;
}

function passesStudentType(benefit: Benefit, filters: BenefitFilters): boolean {
  if (filters.studentType === "all") return true;
  if (!benefit.studentTypes || benefit.studentTypes.length === 0) return true;
  return benefit.studentTypes.includes(filters.studentType);
}

export function matchesFilters(
  benefit: Benefit,
  filters: BenefitFilters,
): boolean {
  return (
    passesAudience(benefit, filters) &&
    passesProvince(benefit, filters) &&
    passesCategory(benefit, filters) &&
    passesStudentType(benefit, filters)
  );
}

export function filterBenefits(
  benefits: Benefit[],
  filters: BenefitFilters,
): Benefit[] {
  return benefits
    .filter((benefit) => matchesFilters(benefit, filters))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getAvailableProvinces(benefits: Benefit[]): Province[] {
  const provinces = new Set<Province>();
  for (const benefit of benefits) {
    for (const province of benefit.provinces) {
      provinces.add(province);
    }
  }
  return Array.from(provinces).sort();
}
