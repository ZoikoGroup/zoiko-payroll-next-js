export default function SearchInteraction() {
  return (
    <section className="w-full px-32 py-20 bg-white">
      <div className="w-full max-w-[1180px] mx-auto px-8 flex flex-col items-center gap-10">
        {/* Header - centered */}
        <div className="w-[680px] max-w-[680px] pt-[1.63px] flex flex-col items-center gap-2">
          <div className="w-64 h-5 relative">
            <div className="absolute left-[0px] top-[-1px] text-sky-700 text-xs font-bold uppercase leading-5 tracking-wide">
              / Availability Search Interaction
            </div>
          </div>
          <div className="pt-3.5 text-sky-950 text-4xl font-extrabold leading-10">
            Search first. No personal data required
          </div>
          <div className="text-slate-600 text-base leading-6">
            Search a jurisdiction, get a resolved, dated answer, and only continue toward a demo when you choose to.
          </div>
        </div>

        {/* Search Card */}
        <div className="w-[620px] max-w-[620px] bg-white rounded-2xl shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-100 overflow-hidden">
          {/* Search input */}
          <div className="px-6 py-5 border-b border-slate-100">
            <div className="px-3.5 py-3 bg-slate-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-blue-500 flex items-center gap-2.5">
              <span className="text-sky-950 text-base">🔍</span>
              <span className="text-sky-950 text-base font-semibold">Germany</span>
            </div>
          </div>

          {/* Steps */}
          <div className="px-6 py-5 flex items-center justify-between">
            {["Search", "Resolve", "Status", "Continue"].map((step, i) => (
              <div key={step} className="flex items-center">
                <span className={`text-xs font-bold leading-4 tracking-tight ${i === 2 ? "text-sky-700" : "text-gray-400"}`}>
                  {step}
                </span>
                {i < 3 && <div className="w-6 h-px bg-slate-200 mx-2" />}
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="px-6 py-5 bg-slate-50 flex flex-col">
            <div className="pb-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-6 pt-[3px] pb-1 bg-slate-50 rounded-sm outline outline-1 outline-offset-[-1px] outline-slate-100 flex items-center justify-center">
                  <span className="text-sky-700 text-[10px] font-extrabold leading-4">DE</span>
                </div>
                <span className="text-sky-950 text-base font-extrabold leading-6">Germany</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-sm" />
                <span className="text-yellow-800 text-base leading-6">Limited availability</span>
              </div>
            </div>

            {[
              { label: "Scope", value: "Select entity types, self-managed only" },
              { label: "Effective date", value: "Reviewed August 2026" },
              { label: "Next step", value: "Discuss your operating markets →", valueColor: "text-sky-700 font-bold" },
            ].map((row, i) => (
              <div key={row.label} className={`py-3 flex items-start justify-between ${i < 2 ? "border-b border-slate-100" : ""}`}>
                <span className="text-gray-400 text-sm leading-5">{row.label}</span>
                <span className={`text-sky-950 text-sm leading-5 ${row.valueColor || "font-bold"}`}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
