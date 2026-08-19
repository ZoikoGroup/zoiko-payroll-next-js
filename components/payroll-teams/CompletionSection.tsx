import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const conditions: { label: string; state: "ok" | "warn" | "fail" }[] = [
  { label: "Required inputs ready", state: "ok" },
  { label: "Calculation complete", state: "ok" },
  { label: "Validation status: 1 warning acknowledged", state: "warn" },
  { label: "Required approvals: 1 pending reapproval", state: "fail" },
];

const stateStyles = {
  ok: { box: "bg-emerald-50 text-green-600", glyph: "✓" },
  warn: { box: "bg-orange-100 text-yellow-700", glyph: "!" },
  fail: { box: "bg-rose-100 text-red-600", glyph: "×" },
};

/** Downstream vocabulary — the current state is outlined rather than colour-coded. */
const downstream = [
  { label: "Sent", active: false },
  { label: "Accepted", active: false },
  { label: "Failed", active: false },
  { label: "Partial", active: false },
  { label: "Reconciled", active: false },
  { label: "Unknown / Pending", active: true },
];

export default function CompletionSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Completion, close + governed changes"
            title="Completion is not the same as calculation"
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {conditions.map((condition, index) => (
              <div
                key={condition.label}
                className={`flex items-center gap-2.5 px-5 py-4 ${
                  index < conditions.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-xs font-bold leading-4 ${stateStyles[condition.state].box}`}
                  aria-hidden="true"
                >
                  {stateStyles[condition.state].glyph}
                </span>
                <span className="text-sm leading-5 text-slate-900">{condition.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-5">
          <div className="flex flex-wrap gap-2">
            {downstream.map((item) => (
              <span
                key={item.label}
                className={`rounded-full border bg-white px-3 py-1.5 text-xs leading-4 ${
                  item.active ? "border-slate-500 text-slate-900" : "border-slate-200 text-gray-700"
                }`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
