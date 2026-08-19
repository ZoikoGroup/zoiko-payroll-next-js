import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const lanes = [
  { label: "Payroll", items: ["Prepare", "Calculate", "Validate", "Approve"] },
  { label: "Finance", items: ["Review totals", "Explain variance", "Reconcile", "Review evidence"] },
  {
    label: "Accounting / ERP",
    items: ["Ledger authority", "Accounting treatment", "Downstream financial system"],
  },
];

export default function ResponsibilitySection() {
  return (
    <section className="relative overflow-hidden bg-sky-950 py-20 sm:py-24">
      <img
        src="/images/finance-teams/responsibility-bg.png"
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
            eyebrow="Finance responsibility & decision rights"
            title="Separated ownership, connected outcomes"
            description="Zoiko Payroll produces the approved payroll outcome. Finance reviews and reconciles it. Accounting/ERP holds ledger authority — Zoiko Payroll never replaces that system."
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {lanes.map((lane, index) => (
              <div key={lane.label} className="contents">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-400">
                    {lane.label}
                  </p>
                  <div className="mt-3.5">
                    {lane.items.map((item, itemIndex) => (
                      <p
                        key={item}
                        className={`py-2.5 text-sm font-bold leading-5 text-white ${
                          itemIndex < lane.items.length - 1 ? "border-b border-white/20" : ""
                        }`}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                {index < lanes.length - 1 ? (
                  <div
                    className="flex items-center justify-center text-xl leading-8 text-white/30 lg:pt-14"
                    aria-hidden="true"
                  >
                    <span className="hidden lg:inline">→</span>
                    <span className="lg:hidden">↓</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-6">
          <p className="max-w-2xl text-xs leading-5 text-white/60">
            Zoiko Payroll does not hold ledger authority and does not perform accounting treatment.
            Those responsibilities remain with your accounting/ERP system.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
