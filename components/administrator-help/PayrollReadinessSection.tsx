"use client";

import React from "react";

interface StatusBadge {
  label: string;
  className: string;
}

interface ReadinessGate {
  gate: string;
  status: string;
  statusClass: string;
}

const statusLegend: StatusBadge[] = [
  {
    label: "Ready",
    className: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    label: "Attention Required",
    className: "bg-[#FEF3D6] text-[#8F6B00]",
  },
  {
    label: "Blocked",
    className: "bg-[#FCE8E6] text-[#C5221F]",
  },
];

const readinessGates: ReadinessGate[] = [
  {
    gate: "Period state",
    status: "Ready",
    statusClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    gate: "Cutoff",
    status: "Ready",
    statusClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    gate: "Required inputs",
    status: "Attention Required",
    statusClass: "bg-[#FEF3D6] text-[#8F6B00]",
  },
  {
    gate: "Approvals",
    status: "Blocked",
    statusClass: "bg-[#FCE8E6] text-[#C5221F]",
  },
  {
    gate: "Funding",
    status: "Ready",
    statusClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    gate: "Jurisdiction readiness",
    status: "Ready",
    statusClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    gate: "Known incidents",
    status: "None",
    statusClass: "bg-[#E6F4EA] text-[#137333]",
  },
];

export default function PayrollReadinessSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>PAYROLL READINESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-[1px] text-[#07243B] leading-tight">
            Find what is stopping the payroll cycle
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-medium tracking-[1px]">
            Readiness gates are never bypassed simply to meet a deadline.
          </p>
        </div>

        {/* Readiness Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs space-y-6">
          {/* Top Status Legend Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pb-2">
            {statusLegend.map((badge, idx) => (
              <span
                key={idx}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-[1px] ${badge.className}`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* Gates List */}
          <div className="divide-y divide-slate-100 border-t border-slate-100">
            {readinessGates.map((item, idx) => (
              <div
                key={idx}
                className="py-3.5 flex items-center justify-between gap-4"
              >
                <span className="text-xs sm:text-sm font-bold text-[#07243B] tracking-[1px]">
                  {item.gate}
                </span>
                <span
                  className={`text-[11px] font-semibold px-3 py-1 rounded-full shrink-0 tracking-[1px] ${item.statusClass}`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtext Footnote */}
        <p className="text-center text-xs text-slate-400 font-medium tracking-[1px] mx-auto leading-relaxed">
          Scope shown: EU Holdings BV · DE, FR · Bi-weekly pay group · Period
          ending Aug 31, 2026 — where authorized.
        </p>
      </div>
    </section>
  );
}
