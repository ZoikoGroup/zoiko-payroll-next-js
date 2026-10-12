"use client";

import React from "react";

interface MatrixRow {
  decisionArea: string;
  globalStandard: string;
  localGoverned: string;
}

const matrixData: MatrixRow[] = [
  {
    decisionArea: "Definitions",
    globalStandard: "Common terminology & data language",
    localGoverned: "Statutory definitions per jurisdiction",
  },
  {
    decisionArea: "Governance",
    globalStandard: "Coordinated policy & oversight",
    localGoverned: "Local legal accountability",
  },
  {
    decisionArea: "Lifecycle control",
    globalStandard: "Shared cycle stages & checkpoints",
    localGoverned: "Local calendar & cutoffs",
  },
  {
    decisionArea: "Filing",
    globalStandard: "Coordinated visibility",
    localGoverned: "Local statutory filing",
  },
  {
    decisionArea: "Banking",
    globalStandard: "Group funding coordination",
    localGoverned: "Local payment rails & provider rules",
  },
  {
    decisionArea: "Legal accountability",
    globalStandard: "Not applicable",
    localGoverned: "Entity-level legal responsibility",
  },
  {
    decisionArea: "Decision rights",
    globalStandard: "Group-level policy decisions",
    localGoverned: "Local specialist sign-off",
  },
];

export default function GlobalVsLocalControlSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Container */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              GLOBAL VS LOCAL CONTROL
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            What&apos;s standardized globally. What stays locally governed
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Global standardization never overrides local statutory, tax or legal
            authority — it coordinates around it.
          </p>
        </div>

        {/* Table Container */}
        <div className="rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="text-xs font-bold uppercase tracking-wider text-white">
                  <th className="bg-[#E9F0F8] text-[#07243B] p-4 sm:p-5 w-1/4">
                    DECISION AREA
                  </th>
                  <th className="bg-[#0A2E4B] p-4 sm:p-5 w-3/8">
                    GLOBAL STANDARD
                  </th>
                  <th className="bg-[#0A8FD0] p-4 sm:p-5 w-3/8">
                    LOCAL / ENTITY GOVERNED
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium text-slate-600">
                {matrixData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="bg-[#E9F0F8] font-bold text-[#07243B] p-4 sm:p-5">
                      {row.decisionArea}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-700">
                      {row.globalStandard}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-700">
                      {row.localGoverned}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-[11px] text-slate-400 font-medium">
          This matrix does not make a universal compliance claim for any
          jurisdiction — verify local requirements through Jurisdiction Guides.
        </p>
      </div>
    </section>
  );
}
