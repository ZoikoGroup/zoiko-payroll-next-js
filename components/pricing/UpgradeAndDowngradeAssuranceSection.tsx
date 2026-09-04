"use client";

import React from "react";

interface AssuranceCard {
  title: string;
  description: string;
}

interface ImpactItem {
  text: string;
  type: "blocker" | "safe";
}

const assuranceCards: AssuranceCard[] = [
  {
    title: "Upgrade",
    description:
      "Unlock additional scale and capabilities after commercial authorization.",
  },
  {
    title: "Downgrade",
    description:
      "See exact limits and capabilities that will change before confirming.",
  },
  {
    title: "Preserve",
    description:
      "Required payroll history, payslips, statutory evidence and audit records remain protected.",
  },
];

const impactItems: ImpactItem[] = [
  {
    text: "7 entities active → Professional allows 3",
    type: "blocker",
  },
  {
    text: "SAML SSO enabled → not available on Professional",
    type: "blocker",
  },
  {
    text: "4 webhooks active → not available on Professional",
    type: "blocker",
  },
  {
    text: "Payroll history → preserved",
    type: "safe",
  },
];

export default function UpgradeAndDowngradeAssuranceSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FA] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              UPGRADE & DOWNGRADE ASSURANCE
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Change plans without putting payroll history at risk.
          </h2>
        </div>

        {/* Top 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assuranceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-[10px] p-6 shadow-xs space-y-2 flex flex-col justify-between"
            >
              <h3 className="text-base font-extrabold text-[#07243B]">
                {card.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Payroll-Continuity Promise Banner */}
        <div className="bg-[#EAF1F6] rounded-[10px] p-6 sm:p-8 shadow-xs space-y-2">
          <h4 className="text-[11px] font-extrabold text-[#07243B] uppercase tracking-wider">
            PAYROLL-CONTINUITY PROMISE
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-4xl">
            A plan change or commercial threshold must not silently prevent
            authorized users from completing an already approved or in-flight
            payroll. Commercial controls may restrict expansion or new
            configuration; legal, security or operational blocks remain
            separate.
          </p>
        </div>

        {/* Interactive Impact Review Card */}
        <div className="bg-white border border-[#DDE5EA] rounded-xl p-6 sm:p-8 shadow-xl space-y-6">
          {/* Card Top Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="space-y-1">
              <span className="text-xs text-slate-400 font-medium block">
                Current plan: Business
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Renewal: 01 Oct 2026
              </span>
            </div>
            <button className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200 text-xs font-bold shadow-xs transition-colors cursor-pointer">
              Downgrade to Professional
            </button>
          </div>

          {/* Impact Review List */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
              IMPACT REVIEW
            </h4>

            <div className="divide-y divide-slate-100">
              {impactItems.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex items-center justify-between gap-4"
                >
                  <span className="text-xs sm:text-sm text-[#07243B] font-medium">
                    {item.text}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shrink-0 ${
                      item.type === "blocker"
                        ? "bg-[#F4E1DF] text-[#9B342D]"
                        : "bg-[#E3F0E7] text-[#25603F]"
                    }`}
                  >
                    {item.type === "blocker" ? "Blocker" : "Safe"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#07243B] text-xs font-bold transition-colors cursor-pointer">
              Resolve blockers
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200 text-xs font-bold shadow-xs transition-colors cursor-pointer">
              Keep Business
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200 text-xs font-bold shadow-xs transition-colors cursor-pointer">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
