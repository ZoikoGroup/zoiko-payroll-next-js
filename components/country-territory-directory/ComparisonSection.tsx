import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusPill, { type AvailabilityState } from "./StatusPill";

const marketColumns = ["United States", "Germany", "Brazil"];

const availability: { state: AvailabilityState; label: string }[] = [
  { state: "available", label: "Available" },
  { state: "limited", label: "Limited" },
  { state: "partner", label: "Partner-supported" },
];

const dimensions = [
  { label: "Service model", values: ["Direct", "Direct", "Partner-supported"], mono: true },
  { label: "Effective date", values: ["Mar 2025", "Jan 2026", "Nov 2025"], mono: true },
  {
    label: "Scope preview",
    values: [
      "Full statutory + calculation",
      "Calculation + reporting; filings via partner",
      "Payroll via approved partner",
    ],
    mono: false,
  },
];

export default function ComparisonSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <Eyebrow>Scope dimensions + market comparison</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold leading-8 sm:text-3xl sm:leading-9 text-slate-900">
              Compare up to three markets — no score, no ranking.
            </h2>
            <p className="mt-3 max-w-lg text-base leading-6 text-gray-700">
              Local operational and legal detail stays routed to the authoritative pages that own
              it.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/country-territory-directory/comparison.png"
              alt="Team comparing market options together at a laptop"
              className="w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-8">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="border-b border-slate-200 px-5 py-4 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                  >
                    Dimension
                  </th>
                  {marketColumns.map((market) => (
                    <th
                      key={market}
                      scope="col"
                      className="border-b border-slate-200 px-5 py-4 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                    >
                      {market}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <th
                    scope="row"
                    className="px-5 py-4 text-sm font-normal leading-5 text-slate-900"
                  >
                    Availability
                  </th>
                  {availability.map((item, index) => (
                    <td key={marketColumns[index]} className="px-5 py-4">
                      <StatusPill state={item.state} label={item.label} />
                    </td>
                  ))}
                </tr>
                {dimensions.map((dimension, rowIndex) => (
                  <tr
                    key={dimension.label}
                    className={rowIndex < dimensions.length - 1 ? "border-b border-slate-200" : ""}
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 text-sm font-normal leading-5 text-slate-900"
                    >
                      {dimension.label}
                    </th>
                    {dimension.values.map((value, index) => (
                      <td
                        key={marketColumns[index]}
                        className={`px-5 py-4 text-sm leading-5 text-slate-900 ${
                          dimension.mono ? "font-code text-xs" : ""
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-3">
          <p className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-xs leading-5 text-slate-500">
            <span aria-hidden="true">ⓘ</span> No composite score or &quot;best market&quot;
            recommendation — comparison shows documented dimensions only.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
