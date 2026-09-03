"use client";

import React from "react";

interface CapabilityRow {
  capability: string;
  separateDecision: string;
  disclosure: string;
}

const capabilityRows: CapabilityRow[] = [
  {
    capability: "Statutory report generation",
    separateDecision: "Yes",
    disclosure: "Generation does not automatically mean submission.",
  },
  {
    capability: "Statutory filing / submission",
    separateDecision: "Yes",
    disclosure:
      "Authority, authorization, jurisdiction and provider scope must be explicit.",
  },
  {
    capability: "Employee payment orchestration",
    separateDecision: "Yes",
    disclosure:
      "Funding method, payment rail/operator and status semantics must be stated.",
  },
  {
    capability: "Employee payment execution",
    separateDecision: "Yes",
    disclosure: "We never imply Zoiko executes or holds funds unless approved.",
  },
  {
    capability: "Authority remittance",
    separateDecision: "Yes",
    disclosure: "Separate from net-pay payment capability.",
  },
  {
    capability: "FX",
    separateDecision: "Yes",
    disclosure:
      "Provider/rate source, markup/fee and timing disclosed where applicable.",
  },
  {
    capability: "Reconciliation",
    separateDecision: "Yes",
    disclosure:
      "Shows whether evidence confirms submission, acceptance, settlement or only instruction status.",
  },
];

export default function FinancialBoundariesSection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
            <span className="w-[3px] h-3.5 rounded-[1px] bg-[#3B82F6]" />
            <span>Filing, payments &amp; financial-service boundaries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#082F49] leading-tight">
            Every financial capability is a separate decision.
          </h2>
        </div>

        {/* Cards on mobile */}
        <div className="space-y-3 md:hidden">
          {capabilityRows.map((row) => (
            <div
              key={row.capability}
              className="bg-white rounded-xl border border-slate-200 p-5 space-y-3"
            >
              <div className="text-sm font-bold text-[#082F49]">
                {row.capability}
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Separate decision required
                </div>
                <div className="text-sm text-[#4E6172]">
                  {row.separateDecision}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Required disclosure
                </div>
                <div className="text-sm text-[#4E6172] leading-5">
                  {row.disclosure}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table from md up */}
        <div className="hidden md:block bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                <th className="px-5 py-3.5 font-bold w-[280px]">Capability</th>
                <th className="px-5 py-3.5 font-bold w-[220px]">
                  Separate decision required
                </th>
                <th className="px-5 py-3.5 font-bold">Required disclosure</th>
              </tr>
            </thead>
            <tbody>
              {capabilityRows.map((row) => (
                <tr key={row.capability} className="border-t border-slate-200">
                  <td className="px-5 py-4 text-sm text-[#4E6172] align-top">
                    {row.capability}
                  </td>
                  <td className="px-5 py-4 text-sm text-[#4E6172] align-top">
                    {row.separateDecision}
                  </td>
                  <td className="px-5 py-4 text-sm text-[#4E6172] leading-5 align-top">
                    {row.disclosure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Regulated-role rule */}
        <div className="bg-rose-50 border border-rose-200 rounded-[10px] p-5">
          <p className="text-xs text-[#7F1D1D] leading-5">
            <span className="font-bold">Regulated-role rule:</span> our
            commercial copy describes the actual role of Zoiko Payroll and any
            regulated provider. We never use &quot;we pay&quot; or &quot;we
            remit&quot; when Zoiko only orchestrates, transmits instructions, or
            displays third-party status.
          </p>
        </div>
      </div>
    </section>
  );
}
