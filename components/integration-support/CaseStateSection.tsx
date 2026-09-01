"use client";

import React, { useState } from "react";

interface StatusBadge {
  label: string;
  dotColor: string;
  bgColor: string;
  textColor: string;
}

const statusBadges: StatusBadge[] = [
  {
    label: "New",
    dotColor: "bg-slate-400",
    bgColor: "bg-slate-100",
    textColor: "text-slate-600",
  },
  {
    label: "Triaged",
    dotColor: "bg-sky-500",
    bgColor: "bg-sky-50",
    textColor: "text-sky-700",
  },
  {
    label: "In progress",
    dotColor: "bg-blue-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    label: "Waiting customer",
    dotColor: "bg-amber-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
  },
  {
    label: "Waiting Zoiko",
    dotColor: "bg-amber-500",
    bgColor: "bg-[#FEF7E0]",
    textColor: "text-[#B06000]",
  },
  {
    label: "Waiting third party",
    dotColor: "bg-amber-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
  },
  {
    label: "Mitigation available",
    dotColor: "bg-purple-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
  {
    label: "Monitoring",
    dotColor: "bg-purple-400",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    label: "Resolved",
    dotColor: "bg-emerald-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
  {
    label: "Closed",
    dotColor: "bg-slate-400",
    bgColor: "bg-slate-100",
    textColor: "text-slate-600",
  },
  {
    label: "Reopened",
    dotColor: "bg-rose-500",
    bgColor: "bg-rose-50",
    textColor: "text-rose-700",
  },
  {
    label: "Duplicate linked",
    dotColor: "bg-slate-400",
    bgColor: "bg-slate-100",
    textColor: "text-slate-600",
  },
  {
    label: "Cancelled",
    dotColor: "bg-slate-400",
    bgColor: "bg-slate-100",
    textColor: "text-slate-600",
  },
];

export default function CaseStateSection() {
  const [activeStatus, setActiveStatus] = useState<string>("Waiting Zoiko");

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-[#0A8FD0] font-bold">/</span>
            <span>CASE STATE + WAITING-PARTY STATUS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[26px] font-bold tracking-tight text-[#07243B] leading-tight">
            Never reduced to generic Open / Closed.
          </h2>
        </div>

        {/* Case Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-6">
          {/* Top Row: Case ID & Active Badge */}
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-xs font-medium text-slate-300 tracking-wider">
              CASE-2026-08214
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#FEF7E0] text-[#B06000]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B06000]" />
              {activeStatus}
            </span>
          </div>

          {/* Case Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                IMPACT
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#07243B]">
                Payroll-cycle risk
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                OWNER
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#07243B]">
                Finance Integration Team
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                WAITING ON
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#07243B]">
                Zoiko — reviewing mapping
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                NEXT ACTION
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#07243B]">
                Update expected next cycle
              </p>
            </div>
          </div>
        </div>

        {/* All Available Status Badges Pills Grid */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {statusBadges.map((badge) => {
            const isSelected = badge.label === activeStatus;
            return (
              <button
                key={badge.label}
                onClick={() => setActiveStatus(badge.label)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  badge.bgColor
                } ${badge.textColor} `}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${badge.dotColor}`}
                />
                <span>{badge.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
