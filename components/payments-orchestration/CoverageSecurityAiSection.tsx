"use client";

import React from "react";
import { Check } from "lucide-react";

interface StatusBadge {
  label: string;
  dotBg: string;
  bg: string;
  text: string;
}

interface SecurityFeature {
  id: string;
  title: string;
  description: string;
}

const statusBadges: StatusBadge[] = [
  {
    label: "Live",
    dotBg: "bg-[#0F6B48]",
    bg: "bg-[#E5F4EC]",
    text: "text-[#0F6B48]",
  },
  {
    label: "Pilot",
    dotBg: "bg-[#0A78C3]",
    bg: "bg-[#E7EDFD]",
    text: "text-[#0A78C3]",
  },
  {
    label: "Contract-only",
    dotBg: "bg-[#4A5568]",
    bg: "bg-[#EEF1F6]",
    text: "text-[#4A5568]",
  },
  {
    label: "Planned",
    dotBg: "bg-[#9A6300]",
    bg: "bg-[#FCF1D8]",
    text: "text-[#9A6300]",
  },
  {
    label: "Unsupported",
    dotBg: "bg-[#B3261E]",
    bg: "bg-[#FBEAEA]",
    text: "text-[#B3261E]",
  },
];

const securityFeatures: SecurityFeature[] = [
  {
    id: "masked-tokenized",
    title: "Masked & tokenized",
    description: "Payment data never exposed raw.",
  },
  {
    id: "stable-idempotency",
    title: "Stable idempotency",
    description: "Exactly-once business effect.",
  },
  {
    id: "tamper-evident",
    title: "Tamper-evident evidence",
    description: "Auditable beneficiary changes.",
  },
  {
    id: "timeout-resend",
    title: "Timeout \u2260 resend",
    description: "Outage creates Unknown/Pending.",
  },
  {
    id: "ai-advisory",
    title: "AI is advisory only",
    description: "Never approves, reroutes or retries.",
  },
  {
    id: "step-up-auth",
    title: "Step-up authentication",
    description: "Required for high-risk actions.",
  },
];

export default function CoverageSecurityAiSection() {
  return (
    <section className="relative w-full min-h-[520px] text-white flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/payroll-operation/bg11.png"
          alt="Dark blue textured security background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#133F5DEB] to-[#0F2B3EF0] backdrop-blur-xs" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase font-mono">
            <span className="text-[#38BDF8] font-bold">—</span>
            <span>COVERAGE, SECURITY & AI</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white">
            Planned is never presented as live
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 font-medium">
            Where Zoiko isn&apos;t the licensed executor, its role is described
            precisely.
          </p>

          {/* Status Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            {statusBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium border border-white/10 ${badge.bg} ${badge.text}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${badge.dotBg}`} />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* 3x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {securityFeatures.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3 transition-colors hover:bg-white/10"
            >
              <div className="mt-0.5 shrink-0 text-[#38BDF8]">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
