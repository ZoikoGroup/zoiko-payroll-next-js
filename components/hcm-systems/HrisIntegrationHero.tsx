"use client";

import React from "react";
import Link from "next/link";

interface IntegrationDetail {
  label: string;
  value: React.ReactNode;
}

const integrationDetails: IntegrationDetail[] = [
  {
    label: "Status",
    value: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E7F6EE] text-[#1C8A58] border border-emerald-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1C8A58] animate-pulse" />
        Confirmed
      </span>
    ),
  },
  {
    label: "Data domains verified",
    value: <span className="text-[#FFFFFF99] font-medium">6 of 8</span>,
  },
  {
    label: "Direction",
    value: <span className="text-[#FFFFFF99] font-medium">Varies by domain</span>,
  },
  {
    label: "Mapping readiness",
    value: (
      <span className="text-[#FFFFFF99] font-medium">Ready for discovery</span>
    ),
  },
  {
    label: "Test status",
    value: <span className="text-[#FFFFFF99] font-medium">Not started</span>,
  },
];

export default function HrisIntegrationHero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#08132B] via-[#0B1F3F] to-[#0A1830] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Header Copy */}
        <div className="space-y-4">
          {/* Tag Line */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8FB4FF] uppercase">
            <span className="w-3 h-0.5 bg-[#8FB4FF]" />
            <span>HRIS & HCM INTEGRATIONS</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight text-white leading-tight">
            Connect HR and payroll data with clear ownership
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-[#FFFFFFBF] max-w-150 leading-relaxed">
            Use Zoiko Payroll integration workflows to connect approved HRIS and
            HCM systems, map payroll-relevant workforce data, control change
            timing, and keep exceptions visible from implementation through
            ongoing operations.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="button"
              className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#FFFFFF1A] hover:bg-[#254673] border border-slate-700/80 transition-colors shadow-sm"
            >
              Talk to an integration specialist
            </button>
            <Link
              href="#"
              className="text-xs sm:text-sm font-medium text-[#8FB4FF] hover:underline flex items-center gap-1 transition-all"
            >
              Already using Zoiko Payroll? Get integration support &rarr;
            </Link>
          </div>
        </div>

        {/* Integration Card Box */}
        <div className="bg-[#0E1F3F] border border-[#FFFFFF24] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          {/* Card Top Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FFFFFF14] text-[#FFFFFFCC] border border-slate-700/50">
              System: Workday HCM
            </span>
            <span className="text-xs bg-[#FFFFFF14] rounded-full px-3.5 py-1.5 text-[#FFFFFFCC] font-medium">
              Last verified: Aug 12, 2026
            </span>
          </div>

          {/* Key-Value Details List */}
          <div className="divide-y divide-slate-800/60">
            {integrationDetails.map((detail, idx) => (
              <div
                key={idx}
                className="py-4 flex items-center justify-between text-xs sm:text-sm"
              >
                <span className="text-[#FFFFFFCC] font-medium">
                  {detail.label}
                </span>
                <div>{detail.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
