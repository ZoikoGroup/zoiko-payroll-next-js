"use client";

import React from "react";
import Image from "next/image";

interface GuardrailCard {
  title: string;
  dotColor: string;
  description: string;
}

const guardrails: GuardrailCard[] = [
  {
    title: "Advisory only",
    dotColor: "bg-[#2563EB]",
    description: "AI explains, summarizes and prioritizes review.",
  },
  {
    title: "Same audit path",
    dotColor: "bg-[#2563EB]",
    description: "AI-assisted changes follow the human workflow.",
  },
  {
    title: "Never silent",
    dotColor: "bg-[#2563EB]",
    description: "Can't create, approve, close, or pay a value.",
  },
  {
    title: "Data minimization",
    dotColor: "bg-[#2563EB]",
    description: "No sensitive values in prompts or training.",
  },
];

export default function RolesSecurityAIGuardrailsSection() {
  return (
    <section className="w-full bg-[#F5F8FA] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Image Card with Badge */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[530px] h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/60">
              <Image
                src="/images/payroll-operation/26.png"
                alt="Two colleagues looking at screen discussing security access"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Badge Top Right */}
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 text-[#07243B] text-xs font-semibold shadow-2xs backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>Least-privilege access</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Text & 2-Column Grid */}
          <div className="lg:col-span-6 space-y-8">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
                <span>—</span>
                <span>ROLES, SECURITY & AI GUARDRAILS</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
                Scoped roles. Provable controls. An AI that never decides
              </h2>

              {/* Subtitle / Description */}
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
                Payroll Operator, Payroll Approver, Payroll Close Admin,
                Finance/Controller and Auditor read-only — each scoped by entity
                and pay group, with MFA and step-up authentication on high-risk
                actions.
              </p>
            </div>

            {/* 2-Column Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guardrails.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-2 flex flex-col justify-start"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${card.dotColor} shrink-0`}
                    />
                    <h3 className="text-sm font-bold text-[#07243B]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Callout Container (Square corners, left border accent) */}
        <div className="bg-[#E9F0F8] border-l-4 border-l-[#0A8FD0] p-5 shadow-2xs rounded-none max-w-6xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Payroll close does not itself prove bank settlement, constitute
            statutory filing, close the enterprise financial ledger, or provide
            an independent audit opinion.
          </p>
        </div>
      </div>
    </section>
  );
}
