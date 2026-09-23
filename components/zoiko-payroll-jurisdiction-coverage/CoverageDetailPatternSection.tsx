import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function CoverageDetailPatternSection() {
  return (
    <section className="w-full bg-[#F4F8FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[760px]">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
              / COVERAGE DETAIL PATTERN
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px]">
              Limitations always appear before the sales CTA.
            </h2>
          </div>
        </Reveal>

        {/* Detail Pattern Card */}
        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#082F49] sm:text-2xl">
                Germany — Coverage Detail
              </h3>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                Available
              </span>
            </div>

            {/* Current status paragraph */}
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              <span className="font-bold text-slate-800">Current status: Available.</span> A current approved service scope is available in this jurisdiction.
            </p>

            {/* Scope Pills */}
            <div className="mt-5">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                SCOPE
              </span>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  "Core payroll processing",
                  "Approvals",
                  "Records",
                  "Reporting",
                ].map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Limitation Callout Box (Before Sales CTA) */}
            <div className="mt-6 rounded-r-xl border-l-4 border-[#0A78C2] bg-blue-50/50 p-4 text-xs leading-relaxed text-slate-700 sm:text-sm">
              <span className="font-bold text-[#082F49]">
                Limitation (shown before any sales action):
              </span>{" "}
              Multi-entity scope is assessed separately and is not included in this status by default.
            </div>

            {/* Verification Metadata */}
            <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-4 text-xs sm:text-sm">
              <div className="flex items-center justify-between py-1">
                <span className="font-mono text-slate-400">Last verified</span>
                <span className="font-bold text-slate-800">Aug 2026</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-mono text-slate-400">Effective from</span>
                <span className="font-bold text-slate-800">Jun 2026</span>
              </div>
              <div className="flex flex-col justify-between py-1 sm:flex-row sm:items-center">
                <span className="font-mono text-slate-400">Related authority</span>
                <span className="mt-1 font-semibold text-[#0A78C2] sm:mt-0">
                  Local Payroll Requirements · Jurisdiction Guide · Directory
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/implementation"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-[#082F49] shadow-2xs transition-all duration-200 hover:border-[#0A78C2] hover:text-[#0A78C2] sm:text-sm"
              >
                Explore implementation
              </Link>

              <Link
                href="/book-a-demo"
                className="inline-flex items-center justify-center rounded-lg bg-[#0A78C2] px-5 py-2.5 text-xs font-bold text-white shadow-2xs transition-all duration-200 hover:bg-[#0863A0] sm:text-sm"
              >
                Book a demo
              </Link>
            </div>

            {/* Inner Footnote */}
            <div className="mt-5 border-t border-slate-100 pt-3">
              <p className="text-[11px] text-slate-400">
                Service status and scope are operational, not tax compliance advice.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
