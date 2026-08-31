"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

interface TeamCard {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const teamCards: TeamCard[] = [
  {
    imageSrc: "/images/footer-integrations/30.png",
    imageAlt: "Person working on computer dashboard presentation",
    title: "Expansion fit",
    description:
      "A growing account moves to account and payment-integration fit review.",
  },
  {
    imageSrc: "/images/footer-integrations/31.png",
    imageAlt: "Team collaborating over financial documents at table",
    title: "Reconciliation mismatch",
    description:
      "Routes to payment operations plus finance and payroll for resolution.",
  },
  {
    imageSrc: "/images/footer-integrations/32.png",
    imageAlt: "Colleagues reviewing computer monitor together",
    title: "Credential issue",
    description:
      "Escalates directly to secure support and security — no self-serve reset.",
  },
];

interface FlowStep {
  label: string;
  isCheck?: boolean;
}

const flowSteps: FlowStep[] = [
  { label: "Approved instruction" },
  { label: "Authorization" },
  { label: "Release" },
  { label: "External submission" },
  { label: "Provider / bank evidence" },
  { label: "Settlement or exception" },
  { label: "Reconciliation", isCheck: true },
];

export default function PayrollOperationsAlignedSection() {
  return (
    <section className="w-full bg-[#f5f8fa] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>BUILT FOR OPERATIONAL TEAMS</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Payroll, finance and payment operations, aligned
          </h2>
        </div>

        {/* 3-Column Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-start">
                <h3 className="text-base font-bold text-[#0F172A]">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Dark Callout Banner */}
        <div className="bg-[#062137] rounded-3xl p-8 sm:p-12 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-slate-800">
          {/* Left Column Text & Action CTA */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>FINAL STEP</span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl max-w-120 font-bold tracking-tight text-white leading-tight">
              Validate your payroll payment integration.
            </h3>

            {/* Subtext */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              Tell us your payment systems, countries and rails, and we'll
              confirm fit against current registry evidence before anything goes
              live.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="bg-[#0A8FD0] hover:bg-[#087bb5] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-md transition-colors cursor-pointer">
                Check your payment system
              </button>
              <button className="border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-semibold px-5 py-3 rounded-xl transition-colors flex items-center gap-2 cursor-pointer">
                <span>Get integration support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column Step Flow List */}
          <div className="lg:col-span-6">
            <div className="bg-[#0B2C47]/80 border border-slate-700/60 rounded-2xl p-4 sm:p-6 divide-y divide-slate-700/50">
              {flowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between text-xs text-slate-300 font-medium"
                >
                  <span>{step.label}</span>
                  {step.isCheck ? (
                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
