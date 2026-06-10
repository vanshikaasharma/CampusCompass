import type { Benefit } from "@/domain/types";

export const SEED_BENEFITS: Benefit[] = [
  {
    id: "uoft-pearson",
    name: "Lester B. Pearson International Scholarship",
    category: "scholarship",
    audience: "international",
    provinces: ["ON"],
    provider: "University of Toronto",
    description:
      "Full tuition, books, incidental fees, and residence support for exceptional international students at U of T.",
    eligibilitySummary:
      "International students only. Final year of secondary school outside Canada. Nomination by your school required.",
    applyUrl: "https://future.utoronto.ca/pearson/",
    studentTypes: ["university"],
  },
  {
    id: "ontario-trillium",
    name: "Ontario Trillium Scholarship",
    category: "scholarship",
    audience: "international",
    provinces: ["ON"],
    provider: "Ontario Government",
    description:
      "Provincial scholarship for top international PhD candidates at Ontario universities.",
    eligibilitySummary:
      "International PhD students at eligible Ontario universities. Must not be studying in Ontario at time of application in some cases — check current rules.",
    applyUrl:
      "https://www.ontario.ca/page/ontario-trillium-scholarships",
    studentTypes: ["grad"],
  },
  {
    id: "canada-student-grant",
    name: "Canada Student Grant for Full-Time Students",
    category: "grant",
    audience: "domestic",
    provinces: ["national"],
    provider: "Government of Canada",
    description:
      "Non-repayable federal grant for eligible Canadian citizens and permanent residents.",
    eligibilitySummary:
      "Canadian citizens, permanent residents, or protected persons. Not available to most study-permit-only international students.",
    applyUrl:
      "https://www.canada.ca/en/services/benefits/education/student-aid.html",
    studentTypes: ["college", "university"],
  },
  {
    id: "unidays",
    name: "UNiDAYS Student Discounts",
    category: "discount",
    audience: "both",
    provinces: ["national"],
    provider: "UNiDAYS",
    description:
      "Verified student discounts on fashion, tech, food, and more across Canada.",
    eligibilitySummary:
      "Any student with a valid school email or enrollment proof — international and domestic.",
    applyUrl: "https://www.myunidays.com/",
  },
  {
    id: "github-pack",
    name: "GitHub Student Developer Pack",
    category: "discount",
    audience: "both",
    provinces: ["national"],
    provider: "GitHub",
    description:
      "Free developer tools including Copilot, cloud credits, and design software.",
    eligibilitySummary:
      "Enrolled students 13+ with verifiable school status. Open to international students in Canada.",
    applyUrl: "https://education.github.com/pack",
    studentTypes: ["college", "university", "grad"],
  },
  {
    id: "bc-graduate",
    name: "BC Graduate Scholarship",
    category: "scholarship",
    audience: "both",
    provinces: ["BC"],
    provider: "Province of British Columbia",
    description:
      "Merit-based awards for graduate students at BC public post-secondary institutions.",
    eligibilitySummary:
      "Domestic and international graduate students may be nominated by their institution. Confirm current intake rules on the official site.",
    applyUrl:
      "https://www2.gov.bc.ca/gov/content/education-training/graduate-programs",
    studentTypes: ["grad"],
  },
  {
    id: "sin-guide",
    name: "SIN for International Students (Service Canada)",
    category: "resource",
    audience: "international",
    provinces: ["national"],
    provider: "Service Canada",
    description:
      "How to apply for a Social Insurance Number to work on- or off-campus in Canada.",
    eligibilitySummary:
      "International students with a valid study permit and work authorization. Required for most jobs and tax filing.",
    applyUrl:
      "https://www.canada.ca/en/employment-social-development/services/sin.html",
  },
  {
    id: "spotify-student-ca",
    name: "Spotify Premium Student (Canada)",
    category: "discount",
    audience: "both",
    provinces: ["national"],
    provider: "Spotify",
    description: "Discounted Spotify Premium for verified students in Canada.",
    eligibilitySummary:
      "Enrolled at an accredited Canadian post-secondary school. Verify through SheerID — international students eligible.",
    applyUrl: "https://www.spotify.com/ca-en/student/",
    studentTypes: ["college", "university"],
  },
];
