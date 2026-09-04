const claims = [
  {
    claim: "Standard payroll cycle context",
    source: "Official authority, 2025",
    reviewed: "Jan 2026",
    freshness: "Current",
    pillWidth: "w-[76px]",
    pillBg: "bg-[#E7F6EE]",
    dotColor: "bg-green-600",
    textColor: "text-green-600",
  },
  {
    claim: "Filing category overview",
    source: "Official authority, 2024",
    reviewed: "Nov 2025",
    freshness: "Under review",
    pillWidth: "w-[104px]",
    pillBg: "bg-violet-100",
    dotColor: "bg-indigo-600",
    textColor: "text-indigo-600",
  },
  {
    claim: "Zoiko Payroll service scope",
    source: "Zoiko authority",
    reviewed: "Jan 2026",
    freshness: "Current",
    pillWidth: "w-[76px]",
    pillBg: "bg-[#E7F6EE]",
    dotColor: "bg-green-600",
    textColor: "text-green-600",
  },
];

const versions = [
  { date: "Jan 2026", label: "v2.1 — Corrected", color: "bg-blue-600" },
  { date: "Oct 2025", label: "v2.0 — Superseded", color: "bg-slate-500" },
  { date: "Mar 2025", label: "v1.0 — Superseded", color: "bg-slate-500" },
];

export default function SourcesFreshness() {
  return (
    <div className="w-full px-32 py-20 bg-slate-50 border-t border-slate-200">
      <div className="w-full max-w-[1180px] mx-auto px-8 flex flex-col items-start gap-4">
        {/* Header */}
        <div className="w-full max-w-[1180px] pb-5 flex flex-col items-start gap-3">
          <div className="w-full h-5 relative">
            <div className="w-4 h-0.5 absolute bg-[#2F6FED] mt-[8.29px]" />
            <div className="absolute left-[24px] top-[-1px] text-[#2F6FED] text-xs font-bold uppercase leading-5 tracking-wide">
              Sources + freshness + corrections
            </div>
          </div>
          <div className="text-slate-900 text-2xl font-extrabold leading-8">
            Every high-risk claim maps to a source, reviewer<br />
            and date.
          </div>

        </div>

        {/* Table */}
        <div className="w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex">
            <div className="w-96 px-4 py-3 bg-gray-50 border-b border-slate-200">
              <span className="text-slate-500 text-xs font-bold uppercase leading-4 tracking-wide">Claim</span>
            </div>
            <div className="w-80 px-4 py-3 bg-gray-50 border-b border-slate-200">
              <span className="text-slate-500 text-xs font-bold uppercase leading-4 tracking-wide">Source</span>
            </div>
            <div className="w-40 px-4 py-3 bg-gray-50 border-b border-slate-200">
              <span className="text-slate-500 text-xs font-bold uppercase leading-4 tracking-wide">Reviewed</span>
            </div>
            <div className="w-60 px-4 py-3 bg-gray-50 border-b border-slate-200">
              <span className="text-slate-500 text-xs font-bold uppercase leading-4 tracking-wide">Freshness</span>
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col">
            {claims.map((row, i) => (
              <div key={row.claim} className="flex">
                <div className={`w-96 px-4 pt-4 pb-3.5 ${i < claims.length - 1 ? "border-b border-slate-200" : ""}`}>
                  <span className="text-gray-700 text-xs leading-5">{row.claim}</span>
                </div>
                <div className={`w-80 px-4 py-4 bg-slate-50 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-200 ${i < claims.length - 1 ? "border-b" : ""}`}>
                  <span className="text-gray-700 text-xs font-mono leading-4">{row.source}</span>
                </div>
                <div className={`w-40 px-4 pt-4 pb-3.5 ${i < claims.length - 1 ? "border-b border-slate-200" : ""}`}>
                  <span className="text-gray-700 text-xs leading-5">{row.reviewed}</span>
                </div>
                <div className={`w-60 px-4 py-3 ${i < claims.length - 1 ? "border-b border-slate-200" : ""}`}>
                  <div className={`${row.pillWidth} h-6 relative ${row.pillBg} rounded-[20px]`}>
                    <div className={`size-1.5 left-[10px] top-[9.12px] absolute ${row.dotColor} rounded-[3px]`} />
                    <div className={`w-auto left-[22px] top-[3px] absolute justify-center ${row.textColor} text-xs font-semibold font-['Inter'] leading-4 whitespace-nowrap`}>{row.freshness}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Correction notice */}
        <div className="w-full px-4 py-3.5 bg-[#FDF1DE] rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#F0DCAE] flex items-center justify-between">
          <span className="text-gray-700 text-xs leading-5">This guide was corrected on Jan 15, 2026.</span>
        </div>

        {/* Version timeline */}
        <div className="w-full pt-1 flex items-start overflow-hidden">
          {versions.map((v, i) => (
            <div key={v.date} className="min-w-[160px] pr-4 flex flex-col gap-px">
              <div className={`w-2.5 h-2.5 rounded-[5px] ${v.color}`} />
              <div className="pt-1.5 text-slate-500 text-xs font-mono leading-4">{v.date}</div>
              <div className="text-slate-900 text-xs font-semibold leading-5 pb-[0.59px]">{v.label}</div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}
