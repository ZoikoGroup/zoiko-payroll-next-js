import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { lifecycleStages } from "./lifecycle-data";

const inputs = [
  "Employee & payroll records",
  "Earnings & deductions",
  "Approved changes",
  "Time / absence context",
  "Period, entity & jurisdiction",
];

const outputs = [
  "Completed payroll record",
  "Employee documents",
  "Summaries & reports",
  "Export / reconciliation context",
  "Integration status",
];

const controls = [
  "Role-based access",
  "Approval separation",
  "Audit history",
  "Effective dates / version context",
  "Integration status",
  "Security controls",
];

function ColumnList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OperatingModelSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#F4F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>End-to-end operating model</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            What happens before and after the six stages.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Zoiko Payroll sits between validated inputs and reportable outcomes, wrapped in the same
            controls on every run.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
            <ColumnList title="Inputs" items={inputs} />

            <span className="hidden text-slate-400 lg:block" aria-hidden="true">
              →
            </span>

            <div className="rounded-2xl bg-brand-dark p-6">
              <h3 className="text-base font-semibold text-white/60">Zoiko Payroll</h3>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {lifecycleStages.map((stage) => (
                  <span
                    key={stage.id}
                    className="rounded-lg border border-white/10 bg-white/5 px-2 py-2.5 text-center"
                  >
                    <span className="block text-[10px] font-semibold text-brand-light">
                      {stage.number}
                    </span>
                    <span className="mt-0.5 block text-xs font-semibold text-white">{stage.label}</span>
                  </span>
                ))}
              </div>
            </div>

            <span className="hidden text-slate-400 lg:block" aria-hidden="true">
              →
            </span>

            <ColumnList title="Outputs" items={outputs} />
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-10 flex flex-wrap gap-2.5">
          {controls.map((control) => (
            <span
              key={control}
              className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand"
            >
              {control}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
