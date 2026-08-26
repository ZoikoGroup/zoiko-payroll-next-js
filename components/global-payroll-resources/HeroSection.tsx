import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 pb-20 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <Eyebrow>Global Payroll Resources</Eyebrow>
            <h1 className="mt-3 text-3xl font-extrabold leading-9 text-slate-900 sm:text-4xl sm:leading-10">
              Practical global payroll guidance for cross-border teams
            </h1>
            <p className="mt-3 max-w-lg text-base leading-6 text-gray-700">
              Explore guides, checklists and playbooks for governance, operating models,
              implementation, multi-entity coordination and reporting — with scope and reviewed-date
              context always visible.
            </p>

            <p className="mt-4 max-w-lg rounded-lg border border-slate-200 bg-white px-3.5 pb-2.5 pt-4 text-xs leading-5 text-slate-500">
              <span aria-hidden="true">ⓘ</span> Resources are general educational content. They
              don&apos;t provide legal, tax, accounting, payroll or employment advice, and don&apos;t
              prove current market availability or contractual capability.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold leading-6 text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book Now
              </Link>
              <Link
                href="/global-payroll/country-territory-directory"
                className="flex min-h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold leading-6 text-slate-900 transition-all duration-200 hover:-translate-y-0.5"
              >
                Check jurisdiction availability
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0px_20px_50px_-20px_rgba(8,19,43,0.15)]">
              <img
                src="/images/global-payroll-resources/hero.png"
                alt="Payroll colleagues reviewing a guidance document together"
                className="w-full rounded-lg object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
