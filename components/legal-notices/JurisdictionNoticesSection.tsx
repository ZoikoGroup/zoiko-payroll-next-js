import React from "react";
import SectionShell from "./SectionShell";

export default function JurisdictionNoticesSection() {
  return (
    <SectionShell id="jurisdiction-notices" title="Jurisdiction-specific notices">
      <div className="rounded-xl border border-slate-200 p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-base font-bold leading-6 text-sky-950">
            No jurisdiction-specific legal notices currently published
          </h3>
          <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] font-bold leading-4 text-slate-500">
            Not applicable
          </span>
        </div>

        <p className="mt-4 max-w-[820px] text-sm leading-5 text-gray-600">
          Jurisdiction-specific disclosures render on this page only where Legal
          has approved their applicability. None are currently approved for
          publication. If that changes, an applicable notice will appear here
          with its jurisdiction, effective date and approval state.
        </p>
      </div>
    </SectionShell>
  );
}
