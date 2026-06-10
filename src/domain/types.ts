export type BenefitCategory =
  | "scholarship"
  | "grant"
  | "discount"
  | "bursary"
  | "resource";

export type BenefitAudience = "international" | "domestic" | "both";

export type StudentType = "college" | "university" | "grad";

export type Province = "ON" | "BC" | "AB" | "QC" | "national";

/** Who is browsing — an international or domestic student in Canada */
export type StudentAudience = "international" | "domestic";

export type Benefit = {
  id: string;
  name: string;
  category: BenefitCategory;
  audience: BenefitAudience;
  provinces: Province[];
  provider: string;
  description: string;
  eligibilitySummary: string;
  applyUrl: string;
  studentTypes?: StudentType[];
};

export type BenefitFilters = {
  studentAudience: StudentAudience;
  province: Province | "all";
  category: BenefitCategory | "all";
  studentType: StudentType | "all";
};
