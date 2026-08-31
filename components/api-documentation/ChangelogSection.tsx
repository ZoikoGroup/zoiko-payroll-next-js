"use client";

import React from "react";

interface ChangelogEntry {
  date: string;
  version: string;
  resource: string;
  changeClass: string;
  actionRequired: string;
}

const changelogEntries: ChangelogEntry[] = [
  {
    date: "Aug 12, 2026",
    version: "v1",
    resource: "Deductions",
    changeClass: "Additive",
    actionRequired: "None",
  },
  {
    date: "Jul 30, 2026",
    version: "v1",
    resource: "Workers",
    changeClass: "Behavioral",
    actionRequired: "Review response handling",
  },
  {
    date: "Jun 18, 2026",
    version: "v1",
    resource: "Reports",
    changeClass: "Deprecation",
    actionRequired: "Migrate before sunset date",
  },
];

export default function ChangelogSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Centered Header Block */}
        <div className="text-center space-y-3 mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>CHANGELOG</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
            Every material change names its class and required action
          </h2>
        </div>

        {/* Changelog Table Container */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#EBF2F9] border-b border-slate-200/80 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  <th className="py-3.5 px-6">DATE</th>
                  <th className="py-3.5 px-6">VERSION</th>
                  <th className="py-3.5 px-6">RESOURCE</th>
                  <th className="py-3.5 px-6">CHANGE CLASS</th>
                  <th className="py-3.5 px-6">ACTION REQUIRED</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-600">
                {changelogEntries.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-3.5 px-6 text-slate-700 whitespace-nowrap">
                      {row.date}
                    </td>
                    <td className="py-3.5 px-6 text-slate-700">
                      {row.version}
                    </td>
                    <td className="py-3.5 px-6 text-slate-700">
                      {row.resource}
                    </td>
                    <td className="py-3.5 px-6 text-slate-700">
                      {row.changeClass}
                    </td>
                    <td className="py-3.5 px-6 text-slate-700">
                      {row.actionRequired}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote Note */}
        <p className="text-center text-[11px] text-slate-400 font-normal">
          Illustrative changelog rows for this design template.
        </p>
      </div>
    </section>
  );
}
