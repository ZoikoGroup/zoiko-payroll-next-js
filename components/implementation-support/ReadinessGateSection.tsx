"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

type StatusType = "Passed" | "Warning" | "Blocked" | "Evidence Missing";

interface GateItem {
  id: string;
  title: string;
  status: StatusType;
  actionText: string;
}

const statusStyles: Record<StatusType, { bg: string; text: string }> = {
  Passed: {
    bg: "bg-[#E6F4EA]",
    text: "text-[#137333]",
  },
  Warning: {
    bg: "bg-[#FEF7E0]",
    text: "text-[#B06000]",
  },
  Blocked: {
    bg: "bg-[#FCE8E6]",
    text: "text-[#C5221F]",
  },
  "Evidence Missing": {
    bg: "bg-[#F1F3F4]",
    text: "text-[#5F6368]",
  },
};

const filterPills: { status: StatusType; label: string }[] = [
  { status: "Passed", label: "Passed" },
  { status: "Warning", label: "Warning" },
  { status: "Blocked", label: "Blocked" },
  { status: "Evidence Missing", label: "Evidence Missing" },
];

const readinessGates: GateItem[] = [
  {
    id: "1",
    title: "Data reconciliation",
    status: "Blocked",
    actionText: "View evidence",
  },
  {
    id: "2",
    title: "Integration testing",
    status: "Warning",
    actionText: "View evidence",
  },
  {
    id: "3",
    title: "Payroll validation",
    status: "Passed",
    actionText: "View evidence",
  },
  {
    id: "4",
    title: "Access readiness",
    status: "Passed",
    actionText: "View evidence",
  },
  {
    id: "5",
    title: "Funding / payment readiness",
    status: "Evidence Missing",
    actionText: "Submit evidence",
  },
  {
    id: "6",
    title: "Calendar / cutoff",
    status: "Passed",
    actionText: "View evidence",
  },
  {
    id: "7",
    title: "Formal approvals",
    status: "Warning",
    actionText: "View evidence",
  },
];

export default function ReadinessGateSection() {
  const [activeFilter, setActiveFilter] = useState<StatusType | null>(null);

  const filteredGates = activeFilter
    ? readinessGates.filter((gate) => gate.status === activeFilter)
    : readinessGates;

  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>READINESS GATE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-[#07243B] leading-tight">
            Blocked never becomes Passed without authorized evidence
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Target dates never override factual readiness. Every mandatory gate
            links to current evidence and sign-off.
          </p>
        </div>

        {/* Outer Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl space-y-6">
          {/* Status Legend / Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pb-2">
            {filterPills.map((pill) => {
              const isSelected = activeFilter === pill.status;
              const style = statusStyles[pill.status];

              return (
                <button
                  key={pill.status}
                  onClick={() =>
                    setActiveFilter(isSelected ? null : pill.status)
                  }
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    style.bg
                  } ${style.text} ${
                    isSelected
                      ? "ring-2 ring-offset-1 ring-slate-400 scale-105"
                      : "opacity-90 hover:opacity-100"
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>

          {/* Readiness Gate List Rows */}
          <div className="divide-y divide-slate-100">
            {filteredGates.map((gate) => {
              const statusStyle = statusStyles[gate.status];

              return (
                <div
                  key={gate.id}
                  className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4 transition-colors hover:bg-slate-50/50 px-2 rounded-xl"
                >
                  {/* Gate Title */}
                  <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {gate.title}
                  </span>

                  {/* Status & Action Button */}
                  <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold ${statusStyle.bg} ${statusStyle.text}`}
                    >
                      {gate.status}
                    </span>

                    <button className="text-xs font-bold text-[#0A8FD0] hover:text-[#076BA0] inline-flex items-center gap-1 transition-colors group">
                      <span>{gate.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
