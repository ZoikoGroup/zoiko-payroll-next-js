"use client";

import React from "react";
import {
  Building2,
  User,
  FolderKanban,
  ShieldCheck,
  TrendingUp,
  CreditCard,
} from "lucide-react";

// Integration cards data matching the image layout & icons
const INTEGRATION_CARDS = [
  {
    icon: Building2,
    title: "Legal/entity master · ERP",
    description: "Authoritative entity reference where configured.",
  },
  {
    icon: User,
    title: "HRIS / HCM",
    description: "Worker, population and entity assignment context.",
  },
  {
    icon: FolderKanban,
    title: "Payroll engines / providers",
    description: "Execution and output for supported scope.",
  },
  {
    icon: ShieldCheck,
    title: "Identity / SCIM",
    description: "Group membership does not equal payroll role.",
  },
  {
    icon: TrendingUp,
    title: "Finance / ERP / ledger",
    description: "Accounting outputs and consolidation.",
  },
  {
    icon: CreditCard,
    title: "Bank / treasury / payment provider",
    description: "Permitted funding/payment status only where supported.",
  },
];

export default function SystemBoundariesSection() {
  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Header & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
              <span>/</span>
              <span>INTEGRATIONS, SECURITY + IMPLEMENTATION</span>
            </div>

            <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
              Every system-of-record boundary stays explicit
            </h2>

            <p className="text-sm sm:text-base text-[#5C6E7E] max-w-xl leading-relaxed">
              Cross-entity isolation, least privilege and audit events &mdash;
              not a single shared database
            </p>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden sm h-64 sm:h-80 w-full">
              <img
                src="/images/multi-entity-payroll/right.png"
                alt="Engineer working on laptop outdoors near wind turbines"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 6 Integration Boundary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INTEGRATION_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E1E8ED] rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-4 transition-all hover:border-[#0281D3]/40"
              >
                <Icon className="w-5 h-5 stroke-[1.75] text-[#0B5E99]" />
                {/* Content */}
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#0A1928]">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6E7E] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
