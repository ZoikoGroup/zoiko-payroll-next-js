"use client";

import React, { useState } from "react";

const filterCategories = [
  { id: "all", label: "All stories" },
  { id: "challenge", label: "Challenge" },
  { id: "industry", label: "Industry" },
  { id: "region", label: "Region" },
  { id: "product", label: "Product / use case" },
  { id: "outcome", label: "Outcome theme" },
];

export default function FindAStorySection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="space-y-3 text-center mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              FIND A STORY
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            Search adapts to how much proof actually exists
          </h2>
        </div>

        {/* Search Container Box */}
        <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-2xs space-y-5">
          <form onSubmit={handleSearch} className="flex gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by customer, title or theme"
              className="flex-1 bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#07243B] placeholder-slate-400 focus:outline-hidden focus:border-[#3D9BD6] shadow-2xs transition-colors"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] hover:opacity-95 text-white text-xs font-bold px-7 py-3 rounded-xl shadow-xs transition-opacity shrink-0 cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {filterCategories.map((cat) => {
              const isActive = selectedFilter === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#0B253C] text-white shadow-xs"
                      : "bg-[#EEF3F9] hover:bg-[#e2ebf5] text-[#2B5A84]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-[11px] text-slate-400 font-medium">
          Filter groups shown adapt to current inventory — no opaque
          personalization, and searches are not logged by default.
        </p>
      </div>
    </section>
  );
}
