import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stages = [
  { step: "01", title: "Create", detail: ["Scope, type, amount and", "reason captured."] },
  { step: "02", title: "Scope", detail: ["Entity, jurisdiction and", "period assigned."] },
  { step: "03", title: "Validate", detail: ["Conflicts, duplicates and", "dates checked."] },
  { step: "04", title: "Review", detail: ["Authorized reviewer", "examines the change."] },
  { step: "05", title: "Approve", detail: ["Required approval recorded", "where configured."] },
  { step: "06", title: "Apply", detail: ["Change reaches the", "eligible payroll version."] },
  { step: "07", title: "Preserve", detail: ["Original and changed", "values retained in history."] },
];

export default function LifecycleSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative flex min-h-80 items-end overflow-hidden rounded-2xl">
            <img
              src="/images/deductions/lifecycle-banner.png"
              alt="Open-plan payroll operations floor"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-93 from-sky-950/90 via-sky-950/60 to-sky-950/10"
              aria-hidden="true"
            />

            <div className="relative max-w-2xl px-8 py-7">
              <Eyebrow tone="light">Controlled change lifecycle</Eyebrow>
              <h2 className="mt-2 text-2xl font-bold leading-10 text-white">
                Every change moves through the same governed flow.
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/80">
                System responsibility, human responsibility and evidence are visible at every stage —
                change ID, creator, timestamp, source, scope, effective date, recurrence, validation
                result, decision, version and history.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-300 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {stages.map((stage) => (
              <div key={stage.step} className="bg-white px-3.5 pt-4 pb-8">
                <p className="font-mono text-xs leading-4 text-sky-700">{stage.step}</p>
                <h3 className="mt-1 text-xs font-bold leading-5 text-sky-950">{stage.title}</h3>
                <p className="mt-1 text-xs leading-4 text-slate-600">
                  {stage.detail[0]}
                  <br />
                  {stage.detail[1]}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
