"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

const productTabs = [
  "Payroll Workspace",
  "Records & Reports",
  "API",
  "All products",
];
const filterTabs = [
  "All evidence",
  "Reports",
  "Certifications",
  "Framework mappings",
  "Current only",
];

export default function AssuranceExplorerSection() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeFilter, setActiveFilter] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full bg-white text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-4xl mx-auto space-y-10 text-center">
        {/* Header Block */}
        <div className="space-y-4 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              ASSURANCE EXPLORER
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Product and service context first{" "}
            <span className="text-slate-400 font-bold">—</span> before any badge
          </h2>
        </div>

        {/* Search Interface Card */}
        <div className="bg-white border border-slate-200/80 rounded-[14px] p-6 sm:p-8 shadow-xs space-y-6 text-left">
          {/* Top Product Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {productTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProduct(idx)}
                className={`px-4 py-2 rounded-[8px] text-xs font-bold transition-colors cursor-pointer ${
                  activeProduct === idx
                    ? "bg-[#0A2E4B] text-white shadow-xs"
                    : "bg-[#E9F0F8] text-slate-700 hover:bg-[#E9F0F6]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Input and Button Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by assurance name, standard, report type or control domain"
                className="w-full px-4 py-3 bg-white text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-medium border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#1D6397] transition-colors"
              />
            </div>
            <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#154f78] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer">
              <Search className="w-4 h-4 stroke-[2.5]" />
              <span>Search</span>
            </button>
          </div>

          {/* Bottom Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            {filterTabs.map((filter, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  activeFilter === idx
                    ? "bg-[#07243B] text-white shadow-xs"
                    : "bg-[#E9F0F6]/70 text-slate-700 hover:bg-[#E9F0F6]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Subtext */}
        <p className="text-[11px] sm:text-xs text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
          Protected document body text is never publicly searchable. A search
          for an unsupported standard returns a truthful not-verified state{" "}
          <span className="text-slate-300">—</span> never a fabricated match.
        </p>
      </section>
    </div>
  );
}
