"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";

interface BoundaryItem {
  id: string;
  title: string;
  description: string;
}

const processSteps = [
  { id: "inputs", label: "Inputs & Validation", active: false },
  { id: "calculations", label: "Calculations", active: true },
  { id: "approvals", label: "Approvals", active: false },
  { id: "payments", label: "Payments Orchestration", active: false },
  { id: "audit", label: "Close / Audit", active: false },
];

const boundaryItems: BoundaryItem[] = [
  {
    id: "ai-advisory",
    title: "AI is advisory only",
    description: "Explains variance, locates rules.",
  },
  {
    id: "never-authoritative",
    title: "Never authoritative",
    description: "Can't invent rates or edit components.",
  },
  {
    id: "lineage-preserved",
    title: "Lineage preserved",
    description: "Actor, time, scope, config version.",
  },
  {
    id: "high-impact-override",
    title: "High-impact override",
    description: "Maker-checker approval required.",
  },
  {
    id: "minimized-exposure",
    title: "Minimized exposure",
    description: "No sensitive values in logs or URLs.",
  },
  {
    id: "no-unverified-claims",
    title: "No unverified claims",
    description: 'No "bank-grade" or certification claims.',
  },
];

export default function ControlBoundaryAiSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">—</span>
            <span>CONTROL BOUNDARY & AI</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B]">
            Calculation is not payment
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            A calculated net amount is never presented as funded, transmitted or
            settled.
          </p>
        </div>

        {/* Process Flow Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  step.active
                    ? "bg-white text-[#0A78C3] border-[#0A78C3] shadow-xs ring-1 ring-[#0A78C3]/20"
                    : "bg-white text-[#07243B] border-slate-200/90"
                }`}
              >
                {step.label}
              </div>

              {index < processSteps.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0 hidden sm:block" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Main Content Split: Image & 2-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-2">
          {/* Left Column: Image Container (5 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60">
              <img
                src="/images/payroll-operation/10.png"
                alt="Two professionals reviewing physical and digital financial records"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: 2-Column Cards Grid (7 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {boundaryItems.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-4.5 rounded-2xl border border-slate-200/80 bg-white flex items-start gap-3 shadow-2xs"
              >
                <div className="mt-0.5 shrink-0 text-[#0A78C3]">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {item.description}
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
