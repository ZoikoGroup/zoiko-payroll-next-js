"use client";

import React from "react";

export default function SuccessMetricsSection() {
  const metrics = [
    {
      title: "Operational reliability",
      description: "Fewer recurring exceptions and reopened runs.",
      icon: (
        <svg
          className="w-4 h-4 text-[#2563EB]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Process efficiency",
      description: "Reduced manual steps and duplicate reconciliation.",
      icon: (
        <svg
          className="w-4 h-4 text-[#2563EB]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Adoption",
      description: "Required roles using intended workflows.",
      icon: (
        <svg
          className="w-4 h-4 text-[#2563EB]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Integration health",
      description: "Lower repeat failure rate and faster resolution.",
      icon: (
        <svg
          className="w-4 h-4 text-[#2563EB]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Governance",
      description: "Completed reviews and clear evidence of ownership.",
      icon: (
        <svg
          className="w-4 h-4 text-[#2563EB]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Expansion readiness",
      description: "New countries launched without uncontrolled complexity.",
      icon: (
        <svg
          className="w-4 h-4 text-[#2563EB]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Category Label */}
        <p className="text-xs font-semibold text-[#2563EB] tracking-wide mb-3">
          Success metrics
        </p>

        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-12 max-w-2xl">
          Measure what the customer is trying to improve.
        </h2>

        {/* 6 Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 shadow-xs flex flex-col items-start transition-all hover:shadow-md"
            >
              {/* Light Blue Soft Icon Container */}
              <div className="w-9 h-9 rounded-xl bg-[#F8FAFC] flex items-center justify-center mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#0B192C] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
