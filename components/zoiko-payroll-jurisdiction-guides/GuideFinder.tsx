const regions = ["All regions", "Africa", "Americas", "Asia-Pacific", "Europe", "Middle East"];

const guides = [
  {
    name: "United States Payroll Guide",
    meta: "Country · North America · 6 sources",
    freshness: "Current",
    freshnessColor: "bg-[#E7F6EE] text-green-600",
    dotColor: "bg-green-600",
    availability: "Available →",
    availColor: "text-green-600",
  },
  {
    name: "Germany Payroll Guide",
    meta: "Country · Europe · 5 sources",
    freshness: "Current",
    freshnessColor: "bg-[#E7F6EE] text-green-600",
    dotColor: "bg-green-600",
    availability: "Limited →",
    availColor: "text-yellow-700",
  },
  {
    name: "Brazil Payroll Guide",
    meta: "Country · South America · 4 sources",
    freshness: "Review due",
    freshnessColor: "bg-[#FDF1DE] text-yellow-700",
    dotColor: "bg-yellow-700",
    availability: "Partner →",
    availColor: "text-blue-600",
  },
  {
    name: "Puerto Rico Payroll Guide",
    meta: "Territory · North America · 3 sources",
    freshness: "Current",
    freshnessColor: "bg-[#E7F6EE] text-green-600",
    dotColor: "bg-green-600",
    availability: "Planned →",
    availColor: "text-indigo-600",
  },
];

export default function GuideFinder() {
  return (
    <div className="w-full px-32 py-16 bg-slate-50 border-t border-slate-200">
      <div className="w-full max-w-[1180px] mx-auto px-8 flex flex-col items-start gap-9">
        {/* Header */}
        <div className="w-[660px] max-w-[660px] flex flex-col items-start gap-3">
          <div className="w-full h-5 relative">
            <div className="w-4 h-0.5 absolute bg-[#2F6FED] mt-[8.30px]" />
            <div className="absolute left-[24px] top-[-1px] text-[#2F6FED] text-xs font-bold uppercase leading-5 tracking-wide">
              Guide finder
            </div>
          </div>
          <div className="text-slate-900 text-3xl font-extrabold leading-9">
            The primary interactive proof surface.
          </div>
          <div className="text-gray-700 text-base leading-6 whitespace-nowrap">
            Guide freshness and current availability stay visibly separate metadata — never merged into<br />
            one claim.
          </div>
        </div>

        {/* Search card */}
        <div className="w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col overflow-hidden">
          {/* Search bar */}
          <div className="px-5 py-4 border-b border-slate-200 flex items-center gap-2">
            <div className="flex-1 px-4 py-3.5 bg-white rounded-[30px] outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
              <span className="text-neutral-500 text-sm">Search jurisdiction name, alias or localized label…</span>
            </div>
            <div className="px-4 pt-2 pb-2.5 bg-cyan-900 rounded-[30px] flex items-center">
              <span className="text-white text-sm font-semibold leading-6">Search</span>
            </div>
          </div>

          {/* Region filters */}
          <div className="px-5 py-3.5 border-b border-slate-200 flex items-center gap-2 flex-wrap">
            {regions.map((region, i) => (
              <div
                key={region}
                className={`px-3.5 pt-[5px] pb-1.5 rounded-[20px] outline outline-1 outline-offset-[-1px] ${
                  i === 0
                    ? "bg-cyan-950 outline-slate-800 text-white"
                    : "bg-slate-50 outline-slate-200 text-gray-700"
                }`}
              >
                <span className="text-xs font-semibold leading-5">{region}</span>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-px bg-slate-200">
            {guides.map((guide) => (
              <div
                key={guide.name}
                className="bg-white px-5 py-4 flex flex-col gap-0.5"
              >
                <div className="text-slate-900 text-sm font-bold leading-5">{guide.name}</div>
                <div className="text-slate-500 text-xs leading-4">{guide.meta}</div>
                <div className="pt-2 flex items-center justify-between">
                  <div className={`h-6 rounded-[20px] flex items-center gap-1.5 px-2.5 ${guide.freshnessColor} ${guide.freshness === "Review due" ? "w-[97px]" : "w-[71px]"}`}>
                    <span className="text-xs">•</span>
                    <span className="text-xs font-semibold leading-4 whitespace-nowrap">{guide.freshness}</span>
                  </div>
                  <span className={`text-xs font-semibold leading-4 ${guide.availColor}`}>
                    {guide.availability}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
