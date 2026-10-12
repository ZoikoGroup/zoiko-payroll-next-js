"use client";

import React from "react";

export default function LocalizationProcurementEvidenceSection() {
  const requirements = [
    {
      title: "EU/EEA storage requirement",
      status: "Requirement compatible",
      statusBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    {
      title: "Country-only processing requirement",
      status: "Needs specialist review",
      statusBg: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      title: "Custom contractual residency terms",
      status: "Contract-specific",
      statusBg: "bg-sky-100 text-sky-800 border-sky-200",
    },
    {
      title: "Undisclosed region requirement",
      status: "Not publicly disclosed",
      statusBg: "bg-slate-100 text-slate-700 border-slate-200",
    },
  ];

  const evidenceRoutes = [
    "Region matrix",
    "Architecture summary",
    "DPA",
    "Transfer documentation",
    "Contract exhibit",
  ];

  const changeHistory = [
    {
      title: "Registry profile reviewed",
      date: "Illustrative example — Aug 2026",
    },
    {
      title: "New region added as contract-specific",
      date: "Illustrative example — Jun 2026",
    },
    {
      title: "Transfer documentation updated",
      date: "Illustrative example — Mar 2026",
    },
  ];

  return (
    <div className="w-full bg-[#F9FAFB] text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-16">
        {/* Top Header & Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Block */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                LOCALIZATION & PROCUREMENT EVIDENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              A procurement-grade workspace <span>—</span> not
              a generic sales CTA
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl">
              Tell us your localization or country-specific requirements. We
              assess compatibility against current service scope{" "}
              <span className="text-slate-400 font-bold">—</span> never a
              promise of universal local hosting.
            </p>
          </div>

          {/* Right Image Container */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/images/residency/bg1.png"
              alt="Team collaborating in a workspace"
              className="w-full h-auto object-cover aspect-[14/10]"
            />
          </div>
        </div>

        {/* Requirements Assessment Box Container */}
        <div className="bg-white border border-slate-200/85 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="divide-y divide-slate-100">
            {requirements.map((req, idx) => (
              <div
                key={idx}
                className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <span className="text-sm sm:text-base font-extrabold text-[#07243B]">
                  {req.title}
                </span>
                <span
                  className={`self-start sm:self-auto text-xs font-bold px-3.5 py-1.5 rounded-full border ${req.statusBg}`}
                >
                  {req.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence Routes Section */}
        <div className="space-y-6 text-center">
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
            Evidence routes
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {evidenceRoutes.map((route, idx) => (
              <span
                key={idx}
                className="bg-white text-[#07243B] border border-slate-200/85 text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-full shadow-xs hover:border-[#0A78C3] transition-colors"
              >
                {route}
              </span>
            ))}
          </div>
        </div>

        {/* Change History Timeline Section */}
        <div className="max-w-xl mx-auto space-y-6 text-left">
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider text-center">
            Change history
          </h3>

          <div className="relative pl-6 border-l-2 border-slate-300 space-y-8 ml-4 sm:ml-12">
            {changeHistory.map((item, idx) => (
              <div key={idx} className="relative space-y-1">
                {/* Timeline Bullet Node */}
                <span className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#0A78C3] shadow-xs" />

                <h4 className="text-sm sm:text-base font-extrabold text-[#07243B]">
                  {item.title}
                </h4>
                <p className="text-xs font-medium text-slate-500">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
