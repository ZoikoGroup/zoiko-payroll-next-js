"use client";

import React, { useState } from "react";

export default function PayrollAssuranceTableSection() {
  const [activePill, setActivePill] = useState(0);

  const pills = ["Financial controls", "Auditability", "Provider-specific"];

  const tableData = [
    {
      dimension: "Legal entity",
      applies: "Where in scope",
      persists: "Yes",
    },
    {
      dimension: "Product / service",
      applies: "Where in scope",
      persists: "Yes",
    },
    {
      dimension: "Environment",
      applies: "Production / non-production",
      persists: "Yes",
    },
    {
      dimension: "Region",
      applies: "Where in scope",
      persists: "Yes",
    },
    {
      dimension: "Delivery model",
      applies: "Direct / partner-supported",
      persists: "Yes",
    },
    {
      dimension: "Subservice organization",
      applies: "Where applicable",
      persists: "Yes",
    },
    {
      dimension: "Effective period",
      applies: "Exact dated window",
      persists: "Yes",
    },
  ];

  return (
    <div className="w-full bg-[#F9FAFB] text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-12">
        {/* Top Split: Text & Hero Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                PAYROLL-SPECIFIC ASSURANCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              Connected to buyer needs{" "}
              <span className="text-slate-400 font-bold">—</span> never a
              universal statutory claim
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Financial reporting controls, processing integrity, change
              management, calculation provenance, payments segregation and
              auditability <span className="text-slate-400">—</span> each with
              its own exact scope.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {pills.map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePill(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    activePill === idx
                      ? "bg-[#07243B] text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-xs"
                  }`}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-6">
            <div className="p-3 rounded-3xl">
              <img
                src="/images/compliance/4.png"
                alt="Payroll-specific assurance meeting discussion"
                className="w-full h-auto rounded-2xl object-cover aspect-[16/11]"
              />
            </div>
          </div>
        </div>

        {/* Data Table Card */}
        <div className="bg-white border border-slate-200/80 rounded-3xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#E9F0F8] text-[#0A3254] text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                  <th className="py-4 px-6 font-extrabold">Scope Dimension</th>
                  <th className="py-4 px-6 font-extrabold text-white bg-[#0A2E4B]">
                    Applies to this evidence
                  </th>
                  <th className="py-4 px-6 font-extrabold bg-[#0A8FD0] text-white">
                    Persists into request
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium text-slate-700">
                {tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-4 px-6 font-extrabold text-[#0A3254] bg-[#E9F0F8]">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-6 text-slate-600 font-medium">
                      {row.applies}
                    </td>
                    <td className="py-4 px-6 text-slate-800 font-bold">
                      {row.persists}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
