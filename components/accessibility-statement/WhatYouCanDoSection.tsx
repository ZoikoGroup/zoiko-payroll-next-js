import React from "react";
import SectionShell from "./SectionShell";

const outcomes: string[] = [
  "Navigate the payroll console using a keyboard alone, with a visible focus indicator at each step.",
  "Use a screen reader to understand page structure, form labels, and status messages in primary payroll workflows.",
  "Read all status, warning, success and error states without relying on color alone.",
  "Resize text and reflow content without losing information or requiring horizontal scrolling, in tested areas.",
  "Reduce motion where the browser or OS setting requests it, in tested areas.",
];

export default function WhatYouCanDoSection() {
  return (
    <SectionShell
      id="outcomes"
      title="What you should be able to do"
      intro="The following outcomes are enabled only where verified for the in-scope experience described above."
    >
      <ul className="divide-y divide-slate-200 border-t border-slate-200">
        {outcomes.map((outcome) => (
          <li key={outcome} className="flex items-start gap-3 py-4">
            <span
              aria-hidden="true"
              className="mt-0.5 text-base font-black leading-5 text-green-700"
            >
              ✓
            </span>
            <span className="text-sm leading-5 text-gray-600">{outcome}</span>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
