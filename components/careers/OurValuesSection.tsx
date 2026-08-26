"use client";

import React from "react";
import { CheckCircle2, MapPin, Clock, Lock } from "lucide-react";

// Values card data matching the provided image
const VALUES = [
  {
    icon: CheckCircle2,
    title: "Evidence over promises",
    description:
      "We back what we say with records, not reassurance. If it isn't verifiable, we don't ship it.",
  },
  {
    icon: MapPin,
    title: "Local precision, global consistency",
    description:
      "One operating model, honoring every jurisdiction's own rules. Neither gets compromised for the other.",
  },
  {
    icon: Clock,
    title: "We own the outcome",
    description:
      "Clear ownership at every stage of every workflow. No hand-waving when something needs fixing.",
  },
  {
    icon: Lock,
    title: "Data deserves protection",
    description:
      "Payroll data is sensitive by default. We treat access and retention as a design constraint, not an afterthought.",
  },
];

export default function OurValuesSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1928]">
          Our values
        </h2>

        {/* 4 Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E1E8ED] rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-start"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-[#0281D3] text-white flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 stroke-[2.25]" />
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-[#0A1928] leading-snug">
                  {val.title}
                </h3>

                {/* Card Description */}
                <p className="text-[13px] text-[#5C6E7E] leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
