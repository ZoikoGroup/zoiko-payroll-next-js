"use client";

import React, { useState } from "react";

interface ErrorRow {
  status: string;
  errorClass: string;
  retryable: string;
  developerAction: string;
}

const errorTaxonomy: ErrorRow[] = [
  {
    status: "401",
    errorClass: "Authentication",
    retryable: "No",
    developerAction: "Refresh or reissue credentials",
  },
  {
    status: "403",
    errorClass: "Authorization",
    retryable: "No",
    developerAction: "Request the required scope",
  },
  {
    status: "422",
    errorClass: "Validation",
    retryable: "No",
    developerAction: "Correct the documented field(s)",
  },
  {
    status: "404 / 409",
    errorClass: "Not found / conflict",
    retryable: "Depends",
    developerAction: "Check resource identifier or state",
  },
  {
    status: "429",
    errorClass: "Rate limited",
    retryable: "Yes — with backoff",
    developerAction: "Respect reset header where documented",
  },
  {
    status: "5xx",
    errorClass: "Server / transient",
    retryable: "Operation-specific",
    developerAction: "See operation retry guidance",
  },
];

interface SafetyBadge {
  id: string;
  label: string;
  bgColor: string;
  textColor: string;
  borderColor?: string;
}

const safetyBadges: SafetyBadge[] = [
  {
    id: "safe",
    label: "Safe",
    bgColor: "bg-[#E6F4EA]",
    textColor: "text-[#137333]",
  },
  {
    id: "conditional",
    label: "Conditional",
    bgColor: "bg-[#FEF7E0]",
    textColor: "text-[#B06000]",
  },
  {
    id: "unsafe",
    label: "Unsafe",
    bgColor: "bg-[#FCE8E6]",
    textColor: "text-[#C5221F]",
  },
  {
    id: "undocumented",
    label: "Undocumented",
    bgColor: "bg-white",
    textColor: "text-[#0F172A]",
    borderColor: "border-slate-300",
  },
];

export default function CollectionBehaviorSection() {
  const [activeBadge, setActiveBadge] = useState<string>("safe");

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Centered Header Block */}
        <div className="text-center space-y-3 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>COLLECTION BEHAVIOR, ERRORS & RETRY SAFETY</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
            &quot;All list endpoints support pagination&quot; is never assumed
          </h2>

          {/* Subtitle / Paragraph Text */}
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Pagination, page size, filtering, sorting, search, expansion and
            consistency semantics are operation and resource-specific — each
            appears only when the contract documents it for that exact
            operation.
          </p>
        </div>

        {/* Error Taxonomy Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#EBF2F9] border-b border-slate-200/80 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  <th className="py-3.5 px-6">STATUS</th>
                  <th className="py-3.5 px-6">ERROR CLASS</th>
                  <th className="py-3.5 px-6">RETRYABLE</th>
                  <th className="py-3.5 px-6">DEVELOPER ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-600">
                {errorTaxonomy.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-3.5 px-6 font-mono text-slate-800 font-medium">
                      {row.status}
                    </td>
                    <td className="py-3.5 px-6 text-slate-700">
                      {row.errorClass}
                    </td>
                    <td className="py-3.5 px-6 text-slate-700">
                      {row.retryable}
                    </td>
                    <td className="py-3.5 px-6 text-slate-700">
                      {row.developerAction}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote under table */}
        <p className="text-center text-[11px] text-slate-400 font-normal">
          Illustrative error taxonomy. Exact codes, messages and retryability
          render from the API Contract Registry per operation.
        </p>

        {/* Retry Safety State Pills */}
        <div className="space-y-4 text-center">
          <h3 className="text-sm font-bold text-[#0F172A]">
            Retry safety state
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {safetyBadges.map((badge) => {
              const isActive = activeBadge === badge.id;
              return (
                <button
                  key={badge.id}
                  onClick={() => setActiveBadge(badge.id)}
                  className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                    badge.bgColor
                  } ${badge.textColor} ${
                    badge.borderColor || "border-transparent"
                  }`}
                >
                  {badge.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Callout Box with Cyan Left Accent Bar */}
        <div className="bg-white rounded-xl border-l-4 border-l-[#0A8FD0] p-6 sm:p-7 border border-slate-200/80 shadow-xs relative overflow-hidden flex items-start">
          {/* Left Cyan Accent Bar */}
    

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-2 sm:pl-3">
            <strong className="font-bold text-[#0F172A]">
              No generic &quot;retry on 5xx.&quot;
            </strong>{" "}
            Retry guidance is source-governed and operation-specific — generic
            retry advice is prohibited where it could duplicate a
            payroll-impacting write. Unknown or undocumented behavior routes to
            correlation ID and support, never a guess.
          </p>
        </div>
      </div>
    </section>
  );
}
