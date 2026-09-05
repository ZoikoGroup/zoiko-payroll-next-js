"use client";

import React from "react";
import Image from "next/image";

export default function GlobalCoverageSection() {
  const regions = [
    { name: "United Kingdom", status: "Healthy" },
    { name: "United States", status: "Watch" },
    { name: "Germany", status: "At risk" },
    { name: "India", status: "Healthy" },
    { name: "Singapore", status: "Available" },
    { name: "Brazil", status: "Partner-supported" },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Category Label */}
        <p className="text-xs font-semibold text-[#3B82F6] tracking-wide mb-3">
          Global coverage
        </p>

        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-12 max-w-xl">
          Global account view. Local payroll truth.
        </h2>

        {/* Dark Container / Map Window */}
        <div className="w-full bg-gradient-to-r from-[#0F172A] to-[#111F3F] rounded-3xl p-6 md:p-10 shadow-2xl relative border border-[#1E293B] overflow-hidden flex flex-col items-center justify-center min-h-[380px] sm:min-h-[670px]">
          {/* World Map Graphic / Background Image */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/customer/2.png"
              alt="Global coverage map graphic"
              fill
              className="object-cover opacity-60 object-top"
            />
          </div>

          {/* Region Status Pill Overlay Tags */}
          <div className="relative z-10 mt-auto pt-40 sm:pt-60 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl">
            {regions.map((region, idx) => (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md flex items-center gap-2"
              >
                {/* Glowing Dot Indicator */}
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />

                {/* Country Name & Status */}
                <span className="text-xs font-semibold text-[#0B192C]">
                  {region.name}{" "}
                  <span className="text-[#64748B] font-normal">
                    · {region.status}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
