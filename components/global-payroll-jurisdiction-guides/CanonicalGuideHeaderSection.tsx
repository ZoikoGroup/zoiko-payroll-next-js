import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function CanonicalGuideHeaderSection() {
  return (
    <section
      id="canonical-guide-header"
      className="scroll-mt-24 border-t border-slate-200 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Canonical guide header</Eyebrow>
          <h2 className="mt-3.5 max-w-[560px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Every guide opens with the same identity contract.
          </h2>
        </Reveal>

        <Reveal delay={120} className="relative mt-8 overflow-hidden rounded-2xl bg-brand-dark">
          <img
            src="/images/global-payroll-jurisdiction-guides/canonical-guide-header.png"
            alt="A German town skyline representing the Germany payroll guide"
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(15,23,42,0.88) 0%, rgba(8,47,73,0.70) 55%, rgba(8,47,73,0.25) 100%)",
            }}
          />

          <div className="relative max-w-[560px] px-6 py-12 sm:px-10 sm:py-16">
            <Eyebrow tone="light">Country · Europe</Eyebrow>
            <p className="mt-3.5 text-xl font-extrabold leading-tight text-white sm:text-2xl">
              Germany Payroll Guide
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              What running payroll in Germany typically involves — terminology, operating
              environment and the questions worth investigating before you configure anything.
            </p>
            <p className="mt-3 text-sm leading-5 text-slate-300">
              Reviewed Aug 2026 · Version 6 · 3 sources
            </p>

            <Link
              href="#guide-directory"
              className="mt-6 inline-flex rounded-lg bg-sky-300 px-6 py-3 text-sm font-bold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
            >
              Open the guide
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
