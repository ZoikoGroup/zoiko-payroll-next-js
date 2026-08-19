import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

/** The chain is the point: a difference is a named step, never a silent adjustment. */
const chain = [
  { label: "Approved payroll", highlight: false },
  { label: "Expected package", highlight: false },
  { label: "Downstream receipt", highlight: false },
  { label: "Difference", highlight: true },
  { label: "Retry / recovery", highlight: false },
  { label: "Reconciled evidence", highlight: false },
];

const stats = [
  { value: "1,240", label: "Records", tone: "text-white" },
  { value: "1,236", label: "Accepted", tone: "text-white" },
  { value: "4", label: "Failed", tone: "text-rose-400" },
  { value: "Partial", label: "Status · retry eligible: 4", tone: "text-amber-400" },
];

export default function ReconciliationSection() {
  return (
    <section className="relative overflow-hidden bg-sky-950 py-20 sm:py-24">
      <img
        src="/images/finance-teams/reconciliation-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-sky-950/72"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            center
            eyebrow="Reconciliation control"
            title="Partial is a status, not a rounding error"
            description="Every approved payroll outcome is tracked from the expected downstream package through to reconciled evidence — with failures shown, never smoothed over."
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="mx-auto flex max-w-lg flex-col items-stretch">
            {chain.map((step, index) => (
              <div key={step.label}>
                <div
                  className={`rounded-lg border px-5 py-3.5 text-center text-sm font-bold leading-5 ${
                    step.highlight
                      ? "border-amber-400/60 bg-white/5 text-amber-400"
                      : "border-white/15 bg-white/5 text-white"
                  }`}
                >
                  {step.label}
                </div>
                {index < chain.length - 1 ? (
                  <p className="py-2 text-center text-sm leading-5 text-white/30" aria-hidden="true">
                    ↓
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-5 text-center"
              >
                <p className={`font-mono text-2xl font-extrabold leading-8 ${stat.tone}`}>
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase leading-4 tracking-wide text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
