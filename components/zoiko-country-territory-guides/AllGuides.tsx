import React from "react";

export default function GuideIndex() {
  const regions = [
    { name: "Americas", checked: true },
    { name: "Europe", checked: false },
    { name: "Asia-Pacific", checked: false },
    { name: "Middle East & Africa", checked: false },
    { name: "Caribbean", checked: false },
  ];

  const topics = [
    { name: "Payroll cycle", checked: false },
    { name: "Taxes & contributions", checked: false },
    { name: "Filings", checked: false },
    { name: "Payments", checked: false },
    { name: "Year-end", checked: false },
  ];

  const freshness = [
    { name: "Recently reviewed", checked: false },
    { name: "Material update posted", checked: false },
  ];

  const jurisdictions = [
    { name: "Country", checked: true },
    { name: "Territory", checked: false },
    { name: "Sub-jurisdiction", checked: false },
  ];

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const activeLetters = ["A", "C", "E", "G", "J", "S"];

  const guides = [
    {
      code: "US",
      bg: "bg-[#1D4ED8]",
      title: "United States",
      subtitle: "Country · Americas",
      date: "Reviewed Jul 14, 2026",
      status: "Reviewed",
      statusStyle: "bg-[#ECFDF5] text-[#15803D]",
    },
    {
      code: "GB",
      bg: "bg-[#1E3A8A]",
      title: "United Kingdom",
      subtitle: "Country · Europe",
      date: "Reviewed Jun 30, 2026",
      status: "Reviewed",
      statusStyle: "bg-[#ECFDF5] text-[#15803D]",
    },
    {
      code: "DE",
      bg: "bg-[#334155]",
      title: "Germany",
      subtitle: "Country · Europe",
      date: "Reviewed May 22, 2026",
      status: "Update in progress",
      statusStyle: "bg-[#FEF3C7] text-[#D97706]",
    },
    {
      code: "SG",
      bg: "bg-[#DC2626]",
      title: "Singapore",
      subtitle: "Country · Asia-Pacific",
      date: "Reviewed Jul 02, 2026",
      status: "Reviewed",
      statusStyle: "bg-[#ECFDF5] text-[#15803D]",
    },
    {
      code: "BR",
      bg: "bg-[#15803D]",
      title: "Brazil",
      subtitle: "Country · Americas",
      date: "Reviewed Apr 09, 2026",
      status: "Partial guide",
      statusStyle: "bg-[#E0F2FE] text-[#0369A1]",
    },
    {
      code: "JP",
      bg: "bg-[#991B1B]",
      title: "Japan",
      subtitle: "Country · Asia-Pacific",
      date: "Reviewed Jun 11, 2026",
      status: "Reviewed",
      statusStyle: "bg-[#ECFDF5] text-[#15803D]",
    },
    {
      code: "MX",
      bg: "bg-[#0D9488]",
      title: "Mexico",
      subtitle: "Country · Americas",
      date: "Reviewed Mar 18, 2026",
      status: "Reviewed",
      statusStyle: "bg-[#ECFDF5] text-[#15803D]",
    },
    {
      code: "FR",
      bg: "bg-[#2563EB]",
      title: "France",
      subtitle: "Country · Europe",
      date: "Reviewed Jul 21, 2026",
      status: "Reviewed",
      statusStyle: "bg-[#ECFDF5] text-[#15803D]",
    },
    {
      code: "IN",
      bg: "bg-[#EA580C]",
      title: "India",
      subtitle: "Country · Asia-Pacific",
      date: "Reviewed Feb 27, 2026",
      status: "Planned",
      statusStyle: "bg-[#F1F5F9] text-[#475569]",
    },
    {
      code: "CA",
      bg: "bg-[#B91C1C]",
      title: "Canada",
      subtitle: "Country · Americas",
      date: "Reviewed Jul 05, 2026",
      status: "Reviewed",
      statusStyle: "bg-[#ECFDF5] text-[#15803D]",
    },
  ];

  return (
    <section className="w-full bg-white py-20 font-['Inter',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:pl-40 xl:pr-24 flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="max-w-[640px] flex flex-col gap-3.5">
          <div className="flex items-center gap-1.5 text-[#0284C7] text-xs font-bold uppercase tracking-wide">
            <span>/</span>
            <span>ALL GUIDES</span>
          </div>
          <h1 className="text-[#0A1626] text-3xl font-bold leading-10">
            Search the complete guide index.
          </h1>
          <p className="text-[#475569] text-base leading-6 font-normal">
            Filter by region, payroll topic, freshness, jurisdiction type or published language.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="max-w-[1116px] w-full flex flex-col lg:flex-row items-start gap-8">
          
          {/* Sidebar Filters Card */}
          <aside className="w-full lg:w-64 p-5 bg-white rounded-xl border border-[#EDEFF2] flex flex-col gap-4 shrink-0">
            <h2 className="text-[#0A1626] text-xs font-bold uppercase tracking-wide">
              FILTERS
            </h2>

            {/* Region Filter */}
            <div className="flex flex-col gap-2">
              <span className="text-[#0A1626] text-xs font-bold">Region</span>
              {regions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 py-0.5 cursor-pointer">
                  {item.checked ? (
                    <div className="w-3.5 h-3.5 bg-[#0284C7] rounded-[2px] shrink-0" />
                  ) : (
                    <div className="w-3.5 h-3.5 bg-white border border-[#94A3B8] rounded-[2px] shrink-0" />
                  )}
                  <span className="text-[#475569] text-xs font-normal">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Guide Topic Filter */}
            <div className="flex flex-col gap-2 pt-1.5">
              <span className="text-[#0A1626] text-xs font-bold">Guide topic</span>
              {topics.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 py-0.5 cursor-pointer">
                  {item.checked ? (
                    <div className="w-3.5 h-3.5 bg-[#0284C7] rounded-[2px] shrink-0" />
                  ) : (
                    <div className="w-3.5 h-3.5 bg-white border border-[#94A3B8] rounded-[2px] shrink-0" />
                  )}
                  <span className="text-[#475569] text-xs font-normal">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Freshness Filter */}
            <div className="flex flex-col gap-2 pt-1.5">
              <span className="text-[#0A1626] text-xs font-bold">Freshness</span>
              {freshness.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 py-0.5 cursor-pointer">
                  {item.checked ? (
                    <div className="w-3.5 h-3.5 bg-[#0284C7] rounded-[2px] shrink-0" />
                  ) : (
                    <div className="w-3.5 h-3.5 bg-white border border-[#94A3B8] rounded-[2px] shrink-0" />
                  )}
                  <span className="text-[#475569] text-xs font-normal">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Jurisdiction Type Filter */}
            <div className="flex flex-col gap-2 pt-1.5">
              <span className="text-[#0A1626] text-xs font-bold">Jurisdiction type</span>
              {jurisdictions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 py-0.5 cursor-pointer">
                  {item.checked ? (
                    <div className="w-3.5 h-3.5 bg-[#0284C7] rounded-[2px] shrink-0" />
                  ) : (
                    <div className="w-3.5 h-3.5 bg-white border border-[#94A3B8] rounded-[2px] shrink-0" />
                  )}
                  <span className="text-[#475569] text-xs font-normal">{item.name}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Right Main Table Card */}
          <main className="flex-1 w-full bg-white rounded-xl border border-[#EDEFF2] shadow-[0px_1px_8px_rgba(8,47,73,0.05),0px_1px_2px_rgba(8,47,73,0.06)] overflow-hidden">
            
            {/* Table Header Controls */}
            <div className="px-5 py-4 bg-[#F8FAFC] border-b border-[#EDEFF2] flex items-center justify-between">
              <span className="text-[#475569] text-xs font-bold">
                128 published guides
              </span>
              <div className="px-3 py-1.5 bg-white border border-[#EDEFF2] rounded-lg shadow-2xs cursor-pointer">
                <span className="text-[#0A1626] text-xs font-bold">Sort: A–Z</span>
              </div>
            </div>

            {/* Alphabet Filter Bar */}
            <div className="px-5 py-3.5 border-b border-[#EDEFF2] flex flex-wrap gap-1 items-center">
              {alphabet.map((char) => {
                const isActive = activeLetters.includes(char);
                return (
                  <button
                    key={char}
                    className={`w-6 h-6 rounded-md text-xs font-bold flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-[#F1F5F9] text-[#0284C7]"
                        : "text-[#94A3B8] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    {char}
                  </button>
                );
              })}
            </div>

            {/* Guides List */}
            <div className="divide-y divide-[#EDEFF2]">
              {guides.map((guide, index) => (
                <div
                  key={index}
                  className="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-[#F8FAFC] transition-colors"
                >
                  {/* Country Code Pill */}
                  <div
                    className={`w-8 h-8 ${guide.bg} rounded-md flex items-center justify-center text-white text-xs font-bold tracking-tight shrink-0`}
                  >
                    {guide.code}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-[#0A1626] text-sm font-bold">
                      {guide.title}
                    </h3>
                    <p className="text-[#475569] text-xs font-normal">
                      {guide.subtitle}
                    </p>
                  </div>

                  {/* Last Reviewed Date */}
                  <div className="w-36 text-[#94A3B8] text-xs font-bold shrink-0">
                    {guide.date}
                  </div>

                  {/* Status Badge */}
                  <div className="shrink-0">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-tight inline-block ${guide.statusStyle}`}
                    >
                      {guide.status}
                    </span>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 shrink-0 text-xs font-bold">
                    <a href="#" className="text-[#0A1626] hover:text-[#0284C7]">
                      View guide →
                    </a>
                    <a href="#" className="text-[#0284C7] hover:underline">
                      Coverage
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </main>
        </div>

      </div>
    </section>
  );
}