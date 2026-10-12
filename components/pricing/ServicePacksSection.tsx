"use client";

import React from "react";
import { CheckCircle2, CreditCard, FileText, Settings } from "lucide-react";

interface ServicePack {
  icon: React.ReactNode;
  title: string;
  description: string;
  gateText: string;
}

const servicePacks: ServicePack[] = [
  {
    icon: <CheckCircle2 className="w-5 h-5 text-[#0A78C3] stroke-[2]" />,
    title: "Managed Payroll",
    description: "Operational payroll support where commercially available.",
    gateText: "Gate: jurisdiction + contract + service readiness",
  },
  {
    icon: <CreditCard className="w-5 h-5 text-[#0A78C3] stroke-[2]" />,
    title: "Payroll Payments",
    description:
      "Payment and disbursement enablement in supported jurisdictions.",
    gateText: "Gate: payment rail + funds-flow + contract",
  },
  {
    icon: <FileText className="w-5 h-5 text-[#0A78C3] stroke-[2]" />,
    title: "Tax Filing & Remittance",
    description: "Statutory filing and remittance in supported jurisdictions.",
    gateText: "Gate: filing authority + operational readiness + contract",
  },
  {
    icon: <Settings className="w-5 h-5 text-[#0A78C3] stroke-[2]" />,
    title: "Implementation & Integrations",
    description:
      "Migration, configuration and custom-integration support beyond included scope.",
    gateText: "Gate: commercial scope + technical feasibility",
  },
];

export default function ServicePacksSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-5xl mx-auto">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              SERVICE PACKS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Your software plan determines platform capabilities.<br/> Service packs
            determine which operational services we perform.
          </h2>

          {/* Subtitle description */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Managed operations are separately contracted and gated by
            jurisdiction, service readiness and contract — never bundled
            silently into a software tier.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {servicePacks.map((pack, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-[10px] p-6 flex flex-col justify-between shadow-xs transition-colors hover:border-slate-300"
            >
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded-full border border-[#0A78C3] flex items-center justify-center">
                  {pack.icon}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-base font-extrabold text-[#07243B]">
                    {pack.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {pack.description}
                  </p>
                </div>
              </div>

              {/* Gate Text Footnote */}
              <div className="pt-2 mt-2 border-t border-slate-100">
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                  {pack.gateText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Disclosure Banner */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-2">
          <h4 className="text-[11px] font-extrabold text-[#07243B] uppercase tracking-wider">
            MANDATORY DISCLOSURE
          </h4>
          <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-4xl">
            Availability varies by jurisdiction and contracted service scope. A
            software entitlement must never be interpreted as authorization for
            Zoiko Payroll to move funds, file returns, remit taxes or perform
            managed operations.
          </p>
        </div>
      </div>
    </section>
  );
}
