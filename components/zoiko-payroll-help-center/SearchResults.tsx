"use client";

import React from "react";

const results = [
  {
    type: "Help Center",
    typeClass: "bg-[#e8edf1] text-[#35627f]",
    title: "How do I reset my Zoiko Payroll password?",
    description:
      "Use the password reset link on the sign-in page. If you don't receive an email, check your spam folder or contact your administrator.",
    meta: "Reviewed Aug 2026",
  },
  {
    type: "Product Documentation",
    typeClass: "bg-[#e4f1e8] text-[#247548]",
    title: "Approval stage configuration reference",
    description:
      "Technical reference for configuring approval stages and decision rights in Payroll Workspace.",
    meta: "Product Documentation · v3.2",
  },
  {
    type: "System Status",
    typeClass: "bg-[#fff0df] text-[#c46b20]",
    title: "Current service status: Banking Provider Connection",
    description:
      "Check current operational status for this dependency before troubleshooting related issues.",
    meta: "Live status",
  },
  {
    type: "Release Notes",
    typeClass: "bg-[#eef1f3] text-[#315b77]",
    title:
      "September 2026 release — Deductions and Adjustments updates",
    description:
      "Summary of recent changes to the corrective-change workflow.",
    meta: "Published Sep 2026",
  },
];

export default function SearchResults() {
  return (
    <section className="w-full bg-[#eef3f7] px-4 py-14 sm:px-6 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-4 lg:px-24">
        {/* Heading */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4">
          {/* Label */}
          <div className="flex items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />
            </div>

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
              Search results
            </div>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="m-0 text-center font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
              Every result labels its source type — never
              <br className="hidden sm:block" />
              blended.
            </h2>
          </div>
        </div>

        {/* Results */}
        <div className="flex w-full max-w-[720px] flex-col gap-3 pt-3">
          {results.map((result) => (
            <div
              key={result.title}
              className="flex w-full flex-col items-start gap-1.5 rounded-xl border border-[#d9e1e7] bg-white px-4 pb-4 pt-5"
            >
              {/* Source type */}
              <div
                className={`inline-flex items-start rounded-[5px] px-2 py-[3px] ${result.typeClass}`}
              >
                <span className="font-['Inter'] text-[10px] font-extrabold uppercase leading-4 tracking-tight">
                  {result.type}
                </span>
              </div>

              {/* Title */}
              <div className="flex w-full flex-col items-start pt-0.5">
                <h3 className="m-0 w-full font-['Inter'] text-sm font-bold leading-6 text-[#103653]">
                  {result.title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex w-full flex-col items-start">
                <p className="m-0 w-full font-['Inter'] text-xs font-normal leading-5 text-[#636f78]">
                  {result.description}
                </p>
              </div>

              {/* Meta */}
              <div className="flex w-full flex-col items-start pb-[0.8px] pt-px">
                <span className="font-['Inter'] text-xs font-normal leading-4 text-[#8b9ba8]">
                  {result.meta}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="flex w-full flex-col items-center">
          <p className="m-0 text-center font-['Inter'] text-[10px] font-normal leading-5 text-[#8b9ba8] sm:text-xs">
            Illustrative example results for this design template.
          </p>
        </div>
      </div>
    </section>
  );
}