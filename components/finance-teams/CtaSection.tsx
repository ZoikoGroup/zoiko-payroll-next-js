import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function CtaSection() {
  return (
    <section
      id="find-your-solution"
      className="relative scroll-mt-24 overflow-hidden bg-sky-950 py-20 sm:py-24"
    >
      <img
        src="/images/finance-teams/cta-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-sky-950/75"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light" center>
            Final conversion
          </Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-4xl">
            Make payroll outcomes easier to review, reconcile and defend.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-6 text-white/70">
            Bring your entities, currencies and finance/ERP systems — we&apos;ll walk through scoped
            totals, variance and reconciliation against your actual close process.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
            <Link
              href="/book-a-demo"
              className="flex min-h-11 items-center justify-center rounded-[10px] bg-white px-6 py-3.5 text-sm font-bold text-sky-950 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href="#oversight-center"
              className="flex min-h-11 items-center justify-center rounded-[10px] border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60"
            >
              Find your solution
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
