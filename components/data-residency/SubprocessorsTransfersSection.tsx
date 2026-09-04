"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function SubprocessorsTransfersSection() {
  const steps = [
    {
      title: "Zoiko Payroll service",
      highlighted: true,
    },
    {
      title: "Approved third parties & affiliates",
      highlighted: false,
    },
    {
      title: "Cross-border transfer layer",
      highlighted: false,
    },
  ];

  return (
    <div className="w-full bg-white text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-4xl mx-auto space-y-12 text-center">
        {/* Header Block */}
        <div className="space-y-4 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              SUBPROCESSORS, AFFILIATES & TRANSFERS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Third-party handling may change geographic scope
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl mx-auto pt-1">
            A transfer mechanism is never inferred from destination geography{" "}
            <span className="text-slate-400 font-bold">—</span> legal mechanisms
            resolve from current Privacy and Legal records only.
          </p>
        </div>

        {/* Horizontal Flow Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              {/* Step Card */}
              <div
                className={`w-full md:w-auto px-6 py-5 rounded-2xl border text-center transition-all shadow-xs ${
                  step.highlighted
                    ? "bg-[#0A2E4B] text-white border-[#07243B] shadow-md"
                    : "bg-white text-[#07243B] border-slate-200/85"
                }`}
              >
                <span
                  className={`text-xs sm:text-sm ${step.highlighted ? "text-white" : "text-[#07243B]"}`}
                >
                  {step.title}
                </span>
              </div>

              {/* Arrow Connector (if not the last item) */}
              {idx < steps.length - 1 && (
                <div className="text-[#0A78C3] py-2 md:py-0 rotate-90 md:rotate-0">
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Footer Subtext */}
        <p className="text-[11px] sm:text-xs text-slate-500 font-medium text-center max-w-xl mx-auto leading-relaxed pt-4">
          This page routes to the canonical Subprocessors list and current
          Privacy/Legal records{" "}
          <span className="text-slate-400 font-bold">—</span> it is never the
          legal source of truth itself.
        </p>
      </section>
    </div>
  );
}
