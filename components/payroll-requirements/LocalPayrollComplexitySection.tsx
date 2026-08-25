"use client";

import React from "react";
import {
  Calendar,
  DollarSign,
  FileText,
  FileCheck,
  Coins,
  Users,
  Clock,
  CheckCircle2,
} from "lucide-react";

// Card items definition matching the screenshot structure and icons
const COMPLEXITY_CARDS = [
  {
    icon: Calendar,
    title: "Payroll calendars",
    description: "Frequency, periods, cutoffs, holidays, timezone.",
    isHighlighted: false,
  },
  {
    icon: DollarSign,
    title: "Calculation context",
    description: "Earning/deduction treatment and configured inputs.",
    isHighlighted: false,
  },
  {
    icon: FileText,
    title: "Documents/reporting",
    description: "Payslips, reports, filing/document workflows.",
    isHighlighted: false,
  },
  {
    icon: FileCheck,
    title: "Approvals/authority",
    description: "Local roles, delegation and sign-off.",
    isHighlighted: false,
  },
  {
    icon: Coins,
    title: "Currency/payment",
    description: "Local currency, payment rails, treasury handoffs.",
    isHighlighted: false,
  },
  {
    icon: Users,
    title: "Worker/entity context",
    description: "Entity, payroll group, category, effective date.",
    isHighlighted: false,
  },
  {
    icon: CheckCircle2,
    title: "Change cadence",
    description: "Local requirements change over time.",
    isHighlighted: false,
  },
  {
    icon: Clock,
    title: "Evidence-gated",
    description: "Exact values shown only from current approved evidence.",
    isHighlighted: true,
  },
];

export default function LocalPayrollComplexitySection() {
  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Header & Hero Image Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Header */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
              <span>/</span>
              <span>Why Local Payroll Requirements Vary</span>
            </div>

            <h2 className="text-3xl md:text-[36px] font-bold text-[#0A1928] leading-tight">
              Operating complexity, explained plainly &mdash; not fear marketing
            </h2>

            <p className="text-[17px] text-[#5C6E7E] leading-relaxed max-w-xl">
              The exact requirement depends on current evidence, worker/entity
              context, service model and configuration.
            </p>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-sm border border-[#E1E8ED]">
            <img
              src="/images/payroll-requirements/right.png"
              alt="Operating complexity explained plainly"
              className="w-full h-56 sm:h-72 object-cover block"
            />
          </div>
        </div>

        {/* 3-Column Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {COMPLEXITY_CARDS.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className={`rounded-2xl p-6 border transition-colors shadow-sm flex flex-col justify-between space-y-4 ${
                  card.isHighlighted
                    ? "bg-[#E9F0F8] border-[#B2D1EE]"
                    : "bg-white border-[#E1E8ED]"
                }`}
              >
                <div className="space-y-3">
                  <Icon className="w-5 h-5 text-[#0A1928]" />
                  <h3 className="text-base font-bold text-[#0A1928]">
                    {card.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      card.isHighlighted
                        ? "text-[#4A607A] italic"
                        : "text-[#5C6E7E]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
