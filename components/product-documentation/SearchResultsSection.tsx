import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { ChevronDownIcon } from "../ui/icons";

const filters = ["All filters", "Product area", "Task intent", "Role", "Content type", "Applicability"];

const results = [
  {
    tags: [
      { label: "Task", tone: "bg-brand/10 text-brand" },
      { label: "Current", tone: "bg-emerald-50 text-emerald-700" },
      { label: "Payroll Processing", tone: "bg-slate-100 text-slate-600" },
    ],
    title: "Run a Payroll Cycle",
    snippet:
      "...prepare inputs, calculate, validate exceptions, and route the cycle for approval before completion. Requires Payroll Administrator role...",
    meta: "Role: Payroll Administrator · v14.2 · Last verified Aug 12, 2026",
  },
  {
    tags: [
      { label: "Reference", tone: "bg-brand/10 text-brand" },
      { label: "Current", tone: "bg-emerald-50 text-emerald-700" },
      { label: "Approvals", tone: "bg-slate-100 text-slate-600" },
    ],
    title: "Payroll Cycle Statuses",
    snippet:
      "...defines every status a payroll cycle can hold, from Draft through Completed, and which roles can transition each state...",
    meta: "Role: All roles · v14.1 · Last verified Jul 30, 2026",
  },
  {
    tags: [
      { label: "Troubleshooting", tone: "bg-brand/10 text-brand" },
      { label: "Stale — needs verification", tone: "bg-amber-50 text-amber-700" },
      { label: "Integrations", tone: "bg-slate-100 text-slate-600" },
    ],
    title: "Resolving Webhook Delivery Failures",
    snippet:
      "...check retry status, inspect delivery logs and confirm endpoint authentication before contacting support...",
    meta: "Role: IT / Integration Admin · v13.8 · Last verified Jan 2026",
  },
];

export default function SearchResultsSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Search results + safe ranking</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Scannable like a serious enterprise search system
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 transition-colors duration-200 hover:border-brand/30 hover:text-brand-dark"
            >
              {filter}
              {index > 0 && <ChevronDownIcon className="h-3 w-3" />}
            </button>
          ))}
        </Reveal>

        <div className="mt-6 space-y-4">
          {results.map((result, index) => (
            <Reveal
              key={result.title}
              delay={120 + index * 60}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10"
            >
              <div className="flex flex-wrap gap-2">
                {result.tags.map((tag) => (
                  <span key={tag.label} className={`rounded-full px-2.5 py-1 text-xs font-medium ${tag.tone}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 text-base font-semibold text-brand-dark">{result.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{result.snippet}</p>
              <p className="mt-3 text-xs text-slate-400">{result.meta}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
