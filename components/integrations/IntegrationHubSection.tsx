import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const filters = [
  "All categories",
  "HRIS/HCM",
  "Finance/ERP",
  "Time & Attendance",
  "Payment Systems",
  "Identity",
];

const stats = [
  { value: "14", label: "Connected" },
  { value: "2", label: "Needs attention" },
  { value: "3", label: "Setup in progress" },
  { value: "09:41", label: "Last event (UTC)" },
];

const columns = [
  "Connection",
  "Direction",
  "Environment",
  "Owner",
  "Mapping",
  "Status",
  "Last activity",
  "",
];

const rows = [
  {
    code: "HR",
    codeClass: "bg-blue-600",
    name: "HRIS · Workforce Context",
    category: "Category: HRIS/HCM",
    direction: "Inbound",
    environment: "Production",
    owner: "payroll-ops",
    mapping: "v2.3",
    status: "Connected",
    statusClass: "bg-green-100 text-green-700",
    activity: "2m ago",
    action: "View activity",
  },
  {
    code: "FN",
    codeClass: "bg-indigo-600",
    name: "Finance · ERP Postings",
    category: "Category: Finance/ERP",
    direction: "Outbound",
    environment: "Production",
    owner: "finance-team",
    mapping: "v1.9",
    status: "Needs attention",
    statusClass: "bg-amber-100 text-amber-700",
    activity: "1h ago",
    action: "Review issue",
  },
  {
    code: "TA",
    codeClass: "bg-green-600",
    name: "Time & Attendance Feed",
    category: "Category: Time & Attendance",
    direction: "Inbound",
    environment: "Production",
    owner: "payroll-ops",
    mapping: "v3.1",
    status: "Connected",
    statusClass: "bg-green-100 text-green-700",
    activity: "14m ago",
    action: "View mapping",
  },
  {
    code: "PY",
    codeClass: "bg-yellow-600",
    name: "Payment Systems",
    category: "Category: Payment Systems",
    direction: "Event notif.",
    environment: "Sandbox",
    owner: "it-integrations",
    mapping: "draft",
    status: "Setup in progress",
    statusClass: "bg-blue-100 text-blue-700",
    activity: "—",
    action: "Configure",
  },
  {
    code: "ID",
    codeClass: "bg-gray-700",
    name: "Identity & Access",
    category: "Category: Identity",
    direction: "Bidirectional",
    environment: "Production",
    owner: "security",
    mapping: "v1.4",
    status: "Connected",
    statusClass: "bg-green-100 text-green-700",
    activity: "6m ago",
    action: "Reauthorize",
  },
  {
    code: "AP",
    codeClass: "bg-red-600",
    name: "APIs / Webhooks",
    category: "Category: Developer",
    direction: "Outbound",
    environment: "Production",
    owner: "it-integrations",
    mapping: "v4.0",
    status: "Failed",
    statusClass: "bg-red-100 text-red-700",
    activity: "32m ago",
    action: "Retry eligible",
  },
];

export default function IntegrationHubSection() {
  return (
    <section className="border-t border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Integration Hub</Eyebrow>
          <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">
            See what&rsquo;s connected, what needs attention, and who owns it.
          </h2>
          <p className="mt-3.5 text-base leading-6 text-gray-700">
            Filter by category, direction, status, environment or owner. This is a synthetic-data proof
            screen — no live customer data.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter, index) => (
                <span
                  key={filter}
                  className={`rounded-full px-3 pt-1.25 pb-1.5 text-xs font-medium leading-5 ${
                    index === 0
                      ? "border border-slate-900 bg-slate-900 text-white"
                      : "border border-slate-200 bg-slate-50 text-gray-700"
                  }`}
                >
                  {filter}
                </span>
              ))}
            </div>
            <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.75 text-xs leading-4 text-slate-500">
              Scope: production
            </span>
          </div>

          <div className="grid grid-cols-2 border-b border-slate-200 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-5 py-4 ${index < 3 ? "lg:border-r lg:border-slate-200" : ""} ${
                  index % 2 === 0 ? "border-r border-slate-200" : ""
                } ${index < 2 ? "border-b border-slate-200 lg:border-b-0" : ""}`}
              >
                <p className="text-xl font-bold leading-8 text-slate-900">{stat.value}</p>
                <p className="text-xs leading-4 text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-225 border-collapse text-left">
              <thead>
                <tr className="bg-gray-50">
                  {columns.map((column, index) => (
                    <th
                      key={column || `action-${index}`}
                      className="border-b border-slate-200 px-5 py-4 text-xs font-semibold uppercase leading-4 tracking-wide text-slate-500"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.code} className="border-b border-slate-200 last:border-b-0">
                    <td className="px-5 py-4">
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[10px] font-bold text-white ${row.codeClass}`}
                        >
                          {row.code}
                        </span>
                        <span>
                          <span className="block text-xs font-bold text-slate-900">{row.name}</span>
                          <span className="mt-0.5 block text-xs text-slate-500">{row.category}</span>
                        </span>
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">{row.direction}</td>
                    <td className="px-5 py-4 text-xs text-slate-500">{row.environment}</td>
                    <td className="px-5 py-4 text-xs text-slate-500">{row.owner}</td>
                    <td className="px-5 py-4 text-xs text-slate-500">{row.mapping}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-semibold ${row.statusClass}`}
                      >
                        ● {row.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">{row.activity}</td>
                    <td className="px-5 py-4 text-xs font-semibold text-blue-600">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
