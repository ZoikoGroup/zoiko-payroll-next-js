"use client";

import React from "react";

// Table Data Array
const WAVE_ROWS = [
  {
    wave: "Wave 1 — DACH",
    jurisdictions: "DE, AT — 2 entities",
    owner: "M. Weber",
    status: "Stabilizing",
    statusClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    wave: "Wave 2 — LATAM",
    jurisdictions: "MX, BR — 4 entities",
    owner: "C. Alvarez",
    status: "Awaiting decision",
    statusClass: "bg-[#FEF7E0] text-[#B06000]",
  },
  {
    wave: "Wave 3 — Nordics / APAC",
    jurisdictions: "SE, NO, DK, SG, JP",
    owner: "A. Lindqvist",
    status: "In progress · blocked",
    statusClass: "bg-[#FCE8E6] text-[#C5221F]",
  },
];

export default function CutoverRecoverySection() {
  return (
    <section className="w-full bg-[#E9F0F8] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Hero Layout: Header Text + Image Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
              <span>/</span>
              <span>Cutover, Rollback, Stabilization + Multi-Market Waves</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1928] leading-tight">
              Safe cutover. Accountable recovery.
            </h2>
            <p className="text-base sm:text-lg text-[#5C6E7E] leading-relaxed max-w-xl">
              Every cutover runbook defines preconditions, ordered actions, stop
              conditions, freeze windows, activation authority and rollback
              criteria in advance.
            </p>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-sm">
            <img
              src="/images/implementation-migration/right.png"
              alt="Safe cutover and accountable recovery"
              className="w-full h-56 sm:h-72 object-cover block"
            />
          </div>
        </div>

        {/* Multi-Market Waves Status Table */}
        <div className="bg-white border border-[#E1E8ED] rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#E1E8ED] bg-[#F8FAFC] text-[11px] font-bold tracking-wider text-[#5C6E7E] uppercase">
                  <th className="py-4 px-6">Wave</th>
                  <th className="py-4 px-6">Jurisdictions / Entities</th>
                  <th className="py-4 px-6">Owner</th>
                  <th className="py-4 px-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E1E8ED]">
                {WAVE_ROWS.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#F8FAFC] transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-[#0A1928]">
                      {row.wave}
                    </td>
                    <td className="py-4 px-6 text-[#5C6E7E]">
                      {row.jurisdictions}
                    </td>
                    <td className="py-4 px-6 text-[#0A1928]">{row.owner}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${row.statusClass}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote Notice */}
        <div className="text-xs sm:text-sm text-[#5C6E7E]">
          Later waves are never auto-approved by earlier wave success &mdash;
          each carries its own scope, owner and readiness state.
        </div>
      </div>
    </section>
  );
}
