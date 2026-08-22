import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

type Row = { item: string; status: string; statusClass: string };

const panels: { title: string; note: string; rows: Row[] }[] = [
  {
    title: "Scope & Sources",
    note: "4 sources, explicit disposition per dataset",
    rows: [
      {
        item: "Earnings & deductions",
        status: "Migrate",
        statusClass: "bg-emerald-50 text-green-600",
      },
      {
        item: "Terminated records",
        status: "Archive only",
        statusClass: "bg-gray-100 text-slate-500",
      },
      {
        item: "Legacy job architecture",
        status: "Reference only",
        statusClass: "bg-orange-100 text-yellow-700",
      },
    ],
  },
  {
    title: "Mapping & Quality",
    note: "93% mapped, 18 open exceptions",
    rows: [
      {
        item: "Missing termination date",
        status: "High",
        statusClass: "bg-red-50 text-red-600",
      },
      {
        item: "Duplicate employee ID",
        status: "Medium",
        statusClass: "bg-orange-100 text-yellow-700",
      },
      {
        item: "Encoding — accented chars",
        status: "Low",
        statusClass: "bg-gray-100 text-slate-500",
      },
    ],
  },
  {
    title: "Reconciliation",
    note: "Source vs. loaded, every batch",
    rows: [
      {
        item: "US-Salaried",
        status: "4 record variance",
        statusClass: "bg-orange-100 text-yellow-700",
      },
      {
        item: "Time & Attendance",
        status: "Reconciled",
        statusClass: "bg-emerald-50 text-green-600",
      },
      {
        item: "Benefits",
        status: "Blocked — load failed",
        statusClass: "bg-red-50 text-red-600",
      },
    ],
  },
];

export default function ControlCenterSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Inside the control center</Eyebrow>
          <h2 className="mt-2.5 max-w-2xl text-3xl font-extrabold leading-9 text-slate-900">
            One screen for scope, mapping and reconciliation
          </h2>
          <p className="mt-2.5 max-w-3xl text-base leading-6 text-gray-700">
            The strongest proof in this page — implementation-aware, not decorative. Every blocker
            carries a scope, an owner and a next action.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/payroll-migration/control-center.png"
              alt="Two colleagues reviewing field-level mapping rules on screen"
              className="h-72 w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <h3 className="text-base font-bold leading-5 text-slate-900">
              See exactly what&apos;s blocking cutover
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-gray-700">
              Every field mapping carries a rule version and a null-behavior decision. Every batch
              load is checked against the source before it&apos;s called complete.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {panels.map((panel, panelIndex) => (
            <Reveal key={panel.title} delay={panelIndex * 80}>
              <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="border-b border-slate-200 px-4 pb-3 pt-4">
                  <h3 className="text-sm font-bold leading-5 text-slate-900">{panel.title}</h3>
                  <p className="mt-0.5 text-xs leading-5 text-slate-500">{panel.note}</p>
                </div>
                <div className="px-4 py-3.5">
                  {panel.rows.map((row, index) => (
                    <div
                      key={row.item}
                      className={`flex flex-wrap items-center justify-between gap-2 py-2 ${
                        index < panel.rows.length - 1 ? "border-b border-slate-200" : ""
                      }`}
                    >
                      <span className="text-xs leading-5 text-slate-900">{row.item}</span>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold leading-4 ${row.statusClass}`}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
