"use client";

const recentGuides = [
  {
    code: "FR",
    name: "France",
    color: "bg-[#3B82F6]",
    description:
      "Material update — 2026 URSSAF contribution base thresholds revalidated.",
    date: "Jul 21, 2026",
  },
  {
    code: "SG",
    name: "Singapore",
    color: "bg-[#DC2626]",
    description:
      "Routine review — no material change to CPF contribution structure.",
    date: "Jul 02, 2026",
  },
  {
    code: "CA",
    name: "Canada",
    color: "bg-[#B91C1C]",
    description:
      "Material update — provincial payroll tax notice added for Ontario.",
    date: "Jul 05, 2026",
  },
  {
    code: "US",
    name: "United States",
    color: "bg-[#1B6EB5]",
    description:
      "Routine review — state filing calendar cross-checked against source.",
    date: "Jul 14, 2026",
  },
];

export default function RecentlyReviewed() {
  return (
    <section className="w-full bg-[#F5F8FA] py-20">
      <div className="w-full max-w-[1440px] mx-auto pl-10 pr-6 sm:pl-20 sm:pr-12 lg:pl-40 lg:pr-24 flex flex-col gap-8">
        {/* Header */}
        <div className="max-w-[640px] flex flex-col gap-3.5">
          <div className="relative h-3.5">
            <div className="w-1.5 h-3.5 absolute left-[-1.48px] top-0 bg-sky-600 rounded-[1px]" />
            <div className="absolute left-[11px] top-0 text-sky-600 text-xs font-bold font-['Inter'] uppercase tracking-wide">
              RECENTLY REVIEWED
            </div>
          </div>
          <h2 className="text-[#082F49] text-3xl font-bold font-['Inter'] leading-10">
            Guides with recent review activity.
          </h2>
          <p className="text-[#4E6172] text-base font-normal font-['Inter'] leading-6">
            Governed by review date and material change events — not a generic content chronology.
          </p>
        </div>

        {/* List */}
        <div className="w-full max-w-[1116px] bg-white rounded-xl shadow-[0px_1px_8px_0px_rgba(8,47,73,0.05)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.06)] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex flex-col overflow-hidden">
          {recentGuides.map((guide, idx) => (
            <div
              key={guide.code}
              className={`px-6 py-5 flex items-center gap-4 ${
                idx < recentGuides.length - 1 ? "border-b border-[#E2E8F0]" : ""
              }`}
            >
              <div
                className={`w-9 h-9 ${guide.color} rounded-lg flex items-center justify-center shrink-0`}
              >
                <span className="text-white text-xs font-bold font-['Inter'] tracking-tight">
                  {guide.code}
                </span>
              </div>
              <div className="flex-1 flex flex-col gap-[3px]">
                <span className="text-[#082F49] text-sm font-bold font-['Inter']">
                  {guide.name}
                </span>
                <span className="text-[#4E6172] text-xs font-normal font-['Inter']">
                  {guide.description}
                </span>
              </div>
              <div className="w-36 flex justify-end">
                <span className="text-[#64748B] text-xs font-bold font-['Inter']">
                  {guide.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
