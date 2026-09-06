"use client";

import React from "react";

export default function ValidationPrinciplesSection() {
  const principles = [
    {
      title: "Representative",
      description:
        "Test populations, scenarios and data mirror real payroll conditions.",
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Explainable",
      description: "Every variance has a documented, understood root cause.",
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
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      title: "Traceable",
      description: "Evidence, decisions and retests are recorded end to end.",
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
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      ),
    },
    {
      title: "Approved",
      description:
        "Go-live follows a signed, governed decision — not a default.",
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
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F5F8FA]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-12 max-w-3xl leading-tight">
          Four principles hold every validation cycle together.
        </h2>

        {/* 4-Column Principles Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {principles.map((item, idx) => (
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
