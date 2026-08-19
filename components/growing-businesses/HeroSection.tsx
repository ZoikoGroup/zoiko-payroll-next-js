import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stats = [
  { value: "58", label: "Employees in scope" },
  { value: "Review", label: "Current stage" },
  { value: "3", label: "Open exceptions" },
  { value: "1", label: "Pending approval" },
  { value: "Degraded", label: "Integration health" },
  { value: "Human-owned", label: "No threshold triggers" },
];

export default function HeroSection() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow tone="light">Growing businesses</Eyebrow>
            <h1 className="mt-4 text-4xl font-normal leading-tight text-white sm:text-5xl">
              Add payroll structure
              <br className="hidden sm:block" />{" "}
              <span className="text-stone-300 italic">before</span> growth adds payroll risk.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">
              As headcount, changes and systems increase, Zoiko Payroll keeps every pay run
              controlled — from validated inputs through review, approval, records and reporting.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-[3px] bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="/payroll-processing"
                className="flex min-h-11 items-center justify-center rounded-[3px] border border-white/30 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60"
              >
                Explore payroll processing
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
              <img
                src="/images/growing-businesses/hero.png"
                alt="A payroll lead walking a colleague through the current pay run"
                className="aspect-[477/549] w-full object-cover"
              />
              <p className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-900/80 to-transparent px-5 pt-10 pb-4 text-xs leading-4 tracking-wide text-white">
                NIMBUS RETAIL CO · APR 2026 PAYROLL RUN
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-7 px-4 py-7 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-lg font-semibold leading-7 text-white">{stat.value}</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
