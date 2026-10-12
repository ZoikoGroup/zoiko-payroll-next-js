"use client";

import React from "react";
import { LayoutGrid, CreditCard, Edit3 } from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: <LayoutGrid className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Resource tree",
    description:
      "Search and version selector alongside the full resource/operation/schema tree.",
  },
  {
    icon: <CreditCard className="w-5 h-5 text-[#0A8FD0]" />,
    title: "Operation detail",
    description:
      "Center panel with parameters, request/response schema and examples.",
  },
  {
    icon: <Edit3 className="w-5 h-5 text-[#0A8FD0]" />,
    title: "On-page rail",
    description:
      "Anchors, version, source and support links — every entry has a stable deep link.",
  },
];

export default function ApiReferenceBrowserSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Centered Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>API REFERENCE BROWSER</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
            Rendered from the contract registry — never hand-maintained
            marketing copy
          </h2>
        </div>

        {/* 3-Column Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-3.5 px-4"
            >
              {/* Circular Icon Container */}
              <div className="w-12 h-12 rounded-full bg-[#E6F3FA] flex items-center justify-center shrink-0 shadow-xs">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#0F172A]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
