"use client";

import React from "react";

const SCOPE_CARDS = [
  {
    title: "Jurisdiction",
    description:
      "Canonical ID, availability state reference, service model, effective scope, local owner.",
  },
  {
    title: "Entity",
    description:
      "Legal entity, employer/payroll role, jurisdiction, authority group, exclusions.",
  },
  {
    title: "Payroll group",
    description:
      "Frequency, calendar, population, currency, provider, processing model.",
  },
  {
    title: "Population",
    description:
      "Categories, count range, source system, effective date, privacy classification.",
  },
  {
    title: "Data / history",
    description:
      "Classes, history period, purpose, retention, transfer and storage handling.",
  },
  {
    title: "Change control",
    description:
      "Every material scope change creates a new version; prior approved manifests stay inspectable.",
  },
];

export default function ScopeManifestSection() {
  return (
    <section className="w-full bg-[#E9F0F8] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Hero Layout: Image + Text Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Image Card with Text Overlay */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-sm group">
            <img
              src="/images/implementation-migration/left.png"
              alt="Discovery workshop"
              className="w-full object-cover block"
            />
            {/* Gradient Overlay for Text Visibility */}
            
          </div>

          {/* Right Header Text Content */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
              <span>/</span>
              <span>Scope Manifest + Discovery / Design</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1928] leading-tight">
              The canonical boundary for the program
            </h2>
            <p className="text-base sm:text-lg text-[#5C6E7E] leading-relaxed">
              Discovery resolves availability, service model, entities,
              populations, current payroll, systems, data, governance and
              constraints before design begins.
            </p>
          </div>
        </div>

        {/* 3x2 Grid of Scope Specification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          {SCOPE_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#E1E8ED] rounded-2xl p-6 shadow-sm flex flex-col hover:border-[#0281D3] transition-colors"
            >
              <div>
                <h3 className="text-[13.5px] font-bold text-[#0A1928]">
                  {card.title}
                </h3>
                <p className="text-[12.5px] text-[#5C6E7E] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
