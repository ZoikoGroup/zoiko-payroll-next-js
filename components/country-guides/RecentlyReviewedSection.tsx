"use client";

import React from "react";

interface ReviewActivity {
  code: string;
  codeBg: string;
  country: string;
  updateText: string;
  date: string;
}

const activityData: ReviewActivity[] = [
  {
    code: "FR",
    codeBg: "bg-[#1D4ED8]",
    country: "France",
    updateText:
      "Material update — 2026 URSSAF contribution base thresholds revalidated.",
    date: "Jul 21, 2026",
  },
  {
    code: "SG",
    codeBg: "bg-[#991B1B]",
    country: "Singapore",
    updateText:
      "Routine review — no material change to CPF contribution structure.",
    date: "Jul 02, 2026",
  },
  {
    code: "CA",
    codeBg: "bg-[#B91C1C]",
    country: "Canada",
    updateText:
      "Material update — provincial payroll tax notice added for Ontario.",
    date: "Jul 05, 2026",
  },
  {
    code: "US",
    codeBg: "bg-[#1E3A8A]",
    country: "United States",
    updateText:
      "Routine review — state filing calendar cross-checked against source.",
    date: "Jul 14, 2026",
  },
];

export default function RecentlyReviewedSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>RECENTLY REVIEWED</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Guides with recent review activity.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Governed by review date and material change events — not a generic
            content chronology.
          </p>
        </div>

        {/* Activity List Container */}
        <div className="bg-white rounded-2xl border border-slate-200/80 divide-y divide-slate-100 shadow-2xs overflow-hidden">
          {activityData.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
            >
              {/* Country Badge & Text */}
              <div className="flex items-start sm:items-center gap-4">
                <div
                  className={`w-9 h-9 rounded-lg ${item.codeBg} text-white font-bold text-xs flex items-center justify-center shrink-0 font-mono shadow-2xs`}
                >
                  {item.code}
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-[#07243B]">
                    {item.country}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {item.updateText}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="text-[11px] font-bold text-slate-400 font-mono shrink-0 self-end sm:self-auto">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
