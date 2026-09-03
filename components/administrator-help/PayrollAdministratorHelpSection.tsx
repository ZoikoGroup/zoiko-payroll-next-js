"use client";

import React from "react";

interface MetricsItem {
  value: string;
  label: string;
}

interface CaseItem {
  id: string;
  title: string;
  workstream: string;
  impact: string;
  badgeText: string;
  badgeStyle: string;
}

const metrics: MetricsItem[] = [
  { value: "Approve", label: "STAGE" },
  { value: "Sep 2", label: "CUTOFF" },
  { value: "1", label: "OPEN CASE" },
  { value: "Operational", label: "PLATFORM STATUS" },
];

const cases: CaseItem[] = [
  {
    id: "PA-4471",
    title: "Missing approver for pay group",
    workstream: "Approvals",
    impact: "Deadline at risk",
    badgeText: "S1 Critical",
    badgeStyle: "bg-[#E6786E2E] text-[#F0A49D]",
  },
  {
    id: "PA-4468",
    title: "Validation error, 3 records",
    workstream: "Inputs",
    impact: "Non-blocking",
    badgeText: "In progress",
    badgeStyle: "bg-[#E6B4642E] text-[#F0CF94]",
  },
];

export default function PayrollAdministratorHelpSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
              <span>/</span>
              <span>PAYROLL ADMINISTRATOR HELP</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-[1px] text-[#07243B] leading-[1.15]">
              Resolve payroll issues before they become payroll delays
            </h1>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed tracking-[1px] max-w-xl">
              Get role-aware help across inputs, calculations, approvals,
              payments, filings, close, reporting, access and integrations.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              className="bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:opacity-95 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all tracking-[1px]"
            >
              Get payroll support
            </button>
            <button
              type="button"
              className="bg-white hover:bg-slate-50 text-[#07243B] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl border border-slate-200/80 shadow-2xs transition-all tracking-[1px]"
            >
              Check system status
            </button>
          </div>
        </div>

        {/* Right Dark Blue Card Dashboard Widget */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full bg-[#0A2E4B] text-white rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5 border border-slate-800/40">
            {/* Widget Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-xs bg-[#3EA3E0]" />
                <h3 className="text-sm font-bold tracking-[1px]">
                  Payroll Support Navigator
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-300 bg-[#FFFFFF0D] px-3 py-1 rounded-md tracking-[1px] border border-white/5 self-start sm:self-auto">
                EU Holdings BV · Bi-weekly · Sep 2026
              </span>
            </div>

            {/* Metrics Row Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFFFF0D] rounded-xl p-2 space-y-1 border border-white/5"
                >
                  <div className="text-sm font-bold tracking-[1px] truncate">
                    {metric.value}
                  </div>
                  <div className="text-[9px] font-bold tracking-[1px] text-[#8FB4D0] uppercase font-mono">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Case Cards List */}
            <div className="space-y-3 pt-1">
              {cases.map((caseItem) => (
                <div
                  key={caseItem.id}
                  className="bg-[#FFFFFF0D] rounded-2xl p-4 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold tracking-[1px] text-[#DCEEFB]">
                      Case #{caseItem.id} — {caseItem.title}
                    </h4>
                    <p className="text-[11px] font-medium text-[#8FB4D0] tracking-[1px]">
                      Workstream: {caseItem.workstream} · Impact:{" "}
                      {caseItem.impact}
                    </p>
                  </div>

                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full shrink-0 tracking-[1px] self-start sm:self-auto ${caseItem.badgeStyle}`}
                  >
                    {caseItem.badgeText}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
