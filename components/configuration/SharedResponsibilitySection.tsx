"use client";

import React from "react";

export default function SharedResponsibilitySection() {
  const responsibilityCards = [
    {
      title: "CUSTOMER",
      description:
        "Define/approve business policies; provide employer-specific values/registrations; identify owners; approve GL/payment/security decisions; validate business outcomes; accept exceptions within governance.",
    },
    {
      title: "ZOIKO PAYROLL",
      description:
        "Provide the supported configuration model; implement agreed configuration as contracted; maintain product/rule governance; document versions; produce validation evidence; flag unsupported/extension needs.",
    },
    {
      title: "SHARED",
      description:
        "Requirements clarification, scope decisions, mapping, integration dependencies, test cases, change impact, cutover/freeze planning, and final acceptance.",
    },
  ] as const;

  return (
    <div className="flex items-start justify-start py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-start px-4 sm:px-6">
        {/* Category Header */}
        <div className="flex items-start gap-2 mb-3">
          <span className="text-[#0A78C3] font-bold text-sm">/</span>
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
            SHARED RESPONSIBILITY
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-10">
          Configuration is a partnership with clear ownership.
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {responsibilityCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 shadow-xs flex flex-col items-start transition-all hover:shadow-md"
            >
              {/* Card Sub-header / Title */}
              <h3 className="text-xs sm:text-sm font-extrabold text-[#0A78C3] tracking-wider uppercase mb-4">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
