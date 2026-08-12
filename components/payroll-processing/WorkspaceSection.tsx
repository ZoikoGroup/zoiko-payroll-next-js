import Reveal from "../ui/Reveal";
import MediaSplit from "./MediaSplit";

const scopeChips = ["Zoiko US Inc.", "US", "Aug 1–15, 2026", "1,284 records"];

const tabs = [
  "Overview",
  "Inputs",
  "Calculation",
  "Validation",
  "Exceptions",
  "Review",
  "Approvals",
  "Completion",
  "History",
];

const activeTab = "Exceptions";

const facts = [
  { label: "Payroll group", value: "Salaried — Semi-monthly" },
  { label: "Worker population", value: "1,284 active" },
  { label: "Currency", value: "USD" },
  { label: "Configuration version", value: "cfg-2026.07-r2" },
];

const exceptions = [
  {
    exception: "Missing bank routing detail",
    records: "4 records",
    severity: "High",
    severityClass: "bg-rose-100 text-red-600",
    owner: "payroll-ops",
    status: "Open",
    statusClass: "bg-orange-100 text-yellow-700",
  },
  {
    exception: "Retroactive rate adjustment pending",
    records: "1 record",
    severity: "Medium",
    severityClass: "bg-orange-100 text-yellow-700",
    owner: "hr-team",
    status: "In review",
    statusClass: "bg-indigo-50 text-blue-600",
  },
  {
    exception: "Cost-center mapping unresolved",
    records: "2 records",
    severity: "Low",
    severityClass: "bg-gray-100 text-slate-500",
    owner: "finance-team",
    status: "Open",
    statusClass: "bg-orange-100 text-yellow-700",
  },
];

const columns = [
  { label: "Exception", className: "w-96" },
  { label: "Affected records", className: "w-56" },
  { label: "Severity", className: "w-36" },
  { label: "Owner", className: "w-44" },
  { label: "Status", className: "w-36" },
];

export default function WorkspaceSection() {
  return (
    <section className="border-t border-b border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MediaSplit
          reversed
          eyebrow="Payroll run workspace"
          title="The primary operational view payroll teams work from."
          description="Entity, jurisdiction, period and status context stay visible while teams move between inputs, calculation, exceptions, review and completion."
          media={{
            src: "/images/payroll-processing/workspace.png",
            alt: "Close-up of a live payroll operations dashboard",
            label: "Active tabs",
            value: "9",
          }}
        />

        <Reveal delay={80} className="mt-11">
          <div className="overflow-hidden rounded-2xl bg-white outline outline-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-gray-50 px-5 py-4">
              <div className="flex items-end gap-2.5">
                <span className="font-mono text-base font-bold leading-6 text-slate-900">
                  run_2026-08-15_US-01
                </span>
                <span className="rounded-[20px] bg-indigo-50 px-2 py-0.75 text-xs font-semibold leading-4 text-blue-600">
                  Review
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {scopeChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-md bg-slate-50 px-2 py-0.75 font-mono text-xs leading-4 text-slate-500 outline outline-slate-200"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-0.5 overflow-x-auto border-b border-slate-200 px-5">
              {tabs.map((tab) => (
                <span
                  key={tab}
                  className={`shrink-0 border-b-2 px-4 pt-3 pb-3.5 text-xs font-semibold leading-5 ${
                    tab === activeTab
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-slate-500"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>

            <div className="px-5 py-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-[10px] bg-slate-50 p-3.5 outline outline-slate-200"
                  >
                    <p className="text-xs leading-4 text-slate-500">{fact.label}</p>
                    <p className="mt-1.25 font-mono text-sm font-bold leading-5 text-slate-900">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-200 border-collapse text-left">
                  <thead>
                    <tr>
                      {columns.map((column) => (
                        <th
                          key={column.label}
                          scope="col"
                          className={`${column.className} border-b border-slate-200 bg-gray-50 px-3.5 py-2.5 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500`}
                        >
                          {column.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {exceptions.map((row, index) => {
                      const cellBorder =
                        index < exceptions.length - 1 ? "border-b border-slate-200" : "";
                      return (
                        <tr key={row.exception}>
                          <td className={`${cellBorder} px-3.5 py-3.5 text-xs leading-5 text-slate-900`}>
                            {row.exception}
                          </td>
                          <td
                            className={`${cellBorder} px-3.5 py-3.5 font-mono text-xs leading-4 text-slate-500`}
                          >
                            {row.records}
                          </td>
                          <td className={`${cellBorder} px-3.5 py-3`}>
                            <span
                              className={`inline-block rounded-[20px] px-2 py-0.75 text-xs font-semibold leading-4 ${row.severityClass}`}
                            >
                              {row.severity}
                            </span>
                          </td>
                          <td
                            className={`${cellBorder} px-3.5 py-3.5 font-mono text-xs leading-4 text-slate-500`}
                          >
                            {row.owner}
                          </td>
                          <td className={`${cellBorder} px-3.5 py-3`}>
                            <span
                              className={`inline-block rounded-[20px] px-2 py-0.75 text-xs font-semibold leading-4 ${row.statusClass}`}
                            >
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
