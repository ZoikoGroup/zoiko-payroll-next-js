import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const meta = [
  { label: "Connection:", value: "HRIS · Workforce Context" },
  { label: "Environment:", value: "Production" },
  { label: "Mapping version:", value: "v2.3" },
  { label: "Owner:", value: "payroll-ops" },
  { label: "Effective:", value: "2026-06-01" },
];

const columns = ["Source field", "Target field", "Type", "Required", "Transform", "Validation"];

const rows = [
  {
    source: "employee.legal_name",
    target: "worker.full_name",
    type: "string",
    required: "Required",
    requiredClass: "bg-red-100 text-red-700",
    transform: "—",
    validation: "Non-empty",
  },
  {
    source: "employee.hire_date",
    target: "worker.effective_date",
    type: "date",
    required: "Required",
    requiredClass: "bg-red-100 text-red-700",
    transform: "ISO-8601",
    validation: "Not future-dated",
  },
  {
    source: "employee.department",
    target: "worker.cost_center",
    type: "string",
    required: "Conditional",
    requiredClass: "bg-amber-100 text-amber-700",
    transform: "Reference map",
    validation: "Exists in map v1.2",
  },
  {
    source: "employee.termination_date",
    target: "worker.end_date",
    type: "date",
    required: "Optional",
    requiredClass: "bg-slate-100 text-slate-600",
    transform: "ISO-8601",
    validation: "After hire date",
  },
];

const actions = ["Save draft", "Validate", "Run controlled test"];

export default function DataContractsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Data contracts &amp; mapping</Eyebrow>
          <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">
            Field-level mapping is proof, not a hidden setting.
          </h2>
          <p className="mt-3.5 text-base leading-6 text-gray-700">
            Every rule is visible. Historical events retain the mapping and data-contract version that
            was active when they ran.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-slate-200 bg-slate-50 px-5 py-4">
            {meta.map((item) => (
              <p key={item.label} className="text-xs text-slate-500">
                {item.label} <span className="font-bold text-slate-900">{item.value}</span>
              </p>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-225 border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-white">
                  {columns.map((column) => (
                    <th
                      key={column}
                      className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.source} className="border-b border-slate-200">
                    <td className="px-5 py-3.5 text-sm text-slate-700">{row.source}</td>
                    <td className="px-5 py-3.5 text-sm text-slate-700">{row.target}</td>
                    <td className="px-5 py-3.5 text-sm text-slate-500">{row.type}</td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`rounded-md px-2 py-1 text-xs font-semibold ${row.requiredClass}`}
                      >
                        {row.required}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-slate-500">{row.transform}</td>
                    <td className="px-5 py-3.5 text-sm text-slate-500">{row.validation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-3 px-5 py-5">
            {actions.map((action) => (
              <span
                key={action}
                className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-900"
              >
                {action}
              </span>
            ))}
            <span className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white">
              Request review
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
