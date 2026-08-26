"use client";

import React from "react";

const durationPills = [
  "Session",
  "Fixed duration",
  "Criteria-based",
  "Browser-controlled",
];

export default function DurationGovernanceSection() {
  return (
    <section id="duration-governance" className="scroll-mt-8 space-y-6">
      {/* Section Title & Subtitle */}
      <div className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          Duration & change governance
        </h2>
        <p className="text-[14.5px] text-[#5B646B] leading-relaxed">
          Duration is described as session, fixed, criteria-based or
          browser-controlled — only where approved for that technology. Actual
          persistence may vary with browser behavior, renewal, server updates or
          provider configuration, so durations carry qualifiers rather than
          being stated as absolute guarantees.
        </p>
      </div>

      {/* Pill Tags Row */}
      <div className="flex flex-wrap items-center gap-2.5 pt-1">
        {durationPills.map((label, idx) => (
          <span
            key={idx}
            className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-[#0F172A] bg-white border border-slate-200/80 shadow-sm"
          >
            {label}
          </span>
        ))}
      </div>

      {/* Callout Box with Blue Accent Line */}
      <div className="relative bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm overflow-hidden">
        {/* Left Accent Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0284C7]" />

        <p className="text-[13.5px] text-[#0F172A] leading-relaxed pl-2">
          <span className="font-bold">Change governance.</span> Regular runtime
          and tag scans reconcile deployed technology against the public
          registry. Any change to a technology's provider, purpose, category,
          duration or consent behavior triggers a governed review before the
          public inventory updates. A stale inventory is treated as a failed
          legal surface, even if the page itself looks polished.
        </p>
      </div>
    </section>
  );
}
