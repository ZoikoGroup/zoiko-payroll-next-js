"use client";

import React from "react";

interface AccessBadge {
  label: string;
  dotColor: string;
  badgeStyle: string;
}

const accessBadges: AccessBadge[] = [
  {
    label: "Public",
    dotColor: "bg-[#20502F]",
    badgeStyle: "bg-[#E3F0E7] text-[#20502F] border border-[#20502F]/20",
  },
  {
    label: "Verified prospect",
    dotColor: "bg-sky-600",
    badgeStyle: "bg-sky-100/70 text-sky-800 border border-sky-200/60",
  },
  {
    label: "NDA-restricted",
    dotColor: "bg-[#6B5A20]",
    badgeStyle: "bg-[#F1EAD8] text-[#6B5A20] border border-[#6B5A20]/20",
  },
  {
    label: "Customer-only",
    dotColor: "bg-purple-600",
    badgeStyle: "bg-purple-100/70 text-purple-900 border border-purple-200/60",
  },
  {
    label: "Internal-only (never public)",
    dotColor: "bg-[#D57A1F]",
    badgeStyle: "bg-[#E9D9C9] text-[#D57A1F] border border-[#D57A1F]/20",
  },
];

export default function AccessClassificationSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 text-[#07243B]">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Left Block: Eyebrow, Title, Badges */}
          <div className="space-y-6">
            {/* Eyebrow Label with slanted dark slash */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                ACCESS CLASSIFICATION
              </span>
            </div>

            {/* Title (31px) */}
            <h2 className="text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              Least disclosure, made explicit.
            </h2>

            {/* Badges Container */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {accessBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold ${badge.badgeStyle}`}
                >
                  <span className={`w-2 h-2 rounded-full ${badge.dotColor}`} />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Subtext */}
          <div className="max-w-xs lg:text-right pb-1">
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              The page reveals that evidence exists and how to obtain it —
              without exposing sensitive content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
