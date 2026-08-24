import Image from "next/image";

const navItems = ["Overview", "Operating context", "Calendar/cycle", "Earnings/deductions", "Documents", "Sources"];

export default function GuideAnatomy() {
  return (
    <div className="w-full px-32 py-20 bg-white">
      <div className="w-full max-w-[1180px] mx-auto px-8 flex flex-col items-start gap-9">
        {/* Header row */}
        <div className="w-full flex items-center justify-center gap-12">
          {/* Left image */}
          <div className="w-[452px] h-80 rounded-2xl overflow-hidden">
            <Image src="/hi.png" alt="Guide anatomy" width={452} height={320} className="w-full h-80 object-cover" />
          </div>

          {/* Right content */}
          <div className="flex-1 flex flex-col items-start gap-3">
            <div className="w-full h-5 relative">
              <div className="w-4 h-0.5 absolute bg-blue-600 mt-[8.30px]" />
              <div className="absolute left-[24px] top-[-1px] text-blue-600 text-xs font-bold uppercase leading-5 tracking-wide">
                Guide page anatomy
              </div>
            </div>
            <div className="text-slate-900 text-2xl font-extrabold leading-10 pt-0.5">
              Identity and authority come before detailed
              <br />
              market education.
            </div>
            <div className="text-gray-700 text-sm leading-5">
              A sticky on-page navigation and a right-side trust rail keep freshness and
              <br />
              current status visible the whole way down the page.
            </div>
          </div>
        </div>

        {/* Guide page mockup */}
        <div className="w-full h-72 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex overflow-hidden">
          {/* Left - Guide content */}
          <div className="flex-1 px-6 pt-6 pb-7 border-r border-slate-200 flex flex-col items-start gap-1.5">
            {/* Tags */}
            <div className="flex items-center gap-2">
              <span className="px-2 pt-0.5 pb-1 bg-indigo-50 rounded-xl text-blue-600 text-[10px] font-bold leading-4">Country</span>
              <span className="px-2 pt-0.5 pb-1 bg-indigo-50 rounded-xl text-blue-600 text-[10px] font-bold leading-4">Europe</span>
            </div>

            {/* Title */}
            <div className="pt-1.5 text-slate-900 text-lg font-extrabold leading-7">
              Germany Payroll Guide
            </div>

            {/* Meta */}
            <div className="pb-2.5 text-slate-500 text-xs leading-5">
              Market Context · Zoiko Payroll — Reviewed Jan 2026 · v2.1
            </div>

            {/* Sub nav */}
            <div className="w-full py-3 border-t border-b border-slate-200 flex items-center gap-3.5 flex-wrap">
              {navItems.map((item) => (
                <span key={item} className="text-blue-600 text-xs font-semibold leading-4 whitespace-nowrap">
                  {item}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="pt-2.5 text-slate-900 text-base leading-6">
              This guide helps payroll teams understand Germany&apos;s general payroll operating context —
              <br />
              terminology, calendar concepts and documentation categories — before checking current Zoiko
              <br />
              Payroll availability and approved local requirements.
            </div>
          </div>

          {/* Right - Trust rail */}
          <div className="w-[240px] px-5 py-5 bg-[#FBFCFE] flex flex-col items-start">
            <div className="pb-3 text-slate-500 text-xs font-bold uppercase leading-4 tracking-wide">
              Trust & status
            </div>

            {/* Reviewed */}
            <div className="w-full py-2 border-b border-slate-200 flex flex-col gap-px">
              <span className="text-slate-500 text-xs leading-4">Reviewed</span>
              <span className="text-gray-700 text-xs leading-5">Jan 2026</span>
            </div>

            {/* Freshness */}
            <div className="w-full pt-1.5 pb-2 border-b border-slate-200 flex flex-col gap-0.5">
              <span className="text-slate-500 text-xs leading-4">Freshness</span>
              <div className="w-[73px] h-6 bg-emerald-50 rounded-[20px] flex items-center gap-1.5 px-2.5">
                <span className="text-green-600 text-[16px] font-bold leading-4">•</span>
                <span className="text-green-600 text-xs font-semibold leading-4">Current</span>
              </div>
            </div>

            {/* Current availability */}
            <div className="w-full pt-1.5 pb-2 border-b border-slate-200 flex flex-col gap-0.5">
              <span className="text-slate-500 text-xs leading-4">Current availability</span>
              <div className="w-[73px] h-6 bg-orange-100 rounded-[20px] flex items-center gap-1.5 px-2.5">
                <span className="text-yellow-700 text-[16px] font-bold leading-4">•</span>
                <span className="text-yellow-700 text-xs font-semibold leading-4">Limited</span>
              </div>
            </div>

            {/* Sources */}
            <div className="w-full py-2 flex flex-col gap-px">
              <span className="text-slate-500 text-xs leading-4">Sources</span>
              <span className="text-gray-700 text-xs leading-5">5 references</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
