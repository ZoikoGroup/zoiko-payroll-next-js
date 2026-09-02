"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface StepItem {
  title: string;
  href?: string;
}

const spineSteps: StepItem[] = [
  { title: "Inputs & validation", href: "#" },
  { title: "Gross-to-net calculations", href: "#" },
  { title: "Review & approvals", href: "#" },
  { title: "Deductions & adjustments", href: "#" },
  { title: "Payments orchestration", href: "#" },
  { title: "Payroll close & audit", href: "#" },
  { title: "Reporting & analytics", href: "#" },
];

export default function ConnectedOperatingSpineSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>CONNECTED PAYROLL OPERATING SPINE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            One coherent platform underneath every solution path
          </h2>
        </div>

        {/* Horizontal Flow Container */}
        <div className="w-full overflow-x-auto pb-4 pt-2 scrollbar-none">
          <div className="flex items-center min-w-max justify-center gap-2 sm:gap-3 px-4">
            {spineSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Arrow preceding each step */}
                <ArrowRight className="w-4 h-4 text-[#0A8FD0] shrink-0" />

                {/* Step Card */}
                <a
                  href={step.href || "#"}
                  className="bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold text-[#07243B] shadow-2xs hover:border-[#0A8FD0] hover:text-[#0A8FD0] transition-colors shrink-0"
                >
                  {step.title}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer Subtext */}
        <p className="text-center text-[11px] sm:text-xs text-slate-400 font-medium mx-auto leading-relaxed">
          Each step links to the relevant payroll operations page. Availability
          boundaries by jurisdiction or plan are shown on the linked detail
          pages.
        </p>
      </div>
    </section>
  );
}
