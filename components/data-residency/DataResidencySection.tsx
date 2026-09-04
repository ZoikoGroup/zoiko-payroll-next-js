"use client";

import React from "react";
import Image from "next/image";

export default function DataResidencySection() {
  const cards = [
    {
      category: "PRIMARY STORAGE",
      title: "Per service registry",
    },
    {
      category: "PROCESSING SCOPE",
      title: "Per service registry",
    },
    {
      category: "BACKUP / DR",
      title: "Disclosed by scope",
    },
    {
      category: "TRANSFERS",
      title: "Governed by DPA",
    },
  ];

  return (
    <div className="w-full bg-white text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-12">
        {/* Top Split: Content & Hero Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                DATA RESIDENCY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              Know exactly where your payroll data lives, and why
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              See where payroll data may be stored, processed, backed up,
              accessed and transferred. Availability and commitments vary by
              product, service, tenant and contract{" "}
              <span className="text-slate-400">—</span> the DPA and your
              executed contract remain authoritative.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-6 py-3 bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#165f95] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer">
                View residency options
              </button>

              <button className="px-6 py-3 bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200/80 text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-all cursor-pointer">
                Open Data Processing Addendum
              </button>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-6">
            <div className="p-3 rounded-3xl">
              <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden">
                <Image
                  src="/images/residency/hero.png"
                  alt="Data Residency Dashboard Analysis"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs space-y-2 flex flex-col justify-between"
            >
              <h4 className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-slate-400 uppercase">
                {card.category}
              </h4>
              <h3 className="text-sm sm:text-base font-extrabold text-[#07243B]">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
