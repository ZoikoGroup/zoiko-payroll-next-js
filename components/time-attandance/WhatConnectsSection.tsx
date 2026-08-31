"use client";

import React from "react";
import Image from "next/image";

interface DomainRow {
  domain: string;
  coverage: string;
  minSourceState: string;
  direction: string;
  classificationOwner: string;
}

const tableData: DomainRow[] = [
  {
    domain: "Worker / assignment identifiers",
    coverage: "Supported",
    minSourceState: "Approved",
    direction: "Inbound",
    classificationOwner: "Source",
  },
  {
    domain: "Approved timecards / hours",
    coverage: "Supported",
    minSourceState: "Approved",
    direction: "Inbound",
    classificationOwner: "Hybrid",
  },
  {
    domain: "Punches (where supported)",
    coverage: "Validation required",
    minSourceState: "Raw",
    direction: "Inbound",
    classificationOwner: "Source",
  },
  {
    domain: "Regular / premium categories",
    coverage: "Supported",
    minSourceState: "Validated",
    direction: "Inbound",
    classificationOwner: "Validation required",
  },
  {
    domain: "Leave / absence",
    coverage: "Partial",
    minSourceState: "Approved",
    direction: "Inbound",
    classificationOwner: "Source",
  },
  {
    domain: "Shift context",
    coverage: "Supported",
    minSourceState: "Approved",
    direction: "Inbound",
    classificationOwner: "Source",
  },
  {
    domain: "Labor allocation",
    coverage: "Validation required",
    minSourceState: "Validated",
    direction: "Inbound",
    classificationOwner: "Hybrid",
  },
  {
    domain: "Approval metadata",
    coverage: "Supported",
    minSourceState: "Approved",
    direction: "Inbound",
    classificationOwner: "Source",
  },
];

export default function WhatConnectsSection() {
  return (
    <section className="w-full bg-[#F4F8FC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label: #0A8FD0 */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>WHAT CONNECTS</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight leading-snug text-[#0F172A]">
              Approved timecards are not equivalent to raw punches.
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
              Each domain below exposes its own coverage, minimum required
              source state, direction and classification owner — never a single
              blanket "we support time tracking" claim.
            </p>

            {/* Callout Box with Left Blue Line Accent */}
            <div className="relative border-l-4 border-[#0A8FD0] bg-white rounded-xl p-6 shadow-xs">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-bold text-[#0F172A]">Zoiko Payroll</span>{" "}
                does not claim to calculate overtime, premiums, breaks, rest or
                statutory time rules from source feeds unless approved evidence
                supports it for your configuration.
              </p>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl border border-slate-200/50">
              <Image
                src="/images/footer-integrations/16.png"
                alt="Team analyzing Zoiko Payroll time tracking software on laptop screen"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Data Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#E9F0F8] text-[#0A3254] font-bold text-[10px] uppercase tracking-wider border-b border-slate-200/60">
                  <th className="py-3.5 px-6">DOMAIN</th>
                  <th className="py-3.5 px-6">COVERAGE</th>
                  <th className="py-3.5 px-6">MIN. SOURCE STATE</th>
                  <th className="py-3.5 px-6">DIRECTION</th>
                  <th className="py-3.5 px-6">CLASSIFICATION OWNER</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#0F172A]">
                {tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-[#0F172A]">
                      {row.domain}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.coverage}</td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.minSourceState}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.direction}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.classificationOwner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
