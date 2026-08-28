import React from "react";
import SectionShell from "./SectionShell";

const marks: string[] = [
  "Zoiko",
  "Zoiko Payroll",
  "Zoiko Tech",
  "ZoikoTime",
  "ZoikoStream",
  "Zoiko One",
];

export default function TrademarksSection() {
  return (
    <SectionShell
      id="trademarks"
      title="Trademarks & brand names"
      intro="The following names and marks are trademarks or trade names used by Zoiko Tech Inc. in connection with its products and services. Use of registration symbols is shown only where Brand/IP has verified registered status; no such status is claimed here beyond what is shown."
    >
      <ul className="flex flex-wrap gap-2.5">
        {marks.map((mark) => (
          <li
            key={mark}
            className="rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-xs font-bold leading-5 text-sky-950"
          >
            {mark}
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-slate-200 pt-3.5 text-xs leading-5 text-slate-500">
        Owner: Brand / IP · Last reviewed: Aug 4, 2026
      </p>
    </SectionShell>
  );
}
