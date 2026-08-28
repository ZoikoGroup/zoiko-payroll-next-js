import React from "react";
import SectionShell from "./SectionShell";

interface HistoryEntry {
  date: string;
  change: string;
}

const history: HistoryEntry[] = [
  { date: "Aug 4, 2026", change: "Routine review; no material status change." },
  {
    date: "Jun 12, 2026",
    change:
      "Internal assessment completed; status updated to Partially conformant with WCAG 2.2 AA.",
  },
  { date: "Feb 2026", change: "Initial Accessibility Statement published." },
];

export default function StatementHistorySection() {
  return (
    <SectionShell id="history" title="Statement history & ownership">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="bg-slate-100">
              <th
                scope="col"
                className="w-[16%] border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
              >
                Date
              </th>
              <th
                scope="col"
                className="border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
              >
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry) => (
              <tr key={entry.date}>
                <th
                  scope="row"
                  className="whitespace-nowrap border-b border-slate-200 px-3.5 py-3 text-xs font-normal leading-5 text-gray-600"
                >
                  {entry.date}
                </th>
                <td className="border-b border-slate-200 px-3.5 py-3 text-xs leading-5 text-gray-600">
                  {entry.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm leading-6 text-gray-600">
        This statement is owned by the Zoiko Payroll Accessibility program and
        reviewed on a regular interval. If this statement is shown to be past
        its approved review interval, it will be marked accordingly rather than
        described as current.
      </p>
    </SectionShell>
  );
}
