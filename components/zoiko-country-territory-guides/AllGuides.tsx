"use client";

import { useState } from "react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const allGuides = [
  { code: "US", name: "United States", region: "Country · Americas", color: "bg-[#1B6EB5]", reviewDate: "Reviewed Jul 14, 2026", status: "Reviewed" },
  { code: "GB", name: "United Kingdom", region: "Country · Europe", color: "bg-[#2563EB]", reviewDate: "Reviewed Jun 30, 2026", status: "Reviewed" },
  { code: "DE", name: "Germany", region: "Country · Europe", color: "bg-[#475569]", reviewDate: "Reviewed May 22, 2026", status: "Update in progress" },
  { code: "SG", name: "Singapore", region: "Country · Asia-Pacific", color: "bg-[#DC2626]", reviewDate: "Reviewed Jul 02, 2026", status: "Reviewed" },
  { code: "BR", name: "Brazil", region: "Country · Americas", color: "bg-[#16A34A]", reviewDate: "Reviewed Apr 09, 2026", status: "Partial guide" },
  { code: "JP", name: "Japan", region: "Country · Asia-Pacific", color: "bg-[#BE123C]", reviewDate: "Reviewed Jun 11, 2026", status: "Reviewed" },
  { code: "MX", name: "Mexico", region: "Country · Americas", color: "bg-[#15803D]", reviewDate: "Reviewed Mar 18, 2026", status: "Reviewed" },
  { code: "FR", name: "France", region: "Country · Europe", color: "bg-[#3B82F6]", reviewDate: "Reviewed Jul 21, 2026", status: "Reviewed" },
  { code: "IN", name: "India", region: "Country · Asia-Pacific", color: "bg-[#EA580C]", reviewDate: "Reviewed Feb 27, 2026", status: "Planned" },
  { code: "CA", name: "Canada", region: "Country · Americas", color: "bg-[#B91C1C]", reviewDate: "Reviewed Jul 05, 2026", status: "Reviewed" },
];

const statusStyles: Record<string, { bg: string; text: string }> = {
  Reviewed: { bg: "bg-[#ECFDF5]", text: "text-[#047857]" },
  "Update in progress": { bg: "bg-[#FFF7ED]", text: "text-[#C2410C]" },
  "Partial guide": { bg: "bg-[#FEF9C3]", text: "text-[#A16207]" },
  Planned: { bg: "bg-[#F0F9FF]", text: "text-[#0369A1]" },
};

const regionFilters = ["Americas", "Europe", "Asia-Pacific", "Middle East & Africa", "Caribbean"];
const topicFilters = ["Payroll cycle", "Taxes & contributions", "Filings", "Payments", "Year-end"];
const freshnessFilters = ["Recently reviewed", "Material update posted"];
const typeFilters = ["Country", "Territory", "Sub-jurisdiction"];

