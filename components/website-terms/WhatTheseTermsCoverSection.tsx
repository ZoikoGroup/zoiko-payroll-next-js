"use client";

import React from "react";

interface FeatureCard {
  title: string;
  description: string;
}

const scopeCards: FeatureCard[] = [
  {
    title: "In scope",
    description:
      "Public marketing pages, published resources, public forms and public-site navigation.",
  },
  {
    title: "Not automatically in scope",
    description:
      "Purchased Zoiko Payroll services, which are governed by Zoiko Payroll Service Terms once approved.",
  },
  {
    title: "Separate authorities",
    description:
      "Privacy Notice and Cookie Notice remain their own disclosure documents — not restated here.",
  },
];

export default function WhatTheseTermsCoverSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 lg:py-20 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Section */}
        <div className="space-y-3 max-w-3xl">
          {/* Category Tag */}
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>WHAT THESE TERMS COVER</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Website use, not purchased services.
          </h2>
        </div>

        {/* Highlighted Callout Box with Blue Left Border */}
        <div className="relative bg-[#E0F2FE]/50 border-l-4 border-[#0284C7] rounded-xl p-6 sm:p-7">
          <p className="text-xs sm:text-sm font-semibold text-[#0F172A] leading-relaxed">
            These Website Terms govern use of the public Zoiko Payroll website
            and the public-site features, content and context expressly covered
            by the approved scope below. They do not create service-level,
            contractual or purchase obligations on their own.
          </p>
        </div>

        {/* 3-Column Scope Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scopeCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-3 flex flex-col justify-start"
            >
              <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
                {card.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Disclaimer Text */}
        <p className="text-xs text-[#94A3B8] max-w-2xl leading-relaxed">
          Marketing claims, demos, forms, downloads and external links
          referenced on this website do not become contractual promises merely
          because they appear on the site.
        </p>
      </div>
    </section>
  );
}
