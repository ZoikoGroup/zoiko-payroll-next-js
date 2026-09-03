"use client";

import React from "react";

type BadgeTone = "green" | "amber" | "red" | "blue" | "slate";

interface Cell {
  label: string;
  tone: BadgeTone;
}

interface CompatibilityRow {
  model: string;
  core: Cell;
  professional: Cell;
  business: Cell;
  enterprise: Cell;
  notes: string;
}

const toneStyles: Record<BadgeTone, string> = {
  green: "bg-green-100 text-emerald-600",
  amber: "bg-orange-100 text-yellow-700",
  red: "bg-rose-100 text-red-600",
  blue: "bg-blue-50 text-sky-700",
  slate: "bg-slate-100 text-slate-500",
};

const contracted: Cell = { label: "Contracted", tone: "blue" };

const compatibilityRows: CompatibilityRow[] = [
  {
    model: "Zoiko Payroll",
    core: { label: "Eligible where covered", tone: "green" },
    professional: { label: "Eligible where covered", tone: "green" },
    business: { label: "Eligible where covered", tone: "green" },
    enterprise: contracted,
    notes: "Capability and jurisdiction scope apply.",
  },
  {
    model: "Customer-operated",
    core: { label: "Eligible where approved", tone: "green" },
    professional: { label: "Eligible", tone: "green" },
    business: { label: "Eligible", tone: "green" },
    enterprise: { label: "Eligible", tone: "green" },
    notes: "Customer remains operator for defined tasks.",
  },
  {
    model: "Connected Payroll",
    core: { label: "Limited / review", tone: "amber" },
    professional: { label: "Supported (licensed scope)", tone: "green" },
    business: { label: "Supported", tone: "green" },
    enterprise: contracted,
    notes: "Connector/provider availability & data scope apply.",
  },
  {
    model: "Partner-Supported Payroll",
    core: { label: "Commercial review", tone: "red" },
    professional: { label: "Available where approved", tone: "green" },
    business: { label: "Available where approved", tone: "green" },
    enterprise: contracted,
    notes: "Local partner & responsibility matrix required.",
  },
  {
    model: "Mixed model",
    core: { label: "Not the intended pattern", tone: "slate" },
    professional: { label: "Supported (plan limits)", tone: "green" },
    business: { label: "Designed for this", tone: "green" },
    enterprise: contracted,
    notes: "May vary by entity, jurisdiction and capability.",
  },
];

function Badge({ cell }: { cell: Cell }) {
  return (
    <span
      className={`inline-block text-xs font-bold px-2.5 py-1 rounded-[20px] ${
        toneStyles[cell.tone]
      }`}
    >
      {cell.label}
    </span>
  );
}

export default function PlanDeliveryCompatibilitySection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
            <span className="w-[3px] h-3.5 rounded-[1px] bg-[#3B82F6]" />
            <span>Plan × delivery model compatibility</span>
          </div>
          <h2 className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#082F49] leading-tight">
            Architectural compatibility — not a coverage promise.
          </h2>
          <p className="text-sm sm:text-base text-[#4E6172] leading-6 max-w-3xl">
            This matrix explains what&apos;s architecturally possible. Live
            availability always resolves from the current coverage and
            commercial registries, not this table.
          </p>
        </div>

        {/* Cards on mobile */}
        <div className="space-y-3 lg:hidden">
          {compatibilityRows.map((row) => (
            <div
              key={row.model}
              className="bg-white rounded-xl border border-slate-200 p-5 space-y-3"
            >
              <div className="text-sm font-bold text-[#082F49]">
                {row.model}
              </div>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
                {(
                  [
                    ["Core", row.core],
                    ["Professional", row.professional],
                    ["Business", row.business],
                    ["Enterprise", row.enterprise],
                  ] as const
                ).map(([label, cell]) => (
                  <div key={label} className="flex flex-col gap-1.5">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {label}
                    </dt>
                    <dd>
                      <Badge cell={cell} />
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-xs text-[#4E6172] leading-5 pt-1">
                {row.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Table from lg up */}
        <div className="hidden lg:block bg-white rounded-xl border border-slate-200 overflow-x-auto">
          <table className="w-full min-w-[960px]">
            <thead>
              <tr className="bg-slate-100 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                <th className="px-3.5 py-3 font-bold">Delivery model</th>
                <th className="px-3.5 py-3 font-bold">Core</th>
                <th className="px-3.5 py-3 font-bold">Professional</th>
                <th className="px-3.5 py-3 font-bold">Business</th>
                <th className="px-3.5 py-3 font-bold">Enterprise</th>
                <th className="px-3.5 py-3 font-bold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {compatibilityRows.map((row) => (
                <tr key={row.model} className="border-t border-slate-200">
                  <td className="px-3.5 py-3.5 text-xs font-bold text-[#082F49] align-middle">
                    {row.model}
                  </td>
                  <td className="px-3.5 py-3.5 align-middle">
                    <Badge cell={row.core} />
                  </td>
                  <td className="px-3.5 py-3.5 align-middle">
                    <Badge cell={row.professional} />
                  </td>
                  <td className="px-3.5 py-3.5 align-middle">
                    <Badge cell={row.business} />
                  </td>
                  <td className="px-3.5 py-3.5 align-middle">
                    <Badge cell={row.enterprise} />
                  </td>
                  <td className="px-3.5 py-3.5 text-xs text-[#4E6172] leading-5 align-middle">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div className="bg-orange-100 border border-orange-200 rounded-[10px] p-5">
          <p className="text-xs text-yellow-900 leading-5">
            We don&apos;t mark every cell with a green check. Labels like
            Eligible, Limited, Contracted, Review required and Not available
            always carry a text explanation and reflect current registry data.
          </p>
        </div>
      </div>
    </section>
  );
}
