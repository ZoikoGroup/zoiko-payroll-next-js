"use client";

import React, { useState } from "react";

type ReadinessStatus = "Ready" | "Conditional" | "No-Go";

interface CutoverMilestone {
  id: string;
  title: string;
  status: ReadinessStatus;
}

const statusBadgeStyles: Record<ReadinessStatus, string> = {
  Ready: "bg-[#E6F4EA] text-[#137333]",
  Conditional: "bg-[#FEF7E0] text-[#B06000]",
  "No-Go": "bg-[#FCE8E6] text-[#C5221F]",
};

const filterPills: { status: ReadinessStatus; label: string; style: string }[] =
  [
    {
      status: "Ready",
      label: "Ready for Go-Live",
      style: "bg-[#E6F4EA] text-[#137333]",
    },
    {
      status: "Conditional",
      label: "Conditional Go",
      style: "bg-[#FEF7E0] text-[#B06000]",
    },
    {
      status: "No-Go",
      label: "No-Go",
      style: "bg-[#FCE8E6] text-[#C5221F]",
    },
  ];

const milestonesLeft: CutoverMilestone[] = [
  { id: "1", title: "Final Source Freeze", status: "Ready" },
  { id: "2", title: "User / Access Readiness", status: "Ready" },
  { id: "3", title: "Calendar / Cutoff", status: "Ready" },
  { id: "4", title: "Contingency / Rollback Plan", status: "Ready" },
];

const milestonesRight: CutoverMilestone[] = [
  { id: "5", title: "Final Migration", status: "Ready" },
  { id: "6", title: "Funding / Payment Readiness", status: "Conditional" },
  { id: "7", title: "Integration Readiness", status: "Conditional" },
  { id: "8", title: "Communications", status: "Ready" },
];

export default function CutoverCommandCenterSection() {
  const [selectedFilter, setSelectedFilter] = useState<ReadinessStatus | null>(
    null,
  );

  const filterItem = (item: CutoverMilestone) =>
    selectedFilter ? item.status === selectedFilter : true;

  const leftItems = milestonesLeft.filter(filterItem);
  const rightItems = milestonesRight.filter(filterItem);

  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>CUTOVER & GO-LIVE COMMAND CENTER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-[#07243B] leading-tight">
            Never improvise a rollback to protect a date
          </h2>
        </div>

        {/* Status Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filterPills.map((pill) => {
            const isSelected = selectedFilter === pill.status;
            return (
              <button
                key={pill.status}
                onClick={() =>
                  setSelectedFilter(isSelected ? null : pill.status)
                }
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                  pill.style
                } ${
                  isSelected
                    ? "ring-2 ring-slate-400 ring-offset-2 scale-105 border-transparent"
                    : "border-transparent opacity-90 hover:opacity-100"
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* 2-Column Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-3">
            {leftItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                  {item.title}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold shrink-0 ${
                    statusBadgeStyles[item.status]
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            {rightItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                  {item.title}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold shrink-0 ${
                    statusBadgeStyles[item.status]
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout Box */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border-l-4 border-l-[#0A8FD0] border border-slate-200/80 shadow-md">
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            <strong className="text-[#07243B] font-bold">
              Distinct milestones.
            </strong>{" "}
            Technical activation, payroll go-live and commercial Service
            Commencement are tracked as separate facts. The first production
            cycle moves into heightened monitoring under Hypercare — never
            assumed complete on go-live day alone.
          </p>
        </div>
      </div>
    </section>
  );
}
