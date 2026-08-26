"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface FlowStep {
  title: string;
  description: string;
}

const stepsData: FlowStep[] = [
  {
    title: "Product",
    description: "Roadmap & scope decisions",
  },
  {
    title: "Technology",
    description: "Platform & reliability",
  },
  {
    title: "Operations",
    description: "Payroll delivery",
  },
  {
    title: "Trust & Security",
    description: "Controls & evidence",
  },
  {
    title: "Customer / Commercial",
    description: "Support & success",
  },
];

export default function CollaborationFlowSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 lg:py-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          {/* Category Tag */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>HOW ACCOUNTABLE DECISIONS CONNECT</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight">
            A collaboration flow — never a reporting tree
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#4D5E72] leading-relaxed">
            Each arrow represents public collaboration or handoff between
            domains, not an internal reporting relationship.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
          {stepsData.map((step, idx) => (
            <React.Fragment key={idx}>
              {/* Step Card */}
              <div className="w-full md:w-auto flex-1 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center space-y-1 transition-shadow hover:shadow-md">
                <h3 className="text-[13px] font-bold text-[#0F172A]">
                  {step.title}
                </h3>
                <p className="text-[11px] text-[#94A3B8]">
                  {step.description}
                </p>
              </div>

              {/* Arrow Connector */}
              {idx < stepsData.length - 1 && (
                <div className="flex items-center justify-center text-[#0284C7] py-1 md:py-0">
                  <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
