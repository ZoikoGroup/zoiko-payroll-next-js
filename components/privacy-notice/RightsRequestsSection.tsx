"use client";

import React from "react";
import Link from "next/link";

interface RightCard {
  title: string;
  description: string;
  linkHref?: string;
}

const rightsData: RightCard[] = [
  {
    title: "Access",
    description:
      "Where applicable to your relationship with Zoiko Payroll and permitted by law.",
    linkHref: "#request",
  },
  {
    title: "Correction",
    description:
      "Applies to inaccurate personal data Zoiko controls directly; customer-directed payroll data corrections route through the customer.",
    linkHref: "#request",
  },
  {
    title: "Deletion",
    description: "Subject to retention obligations and approved exceptions.",
    linkHref: "#request",
  },
  {
    title: "Objection / restriction",
    description:
      "Where applicable under the relevant legal framework for your context.",
    linkHref: "#request",
  },
];

export default function RightsRequestsSection() {
  return (
    <section id="rights-requests" className="scroll-mt-8 space-y-6">
      {/* Divider */}
      <div className="border-t border-slate-100 pt-8">
        {/* Title & Introduction */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            Privacy rights & request workflow
          </h2>
          <p className="text-[14.5px] text-[#5B646B] leading-relaxed max-w-3xl">
            Each right below combines an approved right or choice, a qualifier
            explaining when it applies, and a route to exercise it. A listed
            right is never presented as universal — the request workflow, not
            this notice, determines the outcome.
          </p>
        </div>
      </div>

      {/* Cards Stack */}
      <div className="space-y-4">
        {rightsData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-3 shadow-sm hover:border-slate-300 transition-colors"
          >
            <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
              {item.title}
            </h3>
            <p className="text-[12.5px] italic text-[#5B646B] leading-relaxed">
              {item.description}
            </p>
            <div className="pt-1">
              <Link
                href={item.linkHref || "#"}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
              >
                <span>Submit a privacy request</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>
        ))}

        {/* Highlight Callout Box with Left Accent Border */}
        <div className="bg-white border border-slate-200/80 border-l-[4px] border-l-[#0284C7] rounded-2xl p-6 shadow-sm">
          <p className="text-[12.5px] text-[#5B646B] leading-relaxed">
            <strong className="text-[#0F172A] font-bold">
              Minimum-data intake.
            </strong>{" "}
            Privacy requests use a dedicated, minimum-data form — we do not ask
            for payroll files, bank/tax identifiers, credentials or secrets in a
            generic request. Privacy requests are never reused as sales leads.
          </p>
        </div>
      </div>
    </section>
  );
}
