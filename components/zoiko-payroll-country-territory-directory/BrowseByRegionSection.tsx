"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const regions = [
  "Asia Pacific",
  "Europe",
  "Latin America",
  "Middle East & Africa",
  "North America",
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function BrowseByRegionSection() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const handleRegionClick = (region: string) => {
    setSelectedRegion((prev) => (prev === region ? null : region));
    setSelectedLetter(null);
  };

  const handleLetterClick = (letter: string) => {
    setSelectedLetter((prev) => (prev === letter ? null : letter));
    setSelectedRegion(null);
  };

  return (
    <section className="w-full max-w-full min-w-0 overflow-hidden bg-[#EFF4F8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px] min-w-0">
        {/* Header */}
        <Reveal>
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A78C2]">
              / BROWSE BY REGION & A–Z
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl lg:text-[34px]">
              Don&apos;t know the exact name? Browse
              <br className="hidden sm:inline" /> instead.
            </h2>
          </div>
        </Reveal>

        {/* Region Buttons */}
        <Reveal delay={80}>
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5 sm:gap-3">
            {regions.map((region) => {
              const isActive = selectedRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => handleRegionClick(region)}
                  className={`flex items-center justify-center rounded-xl border px-3 py-3 text-center text-xs font-bold transition-all shadow-2xs sm:px-4 sm:py-3.5 sm:text-sm ${
                    isActive
                      ? "border-[#0A78C2] bg-white text-[#0A78C2] ring-2 ring-[#0A78C2]/20"
                      : "border-slate-200/90 bg-white text-slate-800 hover:border-[#0A78C2] hover:text-[#0A78C2]"
                  }`}
                >
                  {region}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Alphabet Bar */}
        <Reveal delay={140}>
          <div className="mt-4 flex flex-wrap items-center justify-start gap-1.5 sm:justify-between sm:gap-2">
            {alphabet.map((letter) => {
              const isActive = selectedLetter === letter;
              return (
                <button
                  key={letter}
                  type="button"
                  onClick={() => handleLetterClick(letter)}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-semibold transition-all shadow-2xs sm:h-9 sm:w-9 sm:text-[13px] ${
                    isActive
                      ? "border-[#0A78C2] bg-[#0A78C2] text-white"
                      : "border-slate-200/90 bg-white text-slate-700 hover:border-[#0A78C2] hover:text-[#0A78C2] hover:bg-slate-50"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
