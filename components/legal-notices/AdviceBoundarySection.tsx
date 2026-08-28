import React from "react";
import SectionShell from "./SectionShell";

export default function AdviceBoundarySection() {
  return (
    <SectionShell
      id="advice-boundary"
      title="Professional, legal & tax information boundary"
    >
      <p className="rounded-[10px] border border-sky-100 bg-blue-50 px-5 py-4 text-sm leading-5 text-sky-950">
        Content on Zoiko Payroll web surfaces — including product pages, guides,
        glossary entries and this notice — is provided for general informational
        purposes only and does not constitute legal, tax, accounting, payroll or
        employment advice. Consult a qualified professional for advice specific
        to your circumstances.
      </p>
    </SectionShell>
  );
}
