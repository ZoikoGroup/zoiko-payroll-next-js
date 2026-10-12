"use client";

import React, { useState } from "react";

const filterPills = [
  "All topics",
  "Implementation",
  "Reporting",
  "Global payroll",
  "Live",
  "On demand",
  "This month",
];

export default function FindASessionSection() {
  const [activeFilter, setActiveFilter] = useState("All topics");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="space-y-3 text-center">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              FIND A SESSION
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            Search and filter approved sessions
          </h2>
        </div>

        {/* Search Card Container */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
          {/* Input & Search Button Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Search by title, topic or speaker"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#07243B] placeholder-slate-400 focus:outline-hidden focus:border-[#3D9BD6] transition-colors"
              />
            </div>
            <button
              type="button"
              className="w-full sm:w-auto bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] hover:opacity-95 text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-xl transition-opacity cursor-pointer shrink-0"
            >
              Search
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {filterPills.map((pill) => {
              const isActive = activeFilter === pill;
              return (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActiveFilter(pill)}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#07243B] text-white"
                      : "bg-[#EBF3FB] text-[#07243B] hover:bg-slate-200/70"
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
