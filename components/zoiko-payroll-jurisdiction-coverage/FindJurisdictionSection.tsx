"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const filters = [
  "All statuses",
  "Available",
  "Limited / Scoped",
  "Assessment required",
];

export default function FindJurisdictionSection() {
  const [searchTerm, setSearchTerm] = useState("Germany");
  const [activeFilter, setActiveFilter] = useState("All statuses");

  return (
    <section id="search-jurisdiction" className="w-full bg-[#F4F8FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[800px]">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
              / FIND A JURISDICTION
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px]">
              Search a country, territory or approved subdivision.
            </h2>
          </div>
        </Reveal>

        {/* Search Widget */}
        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs sm:p-6">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search country or territory..."
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 shadow-2xs transition-colors focus:border-[#0A78C2] focus:outline-none focus:ring-1 focus:ring-[#0A78C2]"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#0A78C2] px-6 py-2.5 text-sm font-bold text-white shadow-2xs transition-all duration-200 hover:bg-[#0863A0] active:translate-y-0"
              >
                Search
              </button>
            </form>

            {/* Filter Pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {filters.map((filter) => {
                const isActive = filter === activeFilter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-[#091E2E] text-white shadow-2xs"
                        : "border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
