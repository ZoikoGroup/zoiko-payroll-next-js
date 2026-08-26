"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

// Status card items configuration matching the image layout
const STATUS_CARDS = [
  {
    badgeText: "Available",
    badgeStyles: "bg-[#E6F4EA] text-[#1E7E34]",
    description:
      "Current coverage + approved requirement context. Implementation/demo permitted after status.",
  },
  {
    badgeText: "Limited",
    badgeStyles: "bg-[#FEF3D6] text-[#B45309]",
    description:
      "Limitations shown before detailed requirement content or CTA.",
  },
  {
    badgeText: "Partner-supported",
    badgeStyles: "bg-[#E0F2FE] text-[#0369A1]",
    description: "Service model and owned responsibilities disclosed.",
  },
  {
    badgeText: "Planned",
    badgeStyles: "bg-[#F3E8FF] text-[#6B21A8]",
    description:
      "Future state kept separate from current education; no implementation promise.",
  },
  {
    badgeText: "Unavailable",
    badgeStyles: "bg-[#FEE2E2] text-[#991B1B]",
    description:
      'Current unavailability shown clearly; no "start payroll" CTA.',
  },
  {
    badgeText: "Needs review",
    badgeStyles: "bg-[#FEF3D6] text-[#B45309]",
    description: "Status under verification; no service promise.",
  },
  {
    badgeText: "Not applicable",
    badgeStyles: "bg-[#F1F5F9] text-[#475569]",
    description: "Scope relationship explained; no generic availability CTA.",
  },
];

export default function AvailabilityWorkflowSection() {
  return (
    <section className="w-full bg-[#EBF3FA] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Hero Layout: Image Left + Heading Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Image Box */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-sm h-64 sm:h-80 w-full">
            <img
              src="/images/payroll-requirements/writing.png"
              alt="Availability and Compliance Workflow"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Header Content */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
              <span>/</span>
              <span>Availability + Compliance Workflow Handoff</span>
            </div>
            <h2 className="text-3xl md:text-[32px] font-extrabold text-[#0A1928] leading-tight">
              Local requirement depth is never mistaken for current service
              availability
            </h2>
          </div>
        </div>

        {/* 4-Column Grid for Status Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATUS_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 space-y-3 shadow-xs border border-slate-100 flex flex-col justify-start"
            >
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${card.badgeStyles}`}
                >
                  {card.badgeText}
                </span>
              </div>
              <p className="text-xs text-[#5C6E7E] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Bar */}
        <div className="bg-[#E5EFF9] border-l-4 border-[#0281D3] rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#0A1928]">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span>
              Need to see how local requirements are reviewed and evidenced?
            </span>
            <a
              href="#explore-compliance"
              className="font-bold text-[#0281D3] hover:underline inline-flex items-center gap-1"
            >
              Explore Compliance Workflows
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
