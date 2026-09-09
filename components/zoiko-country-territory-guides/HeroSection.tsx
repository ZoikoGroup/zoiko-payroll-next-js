"use client";

import { useState } from "react";
import Image from "next/image";

export default function PayrollGuidesHero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="w-full bg-gradient-to-b from-[#F1F5F9] to-[#F8FAFC] py-16 lg:py-20 font-['Inter',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-40 flex flex-col lg:flex-row items-center justify-start gap-6 lg:gap-2">
        
        {/* Left Column: Information & Search */}
        <div className="w-full lg:max-w-[760px] flex flex-col items-start gap-3.5 shrink-0">
          
          {/* Eyebrow / Kicker */}
          <div className="flex items-center gap-1.5 text-[#0A78C3] text-xs font-bold tracking-wide uppercase">
            <span>/</span>
            <span>GLOBAL PAYROLL GUIDES</span>
          </div>

          {/* Heading */}
          <h1 className="w-full text-[#0A1626] text-4xl sm:text-5xl font-bold leading-tight sm:leading-[49.28px]">
            Payroll guides by country<br />and territory.
          </h1>

          {/* Description */}
          <p className="w-full text-[#475569] text-base leading-7 font-normal max-w-[660px] pt-[3px] pb-1">
            Explore source-backed payroll guidance for countries and territories<br className="hidden sm:inline" />
            around the world, including payroll cycles, taxes and contributions,<br className="hidden sm:inline" />
            filings, payments, authorities, and year-end considerations.
          </p>

          {/* Search Input Bar */}
          <div className="w-full max-w-[620px] p-2 pl-5 bg-white rounded-lg shadow-[0px_1px_8px_rgba(8,47,73,0.05),0px_1px_2px_rgba(8,47,73,0.06)] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex items-center gap-3">
            <img 
              src="/SVG (33).png" 
              alt="Search" 
              className="w-4 h-4 object-contain shrink-0" 
            />
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by country, territory or ISO code — e.g. “Germany”"
              className="flex-1 text-xs text-[#0A1626] placeholder:text-[#64748B] bg-transparent outline-none py-1"
            />

            <button
              type="button"
              className="w-44 px-5 py-3 bg-gradient-to-r from-[#38BDF8] via-[#0A78C3] to-[#082F49] text-white text-sm font-bold rounded-lg hover:opacity-95 transition-opacity shrink-0 text-center"
            >
              Find a payroll guide
            </button>
          </div>

          {/* Informational Bullet Points */}
          <div className="w-full max-w-[660px] pt-2 border-t border-[#E2E8F0] flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img 
                src="/SVG (34).png" 
                alt="Informational" 
                className="w-4 h-4 object-contain shrink-0" 
              />
              <span className="text-[#64748B] text-xs font-bold font-['Inter']">
                Guide content is informational, effective-dated where applicable
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img 
                src="/SVG (35).png" 
                alt="Disclaimer" 
                className="w-4 h-4 object-contain shrink-0" 
              />
              <span className="text-[#64748B] text-xs font-bold font-['Inter']">
                Requirements change — verify with the cited authority or a qualified adviser
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Map Display */}
        <div className="relative w-full max-w-[480px] h-[496px] shrink-0 lg:-ml-[26px]">
          
          {/* Top Status Pill */}
          <div className="absolute top-[-25px] left-[15.6px] z-20 px-4 py-3 bg-white rounded-[10px] shadow-[0px_1px_8px_rgba(8,47,73,0.05),0px_1px_2px_rgba(8,47,73,0.06)] flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#10B981] rounded-full" />
            <span className="text-[#0A1626] text-xs font-bold font-['Inter']">
              128 jurisdictions covered
            </span>
          </div>

          {/* Map Image Container */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src="/00.png"
              alt="Global Payroll Coverage Map"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}