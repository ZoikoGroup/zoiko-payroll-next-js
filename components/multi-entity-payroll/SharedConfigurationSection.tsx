"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

// Process flow steps data
const INHERITANCE_STEPS = [
  { label: "Global Default", isActive: false },
  { label: "Regional Template", isActive: false },
  { label: "Entity Default", isActive: true },
  { label: "Jurisdiction / Group Override", isActive: false },
  { label: "Approved Version", isActive: false },
];

// Left Box: Inherited Template Fields
const INHERITED_FIELDS = [
  { label: "Pay frequency", value: "Monthly" },
  { label: "Approval stages", value: "2" },
  { label: "Currency", value: "EUR" },
];

// Right Box: Local Override Fields
const OVERRIDE_FIELDS = [
  { label: "Pay frequency", value: "Monthly (unchanged)" },
  { label: "Approval stages", value: "3 (override)" },
  { label: "Currency", value: "EUR (unchanged)" },
];

export default function SharedConfigurationSection() {
  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>SHARED CONFIGURATION, INHERITANCE &amp; LOCAL OVERRIDES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1928] leading-tight">
            Every effective field shows its source layer
          </h2>

          <p className="text-sm sm:text-base text-[#5C6E7E]">
            Higher-level templates supply defaults only where a lower scope has
            no approved override.
            <br className="hidden sm:inline" /> Conflicts never get guessed.
          </p>
        </div>

        {/* Step Flow Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {INHERITANCE_STEPS.map((step, idx) => (
            <React.Fragment key={idx}>
              <div
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  step.isActive
                    ? "bg-gradient-to-r from-[#2E91D1] to-[#0B4E7D] text-white shadow-sm"
                    : "bg-white text-[#0A1928] border border-[#E1E8ED] shadow-2xs"
                }`}
              >
                {step.label}
              </div>

              {idx < INHERITANCE_STEPS.length - 1 && (
                <ArrowRight className="w-4 h-4 text-[#94A3B8] shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="bg-white border border-[#E1E8ED] rounded-2xl shadow-[0_8px_24px_rgba(8,47,73,0.06),0_1px_2px_rgba(8,47,73,0.04)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E1E8ED]">
            {/* Left Column: Inherited (Regional Template) */}
            <div className="p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0281D3]">
                  INHERITED (REGIONAL TEMPLATE)
                </div>

                <div className="space-y-3">
                  {INHERITED_FIELDS.map((field, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2 border-b border-[#E1E8ED]/60 last:border-b-0 text-xs sm:text-sm"
                    >
                      <span className="text-[#5C6E7E]">{field.label}</span>
                      <span className="font-bold text-[#0A1928]">
                        {field.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-[#94A3B8] pt-2">
                Source: EU Regional Template v3
              </div>
            </div>

            {/* Right Column: Local Override (Zoiko GmbH) */}
            <div className="p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0281D3]">
                  LOCAL OVERRIDE (ZOIKO GMBH)
                </div>

                <div className="space-y-3">
                  {OVERRIDE_FIELDS.map((field, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2 border-b border-[#E1E8ED]/60 last:border-b-0 text-xs sm:text-sm"
                    >
                      <span className="text-[#5C6E7E]">{field.label}</span>
                      <span className="font-bold text-[#0281D3]">
                        {field.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-[#94A3B8] pt-2">
                Approved by K. Fischer &middot; Aug 12, 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
