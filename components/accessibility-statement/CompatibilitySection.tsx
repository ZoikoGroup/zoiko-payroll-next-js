import React from "react";
import SectionShell from "./SectionShell";

interface CompatibilityRow {
  browser: string;
  assistiveTech: string;
  os: string;
  status: "Tested" | "Not yet tested";
}

const compatibilityRows: CompatibilityRow[] = [
  {
    browser: "Chrome (latest)",
    assistiveTech: "NVDA",
    os: "Windows 11",
    status: "Tested",
  },
  {
    browser: "Safari (latest)",
    assistiveTech: "VoiceOver",
    os: "macOS",
    status: "Tested",
  },
  {
    browser: "Edge (latest)",
    assistiveTech: "Narrator",
    os: "Windows 11",
    status: "Not yet tested",
  },
  {
    browser: "Safari (latest)",
    assistiveTech: "VoiceOver",
    os: "iOS",
    status: "Not yet tested",
  },
];

const headers = [
  "Browser",
  "Assistive technology",
  "Operating system",
  "Status",
];

export default function CompatibilitySection() {
  return (
    <SectionShell
      id="compatibility"
      title="Compatibility with browsers & assistive technology"
      intro="We publish only combinations we have evidence for — not every environment a user might use."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-slate-100">
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compatibilityRows.map((row) => (
              <tr key={`${row.browser}-${row.assistiveTech}-${row.os}`}>
                <th
                  scope="row"
                  className="border-b border-slate-200 px-3.5 py-3 text-xs font-normal leading-5 text-gray-600"
                >
                  {row.browser}
                </th>
                <td className="border-b border-slate-200 px-3.5 py-3 text-xs leading-5 text-gray-600">
                  {row.assistiveTech}
                </td>
                <td className="border-b border-slate-200 px-3.5 py-3 text-xs leading-5 text-gray-600">
                  {row.os}
                </td>
                <td
                  className={`border-b border-slate-200 px-3.5 py-3 text-xs font-bold leading-5 ${
                    row.status === "Tested" ? "text-green-700" : "text-slate-500"
                  }`}
                >
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
