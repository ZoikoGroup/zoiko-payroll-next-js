"use client";

import React from "react";
import Image from "next/image";

const steps = [
  { label: "Identify planned change", active: true },
  { label: "Check eligibility", active: true },
  { label: "Submit objection", active: true },
  { label: "Case ID acknowledged", active: false },
  { label: "Under review", active: false },
  { label: "Outcome & audit", active: false },
] as const;

export default function ObjectionWorkflowSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0A78C3]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A78C3] sm:text-xs">
            CUSTOMER OBJECTION WORKFLOW
          </span>
        </div>
        <h2 className="mt-3.5 max-w-3xl text-center text-2xl font-extrabold tracking-tight text-[#0B192C] sm:text-3xl md:text-[34px]">
          A controlled path, governed by your agreement
        </h2>
        <p className="mt-3 max-w-2xl text-center text-xs leading-relaxed text-[#64748B] sm:text-sm">
          Objection rights, deadlines and remedies resolve from your applicable
          DPA and service agreement — there is no universal objection period.
        </p>

        {/* Step rail */}
        <ol className="mt-10 grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <li key={step.label} className="flex flex-col items-center gap-2">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-extrabold ${
                  step.active
                    ? "bg-[#0A78C3] text-white"
                    : "bg-[#E7EDFD] text-[#0A78C3]"
                }`}
              >
                {index + 1}
              </span>
              <span className="text-center text-xs font-bold text-[#0F172A]">
                {step.label}
              </span>
            </li>
          ))}
        </ol>

        {/* Fields explainer + image */}
        <div className="mt-14 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-xl font-extrabold tracking-tight text-[#0B192C] sm:text-2xl">
              Only the fields the process actually needs
            </h3>
            <p className="text-sm leading-relaxed text-[#64748B] sm:text-base">
              Organization, authorized contact, applicable agreement or service,
              the specific change ID, and your data-protection grounds — nothing
              more.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-[0px_20px_50px_0px_rgba(10,40,65,0.15)]">
            <Image
              src="/images/subprocessors/objection-workflow.png"
              alt="Reviewing a controlled objection submission"
              width={526}
              height={380}
              className="aspect-[4/3] h-auto w-full object-cover"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0px_8px_20px_0px_rgba(10,30,50,0.18)]">
              <span className="h-2 w-2 rounded-full bg-[#2E9E5B]" />
              <span className="text-xs font-bold text-[#0F172A]">
                Case ID issued
              </span>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 w-full max-w-3xl rounded-[6px] border-l-4 border-l-[#0A78C3] bg-[#E7EDFD] p-4 sm:p-5">
          <p className="text-xs leading-relaxed text-[#334155] sm:text-[13px]">
            This page does not promise a specific remedy or automatic suspension
            of a planned change.
          </p>
        </div>
      </div>
    </section>
  );
}
