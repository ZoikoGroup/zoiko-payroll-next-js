"use client";

import React from "react";

interface QuickstartStep {
  number: number;
  title: string;
  description: string;
}

const steps: QuickstartStep[] = [
  {
    number: 1,
    title: "Choose an approved environment",
    description:
      "Confirm the exact base URL for the environment you're targeting.",
  },
  {
    number: 2,
    title: "Obtain credentials",
    description: "Provision developer credentials through the approved flow.",
  },
  {
    number: 3,
    title: "Select least-privilege scopes",
    description:
      "Request only the operation-specific scopes your integration needs.",
  },
  {
    number: 4,
    title: "Make a safe read-only request",
    description:
      "Confirm connectivity and authentication before attempting writes.",
  },
  {
    number: 5,
    title: "Interpret the response",
    description: "Check status, schema version and documented fields.",
  },
  {
    number: 6,
    title: "Handle errors",
    description: "Route by documented error class and developer action.",
  },
  {
    number: 7,
    title: "Move to mutations and events",
    description:
      "Only after understanding idempotency, versioning and the Webhooks boundary.",
  },
];

export default function QuickstartStepsSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Centered Header Block */}
        <div className="text-center space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>QUICKSTART</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight max-w-2xl mx-auto">
            Seven steps — read-only first, mutations after you understand the
            contract
          </h2>
        </div>

        {/* Vertical Steps List with subtle dividers */}
        <div className="divide-y divide-slate-200/70">
          {steps.map((step) => (
            <div
              key={step.number}
              className="py-6 first:pt-0 last:pb-0 flex items-start gap-5 sm:gap-6"
            >
              {/* Circular Step Badge */}
              <div className="w-8 h-8 rounded-full bg-[#07243B] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-sm">
                {step.number}
              </div>

              {/* Text Block */}
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
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
