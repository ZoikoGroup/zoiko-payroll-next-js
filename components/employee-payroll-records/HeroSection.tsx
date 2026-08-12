import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function HeroSection() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Employee payroll records</Eyebrow>
            <h1 className="mt-4 max-w-md text-4xl font-bold leading-10 text-sky-950">
              Employee payroll records employees can find and trust.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-6 text-slate-600">
              Give employees secure, permission-controlled access to their applicable payroll records —
              with a clear current version, a visible correction history, and a straightforward way to
              ask for help.
            </p>
            <div className="mt-6 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="bg-brand-gradient flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <span className="flex min-h-11 items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-sky-950">
                See how records are published
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-slate-300 shadow-sm">
              <div className="h-[3px] bg-linear-to-r from-blue-400 via-sky-600 to-sky-950" aria-hidden="true" />
              <img
                src="/images/employee-payroll-records/hero.png"
                alt="Employees reviewing a payroll record together"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
