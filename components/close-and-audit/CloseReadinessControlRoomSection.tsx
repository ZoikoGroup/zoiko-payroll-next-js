"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface ConditionCard {
  title: string;
  description: string;
}

const conditions: ConditionCard[] = [
  {
    title: "Scope",
    description:
      "Legal entity, pay group, run category, period, pay date, currency, jurisdiction and close owner.",
  },
  {
    title: "Readiness state",
    description:
      "Not Ready, Ready with Warnings, Ready to Close, Closing, Closed or Reopened.",
  },
  {
    title: "Blocking issues",
    description:
      "Mandatory conditions that keep the close action disabled until resolved.",
  },
  {
    title: "Warnings",
    description:
      "Non-blocking material items that still need an owner, evidence, or acceptance.",
  },
  {
    title: "Approvals",
    description:
      "Required sign-offs, approvers, delegation, timestamps and segregation of duties.",
  },
  {
    title: "Downstream dependencies",
    description:
      "Payment, accounting export, filing, reporting and remittance, all in view.",
  },
];

export default function CloseReadinessControlRoomSection() {
  return (
    <section className="w-full bg-[#F5F8FA] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Split: Left Content + Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (Header + 2-Column Grid of Cards) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
                <span>—</span>
                <span>CLOSE READINESS CONTROL ROOM</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
                One screen, every condition that has to be true
              </h2>

              {/* Description Subtitle */}
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
                Scope, blockers, warnings, reconciliations, approvals,
                downstream dependencies and evidence completeness — read
                together, not scattered across tabs.
              </p>
            </div>

            {/* 6 Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {conditions.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0A8FD0] stroke-[3] shrink-0" />
                    <h3 className="text-sm font-bold text-[#07243B]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed pl-6">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Product / Feature Graphic Card) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/60">
              <Image
                src="/images/payroll-operation/23.png"
                alt="Close readiness control room dashboard UI"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Badge Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-[#07243B] text-xs font-semibold shadow-2xs backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>Rules-based state</span>
                </span>
              </div>

              {/* Floating Badge Bottom Right */}
              <div className="absolute bottom-4 right-4 z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-[#07243B] text-xs font-semibold shadow-2xs backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>Evidence linked</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout Container (No border-radius, left accent border) */}
        <div className="bg-[#E9F0F8] border-l-4 border-l-[#0A8FD0] p-5 shadow-2xs rounded-none">
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            A percentage is never the authoritative readiness state. The state
            is rules-based and explains exactly what passed, failed or was
            waived.
          </p>
        </div>
      </div>
    </section>
  );
}
