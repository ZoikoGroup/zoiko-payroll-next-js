"use client";

import React from "react";

interface EntityCard {
  name: string;
  jurisdiction: string;
  payGroups: string;
  funding: string;
  nextCutoff: string;
  status: "On track" | "Action required";
}

const entityData: EntityCard[] = [
  {
    name: "Example Holdings UK Ltd",
    jurisdiction: "United Kingdom",
    payGroups: "2",
    funding: "Ready",
    nextCutoff: "Sep 5",
    status: "On track",
  },
  {
    name: "Example Holdings US Inc",
    jurisdiction: "United States",
    payGroups: "3",
    funding: "Due",
    nextCutoff: "Sep 3",
    status: "Action required",
  },
  {
    name: "Example Holdings GmbH",
    jurisdiction: "Germany",
    payGroups: "1",
    funding: "Ready",
    nextCutoff: "Sep 8",
    status: "On track",
  },
  {
    name: "Example Holdings Pte Ltd",
    jurisdiction: "Singapore",
    payGroups: "1",
    funding: "Approval due",
    nextCutoff: "Sep 6",
    status: "Action required",
  },
];

export default function MultiEntityPayrollSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1A83C8] uppercase font-mono">
              <span className="text-[#1A83C8] font-bold">|</span>
              <span>MULTI-ENTITY PAYROLL</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#07243B] leading-[1.15]">
              Control payroll across every legal entity without losing the group
              view
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Coordinate payroll calendars, rules, approvals, funding, records
              and reporting across subsidiaries and employing entities — while
              preserving the boundaries each one is legally required to keep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1A83C8] to-[#093C73]  hover:bg-[#093C63] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer">
                Book a demo
              </button>
              <button className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#07243B] text-xs sm:text-sm font-semibold border border-slate-300 transition-colors cursor-pointer">
                See how multi-entity payroll works
              </button>
            </div>

            {/* Footer Note */}
            <p className="text-[11px] text-slate-400 font-normal max-w-lg">
              Capabilities and service availability vary by jurisdiction, entity
              configuration and delivery model.
            </p>
          </div>

          {/* Right Column: Multi-Entity Control UI Container */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[540px] bg-[#0A2337] rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
              {/* Top Banner: Oversight Layer */}
              <div className="bg-gradient-to-r from-[#1A83C8] to-[#093C73] rounded-xl p-4 text-center shadow-sm space-y-1">
                <h3 className="text-sm font-bold text-white tracking-wide">
                  Zoiko Group — Oversight Layer
                </h3>
                <p className="text-[11px] text-slate-300 font-normal">
                  Consolidated visibility, not shared liability
                </p>
              </div>

              {/* Connecting Line (Visual Divider) */}
              <div className="w-px h-4 bg-slate-700/60 mx-auto -my-2" />

              {/* 2x2 Grid of Entity Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {entityData.map((entity, idx) => (
                  <div
                    key={idx}
                    className="bg-[#123149]/70 rounded-2xl p-4 border border-slate-700/60 shadow-xs space-y-3 flex flex-col justify-between"
                  >
                    <div>
                      {/* Entity Title */}
                      <h4 className="text-xs font-bold text-white leading-snug mb-3">
                        {entity.name}
                      </h4>

                      {/* Details Table List */}
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Jurisdiction</span>
                          <span className="font-semibold text-slate-200">
                            {entity.jurisdiction}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Pay groups</span>
                          <span className="font-semibold text-slate-200">
                            {entity.payGroups}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Funding</span>
                          <span className="font-semibold text-slate-200">
                            {entity.funding}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Next cutoff</span>
                          <span className="font-semibold text-slate-200">
                            {entity.nextCutoff}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Status Pill Badge */}
                    <div className="pt-2">
                      {entity.status === "On track" ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/15 text-[#34D399] font-medium text-[10px] border border-[#10B981]/30">
                          On track
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F59E0B]/15 text-[#FBBF24] font-medium text-[10px] border border-[#F59E0B]/30">
                          Action required
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
