import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stats = [
  { label: "Awaiting me", value: "4", valueClass: "text-sky-950" },
  { label: "Due soon", value: "2", valueClass: "text-yellow-700" },
  { label: "Returned", value: "1", valueClass: "text-sky-950" },
  { label: "Approved (period)", value: "11", valueClass: "text-sky-950" },
  { label: "Blocked upstream", value: "1", valueClass: "text-red-700" },
];

const filters = [
  { label: "My approvals", value: "4", active: true },
  { label: "Stage", value: "—" },
  { label: "Status", value: "—" },
  { label: "Entity", value: "—" },
  { label: "Jurisdiction", value: "—" },
  { label: "Payroll group", value: "—" },
  { label: "Due state", value: "—" },
  { label: "Assignee / delegate", value: "—" },
  { label: "Current-version only", value: "✓" },
];

const columns = ["Run", "Entity", "Stage", "Version", "Due", "Status"];

const rows = [
  {
    run: "RUN-2291",
    entity: "US",
    stage: "Finance",
    version: "v5",
    due: "Today",
    status: "Due",
    statusClass: "bg-amber-100 text-yellow-700",
    active: true,
  },
  {
    run: "RUN-2288",
    entity: "GB",
    stage: "Payroll",
    version: "v3",
    due: "Apr 12",
    status: "Ready",
    statusClass: "bg-green-100 text-green-700",
  },
  {
    run: "RUN-2279",
    entity: "SG",
    stage: "Finance",
    version: "v2",
    due: "Apr 10",
    status: "Blocked",
    statusClass: "bg-red-100 text-red-700",
  },
  {
    run: "RUN-2266",
    entity: "DE",
    stage: "Payroll",
    version: "v4",
    due: "Apr 09",
    status: "Ready",
    statusClass: "bg-green-100 text-green-700",
  },
];

const selected = [
  { label: "Scope", value: "Acme US LLC · US" },
  { label: "Current version", value: "v5" },
  { label: "Review status", value: "3 material changes" },
  { label: "Decision owner", value: "Finance Approver" },
  { label: "Due", value: "Today, 5:00 PM" },
];

export default function ApprovalCenterSection() {
  return (
    <section className="border-b border-slate-200 bg-white pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <Eyebrow>Approval center</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-9 text-sky-950">
            Everything an approver needs to know before opening a request
          </h2>
          <p className="mt-5 text-base leading-6 text-slate-600">
            Filter by what&rsquo;s due, see status at a glance, and preview a request&rsquo;s scope
            before committing to the decision workspace. Approving directly from this queue isn&rsquo;t
            possible by design.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-14 overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3.5">
            <span className="text-xs font-semibold leading-5 text-sky-950">
              Acme Group · Payroll Approvals
            </span>
            <span className="font-mono text-xs leading-4 text-slate-600">
              Signed in as J. Reyes · Finance Approver
            </span>
          </div>

          <div className="grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white px-4 py-3.5">
                <p className="font-mono text-[10px] uppercase leading-4 text-slate-600">{stat.label}</p>
                <p className={`mt-1.5 text-xl font-extrabold leading-8 ${stat.valueClass}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 border-t border-slate-200 lg:grid-cols-[200px_1fr_260px]">
            <div className="border-slate-200 p-4 lg:border-r">
              <p className="pb-3 font-mono text-xs font-medium uppercase leading-4 tracking-wide text-slate-600">
                Filters
              </p>
              {filters.map((filter) => (
                <div
                  key={filter.label}
                  className="flex items-center justify-between gap-2 border-t border-slate-200 py-1.5"
                >
                  <span
                    className={`text-xs leading-5 ${
                      filter.active ? "font-semibold text-sky-700" : "text-sky-950"
                    }`}
                  >
                    {filter.label}
                  </span>
                  <span className="font-mono text-xs leading-5 text-slate-600">{filter.value}</span>
                </div>
              ))}
            </div>

            <div className="border-slate-200 p-4 lg:border-r">
              <p className="pb-3 font-mono text-xs font-medium uppercase leading-4 tracking-wide text-slate-600">
                Approval queue
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-125 border-collapse text-left">
                  <thead>
                    <tr>
                      {columns.map((column) => (
                        <th
                          key={column}
                          className="pb-2 font-mono text-[10px] uppercase leading-4 tracking-wide text-slate-600"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.run} className={row.active ? "bg-sky-50" : ""}>
                        <td className="border-t border-slate-200 py-3 text-xs text-sky-950">{row.run}</td>
                        <td className="border-t border-slate-200 py-3 text-xs text-slate-600">
                          {row.entity}
                        </td>
                        <td className="border-t border-slate-200 py-3 text-xs text-slate-600">
                          {row.stage}
                        </td>
                        <td className="border-t border-slate-200 py-3 text-xs text-slate-600">
                          {row.version}
                        </td>
                        <td className="border-t border-slate-200 py-3 text-xs text-slate-600">
                          {row.due}
                        </td>
                        <td className="border-t border-slate-200 py-3">
                          <span
                            className={`rounded px-2 py-0.5 font-mono text-[10px] font-medium ${row.statusClass}`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                Primary row action opens the decision workspace — Review approval. There is no
                direct-approve action from this table, and bulk approval is not part of the default
                design.
              </p>
            </div>

            <div className="p-4">
              <p className="pb-3 font-mono text-xs font-medium uppercase leading-4 tracking-wide text-slate-600">
                Selected request
              </p>
              <dl className="space-y-3">
                {selected.map((item) => (
                  <div key={item.label}>
                    <dt className="font-mono text-[10px] uppercase leading-4 text-slate-600">
                      {item.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-bold text-sky-950">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <span className="mt-5 block rounded-md bg-green-700 px-4 py-2.5 text-center text-sm font-semibold text-white">
                Review approval →
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
