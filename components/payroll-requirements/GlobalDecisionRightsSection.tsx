"use client";

import React from "react";

// Role Cards Data Array matching the 8 grid items
const ROLES_DATA = [
  {
    title: "Global Payroll Governance",
    description:
      "Owns shared control model, standards, cross-market escalation and policy architecture. Cannot unilaterally reinterpret local evidence.",
  },
  {
    title: "Regional Payroll Lead",
    description:
      "Coordinates market readiness, rollout and recurring review; approves within delegated scope.",
  },
  {
    title: "Local Payroll Owner / SME",
    description:
      "Owns local applicability/context and operational configuration input.",
  },
  {
    title: "Compliance / Legal Reviewer",
    description:
      "Reviews high-risk interpretations and public/legal boundaries where required.",
  },
  {
    title: "Finance / Treasury",
    description:
      "Owns finance, reconciliation and payment-related local inputs and downstream handoffs.",
  },
  {
    title: "IT / Integration Admin",
    description:
      "Owns connector/data/system-of-record configuration, testing and failures.",
  },
  {
    title: "Security / Privacy",
    description:
      "Owns access, data handling, retention and processing controls.",
  },
  {
    title: "Auditor / Viewer",
    description:
      "Independent read-only oversight, subject to export permissions.",
  },
];

export default function GlobalDecisionRightsSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Hero Layout: Header Text + Image Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
              <span>/</span>
              <span>Global & Local Decision Rights</span>
            </div>
            <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
              Ownership made explicit &mdash; no generic &quot;Admin&quot; that
              does everything
            </h2>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl overflow-hidden border border-[#E1E8ED] shadow-sm flex flex-col">
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
              <img
                src="/images/payroll-requirements/showing.png"
                alt="Separation by design"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="p-5 bg-white space-y-1 flex-1">
              <h3 className="text-base font-bold text-[#0A1928]">
                Separation by design
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6E7E]">
                High-impact paths require explicit role separation.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROLES_DATA.map((role, index) => (
            <div
              key={index}
              className="bg-white border border-[#E1E8ED] rounded-2xl p-5 space-y-2 shadow-xs flex flex-col justify-between"
            >
              <h3 className="text-sm font-bold text-[#0A1928]">{role.title}</h3>
              <p className="text-xs text-[#5C6E7E] leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Separation Rule Callout Box */}
        <div className="bg-[#E9F0F8] border-l-4 border-[#0281D3] rounded-2xl p-5 text-xs sm:text-sm text-[#3C4043] leading-relaxed shadow-xs">
          <span className="font-bold text-[#0A1928]">Separation rule:</span> No
          generic &quot;Admin&quot; role can reinterpret requirements, change
          payroll configuration, approve the change and publish evidence.
          High-impact paths require explicit role separation or a visible
          exception policy.
        </div>
      </div>
    </section>
  );
}
