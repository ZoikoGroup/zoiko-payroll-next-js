import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0E1E3C] py-16 sm:py-20">
      <img
        src="/images/global-reporting/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover brightness-[1.9]"
      />
      <div className="absolute inset-0 bg-[#0E1E3C]/25" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-300">
              Global reporting
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Global Payroll Reporting You Can Trace Back to Source
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
              See governed operational reporting across permitted entities and jurisdictions while
              keeping scope, source quality, period, currency, metric definitions and revisions
              visible.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="#reporting-center"
                className="flex min-h-11 items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5"
              >
                Explore the Global Reporting Center
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {/* The Figma asset baked its shadow into a transparent margin; that margin is
                trimmed off the PNG and the same bloom is drawn here instead. */}
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.75)]">
              <img
                src="/images/global-reporting/hero.png"
                alt="Reporting owner reviewing the Global Reporting Center on a laptop"
                className="w-full object-cover"
              />
              {/* Caption bar overlays the bottom of the frame, as in the design. */}
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-[#0B1830] px-4 py-3">
                <span className="size-2 rounded-sm bg-white/25" aria-hidden="true" />
                <span className="size-2 rounded-sm bg-white/25" aria-hidden="true" />
                <span className="size-2 rounded-sm bg-white/25" aria-hidden="true" />
                <span className="pl-2 font-mono text-xs text-white/60">
                  Global Reporting Center — Apr 2026
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
