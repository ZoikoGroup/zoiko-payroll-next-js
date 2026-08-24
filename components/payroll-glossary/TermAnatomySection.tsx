import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const notTheSameAs = ["Pay date", "Processing window"];

const authorities = [
  {
    title: "Current product behavior",
    description: "See Product Documentation for configured calendars.",
  },
  {
    title: "Local payroll requirements",
    description: "Applicable requirement authority by market.",
  },
];

const relatedTerms = ["Payroll frequency", "Cutoff", "Processing window"];

export default function TermAnatomySection() {
  return (
    <section id="term-anatomy" className="scroll-mt-24 bg-[#E9F0F8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Canonical term page</Eyebrow>
          <h2 className="mt-6 max-w-xl text-2xl font-bold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Every term follows the same trustworthy structure.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-6 text-gray-600">
            Definition first, then boundary, distinctions and the right authority — never sales copy
            before meaning.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_30px_60px_-26px_rgba(15,45,70,0.22)]">
            <p className="border-b border-slate-200 bg-slate-50 px-6 py-3.5 text-xs leading-4 text-slate-500">
              Home / Resources / Payroll Glossary / Pay period
            </p>

            <div className="border-b border-slate-200 px-6 py-6">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-[20px] bg-slate-100 px-2.5 py-1 text-xs font-bold leading-4 text-slate-500">
                  General payroll
                </span>
                <span className="inline-flex items-center rounded-[20px] bg-green-100 px-2.5 py-1 text-xs font-bold leading-4 text-emerald-600">
                  Current
                </span>
              </div>
              <p className="mt-4 text-2xl font-bold leading-9 text-sky-950">Pay period</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_464px]">
              <div className="border-b border-slate-200 px-6 py-6 lg:border-b-0 lg:border-r">
                <h3 className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-700">
                  Direct definition
                </h3>
                <p className="mt-3 text-sm leading-5 text-gray-600">
                  The span of time for which earnings and other payroll inputs are attributed for a
                  payroll calculation.
                </p>

                <h3 className="mt-8 text-xs font-bold uppercase leading-4 tracking-wide text-sky-700">
                  What this definition does not determine
                </h3>
                <p className="mt-3 rounded-lg bg-blue-50 px-3.5 py-3 text-xs leading-5 text-blue-950">
                  The configured payroll calendar, actual pay date, or a specific customer&apos;s
                  processing schedule — those remain governed by Product Documentation and the
                  applicable payroll record.
                </p>

                <h3 className="mt-8 text-xs font-bold uppercase leading-4 tracking-wide text-sky-700">
                  In payroll operations
                </h3>
                <p className="mt-3 text-sm leading-5 text-gray-600">
                  Teams reference the pay period to attribute time, earnings and adjustments to the
                  correct calculation before review and approval.
                </p>

                <h3 className="mt-8 text-xs font-bold uppercase leading-4 tracking-wide text-sky-700">
                  Example
                </h3>
                <p className="mt-3 text-sm leading-5 text-gray-600">
                  A synthetic August 2026 payroll run may attribute inputs dated Aug 1–31 to that
                  period, independent of when payment is issued.
                </p>
              </div>

              <div className="bg-slate-50 px-6 py-6">
                <h3 className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                  Not the same as
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {notTheSameAs.map((item) => (
                    <li
                      key={item}
                      className="rounded-[20px] border border-slate-200 bg-white px-3 py-1.5 text-xs leading-4 text-sky-950"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                  Authority
                </h3>
                <ul className="mt-3 space-y-3">
                  {authorities.map((authority) => (
                    <li
                      key={authority.title}
                      className="rounded-lg border border-slate-200 bg-white px-3.5 py-3"
                    >
                      <p className="text-xs font-bold leading-5 text-sky-950">{authority.title}</p>
                      <p className="mt-1 text-xs leading-4 text-slate-500">
                        {authority.description}
                      </p>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                  Related terms
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {relatedTerms.map((item) => (
                    <li
                      key={item}
                      className="rounded-[20px] border border-slate-200 bg-white px-3 py-1.5 text-xs leading-4 text-sky-950"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
