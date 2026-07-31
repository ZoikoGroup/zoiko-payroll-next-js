import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function HeroSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <Eyebrow>About Zoiko Payroll</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-dark sm:text-5xl">
              Building controlled payroll operations for global business.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600">
              Zoiko Payroll exists because payroll is too important to depend on fragmented systems,
              unclear handoffs, and limited operational visibility. We give organizations one secure,
              structured environment for managing payroll workflows, approvals, records, reporting, and
              employee access across supported jurisdictions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="bg-brand-gradient rounded-lg px-6 py-3 text-center text-sm font-semibold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40"
              >
                Book a demo
              </Link>
              <Link
                href="/global-payroll/jurisdiction-directory"
                className="rounded-lg border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                Check jurisdiction availability
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/about/hero.png"
              alt="Payroll and finance team reviewing reports"
              loading="lazy"
              className="h-auto w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
