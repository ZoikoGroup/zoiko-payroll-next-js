"use client";

import React from "react";

const filters = [
  "Product / service",
  "Purpose",
  "Processing location",
  "Status",
  "Provider type",
] as const;

const exports = ["⬇ CSV", "🖨 Print / PDF", "{ } JSON"] as const;

export default function RegistrySearchSection() {
  return (
    <section className="bg-[#F8FAFC] py-12 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0A78C3]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A78C3] sm:text-xs">
            REGISTRY SEARCH &amp; FILTERS
          </span>
        </div>
        <h2 className="mt-3 max-w-3xl text-center text-2xl font-extrabold tracking-tight text-[#0B192C] sm:text-3xl md:text-[34px]">
          Find a provider, and know how fresh the answer is
        </h2>
        <p className="mt-3 max-w-2xl text-center text-xs leading-relaxed text-[#64748B] sm:text-sm">
          Search by legal entity, provider, purpose or approved service keyword
          — freshness is always visible alongside results.
        </p>

        {/* Search & filter card */}
        <div className="mt-9 w-full max-w-5xl rounded-2xl border border-[#E2E8F0] bg-white px-4 pb-5 pt-6 sm:px-6 sm:pt-8">
          <label className="sr-only" htmlFor="subprocessor-search">
            Search the subprocessors registry
          </label>
          <input
            id="subprocessor-search"
            type="search"
            placeholder="🔍  Search legal entity, provider or purpose…"
            className="w-full rounded-[10px] border border-[#E2E8F0] px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0A78C3] focus:outline-none"
          />

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            {filters.map((filter) => (
              <button
                key={filter}
                className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-sm transition-colors hover:border-[#0A78C3]"
              >
                <span className="font-semibold text-[#475569]">{filter}</span>
                <span className="font-black text-[#0F172A]">All</span>
              </button>
            ))}
            <button className="cursor-pointer py-1 text-left text-sm font-bold text-[#0A78C3] hover:text-[#08608F] sm:ml-auto sm:py-0">
              Reset filters
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E8F0] pt-4">
            <span className="text-xs text-[#94A3B8]">
              Showing 12 of 12 providers · Registry v4.2
            </span>
            <div className="flex flex-wrap gap-2.5">
              {exports.map((label) => (
                <button
                  key={label}
                  className="cursor-pointer rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-xs font-bold text-[#334155] transition-colors hover:border-[#0A78C3]"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-9 w-full max-w-3xl rounded-[6px] border-l-4 border-l-[#0A78C3] bg-[#E7EDFD] p-4 sm:p-5">
          <p className="text-xs leading-relaxed text-[#334155] sm:text-[13px]">
            Provider counts, dates and status are read from the governed
            registry — never authored or estimated in this page&apos;s content.
          </p>
        </div>
      </div>
    </section>
  );
}
