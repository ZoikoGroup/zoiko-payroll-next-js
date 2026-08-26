"use client";

import React from "react";

const LEFT_ITEMS = [
  {
    question: "What is implemented?",
    answer:
      "Approved jurisdiction, entity and payroll-group scope, configuration, workflows, roles, integrations, data migration, validation, operating procedures and handoff.",
  },
  {
    question: "What is migrated?",
    answer:
      "Only approved data, history and artifacts needed for the target operating model — according to purpose, retention, access and source-of-record rules.",
  },
  {
    question: "What starts the program?",
    answer:
      "A qualified opportunity or approved initiative, plus a current availability review, sponsor, preliminary scope and discovery authorization.",
  },
  {
    question: "What ends the program?",
    answer:
      "Stabilization exit criteria are met, operational owners accept responsibility, material blockers are resolved or accepted, evidence is sufficiently complete, and recurring governance is established.",
  },
];

const HUMAN_TASKS = [
  "Scope acceptance",
  "Local interpretation",
  "Risk and exception acceptance",
  "Tolerance decisions",
  "GO / HOLD / ROLLBACK",
  "Communications and operational ownership",
];

export default function OperatingModelSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>What Implementation & Migration Means</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1928] leading-tight">
            The operating model, before any conversion happens
          </h2>
        </div>

        {/* Main Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-sm border border-[#E1E8ED] bg-white">
          {/* Left Column (Light Background) */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-8 bg-[#F6F7F8]">
            {LEFT_ITEMS.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <span className="w-2 h-2 rounded-full bg-[#0A8FD0] mt-2 shrink-0" />
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#0A2E4B]">
                    {item.question}
                  </h3>
                  <p className="text-sm text-[#5B646B] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Dark Background) */}
          <div className="lg:col-span-6 p-8 sm:p-12 bg-[#0A2E4B] text-white flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">
                What remains human
              </h3>

              {/* List with Dividers */}
              <div className="divide-y divide-white/10 border-t border-b border-white/10">
                {HUMAN_TASKS.map((task, index) => (
                  <div key={index} className="py-3 text-sm text-[#B9CDDD]">
                    {task}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Disclaimer Box */}
            <div className="p-4 rounded-xl border border-[#F0B49640] bg-[#F0B49617] text-xs text-[#F0CBB8] leading-relaxed">
              <strong className="font-semibold">
                We do not promise:
              </strong>{" "}
              a universal timeline, zero disruption, automatic legal compliance,
              every-market support, perfect source data, or one migration
              pattern for every customer.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
