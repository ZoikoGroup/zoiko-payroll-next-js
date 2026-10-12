import React from "react";
import SectionShell from "./SectionShell";

export default function AssessmentEvidenceSection() {
  return (
    <SectionShell
      id="assessment"
      title="Assessment approach & evidence"
      intro="Our current status is based on a combination of automated scanning, manual keyboard and screen-reader testing, and internal accessibility review against WCAG 2.2 AA success criteria for the in-scope experience. The most recent internal assessment was completed Jun 12, 2026."
    >
      <p className="rounded-[10px] border border-sky-100 bg-blue-50 px-5 py-4 text-sm leading-5 text-sky-950">
        An accessible HTML evidence summary is available on request through the
        feedback form above. We do not use an inaccessible PDF as the sole proof
        link.
      </p>
    </SectionShell>
  );
}
