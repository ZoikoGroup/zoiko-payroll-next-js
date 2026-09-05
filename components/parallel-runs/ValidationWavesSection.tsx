"use client";

import React from "react";

export default function ValidationWavesSection() {
  const waves = [
    {
      country: "United States",
      wave: "Wave 1 · Zoiko Inc",
      badge: "Approved",
      badgeBg: "bg-[#DCFCE7]",
      badgeText: "text-[#16A34A]",
    },
    {
      country: "Germany",
      wave: "Wave 2 · Zoiko GmbH",
      badge: "Retest",
      badgeBg: "bg-[#FEF3C7]",
      badgeText: "text-[#D97706]",
    },
    {
      country: "Singapore",
      wave: "Wave 2 · Zoiko Pte Ltd",
      badge: "In progress",
      badgeBg: "bg-[#E0F2FE]",
      badgeText: "text-[#0284C7]",
    },
    {
      country: "Brazil",
      wave: "Wave 3 · Zoiko Ltda",
      badge: "Scheduled",
      badgeBg: "bg-[#EEF2FF]",
      badgeText: "text-[#4F46E5]",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F5F8FA]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-12 max-w-xl">
          Validation runs wave by wave,
          <br />
          market by market.
        </h2>

        {/* 4-Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {waves.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs flex flex-col items-start transition-all hover:shadow-md"
            >
              {/* Country Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#0B192C] mb-1">
                {item.country}
              </h3>

              {/* Wave & Entity Info */}
              <p className="text-xs text-[#64748B] mb-6 font-medium">
                {item.wave}
              </p>

              {/* Status Badge */}
              <span
                className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold ${item.badgeBg} ${item.badgeText}`}
              >
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
