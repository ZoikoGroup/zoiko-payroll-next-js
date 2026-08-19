import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const markets = [
  { country: "India", local: "INR", reporting: "USD", fx: "Month-end", rate: "30 Apr 2026" },
  {
    country: "United Kingdom",
    local: "GBP",
    reporting: "USD",
    fx: "Month-end",
    rate: "30 Apr 2026",
  },
  { country: "Germany", local: "EUR", reporting: "USD", fx: "Month-end", rate: "30 Apr 2026" },
  { country: "United States", local: "USD", reporting: "USD", fx: "—", rate: "—" },
];

const flow = ["Zoiko Payroll", "Finance package", "ERP / finance system"];

/** Export lifecycle vocabulary — each state is shown, none is inferred. */
const states = [
  { label: "Mapping v2", dot: "" },
  { label: "Submitted", dot: "bg-green-400" },
  { label: "Accepted", dot: "bg-green-400" },
  { label: "Partial", dot: "bg-amber-400" },
  { label: "Failed", dot: "bg-rose-400" },
  { label: "Retry", dot: "bg-sky-400" },
  { label: "Reconciliation", dot: "bg-slate-400" },
];

export default function IntegrationsSection() {
  return (
    <section className="relative overflow-hidden bg-sky-950 py-20 sm:py-24">
      <img
        src="/images/finance-teams/integrations-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/55 to-sky-950/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            wrap
            eyebrow="Multi-entity, currency + finance integrations"
            title="One scoped view across entities and currencies — connected to your finance systems"
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {markets.map((market) => (
              <div
                key={market.country}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-5"
              >
                <h3 className="text-base font-bold leading-6 text-white">{market.country}</h3>
                <p className="text-xs font-bold leading-4 text-blue-400">{market.local}</p>

                <div className="mt-4 flex flex-col gap-2.5">
                  {[
                    { label: "Reporting", value: market.reporting },
                    { label: "FX basis", value: market.fx },
                    { label: "Rate date", value: market.rate },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-wrap items-center justify-between gap-2 border-b border-dashed border-white/15 pb-2 last:border-b-0"
                    >
                      <span className="text-xs leading-4 text-white/60">{row.label}</span>
                      <span className="text-xs font-bold leading-4 text-white">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            {flow.map((step, index) => (
              <div key={step} className="flex flex-col items-center gap-3 sm:flex-row">
                <span className="rounded-lg border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold leading-5 text-white">
                  {step}
                </span>
                {index < flow.length - 1 ? (
                  <span className="text-white/30" aria-hidden="true">
                    <span className="hidden sm:inline">→</span>
                    <span className="sm:hidden">↓</span>
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-8">
          <div className="flex flex-wrap justify-center gap-2">
            {states.map((state) => (
              <span
                key={state.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold leading-4 text-white/80"
              >
                {state.dot ? (
                  <span className={`h-1.5 w-1.5 rounded-full ${state.dot}`} aria-hidden="true" />
                ) : null}
                {state.label}
              </span>
            ))}
          </div>

          <p className="mt-8 text-center text-sm leading-6 text-white/70">
            &quot;Integrations remove duplicate work — never control.&quot;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
