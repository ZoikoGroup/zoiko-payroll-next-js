"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Top Metrics Cards Data
const TOP_METRICS = [
  { value: "42", label: "Configured", valueColor: "text-[#0A1928]" },
  { value: "5", label: "Needs review", valueColor: "text-[#C2410C]" },
  { value: "3", label: "Change detected", valueColor: "text-[#C2410C]" },
  { value: "2", label: "Future effective", valueColor: "text-[#0A1928]" },
  {
    value: "1",
    label: "Evidence stale/conflicting",
    valueColor: "text-[#C2410C]",
  },
  { value: "6", label: "Not applicable", valueColor: "text-[#0A1928]" },
  { value: "8", label: "Jurisdictions in scope", valueColor: "text-[#0A1928]" },
  {
    value: "v14",
    label: "Current requirement-set version",
    valueColor: "text-[#0A1928]",
  },
];

// Filter Dropdown Items
const FILTERS = [
  "Jurisdiction",
  "Legal entity",
  "Payroll group",
  "Category",
  "State",
  "Effective window",
  "Owner",
  "Evidence freshness",
];

// Table Row Items Data
const TABLE_ROWS = [
  {
    requirement: "Payroll calendar",
    category: "Calendar",
    appliesTo: "Germany — all entities",
    state: "Configured",
    stateStyle: "bg-[#E6F4EA] text-[#137333]",
    effectiveDate: "Live",
    evidence: "Current",
    evidenceStyle: "bg-[#E6F4EA] text-[#137333]",
    owner: "M. Weber",
    nextAction: "None",
  },
  {
    requirement: "Statutory deduction table",
    category: "Calculation",
    appliesTo: "Brazil — payroll group BR-01",
    state: "Needs review",
    stateStyle: "bg-[#FEF7E0] text-[#B06000]",
    effectiveDate: "Live",
    evidence: "Review due",
    evidenceStyle: "bg-[#FEF7E0] text-[#B06000]",
    owner: "C. Alvarez",
    nextAction: "Refresh evidence",
  },
  {
    requirement: "Payslip format update",
    category: "Documents",
    appliesTo: "France — all entities",
    state: "Future effective",
    stateStyle: "bg-[#FCE8E6] text-[#C5221F]",
    effectiveDate: "Oct 2026",
    evidence: "Current",
    evidenceStyle: "bg-[#E6F4EA] text-[#137333]",
    owner: "J. Dubois",
    nextAction: "Validate mapping",
  },
  {
    requirement: "Approval delegation",
    category: "Authority",
    appliesTo: "Japan — HQ entity",
    state: "Change detected",
    stateStyle: "bg-[#FEF7E0] text-[#B06000]",
    effectiveDate: "Live",
    evidence: "Review due",
    evidenceStyle: "bg-[#FEF7E0] text-[#B06000]",
    owner: "R. Tanaka",
    nextAction: "Assess impact",
  },
];

export default function LocalRequirementsWorkspaceSection() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>Local Requirements Workspace</span>
          </div>

          <h2 className="text-3xl md:text-[32px] max-w-3xl font-bold text-[#0A1928] leading-tight">
            The primary proof surface &mdash; a real enterprise control surface,
            not a screenshot
          </h2>
        </div>

        {/* 8-Card Metric Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {TOP_METRICS.map((metric, index) => (
            <div
              key={index}
              className="bg-white border border-[#E1E8ED] rounded-2xl p-5 shadow-sm space-y-1"
            >
              <div className={`text-3xl font-bold ${metric.valueColor}`}>
                {metric.value}
              </div>
              <div className="text-xs font-medium text-[#5C6E7E]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {FILTERS.map((filter, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedFilter(selectedFilter === filter ? null : filter)
              }
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E1E8ED] text-xs font-semibold text-[#0A1928] hover:bg-[#E9F0F8] transition-colors shadow-xs"
            >
              <span>{filter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#5C6E7E]" />
            </button>
          ))}
        </div>

        {/* Data Table Container */}
        <div className="bg-white border border-[#E1E8ED] rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#E9F0F8]/60 text-[#5C6E7E] text-[11px] font-bold uppercase tracking-wider border-b border-[#E1E8ED]">
                  <th className="py-3.5 px-4">Requirement</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Applies To</th>
                  <th className="py-3.5 px-4">State</th>
                  <th className="py-3.5 px-4">Effective Date</th>
                  <th className="py-3.5 px-4">Evidence</th>
                  <th className="py-3.5 px-4">Owner</th>
                  <th className="py-3.5 px-4">Next Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E1E8ED] text-xs font-medium">
                {TABLE_ROWS.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#F8FAFC] transition-colors"
                  >
                    <td className="py-4 px-4 font-bold text-[#0A1928]">
                      {row.requirement}
                    </td>
                    <td className="py-4 px-4 text-[#5C6E7E]">{row.category}</td>
                    <td className="py-4 px-4 text-[#0A1928]">
                      {row.appliesTo}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold ${row.stateStyle}`}
                      >
                        {row.state}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#5C6E7E]">
                      {row.effectiveDate}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold ${row.evidenceStyle}`}
                      >
                        {row.evidence}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#0A1928]">{row.owner}</td>
                    <td className="py-4 px-4 text-[#0A1928]">
                      {row.nextAction}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Detail Drawer Footer Box */}
        <div className="bg-[#E9F0F8] border border-[#D2E3FC] rounded-2xl p-5 text-xs sm:text-sm text-[#3C4043] leading-relaxed">
          <span className="font-bold text-[#0A1928]">
            Detail drawer (per requirement):
          </span>{" "}
          description, applicability, current configuration reference,
          source/evidence metadata, owner, approvals, version history, related
          controls, downstream impacts.{" "}
          <span className="font-bold text-[#0A1928]">Change panel:</span>{" "}
          current vs. future version, activation date, validation status,
          approvers, first affected payroll cycle.
        </div>
      </div>
    </section>
  );
}
