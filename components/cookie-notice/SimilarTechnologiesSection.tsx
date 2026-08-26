"use client";

import React from "react";

interface ContextCard {
  title: string;
  description: string;
}

const contextCards: ContextCard[] = [
  {
    title: "First-party",
    description:
      "Set directly by Zoiko Payroll domains — describes technical origin, not legal role.",
  },
  {
    title: "Third-party",
    description:
      "Set by an approved external provider. Not automatically a subprocessor, partner, advertiser or independent controller.",
  },
];

export default function SimilarTechnologiesSection() {
  return (
    <section id="similar-technologies" className="scroll-mt-8 space-y-6">
      {/* Title & Header Description */}
      <div className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          Similar technologies & provider context
        </h2>
        <p className="text-[14.5px] text-[#5B646B] leading-relaxed">
          Local/session storage, pixels or beacons, embeds, and browser APIs
          appear here only when actually used and approved within scope — this
          notice is not an inventory of every script that could theoretically
          run.
        </p>
      </div>

      {/* 2-Column Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contextCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#F0F6FA]/80 border border-slate-200/60 rounded-2xl p-6 space-y-2"
          >
            <h3 className="text-sm font-bold text-[#0F172A]">{card.title}</h3>
            <p className="text-[13px] text-[#5B646B] leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <p className="text-[12px] text-[#94A3B8] leading-normal pt-1">
        A provider change triggers review of purpose, category, duration,
        consent behavior and the public inventory before publication.
      </p>
    </section>
  );
}
