"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { Search, Info } from "lucide-react";

export default function DirectoryHero() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full max-w-full min-w-0 overflow-hidden bg-[#F5F8FA] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px] min-w-0">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Text Column */}
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal>
              <div className="max-w-[600px]">
                {/* Eyebrow */}
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A78C2]">
                  / GLOBAL PAYROLL DIRECTORY
                </span>

                {/* Main Heading */}
                <h1 className="mt-4 text-3xl font-extrabold leading-[1.18] tracking-[-0.02em] text-[#082F49] sm:text-4xl lg:text-[42px]">
                  Find current payroll availability by market.
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-sm font-normal leading-relaxed text-slate-600 sm:text-base sm:leading-[1.65]">
                  Search countries, territories, states and provinces to see Zoiko Payroll&apos;s current published status, documented scope, service boundaries and last verification date.
                </p>

                {/* Info Callout */}
                <div className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0A78C2]" aria-hidden="true" />
                  <p>
                    Check the current published record before sharing personal data or planning implementation. Availability is scope-specific and may change.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Search Card Widget */}
          <div className="lg:col-span-6 xl:col-span-5">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl sm:rounded-3xl">
                {/* Card Top Image - ctd4.png on mobile, ctd1.png on desktop */}
                <div className="relative h-[175px] w-full overflow-hidden bg-slate-100 sm:h-[210px]">
                  {/* Mobile Image: Earth at night from orbit */}
                  <img
                    src="/images/zoiko-payroll-country-territory-directory/ctd4.png"
                    alt="Global payroll coverage shown from orbit"
                    className="block h-full w-full object-cover sm:hidden"
                    loading="lazy"
                  />
                  {/* Desktop Image: Laptop on desk */}
                  <img
                    src="/images/zoiko-payroll-country-territory-directory/ctd1.png"
                    alt="Payroll dashboard and analysis on laptop"
                    className="hidden h-full w-full object-cover sm:block"
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  <form onSubmit={handleSearch}>
                    <div className="relative">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by country, territory, state, province or code"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50/60 py-2.5 pl-3.5 pr-10 text-xs text-slate-800 placeholder-slate-400 shadow-2xs transition-all focus:border-[#0A78C2] focus:bg-white focus:outline-none sm:text-sm"
                      />
                      <Search
                        className="absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-lg bg-[#0A78C2] px-4 py-2.5 text-xs font-bold text-white shadow-2xs transition-all duration-200 hover:bg-[#0863A0] active:translate-y-0 sm:text-sm"
                      >
                        Search
                      </button>

                      <Link
                        href="#all-markets"
                        className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-[#082F49] shadow-2xs transition-all duration-200 hover:bg-slate-50 active:translate-y-0 sm:text-sm"
                      >
                        Browse all markets
                      </Link>
                    </div>
                  </form>

                  {/* Footnote */}
                  <p className="mt-3 text-[10.5px] leading-tight text-slate-400">
                    Each published record shows its verification date and boundaries. This wireframe uses illustrative sample data.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
