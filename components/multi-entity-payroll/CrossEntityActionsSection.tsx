"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const BULK_ACTION_ROWS = [
  {
    entity: "Zoiko US, Inc.",
    localOverride: "None",
    approvalRequired: "Yes — J. Park",
    statusText: "Included",
    statusStyles: "bg-[#DCFCE7] text-[#15803D]",
  },
  {
    entity: "Zoiko GmbH",
    localOverride: "Approval stages: 3",
    approvalRequired: "Yes — K. Fischer",
    statusText: "Excluded — conflict",
    statusStyles: "bg-[#FEF3C7] text-[#B45309]",
  },
  {
    entity: "Zoiko Pte. Ltd.",
    localOverride: "None",
    approvalRequired: "Yes — Payroll Ops APAC",
    statusText: "Included",
    statusStyles: "bg-[#DCFCE7] text-[#15803D]",
  },
  {
    entity: "Zoiko Ltda.",
    localOverride: "Partner-managed",
    approvalRequired: "Blocked",
    statusText: "Excluded — blocked",
    statusStyles: "bg-[#FEE2E2] text-[#B91C1C]",
  },
];

// Entity lifecycle steps data
const LIFECYCLE_STEPS = [
  { label: "Planned", isActive: false },
  { label: "Onboarding", isActive: false },
  { label: "Active", isActive: true },
  { label: "Suspended", isActive: false },
  { label: "Dormant", isActive: false },
  { label: "Migrating", isActive: false },
  { label: "Divesting", isActive: false },
  { label: "Retired", isActive: false },
];

export default function CrossEntityActionsSection() {
  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>CROSS-ENTITY ACTIONS + ENTITY LIFECYCLE / M&amp;A</span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
            No blanket success state. Ever
          </h2>
        </div>

        {/* Bulk Action Review Card Container */}
        <div className="bg-white border border-[#E1E8ED] rounded-2xl shadow-[0_8px_24px_rgba(8,47,73,0.06),0_1px_2px_rgba(8,47,73,0.04)] overflow-hidden">
          {/* Card Top Header */}
          <div className="p-5 border-b border-[#E1E8ED] flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-sm sm:text-base font-bold text-[#0A1928]">
              Bulk action review &mdash; Apply updated approval template
            </h3>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />2
              excluded
            </span>
          </div>

          {/* Table Area */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E1E8ED] text-[#94A3B8] font-medium">
                  <th className="py-3.5 px-6 font-medium">Entity</th>
                  <th className="py-3.5 px-6 font-medium">Local override</th>
                  <th className="py-3.5 px-6 font-medium">Approval required</th>
                  <th className="py-3.5 px-6 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E1E8ED]">
                {BULK_ACTION_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#F8FAFC]/60 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-[#0A1928]">
                      {row.entity}
                    </td>
                    <td className="py-4 px-6 text-[#5C6E7E]">
                      {row.localOverride}
                    </td>
                    <td className="py-4 px-6 text-[#0A1928] font-medium">
                      {row.approvalRequired}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${row.statusStyles}`}
                      >
                        {row.statusText}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Entity Lifecycle Process Steps */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
          {LIFECYCLE_STEPS.map((step, idx) => (
            <React.Fragment key={idx}>
              <div
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  step.isActive
                    ? "bg-gradient-to-r from-[#2E91D1] to-[#0B4E7D] text-white shadow-sm"
                    : "bg-white text-[#0A1928] border border-[#E1E8ED] shadow-2xs"
                }`}
              >
                {step.label}
              </div>

              {idx < LIFECYCLE_STEPS.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
