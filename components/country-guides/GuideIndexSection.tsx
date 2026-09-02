"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

interface GuideItem {
  code: string;
  codeBg: string;
  country: string;
  region: string;
  reviewedDate: string;
  status: "Reviewed" | "Update in progress" | "Partial guide" | "Planned";
}

const guideList: GuideItem[] = [
  {
    code: "US",
    codeBg: "bg-[#1E3A8A]",
    country: "United States",
    region: "Country · Americas",
    reviewedDate: "Jul 14, 2026",
    status: "Reviewed",
  },
  {
    code: "GB",
    codeBg: "bg-[#0F172A]",
    country: "United Kingdom",
    region: "Country · Europe",
    reviewedDate: "Jun 30, 2026",
    status: "Reviewed",
  },
  {
    code: "DE",
    codeBg: "bg-[#27272A]",
    country: "Germany",
    region: "Country · Europe",
    reviewedDate: "May 22, 2026",
    status: "Update in progress",
  },
  {
    code: "SG",
    codeBg: "bg-[#991B1B]",
    country: "Singapore",
    region: "Country · Asia-Pacific",
    reviewedDate: "Jul 02, 2026",
    status: "Reviewed",
  },
  {
    code: "BR",
    codeBg: "bg-[#065F46]",
    country: "Brazil",
    region: "Country · Americas",
    reviewedDate: "Apr 09, 2026",
    status: "Partial guide",
  },
  {
    code: "JP",
    codeBg: "bg-[#831843]",
    country: "Japan",
    region: "Country · Asia-Pacific",
    reviewedDate: "Jun 11, 2026",
    status: "Reviewed",
  },
  {
    code: "MX",
    codeBg: "bg-[#047857]",
    country: "Mexico",
    region: "Country · Americas",
    reviewedDate: "Mar 18, 2026",
    status: "Reviewed",
  },
  {
    code: "FR",
    codeBg: "bg-[#1D4ED8]",
    country: "France",
    region: "Country · Europe",
    reviewedDate: "Jul 21, 2026",
    status: "Reviewed",
  },
  {
    code: "IN",
    codeBg: "bg-[#D97706]",
    country: "India",
    region: "Country · Asia-Pacific",
    reviewedDate: "Feb 27, 2026",
    status: "Planned",
  },
  {
    code: "CA",
    codeBg: "bg-[#B91C1C]",
    country: "Canada",
    region: "Country · Americas",
    reviewedDate: "Jul 05, 2026",
    status: "Reviewed",
  },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GuideIndexSection() {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([
    "Americas",
  ]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedFreshness, setSelectedFreshness] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["Country"]);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const toggleFilter = (
    value: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  const getBadgeStyle = (status: GuideItem["status"]) => {
    switch (status) {
      case "Reviewed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      case "Update in progress":
        return "bg-amber-50 text-amber-700 border-amber-200/60";
      case "Partial guide":
        return "bg-sky-50 text-sky-700 border-sky-200/60";
      case "Planned":
        return "bg-slate-100 text-slate-600 border-slate-200";
      default:
        return "bg-slate-50 text-slate-600 border-slate-200";
    }
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A] overflow-hidden">
      {/* Background Pattern Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <Image
          src="/images/country-guides/2.png"
          alt="Background pattern"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>ALL GUIDES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Search the complete guide index.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Filter by region, payroll topic, freshness, jurisdiction type or
            published language.
          </p>
        </div>

        {/* Content Layout: Sidebar + Guide Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Filters */}
          <div className="lg:col-span-3 bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-6">
            <div className="text-xs font-bold text-[#07243B] tracking-wider uppercase font-mono border-b border-slate-100 pb-3">
              Filters
            </div>

            {/* Region */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-[#07243B] block">
                Region
              </span>
              {[
                "Americas",
                "Europe",
                "Asia-Pacific",
                "Middle East & Africa",
                "Caribbean",
              ].map((region) => (
                <label
                  key={region}
                  className="flex items-center gap-2.5 text-xs font-medium text-slate-600 cursor-pointer select-none hover:text-[#07243B]"
                >
                  <input
                    type="checkbox"
                    checked={selectedRegions.includes(region)}
                    onChange={() =>
                      toggleFilter(region, selectedRegions, setSelectedRegions)
                    }
                    className="w-3.5 h-3.5 rounded text-[#0A8FD0] focus:ring-0 cursor-pointer accent-[#0A8FD0]"
                  />
                  <span>{region}</span>
                </label>
              ))}
            </div>

            {/* Guide topic */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-[#07243B] block">
                Guide topic
              </span>
              {[
                "Payroll cycle",
                "Taxes & contributions",
                "Filings",
                "Payments",
                "Year-end",
              ].map((topic) => (
                <label
                  key={topic}
                  className="flex items-center gap-2.5 text-xs font-medium text-slate-600 cursor-pointer select-none hover:text-[#07243B]"
                >
                  <input
                    type="checkbox"
                    checked={selectedTopics.includes(topic)}
                    onChange={() =>
                      toggleFilter(topic, selectedTopics, setSelectedTopics)
                    }
                    className="w-3.5 h-3.5 rounded text-[#0A8FD0] focus:ring-0 cursor-pointer accent-[#0A8FD0]"
                  />
                  <span>{topic}</span>
                </label>
              ))}
            </div>

            {/* Freshness */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-[#07243B] block">
                Freshness
              </span>
              {["Recently reviewed", "Material update posted"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2.5 text-xs font-medium text-slate-600 cursor-pointer select-none hover:text-[#07243B]"
                >
                  <input
                    type="checkbox"
                    checked={selectedFreshness.includes(item)}
                    onChange={() =>
                      toggleFilter(
                        item,
                        selectedFreshness,
                        setSelectedFreshness,
                      )
                    }
                    className="w-3.5 h-3.5 rounded text-[#0A8FD0] focus:ring-0 cursor-pointer accent-[#0A8FD0]"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>

            {/* Jurisdiction type */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-[#07243B] block">
                Jurisdiction type
              </span>
              {["Country", "Territory", "Sub-jurisdiction"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2.5 text-xs font-medium text-slate-600 cursor-pointer select-none hover:text-[#07243B]"
                >
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() =>
                      toggleFilter(type, selectedTypes, setSelectedTypes)
                    }
                    className="w-3.5 h-3.5 rounded text-[#0A8FD0] focus:ring-0 cursor-pointer accent-[#0A8FD0]"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Main Table / Directory List */}
          <div className="lg:col-span-9 space-y-4">
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-100/70 p-3 px-4 rounded-xl text-xs">
              <span className="font-bold text-[#07243B]">
                128 published guides
              </span>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <div className="relative">
                  <select className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-[#07243B] appearance-none pr-7 cursor-pointer focus:outline-none">
                    <option>Sort: A–Z</option>
                    <option>Sort: Z–A</option>
                    <option>Sort: Recently Reviewed</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Alphabet Filter Bar */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-between overflow-x-auto gap-1 text-xs font-semibold text-slate-400">
              {alphabet.map((char) => {
                const isActive =
                  activeLetter === char || (char === "A" && !activeLetter);
                const isHighlight = ["A", "C", "E", "G", "J", "S"].includes(
                  char,
                );
                return (
                  <button
                    key={char}
                    onClick={() => setActiveLetter(char)}
                    className={`px-1.5 py-0.5 rounded hover:text-[#0A8FD0] transition-colors ${
                      isActive
                        ? "bg-[#E3F2FD] text-[#0A8FD0] font-bold"
                        : isHighlight
                          ? "text-[#0A8FD0] font-bold"
                          : ""
                    }`}
                  >
                    {char}
                  </button>
                );
              })}
            </div>

            {/* Guides Index List */}
            <div className="bg-white border border-slate-200/80 rounded-2xl divide-y divide-slate-100 overflow-hidden shadow-2xs">
              {guideList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                >
                  {/* Country Info */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg ${item.codeBg} text-white font-bold text-xs flex items-center justify-center shrink-0 font-mono`}
                    >
                      {item.code}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#07243B]">
                        {item.country}
                      </h3>
                      <div className="text-[11px] text-slate-400 font-medium">
                        {item.region}
                      </div>
                    </div>
                  </div>

                  {/* Status, Date & Actions */}
                  <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3 sm:gap-6 text-xs">
                    <span className="text-[11px] text-slate-400 font-medium">
                      Reviewed {item.reviewedDate}
                    </span>

                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getBadgeStyle(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>

                    <div className="flex items-center gap-4 pt-1 sm:pt-0">
                      <button className="text-[#07243B] hover:text-[#0A8FD0] font-bold transition-colors flex items-center gap-1">
                        <span>View guide</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                      <button className="text-[#0A8FD0] hover:underline font-semibold text-[11px]">
                        Coverage
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
