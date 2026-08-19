import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const signals = [
  {
    step: "01",
    title: "More people, more changes",
    description: "Structured inputs, change history and employee records instead of loose spreadsheets.",
  },
  {
    step: "02",
    title: "More people touching payroll",
    description:
      "Named preparer, reviewer and approver roles — with backup ownership — so nothing depends on one inbox.",
  },
  {
    step: "03",
    title: "More payroll groups or frequencies",
    description:
      "Explicit payroll-group structure and a controlled close, instead of ad hoc coordination.",
  },
  {
    step: "04",
    title: "More exceptions or corrections",
    description: "A visible exception queue with owner, due date and version history.",
  },
  {
    step: "05",
    title: "More systems in the mix",
    description: "Approved integrations with visible connection health, instead of duplicate entry.",
  },
  {
    step: "06",
    title: "More reporting and audit scrutiny",
    description: "A report catalog, filters and reconciliation, so totals hold up under review.",
  },
];

export default function GrowthSignalsSection() {
  return (
    <section className="bg-stone-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title="Not a failure — a set of signals worth recognizing"
            description="Growth itself isn't the problem. These are the operational moments where a bit more payroll structure starts to pay off."
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-neutral-300 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
            <div className="relative min-h-64">
              <img
                src="/images/growing-businesses/growth-signals.png"
                alt="A growing team gathered for an all-hands in an open office"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute left-5 top-5 rounded-sm bg-white px-3.5 py-1.5 text-xs leading-4 text-slate-900 shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                GROWTH SIGNALS
              </span>
            </div>

            <ul className="bg-white">
              {signals.map((signal, index) => (
                <li
                  key={signal.step}
                  className={`flex gap-4 px-5 py-5 sm:px-7 ${
                    index < signals.length - 1 ? "border-b border-neutral-300" : ""
                  }`}
                >
                  <span className="w-6 shrink-0 pt-0.5 text-xs leading-5 text-slate-500">
                    {signal.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-6 text-slate-900">
                      {signal.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-5 text-slate-600">{signal.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
