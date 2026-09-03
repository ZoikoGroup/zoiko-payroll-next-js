"use client";

import React from "react";

interface FailureMode {
  title: string;
  description: string;
}

interface EvidenceItem {
  label: string;
  status: string;
  badgeStyle: string;
}

const failureModes: FailureMode[] = [
  {
    title: "Late changes",
    description: "Requirements shift after cutover planning is locked.",
  },
  {
    title: "Mismatched scope",
    description: "Entity or jurisdiction scope was never fully agreed.",
  },
  {
    title: "Stale guides",
    description: "Local guidance used past its review date.",
  },
  {
    title: "Duplicate authority",
    description: "Two sources both claim to be the source of truth.",
  },
  {
    title: "Weak reconciliation",
    description: "Differences go unreviewed instead of resolved.",
  },
];

const evidenceItems: EvidenceItem[] = [
  {
    label: "Jurisdiction requirements confirmed",
    status: "Resolved",
    badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
  },
  {
    label: "Entity governance owner assigned",
    status: "Needs owner",
    badgeStyle: "bg-amber-50 text-amber-700 border-amber-200/60",
  },
  {
    label: "Reconciliation evidence documented",
    status: "Needs evidence",
    badgeStyle: "bg-sky-50 text-sky-700 border-sky-200/60",
  },
  {
    label: "Local banking rail confirmed",
    status: "Not applicable",
    badgeStyle: "bg-slate-100 text-slate-500 border-slate-200/60",
  },
];

const pathButtons = [
  "Jurisdiction Guides",
  "Product Documentation",
  "Implementation",
  "Security and Trust",
  "Pricing & Procurement",
  "Help & Support",
];

export default function EvaluationRisksSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Container */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              EVALUATION, RISKS & EVIDENCE PLANNER
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            A decision workspace — not a final marketing banner
          </h2>
        </div>

        {/* Common Failure Modes Block */}
        <div className="space-y-6">
          <h3 className="text-center text-sm font-bold text-[#07243B]">
            Common failure modes
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {failureModes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-1.5"
              >
                <h4 className="text-xs sm:text-sm font-bold text-[#07243B]">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence Planner Card */}
        <div className="bg-slate-50/50 rounded-3xl p-6 sm:p-8 border border-slate-100 space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-sm font-bold text-[#07243B]">
              Evidence planner
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              A working checklist — never an automated compliance or readiness
              score.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-2xs divide-y divide-slate-100 max-w-2xl mx-auto">
            {evidenceItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0 gap-4"
              >
                <span className="text-xs sm:text-sm font-bold text-[#07243B]">
                  {item.label}
                </span>
                <span
                  className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.badgeStyle} shrink-0`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Path Navigation Options */}
        <div className="space-y-6 pt-2">
          <h3 className="text-center text-sm font-bold text-[#07243B]">
            Choose your next authoritative path
          </h3>

          <div className="flex flex-wrap justify-start gap-3 max-w-2xl mx-auto">
            {pathButtons.map((path, idx) => (
              <button
                key={idx}
                type="button"
                className="bg-white border border-slate-200/80 text-[#07243B] text-xs font-bold px-4 py-2.5 rounded-2xl shadow-2xs hover:border-slate-300 transition-colors"
              >
                {path}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              type="button"
              className="bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#07243B] text-white text-xs font-bold px-6 py-3 rounded-2xl shadow-xs transition-colors"
            >
              Explore implementation readiness
            </button>
            <button
              type="button"
              className="bg-white border border-slate-200/80 text-[#07243B] hover:bg-slate-50 text-xs font-bold px-6 py-3 rounded-2xl shadow-2xs transition-colors"
            >
              Get support
            </button>
          </div>

          {/* Bottom Note */}
          <p className="text-center text-[11px] text-slate-400 font-medium">
            Existing customer? Documentation and support come first —
            you&apos;re never routed into a demo funnel.
          </p>
        </div>
      </div>
    </section>
  );
}
