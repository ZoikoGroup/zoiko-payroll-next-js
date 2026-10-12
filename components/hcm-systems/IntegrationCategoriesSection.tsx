"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface IntegrationDomainRow {
  domain: string;
  coverage: "check" | "Partial" | "dash";
  direction: "Inbound" | "Not in scope" | "Outbound";
  ownership: string;
  evidence: string;
}

const domainTableData: IntegrationDomainRow[] = [
  {
    domain: "Worker identity",
    coverage: "check",
    direction: "Inbound",
    ownership: "HRIS-owned",
    evidence: "Aug 2026",
  },
  {
    domain: "Employment relationship",
    coverage: "check",
    direction: "Inbound",
    ownership: "HRIS-owned",
    evidence: "Aug 2026",
  },
  {
    domain: "Organization context",
    coverage: "check",
    direction: "Inbound",
    ownership: "Synchronized copy",
    evidence: "Jul 2026",
  },
  {
    domain: "Compensation inputs",
    coverage: "Partial",
    direction: "Inbound",
    ownership: "Payroll-governed",
    evidence: "Jul 2026",
  },
  {
    domain: "Bank/payment data",
    coverage: "dash",
    direction: "Not in scope",
    ownership: "—",
    evidence: "—",
  },
  {
    domain: "Payroll result summary",
    coverage: "Partial",
    direction: "Outbound",
    ownership: "Payroll-governed",
    evidence: "Jun 2026",
  },
];

export default function IntegrationCategoriesSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: Heading & Copy */}
          <div className="space-y-4">
            {/* Tag Line */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
              <span className="w-3 h-0.5 bg-[#0284C7]" />
              <span>WHAT HRIS/HCM INTEGRATION CONNECTS</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[24px] font-bold text-[#0F172A] tracking-tight">
              Categories, not a universal field list.
            </h2>

            {/* Subtext */}
            <p className="text-sm text-[#5B646B] leading-relaxed">
              Payroll calculation stays payroll-governed — HRIS/HCM never
              becomes the earnings engine.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm border border-slate-100">
            <Image
              src="/images/footer-integrations/2.png"
              alt="Presentation board displaying HRIS/HCM integration workflow categories"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Data Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#F8FAFC] text-[#0F172A] font-bold text-[11px] uppercase tracking-wider border-b border-slate-200/60">
                <th className="py-3.5 px-6">Data domain</th>
                <th className="py-3.5 px-6 text-center">Coverage</th>
                <th className="py-3.5 px-6 text-center">Direction</th>
                <th className="py-3.5 px-6 text-center">Ownership</th>
                <th className="py-3.5 px-6 text-right">Evidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[#0F172A]">
              {domainTableData.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  {/* Data domain */}
                  <td className="py-4 px-6 font-bold text-[#0F172A]">
                    {row.domain}
                  </td>

                  {/* Coverage */}
                  <td className="py-4 px-6 text-center">
                    {row.coverage === "check" && (
                      <Check className="w-4 h-4 text-slate-700 mx-auto stroke-[2.5]" />
                    )}
                    {row.coverage === "Partial" && (
                      <span className="font-semibold text-slate-700 text-xs">
                        Partial
                      </span>
                    )}
                    {row.coverage === "dash" && (
                      <span className="text-slate-400 font-medium">—</span>
                    )}
                  </td>

                  {/* Direction Badge */}
                  <td className="py-4 px-6 text-center bg-[#F6F8FC]">
                    <span className="inline-block px-3 py-1 rounded-md  text-slate-600 text-[11px] font-mono">
                      {row.direction}
                    </span>
                  </td>

                  {/* Ownership */}
                  <td className="py-4 px-6 text-center font-medium text-slate-700">
                    {row.ownership}
                  </td>

                  {/* Evidence */}
                  <td className="py-4 px-6 text-center bg-[#F6F8FC]">
                    <span className="inline-block px-3 py-1 rounded-md  text-slate-600 text-[11px] font-mono">
                      {row.evidence}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
