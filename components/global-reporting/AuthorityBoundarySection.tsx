import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

const canShow = [
  "Governed payroll-operational states across permitted scope",
  "Defined, versioned metrics with visible formulas",
  "Exceptions and approval / readiness indicators",
  "Source-quality conditions: freshness, completeness, reconciliation",
  "Permitted outcome summaries for explicit scopes and periods",
];

const doesNotReplace = [
  "Payroll calculation records or the general ledger",
  "Statutory accounts or tax filing systems",
  "Legal interpretation of jurisdiction requirements",
  "Coverage claims about jurisdiction availability",
  "Human judgment on materiality, approval and remediation",
];

export default function AuthorityBoundarySection() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-16 sm:py-20">
      <img
        src="/images/global-reporting/section-2.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StageHeader
            stage="Stage 01 — Authority boundary"
            label="What global reporting means"
            heading="Reporting is defined before it&rsquo;s charted"
          >
            A report is a ReportDefinition applied to a ReportingScope and period, producing a
            versioned ReportSnapshot with metric results, quality context, source lineage and
            permission/distribution state.
          </StageHeader>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 overflow-hidden rounded-[10px] border border-slate-200 bg-white lg:grid-cols-2">
            <div className="border-b border-slate-200 px-7 pb-10 pt-7 lg:border-b-0 lg:border-r">
              <h3 className="flex items-center gap-2 font-display text-base font-bold text-gray-900">
                <span
                  className="size-2.5 shrink-0 rounded-full bg-emerald-600"
                  aria-hidden="true"
                />
                Reporting can show
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {canShow.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-gray-700">
                    <span className="shrink-0 font-bold text-emerald-700" aria-hidden="true">
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-stone-50 px-7 pb-10 pt-7">
              <h3 className="flex items-center gap-2 font-display text-base font-bold text-gray-900">
                <span className="size-2.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                Reporting does not replace
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {doesNotReplace.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-gray-700">
                    <span className="shrink-0 font-bold text-red-700" aria-hidden="true">
                      &#10005;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
