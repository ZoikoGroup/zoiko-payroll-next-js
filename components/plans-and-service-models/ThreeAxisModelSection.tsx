"use client";

import React from "react";

interface AxisRow {
  axis: string;
  question: string;
  choices: string;
}

const axisRows: AxisRow[] = [
  {
    axis: "Plan",
    question:
      "How much product scale, governance, automation and integration is licensed?",
    choices: "Core · Professional · Business · Enterprise",
  },
  {
    axis: "Delivery model",
    question:
      "Who operates or supplies the payroll capability for this entity/jurisdiction?",
    choices:
      "Zoiko Payroll · Connected Payroll · Partner-Supported Payroll · Customer-operated where approved",
  },
  {
    axis: "Service layer",
    question: "Which additional operational responsibilities are contracted?",
    choices:
      "Managed payroll · filing/reporting · payments · premium support · implementation/custom integration",
  },
];

export default function ThreeAxisModelSection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
            <span className="w-[3px] h-3.5 rounded-[1px] bg-[#3B82F6]" />
            <span>The three-axis model</span>
          </div>
          <h2 className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#082F49] leading-tight">
            Three independent decisions, not one tier.
          </h2>
        </div>

        {/* Cards on mobile */}
        <div className="space-y-3 md:hidden">
          {axisRows.map((row) => (
            <div
              key={row.axis}
              className="bg-white rounded-xl border border-slate-200 p-5 space-y-3"
            >
              <div className="text-sm font-bold text-[#082F49]">{row.axis}</div>
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Question answered
                </div>
                <div className="text-sm text-[#4E6172] leading-5">
                  {row.question}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Canonical choices
                </div>
                <div className="text-sm text-[#4E6172] leading-5">
                  {row.choices}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table from md up */}
        <div className="hidden md:block bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                <th className="px-4 py-3.5 font-bold w-[130px]">Axis</th>
                <th className="px-4 py-3.5 font-bold w-[420px]">
                  Question answered
                </th>
                <th className="px-4 py-3.5 font-bold">Canonical choices</th>
              </tr>
            </thead>
            <tbody>
              {axisRows.map((row) => (
                <tr key={row.axis} className="border-t border-slate-200">
                  <td className="px-4 py-4 text-sm font-bold text-[#082F49] align-top">
                    {row.axis}
                  </td>
                  <td className="px-4 py-4 text-sm text-[#4E6172] leading-5 align-top">
                    {row.question}
                  </td>
                  <td className="px-4 py-4 text-sm text-[#4E6172] leading-5 align-top">
                    {row.choices}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Non-negotiable note */}
        <div className="bg-orange-100 border border-orange-200 rounded-[10px] p-5">
          <p className="text-sm text-yellow-900 leading-5">
            <span className="font-bold">Non-negotiable:</span> Plan ≠ delivery
            model ≠ service layer. Our interface, contracts and sales copy
            preserve these as separate dimensions — choosing a higher plan never
            silently implies Zoiko is running your payroll for you.
          </p>
        </div>
      </div>
    </section>
  );
}
