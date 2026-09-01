"use client";

import React from "react";

interface Stage {
  number: number;
  title: string;
  description: string;
  side: "left" | "right";
  isActive?: boolean;
  highlightCard?: boolean;
}

const stages: Stage[] = [
  {
    number: 1,
    title: "Discovery",
    description: "Systems, populations, time domains, calendars and security.",
    side: "left",
  },
  {
    number: 2,
    title: "Method / access",
    description: "Connection method and access confirmed.",
    side: "right",
  },
  {
    number: 3,
    title: "Mapping",
    description: "Worker identity and time-domain mapping configured.",
    side: "left",
  },
  {
    number: 4,
    title: "State contract",
    description: "Accepted states and classification ownership defined.",
    side: "right",
  },
  {
    number: 5,
    title: "Test",
    description:
      "No-match, duplicate, late, DST, cross-period and reopen cases.",
    side: "left",
  },
  {
    number: 6,
    title: "Reconciliation",
    description: "Expected vs. actual confirmed before activation.",
    side: "right",
  },
  {
    number: 7,
    title: "Activation",
    description: "Production time flow begins under governed controls.",
    side: "left",
    isActive: true,
  },
  {
    number: 8,
    title: "Stabilization",
    description: "Cycles monitored exceptions reviewed.",
    side: "right",
    highlightCard: true,
  },
];

export default function GovernedStagesSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 px-4 sm:px-6 sm:py-20 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>IMPLEMENTATION, SECURITY & CONNECTION HEALTH</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight mx-auto">
            Eight governed stages before production activation
          </h2>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative py-4">
          {/* Vertical Line (Left-aligned on mobile, centered on desktop) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2" />

          <div className="space-y-6 md:space-y-0 relative">
            {stages.map((stage, idx) => {
              const isLeft = stage.side === "left";

              return (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-start md:items-center my-0 md:my-6 pl-12 md:pl-0"
                >
                  {/* Left Column Container */}
                  <div
                    className={`w-full md:w-1/2 md:pr-10 ${
                      isLeft ? "block" : "hidden md:block md:invisible"
                    }`}
                  >
                    <div
                      className={`p-5 sm:p-6 rounded-2xl shadow-xs border transition-all ${
                        stage.highlightCard
                          ? "bg-[#0A8FD0] text-white border-transparent"
                          : "bg-white text-[#0F172A] border-slate-200/60"
                      }`}
                    >
                      <h3 className="text-sm font-bold">{stage.title}</h3>
                      <p
                        className={`text-xs leading-relaxed mt-1.5 sm:mt-2 ${
                          stage.highlightCard
                            ? "text-blue-50"
                            : "text-slate-500"
                        }`}
                      >
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Center/Left Number Badge */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-5 md:top-auto z-10 flex items-center justify-center">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                        stage.isActive
                          ? "bg-[#0F2942] text-white border-[#0F2942]"
                          : "bg-white text-slate-700 border-slate-300"
                      }`}
                    >
                      {stage.number}
                    </div>
                  </div>

                  {/* Right Column Container */}
                  <div
                    className={`w-full md:w-1/2 md:pl-10 ${
                      !isLeft ? "block" : "hidden md:block md:invisible"
                    }`}
                  >
                    <div
                      className={`p-5 sm:p-6 rounded-2xl shadow-xs border transition-all ${
                        stage.highlightCard
                          ? "bg-gradient-to-r from-[#0B4573] to-[#0A8FD0] text-white border-transparent"
                          : "bg-white text-[#0F172A] border-slate-200/60"
                      }`}
                    >
                      <h3 className="text-sm font-bold">{stage.title}</h3>
                      <p
                        className={`text-xs leading-relaxed mt-1.5 sm:mt-2 ${
                          stage.highlightCard
                            ? "text-blue-50"
                            : "text-slate-500"
                        }`}
                      >
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner Callout */}
        <div className="relative border-l-4 border-[#0A8FD0] bg-white rounded-xl p-5 sm:p-8 shadow-xs mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-[#0F172A]">Data minimization.</span>{" "}
            Only approved identifiers and time domains needed for payroll
            purpose are exchanged. Public fit forms never collect credentials,
            tokens, files or production secrets, and location, biometric,
            device, schedule or behavior signals are{" "}
            <span className="underline">never</span> implied without explicit
            evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
