"use client";

import React from "react";

// Status card items matching the image data exactly
const STATUS_ITEMS = [
  {
    title:
      "Zoiko Ltda. — Blocked: statutory filing pending partner confirmation",
    owner: "M. Alves",
    cutoff: "Aug 25",
    scope: "Legal entity BR-02",
    indicatorColor: "bg-[#DC2626]", // Red indicator bar
  },
  {
    title: "Zoiko GmbH — Needs review: variance above threshold",
    owner: "K. Fischer",
    cutoff: "Aug 23",
    scope: "Payroll group DE-Salaried",
    indicatorColor: "bg-[#D97706]", // Orange/Yellow indicator bar
  },
  {
    title: "Zoiko India Pvt. — Migrating: onboarding wave 4",
    owner: "Payroll Ops APAC",
    cutoff: "—",
    scope: "New entity onboarding",
    indicatorColor: "bg-[#9333EA]", // Purple indicator bar
  },
];

export default function ReadinessAttentionSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>
              READINESS, ATTENTION REASONS &amp; CROSS-ENTITY DEPENDENCIES
            </span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
            One entity can be blocked while others stay ready
          </h2>

          <p className="text-sm sm:text-base text-[#5C6E7E]">
            Never hidden behind a single global score. Every state shows
            what&apos;s affected, owner, cutoff and next action.
          </p>
        </div>

        {/* Featured Image Banner */}
        <div className="rounded-3xl overflow-hidden border border-[#E1E8ED] shadow-sm w-full">
          <img
            src="/images/multi-entity-payroll/describe.png"
            alt="Person pointing at task board on laptop screen"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Stacked Resolution Status Cards */}
        <div className="space-y-4">
          {STATUS_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E1E8ED] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden"
            >
              {/* Vertical Color Indicator Bar */}
              <div className="flex items-start md:items-center gap-4">
                <div
                  className={`w-1.5 h-12 md:h-10 rounded-full shrink-0 ${item.indicatorColor}`}
                />

                {/* Content Block */}
                <div className="space-y-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-[#0A1928] leading-snug">
                    {item.title}
                  </h3>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#5C6E7E]">
                    <span>
                      Owner:{" "}
                      <strong className="font-semibold text-[#0A1928]">
                        {item.owner}
                      </strong>
                    </span>
                    <span>
                      Cutoff:{" "}
                      <strong className="font-semibold text-[#0A1928]">
                        {item.cutoff}
                      </strong>
                    </span>
                    <span>
                      Scope:{" "}
                      <strong className="font-semibold text-[#0A1928]">
                        {item.scope}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pl-5 md:pl-0 shrink-0">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0281D3] hover:underline"
                >
                  Resolution route &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
