import React from "react";
import SectionShell from "./SectionShell";

const responses: string[] = [
  "Investigate",
  "Request information",
  "Restrict access",
  "Suspend",
  "Terminate",
  "Preserve evidence",
  "Report to authorities where required",
];

export default function PossibleResponsesSection() {
  return (
    <SectionShell
      id="possible-responses"
      title="Zoiko Payroll's possible responses"
      intro="Where a report is substantiated, Zoiko Payroll may take one or more of the following actions, as supported by the Service Terms:"
    >
      <ul className="flex flex-wrap gap-2.5">
        {responses.map((response) => (
          <li
            key={response}
            className="inline-flex h-9 items-center rounded-full border border-slate-200 bg-slate-100 px-4 text-xs font-bold leading-5 text-sky-950"
          >
            {response}
          </li>
        ))}
      </ul>

      <p className="mt-6 rounded-[10px] border border-sky-100 bg-blue-50 px-5 py-4 text-sm leading-5 text-sky-950">
        These responses are not applied in a fixed sequence, and no single rule
        violation automatically triggers a specific outcome unless the Service
        Terms say so. Notice, cure periods and appeal or review mechanisms apply
        only where the approved policy or Service Terms provide them.
      </p>
    </SectionShell>
  );
}
