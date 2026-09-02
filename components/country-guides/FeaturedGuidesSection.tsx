"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface FeaturedGuide {
  code: string;
  codeBg: string;
  country: string;
  region: string;
  description: string;
  currency: string;
  frequency: string;
  lastReviewed: string;
  status: "Reviewed" | "Update in progress" | "Partial guide";
}

const guidesData: FeaturedGuide[] = [
  {
    code: "US",
    codeBg: "bg-[#1E3A8A]",
    country: "United States",
    region: "Country · Americas",
    description:
      "Federal withholding sits alongside state-level income tax, unemployment insurance and, in some states, material local payroll rules.",
    currency: "USD",
    frequency: "Semi-monthly",
    lastReviewed: "Jul 14, 2026",
    status: "Reviewed",
  },
  {
    code: "GB",
    codeBg: "bg-[#0F172A]",
    country: "United Kingdom",
    region: "Country · Europe",
    description:
      "PAYE income tax and National Insurance are calculated and reported in real time through the standard payroll cycle.",
    currency: "GBP",
    frequency: "Monthly",
    lastReviewed: "Jun 30, 2026",
    status: "Reviewed",
  },
  {
    code: "DE",
    codeBg: "bg-[#27272A]",
    country: "Germany",
    region: "Country · Europe",
    description:
      "Wage tax withholding runs alongside statutory social insurance contributions split between employer and employee.",
    currency: "EUR",
    frequency: "Monthly",
    lastReviewed: "May 22, 2026",
    status: "Update in progress",
  },
  {
    code: "SG",
    codeBg: "bg-[#991B1B]",
    country: "Singapore",
    region: "Country · Asia-Pacific",
    description:
      "CPF contributions and IR8A year-end reporting are central to the local payroll and employer-reporting cycle.",
    currency: "SGD",
    frequency: "Monthly",
    lastReviewed: "Jul 02, 2026",
    status: "Reviewed",
  },
  {
    code: "BR",
    codeBg: "bg-[#065F46]",
    country: "Brazil",
    region: "Country · Americas",
    description:
      "eSocial reporting, INSS contributions and the 13th-salary requirement materially shape the annual payroll calendar.",
    currency: "BRL",
    frequency: "Monthly",
    lastReviewed: "Apr 09, 2026",
    status: "Partial guide",
  },
  {
    code: "JP",
    codeBg: "bg-[#831843]",
    country: "Japan",
    region: "Country · Asia-Pacific",
    description:
      "Resident tax and social insurance premiums are withheld monthly, with year-end adjustment reconciling annual liability.",
    currency: "JPY",
    frequency: "Monthly",
    lastReviewed: "Jun 11, 2026",
    status: "Reviewed",
  },
];

export default function FeaturedGuidesSection() {
  const getBadgeStyle = (status: FeaturedGuide["status"]) => {
    switch (status) {
      case "Reviewed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      case "Update in progress":
        return "bg-amber-50 text-amber-700 border-amber-200/60";
      case "Partial guide":
        return "bg-sky-50 text-sky-700 border-sky-200/60";
      default:
        return "bg-slate-50 text-slate-600 border-slate-200";
    }
  };

  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A] overflow-hidden">
      {/* Background Pattern Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Image
          src="/images/country-guides/1.png"
          alt="World map pattern background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>FEATURED GUIDES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Start with commonly requested jurisdictions.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Editorially selected guides that meet the current content-quality
            threshold, refreshed as review cycles complete.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guidesData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-5 flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                {/* Header: Flag Code + Country Name */}
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg ${item.codeBg} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs font-mono`}
                  >
                    {item.code}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#07243B] leading-snug">
                      {item.country}
                    </h3>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {item.region}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Currency & Frequency Box */}
                <div className="bg-[#F8FAFC] rounded-xl p-3 border border-slate-100 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 font-medium block">
                      Currency
                    </span>
                    <span className="font-bold text-[#07243B]">
                      {item.currency}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-medium block">
                      Frequency
                    </span>
                    <span className="font-bold text-[#07243B]">
                      {item.frequency}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="space-y-4 pt-1">
                <div className="flex items-center justify-between text-[11px] pt-1">
                  <span className="text-slate-400 font-medium">
                    Last reviewed {item.lastReviewed}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getBadgeStyle(
                      item.status,
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <button className="text-[#07243B] hover:text-[#0A8FD0] transition-colors flex items-center gap-1.5">
                    <span>View payroll guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button className="text-[#0A8FD0] hover:underline font-semibold text-[11px]">
                    Check coverage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
