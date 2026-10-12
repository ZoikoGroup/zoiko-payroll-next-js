import React from "react";
import SectionShell from "./SectionShell";

export default function ThirdPartyAttributionSection() {
  return (
    <SectionShell
      id="third-party-attribution"
      title="Third-party trademarks & attribution"
      intro="References to third-party companies, products or services on Zoiko Payroll surfaces — including integration partners named elsewhere on this site — are for identification purposes only. All third-party names and marks are the property of their respective owners. Such references do not imply endorsement, sponsorship or affiliation unless separately and explicitly stated."
    >
      <div className="rounded-xl border border-slate-200 bg-slate-100 p-5">
        <p className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
          Attribution register
        </p>
        <p className="mt-2.5 text-sm leading-5 text-gray-600">
          An itemized third-party attribution list is maintained through our
          approved source register and is not duplicated inline to avoid drift
          from that canonical source. Contact us using the form below for a
          specific attribution inquiry.
        </p>
      </div>
    </SectionShell>
  );
}
