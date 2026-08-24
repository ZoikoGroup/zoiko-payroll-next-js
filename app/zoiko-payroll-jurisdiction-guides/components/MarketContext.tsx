import Image from "next/image";

const topics = [
  {
    title: "Calendar & cutoffs",
    desc: "Pay frequency, period, cutoffs, holidays, timezone concepts.",
    source: "Sourced · Jan 2026",
  },
  {
    title: "Gross-to-net",
    desc: "Earnings, deductions, contributions, withholding context.",
    source: "Sourced · Jan 2026",
  },
  {
    title: "Documents & reporting",
    desc: "Worker documents, employer reports, filing categories.",
    source: "Sourced · Dec 2025",
  },
  {
    title: "Payments & currency",
    desc: "Currency, payment method, funding, FX, settlement timing.",
    source: "Sourced · Jan 2026",
  },
];

export default function MarketContext() {
  return (
    <div className="w-full px-32 py-20 bg-slate-50 border-t border-slate-200">
      <div className="w-full max-w-[1180px] mx-auto px-8 flex flex-col items-start gap-9">
        {/* Header row */}
        <div className="w-full flex items-center justify-center gap-12">
          {/* Left content */}
          <div className="flex-1 flex flex-col items-start gap-3">
            <div className="w-full h-5 relative">
              <div className="w-4 h-0.5 absolute bg-blue-600 mt-[8.30px]" />
              <div className="absolute left-[24px] top-[-1px] text-blue-600 text-xs font-bold uppercase leading-5 tracking-wide">
                Market context + payroll operating topics
              </div>
            </div>
            <div className="text-slate-900 text-2xl font-extrabold leading-10 pt-px">
              Organized around operating questions — not
              <br />
              a fake compliance checklist.
            </div>
            <div className="text-gray-700 text-sm leading-5">
              Small source and review badges sit beside every high-risk claim.
            </div>
          </div>

          {/* Right image */}
          <div className="w-[452px] h-80 rounded-2xl overflow-hidden">
            <Image src="/pad.png" alt="Market context" width={452} height={320} className="w-full h-80 object-cover" />
          </div>
        </div>

        {/* Topic cards */}
        <div className="w-full flex items-start gap-3.5">
          {topics.map((topic) => (
            <div key={topic.title} className="flex-1 p-4 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-1.5">
              <div className="text-slate-900 text-sm font-bold leading-5 pt-[2px]">{topic.title}</div>
              <div className="text-slate-500 text-xs leading-4 pt-[3px] pb-[3.73px]">{topic.desc}</div>
              <div className="pt-0.5 text-blue-600 text-[10px] font-semibold leading-4">{topic.source}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
