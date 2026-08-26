import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const rows = [
  {
    label: "Business continuity / resilience resource",
    scope: "Reviewed scope and date — never live health",
  },
  { label: "System Status", scope: "Current + historical incidents and maintenance" },
  { label: "Contract / SLA", scope: "Customer-specific — Commercial/Legal only" },
];

export default function ResilienceSection() {
  return (
    <section id="operational-resilience" className="scroll-mt-24 bg-slate-100 py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal>
          <Eyebrow>Operational resilience &amp; current service health</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Preparedness evidence is not a live status feed.
          </h2>
          <p className="mt-4 max-w-[600px] text-base leading-6 text-slate-600">
            Business continuity resources describe documented preparedness. System Status owns
            what&apos;s happening right now.
          </p>

          <dl className="mt-6">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 border-b border-slate-200 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <dt className="text-sm font-bold leading-5 text-brand-dark">{row.label}</dt>
                <dd className="text-xs leading-5 text-slate-600 sm:text-right">{row.scope}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 rounded-[10px] border border-orange-200 bg-orange-100 px-5 py-4">
            <p className="text-xs leading-5 text-yellow-800">
              <span className="font-bold text-yellow-900">Incident conversion rule:</span> during a
              confirmed active incident, System Status and Help Center take priority — promotional
              demo or security-review prompts are suppressed in that context.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <img
            src="/images/resources-security-trust/resilience.png"
            alt="A team reviewing operational resilience and service health together"
            loading="lazy"
            className="h-64 w-full rounded-2xl object-cover shadow-lg sm:h-80 lg:h-[340px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
