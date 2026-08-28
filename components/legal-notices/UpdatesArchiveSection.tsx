import React from "react";
import SectionShell from "./SectionShell";

interface UpdateEntry {
  date: string;
  change: string;
}

const updates: UpdateEntry[] = [
  { date: "Aug 4, 2026", change: "Routine review; no material change." },
  {
    date: "Mar 2026",
    change: "Added Zoiko One to trademark and brand names list.",
  },
  { date: "Jan 2026", change: "Initial Legal Notices page published." },
];

export default function UpdatesArchiveSection() {
  return (
    <SectionShell id="updates" title="Updates, supersession & archive">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="bg-slate-100">
              <th
                scope="col"
                className="w-[23%] border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
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
            {updates.map((entry) => (
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
        Superseded notices are not silently replaced — where retention policy
        requires it, prior versions are preserved and the current notice
        identifies its replacement.
      </p>
    </SectionShell>
  );
}
