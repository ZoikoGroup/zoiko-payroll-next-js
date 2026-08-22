import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusPill from "./StatusPill";

const quickDetail = [
  { label: "Service model", value: "Direct", mono: false },
  { label: "Effective date", value: "Jan 2026", mono: true },
  { label: "Evidence freshness", value: "Current", mono: true },
  { label: "Currency (verified)", value: "EUR", mono: true },
  { label: "Frequency (verified)", value: "Monthly", mono: true },
];

export default function MarketSummarySection() {
  return (
    <section
      id="market-summary"
      className="scroll-mt-24 border-t border-slate-200 bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Market summary + quick detail</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold leading-8 sm:text-3xl sm:leading-9 text-slate-900">
            A summary only — never a field that can&apos;t be proven
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 lg:grid-cols-2">
            <div className="bg-white px-6 py-6">
              <h3 className="text-2xl leading-8 text-slate-900">Germany</h3>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                Country · Europe · Parent: European Union (region grouping)
              </p>
              <div className="mt-3">
                <StatusPill state="limited" label="Limited availability" />
              </div>
              <p className="mt-4 max-w-md text-sm leading-6 text-gray-700">
                Payroll calculation and reporting supported for standard employment categories.
                Certain statutory filings require a local partner handoff — see documented scope for
                exact boundaries.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:max-w-xs">
                <Link
                  href="/global-payroll/coverage"
                  className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  View documented coverage
                </Link>
                <Link
                  href="/local-payroll-requirements"
                  className="flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Read jurisdiction guide
                </Link>
              </div>
            </div>

            <div className="bg-white px-6 py-6">
              <h3 className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Quick detail
              </h3>
              <dl className="mt-4">
                {quickDetail.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 py-3"
                  >
                    <dt className="text-sm leading-5 text-gray-700">{item.label}</dt>
                    <dd
                      className={`text-sm leading-5 text-slate-900 ${item.mono ? "font-code text-xs" : "font-semibold"}`}
                    >
                      {item.value}
                    </dd>
                  </div>
                ))}
                <div className="flex flex-wrap items-center justify-between gap-2 py-3">
                  <dt className="text-sm leading-5 text-gray-700">Guide available</dt>
                  <dd>
                    <Link
                      href="/local-payroll-requirements"
                      className="text-sm font-semibold leading-5 text-slate-900 transition-colors duration-200 hover:text-blue-600"
                    >
                      Yes <span aria-hidden="true">→</span>
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
