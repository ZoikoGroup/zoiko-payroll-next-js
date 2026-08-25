import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const filters = ["Last 90 days", "All components", "Incidents + Maintenance", "Any impact"];

const history = [
  { date: "Aug 18, 2026", title: "API gateway upgrade — All regions", meta: "Maintenance · Completed" },
  { date: "Aug 6, 2026", title: "Brief delay in payslip generation — US region", meta: "Incident · Resolved" },
  { date: "Jul 22, 2026", title: "Scheduled network maintenance — APAC", meta: "Maintenance · Completed" },
  { date: "Jul 9, 2026", title: "Elevated error rate on public API", meta: "Incident · Resolved" },
];

export default function HistoryArchiveSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Recent history + filterable archive</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            An evidence ledger, not an uptime chart
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Filters serialize into the URL for sharing. We never infer uptime from a sparse archive.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 transition-colors duration-200 hover:border-brand/30 hover:text-brand-dark"
            >
              {filter}
            </button>
          ))}
        </Reveal>

        <Reveal delay={140} className="mt-6 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
          {history.map((item) => (
            <div key={item.title} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                <span className="text-xs text-slate-400">{item.date}</span>
                <span className="text-sm font-semibold text-brand-dark">{item.title}</span>
              </div>
              <span className="shrink-0 text-xs text-slate-400">{item.meta}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
