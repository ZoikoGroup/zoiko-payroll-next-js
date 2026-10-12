"use client";

import React from "react";

export default function PrivacyMappingSection() {
  const cards = [
    {
      badge: "CERTIFICATION",
      badgeBg: "bg-[#E3EFE6]",
      badgeText: "text-[#3F6B54]",
      title: "Privacy-management certification",
      description: "Shown only where current and scoped.",
    },
    {
      badge: "INDEPENDENT REVIEW",
      badgeBg: "bg-[#E1EEF9]",
      badgeText: "text-[#155A8A]",
      title: "Independently reviewed mapping",
      description: "Third-party reviewed alignment to a named framework.",
    },
    {
      badge: "INTERNAL MAPPING",
      badgeBg: "bg-[#F3E9CC]",
      badgeText: "text-[#8C6D2F]",
      title: "Internal framework mapping",
      description: "Self-assessed alignment — not independently verified.",
    },
    {
      badge: "NOT APPLICABLE",
      badgeBg: "bg-[#E9F0F8]",
      badgeText: "text-[#8592A0]",
      title: "Provider assurance",
      description:
        "Where a provider's own assurance applies to a specific integration.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-5xl mx-auto space-y-12 text-center">
        {/* Header Block */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              PRIVACY, AI GOVERNANCE & FRAMEWORK MAPPING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            A mapping is not a certification
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            AI governance is feature- and system-specific. Frameworks like NIST,
            CIS or CSA are always labeled as mappings{" "}
            <span className="text-slate-400">—</span> never presented as
            certifications.
          </p>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-2 flex flex-col justify-start"
            >
              <div className="space-y-3">
                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider ${card.badgeBg} ${card.badgeText}`}
                  >
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-[#07243B]">
                  {card.title}
                </h3>
              </div>
              <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
