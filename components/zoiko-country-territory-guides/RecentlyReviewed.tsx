import React from "react";

export default function RecentlyReviewedGuides() {
  const guides = [
    {
      code: "FR",
      country: "France",
      badgeBg: "bg-[#1959B8]", // Fun Blue
      description: "Material update — 2026 URSSAF contribution base thresholds revalidated.",
      date: "Jul 21, 2026",
    },
    {
      code: "SG",
      country: "Singapore",
      badgeBg: "bg-[#A22637]", // Mexican Red
      description: "Routine review — no material change to CPF contribution structure.",
      date: "Jul 02, 2026",
    },
    {
      code: "CA",
      country: "Canada",
      badgeBg: "bg-[#801818]", // Falu Red
      description: "Material update — provincial payroll tax notice added for Ontario.",
      date: "Jul 05, 2026",
    },
    {
      code: "US",
      country: "United States",
      badgeBg: "bg-[#1D5FD6]", // Cerulean Blue
      description: "Routine review — state filing calendar cross-checked against source.",
      date: "Jul 14, 2026",
    },
  ];

  return (
    <section className="w-full bg-white py-20 font-['Inter',sans-serif]">
      <div className="max-w-[1440px] mx-auto pl-6 sm:pl-12 lg:pl-40 pr-6 sm:pr-12 lg:pr-24 flex flex-col gap-8">
        
        {/* Header Section */}
        <div className="max-w-[640px] flex flex-col gap-3.5">
          <div className="flex items-center gap-1.5 text-[#1D5FD6] text-xs font-bold uppercase tracking-wide">
            <span>/</span>
            <span>RECENTLY REVIEWED</span>
          </div>
          <h2 className="text-[#0E2A47] text-3xl font-bold leading-10">
            Guides with recent review activity.
          </h2>
          <p className="text-[#566B80] text-base font-normal leading-6">
            Governed by review date and material change events — not a generic content chronology.
          </p>
        </div>

        {/* Guides List Card */}
        <div className="w-full max-w-[1116px] bg-white rounded-xl shadow-[0px_1px_8px_0px_rgba(8,47,73,0.05),0px_1px_2px_0px_rgba(8,47,73,0.06)] border border-[#E2E8F0] flex flex-col overflow-hidden">
          {guides.map((item, index) => (
            <div
              key={index}
              className={`px-6 py-5 flex items-center gap-4 ${
                index !== guides.length - 1 ? "border-b border-[#E2E8F0]" : ""
              }`}
            >
              {/* Country Code Badge */}
              <div
                className={`w-9 h-9 shrink-0 ${item.badgeBg} rounded-lg flex items-center justify-center`}
              >
                <span className="text-white text-xs font-bold tracking-tight">
                  {item.code}
                </span>
              </div>

              {/* Guide Content */}
              <div className="flex-1 flex flex-col gap-0.5">
                <h3 className="text-[#0E2A47] text-sm font-bold leading-tight">
                  {item.country}
                </h3>
                <p className="text-[#566B80] text-xs font-normal leading-normal">
                  {item.description}
                </p>
              </div>

              {/* Date */}
              <div className="w-36 text-right shrink-0">
                <span className="text-[#6C8AA6] text-xs font-bold">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}