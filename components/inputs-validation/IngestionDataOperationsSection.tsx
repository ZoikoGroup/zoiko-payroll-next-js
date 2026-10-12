"use client";

import React from "react";
import { Check } from "lucide-react";

interface IntakeOption {
  id: string;
  title: string;
  description: string;
}

const intakeOptions: IntakeOption[] = [
  {
    id: "connector",
    title: "Connector / API",
    description: "Schema-validated, idempotent.",
  },
  {
    id: "file-import",
    title: "Secure file import",
    description: "Mapped, previewed, quarantined if unsafe.",
  },
  {
    id: "manual",
    title: "Manual input",
    description: "Authorized roles only, audit trail.",
  },
  {
    id: "late-changes",
    title: "Late changes",
    description: "Flagged with current/retro impact.",
  },
];

export default function IngestionDataOperationsSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Content Block (6 cols - Equal 50/50 split) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          {/* Header Block */}
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
              <span className="text-[#0A78C3] font-bold">—</span>
              <span>INGESTION & DATA OPERATIONS</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
              A controlled intake contract, not an open pipe
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-base text-slate-400 leading-relaxed">
              Every path — API, file or manual — is authenticated, validated and
              traceable.
            </p>
          </div>

          {/* 2-Column Grid of Cards (All uniform design) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {intakeOptions.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl border border-slate-200/80 bg-white flex items-start gap-3"
              >
                <div className="mt-0.5 shrink-0 text-[#0A78C3]">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout Box with Zero Left Radius */}
          <div className="pt-1">
            <div className="bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-r-xl rounded-l-none p-4">
              <p className="text-xs sm:text-sm text-[#07243B] font-medium leading-relaxed">
                Partial failure isolates bad records — successful ones stay
                traceable. Retries never duplicate a pay event.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image with Floating Badges (6 cols - Equal 50/50 split) */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 min-h-[380px] lg:min-h-full flex">
          <img
            src="/images/payroll-operation/5.png"
            alt="Laptop displaying dashboard analytics"
            className="w-full h-full object-cover object-center"
          />

          {/* Top-Right Badge: Accepted Count */}
          <div className="absolute top-5 right-5">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#07243B] shadow-sm border border-slate-100">
              <span>478 accepted</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
          </div>

          {/* Bottom-Left Badge: Quarantined Count */}
          <div className="absolute bottom-5 left-5">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#07243B] shadow-sm border border-slate-100">
              <span>4 quarantined</span>
              <span className="w-2 h-2 rounded-full bg-amber-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
