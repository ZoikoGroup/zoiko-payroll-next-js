import React from "react";
import SectionShell from "./SectionShell";

interface VersionRow {
  version: string;
  period: string;
  status: "Current" | "Superseded";
}

const versions: VersionRow[] = [
  { version: "v4.2", period: "Jul 1, 2026 — present", status: "Current" },
  { version: "v4.1", period: "Feb 2026 — Jun 2026", status: "Superseded" },
  { version: "v4.0", period: "Sep 2025 — Jan 2026", status: "Superseded" },
];

export default function VersionHistorySection() {
  return (
    <SectionShell id="version-history" title="Version history & archive">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="bg-slate-100">
              <th
                scope="col"
                className="w-[23%] border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
              >
                Version
              </th>
              <th
                scope="col"
                className="border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
              >
                Effective period
              </th>
              <th
                scope="col"
                className="w-[20%] border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {versions.map((row) => (
              <tr key={row.version}>
                <th
                  scope="row"
                  className="whitespace-nowrap border-b border-slate-200 px-3.5 py-3 text-xs font-normal leading-5 text-gray-600"
                >
                  {row.version}
                </th>
                <td className="border-b border-slate-200 px-3.5 py-3 text-xs leading-5 text-gray-600">
                  {row.period}
                </td>
                <td
                  className={`border-b border-slate-200 px-3.5 py-3 text-xs font-bold leading-5 ${
                    row.status === "Current" ? "text-green-700" : "text-slate-500"
                  }`}
                >
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm leading-6 text-gray-600">
        Archived versions show their effective period and a permanent route back
        to the current version. A new public version does not automatically
        retire every existing customer&apos;s executed agreement.
      </p>
    </SectionShell>
  );
}
