import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const maintenanceItems = [
  {
    title: "Database maintenance — US region",
    status: "Scheduled",
    statusTone: "bg-brand/10 text-brand",
    window: "Planned window: Aug 29, 2026, 02:00–04:00 EST",
    impact: "Expected impact: brief read-only mode for payroll reporting. No processing disruption expected.",
    progress: 0,
  },
  {
    title: "API gateway upgrade — All regions",
    status: "Completed",
    statusTone: "bg-emerald-50 text-emerald-700",
    window: "Actual window: Aug 18, 2026, 01:00–01:40 UTC",
    impact: "Observed impact: none. Completed within the original planned window.",
    progress: 4,
  },
];

export default function ScheduledMaintenanceSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Scheduled maintenance</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              Planned work — never rewritten as an incident
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              If unplanned impact occurs, a linked incident record is created; maintenance history is
              never overwritten.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/system-status/maintenance-planning.png"
              alt="Team planning scheduled maintenance"
              loading="lazy"
              className="h-auto w-full rounded-2xl"
            />
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {maintenanceItems.map((item, index) => (
            <Reveal
              key={item.title}
              delay={140 + index * 60}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-brand-dark">{item.title}</h3>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${item.statusTone}`}>
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500">{item.window}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.impact}</p>
              <div className="mt-4 flex items-center gap-2">
                {[0, 1, 2, 3].map((dot) => (
                  <span key={dot} className="flex flex-1 items-center gap-2">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        dot < item.progress ? "bg-brand" : "bg-slate-200"
                      }`}
                    />
                    {dot < 3 && (
                      <span className={`h-px flex-1 ${dot < item.progress - 1 ? "bg-brand" : "bg-slate-200"}`} />
                    )}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
