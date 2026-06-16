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
  {
    id: "amazon-prime-student",
    name: "Amazon Prime Student",
    category: "discount",
    audience: "both",
    provinces: ["national"],
    provider: "Amazon",
    description:
      "Six-month trial and discounted Prime membership for post-secondary students in Canada.",
    eligibilitySummary:
      "Enrolled at a Canadian college or university. Valid student email required — international students eligible.",
    applyUrl: "https://www.amazon.ca/amazonprime",
    studentTypes: ["college", "university"],
  },
  {
    id: "adobe-cc-student",
    name: "Adobe Creative Cloud Student",
    category: "discount",
    audience: "both",
    provinces: ["national"],
    provider: "Adobe",
    description: "Discounted Creative Cloud apps for students and teachers.",
    eligibilitySummary:
      "Proof of enrollment at an accredited institution. International students in Canada eligible.",
    applyUrl: "https://www.adobe.com/ca/creativecloud/buy/students.html",
    studentTypes: ["college", "university", "grad"],
  },
  {
    id: "apple-education",
    name: "Apple Education Store",
    category: "discount",
    audience: "both",
    provinces: ["national"],
    provider: "Apple",
    description: "Education pricing on Mac, iPad, and accessories for students.",
    eligibilitySummary:
      "Currently enrolled students. UNiDAYS or school verification — open to international students.",
    applyUrl: "https://www.apple.com/ca-edu/store",
    studentTypes: ["college", "university", "grad"],
  },
  {
    id: "mcgill-entrance-intl",
    name: "McGill University Entrance Scholarships",
    category: "scholarship",
    audience: "international",
    provinces: ["QC"],
    provider: "McGill University",
    description:
      "Merit-based entrance scholarships for new undergraduate students, including international applicants.",
    eligibilitySummary:
      "First-year undergraduate applicants to McGill. Separate application may be required for major awards.",
    applyUrl:
      "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance",
    studentTypes: ["university"],
  },
  {
    id: "ubc-intl-leader",
    name: "UBC International Leader of Tomorrow Award",
    category: "scholarship",
    audience: "international",
    provinces: ["BC"],
    provider: "University of British Columbia",
    description:
      "Merit and need-based awards for exceptional international undergraduate students.",
    eligibilitySummary:
      "International student applying to UBC undergraduate program for the first time.",
    applyUrl:
      "https://you.ubc.ca/financial-planning/awards-scholarships-bursaries/international-awards/",
    studentTypes: ["university"],
  },
  {
    id: "vanier-graduate",
    name: "Vanier Canada Graduate Scholarships",
    category: "scholarship",
    audience: "international",
    provinces: ["national"],
    provider: "Government of Canada",
    description:
      "Prestigious doctoral scholarships for Canadian and international PhD students.",
    eligibilitySummary:
      "Nominated by a Canadian institution. Must be pursuing a doctoral degree in Canada.",
    applyUrl: "https://vanier.gc.ca/en/home-accueil.html",
    studentTypes: ["grad"],
  },
  {
    id: "ircc-work-study",
    name: "Work While Studying (IRCC)",
    category: "resource",
    audience: "international",
    provinces: ["national"],
    provider: "Immigration, Refugees and Citizenship Canada",
    description:
      "Official guide on working on-campus and off-campus with a study permit.",
    eligibilitySummary:
      "International students with a valid study permit. Rules vary for on- vs off-campus work.",
    applyUrl:
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html",
  },
  {
    id: "telus-student",
    name: "TELUS Student Discount",
    category: "discount",
    audience: "both",
    provinces: ["national"],
    provider: "TELUS",
    description: "Reduced phone and internet plans for verified Canadian students.",
    eligibilitySummary:
      "Enrolled in a Canadian post-secondary school. Student ID or enrollment verification required.",
    applyUrl: "https://www.telus.com/en/mobility/student",
    studentTypes: ["college", "university"],
  },
  {
    id: "rbc-student-banking",
    name: "RBC International Student Banking",
    category: "resource",
    audience: "international",
    provinces: ["national"],
    provider: "RBC",
    description:
      "Bank account packages and guidance for newcomers and international students.",
    eligibilitySummary:
      "International students new to Canada. Study permit and proof of enrollment typically required.",
    applyUrl:
      "https://www.rbcroyalbank.com/en-ca/newcomers-to-canada/students/",
  },
  {
    id: "humber-intl-scholarship",
    name: "Humber International Entrance Scholarships",
    category: "scholarship",
    audience: "international",
    provinces: ["ON"],
    provider: "Humber College",
    description:
      "Automatic entrance awards for eligible new international students at Humber College.",
    eligibilitySummary:
      "First-semester international student at Humber with strong academic admission average.",
    applyUrl:
      "https://humber.ca/admissions/financial-aid/awards-scholarships-bursaries",
    studentTypes: ["college"],
  },
  {
    id: "uoft-mississauga-intl",
    name: "UTM International Scholar Award",
    category: "scholarship",
    audience: "international",
    provinces: ["ON"],
    provider: "University of Toronto Mississauga",
    description:
      "Entrance scholarships for high-achieving international undergraduate applicants.",
    eligibilitySummary:
      "International student admitted to UTM undergraduate program. No separate application for some awards.",
    applyUrl: "https://www.utm.utoronto.ca/future-students/finances/scholarships",
    studentTypes: ["university"],
  },
  {
    id: "headspace-student",
    name: "Headspace for Students",
    category: "discount",
    audience: "both",
    provinces: ["national"],
    provider: "Headspace",
    description: "Discounted mindfulness and meditation app subscription for students.",
    eligibilitySummary:
      "Verified student status through SheerID. International students in Canada eligible.",
    applyUrl: "https://www.headspace.com/studentplan",
    studentTypes: ["college", "university", "grad"],
  },
];
