"use client";

import React from "react";
import Image from "next/image";

interface StatusPill {
  label: string;
}

const workerMatchStatusPills: StatusPill[] = [
  { label: "Matched" },
  { label: "No match" },
  { label: "Multiple matches" },
  { label: "Assignment mismatch" },
];

export default function WorkerMatchingSection() {
  return (
    <section className="w-full bg-[#E9F0F8] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>WORKER MATCHING & CLASSIFICATION OWNERSHIP</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight">
              No match or multiple matches always block for review
            </h2>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-[17px] text-[#5B646B] leading-relaxed max-w-130">
              A durable source worker ID maps to payroll identity, and time maps
              to the correct employment or assignment. Zoiko Payroll never
              silently creates or applies an identity. Rehires, cross-entity
              workers and changed source IDs require governed identity
              relationships and mapping lineage.
            </p>

            {/* Status Pills Row */}
            <div className="flex flex-wrap max-w-120 items-center gap-2.5 pt-2">
              {workerMatchStatusPills.map((pill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-4 py-1.5 bg-white text-slate-700 text-xs font-semibold rounded-full border border-slate-200/80 shadow-2xs"
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/footer-integrations/18.png"
                alt="Professional reviewing documents with graphs and laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Banner Callout with Blue Left Accent Line */}
        <div className="relative border-l-4 border-[#0A8FD0] bg-white rounded-xl p-6 sm:p-8 shadow-xs">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-[#0F172A]">
              Classification ownership is explicit per domain:
            </span>{" "}
            source, Zoiko Payroll, hybrid, or validation-required. Break/rest,
            overtime/premium, leave, shift differential and labor allocation are
            evidence-backed ownership questions — pay-code mappings are audited
            and versioned, and final payroll calculation happens outside this
            integration layer.
          </p>
        </div>
      </div>
    </section>
  );
}
