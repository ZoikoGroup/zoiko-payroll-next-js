"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const regions = [
  "All regions",
  "North America",
  "Latin America",
  "Europe",
  "Asia Pacific",
  "Middle East & Africa",
];

const types = ["Country", "Territory", "State / Province", "A–Z browse"];

export default function BrowseSection() {
  const [activeRegion, setActiveRegion] = useState("All regions");
  const [activeType, setActiveType] = useState<string | null>(null);

  return (
    <section className="border-t border-slate-200 bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal>
          <Eyebrow>Browse by region / type</Eyebrow>
          <h2 className="mt-3.5 max-w-[500px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Deterministic discovery — without needing to search.
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">
            {regions.map((region) => {
              const isActive = activeRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveRegion(region)}
                  className={`rounded-[20px] border px-4 py-2.5 text-xs font-semibold leading-5 transition-colors duration-200 ${
                    isActive
                      ? "border-brand-dark bg-brand-dark text-white"
                      : "border-slate-200 bg-white text-brand-dark hover:border-brand/40"
                  }`}
                >
                  {region}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {types.map((type) => {
              const isActive = activeType === type;
              return (
                <button
                  key={type}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveType(isActive ? null : type)}
                  className={`rounded-[20px] border px-4 py-2.5 text-xs font-semibold leading-5 transition-colors duration-200 ${
                    isActive
                      ? "border-brand bg-brand text-white"
                      : "border-slate-200 bg-white text-brand-dark hover:border-brand/40"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <img
            src="/images/global-payroll-jurisdiction-guides/browse-regions.png"
            alt="A view of the earth at night showing city lights across regions"
            loading="lazy"
            className="h-52 w-full object-cover sm:h-60"
          />
          <div className="px-5 py-5">
            <p className="text-sm font-extrabold leading-5 text-brand-dark">
              Browse, don&apos;t hunt
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-600">
              Region and type filters route straight to eligible guides.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
