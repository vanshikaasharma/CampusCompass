import type { Benefit } from "@/domain/types";

const AUDIENCE_LABELS: Record<Benefit["audience"], string> = {
  international: "International students",
  domestic: "Domestic students",
  both: "All students",
};

type BenefitCardProps = {
  benefit: Benefit;
};

/** Card for a single benefit in the browse results grid. */
export function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold capitalize text-brand-dark">
          {benefit.category}
        </span>
        <span className="rounded-full bg-brand-bg px-3 py-1 text-xs font-medium text-brand-text">
          {AUDIENCE_LABELS[benefit.audience]}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-brand-dark">{benefit.name}</h3>
      <p className="mt-1 text-sm text-brand-text/70">{benefit.provider}</p>
      <p className="mt-3 flex-1 text-sm leading-6 text-brand-text">
        {benefit.description}
      </p>
      <p className="mt-3 text-sm text-brand-text/80">
        <span className="font-medium text-brand-dark">Eligibility: </span>
        {benefit.eligibilitySummary}
      </p>

      <a
        href={benefit.applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block w-fit rounded-full bg-brand-dark px-4 py-2 text-sm font-semibold text-brand-accent transition hover:opacity-90"
      >
        Official site
      </a>
    </article>
  );
}
