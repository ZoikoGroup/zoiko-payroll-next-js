"use client";

import React from "react";

// Statistics data for the grid
const STATS = [
  {
    label: "FOUNDED",
    value: "2019",
  },
  {
    label: "TEAM MEMBERS",
    value: "340+",
  },
  {
    label: "JURISDICTIONS SUPPORTED",
    value: "15",
  },
  {
    label: "PAYROLL PROCESSED / YR",
    value: "$1.2B",
  },
];

export default function RigorPayrollSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Heading */}
          <div>
            <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight max-w-md">
              Rigor isn&apos;t a buzzword <br /> when it&apos;s payroll.
            </h2>
          </div>

          {/* Right Column: Paragraph + CTA */}
          <div className="space-y-6">
            <p className="text-sm sm:text-base text-[#5C6E7E] leading-relaxed max-w-lg">
              Payroll touches every employee, every pay cycle, in every
              jurisdiction we support. That&apos;s why we build with structured
              approvals, clear audit trails and local precision &mdash; not
              shortcuts. Come help us build it right.
            </p>

            <div>
              <button className="px-6 py-2.5 rounded-xl border border-[#E1E8ED] bg-white text-[#0A1928] hover:bg-[#F8FAFC] font-semibold text-xs sm:text-sm transition-all shadow-2xs active:scale-95">
                About us
              </button>
            </div>
          </div>
        </div>

        {/* Hero & Stats Grid Card */}
        <div className="rounded-3xl overflow-hidden border border-[#E1E8ED] shadow-sm bg-[#F4F8FB] grid grid-cols-1 lg:grid-cols-12">
          {/* Left Side: Office Image (7 Cols on desktop) */}
          <div className="relative min-h-[300px] lg:min-h-[380px] lg:col-span-6">
            <img
              src="/images/careers/rigor.png"
              alt="Team members reviewing work in an office setting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: 2x2 Stats Grid (5 Cols on desktop) */}
          <div className="lg:col-span-6 grid grid-cols-2 divide-x divide-y divide-[#E1E8ED] border-t lg:border-t-0 border-[#E1E8ED] bg-[#F4F8FB]">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 flex flex-col justify-center space-y-2 bg-[#F4F8FB]"
              >
                <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-[#5C6E7E]">
                  {stat.label}
                </span>
                <span className="text-3xl font-bold text-[#0A1928] tracking-tight">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
