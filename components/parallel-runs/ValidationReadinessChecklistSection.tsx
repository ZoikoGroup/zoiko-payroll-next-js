"use client";

import React from "react";

export default function ValidationReadinessChecklistSection() {
  const readyCards = [
    {
      badge: "Ready",
      title: "Configuration ready",
      description: "Payroll rules and workflows approved.",
    },
    {
      badge: "Ready",
      title: "Migration ready",
      description: "Data mapped, cleansed and transferred.",
    },
    {
      badge: "Ready",
      title: "Integrations ready",
      description: "Connected systems verified end to end.",
    },
    {
      badge: "Ready",
      title: "Payroll calendar ready",
      description: "Cycles and cutoffs confirmed.",
    },
  ] as const;

  const inProgressCards = [
    {
      badge: "In progress",
      title: "Test users ready",
      description: "Representative sample confirmed.",
    },
    {
      badge: "In progress",
      title: "Acceptance criteria",
      description: "Sign-off thresholds agreed with stakeholders.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F1F5F9]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight mb-12">
          Validation readiness checklist.
        </h2>

        {/* Grouped Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
          {/* Left Group: Ready Items (4 Cards inside Light Green Tinted Wrapper) */}
          <div className="lg:col-span-8 bg-[#309E3A0F] border border-[#309E3A66] rounded-2xl p-4 sm:p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {readyCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-xs flex flex-col items-start"
                >
                  {/* Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#16A34A] text-[11px] font-semibold mb-3">
                    {card.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#0B192C] mb-1">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Group: In Progress Items (2 Cards inside Light Amber Tinted Wrapper) */}
          <div className="lg:col-span-4 bg-[#F59E0B0F] border border-[#F39C0B66] rounded-2xl p-4 sm:p-5">
            <div className="grid grid-cols-1 gap-4">
              {inProgressCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-xs flex flex-col items-start"
                >
                  {/* Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#D97706] text-[11px] font-semibold mb-3">
                    {card.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#0B192C] mb-1">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
