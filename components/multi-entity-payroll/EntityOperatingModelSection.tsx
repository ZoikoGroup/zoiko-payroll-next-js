"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

// Flow chart steps data matching the screenshot
const OPERATING_MODEL_STEPS = [
  {
    category: "ORGANIZATION / GROUP",
    title: "Portfolio context",
    subtitle: "Owns governance templates \u2014 not legal consolidation",
  },
  {
    category: "PAYROLL ENTITY",
    title: "Legal / employer reference",
    subtitle:
      "Owns identity, lifecycle \u2014 not authority over related entities",
  },
  {
    category: "ENTITY PAYROLL SCOPE",
    title: "Jurisdiction + service model",
    subtitle: "Owns configuration bindings \u2014 not proof of availability",
  },
  {
    category: "PAYROLL GROUP",
    title: "Population + calendar",
    subtitle: "Owns schedule, processing config, approval route",
  },
  {
    category: "PAYROLL CYCLE",
    title: "Period + readiness",
    subtitle: "Owns cutoff, status, exceptions, approvals",
  },
];

export default function EntityOperatingModelSection() {
  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>ENTITY OPERATING MODEL</span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-extrabold text-[#0A1928] leading-tight">
            Organization &rarr; Entity &rarr; Scope &rarr; Group &rarr; Cycle
            &rarr; Records
          </h2>

          <p className="text-sm sm:text-base text-[#5C6E7E]">
            Each layer is an object with its own scope and ownership &mdash;
            never collapsed into one.
          </p>
        </div>

        {/* Main Content Grid: Left Stacked Flow + Right Image & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Vertical Flow Hierarchy */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-3">
            {OPERATING_MODEL_STEPS.map((step, index) => (
              <React.Fragment key={index}>
                <div className="w-full bg-white rounded-2xl p-5 border border-[#E1E8ED] shadow-xs space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#0281D3]">
                    {step.category}
                  </div>
                  <h3 className="text-base font-bold text-[#0A1928]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#5C6E7E]">{step.subtitle}</p>
                </div>

                {/* Arrow Connector between cards */}
                {index < OPERATING_MODEL_STEPS.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-[#94A3B8] my-0.5 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Right Column: Featured Image & Information Box */}
          <div className="lg:col-span-6 space-y-6">
            {/* Featured Meeting Image */}
            <div className="rounded-3xl overflow-hidden h-64 sm:h-80 w-full">
              <img
                src="/images/multi-entity-payroll/left.png"
                alt="Team Collaboration Meeting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Ownership Boundaries Text Block */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#0A1928]">
                Ownership boundaries stay explicit.
              </h3>
              <p className="text-sm text-[#5C6E7E] leading-relaxed">
                The Global Portfolio View is operational aggregation only
                &mdash; never statutory, accounting or legal consolidation.
              </p>
            </div>

            {/* Disclaimer Callout Box */}
            <div className="border border-[#E1E8ED] rounded-2xl p-5 text-xs text-[#5C6E7E] leading-relaxed shadow-xs">
              <span className="font-bold text-[#0A1928]">Does not imply:</span>{" "}
              that visibility equals legal authority, that hierarchy equals
              permission, or that portfolio aggregation equals consolidated
              statutory reporting.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
