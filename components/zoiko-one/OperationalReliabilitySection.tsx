"use client";

import React from "react";

// Administration card items
const ADMINISTRATION_ITEMS = [
  {
    label: "Coordinated admin",
    badgeText: "Evaluation question",
    badgeType: "neutral",
  },
  {
    label: "Product-specific admin",
    badgeText: "Verified",
    badgeType: "success",
  },
  {
    label: "Cross-product roles",
    badgeText: "Conditional",
    badgeType: "warning",
  },
];

// Reporting card items
const REPORTING_ITEMS = [
  {
    label: "Shared metric definitions",
    badgeText: "Not currently verified",
    badgeType: "neutral",
  },
  {
    label: "Payroll-specific reporting",
    badgeText: "Verified",
    badgeType: "success",
  },
  {
    label: "Universal reporting truth",
    badgeText: "Not claimed",
    badgeType: "danger",
  },
];

// Reliability card items
const RELIABILITY_ITEMS = [
  {
    label: "Health monitoring",
    badgeText: "Verified",
    badgeType: "success",
  },
  {
    label: "Partial-failure handling",
    badgeText: "Verified",
    badgeType: "success",
  },
  {
    label: "Retry & duplicate prevention",
    badgeText: "Verified",
    badgeType: "success",
  },
  {
    label: "Support ownership",
    badgeText: "Named per connection",
    badgeType: "info",
  },
];

export default function OperationalReliabilitySection() {
  // Helper function to render status badges
  const renderBadge = (text: string, type: string) => {
    switch (type) {
      case "success":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-[11px] font-semibold shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
            {text}
          </span>
        );
      case "warning":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] text-[11px] font-semibold shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
            {text}
          </span>
        );
      case "danger":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEE2E2] text-[#B91C1C] text-[11px] font-semibold shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
            {text}
          </span>
        );
      case "info":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0369A1] text-[11px] font-semibold shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
            {text}
          </span>
        );
      case "neutral":
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1F5F9] text-[#64748B] text-[11px] font-semibold shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
            {text}
          </span>
        );
    }
  };

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>ADMINISTRATION, REPORTING + OPERATIONAL RELIABILITY</span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
            Connected does not mean uncontrolled.
          </h2>
        </div>

        {/* Feature Banner Image with Floating Overlay Pill Badges */}
        <div className="relative rounded-3xl overflow-hidden border border-[#E1E8ED] shadow-sm h-64 sm:h-80 lg:h-96 w-full">
          <img
            src="/images/zoiko-one/explain.png"
            alt="Team reviewing operational reliability and reporting dashboard"
            className="w-full h-full object-cover"
          />

          {/* Top-Left Overlay Badge */}
          <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-xs border border-black/5">
            <span className="text-xs font-bold text-[#0A1928]">
              Health monitored
            </span>
          </div>

          {/* Bottom-Right Overlay Badge */}
          <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-xs border border-black/5">
            <span className="text-xs font-bold text-[#0A1928]">
              Support ownership named
            </span>
          </div>
        </div>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Card 1: Administration */}
          <div className="bg-white border border-[#E1E8ED] rounded-2xl p-6 space-y-5 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-wider uppercase text-[#5C6E7E]">
                ADMINISTRATION
              </span>
              <div className="space-y-3.5">
                {ADMINISTRATION_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-2 border-b border-[#F1F5F9] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-xs sm:text-sm font-medium text-[#0A1928]">
                      {item.label}
                    </span>
                    {renderBadge(item.badgeText, item.badgeType)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Reporting */}
          <div className="bg-white border border-[#E1E8ED] rounded-2xl p-6 space-y-5 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-wider uppercase text-[#5C6E7E]">
                REPORTING
              </span>
              <div className="space-y-3.5">
                {REPORTING_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-2 border-b border-[#F1F5F9] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-xs sm:text-sm font-medium text-[#0A1928]">
                      {item.label}
                    </span>
                    {renderBadge(item.badgeText, item.badgeType)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Reliability */}
          <div className="bg-white border border-[#E1E8ED] rounded-2xl p-6 space-y-5 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-wider uppercase text-[#5C6E7E]">
                RELIABILITY
              </span>
              <div className="space-y-3.5">
                {RELIABILITY_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-2 border-b border-[#F1F5F9] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-xs sm:text-sm font-medium text-[#0A1928]">
                      {item.label}
                    </span>
                    {renderBadge(item.badgeText, item.badgeType)}
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
