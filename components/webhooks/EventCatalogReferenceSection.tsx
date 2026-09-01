"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface EventRow {
  event: string;
  summary: string;
  version: string;
  lifecycle: "Current" | "Beta" | "Deprecated";
  sensitivity: "Low" | "None";
  linkText: "Reference →" | "Migration guide →";
  category: "Payroll lifecycle" | "Integrations" | "Payments";
}

const eventData: EventRow[] = [
  {
    event: "payroll_run.completed",
    summary: "Fires when a payroll run reaches Complete.",
    version: "v2",
    lifecycle: "Current",
    sensitivity: "Low",
    linkText: "Reference →",
    category: "Payroll lifecycle",
  },
  {
    event: "payroll_approval.requested",
    summary: "Fires when an approval is requested.",
    version: "v1",
    lifecycle: "Current",
    sensitivity: "Low",
    linkText: "Reference →",
    category: "Payroll lifecycle",
  },
  {
    event: "integration_sync.failed",
    summary: "Fires when a sync attempt fails.",
    version: "v1",
    lifecycle: "Beta",
    sensitivity: "None",
    linkText: "Reference →",
    category: "Integrations",
  },
  {
    event: "payroll_run.finalized",
    summary: "Superseded by payroll_run.completed.",
    version: "v1",
    lifecycle: "Deprecated",
    sensitivity: "Low",
    linkText: "Migration guide →",
    category: "Payroll lifecycle",
  },
];

const categories = [
  "All families",
  "Payroll lifecycle",
  "Integrations",
  "Payments",
];

export default function EventCatalogReferenceSection() {
  const [activeCategory, setActiveCategory] = useState("All families");

  const filteredEvents =
    activeCategory === "All families"
      ? eventData
      : eventData.filter((item) => item.category === activeCategory);

  const getLifecycleBadgeStyle = (lifecycle: EventRow["lifecycle"]) => {
    switch (lifecycle) {
      case "Current":
        return "bg-[#E6F4EA] text-[#137333]";
      case "Beta":
        return "bg-[#E8F0FE] text-[#1A73E8]";
      case "Deprecated":
        return "bg-[#FEF7E0] text-[#B06000]";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
            <span>EVENT CATALOG + REFERENCE</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[38px] font-bold tracking-tight text-[#07243B] leading-tight">
            Only approved public events appear
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            If no public event exists for your task, this routes to API
            documentation instead of showing an imaginary or disabled event.
          </p>
        </div>

        {/* Table Container Card */}
        <div className="bg-[#FBFCFE] rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          {/* Filter Pills Header */}
          <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#08132B] text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Data Table */}
          <div className="p-4 sm:p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-[#FBFCFE] border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="pb-3 px-3">EVENT</th>
                  <th className="pb-3 px-3">SUMMARY</th>
                  <th className="pb-3 px-3">VERSION</th>
                  <th className="pb-3 px-3">LIFECYCLE</th>
                  <th className="pb-3 px-3">SENSITIVITY</th>
                  <th className="pb-3 px-3 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {filteredEvents.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    {/* Event Code */}
                    <td className="py-4 px-3 font-mono font-medium text-slate-800 text-xs">
                      {row.event}
                    </td>

                    {/* Summary */}
                    <td className="py-4 px-3 text-slate-500 text-xs sm:text-sm">
                      {row.summary}
                    </td>

                    {/* Version */}
                    <td className="py-4 px-3 font-mono text-slate-400 text-xs">
                      {row.version}
                    </td>

                    {/* Lifecycle Badge */}
                    <td className="py-4 px-3">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold ${getLifecycleBadgeStyle(
                          row.lifecycle,
                        )}`}
                      >
                        {row.lifecycle}
                      </span>
                    </td>

                    {/* Sensitivity */}
                    <td className="py-4 px-3 text-slate-500 text-xs">
                      {row.sensitivity}
                    </td>

                    {/* Reference Link */}
                    <td className="py-4 px-3 text-right">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 font-mono text-xs text-slate-500 hover:text-[#0A8FD0] transition-colors"
                      >
                        {row.linkText}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
