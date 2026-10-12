"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

const quickFilterPills = [
  "Plans",
  "Worker-Months",
  "Implementation",
  "Multi-jurisdiction",
  "Upgrades",
  "Taxes & billing",
  "Enterprise",
];

export default function PricingFaqsHeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#0B2338E5] text-white overflow-hidden">
      {/* Background Image Overlay with Dark Tint */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url('/images/pricing/9.jpg')` }}
      />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs font-extrabold tracking-[1px] text-[#7FC1EE] uppercase flex items-center">
            <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#7FC1EE]">
              /
            </span>
            PRICING FAQS
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-[38px] font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
          Clear answers about Zoiko Payroll pricing, plans and procurement.
        </h1>

        {/* Subtitle Description */}
        <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
          Search or browse direct answers about plans, Billable Worker-Months,
          implementation, multi-jurisdiction and multi-entity pricing, upgrades,
          downgrades, taxes, billing and enterprise procurement — with current
          amounts always resolved from the live price catalog, not this page.
        </p>

        {/* Search Bar Form */}
        <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-2 flex items-center shadow-xl border border-slate-200">
            <div className="pl-3 pr-2 text-slate-400">
              <Search className="w-4 h-4 stroke-[2.5]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pricing questions — e.g. Billable Worker-Month, upgrade, taxes"
              className="w-full py-2 text-xs sm:text-sm text-[#07243B] bg-transparent focus:outline-none font-medium placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:bg-[#08629e] text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer shrink-0"
            >
              Search
            </button>
          </div>
        </form>

        {/* Quick Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {quickFilterPills.map((pill, idx) => (
            <button
              key={idx}
              className="px-4 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-white/20 text-white text-xs font-bold border border-[#FFFFFF4D] transition-colors backdrop-blur-xs cursor-pointer"
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Bottom Disclaimer Notice */}
        <div className="pt-4 max-w-150 mx-auto">
          <p className="text-[11px] text-[#DCE9F3] font-medium leading-relaxed">
            This page explains commercial concepts and rules. It does not expose
            negotiated Enterprise pricing, and current prices, limits and
            availability always come from the live price catalog and coverage
            registry, not from this FAQ.
          </p>
        </div>
      </div>
    </section>
  );
}
