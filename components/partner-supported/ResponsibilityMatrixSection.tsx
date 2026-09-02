"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

type AvailabilityStatus = "Available" | "Limited scope" | "Contact us";
type CategoryFilter =
  | "Partner-Supported"
  | "Native"
  | "Connected"
  | "All jurisdictions";

interface MarketItem {
  id: string;
  country: string;
  flagCode: string;
  status: AvailabilityStatus;
  category: CategoryFilter;
}

const statusBadgeStyles: Record<AvailabilityStatus, string> = {
  Available: "bg-[#E6F4EA] text-[#137333]",
  "Limited scope": "bg-[#FEF7E0] text-[#B06000]",
  "Contact us": "bg-[#F1F3F4] text-[#5F6368]",
};

const marketsData: MarketItem[] = [
  {
    id: "br",
    country: "Brazil",
    flagCode: "br",
    status: "Available",
    category: "Partner-Supported",
  },
  {
    id: "mx",
    country: "Mexico",
    flagCode: "mx",
    status: "Available",
    category: "Partner-Supported",
  },
  {
    id: "id",
    country: "Indonesia",
    flagCode: "id",
    status: "Limited scope",
    category: "Partner-Supported",
  },
  {
    id: "za",
    country: "South Africa",
    flagCode: "za",
    status: "Available",
    category: "Partner-Supported",
  },
  {
    id: "vn",
    country: "Vietnam",
    flagCode: "vn",
    status: "Contact us",
    category: "Partner-Supported",
  },
  {
    id: "us",
    country: "US",
    flagCode: "us",
    status: "Limited scope",
    category: "Partner-Supported",
  },
];

const categoryTabs: CategoryFilter[] = [
  "Partner-Supported",
  "Native",
  "Connected",
  "All jurisdictions",
];

export default function ResponsibilityMatrixSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] =
    useState<CategoryFilter>("Partner-Supported");

  const filteredMarkets = marketsData.filter((item) => {
    const matchesSearch = item.country
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeTab === "All jurisdictions" || item.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A] overflow-hidden">
      {/* World Map Background Image */}
      <div className="absolute inset-0 opacity-40 pointer-events-none flex items-center justify-center">
        <Image
          src="/images/partner-supported/1.jpg"
          alt="World map background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>RESPONSIBILITY MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
            Check partner-supported availability by market.
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Powered by the same effective-dated Jurisdiction Registry that
            drives the Jurisdiction Directory — never a second, out-of-sync
            list.
          </p>
        </div>

        {/* Main Card Interface */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl space-y-6 max-w-6xl mx-auto">
          {/* Search Input Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search a country, territory or ISO code"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#F8FAFC] border border-slate-200/80 rounded-2xl text-xs sm:text-sm text-[#07243B] placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0A8FD0]/30 focus:border-[#0A8FD0] transition-all font-medium"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#07243B] text-white"
                      : "bg-[#F1F5F9] text-slate-600 hover:bg-slate-200/70"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Country Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            {filteredMarkets.length > 0 ? (
              filteredMarkets.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-2xs hover:border-slate-300 transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Local PNG Flag Image */}
                    <div className="relative w-6 h-6 rounded-[3px] overflow-hidden shrink-0 border border-slate-200/60 shadow-2xs bg-slate-50">
                      <Image
                        src={`/images/partner-supported/${item.flagCode}.png`}
                        alt={`${item.country} flag`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#07243B] truncate">
                      {item.country}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold shrink-0 flex items-center gap-1.5 ${
                      statusBadgeStyles[item.status]
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75" />
                    {item.status}
                  </span>
                </div>
              ))
            ) : (
              <div className="col-span-full py-8 text-center text-xs text-slate-400 font-medium">
                No matching jurisdictions found.
              </div>
            )}
          </div>

          {/* Bottom Info Alert Strip */}
          <div className="bg-[#F8FAFC] border border-dashed border-slate-200 rounded-2xl p-4 text-center text-xs text-slate-500 font-medium">
            No match? Partner-supported payroll is not currently shown for every
            jurisdiction.{" "}
            <a
              href="#talk-to-global-payroll"
              className="text-[#0A8FD0] hover:underline font-bold inline-flex items-center gap-0.5"
            >
              Talk to global payroll &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