export default function AllGuides() {
  const [selectedRegions, setSelectedRegions] = useState<string[]>(["Americas"]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["Country"]);

  const toggleFilter = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    if (list.includes(value)) {
      setList(list.filter((v) => v !== value));
    } else {
      setList([...list, value]);
    }
  };

  return (
    <section className="w-full bg-[#F5F8FA] py-20">
      <div className="w-full max-w-[1440px] mx-auto pl-10 pr-6 sm:pl-20 sm:pr-12 lg:pl-40 lg:pr-24 flex flex-col gap-10">
        {/* Header */}
        <div className="max-w-[640px] flex flex-col gap-3.5">
          <div className="relative h-3.5">
            <div className="w-1.5 h-3.5 absolute left-[-1.48px] top-0 bg-sky-600 rounded-[1px]" />
            <div className="absolute left-[11px] top-0 text-sky-600 text-xs font-bold font-['Inter'] uppercase tracking-wide">
              ALL GUIDES
            </div>
          </div>
          <h2 className="text-[#082F49] text-3xl font-bold font-['Inter'] leading-10">
            Search the complete guide index.
          </h2>
          <p className="text-[#4E6172] text-base font-normal font-['Inter'] leading-6">
            Filter by region, payroll topic, freshness, jurisdiction type or published language.
          </p>
        </div>

        {/* Content */}
        <div className="w-full max-w-[1116px] flex gap-8">
          {/* Filter Sidebar */}
          <div className="w-64 px-5 pt-5 pb-8 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex flex-col gap-4 shrink-0">
            <div className="text-[#082F49] text-xs font-bold font-['Inter'] uppercase tracking-wide">
              Filters
            </div>

            {/* Region */}
            <div className="flex flex-col gap-2">
              <span className="text-[#082F49] text-xs font-bold font-['Inter']">Region</span>
              {regionFilters.map((region) => (
                <label key={region} className="pl-1 flex items-center gap-3 cursor-pointer">
                  <div
                    className={`w-3.5 h-3.5 rounded-xs ${
                      selectedRegions.includes(region)
                        ? "bg-sky-600"
                        : "bg-white border border-[#CBD5E1]"
                    }`}
                    onClick={() => toggleFilter(selectedRegions, setSelectedRegions, region)}
                  />
                  <span className="text-[#4E6172] text-xs font-normal font-['Inter']">
                    {region}
                  </span>
                </label>
              ))}
            </div>

            {/* Guide Topic */}
            <div className="flex flex-col gap-2">
              <span className="text-[#082F49] text-xs font-bold font-['Inter']">Guide topic</span>
              {topicFilters.map((topic) => (
                <div key={topic} className="pl-1 flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-xs bg-white border border-[#CBD5E1]" />
                  <span className="text-[#4E6172] text-xs font-normal font-['Inter']">
                    {topic}
                  </span>
                </div>
              ))}
            </div>

            {/* Freshness */}
            <div className="flex flex-col gap-2">
              <span className="text-[#082F49] text-xs font-bold font-['Inter']">Freshness</span>
              {freshnessFilters.map((f) => (
                <div key={f} className="pl-1 flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-xs bg-white border border-[#CBD5E1]" />
                  <span className="text-[#4E6172] text-xs font-normal font-['Inter']">{f}</span>
                </div>
              ))}
            </div>

            {/* Jurisdiction Type */}
            <div className="flex flex-col gap-2">
              <span className="text-[#082F49] text-xs font-bold font-['Inter']">
                Jurisdiction type
              </span>
              {typeFilters.map((type) => (
                <label key={type} className="pl-1 flex items-center gap-3 cursor-pointer">
                  <div
                    className={`w-3.5 h-3.5 rounded-xs ${
                      selectedTypes.includes(type)
                        ? "bg-sky-600"
                        : "bg-white border border-[#CBD5E1]"
                    }`}
                    onClick={() => toggleFilter(selectedTypes, setSelectedTypes, type)}
                  />
                  <span className="text-[#4E6172] text-xs font-normal font-['Inter']">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Guide List */}
          <div className="flex-1 bg-white rounded-xl shadow-[0px_1px_8px_0px_rgba(8,47,73,0.05)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.06)] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-5 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0] flex justify-between items-center">
              <span className="text-[#4E6172] text-xs font-bold font-['Inter']">
                128 published guides
              </span>
              <div className="pl-4 pr-7 py-2 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-[#E2E8F0]">
                <span className="text-[#082F49] text-xs font-bold font-['Arial'] leading-4">
                  Sort: A–Z
                </span>
              </div>
            </div>

            {/* Alphabet Index */}
            <div className="px-5 py-3.5 border-b border-[#E2E8F0] flex flex-wrap gap-0.5">
              {alphabet.map((letter) => {
                const hasGuides = allGuides.some(
                  (g) => g.name.charAt(0).toUpperCase() === letter
                );
                return (
                  <div
                    key={letter}
                    className={`w-6 h-6 rounded-md flex items-center justify-center ${
                      hasGuides
                        ? "bg-[#F1F5F9] text-sky-600"
                        : "text-[#64748B]"
                    }`}
                  >
                    <span className="text-xs font-bold font-['Inter']">{letter}</span>
                  </div>
                );
              })}
            </div>

            {/* Guide Rows */}
            {allGuides.map((guide, idx) => {
              const statusStyle = statusStyles[guide.status] || statusStyles.Reviewed;
              return (
                <div
                  key={guide.code}
                  className={`px-5 py-4 flex items-center gap-4 ${
                    idx < allGuides.length - 1 ? "border-b border-[#E2E8F0]" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 ${guide.color} rounded-md flex items-center justify-center shrink-0`}
                  >
                    <span className="text-white text-xs font-bold font-['Inter'] tracking-tight">
                      {guide.code}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <span className="text-[#082F49] text-sm font-bold font-['Inter']">
                      {guide.name}
                    </span>
                    <span className="pt-0.5 text-[#4E6172] text-xs font-normal font-['Inter']">
                      {guide.region}
                    </span>
                  </div>
                  <div className="w-36">
                    <span className="text-[#64748B] text-xs font-bold font-['Inter']">
                      {guide.reviewDate}
                    </span>
                  </div>
                  <div
                    className={`px-2.5 py-1 ${statusStyle.bg} rounded-full shrink-0`}
                  >
                    <span
                      className={`${statusStyle.text} text-xs font-bold font-['Inter'] tracking-tight`}
                    >
                      {guide.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-[#082F49] text-xs font-bold font-['Inter']">
                      View guide →
                    </span>
                    <span className="text-sky-600 text-xs font-bold font-['Inter']">
                      Coverage
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
