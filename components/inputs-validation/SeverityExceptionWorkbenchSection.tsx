"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

interface SeverityCard {
  id: string;
  title: string;
  description: string;
  colorDotClass: string;
}

interface WorkbenchIssue {
  affectedInput: string;
  issue: string;
  severity: "Blocker" | "Warning" | "Information" | "Quarantine";
  owner: string;
  nextAction: string;
}

const severityCards: SeverityCard[] = [
  {
    id: "blocker",
    title: "Blocker",
    description: "Stops affected data from advancing.",
    colorDotClass: "bg-red-500",
  },
  {
    id: "warning",
    title: "Warning",
    description: "Needs review; may allow progression.",
    colorDotClass: "bg-amber-500",
  },
  {
    id: "information",
    title: "Information",
    description: "Non-blocking context.",
    colorDotClass: "bg-blue-500",
  },
  {
    id: "quarantine",
    title: "Quarantine",
    description: "Isolates unsafe or invalid intake.",
    colorDotClass: "bg-slate-400",
  },
];

const workbenchIssues: WorkbenchIssue[] = [
  {
    affectedInput: "E-10432 · Base rate",
    issue: "Missing effective date",
    severity: "Blocker",
    owner: "HR Ops",
    nextAction: "Correct at source",
  },
  {
    affectedInput: "E-10488 · Timesheet",
    issue: "Hours exceed configured limit",
    severity: "Warning",
    owner: "Payroll",
    nextAction: "Acknowledge",
  },
  {
    affectedInput: "E-10501 · Bank detail",
    issue: "New account, unverified",
    severity: "Information",
    owner: "Payroll",
    nextAction: "Request info",
  },
  {
    affectedInput: "Batch #4471",
    issue: "Malformed file rows",
    severity: "Quarantine",
    owner: "Integrations",
    nextAction: "View history",
  },
];

export default function SeverityExceptionWorkbenchSection() {
  const [selectedSeverity, setSelectedSeverity] = useState<string>("blocker");

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">—</span>
            <span>SEVERITY & EXCEPTION WORKBENCH</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#07243B]">
            Four severities. No generic &quot;Ignore&quot;
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-400">
            Every issue routes to the right owner with a real next action.
          </p>
        </div>

        {/* Severity Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {severityCards.map((card) => {
            const isSelected = selectedSeverity === card.id;
            return (
              <div
                key={card.id}
                onClick={() => setSelectedSeverity(card.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? "bg-white border-slate-300 shadow-xs ring-1 ring-slate-200"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-slate-200 flex items-center justify-center bg-slate-50">
                    <Check className="w-2.5 h-2.5 text-slate-600 stroke-[3]" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200/60">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${card.colorDotClass}`}
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {card.title}
                  </span>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Exception Workbench Preview Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden">
          {/* Window Frame Bar */}
          <div className="bg-slate-50 border-b border-slate-100 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <span className="text-[11px] font-mono text-slate-400 ml-2 font-medium">
                Exception Workbench
              </span>
            </div>
          </div>

          {/* Table Container */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Table Filters & Metadata Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl font-medium">
                  Entity <strong className="text-[#07243B]">All</strong>
                </span>
                <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl font-medium">
                  Severity <strong className="text-[#07243B]">All</strong>
                </span>
                <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl font-medium">
                  Owner <strong className="text-[#07243B]">All</strong>
                </span>
              </div>

              <span className="text-xs font-mono text-slate-400">
                42 open issues
              </span>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
              <div className="min-w-[640px]">
                {/* Table Header */}
                <div className="grid grid-cols-12 text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono pb-3 border-b border-slate-100">
                  <span className="col-span-3">AFFECTED INPUT</span>
                  <span className="col-span-3">ISSUE</span>
                  <span className="col-span-2">SEVERITY</span>
                  <span className="col-span-2">OWNER</span>
                  <span className="col-span-2">NEXT ACTION</span>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-slate-100 text-xs">
                  {workbenchIssues.map((row, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-12 py-3.5 items-center hover:bg-slate-50/50 transition-colors"
                    >
                      <span className="col-span-3 font-bold text-[#07243B] font-mono">
                        {row.affectedInput}
                      </span>

                      <span className="col-span-3 text-slate-500">
                        {row.issue}
                      </span>

                      <div className="col-span-2">
                        {row.severity === "Blocker" && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-600 border border-red-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                            Blocker
                          </span>
                        )}
                        {row.severity === "Warning" && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                            Warning
                          </span>
                        )}
                        {row.severity === "Information" && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-50 text-sky-600 border border-sky-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                            Information
                          </span>
                        )}
                        {row.severity === "Quarantine" && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                            Quarantine
                          </span>
                        )}
                      </div>

                      <span className="col-span-2 text-slate-500 font-medium">
                        {row.owner}
                      </span>

                      <a
                        href="#"
                        className="col-span-2 font-bold text-[#0A78C3] hover:underline"
                      >
                        {row.nextAction}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
