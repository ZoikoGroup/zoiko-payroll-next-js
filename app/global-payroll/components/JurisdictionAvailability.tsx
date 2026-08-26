const states = [
  { name: "Available", dot: "bg-green-700", text: "text-green-700", bg: "bg-gray-200", desc: "Fully supported with current effective date and scope." },
  { name: "Limited", dot: "bg-yellow-800", text: "text-yellow-800", bg: "bg-orange-100", desc: "Partial scope, specific worker types or service boundaries." },
  { name: "Partner-supported", dot: "bg-orange-800", text: "text-orange-800", bg: "bg-red-100", desc: "Delivered with a named partner under a defined model." },
  { name: "Planned", dot: "bg-gray-500", text: "text-gray-500", bg: "bg-gray-100", desc: "On the roadmap; not currently available for production use." },
  { name: "Needs review", dot: "bg-sky-700", text: "text-sky-700", bg: "bg-slate-200", desc: "Status under active reassessment — treated as unconfirmed." },
  { name: "Not applicable", dot: "bg-gray-500", text: "text-gray-500", bg: "bg-gray-100", desc: "Outside current scope for this jurisdiction type." },
];

const details = [
  { label: "Effective date", value: "March 2025" },
  { label: "Currencies", value: "USD" },
  { label: "Frequencies", value: "Weekly, semi-monthly, monthly" },
  { label: "Service model", value: "Direct, self-managed" },
  { label: "Filing support", value: "Federal and state workflows" },
];

export default function JurisdictionAvailability() {
  return (
    <section className="w-full px-32 py-20 bg-white border-t border-b border-slate-100 font-['Inter']">
      <div className="w-full max-w-[1180px] mx-auto px-8 flex flex-col items-start gap-9">
        {/* Header */}
        <div className="w-[680px] max-w-[680px] pt-[1.63px] flex flex-col items-start gap-2">
          <div className="w-52 h-5 relative">
            <div className="absolute left-[0px] top-[-1px] text-sky-700 text-xs font-bold uppercase leading-5 tracking-wide">
              / Jurisdiction Availability
            </div>
          </div>
          <div className="pt-3.5 text-sky-950 text-4xl font-extrabold leading-10">
            Six honest states. No map theater
          </div>
          <div className="w-[640px] max-w-[640px] text-slate-600 text-base leading-6">
            Every jurisdiction is shown in one of six states. A positive state always<br />comes with an effective date, service model, scope and supporting evidence<br />— not a green checkmark on its own.
          </div>
        </div>

        {/* 6 State Cards */}
        <div className="w-full pt-2 grid grid-cols-6 gap-3">
          {states.map((s) => (
            <div key={s.name} className="px-4 pt-5 pb-4 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-100 flex flex-col gap-3">
              <div className={`w-fit flex items-center gap-2 rounded-full px-3 py-1.5 ${s.bg}`}>
                <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                <span className={`text-xs font-bold leading-4 whitespace-nowrap ${s.text}`}>{s.name}</span>
              </div>
              <div className="text-gray-500 text-xs leading-5">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* US Detail Card */}
        <div className="w-full bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex overflow-hidden">
          {/* Left */}
          <div className="flex-1 px-7 pt-7 pb-24 border-r border-slate-100 flex flex-col gap-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-6 pt-[3px] pb-1 bg-slate-50 rounded-sm outline outline-1 outline-offset-[-1px] outline-slate-100 flex items-center justify-center">
                <span className="text-sky-700 text-[10px] font-extrabold leading-4">US</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="text-sky-950 text-base font-extrabold leading-6">United States</div>
                <div className="w-20 h-5 relative bg-gray-200">
                  <div className="size-1.5 left-0 top-[9px] absolute bg-green-600 rounded-sm" />
                  <div className="w-16 left-[13px] top-[-2px] absolute justify-center text-green-700 text-base font-normal font-['Inter'] leading-6">Available</div>
                </div>
              </div>
            </div>
            <div className="text-slate-600 text-sm leading-5">
              Positive availability states are backed by current, dated evidence — not a static claim. Review the full jurisdiction directory for markets currently in scope.
            </div>
            <div className="pt-2">
              <div className="w-52 border-b border-slate-200 pb-1">
                <span className="text-sky-700 text-sm font-semibold leading-5">View jurisdiction directory →</span>
              </div>
            </div>
          </div>

          {/* Right - Details */}
          <div className="flex-1 p-7 flex flex-col">
            {details.map((d, i) => (
              <div key={d.label} className={`py-3 flex items-start justify-between ${i < details.length - 1 ? "border-b border-slate-100" : ""}`}>
                <span className="text-gray-400 text-sm leading-5">{d.label}</span>
                <span className="text-sky-950 text-sm font-bold leading-5">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
