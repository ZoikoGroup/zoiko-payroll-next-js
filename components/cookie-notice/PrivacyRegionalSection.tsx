"use client";

import React from "react";

interface AuthorityRow {
  topic: string;
  authority: string;
  href?: string;
}

const authorityData: AuthorityRow[] = [
  {
    topic: "Broader personal-data processing & rights",
    authority: "Privacy Notice",
    href: "#",
  },
  {
    topic: "Operational consent / preference changes",
    authority: "Cookie Settings",
    href: "#",
  },
  {
    topic: "Legal provider role (where separately governed)",
    authority: "Provider / Subprocessor authority",
    href: "#",
  },
  {
    topic: "Security controls & evidence",
    authority: "Trust and Security",
    href: "#",
  },
];

export default function PrivacyRegionalSection() {
  return (
    <section id="privacy-authority" className="scroll-mt-8 space-y-6">
      {/* Title & Header Description */}
      <div className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          Privacy & regional behavior
        </h2>
        <p className="text-[14.5px] text-[#5B646B] leading-relaxed">
          This notice links to related authorities rather than duplicating their
          content:
        </p>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-[#F1F5F9]/60 text-[#0F172A] font-bold uppercase tracking-wider text-[10px]">
              <th className="py-3.5 px-6">TOPIC</th>
              <th className="py-3.5 px-6">OWNING AUTHORITY</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[#0F172A]">
            {authorityData.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 text-[#0F172A] font-normal">
                  {row.topic}
                </td>
                <td className="py-4 px-6 font-semibold text-[#0284C7] hover:underline cursor-pointer">
                  <a href={row.href}>{row.authority}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnote */}
      <p className="text-[12px] text-[#94A3B8] leading-normal pt-1">
        Operational region detection may influence consent behavior where
        approved, but it is not a public legal determination. A language change
        updates presentation only — it does not overstate the accuracy of IP- or
        VPN-based region detection.
      </p>
    </section>
  );
}
