import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const trustPoints = [
  "Canonical identity",
  "Reviewed date",
  "Source-linked context",
  "Current-status handoff",
  "Versioned corrections",
];

const thumbs = [
  { image: "/images/global-payroll-jurisdiction-guides/hero-thumb-germany.png", alt: "Germany" },
  { image: "/images/global-payroll-jurisdiction-guides/hero-thumb-brazil.png", alt: "Brazil" },
  {
    image: "/images/global-payroll-jurisdiction-guides/hero-thumb-singapore.png",
    alt: "Singapore",
  },
  { image: "/images/global-payroll-jurisdiction-guides/hero-thumb-france.png", alt: "France" },
];

const guideTags = ["Calendars", "Calculations", "Documents", "Approvals"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-b-[32px] bg-brand-dark py-14 sm:py-20">
      <img
        src="/images/global-payroll-jurisdiction-guides/hero-background.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-30 mix-blend-luminosity"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(44deg, rgba(15,23,42,0.95) 0%, rgba(8,47,73,0.90) 40%, rgba(2,132,199,0.60) 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">Jurisdiction guides</Eyebrow>

          <h1 className="mt-3.5 max-w-[520px] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Payroll jurisdiction guides with current market context.
          </h1>

          <p className="mt-5 max-w-[570px] text-base leading-6 text-slate-300">
            Explore reviewed market-specific payroll guidance while keeping current availability,
            approved local requirements and implementation scope one clear authority link away.
          </p>

          <p className="mt-5 max-w-[540px] text-xs leading-5 text-blue-200">
            <span className="font-bold text-slate-200">Boundary:</span> Guides are general
            educational information, not legal, tax, accounting, payroll or employment advice. They
            do not guarantee availability, statutory compliance or product support.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#guide-directory"
              className="rounded-lg bg-brand-gradient px-6 py-3 text-center text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              Find a jurisdiction guide
            </Link>
            <Link
              href="/global-payroll/jurisdiction-coverage"
              className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60"
            >
              Check jurisdiction availability
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/20 pt-5">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-xs font-semibold text-sky-100">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
            <div className="rounded-[10px] border border-slate-200 bg-[#EEF2FF] px-4 py-3">
              <p className="text-xs leading-5 text-slate-400">
                🔍 Search jurisdictions — e.g., Germany, Brazil, Singapore
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-slate-200 p-4">
              <div className="flex items-start gap-3">
                <img
                  src="/images/global-payroll-jurisdiction-guides/flag-germany.png"
                  alt=""
                  loading="lazy"
                  className="h-6 w-[34px] shrink-0 rounded-[5px] object-cover"
                />
                <div>
                  <p className="text-sm font-bold leading-5 text-brand-dark">
                    Germany — Payroll Guide
                  </p>
                  <p className="mt-0.5 text-xs leading-4 text-slate-400">
                    Country · Reviewed Aug 2026
                  </p>
                </div>
              </div>

              <div className="mt-3.5 flex flex-wrap gap-2">
                {guideTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[20px] bg-sky-100 px-2.5 py-1 text-xs font-bold leading-4 text-sky-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-3.5 text-xs leading-4 text-slate-400">
                3 sources referenced &nbsp;·&nbsp; v6
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-[10px] bg-emerald-50 px-4 py-3">
              <span className="text-sm leading-5 text-brand-dark">
                Current Zoiko Payroll availability
              </span>
              <span className="text-sm font-bold leading-5 text-brand-dark">Available</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {thumbs.map((thumb) => (
              <img
                key={thumb.alt}
                src={thumb.image}
                alt={thumb.alt}
                loading="lazy"
                className="h-20 w-full rounded-[10px] border border-white/20 object-cover"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
