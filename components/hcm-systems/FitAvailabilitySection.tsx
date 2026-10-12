"use client";

import React from "react";
import Image from "next/image";

interface IntegrationCard {
  title: string;
  subtitle: string;
  statusText: string;
  statusBg: string;
  statusColor: string;
  dotColor: string;
}

const integrationCards: IntegrationCard[] = [
  {
    title: "Workday HCM",
    subtitle: "API-supported · Verified Aug 12, 2026",
    statusText: "Confirmed",
    statusBg: "bg-emerald-50 border-emerald-200/60",
    statusColor: "text-emerald-700",
    dotColor: "bg-emerald-500",
  },
  {
    title: "BambooHR",
    subtitle: "File exchange · Verified Jun 2026",
    statusText: "Likely — validation needed",
    statusBg: "bg-blue-50 border-blue-200/60",
    statusColor: "text-blue-600",
    dotColor: "bg-blue-500",
  },
  {
    title: "SAP SuccessFactors",
    subtitle: "API-supported · Partial domains",
    statusText: "Partial",
    statusBg: "bg-amber-50 border-amber-200/60",
    statusColor: "text-amber-700",
    dotColor: "bg-amber-500",
  },
  {
    title: "Rippling",
    subtitle: "Not yet verified",
    statusText: "Unknown",
    statusBg: "bg-slate-100 border-slate-200/60",
    statusColor: "text-slate-600",
    dotColor: "bg-slate-400",
  },
  {
    title: "Legacy in-house HRIS",
    subtitle: "No current approved path",
    statusText: "Unavailable",
    statusBg: "bg-rose-50 border-rose-200/60",
    statusColor: "text-rose-600",
    dotColor: "bg-rose-500",
  },
  {
    title: "UKG Pro",
    subtitle: "Managed exchange · Verified Jul 2026",
    statusText: "Confirmed",
    statusBg: "bg-emerald-50 border-emerald-200/60",
    statusColor: "text-emerald-700",
    dotColor: "bg-emerald-500",
  },
];

export default function FitAvailabilitySection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Hero Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Container with Rounded Corners */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm border border-slate-100">
            <Image
              src="/images/footer-integrations/1.png"
              alt="Two professionals reviewing HR and payroll data on a laptop"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Text Block */}
          <div className="space-y-4 lg:pl-4">
            {/* Tag line */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
              <span className="w-3 h-0.5 bg-[#0284C7]" />
              <span>FIT / AVAILABILITY + CONFIDENCE STATES</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-[24px] font-bold text-[#0F172A] tracking-tight">
              Confirmed doesn't mean implemented.
            </h2>

            {/* Subheading */}
            <p className="text-sm text-[#5B646B] leading-relaxed">
              Every result shows evidence date and next action — never a bare
              green checkmark.
            </p>
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {integrationCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#0F172A]">
                  {card.title}
                </h3>
                <p className="text-xs text-[#5B646B]">{card.subtitle}</p>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${card.statusBg} ${card.statusColor}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${card.dotColor}`}
                  />
                  {card.statusText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
