"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BenefitCard } from "@/components/BenefitCard";
import { SiteHeader } from "@/components/SiteHeader";
import type {
  Benefit,
  BenefitCategory,
  BenefitFilters,
  Province,
  StudentAudience,
  StudentType,
} from "@/domain/types";
import { fetchBenefits } from "@/lib/benefits-api";

const DEFAULT_FILTERS: BenefitFilters = {
  studentAudience: "international",
  province: "all",
  category: "all",
  studentType: "all",
};

export default function BrowsePage() {
  const [filters, setFilters] = useState<BenefitFilters>(DEFAULT_FILTERS);
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /** Loads benefits from the API and updates UI state. */
  async function loadBenefits(activeFilters: BenefitFilters) {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBenefits(activeFilters);
      setBenefits(data.benefits);
    } catch (err) {
      setBenefits([]);
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  // Initial load on mount only
  useEffect(() => {
    let cancelled = false;

    fetchBenefits(DEFAULT_FILTERS)
      .then((data) => {
        if (!cancelled) setBenefits(data.benefits);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setBenefits([]);
          setError(err instanceof Error ? err.message : "Something went wrong");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  function updateFilter<K extends keyof BenefitFilters>(
    key: K,
    value: BenefitFilters[K],
  ) {
    const next = { ...filters, [key]: value };
    setFilters(next);
    void loadBenefits(next);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-brand-bg">
        <SiteHeader variant="light" />
      </div>

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Filter sidebar */}
        <aside className="w-full border-b border-black/5 bg-brand-bg px-6 py-8 lg:w-72 lg:border-b-0 lg:border-r lg:px-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-text/60">
            Filters
          </h2>

          <label className="mt-5 block text-sm font-medium text-brand-dark">
            I am a…
            <select
              value={filters.studentAudience}
              onChange={(e) =>
                updateFilter(
                  "studentAudience",
                  e.target.value as StudentAudience,
                )
              }
              className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm text-brand-text outline-none focus:border-brand-dark"
            >
              <option value="international">International student</option>
              <option value="domestic">Domestic student</option>
            </select>
          </label>

          <label className="mt-4 block text-sm font-medium text-brand-dark">
            Province
            <select
              value={filters.province}
              onChange={(e) =>
                updateFilter("province", e.target.value as Province | "all")
              }
              className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm text-brand-text outline-none focus:border-brand-dark"
            >
              <option value="all">All provinces</option>
              <option value="ON">Ontario</option>
              <option value="BC">British Columbia</option>
              <option value="AB">Alberta</option>
              <option value="QC">Quebec</option>
              <option value="national">Canada-wide</option>
            </select>
          </label>

          <label className="mt-4 block text-sm font-medium text-brand-dark">
            Category
            <select
              value={filters.category}
              onChange={(e) =>
                updateFilter(
                  "category",
                  e.target.value as BenefitCategory | "all",
                )
              }
              className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm text-brand-text outline-none focus:border-brand-dark"
            >
              <option value="all">All categories</option>
              <option value="scholarship">Scholarship</option>
              <option value="grant">Grant</option>
              <option value="discount">Discount</option>
              <option value="bursary">Bursary</option>
              <option value="resource">Resource</option>
            </select>
          </label>

          <label className="mt-4 block text-sm font-medium text-brand-dark">
            Student level
            <select
              value={filters.studentType}
              onChange={(e) =>
                updateFilter(
                  "studentType",
                  e.target.value as StudentType | "all",
                )
              }
              className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm text-brand-text outline-none focus:border-brand-dark"
            >
              <option value="all">All levels</option>
              <option value="college">College</option>
              <option value="university">University</option>
              <option value="grad">Graduate</option>
            </select>
          </label>
        </aside>

        {/* Results area */}
        <main className="flex-1 bg-brand-dark px-6 py-8 md:px-10">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-sm text-brand-accent/80">Browse & filter</p>
              <h1 className="mt-1 text-2xl font-bold text-white">
                {loading
                  ? "Loading…"
                  : `${benefits.length} result${benefits.length === 1 ? "" : "s"}`}
              </h1>
            </div>
            <Link
              href="/"
              className="text-sm text-brand-accent hover:underline"
            >
              ← Home
            </Link>
          </div>

          {error && (
            <p className="rounded-2xl border border-red-300/30 bg-red-950/30 p-4 text-sm text-red-200">
              {error}. Make sure the dev server is running and your database is
              seeded.
            </p>
          )}

          {loading && !error && (
            <p className="text-sm text-white/70">Loading benefits…</p>
          )}

          {!loading && !error && benefits.length === 0 && (
            <p className="rounded-2xl border border-dashed border-white/20 p-8 text-center text-white/70">
              No benefits match these filters. Try broadening your search.
            </p>
          )}

          {!loading && benefits.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <BenefitCard key={benefit.id} benefit={benefit} />
              ))}
            </div>
          )}

          <p className="mt-8 text-xs text-white/50">
            Eligibility is an estimate — always confirm on the official site
            before applying.
          </p>
        </main>
      </div>
    </div>
  );
}
