"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface RegionData {
  region: string;
  count: string;
  countries: string[];
  linkText: string;
}

const regionsData: RegionData[] = [
  {
    region: "Americas",
    count: "14 published guides",
    countries: ["United States", "Canada", "Brazil"],
    linkText: "Browse Americas guides",
  },
  {
    region: "Europe",
    count: "22 published guides",
    countries: ["United Kingdom", "Germany", "France"],
    linkText: "Browse Europe guides",
  },
  {
    region: "Asia-Pacific",
    count: "11 published guides",
    countries: ["Singapore", "Japan", "India"],
    linkText: "Browse Asia-Pacific guides",
  },
  {
    region: "Middle East & Africa",
    count: "6 published guides",
    countries: ["United Arab Emirates", "South Africa", "Saudi Arabia"],
    linkText: "Browse MEA guides",
  },
  {
    region: "Caribbean",
    count: "3 published guides",
    countries: ["Jamaica", "Bahamas", "Trinidad & Tobago"],
    linkText: "Browse Caribbean guides",
  },
];

export default function BrowseByRegionSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>BROWSE BY REGION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Find guides by part of the world.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Regional counts reflect currently published guides, not commercially
            supported jurisdictions.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x divide-slate-200 border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-2xs">
          {regionsData.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between">
              {/* Header Box */}
              <div className="bg-[#0E2A47] text-white p-5 text-center space-y-1">
                <h3 className="text-base font-bold tracking-tight">
                  {item.region}
                </h3>
                <p className="text-[11px] text-slate-300 font-medium">
                  ( {item.count} )
                </p>
              </div>

              {/* Country List */}
              <div className="p-6 space-y-3 bg-white flex-1 flex flex-col justify-center">
                <ul className="space-y-2.5">
                  {item.countries.map((country, cIdx) => (
                    <li
                      key={cIdx}
                      className="text-xs font-semibold text-slate-700 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0" />
                      <span>{country}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link Footer */}
              <div className="p-4 pt-2 bg-white border-t border-slate-100">
                <button className="w-full text-left text-[11px] font-bold text-[#0A8FD0] hover:text-[#076BA0] transition-colors flex items-center justify-between group">
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
