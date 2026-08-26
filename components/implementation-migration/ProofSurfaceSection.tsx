"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

// Top Key Metrics Data
const STATS = [
  { value: "18", label: "Programs", color: "text-[#0A1928]" },
  { value: "5", label: "Waves", color: "text-[#0A1928]" },
  { value: "7", label: "Gates due", color: "text-[#0281D3]" },
  { value: "3", label: "Blocked scopes", color: "text-[#D93838]" },
  { value: "4", label: "Migration issues", color: "text-[#D93838]" },
  { value: "2", label: "Validation failures", color: "text-[#D93838]" },
  { value: "6", label: "Awaiting decision", color: "text-[#5C6E7E]" },
  { value: "2", label: "Stabilizing", color: "text-[#28A745]" },
];

// Dropdown Filters List
const FILTERS = [
  "Phase",
  "Wave",
  "Jurisdiction",
  "Entity",
  "Payroll group",
  "Owner",
  "Readiness state",
  "Blocker type",
];

// Table Rows Data
const PROGRAM_ROWS = [
  {
    program: "PRG-1042",
    wave: "Nordics · W3",
    jurisdictions: "SE, NO, DK — 3 entities",
    targetWindow: "Q1 2027",
    phase: "Parallel Run",
    readiness: "Ready",
    readinessClass: "bg-[#E6F4EA] text-[#137333]",
    owner: "A. Lindqvist",
    nextGate: "Parallel Run sign-off",
  },
  {
    program: "PRG-1039",
    wave: "APAC · W3",
    jurisdictions: "SG, JP — 2 entities",
    targetWindow: "Q1 2027",
    phase: "Prepare / Migrate",
    readiness: "Blocked",
    readinessClass: "bg-[#FCE8E6] text-[#C5221F]",
    owner: "R. Tanaka",
    nextGate: "Migration gate",
  },
  {
    program: "PRG-1031",
    wave: "LATAM · W2",
    jurisdictions: "MX, BR — 4 entities",
    targetWindow: "Q4 2026",
    phase: "Launch",
    readiness: "Awaiting decision",
    readinessClass: "bg-[#FEF7E0] text-[#B06000]",
    owner: "C. Alvarez",
    nextGate: "Launch decision",
  },
  {
    program: "PRG-1022",
    wave: "DACH · W1",
    jurisdictions: "DE, AT — 2 entities",
    targetWindow: "Live",
    phase: "Stabilize / Optimize",
    readiness: "Stabilizing",
    readinessClass: "bg-[#E6F4EA] text-[#137333]",
    owner: "M. Weber",
    nextGate: "First-cycle review",
  },
];

export default function ProofSurfaceSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>Implementation Control Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1928] leading-tight">
            The primary proof surface for every program
          </h2>
          <p className="text-base text-[#5C6E7E] max-w-155">
            Real operational visibility &mdash; not a decorative screenshot.
            Status is always shown as text and icon, never hidden behind a
            score.
          </p>
        </div>

        {/* 8 Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="bg-[#F6F7F8] border border-[#E1E8F0] rounded-2xl p-5 shadow-sm space-y-1"
            >
              <div className={`text-3xl sm:text-4xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#5C6E7E]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {FILTERS.map((filter, index) => (
            <button
              key={index}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6F7F8] border border-[#E1E8F0] text-xs font-semibold text-[#0A1928] hover:border-[#0281D3] transition-colors shadow-sm"
            >
              <span>{filter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#5C6E7E]" />
            </button>
          ))}
        </div>

        {/* Program Data Table */}
        <div className="bg-white border border-[#E1E8ED] rounded-2xl overflow-x-auto shadow-sm">
          <table className="w-full text-left text-[11px] border-collapse">
            <thead>
              <tr className="border-b border-[#E1E8ED] bg-[#E9F0F8] text-[11.5px] font-bold tracking-wider text-[#5C6E7E] uppercase">
                <th className="py-4 px-5">Program</th>
                <th className="py-4 px-5">Wave</th>
                <th className="py-4 px-5">Jurisdictions / Entities</th>
                <th className="py-4 px-5">Target Window</th>
                <th className="py-4 px-5">Phase</th>
                <th className="py-4 px-5">Readiness</th>
                <th className="py-4 px-5">Owner</th>
                <th className="py-4 px-5">Next Gate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E1E8ED]">
              {PROGRAM_ROWS.map((row, index) => (
                <tr
                  key={index}
                  className="bg-[#F6F7F8] border border-[#E1E8F0] transition-colors"
                >
                  <td className="py-4 px-5 font-bold text-[#0A2E4B]">
                    {row.program}
                  </td>
                  <td className="py-4 px-5 text-[#0A1928] font-medium">
                    {row.wave}
                  </td>
                  <td className="py-4 px-5 text-[#5C6E7E]">
                    {row.jurisdictions}
                  </td>
                  <td className="py-4 px-5 text-[#0A1928] font-medium">
                    {row.targetWindow}
                  </td>
                  <td className="py-4 px-5 text-[#5C6E7E]">{row.phase}</td>
                  <td className="py-4 px-5">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${row.readinessClass}`}
                    >
                      {row.readiness}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-[#0A1928]">{row.owner}</td>
                  <td className="py-4 px-5 text-[#5C6E7E]">{row.nextGate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Drawer Note */}
        <div className="p-4 rounded-xl border border-[#0281D3]/20 bg-[#E8F4FC] text-xs sm:text-sm text-[#0A1928] leading-relaxed">
          <strong className="font-bold">Detail drawer (per program):</strong>{" "}
          scope manifest, workstreams, migration packages, validation,
          variances, gate evidence, decisions, cutover, stabilization and full
          history. Bulk actions are limited to low-risk coordination &mdash;
          bulk GO, approval, migration acceptance or rollback are never
          available.
        </div>
      </div>
    </section>
  );
}
