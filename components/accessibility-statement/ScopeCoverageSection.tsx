import React from "react";
import SectionShell from "./SectionShell";

interface ScopeRow {
  surface: string;
  coverage: "In scope" | "Out of scope";
  notes: string;
}

const scopeRows: ScopeRow[] = [
  {
    surface: "Zoiko Payroll web application (customer console)",
    coverage: "In scope",
    notes: "Primary product experience; current verified status applies here.",
  },
  {
    surface: "zoikopayroll.com marketing website",
    coverage: "In scope",
    notes: "Assessed separately from the product console; see status detail.",
  },
  {
    surface: "Product Documentation site",
    coverage: "In scope",
    notes: "Assessment in progress.",
  },
  {
    surface: "Third-party integrated services (e.g. connected HRIS tools)",
    coverage: "Out of scope",
    notes: "Governed by that provider's own accessibility statement.",
  },
  {
    surface: "PDF documents generated before Jan 2026",
    coverage: "Out of scope",
    notes:
      "May have accessibility limitations; contact us for an alternative format.",
  },
];

export default function ScopeCoverageSection() {
  return (
    <SectionShell
      id="scope"
      title="What this statement covers"
      intro="This statement describes accessibility for the surfaces listed below. It does not make a blanket claim about every Zoiko property — surfaces not listed are not yet covered."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-slate-100">
              <th
                scope="col"
                className="w-[41%] border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
              >
                Surface
              </th>
              <th
                scope="col"
                className="w-[12%] border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
              >
                Coverage
              </th>
              <th
                scope="col"
                className="border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
              >
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {scopeRows.map((row) => (
              <tr key={row.surface}>
                <th
                  scope="row"
                  className="border-b border-slate-200 px-3.5 py-3.5 align-top text-sm font-normal leading-5 text-gray-600"
                >
                  {row.surface}
                </th>
                <td className="border-b border-slate-200 px-3.5 py-3.5 align-top text-sm leading-5 text-gray-600">
                  <span
                    className={
                      row.coverage === "In scope" ? "font-bold" : "font-normal"
                    }
                  >
                    {row.coverage}
                  </span>
                </td>
                <td className="border-b border-slate-200 px-3.5 py-3.5 align-top text-sm leading-5 text-gray-600">
                  {row.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
