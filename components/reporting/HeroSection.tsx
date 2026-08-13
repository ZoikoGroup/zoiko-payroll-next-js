import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const proofPoints = ["Defined metrics", "Scoped access", "Traceable evidence"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-14 sm:py-16">
      <div
        className="absolute inset-0 bg-radial-[at_12%_0%] from-blue-500/30 to-transparent to-60%"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/reporting/hero.png"
              alt="Payroll analyst reviewing reports on a tablet"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow tone="light">Reporting and Analytics</Eyebrow>
            <h1 className="mt-3 text-4xl font-extrabold leading-10 text-white">
              Payroll reporting you can trace back to the record.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-6 text-white/80">
              Summaries, entity and jurisdiction views, reconciliation and controlled exports — every
              number keeps its period, scope, source, currency and freshness attached.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="#reporting-workspace"
                className="flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                See the reporting workspace
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-5 border-t border-white/10 pt-5">
              {proofPoints.map((point) => (
                <span key={point} className="flex items-center gap-1.5 text-xs leading-5 text-white/60">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-xs bg-blue-500" aria-hidden="true" />
                  {point}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
