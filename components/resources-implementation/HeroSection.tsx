import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-12 sm:py-16 lg:py-20">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, #0A2E4B 0%, #0B3A5D 55%, #0E4E77 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">Implementation</Eyebrow>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Payroll implementation guidance from migration through launch
          </h1>

          <p className="mt-5 max-w-[660px] text-base leading-6 text-slate-300">
            Find practical guidance for preparing data, validating payroll, planning parallel tests,
            governing cutover and moving into stable operation — then continue to the current
            Product, Global Payroll, Documentation or Support authority for the decision you need to
            make.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/book-a-demo"
              className="rounded-lg bg-brand-gradient px-5 py-3 text-center text-sm font-semibold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href="#pathfinder"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-bold text-[#0A2E4B] transition-all duration-200 hover:-translate-y-0.5"
            >
              Find implementation guidance
            </Link>
          </div>
        </Reveal>

        <Reveal delay={140} className="relative">
          <img
            src="/images/resources-implementation/hero.png"
            alt="A team planning a payroll implementation together"
            loading="lazy"
            className="h-56 w-full rounded-2xl object-cover shadow-[0px_30px_60px_-24px_rgba(15,45,70,0.28)] sm:h-72 lg:h-[360px]"
          />

          <div className="absolute -left-2 -top-5 hidden w-56 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-[0px_20px_40px_-16px_rgba(15,45,70,0.30)] lg:block">
            <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-slate-500">
              Pathfinder result
            </p>
            <p className="mt-0.5 text-sm font-bold leading-5 text-[#0A2E4B]">Prepare / migrate</p>
            <p className="mt-1 text-xs leading-4 text-gray-600">
              Data mapping, reconciliation and effective-date questions before validation.
            </p>
            <span className="mt-2.5 inline-block rounded-[20px] bg-blue-50 px-2 py-[3px] text-[10px] font-bold leading-4 text-sky-700">
              Multi-entity
            </span>
          </div>

          <div className="absolute -bottom-6 right-0 hidden w-48 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-[0px_20px_40px_-16px_rgba(15,45,70,0.30)] lg:block">
            {[
              { label: "Authority", value: "GP Implementation" },
              { label: "Readiness score", value: "Not shown" },
              { label: "Next step", value: "Open guidance" },
            ].map((row) => (
              <div key={row.label} className="flex items-start justify-between gap-3 py-1">
                <span className="text-xs leading-4 text-gray-600">{row.label}</span>
                <span className="text-right text-xs font-bold leading-4 text-[#0A2E4B]">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
