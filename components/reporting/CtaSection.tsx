import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stats = [
  { value: "100%", label: "Metrics carry scope + period + currency" },
  { value: "0", label: "Silent historical corrections" },
  { value: "Aggregate", label: "Default executive access level" },
];

export default function CtaSection() {
  return (
    <section className="bg-[#F7FBFD] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-[#0D1B30]">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="p-8 lg:col-span-3 lg:p-12">
                <Eyebrow tone="light">Ready to make payroll reporting easier to verify?</Eyebrow>
                <h2 className="mt-3 text-2xl font-extrabold leading-8 text-white sm:text-3xl sm:leading-10">
                  See payroll outcomes with the context behind them.
                </h2>
                <p className="mt-3.5 max-w-md text-sm leading-6 text-white/70">
                  A guided walkthrough of the reporting workspace, reconciliation and audit evidence —
                  mapped to your entities.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/book-a-demo"
                    className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Book a demo
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Product tour
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6 border-t border-white/10 bg-[#12294A] p-8 lg:col-span-2 lg:border-t-0 lg:border-l lg:p-12">
                {stats.map((stat) => (
                  <div key={stat.value}>
                    <p className="font-mono text-2xl font-bold leading-8 text-white">{stat.value}</p>
                    <p className="mt-0.5 text-xs leading-4 text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
