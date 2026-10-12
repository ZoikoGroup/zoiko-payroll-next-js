"use client";

import React from "react";

export default function BackupDrSupportAccessSection() {
  const cards = [
    {
      title: "Primary storage",
      subtitle: "Per service registry",
      description:
        "Defined dataset at rest, per the region availability registry above.",
    },
    {
      title: "Backup / DR",
      subtitle: "Disclosed by scope",
      description:
        "Replicas or recovery copies may exist in a secondary region.",
    },
  ];

  return (
    <div className="w-full bg-[#F9FAFB] text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-12">
        {/* Top Split Layout: Text Content & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Block */}
          <div className="space-y-6 text-left">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                BACKUP, DR & SUPPORT ACCESS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              Primary storage and recovery copies may differ
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl">
              Replicas, archives and disaster-recovery locations are disclosed
              separately by scope. Business Continuity owns recovery objectives{" "}
              <span className="text-slate-400 font-bold">—</span> this page
              explains geographic scope only.
            </p>
          </div>

          {/* Right Image Container */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/images/residency/bg.png"
              alt="Team analyzing charts and data on a monitor"
              className="w-full h-auto object-cover aspect-[14/10]"
            />
          </div>
        </div>

        {/* Bottom 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/85 rounded-3xl p-8 shadow-xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {card.title}
                </span>
                <h3 className="text-base font-extrabold text-[#07243B]">
                  {card.subtitle}
                </h3>
              </div>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Subtext */}
        <p className="text-[11px] sm:text-xs text-slate-500 font-medium text-center max-w-4xl mx-auto leading-relaxed pt-2">
          Support or administrative access may occur from approved additional
          locations, shown as a separate connected layer{" "}
          <span className="text-slate-400 font-bold">—</span> recovery geography
          stays residency-relevant even when primary storage doesn&apos;t
          change.
        </p>
      </section>
    </div>
  );
}
