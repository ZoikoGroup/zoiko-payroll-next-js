"use client";

import React from "react";

interface SeverityCard {
  title: string;
  dotColor: string;
  description: string;
}

const severityCards: SeverityCard[] = [
  {
    title: "Blocker",
    dotColor: "bg-[#EF4444]",
    description: "Stops the affected result from advancing to close.",
  },
  {
    title: "Warning",
    dotColor: "bg-[#F59E0B]",
    description: "Needs review and ownership; may allow progression.",
  },
  {
    title: "Information",
    dotColor: "bg-[#3B82F6]",
    description: "Non-blocking context attached to the close record.",
  },
  {
    title: "System error",
    dotColor: "bg-[#94A3B8]",
    description: "Blocks any control it affects — errors are never hidden.",
  },
  {
    title: "Not applicable",
    dotColor: "bg-[#64748B]",
    description: "Excluded from scope with a recorded reason.",
  },
];

interface WorkbenchRow {
  scopeTitle: string;
  scopeSub?: string;
  issue: string;
  severity: "Warning" | "Blocker" | "Information";
  owner: string;
  nextAction: string;
}

const workbenchData: WorkbenchRow[] = [
  {
    scopeTitle: "Statutory liability",
    scopeSub: "RC-0163",
    issue: "Variance above tolerance",
    severity: "Warning",
    owner: "Finance",
    nextAction: "Review variance",
  },
  {
    scopeTitle: "W-30281 · Off-cycle",
    issue: "Missing maker-checker sign-off",
    severity: "Blocker",
    owner: "Payroll Approver",
    nextAction: "Request approval",
  },
  {
    scopeTitle: "Batch #7742",
    issue: "New bank detail, unverified",
    severity: "Information",
    owner: "Payroll Ops",
    nextAction: "Verify at source",
  },
];

export default function ExceptionsWorkbenchSection() {
  return (
    <section className="w-full bg-[#F5F8FA] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>—</span>
            <span>EXCEPTIONS, SIGN-OFF & SEGREGATION OF DUTIES</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-[#07243B] leading-tight">
            Every severity routes to an owner with a real next action
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            No generic &quot;ignore.&quot; A blocker prevents close; a system
            error on a mandatory control blocks too — it is never silently
            turned into a pass.
          </p>
        </div>

        {/* 5 Severity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {severityCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs space-y-2 flex flex-col justify-start"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${card.dotColor} shrink-0`}
                />
                <h3 className="text-sm font-bold text-[#07243B]">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Workbench UI Window Container */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-lg overflow-hidden max-w-4xl mx-auto">
          {/* Window Header Bar */}
          <div className="bg-[#F5F8FA] px-6 py-3.5 border-b border-[#E4E9EF] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="ml-2 text-xs font-bold text-slate-600">
                Exception Workbench
              </span>
            </div>
          </div>

          {/* Table Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Top Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs">
                <div className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 font-medium">
                  Severity <span className="font-bold text-slate-900">All</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 font-medium">
                  Owner <span className="font-bold text-slate-900">All</span>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-400">
                6 open exceptions
              </span>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    <th className="pb-3 font-semibold">SCOPE</th>
                    <th className="pb-3 font-semibold">ISSUE</th>
                    <th className="pb-3 font-semibold">SEVERITY</th>
                    <th className="pb-3 font-semibold">OWNER</th>
                    <th className="pb-3 font-semibold">NEXT ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {workbenchData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-4 pr-4">
                        <div className="font-bold text-[#07243B]">
                          {row.scopeTitle}
                        </div>
                        {row.scopeSub && (
                          <div className="text-[11px] text-slate-400 font-medium">
                            {row.scopeSub}
                          </div>
                        )}
                      </td>
                      <td className="py-4 pr-4 font-semibold text-slate-700">
                        {row.issue}
                      </td>
                      <td className="py-4 pr-4">
                        {row.severity === "Warning" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] font-semibold text-xs border border-[#FDE68A]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                            <span>Warning</span>
                          </span>
                        )}
                        {row.severity === "Blocker" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEE2E2] text-[#991B1B] font-semibold text-xs border border-[#FCA5A5]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                            <span>Blocker</span>
                          </span>
                        )}
                        {row.severity === "Information" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DBEAFE] text-[#1E40AF] font-semibold text-xs border border-[#BFDBFE]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                            <span>Information</span>
                          </span>
                        )}
                      </td>
                      <td className="py-4 pr-4 font-semibold text-slate-600">
                        {row.owner}
                      </td>
                      <td className="py-4 font-bold text-[#0A8FD0] hover:underline cursor-pointer">
                        {row.nextAction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom Callout Container */}
        <div className="bg-[#E9F0F8] border-l-4 border-l-[#0A8FD0] p-5 shadow-2xs rounded-none max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Approval binds to a specific close candidate and version. A material
            change after sign-off invalidates the affected approvals — rejection
            always returns the scope to the correct prior state.
          </p>
        </div>
      </div>
    </section>
  );
}
