import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const exceptions = [
  {
    title: "Time source stale",
    meta: "Hourly — Aug 1–15 · it-integrations · Due Aug 13",
    selected: true,
  },
  {
    title: "Conflicting deduction inputs",
    meta: "Salaried — Aug 1–15 · payroll-ops · Due Aug 14",
    selected: false,
  },
  {
    title: "Reapproval required",
    meta: "Contractor — Aug 1–15 · m.chen · Due Aug 14",
    selected: false,
  },
];

const evidence = [
  { label: "Source", value: "Time system integration", mono: false },
  { label: "Current value", value: "Last sync: 26h ago", mono: true },
  { label: "Condition", value: "Source freshness threshold", mono: false },
  { label: "Affected scope", value: "318 records", mono: true },
];

const actions = ["Add context", "Reassign", "Escalate", "Accept with rationale"];

export default function ExceptionSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Exception resolution"
            title="A neutral queue — never employee-blame language"
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
            <div className="border-slate-200 lg:border-r">
              {exceptions.map((exception, index) => (
                <div
                  key={exception.title}
                  className={`px-4 py-3.5 ${
                    index < exceptions.length - 1 ? "border-b border-slate-200" : ""
                  } ${exception.selected ? "bg-indigo-50" : ""}`}
                >
                  <p className="text-xs font-semibold leading-5 text-slate-900">
                    {exception.title}
                  </p>
                  <p className="text-xs leading-4 text-slate-500">{exception.meta}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 p-5 lg:border-t-0">
              <h3 className="pb-3.5 text-xs font-bold uppercase leading-5 tracking-wide text-slate-500">
                Evidence
              </h3>
              {evidence.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap justify-between gap-3 border-b border-slate-200 py-2"
                >
                  <span className="text-xs leading-5 text-slate-500">{row.label}</span>
                  <span
                    className={
                      row.mono
                        ? "font-mono text-xs leading-5 text-slate-500"
                        : "text-xs leading-5 text-slate-900"
                    }
                  >
                    {row.value}
                  </span>
                </div>
              ))}

              <div className="mt-4 flex flex-wrap gap-2">
                {actions.map((action) => (
                  <span
                    key={action}
                    className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold leading-4 text-gray-700"
                  >
                    {action}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
