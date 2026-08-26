"use client";

import React from "react";
import {
  LayoutGrid,
  FileText,
  Clock,
  FileCheck,
  CreditCard,
  CheckCircle,
  ShieldCheck,
  Timer,
} from "lucide-react";

// Grid items matching the 8 cards in the image
const CONTROL_RECORD_CARDS = [
  {
    icon: LayoutGrid,
    title: "IDENTITY",
    description: "Stable requirement_id, canonical jurisdiction_id.",
  },
  {
    icon: FileText,
    title: "GOVERNANCE",
    description: "Governed category, applicability scope, current state.",
  },
  {
    icon: Clock,
    title: "EFFECTIVE DATES",
    description: "Effective from/to, immutable version, first affected cycle.",
  },
  {
    icon: FileCheck,
    title: "EVIDENCE",
    description:
      "Source/evidence reference, evidence condition, interpretation owner.",
  },
  {
    icon: CreditCard,
    title: "CONFIGURATION MAPPING",
    description:
      "Links this requirement to the product configuration it governs.",
  },
  {
    icon: CheckCircle,
    title: "VALIDATION & APPROVAL STATE",
    description: "Tracked independently — approval never implies validation.",
  },
  {
    icon: ShieldCheck,
    title: "AUDIT METADATA",
    description: "Full change and access history, immutable and timestamped.",
  },
  {
    icon: Timer,
    title: "NOT SELF-INTERPRETING",
    description:
      "Stores approved configuration/evidence — never derives legal conclusions.",
  },
];

export default function RequirementControlRecordSection() {
  return (
    <section className="relative  w-full min-h-[600px] py-20 px-6 lg:px-16 text-white font-sans antialiased overflow-hidden flex items-center justify-center">
      {/* Background Image Layer with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/payroll-requirements/bg.jpg"
          alt="Office Background"
          className="w-full h-full object-cover"
        />
        {/* Semi-transparent dark blue overlay */}
        <div className="absolute inset-0 bg-[#0A2640]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#041628]/60" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-10 w-full">
        {/* Header Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0A8FD0]">
            <span>/</span>
            <span>Requirement Control Record</span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-white leading-tight">
            The canonical object behind every row in the workspace
          </h2>
        </div>

        {/* 4x2 Glassmorphism Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTROL_RECORD_CARDS.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="bg-[#FFFFFF26] backdrop-blur-md border border-[#E1E8F0] rounded-2xl p-5 space-y-4 hover:bg-white/15 transition-all shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Icon Box */}
                  <div className="w-9 h-9 rounded-xl bg-[#E1EEF9] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#0A8FD0]" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#2BBAFF]">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#C5C5C5] leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
