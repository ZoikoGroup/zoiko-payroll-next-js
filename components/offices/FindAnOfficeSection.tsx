import React from "react";
import Image from "next/image";
import { Eyebrow, Note } from "./Primitives";

const filters = [
  { label: "Country", value: "All" },
  { label: "Region", value: "All" },
  { label: "Office type", value: "All" },
  { label: "Sort", value: "Relevance" },
] as const;

export default function FindAnOfficeSection() {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-3.5">
            <Eyebrow>Find an office</Eyebrow>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#0B192C] sm:text-3xl md:text-4xl">
              Search does the work — filters refine it
            </h2>
            <p className="text-sm leading-7 text-[#64748B] sm:text-base">
              Search by office name, city, region, country or a known alias.
              Filters only appear where an approved taxonomy exists.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-[0px_20px_50px_0px_rgba(10,40,65,0.15)]">
            <Image
              src="/images/offices/find-an-office.webp"
              alt="Someone searching the Zoiko Payroll office directory"
              width={526}
              height={380}
              className="h-auto w-full object-cover"
            />
            <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0px_8px_20px_0px_rgba(10,30,50,0.18)]">
              <span className="h-2 w-2 rounded-full bg-[#0A78C3]" />
              <span className="text-xs font-bold text-[#0F172A]">
                Search-first flow
              </span>
            </span>
          </div>
        </div>

        <Note>
          Results never imply &quot;nearest&quot; without a reliable location
          input — proximity is only shown when it can be trusted.
        </Note>

        {/* Search + filter bar */}
        <div className="w-full rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6">
          <label className="sr-only" htmlFor="office-search">
            Search the office directory
          </label>
          <input
            id="office-search"
            type="search"
            placeholder="🔍  Search city, region, country or office name…"
            className="w-full rounded-[10px] border border-[#E2E8F0] px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0A78C3] focus:outline-none"
          />

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            {filters.map((filter) => (
              <button
                key={filter.label}
                type="button"
                className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-sm transition-colors hover:border-[#0A78C3]"
              >
                <span className="text-[#475569]">{filter.label}</span>
                <span className="font-bold text-[#0F172A]">{filter.value}</span>
              </button>
            ))}
            <button
              type="button"
              className="cursor-pointer py-1 text-sm font-bold text-[#0A78C3] hover:text-[#08608F] sm:ml-auto sm:py-0"
            >
              Clear filters
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-10 gap-y-1 border-t border-[#E2E8F0] pt-4">
            <span className="text-xs text-[#64748B]">
              6 offices match your search
            </span>
            <span className="text-xs text-[#64748B]">
              No precise location permission required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
