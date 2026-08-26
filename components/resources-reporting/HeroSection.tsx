import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function HeroSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>Reporting</Eyebrow>

          <h1 className="mt-3.5 max-w-[1040px] text-3xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Find the reporting guidance behind payroll insights, exports and reconciliation.
          </h1>

          <p className="mt-5 max-w-[720px] text-base leading-7 text-slate-600">
            Understand payroll reporting concepts, reconciliation and safe exports — then move to
            the current Product, Global Payroll or Trust authority for the decision you need to
            make.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
            <Link
              href="#direct-answer"
              className="rounded-lg bg-brand-gradient px-6 py-3.5 text-center text-sm font-bold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40"
            >
              Explore reporting guidance
            </Link>
            <Link
              href="/product/reporting"
              className="rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-center text-sm font-bold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40"
            >
              See Reporting and Analytics
            </Link>
          </div>
        </Reveal>

        <Reveal delay={140} className="relative mt-12 overflow-hidden rounded-3xl bg-brand-dark">
          <img
            src="/images/resources-reporting/hero-dashboard.png"
            alt="Analytics dashboards showing load time, render and session charts"
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(28deg, rgba(15,23,42,0.92) 0%, rgba(8,47,73,0.78) 55%, rgba(10,120,194,0.40) 100%)",
            }}
          />
          <div className="relative flex min-h-72 flex-col justify-center px-6 py-10 sm:min-h-80 sm:px-10 lg:min-h-90 lg:px-13">
            <Eyebrow tone="light">Educational, not operational</Eyebrow>
            <h2 className="mt-3 max-w-[520px] text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
              Current product behavior always lives in Reporting and Analytics.
            </h2>
            <p className="mt-3 max-w-[520px] text-sm leading-6 text-slate-300 sm:text-base">
              This page teaches concepts — scope, definitions, reconciliation and safe exports.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
