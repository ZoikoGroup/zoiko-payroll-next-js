"use client";

import React from "react";
import Image from "next/image";

interface OptionalServiceCard {
  image: string;
  badgeLabel: string;
  badgeBg: string;
  badgeDot: string;
  badgeText: string;
  title: string;
  description: string;
}

const services: OptionalServiceCard[] = [
  {
    image: "/images/services/a1.png",
    badgeLabel: "Optional / Contracted",
    badgeBg: "bg-[#FEF3C7]",
    badgeDot: "bg-[#B78103]",
    badgeText: "text-[#8F6B00]",
    title: "Managed Payroll Operations",
    description:
      "Operational payroll administration against a defined responsibility matrix.",
  },
  {
    image: "/images/services/a2.png",
    badgeLabel: "Jurisdiction dependent",
    badgeBg: "bg-[#F1F5F9]",
    badgeDot: "bg-[#64748B]",
    badgeText: "text-[#475569]",
    title: "Statutory Filing & Reporting",
    description:
      "Submission or managed preparation of approved payroll filings.",
  },
  {
    image: "/images/services/a3.png",
    badgeLabel: "Jurisdiction dependent",
    badgeBg: "bg-[#F1F5F9]",
    badgeDot: "bg-[#64748B]",
    badgeText: "text-[#475569]",
    title: "Remittance & Payment Execution",
    description:
      "Authority remittance and employee payment orchestration where authorized.",
  },
  {
    image: "/images/services/a4.png",
    badgeLabel: "Optional / Catalog",
    badgeBg: "bg-[#E0F2FE]",
    badgeDot: "bg-[#0284C7]",
    badgeText: "text-[#0369A1]",
    title: "Jurisdiction & Entity Activation",
    description:
      "Enable a new country or legal entity within your plan capacity.",
  },
  {
    image: "/images/services/a5.png",
    badgeLabel: "Separately scoped",
    badgeBg: "bg-[#F3E8FF]",
    badgeDot: "bg-[#9333EA]",
    badgeText: "text-[#7E22CE]",
    title: "Implementation & Migration",
    description:
      "Configuration, data migration, testing, cutover and hypercare.",
  },
  {
    image: "/images/services/a6.png",
    badgeLabel: "Optional / Contracted",
    badgeBg: "bg-[#FEF3C7]",
    badgeDot: "bg-[#B78103]",
    badgeText: "text-[#8F6B00]",
    title: "Custom Integration",
    description:
      "Bespoke connectors, transformation and integration engineering.",
  },
];

export default function OptionalServicePortfolioSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                OPTIONAL SERVICE PORTFOLIO
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] max-w-2xl font-extrabold text-[#07243B] tracking-tight">
              Add only what your operating model needs.
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1 max-w-xs md:text-right">
            Every state resolves from the current catalog and coverage registry.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/70 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 transition-colors flex flex-col"
            >
              {/* Card Thumbnail Image */}
              <div className="relative w-full h-44 sm:h-48 bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-3">
                  {/* Status Badge */}
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${item.badgeBg}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${item.badgeDot}`}
                    />
                    <span className={`text-[11px] font-bold ${item.badgeText}`}>
                      {item.badgeLabel}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
