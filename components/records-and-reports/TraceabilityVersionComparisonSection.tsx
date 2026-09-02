"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface FlowStep {
  label: string;
}

const traceSteps: FlowStep[] = [
  { label: "Global / Portfolio" },
  { label: "Country / Legal entity" },
  { label: "Pay group / Period" },
  { label: "Run / Result version" },
  { label: "Report / Record" },
  { label: "Worker / Result line" },
];

const originalBulletPoints: string[] = [
  "Closed payroll result, preserved as filed",
  "Gross-to-net totals as originally calculated",
  "Approval trail: Manager, Aug 24, 2026",
];

const currentBulletPoints: string[] = [
  "Reason: overtime recalculation, worker classification",
  "Absolute and percentage variance vs. base period",
  "Initiator and approval trail preserved",
];

export default function TraceabilityVersionComparisonSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#3EA3E0] uppercase font-mono">
            <span className="text-[#3EA3E0] font-bold">/</span>
            <span>TRACEABILITY & VERSION COMPARISON</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#07243B] leading-tight">
            Every number traces back to its source
          </h2>
        </div>

        {/* Traceability Flow Pipeline */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {traceSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
                  {step.label}
                </div>
                {idx < traceSteps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="text-center text-[11px] sm:text-xs text-slate-400 font-medium">
            Worker-level detail is shown only where authorized.
          </p>
        </div>

        {/* Comparison Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-2">
          {/* Left Card: Original (Run v2) */}
          <div className="bg-[#E1EEF9] rounded-2xl p-6 sm:p-8 space-y-4 border border-[#D4E6F1]">
            <h3 className="text-base sm:text-[19px] font-extrabold text-[#155A8A]">
              Original (Run v2)
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              {originalBulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B4573] shrink-0 mt-2" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card: Current (Run v3 — Correction) */}
          <div className="bg-[#F3E9CC] rounded-2xl p-6 sm:p-8 space-y-4 border border-[#F0E4BE]">
            <h3 className="text-base sm:text-[19px] font-extrabold text-[#8C6D2F]">
              Current (Run v3 — Correction)
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              {currentBulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6B1F] shrink-0 mt-2" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Schema Subtext */}
        <p className="text-center text-[11px] sm:text-xs text-slate-400 font-medium max-w-3xl mx-auto">
          Schema changes are always flagged — historical columns are never
          silently remapped; the schema version is retained.
        </p>

        {/* Bottom Highlight Callout Container with Blue Accent Border */}
        <div className="bg-white rounded-xl border border-slate-200 border-l-4 border-l-[#3EA3E0] p-5 shadow-2xs max-w-6xl mx-auto">
          <p className="text-xs sm:text-[14.5px] text-slate-600 font-medium leading-relaxed">
            <strong className="font-bold text-[#07243B]">
              Provenance panel:
            </strong>{" "}
            source payroll, report definition, rules/data context, related
            controls, downstream context and integrity reference — all linked
            from every record.
          </p>
        </div>
      </div>
    </section>
  );
}
