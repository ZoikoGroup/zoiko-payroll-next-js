"use client";

import React from "react";

export default function PopularRightNow() {
  const topics = [
    "Reset your password",
    "Understand approval stages",
    "Add a recurring deduction",
    "Read your payslip",
    "Connect a time system",
    "Export a payroll report",
  ];

  return (
    <section className="w-full bg-[#E9F0F8] px-6 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-6 lg:px-24">

        {/* Heading */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4">
          {/* Label */}
          <div className="flex items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0A8FD0]" />
            </div>

            <span className="font-['Inter'] text-center text-xs font-bold uppercase leading-5 tracking-wider text-[#0A8FD0]">
              Popular right now
            </span>
          </div>

          {/* Title */}
          <div className="w-full pb-[0.58px]">
            <h2 className="text-center font-['Inter'] text-2xl font-extrabold leading-9 text-[#0D3554] sm:text-3xl sm:leading-10">
              Editorially curated — never fabricated
              <br className="hidden sm:block" />
              popularity.
            </h2>
          </div>
        </div>

        {/* Topics */}
        <div className="flex w-full flex-wrap items-center justify-center gap-2.5">
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              className="flex h-10 items-center rounded-[20px] border border-[#DCE4EC] bg-white px-4 py-2 transition-colors duration-200 hover:border-[#0A8FD0] hover:bg-[#F7FAFC]"
            >
              <span className="whitespace-nowrap font-['Inter'] text-xs font-semibold leading-5 text-[#174B6B]">
                {topic}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}