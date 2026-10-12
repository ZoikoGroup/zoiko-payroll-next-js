"use client";

import React from "react";
import Image from "next/image";

interface ValidationRow {
  issueType: string;
  domain: string;
  source: string;
  owner: string;
  severity: string;
  severityBg: string;
  severityText: string;
}

const tableData: ValidationRow[] = [
  {
    issueType: "Missing required source value",
    domain: "Compensation inputs",
    source: "Workday HCM",
    owner: "payroll-ops",
    severity: "Blocking",
    severityBg: "bg-rose-100/80",
    severityText: "text-rose-700",
  },
  {
    issueType: "Unmapped reference value",
    domain: "Organization context",
    source: "BambooHR",
    owner: "it-integrations",
    severity: "Review required",
    severityBg: "bg-amber-100/80",
    severityText: "text-amber-800",
  },
  {
    issueType: "Retroactive change flagged",
    domain: "Employment relationship",
    source: "SAP SuccessFactors",
    owner: "payroll-ops",
    severity: "Warning",
    severityBg: "bg-blue-100/80",
    severityText: "text-blue-700",
  },
  {
    issueType: "Locale mapping difference",
    domain: "Worker identity",
    source: "UKG Pro",
    owner: "it-integrations",
    severity: "Informational",
    severityBg: "bg-slate-200/80",
    severityText: "text-slate-700",
  },
];

export default function MappingValidationSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 px-4 sm:px-6 lg:px-8 text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-integrations/bg.png"
          alt="Background overlay showing professional workflow"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay Gradient to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051726]/95 via-[#0A2E47]/90 to-[#051726]/95" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mx-auto">
          {/* Subtitle Tag */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
            <span className="w-3 h-0.5 bg-[#2F6FED]" />
            <span>MAPPING, TRANSFORMATION + VALIDATION</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            No hidden logic — every rule has a named owner
          </h2>

          {/* Paragraph */}
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Invalid records are rejected or quarantined; unmapped values require
            review unless an approved fallback exists.
          </p>
        </div>

        {/* Floating Table Card */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200/20 bg-white shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-[#F8FAFC] text-[#0F172A] font-bold text-[10px] sm:text-[11px] uppercase tracking-wider border-b border-slate-200/80">
                <th className="py-4 px-6">ISSUE TYPE</th>
                <th className="py-4 px-6">DOMAIN</th>
                <th className="py-4 px-6">SOURCE</th>
                <th className="py-4 px-6">OWNER</th>
                <th className="py-4 px-6">SEVERITY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[#0F172A]">
              {tableData.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/60 transition-colors"
                >
                  {/* Issue Type */}
                  <td className="py-4.5 px-6 font-medium text-[#0F172A]">
                    {row.issueType}
                  </td>

                  {/* Domain */}
                  <td className="py-4.5 px-6 text-slate-600">{row.domain}</td>

                  {/* Source (Pill background) */}
                  <td className="py-4.5 px-6">
                    <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-100/80 text-slate-700 font-mono text-xs">
                      {row.source}
                    </span>
                  </td>

                  {/* Owner (Pill background) */}
                  <td className="py-4.5 px-6">
                    <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-100/80 text-slate-700 font-mono text-xs">
                      {row.owner}
                    </span>
                  </td>

                  {/* Severity Badge */}
                  <td className="py-4.5 px-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${row.severityBg} ${row.severityText}`}
                    >
                      {row.severity}
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
