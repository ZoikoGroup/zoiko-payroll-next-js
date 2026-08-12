import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { RecordsIcon, PulseIcon, ExportIcon, ShieldIcon } from "../ui/icons";

const outcomes = [
  {
    icon: RecordsIcon,
    title: "Employee records",
    description: "Payslips & payroll history, permissioned and privacy-minimized.",
  },
  {
    icon: PulseIcon,
    title: "Summaries",
    description: "Totals and status by period and entity.",
  },
  {
    icon: ExportIcon,
    title: "Exports & reconciliation",
    description: "Structured exports mapped for downstream reconciliation.",
  },
  {
    icon: ShieldIcon,
    title: "Audit reporting",
    description: "Traceable decisions and history for review.",
  },
];

export default function OutcomesSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#F4F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Employee records &amp; reporting</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            What a completed run branches into.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Controlled, permissioned downstream outcomes — not invented scoring or unsupported
            cross-market normalization.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <Reveal key={outcome.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-brand-dark">{outcome.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{outcome.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
