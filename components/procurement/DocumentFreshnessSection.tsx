"use client";

import React from "react";
import { Check } from "lucide-react";

interface FreshnessDoc {
  title: string;
  metadata: string;
  dateInfo: string;
  status: string;
}

const freshnessDocs: FreshnessDoc[] = [
  {
    title: "Data Processing Agreement",
    metadata: "Privacy/Legal-owned · v3.2",
    dateInfo: "Effective Jun 2026",
    status: "Current",
  },
  {
    title: "Security Overview Summary",
    metadata: "Security-owned · v2.0",
    dateInfo: "Reviewed Mar 2026",
    status: "Current",
  },
  {
    title: "Standard Customer Terms",
    metadata: "Legal-owned · v5.1",
    dateInfo: "Effective Jan 2026",
    status: "Current",
  },
  {
    title: "Subprocessor Register",
    metadata: "Privacy/Security-owned",
    dateInfo: "Updated weekly",
    status: "Live",
  },
];

export default function DocumentFreshnessSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 text-[#07243B]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Title, Description, Bullet Points */}
          <div className="lg:col-span-5 space-y-6">
            {/* Eyebrow Label with slanted dark slash */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                DOCUMENT FRESHNESS & RFP SUPPORT
              </span>
            </div>

            {/* Title (31px) */}
            <h2 className="text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              Every resource shows its version, owner and status.
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Governed documents display version, owner, effective date and
              supersession status — so your team never relies on a stale file.
            </p>

            {/* Feature List */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#0A78C3]" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  RFP, RFI and vendor questionnaires use a structured, assisted
                  response workflow.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#0A78C3]" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Self-service resources are suggested first; bespoke questions
                  route to the right owner.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#0A78C3]" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  You can upload your own questionnaire — never payroll files,
                  credentials or employee data.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Document Cards List */}
          <div className="lg:col-span-7 space-y-3.5">
            {freshnessDocs.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs flex items-center justify-between gap-4 hover:border-slate-300 transition-colors"
              >
                {/* Left side: Title and metadata */}
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {doc.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {doc.metadata}
                  </p>
                </div>

                {/* Right side: Date and Status */}
                <div className="text-right space-y-0.5 shrink-0">
                  <p className="text-[11px] text-slate-400 font-medium">
                    {doc.dateInfo}
                  </p>
                  <p className="text-xs font-bold text-[#07243B]">
                    {doc.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
