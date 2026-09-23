import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function AuthorityHandoffsSection() {
  return (
    <section className="w-full bg-[#F4F8FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
              / AUTHORITY HANDOFFS
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px]">
              Local law lives on its own authoritative pages — never summarized here.
            </h2>
          </div>
        </Reveal>

        {/* Navigation Flow Cards */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Current Page Indicator */}
            <div className="flex min-w-[140px] flex-col items-center justify-center rounded-xl bg-[#091E2E] px-4 py-3 text-center shadow-xs">
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400">
                THIS PAGE
              </span>
              <span className="mt-0.5 text-xs font-bold text-white sm:text-sm">
                Jurisdiction Coverage
              </span>
            </div>

            {/* Transition Arrow */}
            <span className="text-sm font-bold text-[#0A78C2] sm:text-base" aria-hidden="true">
              &rarr;
            </span>

            {/* Destination 1 */}
            <Link
              href="/country-territory-directory"
              className="flex min-w-[140px] items-center justify-center rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-center shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A78C2] hover:shadow-xs active:translate-y-0"
            >
              <span className="text-xs font-bold text-[#082F49] sm:text-sm">
                Country / Territory Directory
              </span>
            </Link>

            {/* Destination 2 */}
            <Link
              href="/payroll-requirements"
              className="flex min-w-[140px] items-center justify-center rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-center shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A78C2] hover:shadow-xs active:translate-y-0"
            >
              <span className="text-xs font-bold text-[#082F49] sm:text-sm">
                Local Payroll Requirements
              </span>
            </Link>

            {/* Destination 3 */}
            <Link
              href="/resources/jurisdiction-guides"
              className="flex min-w-[140px] items-center justify-center rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-center shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A78C2] hover:shadow-xs active:translate-y-0"
            >
              <span className="text-xs font-bold text-[#082F49] sm:text-sm">
                Jurisdiction Guides
              </span>
            </Link>

            {/* Destination 4 */}
            <Link
              href="/implementation"
              className="flex min-w-[140px] items-center justify-center rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-center shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A78C2] hover:shadow-xs active:translate-y-0"
            >
              <span className="text-xs font-bold text-[#082F49] sm:text-sm">
                Implementation
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
