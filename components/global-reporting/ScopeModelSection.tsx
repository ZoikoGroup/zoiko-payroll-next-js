import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

const scopeFields = [
  { label: "Scope", value: "Permitted Entities v4.2" },
  { label: "Period", value: "Apr 2026 · local mapped" },
  { label: "Entities", value: "38 included / 41 total" },
  { label: "Excluded", value: "2 — permission-limited" },
  { label: "Unavailable", value: "1 — provider scope pending" },
  { label: "Currency", value: "Presentation: USD" },
  { label: "Timezone / cutoff", value: "Per-entity + governing UTC" },
  { label: "Quality threshold", value: "≥ 95% completeness" },
  { label: "Version / history", value: "v4.2 · 6 prior versions" },
];

export default function ScopeModelSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StageHeader
            stage="Stage 02 — Scope model"
            label="Reporting scope model"
            heading="Every number rests on a resolved ReportingScope"
          >
            Every percentage, rate and &quot;X of Y&quot; uses the resolved scope-membership
            snapshot for that report version — so the denominator is never ambiguous.
          </StageHeader>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-center gap-5 lg:grid-cols-2">
          <Reveal>
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {scopeFields.map((field) => (
                <div
                  key={field.label}
                  className="rounded-lg border border-slate-200 bg-white p-3.5"
                >
                  <dt className="font-mono text-xs uppercase tracking-wide text-gray-400">
                    {field.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-5 text-gray-700">{field.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[10px] shadow-[0_8px_24px_-12px_rgba(15,22,38,0.12)]">
              <img
                src="/images/global-reporting/scope-model.png"
                alt="Reporting team reviewing scope and entity coverage on screen"
                className="w-full object-cover"
              />
              <p className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-slate-900/90 to-slate-900/0 px-4 py-4 text-xs text-white">
                Scope reviews happen before a single number is read.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
