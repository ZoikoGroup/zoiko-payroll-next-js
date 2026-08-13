import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

/** `detail` is split into the two lines the design sets it on. */
const problems = [
  {
    problem: "Spreadsheet reconstruction",
    detail: ["Numbers rebuilt by hand every", "period, with no traceable source."],
    resolvedBy: "Reporting workspace",
  },
  {
    problem: "Currency confusion",
    detail: ["Totals mixed across entities without", "a conversion basis."],
    resolvedBy: "Entity & jurisdiction views",
  },
  {
    problem: "Silent corrections",
    detail: ["A restated period looks identical to", "the original."],
    resolvedBy: "Trend correction markers",
  },
  {
    problem: "Hidden reconciliation differences",
    detail: ["A batch reads as reconciled while", "records still disagree."],
    resolvedBy: "Reconciliation review",
  },
  {
    problem: "Unsafe exports",
    detail: ["A partial export looks like a", "completed one."],
    resolvedBy: "Export confirmation flow",
  },
  {
    problem: "Scattered audit evidence",
    detail: ["No single place to see who changed", "what, and why."],
    resolvedBy: "Audit reports",
  },
];

export default function ProblemsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/reporting/reporting-gap.png"
              alt="Two colleagues reviewing a printed payroll chart"
              className="h-72 w-full rounded-2xl object-cover shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)] sm:h-96"
            />
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Reporting gap</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold leading-8 text-slate-900">
              The failures payroll reporting quietly hides
            </h2>
            <p className="mt-3.5 max-w-lg text-base leading-6 text-gray-700">
              Each recognizable problem connects to a specific capability below — not a generic
              &ldquo;data-driven&rdquo; promise.
            </p>
          </Reveal>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, index) => (
            <Reveal key={item.problem} delay={index * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-xs font-bold leading-5 text-red-600">{item.problem}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                  {item.detail[0]}
                  <br />
                  {item.detail[1]}
                </p>
                <p className="mt-auto pt-6 font-mono text-xs leading-4 text-slate-500">
                  &darr; resolved by
                </p>
                <p className="mt-1.5 text-xs font-bold leading-5 text-green-600">
                  &#10003; {item.resolvedBy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
