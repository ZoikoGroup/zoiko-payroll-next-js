"use client";

import React from "react";
import { ClipboardCheck, Database, Columns, Rocket } from "lucide-react";

const FEATURES = [
  {
    icon: ClipboardCheck,
    title: "Scope manifest",
    description:
      "Canonical jurisdiction, entity and payroll-group boundaries — versioned on every change.",
    isHighlighted: false,
  },
  {
    icon: Database,
    title: "Migration lineage",
    description:
      "Source snapshot to reconciliation, fully traceable with versioned mappings.",
    isHighlighted: true,
  },
  {
    icon: Columns,
    title: "Parallel-run variance",
    description:
      "Source vs. target comparison against approved tolerances — never a hidden score.",
    isHighlighted: false,
  },
  {
    icon: Rocket,
    title: "Launch governance",
    description:
      "GO / HOLD / PARTIAL GO / ROLLBACK — every decision signed and attributable.",
    isHighlighted: false,
  },
];

export default function ControlCenterSection() {
  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>One program. Full control.</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
            Every gate, evidence and decision &mdash; in one place
          </h2>

          {/* Description */}
          <p className="text-[17px] text-[#5C6E7E] leading-relaxed">
            The Implementation Control Center replaces spreadsheets and
            side-channel approvals with one governed operating surface for every
            market wave.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] text-white font-semibold text-sm shadow-sm transition-opacity hover:opacity-90"
            >
              Explore the control center
            </a>
          </div>
        </div>

        {/* Right 2x2 Feature Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 shadow-sm flex flex-col justify-between border ${
                  feature.isHighlighted
                    ? "bg-[#0A2E4B] border-[#0A2E4B] text-white"
                    : "bg-white border-[#E1E8ED] text-[#0A1928]"
                }`}
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                      feature.isHighlighted
                        ? "bg-[#8FD0F2]/20 text-[#8FD0F2]"
                        : "bg-[#E8F4FC] text-[#0281D3]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      feature.isHighlighted ? "text-white" : "text-[#0A1928]"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      feature.isHighlighted
                        ? "text-[#B9CDDD]"
                        : "text-[#5C6E7E]"
                    }`}
                  >
                    {feature.description}
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
