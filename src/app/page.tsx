import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-dark text-white">
      {/* Subtle compass / map background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden
      >
        <svg
          className="absolute -right-20 top-10 h-[420px] w-[420px]"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="#D5E6AB"
            strokeWidth="1.5"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            stroke="#D5E6AB"
            strokeWidth="1"
          />
          <path
            d="M100 20 L110 100 L100 180 L90 100 Z"
            fill="#D5E6AB"
            opacity="0.5"
          />
          <path
            d="M20 100 L100 90 L180 100 L100 110 Z"
            fill="#D5E6AB"
            opacity="0.3"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 h-64 w-full opacity-40"
          viewBox="0 0 400 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 80 Q100 40 200 70 T400 50 V100 H0 Z"
            stroke="#D5E6AB"
            strokeWidth="1"
          />
          <path
            d="M0 90 Q150 60 300 85 T400 70"
            stroke="#D5E6AB"
            strokeWidth="0.75"
          />
        </svg>
      </div>

      <SiteHeader variant="dark" />

      <main className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-24 pt-16 text-center md:pt-24">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Resources for international students in Canada
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
          Browse scholarships, grants, discounts, and guides — filter by province
          and what applies to you.
        </p>

        <Link
          href="/browse"
          className="mt-10 inline-block rounded-full bg-brand-accent px-8 py-3.5 text-sm font-bold text-brand-dark transition hover:opacity-90"
        >
          Browse benefits
        </Link>
      </main>
    </div>
  );
}
