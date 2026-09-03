"use client";

import React from "react";
import Image from "next/image";

const integrationTags = [
  "HR",
  "Time",
  "Finance / GL",
  "Identity / SSO",
  "API",
  "SFTP",
];

const dropdownFilters = ["Entity", "Jurisdiction", "Delivery Model"];

export default function IntegrationsMultiEntitySection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Split Layout: Image + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full aspect-[16/10] sm:aspect-[9/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/admin/3.png"
                alt="Team collaborating in a modern office meeting space"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Text Content & Integration Tags */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
              <span>/</span>
              <span>INTEGRATIONS & MULTI-ENTITY ROUTING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-[1px] text-[#07243B] leading-tight">
              Provider responsibility stays visible — never assumed as
              Zoiko&apos;s
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed tracking-[1px] max-w-xl">
              Global routing captures your authorized entity, jurisdiction and
              delivery model before a case opens, so it reaches the right owner
              immediately.
            </p>

            {/* Integration Tags Row */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {integrationTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white hover:bg-slate-50 text-[#07243B] text-xs font-semibold px-4 py-2 rounded-full border border-slate-200/80 shadow-2xs tracking-[1px] cursor-default transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Dropdown Filters Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          {dropdownFilters.map((filter, idx) => (
            <div
              key={idx}
              className="bg-white hover:bg-slate-50 text-[#07243B] text-xs font-semibold px-4 py-2 rounded-full border border-slate-200/80 shadow-2xs flex items-center gap-1.5 cursor-pointer tracking-[1px] transition-all"
            >
              <span>{filter}</span>
              <span className="text-slate-400 text-[10px]">▾</span>
            </div>
          ))}
        </div>

        {/* Bottom Callout Note */}
        <div className="bg-white rounded-xl border-l-4 border-l-[#0A8FD0] border border-slate-200/80 p-4 sm:p-5 shadow-2xs flex items-center gap-4">
          <p className="text-xs sm:text-sm text-slate-600 font-medium tracking-[1px] leading-relaxed">
            <strong className="font-bold text-[#07243B]">
              Connected / partner-supported cases
            </strong>{" "}
            identify the provider&apos;s responsibility and any external
            dependencies explicitly. Never request API keys, passwords or
            secrets in ordinary case text.
          </p>
        </div>
      </div>
    </section>
  );
}
