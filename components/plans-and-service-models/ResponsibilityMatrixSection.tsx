"use client";

import React from "react";

interface ResponsibilityRow {
  activity: string;
  customer: string;
  zoiko: string;
  partner: string;
}

const responsibilityRows: ResponsibilityRow[] = [
  {
    activity: "Maintain employer registrations",
    customer: "A/R unless contracted otherwise",
    zoiko: "Workflow/reference where supported",
    partner: "May assist if contracted",
  },
  {
    activity: "Provide source worker/pay changes",
    customer: "A/R",
    zoiko: "Validate/ingest",
    partner: "May receive local inputs",
  },
  {
    activity: "Calculate payroll",
    customer: "Approve/review",
    zoiko: "R where native capability applies",
    partner: "R where external provider calculates",
  },
  {
    activity: "Approve payroll",
    customer: "A",
    zoiko: "Workflow/control",
    partner: "Input where contracted",
  },
  {
    activity: "File statutory returns",
    customer: "A unless law/contract allocates",
    zoiko: "R only where service scope says so",
    partner: "R where contracted",
  },
  {
    activity: "Fund / pay employees",
    customer: "A for funding unless contract says otherwise",
    zoiko: "Orchestrate/execute only where approved",
    partner: "May execute via approved rails",
  },
  {
    activity: "Maintain records",
    customer: "A/R for employer records",
    zoiko: "R for Zoiko-held records",
    partner: "Source artifacts where provider-owned",
  },
];

export default function ResponsibilityMatrixSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
            <span className="w-[3px] h-3.5 rounded-[1px] bg-[#3B82F6]" />
            <span>Responsibility matrix</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#082F49] leading-tight">
            Task-level ownership, not a &quot;fully managed&quot; badge.
          </h2>
        </div>

        {/* Cards on mobile */}
        <div className="space-y-3 lg:hidden">
          {responsibilityRows.map((row) => (
            <div
              key={row.activity}
              className="bg-white rounded-xl border border-slate-200 p-5 space-y-3"
            >
              <div className="text-sm font-bold text-[#082F49]">
                {row.activity}
              </div>
              <dl className="space-y-2.5">
                {(
                  [
                    ["Customer", row.customer],
                    ["Zoiko Payroll", row.zoiko],
                    ["Connected / Partner", row.partner],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label} className="space-y-0.5">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {label}
                    </dt>
                    <dd className="text-sm text-[#4E6172] leading-5">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* Table from lg up */}
        <div className="hidden lg:block rounded-xl border border-slate-200 overflow-x-auto">
          <table className="w-full min-w-[820px]">
            <thead>
              <tr className="text-left text-sm">
                <th className="bg-slate-100 px-5 py-4 font-semibold text-slate-500 w-[260px]">
                  Payroll activity
                </th>
                <th className="bg-[#0F2C43] px-5 py-4 font-semibold text-white">
                  Customer
                </th>
                <th className="bg-[#0F2C43] px-5 py-4 font-semibold text-white">
                  Zoiko Payroll
                </th>
                <th className="bg-[#0F2C43] px-5 py-4 font-semibold text-white">
                  Connected / Partner
                </th>
              </tr>
            </thead>
            <tbody>
              {responsibilityRows.map((row, idx) => (
                <tr
                  key={row.activity}
                  className={`border-t border-slate-200 ${
                    idx % 2 === 1 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <td className="px-5 py-4 text-sm font-bold text-[#082F49] align-top">
                    {row.activity}
                  </td>
                  <td className="px-5 py-4 text-sm text-[#4E6172] align-top">
                    {row.customer}
                  </td>
                  <td className="px-5 py-4 text-sm text-[#4E6172] align-top">
                    {row.zoiko}
                  </td>
                  <td className="px-5 py-4 text-sm text-[#4E6172] align-top">
                    {row.partner}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[#4E6172] leading-5">
          A = Accountable, R = Responsible for execution. Software never creates
          a legal registration on its own, and generation of a report is never
          the same as filing it.
        </p>
      </div>
    </section>
  );
}
