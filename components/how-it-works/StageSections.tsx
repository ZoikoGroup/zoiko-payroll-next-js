import Reveal from "../ui/Reveal";
import StatusChip from "./StatusChip";
import { lifecycleStages, type LifecycleStage } from "./lifecycle-data";

function StageMock({ mock }: { mock: LifecycleStage["mock"] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 bg-brand-dark px-4 py-2.5">
        <span className="h-2 w-2 rounded-sm bg-white/25" aria-hidden="true" />
        <span className="h-2 w-2 rounded-sm bg-white/25" aria-hidden="true" />
        <span className="h-2 w-2 rounded-sm bg-white/25" aria-hidden="true" />
        <span className="pl-2 text-xs font-semibold text-white/70">{mock.title}</span>
      </div>

      <div className="space-y-2 p-4">
        {mock.rows.map((row) => (
          <div
            key={row.title}
            className="flex items-center justify-between gap-4 rounded-lg border border-slate-100 px-3 py-2.5"
          >
            <div>
              <p className="text-xs font-semibold text-slate-700">{row.title}</p>
              <p className="mt-0.5 text-xs text-slate-400">{row.detail}</p>
            </div>
            <StatusChip tone={row.tone}>{row.badge}</StatusChip>
          </div>
        ))}

        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-slate-200 pt-2.5 text-xs text-slate-400">
          <span>{mock.footer.left}</span>
          <span>{mock.footer.right}</span>
        </div>
      </div>
    </div>
  );
}

function StageSection({ stage, index }: { stage: LifecycleStage; index: number }) {
  const mockFirst = index % 2 === 1;

  return (
    <section
      id={stage.id}
      className="scroll-mt-24 border-b border-[#DCE6EC] bg-[#F4F8FB] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className={mockFirst ? "lg:order-2" : ""}>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              Stage {stage.number} / 06
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              {stage.label}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">{stage.description}</p>

            <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              {stage.meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-brand-dark">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap gap-2">
              {stage.states.map((state) => (
                <StatusChip key={state.label} tone={state.tone}>
                  {state.label}
                </StatusChip>
              ))}
            </div>

            <p className="mt-6 rounded-lg border-l-[3px] border-brand bg-brand/5 px-4 py-3 text-xs leading-relaxed text-slate-600">
              {stage.note}
            </p>
          </Reveal>

          <Reveal delay={100} className={mockFirst ? "lg:order-1" : ""}>
            <StageMock mock={stage.mock} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function StageSections() {
  return (
    <>
      {lifecycleStages.map((stage, index) => (
        <StageSection key={stage.id} stage={stage} index={index} />
      ))}
    </>
  );
}
