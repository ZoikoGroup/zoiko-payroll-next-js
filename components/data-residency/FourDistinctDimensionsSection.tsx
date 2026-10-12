"use client";

import React from "react";

export default function FourDistinctDimensionsSection() {
  const cards = [
    {
      title: "Residency",
      description: "Where a defined dataset is stored at rest.",
      warning: "Storage location alone does not describe processing.",
    },
    {
      title: "Processing",
      description: "Where data may be used, calculated, accessed or handled.",
      warning: "Processing may occur outside the storage region.",
    },
    {
      title: "Transfers",
      description: "Legal movement or access across relevant boundaries.",
      warning: "A transfer mechanism is never inferred from geography.",
    },
    {
      title: "Recovery",
      description:
        "Where backups, replicas or disaster-recovery copies may exist.",
      warning: "Recovery location may differ from primary storage.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-12 text-center">
        {/* Header Block */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              FOUR DISTINCT DIMENSIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            One geographic claim never implies another
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs flex flex-col justify-between space-y-6"
            >
              {/* Main Content */}
              <div className="space-y-2">
                <h3 className="text-sm font-extrabold text-[#07243B]">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {card.description}
                </p>

                {/* Warning Notice Box */}
                <div className="bg-[#F3E9CC] border border-[#F3E9CC] rounded-[8px] p-4 flex items-start gap-2.5">
                  <span className="text-amber-700 font-bold shrink-0 text-xs">
                    ⚠️
                  </span>
                  <p className="text-[11.5px] text-amber-900 font-bold leading-snug">
                    {card.warning}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
