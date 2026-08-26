import Link from "next/link";
import Reveal from "../ui/Reveal";
import { SearchIcon, ArrowRightIcon } from "../ui/icons";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-16 sm:py-20">
      <img
        src="/images/release-notes/hero-background.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-55"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(15,23,42,0.86) 0%, rgba(8,47,73,0.76) 55%, rgba(2,132,199,0.45) 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8">
        <Reveal>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300">
            <Link href="/resources" className="transition-colors duration-200 hover:text-white">
              Resources
            </Link>
            <span aria-hidden="true" className="opacity-60">
              →
            </span>
            Release Notes
          </p>

          <h1 className="mt-4 max-w-[680px] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Know what changed — and what requires action.
          </h1>

          <p className="mt-4 max-w-[620px] text-base leading-relaxed text-slate-300">
            Review verified Zoiko Payroll changes with clear applicability, rollout state, impact,
            limitations and links to the current guidance that governs what to do next.
          </p>

          <div className="mt-7 flex max-w-[620px] flex-col gap-2.5 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search releases, product areas or exact release IDs"
                className="w-full rounded-[10px] bg-white py-3 pl-11 pr-4 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
              />
            </div>
            <button
              type="button"
              className="shrink-0 rounded-lg bg-brand-gradient px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:brightness-110"
            >
              Browse release notes
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/resources/documentation"
              className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-brand-dark transition-all duration-200 hover:-translate-y-0.5"
            >
              View current Product Documentation
            </Link>
            <Link
              href="/resources/help-center"
              className="group inline-flex items-center gap-1.5 py-3 text-sm font-bold text-blue-300 transition-colors duration-200 hover:text-white"
            >
              Need help? Open Help Center
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <p className="mt-5 text-xs leading-5 text-blue-300">
            <span className="font-bold text-white">Verified change history.</span> Explicit scope.
            Visible corrections. This is a chronological ledger — not a news feed or roadmap.
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-8 lg:mt-0">
          <img
            src="/images/release-notes/hero.png"
            alt="Two colleagues reviewing a release note on a laptop"
            loading="lazy"
            className="h-56 w-full rounded-2xl object-cover sm:h-72 lg:h-[345px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
