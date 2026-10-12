import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function DirectAnswerSection() {
  return (
    <section className="w-full bg-[#E9F0F8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[760px]">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
              / DIRECT ANSWER
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px]">
              Status, scope, limitation, last verified — in one place.
            </h2>
          </div>
        </Reveal>

        {/* Answer Card */}
        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#082F49] sm:text-2xl">
                Germany
              </h3>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                Available
              </span>
            </div>

            {/* Current status paragraph */}
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              <span className="font-bold text-slate-800">Current status: Available.</span> A current approved service scope is available in this jurisdiction.
            </p>

            {/* Key-Value Details */}
            <div className="mt-6 divide-y divide-slate-100 border-t border-slate-100 text-xs sm:text-sm">
              <div className="flex flex-col justify-between py-3 sm:flex-row sm:items-center">
                <span className="font-mono text-xs text-slate-400">Service scope</span>
                <span className="mt-1 font-semibold text-slate-800 sm:mt-0">
                  Core payroll processing, approvals, records and reporting
                </span>
              </div>

              <div className="flex flex-col justify-between py-3 sm:flex-row sm:items-center">
                <span className="font-mono text-xs text-slate-400">Material limitation</span>
                <span className="mt-1 font-semibold text-slate-800 sm:mt-0">
                  Multi-entity scope assessed separately
                </span>
              </div>

              <div className="flex flex-col justify-between py-3 sm:flex-row sm:items-center">
                <span className="font-mono text-xs text-slate-400">Last verified</span>
                <span className="mt-1 font-bold text-slate-800 sm:mt-0">
                  Aug 2026
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/global-payroll/jurisdiction-coverage"
                className="inline-flex items-center justify-center rounded-lg bg-[#0A78C2] px-5 py-2.5 text-xs font-bold text-white shadow-2xs transition-all duration-200 hover:bg-[#0863A0] sm:text-sm"
              >
                View coverage detail
              </Link>

              <Link
                href="/resources/jurisdiction-guides"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-[#082F49] shadow-2xs transition-all duration-200 hover:border-[#0A78C2] hover:text-[#0A78C2] sm:text-sm"
              >
                Local requirements
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Footnote */}
        <Reveal delay={160}>
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-400">
              Illustrative example card for the search template.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
