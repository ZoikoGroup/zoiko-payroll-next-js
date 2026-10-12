"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CaseRecord {
  id: string;
  severity: "S1" | "S2" | "S3";
  severityBg: string;
  severityText: string;
  workstream: string;
  entityJurisdiction: string;
  owner: string;
  milestoneImpact: string;
  updated: string;
}

const categoryPills = [
  "Question",
  "Defect",
  "Blocker",
  "Data",
  "Integration",
  "Change Request",
];

const dropdownFilters = [
  "Entity",
  "Jurisdiction",
  "Payroll Group",
  "Delivery Model",
];

const openCasesData: CaseRecord[] = [
  {
    id: "1",
    severity: "S1",
    severityBg: "bg-[#FCE8E6]",
    severityText: "text-[#D93025]",
    workstream: "Data Migration",
    entityJurisdiction: "DE GmbH",
    owner: "C. Alvarez",
    milestoneImpact: "Testing",
    updated: "2h ago",
  },
  {
    id: "2",
    severity: "S2",
    severityBg: "bg-[#FEF7E0]",
    severityText: "text-[#B06000]",
    workstream: "Integrations",
    entityJurisdiction: "EU Holdings BV",
    owner: "R. Tanaka",
    milestoneImpact: "Testing",
    updated: "1d ago",
  },
  {
    id: "3",
    severity: "S3",
    severityBg: "bg-[#E8F0FE]",
    severityText: "text-[#1A73E8]",
    workstream: "Payroll",
    entityJurisdiction: "UK Ltd",
    owner: "Payroll Ops",
    milestoneImpact: "Parallel Validation",
    updated: "3d ago",
  },
];

export default function OpenCasesAndSupportIntakeSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>OPEN CASES & SUPPORT INTAKE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-[#07243B] leading-tight">
            Distinguish active implementation issues from routine support
          </h2>
        </div>

        {/* Filter Controls Area */}
        <div className="space-y-3 max-w-6xl mx-auto">
          {/* Row 1: Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categoryPills.map((pill, idx) => {
              const isSelected = selectedCategory === pill;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(isSelected ? null : pill)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                    isSelected
                      ? "bg-[#07243B] text-white border-[#07243B] shadow-xs"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>

          {/* Row 2: Dropdown Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {dropdownFilters.map((filter, idx) => (
              <button
                key={idx}
                className="bg-white hover:bg-slate-50 border border-slate-200/80 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-600 inline-flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <span>{filter}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Open Cases Table */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#EBF2FA]/70 border-b border-slate-200 text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                  <th className="py-3.5 px-6">SEVERITY</th>
                  <th className="py-3.5 px-6">WORKSTREAM</th>
                  <th className="py-3.5 px-6">ENTITY / JURISDICTION</th>
                  <th className="py-3.5 px-6">OWNER</th>
                  <th className="py-3.5 px-6">MILESTONE IMPACT</th>
                  <th className="py-3.5 px-6 text-right">UPDATED</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium text-[#07243B]">
                {openCasesData.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    {/* Severity Badge */}
                    <td className="py-4 px-6">
                      <span
                        className={`px-2.5 py-1 rounded text-[11px] font-bold font-mono ${row.severityBg} ${row.severityText}`}
                      >
                        {row.severity}
                      </span>
                    </td>

                    {/* Workstream */}
                    <td className="py-4 px-6 font-semibold">
                      {row.workstream}
                    </td>

                    {/* Entity / Jurisdiction */}
                    <td className="py-4 px-6 text-slate-600">
                      {row.entityJurisdiction}
                    </td>

                    {/* Owner */}
                    <td className="py-4 px-6 text-slate-600">{row.owner}</td>

                    {/* Milestone Impact */}
                    <td className="py-4 px-6 text-slate-600">
                      {row.milestoneImpact}
                    </td>

                    {/* Updated Time */}
                    <td className="py-4 px-6 text-slate-400 text-right font-medium">
                      {row.updated}
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
