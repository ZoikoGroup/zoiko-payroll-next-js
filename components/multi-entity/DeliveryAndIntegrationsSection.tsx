"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

interface DeliveryCard {
  title: string;
  firstRole: { label: string; action: string };
  secondRole: { label: string; action: string };
}

const deliveryCards: DeliveryCard[] = [
  {
    title: "Native / direct processing",
    firstRole: { label: "ZOIKO", action: "Processes payroll directly" },
    secondRole: { label: "YOU", action: "Own inputs & approvals" },
  },
  {
    title: "Integrated payroll",
    firstRole: {
      label: "ZOIKO",
      action: "Orchestrates via approved integration",
    },
    secondRole: { label: "YOU", action: "Own source system data" },
  },
  {
    title: "Partner-supported",
    firstRole: { label: "PARTNER", action: "Executes local processing" },
    secondRole: { label: "YOU", action: "Retain entity accountability" },
  },
  {
    title: "Customer-operated / file-based",
    firstRole: { label: "YOU", action: "Operate processing, submit files" },
    secondRole: { label: "ZOIKO", action: "Provides governed exchange" },
  },
];

const integrationPills = [
  "HRIS/HCM",
  "Time/Attendance",
  "ERP/Accounting",
  "Banking/Payments",
  "Benefits/Expenses",
  "Identity/SSO",
  "Local payroll providers",
];

const governanceFeatures = [
  "Role-scoped access",
  "Entity-level permissions",
  "Maker-checker approvals",
  "Auditable event history",
  "Encrypted data handling",
  "Export/Integration controls",
];

const aiMayItems = [
  "Summarize exceptions",
  "Explain variances",
  "Classify routine issues",
  "Suggest next steps",
  "Assist report discovery",
];

const aiMustNeverItems = [
  "Alter legal entity identity",
  "Change payroll results",
  "Edit bank details",
  "Modify tax registrations or approvals",
  "Touch payment instructions or statutory records",
];

export default function DeliveryAndIntegrationsSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Top Section: Delivery & Integrations */}
        <div className="space-y-10">
          {/* Section Header */}
          <div className="text-center space-y-3 mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span>DELIVERY & INTEGRATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
              Mixed delivery models, with clear responsibility boundaries
            </h2>
          </div>

          {/* 4 Delivery Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <h3 className="text-xs font-bold text-[#07243B] leading-snug">
                  {card.title}
                </h3>

                <div className="space-y-3 pt-2">
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-bold text-slate-400 tracking-wider">
                      {card.firstRole.label}
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      {card.firstRole.action}
                    </div>
                  </div>

                  <div className="w-full h-px bg-slate-100" />

                  <div className="space-y-0.5">
                    <div className="text-[10px] font-bold text-slate-400 tracking-wider">
                      {card.secondRole.label}
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      {card.secondRole.action}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integration Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {integrationPills.map((pill, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 bg-[#EBF3FB] text-[#07243B] text-xs font-semibold rounded-full border border-slate-200/60"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Dark Governance Banner */}
          <div className="bg-[#0A2337] rounded-2xl p-6 text-white shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {governanceFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8FD0] shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: AI Guardrails */}
        <div className="space-y-10 pt-4">
          {/* Section Header */}
          <div className="text-center space-y-3 mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span>AI GUARDRAILS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[24px] font-bold tracking-tight text-[#07243B] leading-tight">
              AI can help you see faster. It never acts on your behalf
            </h2>
          </div>

          {/* 2 Split Columns: Equal 6 & 6 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto gap-6">
            {/* AI May Card (6 Cols) */}
            <div className="lg:col-span-6 bg-[#EBF3FB] rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-200/60">
              <h3 className="text-sm font-bold text-[#1A5B8C]">AI may</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
                {aiMayItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FD0] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Must Never Card (6 Cols) */}
            <div className="lg:col-span-6 bg-[#F6E4E3] rounded-2xl p-6 sm:p-8 space-y-5 border border-red-200/60">
              <h3 className="text-sm font-bold text-[#B23A34]">
                AI must never
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                {aiMustNeverItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#991B1B] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
