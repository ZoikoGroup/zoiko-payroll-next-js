import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

type Metric = {
  name: string;
  meta: string;
  status: string;
  statusClass: string;
  fields: { label: string; value: string; mono?: boolean }[];
};

const metrics: Metric[] = [
  {
    name: "On-Time Payroll Completion Rate",
    meta: "METRIC-ID: OTPC-014 · v3.1 · effective 2026-02-01",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-700",
    fields: [
      {
        label: "Business question",
        value: "What share of in-scope payrolls completed by the defined cutoff?",
      },
      { label: "Formula", value: "completed_on_time / payrolls_in_scope", mono: true },
      { label: "Grain", value: "Entity · payroll group · period" },
      { label: "Units / rounding", value: "Percent, 1 decimal" },
      { label: "Null / zero behavior", value: 'Excluded entities show "Not applicable," never 0%' },
      { label: "Time treatment", value: "Local cutoff, mapped to reporting period" },
      { label: "Currency treatment", value: "Not applicable — count-based metric" },
      { label: "Owner / approver", value: "Global Reporting Governance" },
      { label: "Allowed use", value: "Operational readiness tracking only" },
    ],
  },
  {
    name: "Regional Cost-per-Payslip (draft)",
    meta: "METRIC-ID: RCPP-002 · unversioned",
    status: "Draft / Gated",
    statusClass: "bg-orange-100 text-yellow-700",
    fields: [
      { label: "Business question", value: "Defined" },
      { label: "Formula", value: "Pending finance sign-off" },
      { label: "Source mapping", value: "Unresolved — 2 providers unmapped" },
      { label: "Currency treatment", value: "Unresolved — FX method not set" },
      { label: "Owner", value: "Unassigned" },
      { label: "Status", value: "Held out of all reports until gated fields resolve" },
    ],
  },
];

export default function MetricRegistrySection() {
  return (
    <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StageHeader
            stage="Stage 04 — Metric registry"
            label="Metric registry"
            heading="Every metric is a governed definition contract"
          >
            If formula, scope grain, units, source mapping, inclusion/exclusion, time treatment,
            currency treatment or owner is unknown, the metric stays Draft / Gated. Zoiko never
            guesses a definition into place.
          </StageHeader>
        </Reveal>

        <div className="mt-8 space-y-5">
          {metrics.map((metric, metricIndex) => (
            <Reveal key={metric.name} delay={metricIndex * 80}>
              <div className="overflow-hidden rounded-[10px] border border-slate-200 bg-white">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4">
                  <div>
                    <h3 className="font-display text-base font-bold text-gray-900">
                      {metric.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-gray-400">{metric.meta}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-md px-2.5 py-1 font-mono text-xs font-semibold ${metric.statusClass}`}
                  >
                    {metric.status}
                  </span>
                </div>

                {/* gap-px over a slate ground draws the cell separators — no per-cell
                    border rules that break when the column count changes. */}
                <dl className="grid grid-cols-1 gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
                  {metric.fields.map((field) => (
                    <div key={field.label} className="bg-white px-5 py-4">
                      <dt className="font-mono text-xs uppercase tracking-wide text-gray-400">
                        {field.label}
                      </dt>
                      <dd
                        className={`mt-1.5 text-sm leading-5 text-gray-700 ${
                          field.mono ? "font-mono" : ""
                        }`}
                      >
                        {field.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
