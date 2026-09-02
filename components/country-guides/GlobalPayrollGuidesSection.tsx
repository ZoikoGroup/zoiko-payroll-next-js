"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  CheckCircle2,
  Star,
  BookOpen,
  Clock,
  Calendar,
  Info,
} from "lucide-react";

export default function GlobalPayrollGuidesSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const footerFeatures = [
    {
      icon: BookOpen,
      title: "Source-backed",
      description: "Cited to primary authorities",
    },
    {
      icon: Clock,
      title: "Review date shown",
      description: "On every guide, always visible",
    },
    {
      icon: Calendar,
      title: "Effective-dated facts",
      description: "Volatile figures carry a date",
    },
    {
      icon: Info,
      title: "Informational only",
      description: "Not legal or tax advice",
    },
  ];

  return (
    <>
      <section className="w-full bg-gradient-to-b from-[#EFF4F8] to-[#F5F8FA] pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Main Grid: Left Content (7 Cols) & Right Graphic (5 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tag */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
                <span>/</span>
                <span>GLOBAL PAYROLL GUIDES</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#07243B] leading-tight">
                Payroll guides by country and territory.
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
                Explore source-backed payroll guidance for countries and
                territories around the world, including payroll cycles, taxes
                and contributions, filings, payments, authorities, and year-end
                considerations.
              </p>

              {/* Search Input Box */}
              <div className="pt-2">
                <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <div className="flex items-center gap-3 px-3 py-2 flex-1">
                    <Search className="w-4 h-4 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder='Search by country, territory or ISO code — e.g. "Germany"'
                      className="w-full text-xs text-[#07243B] placeholder-slate-400 bg-transparent focus:outline-none"
                    />
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-[#0A8FD0] to-[#076BA0] hover:from-[#097EB8] hover:to-[#065A87] text-white text-xs font-bold rounded-xl shadow-xs transition-all text-center shrink-0">
                    Find a payroll guide
                  </button>
                </div>
              </div>

              {/* Disclaimer bullets */}
              <div className="space-y-2 pt-1 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8FD0] shrink-0" />
                  <span>
                    Guide content is informational, effective-dated where
                    applicable
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#0A8FD0] shrink-0" />
                  <span>
                    Requirements change — verify with the cited authority or a
                    qualified adviser
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (Map / Digital Graphic Card) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[440px] rounded-3xl overflow-hidden bg-[#071927] p-6 shadow-xl border border-slate-800 flex flex-col justify-between">
                {/* Globe / Network Graphic Background */}
                <div className="absolute inset-0 z-0 opacity-80">
                  <Image
                    src="/images/country-guides/hero.png"
                    alt="Global digital network map"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Top Floating Badge Node (Optional overlay effect) */}
                <div className="relative z-10 self-end">
                  {/* Visual element placeholder for interactive node UI if needed */}
                </div>

                {/* Floating Bottom Card: Germany Example */}
                <div className="relative z-10 self-end bg-white/95 backdrop-blur-md text-[#07243B] p-4 rounded-2xl shadow-lg border border-slate-100 max-w-[240px] space-y-1">
                  <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                    GERMANY — REVIEWED
                  </div>
                  <div className="text-xs font-bold leading-snug">
                    Wage tax + social insurance
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Monthly Cycle · EUR
                  </div>
                </div>

                {/* Bottom Left Badge */}
                <div className="relative z-10 self-start bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-[#07243B]">
                    128 jurisdictions covered
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4-Column Feature Strip */}
        </div>
      </section>
      <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="pt-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {footerFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EAF4FC] text-[#1781C7] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#07243B]">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
