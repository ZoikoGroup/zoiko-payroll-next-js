"use client";

import React from "react";

interface EvidenceFeature {
  title: string;
  description: string;
}

const features: EvidenceFeature[] = [
  {
    title: "Close Summary",
    description: "Scope, version, status and outcome in one page.",
  },
  {
    title: "Result Manifest",
    description: "The exact result set the close refers to.",
  },
  {
    title: "Reconciliation Pack",
    description: "Every check, expected vs actual, and disposition.",
  },
  {
    title: "Approval Trail",
    description: "Approvers, delegation and segregation of duties.",
  },
  {
    title: "Exception Register",
    description: "Every exception and how it was resolved.",
  },
  {
    title: "Evidence Integrity",
    description: "Change history and tamper-evident references.",
  },
];

export default function AuditTrailEvidenceSection() {
  return (
    <section className="w-full bg-[#0F2B3E] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>—</span>
            <span>AUDIT TRAIL & CLOSE EVIDENCE PACKAGE</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white leading-tight">
            Attributable, time-ordered evidence — not a generic activity feed
          </h2>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Every event carries actor, scope, action, timestamp, reason,
            approval reference and retention status. Exports are
            permission-aware and built for controlled, asynchronous generation.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF0A] border border-[#FFFFFF24] rounded-2xl p-6 space-y-2 backdrop-blur-xs flex flex-col justify-start"
            >
              <h3 className="text-sm font-bold text-white tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Box (Centered, square corners, accent left border) */}
        <div className="max-w-3xl mx-auto bg-[#FFFFFF0A] border border-[#FFFFFF24] border-l-4 border-l-[#0A8FD0] p-5 rounded-none backdrop-blur-xs">
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            Raw sensitive payroll evidence is never emailed as an uncontrolled
            attachment by default.
          </p>
        </div>
      </div>
    </section>
  );
}
