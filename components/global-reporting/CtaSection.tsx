import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function CtaSection() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-[#0E1E3C] px-6 py-16 text-center sm:px-10">
            <img
              src="/images/global-reporting/cta-bg.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover brightness-150"
            />
            <div className="absolute inset-0 bg-[#0E1E3C]/45" aria-hidden="true" />

            <div className="relative">
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-300">
                Ready to make global payroll reporting explainable?
              </p>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                See the portfolio view — and the source behind every result.
              </h2>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/book-a-demo"
                  className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  Book a demo
                </Link>
                <Link
                  href="/global-payroll/multi-entity"
                  className="flex min-h-11 items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5"
                >
                  Explore Multi-Entity Payroll
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
