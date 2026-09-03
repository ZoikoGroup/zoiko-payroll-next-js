"use client";

import React from "react";
import Image from "next/image";
import CountryFlag, { type CountryCode } from "./CountryFlag";

interface EntityCard {
  flag: CountryCode;
  country: string;
  model: string;
  description: string;
}

const entityCards: EntityCard[] = [
  {
    flag: "US",
    country: "United States",
    model: "Zoiko Payroll",
    description:
      "Calculation + records. Customer-operated approvals. External bank payment rail.",
  },
  {
    flag: "GB",
    country: "United Kingdom",
    model: "Zoiko Payroll",
    description: "Payroll workflow, with optional managed payroll service.",
  },
  {
    flag: "DE",
    country: "Germany",
    model: "Partner-Supported",
    description:
      "Calculation + filing by approved partner. Zoiko governance/reporting.",
  },
  {
    flag: "CA",
    country: "Canada",
    model: "Connected Payroll",
    description:
      "External payroll result, with Zoiko normalization/reporting.",
  },
];

const principles: string[] = [
  "One customer may hold one plan while using different delivery models by entity/jurisdiction, subject to plan limits and contract.",
  "Changing one country's delivery model never silently changes other payrolls.",
  "Global reports preserve source model and freshness metadata.",
  "Commercial billing avoids double-charging overlapping scope when delivery models change.",
];

export default function MixedModelPortfolioSection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Copy + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
              <span className="w-[3px] h-3.5 rounded-[1px] bg-[#3B82F6]" />
              <span>Mixed-model global portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#082F49] leading-tight">
              One customer, several delivery models.
            </h2>
            <p className="text-sm sm:text-base text-[#4E6172] leading-6">
              8 entities · 6 jurisdictions · Professional / Business /
              Enterprise as applicable.
            </p>
          </div>

          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-[0px_20px_44px_-22px_rgba(15,45,70,0.25)]">
            <Image
              src="/images/plans-and-service-models/mixed-model-portfolio.png"
              alt="A global payroll lead reviewing a multi-country portfolio"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Entity cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {entityCards.map((entity) => (
            <div
              key={entity.country}
              className="bg-white rounded-xl border border-slate-200 p-5 space-y-2"
            >
              <div className="flex items-center gap-2">
                <CountryFlag code={entity.flag} className="w-5 h-3.5" />
                <h3 className="text-sm font-bold text-[#082F49]">
                  {entity.country}
                </h3>
              </div>
              <div className="text-xs font-bold text-[#0A78C3]">
                {entity.model}
              </div>
              <p className="text-xs text-[#4E6172] leading-5">
                {entity.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-500 leading-5">
          One group dashboard may normalize status, but every card retains its
          entity, jurisdiction, delivery model and data source.
        </p>

        {/* Principles */}
        <ul>
          {principles.map((principle, idx) => (
            <li
              key={principle}
              className={`flex items-start gap-2.5 py-3.5 ${
                idx !== principles.length - 1
                  ? "border-b border-dashed border-slate-300"
                  : ""
              }`}
            >
              <span aria-hidden className="text-[#0A78C3] font-bold shrink-0">
                —
              </span>
              <span className="text-sm text-[#082F49] leading-5">
                {principle}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
