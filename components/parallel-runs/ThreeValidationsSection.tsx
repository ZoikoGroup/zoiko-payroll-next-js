"use client";

import React from "react";

export default function ThreeValidationsSection() {
  const validations = [
    {
      title: "Statutory validation",
      description:
        "Tax, filings and compliance calculations checked against local requirements.",
      icon: (
        <svg
          className="w-5 h-5 text-[#0A78C3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Payment validation",
      description:
        "Payment files and bank instructions verified before funds move.",
      icon: (
        <svg
          className="w-5 h-5 text-[#0A78C3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Finance & GL validation",
      description: "Journal entries and reconciliations balance to the ledger.",
      icon: (
        <svg
          className="w-5 h-5 text-[#0A78C3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-12 max-w-2xl leading-tight">
          Three validations that stand between test and trust.
        </h2>

        {/* 3-Column Validation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {validations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs flex flex-col items-start transition-all hover:shadow-md"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-xl bg-[#E4F1FA] flex items-center justify-center mb-6 shrink-0">
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#0B192C] mb-2">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
