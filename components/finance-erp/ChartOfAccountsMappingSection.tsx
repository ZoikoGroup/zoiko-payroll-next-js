"use client";

import React from "react";
import Image from "next/image";

interface MappingRow {
  payrollCategory: string;
  targetAccount: string;
  entity: string;
  dimensions: string;
  effectiveFrom: string;
  validationStatus: "Validated" | "Review required";
}

const tableData: MappingRow[] = [
  {
    payrollCategory: "Gross wages",
    targetAccount: "6100 - Payroll Expense",
    entity: "EU Holdings BV",
    dimensions: "Dept: Finance",
    effectiveFrom: "Jan 1, 2026",
    validationStatus: "Validated",
  },
  {
    payrollCategory: "Employer tax",
    targetAccount: "6250 - Payroll Tax Expense",
    entity: "UK Ltd",
    dimensions: "Cost Center: 220",
    effectiveFrom: "Jan 1, 2026",
    validationStatus: "Validated",
  },
  {
    payrollCategory: "Benefits contribution",
    targetAccount: "Unmapped",
    entity: "DE GmbH",
    dimensions: "—",
    effectiveFrom: "—",
    validationStatus: "Review required",
  },
];

export default function ChartOfAccountsMappingSection() {
  return (
    <section className="w-full bg-[#E9F0F8] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label: #0A8FD0 */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>CHART OF ACCOUNTS & DIMENSION MAPPING</span>
            </div>

            {/* Title: 36px */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight leading-snug">
              Concepts, not a prescribed chart of accounts.
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-xs sm:text-sm text-[#5B646B] leading-relaxed max-w-xl">
              Payroll accounting categories map to GL accounts; payroll entities
              map to target company, legal entity or ledger; payroll
              organization maps to cost center or department. Project, grant and
              location dimensions apply only where supported.
            </p>

            {/* Callout Box with Left Accent */}
            <div className="relative border-l-4 border-[#0A8FD0] bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <p className="text-[13px] sm:text-[14px] text-[#0F172A] leading-relaxed">
                <span className="font-bold">
                  Default mappings require explicit policy
                </span>{" "}
                and must stay visible and auditable. Unmapped values create a
                blocking or review exception — they are never silently guessed.
                Effective-dated mapping preserves historical traceability.
              </p>
            </div>
          </div>

          {/* Right Image Column: 16:9 Aspect Ratio within Box */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/footer-integrations/7.png"
                alt="Two accountants reviewing chart of accounts mapping on a dashboard monitor"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Data Table */}
        <div className="relative bg-white rounded-3xl shadow-xl border border-slate-200/50 space-y-2 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#E9F0F8] text-[#0A3254] font-bold text-[11px] uppercase tracking-wider border-b border-slate-200/80">
                <th className="py-4 px-6 rounded-tl-xl">PAYROLL CATEGORY</th>
                <th className="py-4 px-6">TARGET ACCOUNT</th>
                <th className="py-4 px-6">ENTITY</th>
                <th className="py-4 px-6">DIMENSIONS</th>
                <th className="py-4 px-6">EFFECTIVE FROM</th>
                <th className="py-4 px-6 rounded-tr-xl">VALIDATION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[#0F172A]">
              {tableData.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  {/* Payroll Category */}
                  <td className="py-4 px-6 font-medium text-[#0F172A]">
                    {row.payrollCategory}
                  </td>

                  {/* Target Account */}
                  <td className="py-4 px-6 text-slate-700 font-medium">
                    {row.targetAccount}
                  </td>

                  {/* Entity */}
                  <td className="py-4 px-6 text-slate-700 font-medium">
                    {row.entity}
                  </td>

                  {/* Dimensions */}
                  <td className="py-4 px-6 text-slate-700 font-medium">
                    {row.dimensions}
                  </td>

                  {/* Effective From */}
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {row.effectiveFrom}
                  </td>

                  {/* Validation Badge */}
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold ${
                        row.validationStatus === "Validated"
                          ? "bg-[#D1FAE5] text-[#065F46]"
                          : "bg-[#FEF3C7] text-[#92400E]"
                      }`}
                    >
                      {row.validationStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Table Footer Disclaimer */}
          <div className="py-2 text-center">
            <p className="text-xs text-slate-400 font-medium">
              Synthetic sample account codes shown for illustration only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}