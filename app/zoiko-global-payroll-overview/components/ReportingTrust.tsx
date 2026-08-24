const cards = [
  {
    title: "Reporting & reconciliation",
    items: ["Local currency shown separately from reporting currency", "FX basis and as-of date always disclosed", "Reconciliation failures stay visible, not hidden"],
  },
  {
    title: "Integration health",
    items: ["Direction, source of record and versioned mapping", "Provider and service model disclosed per connector", "Partial failures, retry and support owner tracked"],
  },
  {
    title: "Security & trust",
    items: ["Evidence-led — nothing invented or implied", "Certifications, residency and encryption stated as documented", "Full detail available in the Trust Center"],
  },
];

export default function ReportingTrust() {
  return (
    <section className="w-[1180px] max-w-[1180px] mx-auto px-8 py-20 flex flex-col items-start gap-7">
      {/* Header */}
      <div className="w-[680px] max-w-[680px] pt-[1.62px] flex flex-col items-start">
        <div className="w-80 h-5 relative">
          <div className="absolute left-[0px] top-[-1px] text-sky-700 text-xs font-bold uppercase leading-5 tracking-wide">
            / Global Reporting + Integrations + Trust
          </div>
        </div>
        <div className="pt-3.5 text-sky-950 text-4xl font-extrabold leading-10">
          Local outcomes first. Evidence-led, always.
        </div>
        <div className="w-[640px] max-w-[640px] text-slate-600 text-base leading-6">
          Consolidated views never replace local truth — and trust claims are only made when there&apos;s documented evidence behind them.
        </div>
      </div>

      {/* Image placeholder */}
      <div className="w-full pt-3.5 bg-white rounded-2xl shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-100 overflow-hidden">
        <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-slate-200" />
      </div>

      {/* Feature cards */}
      <div className="w-full flex items-start gap-5">
        {cards.map((c) => (
          <div key={c.title} className="w-96 px-6 pt-6 pb-11 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex flex-col gap-3">
            <div className="w-9 h-9 bg-slate-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-100 flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-sky-700 rounded-sm" />
            </div>
            <div className="pt-[3px] text-sky-950 text-lg font-bold leading-7">{c.title}</div>
            <div className="flex flex-col">
              {c.items.map((item, i) => (
                <div key={item} className={`py-1.5 ${i > 0 ? "border-t border-slate-100" : ""}`}>
                  <span className="text-slate-600 text-xs leading-5">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
