"use client";

import React from "react";
import Image from "next/image";

interface StatItem {
  value: string;
  label: string;
}

const statsData: StatItem[] = [
  { value: "Balanced", label: "JOURNAL STATE" },
  { value: "96%", label: "MAPPING READY" },
  { value: "Accepted", label: "TARGET STATE" },
  { value: "2", label: "OPEN EXCEPTIONS" },
];

interface LogEntry {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeBg: string;
  badgeTextColor: string;
}

const logEntries: LogEntry[] = [
  {
    title: "NetSuite — Journal JE-2026-0812",
    subtitle: "Entity: EU Holdings BV · Debit/Credit balanced",
    badgeText: "Posted",
    badgeBg: "bg-[#70C9962E]",
    badgeTextColor: "text-[#8FE0AC]",
  },
  {
    title: "Xero — Journal JE-2026-0810",
    subtitle: "Entity: UK Ltd · Missing dimension mapping",
    badgeText: "Validation required",
    badgeBg: "bg-[#E6B4642E]",
    badgeTextColor: "text-[#F0CF94]",
  },
  {
    title: "SAP S/4HANA — Journal JE-2026-0809",
    subtitle: "Entity: DE GmbH · Rejected by target",
    badgeText: "Target rejection",
    badgeBg: "bg-[#E6786E2E]",
    badgeTextColor: "text-[#F0A49D]",
  },
];

export default function FinanceERPIntegrationsHero() {
  return (
    <section className="relative w-full overflow-hidden py-20 px-4 sm:px-6 lg:px-8 text-white min-h-[560px] flex items-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-integrations/bg1.png"
          alt="Finance and ERP integration background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Teal/Navy Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#0A8FD066]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label: #0A8FD0 */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>FINANCE & ERP INTEGRATIONS</span>
            </div>

            {/* Title: 36px */}
            <h1 className="text-3xl sm:text-[36px] font-bold text-white tracking-tight leading-tight">
              Connect payroll accounting to finance with control.
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-120">
              Map approved payroll accounting output into finance/ERP systems,
              preserve dimensions and posting states, and keep reconciliation
              exceptions visible from implementation through close.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:bg-[#087ab3] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer">
                Check your finance system 
              </button>
              <button className="px-5 py-3 rounded-xl bg-transparent border border-slate-400/50 hover:bg-white/5 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer">
                Talk to an integration specialist
              </button>
            </div>
          </div>

          {/* Right Column: Accounting Integration Control Panel Box */}
          <div className="lg:col-span-6">
            <div className="bg-[#0A2E4B] border border-slate-700/60 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-2xl space-y-5">
              {/* Box Top Header */}
              <div className="flex items-center justify-between text-xs border-b border-slate-700/50 pb-4">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <span className="w-2 h-2 rounded-sm bg-[#0A8FD0]" />
                  <span>Accounting Integration Control</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#FFFFFF1A] text-[#BFE0F5] text-[11px] border border-slate-700/50">
                  Last verified Aug 22, 2026
                </span>
              </div>

              {/* Top 4 Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {statsData.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFFFFF0F]/80 border border-slate-700/40 rounded-xl p-3 space-y-1"
                  >
                    <div className="text-sm sm:text-base font-bold text-white truncate">
                      {stat.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-semibold text-slate-400 tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Log List */}
              <div className="space-y-2.5 pt-1">
                {logEntries.map((log, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFFFFF0F]/80 border border-slate-700/40 rounded-xl p-3.5 flex items-center justify-between gap-3"
                  >
                    <div className="space-y-0.5 min-w-0">
                      <h4 className="text-xs font-semibold text-white truncate">
                        {log.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 truncate">
                        {log.subtitle}
                      </p>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-medium shrink-0 ${log.badgeBg} ${log.badgeTextColor}`}
                    >
                      {log.badgeText}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
