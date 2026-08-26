"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative w-full bg-gradient-to-b from-sky-950 to-sky-950 px-8 pt-16 pb-20">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-2.5">
        <div className="flex max-w-[900px] flex-col items-center gap-2 pt-[1.63px] pb-3.5">
          <SectionLabel color="light" slash>Global Payroll Coverage</SectionLabel>
          <div className="pt-[5.13px] text-center text-5xl font-extrabold leading-[58.28px] text-white">
            Check Payroll Availability by
            <br />
            Jurisdiction
          </div>
          <div className="max-w-[560px] pt-2 text-center text-base font-normal font-['Inter'] leading-6 text-slate-300">
            Search current Zoiko Payroll availability by country, territory, state or
            <br />
            province, then review the documented service model, effective date
            <br />
            and important boundaries before planning rollout.
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex w-[600px] max-w-[600px] items-start gap-2 rounded-2xl bg-white p-2 shadow-[0px_20px_50px_0px_rgba(8,47,73,0.16)]">
          <div className="flex flex-1 items-center px-4 py-3 gap-2">
            <Image
              src="/search.png"
              alt="Search"
              width={20}
              height={20}
              className="h-5 w-5 flex-shrink-0"
            />
            <input
              type="text"
              placeholder="Search a country, territory, state or province…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-sm leading-5 text-gray-400 outline-none placeholder:text-gray-400"
            />
          </div>
          <div className="flex items-center rounded-[10px] bg-gradient-to-b from-[#2E91D1] to-[#0B4E7D] px-5 py-3">
            <span className="text-sm font-bold leading-5 text-white">
              Check availability
            </span>
          </div>
        </div>

        <div className="pt-[0.75px] text-center">
          <span className="text-xs font-bold leading-5 text-slate-200">
            Current status first.
          </span>
          <span className="text-xs leading-5 text-slate-400">
            {" "}
            No personal data required to check public availability.
          </span>
        </div>
      </div>
    </section>
  );
}
