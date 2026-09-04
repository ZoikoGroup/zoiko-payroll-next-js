"use client";

import React from "react";

interface EnterprisePoint {
  text: string;
}

const leftColumnPoints: EnterprisePoint[] = [
  { text: "Workforce scale and legal-entity footprint" },
  { text: "Jurisdiction and service availability" },
  { text: "Identity, SSO, SCIM and delegated administration" },
  { text: "Integration and API architecture" },
];

const rightColumnPoints: EnterprisePoint[] = [
  { text: "Implementation and parallel-run requirements" },
  { text: "Support SLA and service governance" },
  { text: "Managed-service requirements and contractual controls" },
];

export default function ZoikoOneAndEnterpriseSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FA] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3 max-w-2xl">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              ZOIKO ONE & ENTERPRISE PROCUREMENT
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Using more than one Zoiko service?
          </h2>

          {/* Subtitle description */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Zoiko Payroll can be purchased as a standalone service or made
            available through an eligible Zoiko One bundle. The same commercial
            scope is never billed simultaneously through both routes.
          </p>
        </div>

        {/* 2-Column Product Procurement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Standalone Card (White) */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-xs space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#0A78C3] block">
                STANDALONE
              </span>
              <h3 className="text-2xl font-extrabold text-[#07243B]">
                Zoiko Payroll on its own
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                Independent subscription, dedicated payroll onboarding,
                documentation and support. No Zoiko One subscription required.
              </p>
            </div>

            <div>
              <button className="text-xs sm:text-sm font-bold text-[#0A78C3] hover:underline inline-flex items-center gap-1 cursor-pointer">
                Explore Zoiko One →
              </button>
            </div>
          </div>

          {/* Through Zoiko One Card (Dark Navy) */}
          <div className="bg-gradient-to-r from-[#0E4B76] to-[#082F49] rounded-3xl p-8 flex flex-col justify-between shadow-xl space-y-6 text-white">
            <div className="space-y-3">
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#9FC3DB] block">
                THROUGH ZOIKO ONE
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Payroll, connected
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Unified access to multiple Zoiko products, connected data and
                workflows where enabled, broader administration and reporting,
                potential bundled commercial advantages.
              </p>
            </div>

            <div>
              <button className="text-xs sm:text-sm font-bold text-white hover:underline inline-flex items-center gap-1 cursor-pointer">
                Talk to Sales →
              </button>
            </div>
          </div>
        </div>

        {/* Enterprise Section Bottom Block */}
        <div className="space-y-8 pt-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#07243B] tracking-tight">
            Enterprise payroll, configured around your operating model.
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Left 2 Columns: Bullet Points */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                {leftColumnPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A78C3] mt-1.5 shrink-0" />
                    <span className="text-xs text-slate-600 font-medium leading-relaxed">
                      {pt.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {rightColumnPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A78C3] mt-1.5 shrink-0" />
                    <span className="text-xs text-slate-600 font-medium leading-relaxed">
                      {pt.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Approved Product Principle Box */}
            <div className="bg-[#EFF4F7] border border-slate-200/80 rounded-2xl p-6 space-y-2">
              <h4 className="text-xs font-extrabold text-[#07243B]">
                Approved product principle
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Separate products commercially, preserve a shared platform
                technically.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2E9BDD] via-[#0F5688] to-[#0A3D63] hover:bg-[#051a2c] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer">
              Talk to Enterprise Sales
            </button>
            <button className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200 text-xs sm:text-sm font-bold shadow-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer">
              Visit the Trust Center →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
