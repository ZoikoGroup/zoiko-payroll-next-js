import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

type Row = { item: string; tag: string };

const accessControls: Row[] = [
  { item: "Environment separation", tag: "enforced" },
  { item: "Temporary access — purpose-bound", tag: "reviewed" },
  { item: "Approved secure transfer only", tag: "no email/chat" },
  { item: "Auditable throughout", tag: "system" },
];

const rolloutWave: Row[] = [
  { item: "Local owner named", tag: "j.alvarez" },
  { item: "Currency & timezone context", tag: "explicit" },
  { item: "Shared governance, local configuration", tag: "scoped" },
];

function ControlList({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <h3 className="border-b border-slate-200 bg-gray-50 px-5 py-4 text-sm font-bold leading-5 text-slate-900">
        {title}
      </h3>
      <div className="px-5">
        {rows.map((row, index) => (
          <div
            key={row.item}
            className={`flex flex-wrap items-center justify-between gap-2 py-3.5 ${
              index < rows.length - 1 ? "border-b border-slate-200" : ""
            }`}
          >
            <span className="flex items-center gap-2.5 text-sm leading-5 text-slate-900">
              <span
                aria-hidden="true"
                className="flex size-5 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-xs font-bold text-green-600"
              >
                ✓
              </span>
              {row.item}
            </span>
            <span className="font-mono text-xs leading-4 text-slate-500">{row.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SecurityReadinessSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Security, privacy &amp; global readiness</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            Purpose-bound access, wherever the rollout runs
          </h2>
          <p className="mt-2.5 max-w-3xl text-base leading-6 text-gray-700">
            Rollout waves are based on readiness, dependency, risk and capacity — not geography
            alone.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <ControlList title="Migration access controls" rows={accessControls} />
          </Reveal>
          <Reveal delay={100}>
            <ControlList title="Rollout wave — US & GB" rows={rolloutWave} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
