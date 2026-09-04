const searchStates = [
  {
    title: "No guide found",
    desc: '"Payroll in Antarctica" — no guide exists. Shows directory and resources instead.',
  },
  {
    title: "Superseded",
    desc: "Result found, routes automatically to the current replacement guide.",
  },
  {
    title: "Authority route unavailable",
    desc: "Approved safe fallback shown — never a dead link.",
  },
];

const relatedGuides = [
  { name: "France Payroll Guide", freshness: "Current" },
  { name: "Multi-Entity Payroll Overview", freshness: "Current" },
  { name: "Implementation & Migration Guide", freshness: "Current" },
];

const questions = [
  "Which stakeholders and entities are involved in this market?",
  "What population and payroll groups are in scope?",
  "What source systems and data will need mapping?",
  "What validation and parallel-run evidence will be required?",
];

export default function SearchStates() {
  return (
    <div className="w-full px-32 py-20 bg-white">
      <div className="w-full max-w-[1180px] mx-auto px-8 flex flex-col items-start gap-3">
        {/* Header */}
        <div className="w-[660px] max-w-[660px] flex flex-col items-start gap-3">
          <div className="w-full h-5 relative">
            <div className="w-4 h-0.5 absolute bg-[#2F6FED] mt-[8.30px]" />
            <div className="absolute left-[24px] top-[-1px] text-[#2F6FED] text-xs font-bold uppercase leading-5 tracking-wide">
              Search states + related guides + implementation path
            </div>
          </div>
          <div className="text-slate-900 text-3xl font-extrabold leading-9 whitespace-nowrap">
            No guide is never fabricated. No route is ever a dead link
          </div>
        </div>

        {/* Search state cards */}
        <div className="w-full pt-6 flex items-start gap-3">
          {searchStates.map((state) => (
            <div key={state.title} className="w-[364px] h-[91.7px] px-3.5 pt-3 pb-3.5 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-[4.80px]">
              <div className="text-slate-900 text-xs font-bold leading-5 pb-[0.59px]">{state.title}</div>
              <div className="text-gray-700 text-xs leading-5">{state.desc}</div>
            </div>
          ))}
        </div>

        {/* Related guides */}
        <div className="w-full pt-6 pb-[0.59px] text-slate-500 text-xs uppercase leading-5 tracking-wide">
          Related guides
        </div>
        <div className="w-full pb-2 flex items-start gap-3.5 overflow-hidden">
          {relatedGuides.map((g) => (
            <div key={g.name} className="px-4 py-4 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-2">
              <div className="text-slate-900 text-xs font-bold leading-5">{g.name}</div>
              <div className="w-[73px] h-6 bg-[#E7F6EE] rounded-[20px] flex items-center gap-1.5 px-2.5">
                <span className="text-green-600 text-sm font-bold leading-4">•</span>
                <span className="text-green-600 text-xs font-semibold leading-4">{g.freshness}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation questions */}
        <div className="w-full pt-5 flex flex-col">
          {questions.map((q) => (
            <div key={q} className="w-full pl-4 py-1.5 border-b border-slate-200 flex items-start relative">
              <span className="absolute left-0 top-[6px] text-blue-600 text-xs font-bold leading-5">?</span>
              <span className="text-gray-700 text-xs leading-5 pl-2">{q}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
