import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const toc = [
  "Market overview",
  "Calendars & pay frequency",
  "Worker & payroll inputs",
  "Calculations & deductions",
  "Documents & reporting",
  "Sources & corrections",
];

const authorityRail = [
  { title: "Current availability", description: "Check current UK status in the Directory." },
  { title: "Local requirements", description: "Review the approved UK requirement record." },
  { title: "Implementation", description: "Open Implementation and Migration." },
  { title: "Product behavior", description: "Open Product Documentation." },
];

export default function CanonicalGuideSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Canonical guide page</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Every guide follows the same trustworthy structure
          </h2>
          <p className="mt-3 max-w-[660px] text-base leading-6 text-gray-600">
            Identity first, then educational context, then the current authority — never a lead form
            before the first useful fact.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_30px_60px_-26px_rgba(15,45,70,0.22)]"
        >
          <p className="border-b border-slate-200 bg-slate-100 px-4 py-3 text-xs leading-4 text-slate-500 sm:px-6">
            Home / Global Payroll / Jurisdiction Guides / United Kingdom
          </p>

          <div className="border-b border-slate-200 px-4 py-6 sm:px-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-[20px] bg-slate-100 px-2.5 py-[3px] text-xs font-bold leading-4 text-slate-500">
                Country · Europe
              </span>
              <span className="rounded-[20px] bg-green-100 px-2.5 py-[3px] text-xs font-bold leading-4 text-emerald-600">
                Current
              </span>
            </div>

            <h3 className="mt-3 text-xl font-bold leading-9 text-[#0A2E4B] sm:text-2xl">
              United Kingdom Payroll Guide
            </h3>
            <p className="mt-1 max-w-[520px] text-sm leading-5 text-gray-600">
              Market context, terminology and operating questions for running payroll in the United
              Kingdom — reviewed and source-linked.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)]">
            <div className="border-b border-slate-200 bg-slate-100 px-5 pb-6 pt-5 lg:border-b-0 lg:border-r">
              <p className="pb-2.5 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                On this page
              </p>
              {toc.map((item) => (
                <p
                  key={item}
                  className="border-b border-slate-200 pb-1.5 pt-[5px] text-xs leading-5 text-[#0A2E4B] last:border-b-0"
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="px-4 py-5 sm:px-6">
              <p className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-700">
                Direct answer
              </p>
              <p className="mt-1.5 text-sm leading-5 text-gray-600">
                This guide explains UK payroll terminology, the operating environment, common
                parties and systems, and the questions worth investigating before running payroll
                here. It is educational — not legal, tax or employment advice.
              </p>

              <p className="mt-4 text-xs font-bold uppercase leading-4 tracking-wide text-sky-700">
                Market overview
              </p>
              <p className="mt-1.5 text-sm leading-5 text-gray-600">
                Covers common terminology, typical operating parties and the kinds of questions a
                payroll or finance team should ask when evaluating the UK market.
              </p>

              <p className="mt-4 text-xs font-bold uppercase leading-4 tracking-wide text-sky-700">
                Current authority rail
              </p>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {authorityRail.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-2.5"
                  >
                    <p className="text-xs font-bold leading-5 text-[#0A2E4B]">{item.title}</p>
                    <p className="text-xs leading-4 text-slate-500">{item.description}</p>
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
