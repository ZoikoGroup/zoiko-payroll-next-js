import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const summary = [
  { label: "Connected", value: "6", valueClass: "text-sky-950" },
  { label: "Needs review", value: "2", valueClass: "text-yellow-700" },
  { label: "Blocked / failed", value: "1", valueClass: "text-red-700" },
  { label: "Last successful event", value: "3 min ago", valueClass: "text-sky-950" },
];

const columns = ["Product", "Direction", "Purpose / scope", "Status", "Last event", "Owner"];

const rows = [
  {
    product: "Zoiko HR",
    direction: "Inbound",
    purpose: "Worker & org context",
    status: "Connected",
    statusClass: "bg-emerald-100 text-green-700",
    lastEvent: "3 min ago",
    owner: "M. Ortiz",
  },
  {
    product: "Zoiko Identity",
    direction: "Shared",
    purpose: "Authentication only",
    status: "Connected",
    statusClass: "bg-emerald-100 text-green-700",
    lastEvent: "11 min ago",
    owner: "S. Adeyemi",
  },
  {
    product: "Zoiko Finance",
    direction: "Outbound",
    purpose: "Approved payroll totals",
    status: "Needs review",
    statusClass: "bg-orange-100 text-yellow-700",
    lastEvent: "2 hrs ago",
    owner: "J. Park",
  },
  {
    product: "Zoiko Time",
    direction: "Inbound",
    purpose: "Approved time records",
    status: "Blocked",
    statusClass: "bg-red-100 text-red-700",
    lastEvent: "1 day ago",
    owner: "M. Ortiz",
  },
];

const detail = [
  { label: "Service identity", value: "svc-zoiko-finance-01" },
  { label: "Scopes granted", value: "payroll.totals:read" },
  { label: "Mapping version", value: "v3.2" },
  { label: "Support owner", value: "J. Park · Finance Admin" },
];

const legend = [
  { label: "Available", className: "bg-emerald-100 text-green-700" },
  { label: "Requires Setup", className: "bg-orange-100 text-yellow-700" },
  { label: "Connected", className: "bg-emerald-100 text-green-700" },
  { label: "Needs Review", className: "bg-orange-100 text-yellow-700" },
  { label: "Validation Failed", className: "bg-red-100 text-red-700" },
  { label: "Degraded", className: "bg-orange-100 text-yellow-700" },
  { label: "Partial Failure", className: "bg-red-100 text-red-700" },
  { label: "Blocked", className: "bg-red-100 text-red-700" },
  { label: "Permission Denied", className: "bg-red-100 text-red-700" },
  { label: "Disconnected", className: "bg-slate-100 text-slate-600" },
  { label: "Retired", className: "bg-slate-100 text-slate-600" },
  { label: "Loading", className: "bg-slate-100 text-slate-600" },
  { label: "Error", className: "bg-red-100 text-red-700" },
  { label: "Empty", className: "bg-slate-100 text-slate-600" },
];

export default function ConnectionCenterSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <Eyebrow>Zoiko One connection center</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-sky-950">
            Every connection, its direction, and what it&rsquo;s actually doing
          </h2>
          <p className="mt-3 text-base leading-6 text-slate-600">
            Organization scope, connected-product count and overall state at a glance — with a detail
            drawer for anything that needs a closer look.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <p className="text-sm font-bold text-sky-950">Acme Group · Production environment</p>
              <span className="text-xs text-slate-500">Refreshed 3 min ago</span>
            </div>

            <div className="grid grid-cols-1 gap-px border-y border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
              {summary.map((cell) => (
                <div key={cell.label} className="bg-white px-5 py-4">
                  <p className="font-mono text-[10px] uppercase leading-4 tracking-tight text-slate-600">
                    {cell.label}
                  </p>
                  <p className={`mt-1 text-xl font-bold leading-8 ${cell.valueClass}`}>{cell.value}</p>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-3xl border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100">
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-slate-200 px-4 py-3 font-mono text-[10px] font-medium uppercase leading-4 text-slate-600"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.product} className="border-b border-slate-200">
                      <td className="px-4 py-3.5 text-sm text-sky-950">{row.product}</td>
                      <td className="px-4 py-3.5 text-sm text-sky-950">{row.direction}</td>
                      <td className="px-4 py-3.5 text-sm text-sky-950">{row.purpose}</td>
                      <td className="px-4 py-3.5">
                        <span
                          className={`inline-block rounded-[5px] px-2 py-[3px] font-mono text-xs font-medium leading-4 ${row.statusClass}`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-sm text-sky-950">{row.lastEvent}</td>
                      <td className="px-4 py-3.5 text-sm text-sky-950">{row.owner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 gap-4 bg-slate-100 px-5 py-4 sm:grid-cols-2 lg:grid-cols-4">
              {detail.map((field) => (
                <div key={field.label}>
                  <p className="font-mono text-[10px] uppercase leading-4 tracking-tight text-slate-600">
                    {field.label}
                  </p>
                  <p className="mt-1 text-sm font-bold text-sky-950">{field.value}</p>
                </div>
              ))}
            </div>

            <p className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-600">
              Detail drawer shown for the selected row (Zoiko Finance). All data on this page is
              synthetic; only production-supported status labels are shown.
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-5 flex flex-wrap gap-2">
            {legend.map((chip) => (
              <span
                key={chip.label}
                className={`rounded-[5px] px-2 py-[3px] font-mono text-xs font-medium leading-4 ${chip.className}`}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
