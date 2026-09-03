"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, CheckSquare, Target, Server } from "lucide-react";

export default function GlobalPayrollCoverageHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search action
  };

  return (
    <section className="relative bg-gradient-to-r from-[#0E2A47] to-[#163869] w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-white overflow-hidden min-h-[520px] flex items-center">
      {/* Background Image with Dark Blue Overlay */}
      <Image
        src="/images/jurisdiction-directory/hero.jpg"
        alt="Team discussing global payroll coverage around a conference table"
        fill
        className="object-cover opacity-20 object-center"
        priority
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-8 text-left">
        {/* Header Block */}
        <div className="space-y-4">
          <div className="flex items-center justify-start gap-2 text-xs font-semibold tracking-[1px] text-[#8FD0F2] uppercase font-mono">
            <span>/</span>
            <span>GLOBAL PAYROLL COVERAGE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[0.5px] text-white leading-tight">
            Find payroll coverage by jurisdiction
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed tracking-[0.5px] max-w-2xl">
            Search countries and territories to see available payroll
            capabilities, delivery models, local guidance, and important
            coverage conditions — all from one governed directory.
          </p>
        </div>

        {/* Search Input Bar */}
        <form onSubmit={handleSearch} className="relative max-w-2xl">
          <div className="bg-white rounded-xl p-1.5 pl-5 flex items-center shadow-2xl border border-white/20">
            <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g., United States, UK, India, CA, Europe"
              className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none tracking-[0.5px]"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] hover:bg-[#0878B0] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors duration-200 tracking-[0.5px] shrink-0"
            >
              Search
            </button>
          </div>
        </form>

        {/* Feature Highlights Row */}
        <div className="flex flex-wrap items-center justify-start gap-6 sm:gap-8 pt-2 text-xs font-medium text-slate-200 tracking-[0.5px]">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-[#1483CE]" />
            <span>Capability-specific</span>
          </div>

          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[#1483CE]" />
            <span>Effective-dated</span>
          </div>

          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-[#1483CE]" />
            <span>Delivery model disclosed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
