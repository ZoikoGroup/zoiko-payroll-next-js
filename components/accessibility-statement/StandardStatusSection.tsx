import React from "react";
import SectionShell from "./SectionShell";

export default function StandardStatusSection() {
  return (
    <SectionShell
      id="status"
      title="Accessibility standard & current status"
      intro="We separate what we target from what has been verified, so this statement never implies more than current evidence supports."
    >
      <dl className="divide-y divide-slate-200 border-t border-slate-200">
        <div className="py-5">
          <dt className="text-sm font-bold leading-6 text-sky-950">
            Target standard
          </dt>
          <dd className="mt-1.5 text-sm leading-5 text-gray-600">
            Our current target is{" "}
            <span className="font-bold">WCAG 2.2 Level AA</span>. This is the
            standard we design and build against; it is not itself a claim of
            achievement.
          </dd>
        </div>

        <div className="py-5">
          <dt className="text-sm font-bold leading-6 text-sky-950">
            Current verified status
          </dt>
          <dd className="mt-1.5 text-sm leading-5 text-gray-600">
            <span className="font-bold">Partially conformant</span> means some
            parts of the in-scope experience meet WCAG 2.2 AA, and known
            exceptions are documented below with an accessible alternative or
            support path. We do not publish &quot;fully conformant&quot; unless
            a completed assessment, defined scope, evaluator and evidence
            approval all support that exact claim.
          </dd>
        </div>

        <div className="py-5">
          <dt className="text-sm font-bold leading-6 text-sky-950">
            What this status does not mean
          </dt>
          <dd className="mt-1.5 text-sm leading-5 text-gray-600">
            This status is not a certification and does not itself constitute a
            legal compliance determination under ADA, the European Accessibility
            Act, EN 301 549 or any other law. Jurisdiction-specific
            applicability is a Legal-owned question — contact Legal for a formal
            determination.
          </dd>
        </div>
      </dl>
    </SectionShell>
  );
}
