"use client";

import React from "react";

interface CommercialLayer {
  number: string;
  title: string;
  description: string;
  tag: string;
  tagColor: string;
}

const commercialLayers: CommercialLayer[] = [
  {
    number: "1",
    title: "Plan capacity",
    description:
      "Licensed scale and maximum production jurisdiction allowance.",
    tag: "Recurring plan",
    tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
  },
  {
    number: "2",
    title: "Worker-month usage",
    description: "In-scope billable workers across licensed payroll units.",
    tag: "Recurring BWM",
    tagColor: "bg-sky-50 text-sky-700 border border-sky-200/60",
  },
  {
    number: "3",
    title: "Jurisdiction activation",
    description: "Work to make a new country or territory production-ready.",
    tag: "One-time",
    tagColor: "bg-amber-50 text-amber-700 border border-amber-200/60",
  },
  {
    number: "4",
    title: "Local recurring services",
    description:
      "Managed payroll, filings, remittances and premium local support.",
    tag: "Recurring add-on",
    tagColor: "bg-purple-50 text-purple-700 border border-purple-200/60",
  },
  {
    number: "5",
    title: "External / local costs",
    description:
      "Bank, authority, provider or FX pass-through costs where applicable.",
    tag: "Third-party",
    tagColor: "bg-slate-100 text-slate-600 border border-slate-200/60",
  },
];

export default function CommercialModelSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                THE COMMERCIAL MODEL
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-2xl font-extrabold text-[#07243B] tracking-tight">
              Five layers — never collapsed into one country fee.
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1 max-w-xs md:text-right">
            Every jurisdiction-related charge is explainable as one of these.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {commercialLayers.map((layer, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors"
            >
              {/* Top Section: Number & Title & Description */}
              <div className="space-y-4">
                <span className="w-7 h-7 rounded-lg bg-[#2A87C8] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                  {layer.number}
                </span>

                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-[#07243B]">
                    {layer.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${layer.tagColor}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                  {layer.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
