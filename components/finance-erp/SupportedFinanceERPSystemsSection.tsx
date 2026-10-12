"use client";

import React from "react";
import Image from "next/image";

interface SystemCard {
  title: string;
  description: string;
  methodInfo: string;
  imageSrc: string;
  isActionCard?: boolean;
}

const systems: SystemCard[] = [
  {
    title: "NetSuite",
    description: "API-supported journal export with dimension mapping.",
    methodInfo: "Method: API · Last verified Aug 2026",
    imageSrc: "/images/footer-integrations/8.png",
  },
  {
    title: "SAP S/4HANA",
    description:
      "Available with implementation — scoped mapping and testing required.",
    methodInfo: "Method: Managed exchange · Last verified Aug 2026",
    imageSrc: "/images/footer-integrations/9.png",
  },
  {
    title: "Xero",
    description:
      "Validation required — confirm ledger and dimension fit for your account.",
    methodInfo: "Method: API · Last verified Jul 2026",
    imageSrc: "/images/footer-integrations/10.png",
  },
  {
    title: "QuickBooks Online",
    description:
      "File / managed exchange available for standard chart configurations.",
    methodInfo: "Method: File exchange · Last verified Aug 2026",
    imageSrc: "/images/footer-integrations/11.png",
  },
  {
    title: "Microsoft Dynamics 365",
    description:
      "API-supported — entity and dimension scope confirmed during fit validation.",
    methodInfo: "Method: API · Last verified Aug 2026",
    imageSrc: "/images/footer-integrations/12.png",
  },
  {
    title: "Don't see your system?",
    description:
      "Not currently listed does not mean unsupported — request a custom fit review.",
    methodInfo: "Custom fit route",
    imageSrc: "/images/footer-integrations/13.png",
    isActionCard: true,
  },
];

export default function SupportedFinanceERPSystemsSection() {
  return (
    <section className="w-full bg-[#E9F0F8] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>SUPPORTED FINANCE & ERP SYSTEMS</span>
          </div>

          <h2 className="text-2xl sm:text-[36px] font-bold text-[#0F172A] tracking-tight leading-tight max-w-4xl mx-auto">
            Registry-backed cards — never marketing overriding connector state
          </h2>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((system, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[14px] overflow-hidden border border-[#E1E8F0] flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              {/* Card Header Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={system.imageSrc}
                  alt={system.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#0F172A]">
                    {system.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {system.description}
                  </p>
                  <span className="text-[11px] font-medium text-slate-400 hover:underline cursor-pointer">
                    {system.methodInfo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
