"use client";

import React from "react";

const supportOptions = [
  {
    number: "1",
    title: "Sign in",
    description:
      "For admins and users who can access their Zoiko Payroll account and in-product support.",
    button: "Sign in",
  },
  {
    number: "2",
    title: "Help Center",
    description:
      "Documented questions, setup guidance, troubleshooting and support entry points.",
    button: "Help Center",
  },
  {
    number: "3",
    title: "System status",
    description:
      "Check for outages, degraded service or ongoing incidents.",
    button: "Status",
  },
  {
    number: "4",
    title: "Public support intake",
    description:
      "For eligible issues where unauthenticated intake is supported.",
    button: "Go to support options",
  },
  {
    number: "5",
    title: "Employer / admin guidance",
    description:
      "If your payroll relationship is managed by your employer or payroll administrator, contact them directly first.",
    button: "Learn more",
  },
];

export default function SupportPanel() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1116px] flex-col items-center gap-7">
        {/* Header */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-3.5">
          {/* Label */}
          <div className="flex h-14 w-full items-center justify-center gap-1.5">
            <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />

            <span className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
              Support
            </span>
          </div>

          {/* Title */}
          <div className="flex w-full flex-col items-center">
            <h2 className="m-0 text-center font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
              Get product or account help.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[600px]">
            <p className="m-0 text-center font-['Inter'] text-sm font-normal leading-6 text-[#4f687a] sm:text-base sm:leading-7">
              The fastest path depends on what you already have access to —
              check these first.
            </p>
          </div>
        </div>

        {/* Support Options */}
        <div className="flex w-full max-w-[640px] flex-col gap-2.5">
          {supportOptions.map((option) => (
            <div
              key={option.number}
              className="flex w-full items-center gap-4 rounded-xl border border-[#dfe5e9] bg-white px-4 py-4"
            >
              {/* Number */}
              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#103653]">
                <span className="font-['Inter'] text-xs font-extrabold leading-4 text-white">
                  {option.number}
                </span>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3 className="m-0 font-['Inter'] text-xs font-bold leading-5 text-[#103653]">
                  {option.title}
                </h3>

                <p className="m-0 font-['Inter'] text-xs font-normal leading-5 text-[#7c96aa]">
                  {option.description}
                </p>
              </div>

              {/* Button */}
              <button
                type="button"
                className="shrink-0 rounded-lg border border-[#dfe5e9] bg-white px-5 py-2.5 font-['Inter'] text-sm font-bold leading-6 text-[#103653] transition-colors hover:bg-[#f5f8fa]"
              >
                {option.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}