"use client";

import React from "react";

interface MainStatusBadge {
  label: string;
  className: string;
}

interface ComponentStatus {
  name: string;
  status: string;
  statusClass: string;
}

const statusLegend: MainStatusBadge[] = [
  {
    label: "Operational",
    className: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    label: "Incident",
    className: "bg-[#FCE8E6] text-[#C5221F]",
  },
  {
    label: "External Dependency",
    className: "bg-[#FEF3D6] text-[#8F6B00]",
  },
  {
    label: "Unknown",
    className: "bg-white text-slate-700 border border-slate-200/80",
  },
];

const systemComponents: ComponentStatus[] = [
  {
    name: "Payroll Calculation Engine",
    status: "Operational",
    statusClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    name: "Approvals & Workflow",
    status: "Operational",
    statusClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    name: "Banking Provider Connection",
    status: "External Dependency",
    statusClass: "bg-[#FEF3D6] text-[#8F6B00]",
  },
  {
    name: "Reporting & Exports",
    status: "Operational",
    statusClass: "bg-[#E6F4EA] text-[#137333]",
  },
];

export default function KnownIssueSystemStatusSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>KNOWN ISSUE & SYSTEM STATUS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-[1px] text-[#07243B] leading-tight">
            A confirmed platform incident is never assumed
          </h2>

          {/* Top Status Legend Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {statusLegend.map((badge, idx) => (
              <span
                key={idx}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-[1px] ${badge.className}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* 2-Column Component Status Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {systemComponents.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs flex items-center justify-between gap-4"
            >
              <span className="text-xs sm:text-sm font-bold text-[#07243B] tracking-[1px]">
                {item.name}
              </span>
              <span
                className={`text-[11px] font-semibold px-3 py-1 rounded-full shrink-0 tracking-[1px] ${item.statusClass}`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Subtext Footnote */}
        <p className="text-center text-xs text-slate-400 font-medium tracking-[1px] max-w-2xl mx-auto leading-relaxed">
          A tenant-specific configuration or data issue is never presented as a
          platform incident when the cause is unknown — routes to case diagnosis
          instead.
        </p>
      </div>
    </section>
  );
}
