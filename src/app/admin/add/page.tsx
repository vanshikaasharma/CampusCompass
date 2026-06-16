"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import type { BenefitCategory, BenefitAudience, Province, StudentType } from "@/domain/types";

const PROVINCES: Province[] = ["ON", "BC", "AB", "QC", "national"];
const STUDENT_TYPES: StudentType[] = ["college", "university", "grad"];

export default function AddBenefitPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedProvinces, setSelectedProvinces] = useState<Province[]>([
    "national",
  ]);
  const [selectedTypes, setSelectedTypes] = useState<StudentType[]>([]);

  function toggleProvince(province: Province) {
    setSelectedProvinces((prev) =>
      prev.includes(province)
        ? prev.filter((p) => p !== province)
        : [...prev, province],
    );
  }

  function toggleStudentType(type: StudentType) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    const form = new FormData(event.currentTarget);

    const payload = {
      id: String(form.get("id")),
      name: String(form.get("name")),
      category: String(form.get("category")) as BenefitCategory,
      audience: String(form.get("audience")) as BenefitAudience,
      provinces: selectedProvinces,
      provider: String(form.get("provider")),
      description: String(form.get("description")),
      eligibilitySummary: String(form.get("eligibilitySummary")),
      applyUrl: String(form.get("applyUrl")),
      studentTypes: selectedTypes.length > 0 ? selectedTypes : undefined,
    };

    try {
      const response = await fetch("/api/benefits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Could not save benefit");
      }

      setMessage(`Saved "${data.benefit.name}". Check the browse page to see it.`);
      event.currentTarget.reset();
      setSelectedProvinces(["national"]);
      setSelectedTypes([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg">
      <SiteHeader variant="light" />

      <main className="mx-auto max-w-xl px-6 py-10">
        <Link href="/browse" className="text-sm text-brand-dark hover:underline">
          ← Back to browse
        </Link>

        <h1 className="mt-4 text-2xl font-bold text-brand-dark">Add a benefit</h1>
        <p className="mt-2 text-sm text-brand-text">
          Fill this out to add a new scholarship, discount, or resource without
          editing code. It saves straight to the database.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label className="block text-sm font-medium text-brand-dark">
            ID (unique, e.g. amazon-prime-student)
            <input
              name="id"
              required
              pattern="[a-z0-9-]+"
              className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
            />
          </label>

          <label className="block text-sm font-medium text-brand-dark">
            Name
            <input
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
            />
          </label>

          <label className="block text-sm font-medium text-brand-dark">
            Provider
            <input
              name="provider"
              required
              className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-brand-dark">
              Category
              <select
                name="category"
                required
                className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
              >
                <option value="scholarship">Scholarship</option>
                <option value="grant">Grant</option>
                <option value="discount">Discount</option>
                <option value="bursary">Bursary</option>
                <option value="resource">Resource</option>
              </select>
            </label>

            <label className="block text-sm font-medium text-brand-dark">
              Audience
              <select
                name="audience"
                required
                className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
              >
                <option value="international">International</option>
                <option value="domestic">Domestic</option>
                <option value="both">Both</option>
              </select>
            </label>
          </div>

          <fieldset>
            <legend className="text-sm font-medium text-brand-dark">
              Provinces
            </legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {PROVINCES.map((province) => (
                <button
                  key={province}
                  type="button"
                  onClick={() => toggleProvince(province)}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    selectedProvinces.includes(province)
                      ? "bg-brand-dark text-brand-accent"
                      : "bg-white text-brand-text border border-black/10"
                  }`}
                >
                  {province}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium text-brand-dark">
              Student level (optional)
            </legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {STUDENT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleStudentType(type)}
                  className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
                    selectedTypes.includes(type)
                      ? "bg-brand-dark text-brand-accent"
                      : "bg-white text-brand-text border border-black/10"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="block text-sm font-medium text-brand-dark">
            Description
            <textarea
              name="description"
              required
              rows={3}
              className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
            />
          </label>

          <label className="block text-sm font-medium text-brand-dark">
            Eligibility summary
            <textarea
              name="eligibilitySummary"
              required
              rows={3}
              className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
            />
          </label>

          <label className="block text-sm font-medium text-brand-dark">
            Official link
            <input
              name="applyUrl"
              type="url"
              required
              placeholder="https://"
              className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
            />
          </label>

          {error && <p className="text-sm text-red-600">{error}</p>}
          {message && <p className="text-sm text-brand-dark">{message}</p>}

          <button
            type="submit"
            disabled={loading || selectedProvinces.length === 0}
            className="rounded-full bg-brand-dark px-6 py-2.5 text-sm font-semibold text-brand-accent disabled:opacity-60"
          >
            {loading ? "Saving…" : "Save benefit"}
          </button>
        </form>
      </main>
    </div>
  );
}
