"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stateStyles: Record<string, string> = {
  Matched: "bg-emerald-100 text-green-700",
  Conflict: "bg-red-100 text-red-700",
  Unmatched: "bg-orange-100 text-yellow-700",
  Accepted: "bg-emerald-100 text-green-700",
  Held: "bg-red-100 text-red-700",
  Retried: "bg-orange-100 text-yellow-700",
  Approved: "bg-emerald-100 text-green-700",
  Exported: "bg-emerald-100 text-green-700",
  Pending: "bg-red-100 text-red-700",
};

/** Each tab carries its own column headers — the categories describe different things. */
const tabs: {
  label: string;
  columns: [string, string, string];
  rows: { subject: string; source: string; state: string }[];
  note: string;
}[] = [
  {
    label: "Workforce / HR",
    columns: ["Field", "Source of record", "State"],
    rows: [
      { subject: "Worker ID mapping", source: "Zoiko HR", state: "Matched" },
      { subject: "Legal entity mapping", source: "Zoiko Payroll", state: "Matched" },
      { subject: "Department / cost center", source: "Zoiko HR", state: "Conflict" },
      { subject: "Employment status", source: "Zoiko HR", state: "Unmatched" },
    ],
    note: "Closed payroll history is never silently rewritten and payroll records are never erased because an upstream HR profile changes. Source ownership, privacy and retention stay visible.",
  },
  {
    label: "Time / Operational",
    columns: ["Event type", "Source", "State"],
    rows: [
      { subject: "Approved time record", source: "Zoiko Time", state: "Accepted" },
      { subject: "Absence / leave context", source: "Zoiko Time", state: "Accepted" },
      { subject: "Duplicate time entry", source: "Zoiko Time", state: "Held" },
      { subject: "Project / cost attribution", source: "Zoiko Time", state: "Retried" },
    ],
    note: "Payroll validation, calculation, review and approval remain governed entirely by payroll. No productivity or misconduct inference is drawn from time data, and nothing is silently overwritten.",
  },
  {
    label: "Finance & Reconciliation",
    columns: ["Flow", "Stage", "State"],
    rows: [
      { subject: "Approved payroll totals", source: "Draft → Approved", state: "Approved" },
      { subject: "Export to Zoiko Finance", source: "Exported", state: "Exported" },
      { subject: "Destination receipt", source: "Reconciled", state: "Pending" },
    ],
    note: "Draft → Approved → Exported → Reconciled, with a destination receipt at the end. Ledger posting, treasury or payment determination are never implied unless verified — and a batch is never marked complete while downstream acceptance is incomplete.",
  },
];

export default function DataContextSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const active = tabs.find((tab) => tab.label === activeTab) ?? tabs[0];

  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Data context by category</Eyebrow>
          <h2 className="mt-3 max-w-md text-3xl font-extrabold leading-9 text-sky-950">
            What moves, what doesn&rsquo;t, and who stays authoritative.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-6 text-slate-600">
            Workforce, time and finance context each carry the same discipline — shown here side by side
            instead of three separate long sections.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div className="flex flex-wrap gap-1.5 border-b border-slate-200" role="tablist">
            {tabs.map((tab) => {
              const isActive = tab.label === activeTab;
              return (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.label)}
                  className={`border-b-2 px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "border-sky-600 text-sky-950"
                      : "border-transparent text-slate-600 hover:text-sky-950"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-2xl border-collapse text-left">
              <thead>
                <tr className="bg-slate-100">
                  {active.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="border-b border-slate-200 px-3 py-2.5 font-mono text-[10px] font-medium uppercase leading-4 text-slate-600"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {active.rows.map((row) => (
                  <tr key={row.subject} className="border-b border-slate-200 last:border-b-0">
                    <th scope="row" className="px-3 py-3 text-left text-sm font-normal text-sky-950">
                      {row.subject}
                    </th>
                    <td className="px-3 py-3 text-sm text-sky-950">{row.source}</td>
                    <td className="px-3 py-3">
                      <span
                        className={`inline-block rounded-xl px-2 py-0.5 text-xs font-bold leading-4 ${stateStyles[row.state]}`}
                      >
                        {row.state}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 max-w-2xl rounded-r-lg border-l-2 border-yellow-700 bg-[#F5F8FA] px-3.5 py-2.5 text-xs leading-5 text-yellow-900">
            {active.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
