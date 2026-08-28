import React from "react";
import SectionShell from "./SectionShell";

export default function WhatThisPolicyIsSection() {
  return (
    <SectionShell id="what-this-policy-is" title="What this policy is">
      <p className="rounded-[10px] border border-slate-200 bg-slate-100 px-5 py-4 text-sm leading-5 text-sky-950">
        <span className="font-bold">Direct answer:</span> This Acceptable Use
        Policy defines approved rules for use of Zoiko Payroll services. It does
        not itself prove a particular monitoring practice or a specific
        enforcement outcome — those are governed separately.
      </p>

      <dl className="mt-6 divide-y divide-slate-200 border-t border-slate-200">
        <div className="py-5">
          <dt className="text-sm font-bold leading-5 text-sky-950">
            Applicability
          </dt>
          <dd className="mt-2 text-sm leading-5 text-gray-600">
            This policy applies to use of Zoiko Payroll services by customers,
            authorized users and other permitted parties, within the scope
            defined by the applicable Zoiko Payroll Service Terms and any
            incorporated order or agreement.
          </dd>
        </div>

        <div className="py-5">
          <dt className="text-sm font-bold leading-5 text-sky-950">
            Relationship to Service Terms
          </dt>
          <dd className="mt-2 text-sm leading-5 text-gray-600">
            The Zoiko Payroll Service Terms may incorporate this Acceptable Use
            Policy by reference. Where incorporated, the Service Terms retain
            contract rights and remedies; this policy defines the approved use
            rules those rights apply to. Nothing here changes contract
            precedence set by the Service Terms.
          </dd>
        </div>
      </dl>
    </SectionShell>
  );
}
