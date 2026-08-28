import React from "react";
import SectionShell from "./SectionShell";

export default function OpenSourceSection() {
  return (
    <SectionShell
      id="open-source"
      title="Open-source software notices"
      intro="Zoiko Payroll may incorporate open-source software components, each governed by its own license terms."
    >
      <div className="rounded-xl border border-slate-200 bg-slate-100 p-5">
        <p className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
          Not embedded inline
        </p>
        <p className="mt-2.5 text-sm leading-5 text-gray-600">
          Component name, version and license vary by release and are tracked in
          our approved dependency and license register rather than paraphrased
          here from memory. Request the current open-source notice list through
          the form below.
        </p>
      </div>
    </SectionShell>
  );
}
