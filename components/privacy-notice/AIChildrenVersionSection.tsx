"use client";

import React from "react";

interface VersionHistoryRow {
  version: string;
  state: string;
  effective: string;
  note: string;
}

const versionData: VersionHistoryRow[] = [
  {
    version: "Draft v1.0",
    state: "Prepared for approval",
    effective: "Not yet effective",
    note: "Current candidate — not locked",
  },
];

export default function AIChildrenVersionSection() {
  return (
    <section id="ai-children-version" className="scroll-mt-8 space-y-6">
      {/* Top Divider */}
      <div className="border-t border-slate-100 pt-8">
        {/* Title & Explanatory Paragraphs */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            AI, children & version history
          </h2>

          <p className="text-[14.5px] text-[#5B646B] leading-relaxed max-w-3xl">
            <strong className="font-bold text-[#0F172A]">
              Automated processing / AI:
            </strong>{" "}
            included only with an approved source disclosure. No such disclosure
            is currently approved for this template — this section is
            intentionally omitted rather than invented.
          </p>

          <p className="text-[14.5px] text-[#5B646B] leading-relaxed max-w-3xl">
            <strong className="font-bold text-[#0F172A]">
              Children / age:
            </strong>{" "}
            included only when approved. No age threshold is asserted here.
          </p>
        </div>
      </div>

      {/* Subheading: Version history */}
      <div className="pt-2 space-y-4">
        <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
          Version history
        </h3>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full text-left text-xs sm:text-[12.5px] border-collapse">
            <thead>
              <tr className="bg-[#E9F0F8]/60 text-[#0F172A]">
                <th className="py-3 px-4 font-bold tracking-wider uppercase text-[10.5px]">
                  VERSION
                </th>
                <th className="py-3 px-4 font-bold tracking-wider uppercase text-[10.5px]">
                  STATE
                </th>
                <th className="py-3 px-4 font-bold tracking-wider uppercase text-[10.5px]">
                  EFFECTIVE
                </th>
                <th className="py-3 px-4 font-bold tracking-wider uppercase text-[10.5px]">
                  NOTE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[#5B646B]">
              {versionData.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-3.5 px-4 font-medium text-[#0F172A]">
                    {row.version}
                  </td>
                  <td className="py-3.5 px-4">{row.state}</td>
                  <td className="py-3.5 px-4">{row.effective}</td>
                  <td className="py-3.5 px-4">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-[#94A3B8] leading-relaxed">
          Superseded versions will show a strong archive state with a link to
          the current version. A scheduled future version will show its
          effective date while the current version remains primary.
        </p>
      </div>
    </section>
  );
}
