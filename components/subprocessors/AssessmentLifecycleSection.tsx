"use client";

import React from "react";
import Image from "next/image";

const steps = [
  "Need & role classification",
  "Privacy / data-flow review",
  "Security review",
  "Contracting",
  "Residency / transfer validation",
  "Publication & notice",
  "Ongoing monitoring",
  "Exit / replacement",
] as const;

export default function AssessmentLifecycleSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: image with floating badge */}
          <div className="relative overflow-hidden rounded-2xl shadow-[0px_20px_50px_0px_rgba(10,40,65,0.15)]">
            <Image
              src="/images/subprocessors/assessment-record.png"
              alt="Reviewing a subprocessor assessment record"
              width={526}
              height={380}
              className="aspect-[4/3] h-auto w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0px_8px_20px_0px_rgba(10,30,50,0.18)]">
              <span className="h-2 w-2 rounded-full bg-[#0A78C3]" />
              <span className="text-xs font-bold text-[#0F172A]">
                Gate-controlled
              </span>
            </div>
          </div>

          {/* Right: copy */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-4 bg-[#0A78C3]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A78C3] sm:text-xs">
                HOW ZOIKO ASSESSES SUBPROCESSORS
              </span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0B192C] sm:text-3xl md:text-[34px]">
              A governed lifecycle, from need to exit
            </h2>
            <p className="text-sm leading-relaxed text-[#64748B] sm:text-base">
              Public-safe process only — internal risk scores, findings and
              private evidence are never exposed. Nothing activates before
              applicable approval and notice gates clear.
            </p>
          </div>
        </div>

        {/* Lifecycle steps */}
        <ol className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {steps.map((step, index) => (
            <li
              key={step}
              className={`flex flex-col items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-5 text-center ${
                index >= 6 ? "xl:col-span-3" : ""
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E7EDFD] text-xs font-extrabold text-[#0A78C3]">
                {index + 1}
              </span>
              <span className="text-sm font-bold text-[#0F172A]">{step}</span>
            </li>
          ))}
        </ol>

        {/* Note */}
        <div className="mt-12 w-full max-w-3xl rounded-[6px] border-l-4 border-l-[#0A78C3] bg-[#E7EDFD] p-4 sm:p-5">
          <p className="text-xs leading-relaxed text-[#334155] sm:text-[13px]">
            Stale evidence never remains presented as current by default.
          </p>
        </div>
      </div>
    </section>
  );
}
