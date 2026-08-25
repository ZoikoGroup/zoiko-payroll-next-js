import Link from "next/link";
import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "../home/Eyebrow";

export default function HeroSection() {
  return (
    <section className="bg-footer-gradient border-b border-[#DCE6EC] pb-24 pt-16 sm:pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">System status</Eyebrow>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Zoiko Payroll service status.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
            See current service health, active incidents, scheduled maintenance and historical
            updates.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8 rounded-2xl bg-white p-6 shadow-xl sm:p-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Operational
          </span>

          <h2 className="mt-4 text-xl font-semibold text-brand-dark sm:text-2xl">
            All public components currently operational
          </h2>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
            <span>
              Last verified: <span className="font-semibold text-slate-700">Aug 24, 2026 · 09:41 UTC</span>
            </span>
            <span>
              Scope: <span className="font-semibold text-slate-700">All regions</span>
            </span>
          </div>

          <div className="mt-5 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
            No active public incidents. This does not by itself confirm every component is
            Operational — see current component health below.
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="#component-health"
              className="bg-brand-gradient rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40"
            >
              View affected components / current health
            </Link>
            <Link
              href="#active-incidents"
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30"
            >
              View active incidents
            </Link>
            <Link
              href="#get-updates"
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30"
            >
              Get updates
            </Link>
            <ArrowLink href="/resources/help-center" className="ml-auto">
              Help Center
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
