import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const outcomes = [
  { label: "Accepted", value: "1,842 records", valueClass: "bg-emerald-100 text-green-700" },
  { label: "Failed", value: "6 records", valueClass: "bg-red-100 text-red-700" },
  { label: "Held", value: "3 records", valueClass: "bg-orange-100 text-yellow-700" },
  { label: "Duplicate (prevented)", value: "2 records", valueClass: "bg-slate-100 text-slate-500" },
  { label: "Retried", value: "4 records", valueClass: "bg-orange-100 text-yellow-700" },
];

const batch = [
  { label: "Batch", value: "B-3391", mono: true },
  { label: "Correlation ID", value: "c-88f2a1", mono: true },
  { label: "Owner", value: "M. Ortiz" },
];

export default function ConnectionHealthSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Connection health &amp; reconciliation</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-sky-950">
            Partial failure is shown as partial — never rounded up
          </h2>
          <p className="mt-3 text-base leading-6 text-slate-600">
            Record-level outcomes, safe retry and a correlation ID for every batch, so nothing silently
            disappears.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div>
              {outcomes.map((outcome, index) => (
                <div
                  key={outcome.label}
                  className={`flex items-center justify-between gap-3 py-2.5 ${
                    index > 0 ? "border-t border-slate-200" : ""
                  }`}
                >
                  <span className="text-xs leading-5 text-sky-950">{outcome.label}</span>
                  <span
                    className={`shrink-0 rounded-[5px] px-2 py-[3px] font-mono text-xs font-medium leading-4 ${outcome.valueClass}`}
                  >
                    {outcome.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-4">
              {batch.map((field, index) => (
                <div
                  key={field.label}
                  className={`flex items-center justify-between gap-3 py-1.5 ${
                    index > 0 ? "border-t border-slate-200" : ""
                  }`}
                >
                  <span className="text-xs leading-5 text-sky-950">{field.label}</span>
                  <span
                    className={`text-xs leading-5 text-sky-950 ${field.mono ? "font-mono" : ""}`}
                  >
                    {field.value}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between gap-3 border-t border-slate-200 py-1.5">
                <span className="text-xs leading-5 text-sky-950">Reconciled</span>
                <span className="rounded-[5px] bg-orange-100 px-2 py-[3px] font-mono text-xs font-medium leading-4 text-yellow-700">
                  In progress
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-xs leading-5 text-slate-600">
            This batch is 99.4% accepted — it is shown as Partial Failure, with affected records and a
            support-escalation path, never labeled fully successful.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
