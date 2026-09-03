"use client";

import React from "react";

interface StatusFilter {
  label: string;
  className: string;
}

interface ValidationErrorRow {
  code: string;
  severity: string;
  severityClass: string;
  sourceField: string;
  affectedRecords: string;
  recommendedCorrection: string;
}

const statusFilters: StatusFilter[] = [
  {
    label: "839 accepted",
    className: "bg-[#E3EFE6] text-[#3F6B54]",
  },
  {
    label: "3 rejected",
    className: "bg-[#F5DEDC] text-[#A14842]",
  },
  {
    label: "Source-system",
    className: "bg-white text-slate-700 border border-slate-200/80",
  },
  {
    label: "File / schema",
    className: "bg-white text-slate-700 border border-slate-200/80",
  },
  {
    label: "Business",
    className: "bg-white text-slate-700 border border-slate-200/80",
  },
  {
    label: "Statutory",
    className: "bg-white text-slate-700 border border-slate-200/80",
  },
];

const errorData: ValidationErrorRow[] = [
  {
    code: "VAL-2201",
    severity: "S2",
    severityClass: "bg-[#F3E9CC] text-[#8C6D2F]",
    sourceField: "tax_election",
    affectedRecords: "1–5",
    recommendedCorrection: "Confirm election in source HR system",
  },
  {
    code: "VAL-1187",
    severity: "S3",
    severityClass: "bg-[#E1EEF9] text-[#155A8A]",
    sourceField: "bank_account_ref",
    affectedRecords: "1–5",
    recommendedCorrection: "Re-sync from payment provider",
  },
  {
    code: "VAL-3042",
    severity: "S1",
    severityClass: "bg-[#F5DEDC] text-[#A14842]",
    sourceField: "gross_pay_input",
    affectedRecords: "<5",
    recommendedCorrection: "Business rule violation — review statutory rule",
  },
];

export default function InputsValidationDiagnosticsSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>INPUTS & VALIDATION DIAGNOSTICS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-[1px] text-[#07243B] leading-tight">
            Every validation error separates cause from correction
          </h2>

          {/* Top Filter Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {statusFilters.map((badge, idx) => (
              <span
                key={idx}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-[1px] cursor-default transition-all ${badge.className}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Diagnostics Table Container */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#E9F0F8] border-b border-slate-200/60 text-[11px] font-bold uppercase tracking-[1px] font-mono text-[#07243B]">
                  <th className="px-6 py-3.5">CODE</th>
                  <th className="px-6 py-3.5">SEVERITY</th>
                  <th className="px-6 py-3.5">SOURCE FIELD</th>
                  <th className="px-6 py-3.5">AFFECTED RECORDS</th>
                  <th className="px-6 py-3.5">RECOMMENDED CORRECTION</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium tracking-[1px]">
                {errorData.map((row) => (
                  <tr
                    key={row.code}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="px-6 py-4 font-mono text-slate-600">
                      {row.code}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${row.severityClass}`}
                      >
                        {row.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono text-slate-700">
                      {row.sourceField}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {row.affectedRecords}
                    </td>
                    <td className="px-6 py-4 text-slate-700">
                      {row.recommendedCorrection}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Subtext Footnote */}
        <p className="text-center text-xs text-slate-400 font-medium tracking-[1px] mx-auto leading-relaxed">
          Affected-record counts shown as bands, not employee-level detail. Safe
          diagnostic references only — no employee PII.
        </p>
      </div>
    </section>
  );
}
