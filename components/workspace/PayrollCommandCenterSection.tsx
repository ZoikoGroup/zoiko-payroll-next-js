"use client";

import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

interface PriorityItem {
  id: string;
  queue: string;
  severity: "High" | "Medium" | "Low";
  impact: string;
  deadline: string;
}

interface KeyDate {
  label: string;
  date: string;
}

interface ActivityItem {
  description: string;
  time: string;
}

const filterDropdowns = [
  "Entity",
  "Jurisdiction",
  "Pay group",
  "Pay period",
  "Status",
];

const lifecycleSteps = [
  "Prepare",
  "Validate",
  "Calculate",
  "Review",
  "Approve",
  "Pay",
  "Close",
];

const statusBadges = [
  { label: "Ready", bg: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  {
    label: "Attention required",
    bg: "bg-amber-50 text-amber-800 border-amber-200",
  },
  { label: "Blocked", bg: "bg-rose-50 text-rose-700 border-rose-200" },
  {
    label: "Awaiting approval",
    bg: "bg-amber-100/70 text-amber-900 border-amber-300/60",
  },
  {
    label: "Approved",
    bg: "bg-emerald-50 text-emerald-800 border-emerald-300/60",
  },
  { label: "Closed", bg: "bg-slate-100 text-slate-600 border-slate-200" },
];

const priorityRows: PriorityItem[] = [
  {
    id: "1",
    queue: "Overtime variance — 4 workers",
    severity: "High",
    impact: "High",
    deadline: "Sep 1, 2026",
  },
  {
    id: "2",
    queue: "Missing tax elections — 2 workers",
    severity: "Medium",
    impact: "Medium",
    deadline: "Sep 2, 2026",
  },
  {
    id: "3",
    queue: "New-hire pending validation",
    severity: "Low",
    impact: "Low",
    deadline: "Sep 3, 2026",
  },
];

const keyDates: KeyDate[] = [
  { label: "Cutoff", date: "Aug 28, 2026" },
  { label: "Approval deadline", date: "Sep 1, 2026" },
  { label: "Funding date", date: "Sep 4, 2026" },
  { label: "Filing deadline", date: "Sep 10, 2026" },
];

const recentActivities: ActivityItem[] = [
  { description: "Recalculation completed", time: "2h ago" },
  { description: "Approval requested", time: "4h ago" },
  { description: "Run reopened for correction", time: "Yesterday" },
  { description: "Payment status updated", time: "Yesterday" },
];

export default function PayrollCommandCenterSection() {
  const [activeStep, setActiveStep] = useState<string>("Review");

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">/</span>
            <span>PAYROLL COMMAND CENTER</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B]">
            See the payroll cycle before it becomes a problem
          </h2>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-6xl mx-auto">
          {filterDropdowns.map((filter) => (
            <button
              key={filter}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <span>{filter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          ))}
          {/* Search Button */}
          <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs">
            <span>Search</span>
            <Search className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        {/* Lifecycle Stepper */}
        <div className="flex items-center justify-center overflow-x-auto py-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 min-w-max">
            {lifecycleSteps.map((step, index) => {
              const isActive = activeStep === step;
              return (
                <React.Fragment key={step}>
                  {index > 0 && (
                    <span className="text-slate-300 font-normal">&rarr;</span>
                  )}
                  <button
                    onClick={() => setActiveStep(step)}
                    className={`py-1 px-2.5 transition-colors ${
                      isActive
                        ? "text-[#0A78C3] border-b-2 border-[#0A78C3] font-bold"
                        : "hover:text-slate-600"
                    }`}
                  >
                    {step}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Status Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {statusBadges.map((badge) => (
            <span
              key={badge.label}
              className={`px-3.5 py-1 rounded-full text-xs font-medium border ${badge.bg}`}
            >
              {badge.label}
            </span>
          ))}
        </div>

        {/* Priority Queue Table Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  <th className="py-3 px-6">PRIORITY QUEUE</th>
                  <th className="py-3 px-6">SEVERITY</th>
                  <th className="py-3 px-6">PAYROLL IMPACT</th>
                  <th className="py-3 px-6 text-right sm:text-left">
                    DEADLINE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {priorityRows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-[#07243B]">
                      {row.queue}
                    </td>
                    <td className="py-4 px-6">
                      {row.severity === "High" && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-600 border border-rose-200/60">
                          High
                        </span>
                      )}
                      {row.severity === "Medium" && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
                          Medium
                        </span>
                      )}
                      {row.severity === "Low" && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                          Low
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 font-medium">{row.impact}</td>
                    <td className="py-4 px-6 text-right sm:text-left font-medium text-slate-500">
                      {row.deadline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Dates & Recent Activity Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Dates */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-4">
            <h3 className="text-xs font-bold text-[#07243B]">Key dates</h3>
            <div className="divide-y divide-slate-100">
              {keyDates.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 first:pt-0 last:pb-0 flex items-center justify-between text-xs font-medium"
                >
                  <span className="text-[#07243B] font-bold">{item.label}</span>
                  <span className="text-slate-400 font-mono">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-4">
            <h3 className="text-xs font-bold text-[#07243B]">
              Recent activity
            </h3>
            <div className="divide-y divide-slate-100">
              {recentActivities.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 first:pt-0 last:pb-0 flex items-center justify-between text-xs font-medium"
                >
                  <span className="text-[#07243B] font-bold">
                    {item.description}
                  </span>
                  <span className="text-slate-400 font-mono">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action Buttons & Disclaimer */}
        <div className="space-y-4 pt-2 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-[#07243B] transition-colors shadow-2xs cursor-pointer">
              Resume payroll
            </button>
            <button className="px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-[#07243B] transition-colors shadow-2xs cursor-pointer">
              Resolve exception
            </button>
            <button className="px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-[#07243B] transition-colors shadow-2xs cursor-pointer">
              Request approval
            </button>
            <button className="px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-[#07243B] transition-colors shadow-2xs cursor-pointer">
              Review changes
            </button>
          </div>

          <p className="text-[11px] text-slate-400 font-normal">
            Available actions depend on payroll state, your role and current
            entitlements &mdash; unavailable actions are never shown.
          </p>
        </div>
      </div>
    </section>
  );
}
