"use client";

import React from "react";

interface StepItem {
  number: number;
  title: string;
  description: string;
}

const lifecycleSteps: StepItem[] = [
  {
    number: 1,
    title: "Create",
    description:
      "Bind the artifact to tenant, entity, pay group, period, run ID/version, source service and generation time.",
  },
  {
    number: 2,
    title: "Verify",
    description:
      "Show Draft, Final, Superseded or Pending downstream confirmation based on rules.",
  },
  {
    number: 3,
    title: "Close",
    description:
      "Associate final outputs with the approved/closed payroll version and preserve close linkage.",
  },
  {
    number: 4,
    title: "Retain",
    description:
      "Apply the correct retention class/policy — legal hold overrides routine deletion.",
  },
  {
    number: 5,
    title: "Retrieve",
    description: "Permission-checked search, preview, generation and download.",
  },
  {
    number: 6,
    title: "Correct / Supersede",
    description:
      "Create new traceable versions — history is never silently overwritten.",
  },
];

export default function RecordLifecycleSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 mx-auto">
          {/* Eyebrow Tag */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#3EA3E0] uppercase font-mono">
            <span className="text-[#3EA3E0] font-bold">/</span>
            <span>DIRECT ANSWER</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-tight text-[#07243B]">
            What are payroll records and reports?
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-[17px] text-[#5B646B] font-medium leading-relaxed max-w-3xlmx-auto">
            Controlled documents, datasets and evidence produced or retained
            through payroll processing — including payroll registers,
            gross-to-net results, payslips, liabilities, payment outputs,
            accounting files, approvals and jurisdiction-specific artifacts
            where supported.
          </p>
        </div>

        {/* Section Subheading */}
        <div className="text-center pt-4">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#07243B]">
            Record lifecycle
          </h3>
        </div>

        {/* Lifecycle Steps List */}
        <div className="max-w-2xl mx-auto divide-y divide-slate-100">
          {lifecycleSteps.map((step) => (
            <div
              key={step.number}
              className="py-5 first:pt-0 last:pb-0 flex items-start gap-5"
            >
              {/* Step Number Badge */}
              <div className="w-8 h-8 rounded-full bg-[#0A2E4B] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-2xs">
                {step.number}
              </div>

              {/* Step Info */}
              <div className="space-y-1 pt-0.5">
                <h4 className="text-sm sm:text-base font-bold text-[#07243B]">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
