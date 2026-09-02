"use client";

import React from "react";
import { Check, X } from "lucide-react";

const aiCanPoints: string[] = [
  "Search reports for authorized users",
  "Summarize variances, liabilities and exceptions",
  "Suggest relevant reports and explain fields or lineage",
  "Draft executive summaries from approved final reports",
];

const aiMustNeverPoints: string[] = [
  "Grant access or invent payroll values or statuses",
  "Reinterpret a Draft record as Final",
  "Alter retention, legal holds or report definitions",
  "Export or distribute sensitive reports without deterministic authorization",
];

export default function AIAssistedReportingSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span className="text-[#0A8FD0] font-bold">/</span>
            <span>AI-ASSISTED REPORTING</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#07243B] leading-tight">
            AI can help you find and explain. It can never decide
          </h2>
        </div>

        {/* Side-by-Side Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-210 mx-auto pt-2">
          {/* Left Card: AI can */}
          <div className="bg-[#E1EEF9] rounded-2xl p-6 sm:p-8 space-y-4 border border-[#D4E6F1]">
            <h3 className="text-base sm:text-[19px] font-extrabold text-[#155A8A] flex items-center gap-2">
              <Check className="w-5 h-5 text-[#155A8A] stroke-[3]" />
              <span>AI can</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              {aiCanPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B4573] shrink-0 mt-2" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card: AI must never */}
          <div className="bg-[#F3E9CC] rounded-2xl p-6 sm:p-8 space-y-4 border border-[#F0E4BE]">
            <h3 className="text-base sm:text-[19px] font-extrabold text-[#8C6D2F] flex items-center gap-2">
              <X className="w-5 h-5 text-[#8C6D2F] stroke-[3]" />
              <span>AI must never</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              {aiMustNeverPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6B1F] shrink-0 mt-2" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
