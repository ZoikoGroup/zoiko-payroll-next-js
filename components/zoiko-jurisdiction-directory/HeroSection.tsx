"use client";

import { useState } from "react";

export default function HeroSection() {
  const [search, setSearch] = useState("");

  return (
    <section className="relative w-full overflow-hidden bg-[#082F49] pt-14 pb-20 px-4 sm:px-6 lg:pl-40 lg:pr-24 font-['Segoe_UI',sans-serif]">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-right opacity-40 pointer-events-none mix-blend-luminosity" 
        style={{ backgroundImage: `url('/HERO.png')` }}
      />

      {/* Centered Main Container */}
      <div className="relative z-10 max-w-[1264px] w-full mx-auto flex flex-col justify-start items-start gap-10">
        
        {/* Main Content Stack */}
        <div className="max-w-[820px] flex flex-col justify-start items-start gap-3.5">
          {/* Eyebrow / Kicker */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#8FD0F2]">
            <span>/</span>
            <span>GLOBAL PAYROLL COVERAGE</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[49.28px] text-white whitespace-nowrap">
            Find payroll coverage by jurisdiction
          </h1>

          {/* Description */}
          <p className="max-w-[680px] text-base leading-7 text-[#C4D8E8] font-normal pt-1 pb-2">
            Search countries and territories to see available payroll capabilities, delivery models, local<br className="hidden sm:inline" />
            guidance, and important coverage conditions — all from one governed directory.
          </p>

          {/* Search Bar */}
          <div className="max-w-[700px] w-full flex items-center gap-2.5 rounded-xl bg-white pl-4 pr-2 py-2 shadow-[0px_1px_8px_rgba(10,22,38,0.05),0px_1px_2px_rgba(10,22,38,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200">
            <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden shrink-0">
              <svg
                className="h-5 w-5 text-slate-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.58"
              >
                <circle cx="8" cy="8" r="5.5" />
                <path d="M12 12L16 16" strokeLinecap="round" />
              </svg>
            </div>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g., United States, UK, India, CA, Europe"
              className="flex-1 py-2.5 text-base text-slate-800 placeholder:text-slate-400 font-normal bg-transparent outline-none"
            />
            <button className="rounded-[10px] bg-[linear-gradient(66deg,#117DC5_0%,#2C90D0_100%)] px-5 py-3 text-base font-bold text-white shadow-[0px_4px_14px_rgba(12,71,115,0.28)] shrink-0 hover:opacity-90 transition-opacity">
              Search
            </button>
          </div>
        </div>

        {/* Feature Chips */}
        <div className="max-w-[648px] w-full pt-1.5 border-t border-[#0A3D5E] flex flex-wrap items-center gap-8">
          <div className="flex h-4 items-center gap-2">
            <img src="/SVG (29).png" alt="Capability-specific" className="h-4 w-4 object-contain" />
            <span className="text-sm font-bold text-white">Capability-specific</span>
          </div>

          <div className="flex h-4 items-center gap-2">
            <img src="/SVG (30).png" alt="Effective-dated" className="h-4 w-4 object-contain" />
            <span className="text-sm font-bold text-white">Effective-dated</span>
          </div>

          <div className="flex h-4 items-center gap-2">
            <img src="/SVG (25).png" alt="Delivery model disclosed" className="h-4 w-4 object-contain" />
            <span className="text-sm font-bold text-white">Delivery model disclosed</span>
          </div>
        </div>

      </div>
    </section>
  );
}