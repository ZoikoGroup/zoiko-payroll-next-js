"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface EscalationBadge {
  id: string;
  label: string;
  bg: string;
  text: string;
}

const escalationTypes: EscalationBadge[] = [
  {
    id: "standard",
    label: "Standard escalation",
    bg: "bg-white",
    text: "text-[#07243B]",
  },
  {
    id: "high",
    label: "High escalation",
    bg: "bg-white",
    text: "text-[#07243B]",
  },
  {
    id: "s1",
    label: "S1 Critical Bridge",
    bg: "bg-[#FCE8E6]",
    text: "text-[#D93025]",
  },
];

const lifecycleSteps = [
  { id: "golive", label: "Go-Live" },
  { id: "hypercare", label: "Hypercare" },
  { id: "bau", label: "BAU Handover" },
];

export default function EscalationAndHandoverSection() {
  const [activeStep, setActiveStep] = useState<string>("hypercare");
  const [selectedEscalation, setSelectedEscalation] = useState<string | null>(
    null,
  );

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block: Left Text + Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span>/</span>
              <span>ESCALATION, HYPERCARE & BAU HANDOVER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-[#07243B] leading-tight">
              Formal handover is required — never inferred from a completed
              go-live
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              A named team stays accountable through hypercare, with a
              documented handover before support ownership transitions to
              business-as-usual.
            </p>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[12/10] rounded-3xl overflow-hidden">
              <Image
                src="/images/imp-sup/3.png"
                alt="Team working around laptop on project escalation and handover"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Center Escalation Badges & Lifecycle Track */}
        <div className="space-y-6 max-w-3xl mx-auto text-center">
          {/* Escalation Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {escalationTypes.map((badge) => {
              const isSelected = selectedEscalation === badge.id;
              return (
                <button
                  key={badge.id}
                  onClick={() =>
                    setSelectedEscalation(isSelected ? null : badge.id)
                  }
                  className={`px-5 py-2.5 rounded-full text-xs font-bold border transition-all ${
                    badge.bg
                  } ${badge.text} ${
                    isSelected
                      ? "border-[#0A8FD0] ring-2 ring-[#0A8FD0]/30 shadow-xs"
                      : "border-slate-200/80 hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  {badge.label}
                </button>
              );
            })}
          </div>

          {/* Subtitle */}
          <p className="text-[11px] sm:text-xs text-slate-400 font-medium">
            One incident/case ID remains the source of truth — chat and video
            are coordination, never the record.
          </p>

          {/* 3-Step Flow Pills */}
          <div className="flex items-center justify-center gap-3 pt-2">
            {lifecycleSteps.map((step, idx) => {
              const isActive = activeStep === step.id;
              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`px-8 py-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      isActive
                        ? "bg-[#E3F2FD] text-[#0A8FD0] border-[#0A8FD0]"
                        : "bg-white text-[#07243B] border-slate-200/80 hover:bg-slate-50"
                    }`}
                  >
                    {step.label}
                  </button>

                  {idx < lifecycleSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#0A8FD0] shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Bottom Cards Grid: Hypercare Panel & BAU Handover Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Hypercare Panel Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
            <h3 className="text-sm font-bold text-[#07243B]">
              Hypercare panel
            </h3>

            <div className="divide-y divide-slate-100 text-xs font-semibold">
              <div className="py-3.5 first:pt-0 flex items-center justify-between text-[#07243B]">
                <span>Open issues</span>
                <span className="text-slate-400 font-medium">3</span>
              </div>

              <div className="py-3.5 flex items-center justify-between text-[#07243B]">
                <span>Trend</span>
                <span className="text-slate-400 font-medium">Improving</span>
              </div>

              <div className="py-3.5 last:pb-0 flex items-center justify-between text-[#07243B]">
                <span>Handover readiness</span>
                <span className="text-slate-400 font-medium">72%</span>
              </div>
            </div>
          </div>

          {/* BAU Handover Requirements Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
            <h3 className="text-sm font-bold text-[#07243B]">
              BAU handover requirements
            </h3>

            <div className="divide-y divide-slate-100 text-xs font-semibold text-[#07243B]">
              <div className="py-3.5 first:pt-0">No critical defects open</div>
              <div className="py-3.5">Operational runbook delivered</div>
              <div className="py-3.5">Admin training complete</div>
              <div className="py-3.5 last:pb-0">
                Support entitlement confirmed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
