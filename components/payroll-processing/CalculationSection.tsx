import Reveal from "../ui/Reveal";
import MediaSplit from "./MediaSplit";

const calculationState = [
  { label: "Calculation status", value: "Completed with warnings" },
  { label: "Version", value: "calc-v14" },
  { label: "Run timestamp", value: "2026-08-15 06:02 UTC" },
  { label: "Impacted records", value: "1,284 / 7 warned" },
  { label: "Configuration", value: "cfg-2026.07-r2" },
];

const columns = [
  { label: "Severity", className: "w-32" },
  { label: "Exception", className: "w-96" },
  { label: "Owner", className: "w-40" },
  { label: "Impact", className: "w-44" },
  { label: "Status", className: "w-32" },
];

const exceptions = [
  {
    severity: "High",
    severityClass: "bg-rose-100 text-red-600",
    exception: "Missing bank routing detail",
    detail: "4 records · payment blocked",
    owner: "payroll-ops",
    impact: "Blocks completion",
    status: "Open",
    statusClass: "bg-orange-100 text-yellow-700",
  },
  {
    severity: "Medium",
    severityClass: "bg-orange-100 text-yellow-700",
    exception: "Retroactive rate adjustment pending",
    detail: "1 record · recalculation required",
    owner: "hr-team",
    impact: "Affects net pay",
    status: "In review",
    statusClass: "bg-indigo-50 text-blue-600",
  },
  {
    severity: "Low",
    severityClass: "bg-gray-100 text-slate-500",
    exception: "Cost-center mapping unresolved",
    detail: "2 records · reporting only",
    owner: "finance-team",
    impact: "No pay impact",
    status: "Open",
    statusClass: "bg-orange-100 text-yellow-700",
  },
];

export default function CalculationSection() {
  return (
    <section className="border-t border-b border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MediaSplit
          reversed
          eyebrow={"Calculation · Variance & exceptions"}
          title={
            <>
              Calculation state, versioned
              <br />
              — exceptions, owned
            </>
          }
          description="Every calculation is tied to a configuration version and timestamp. Warnings and failures are never silent."
          media={{
            src: "/images/payroll-processing/calculation.png",
            alt: "Calculation output and variance data on screen",
            label: "Configuration",
            value: "cfg-2026.07-r2",
          }}
        />

        <Reveal delay={80} className="mt-11">
          <dl className="grid grid-cols-1 gap-5 rounded-2xl bg-[#0E1A33] px-6 py-5 sm:grid-cols-2 lg:grid-cols-5">
            {calculationState.map((item) => (
              <div key={item.label}>
                <dt className="text-xs leading-4 text-white/50">{item.label}</dt>
                <dd className="mt-1.5 font-mono text-sm font-bold leading-5 text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={140} className="mt-5">
          <div className="overflow-hidden rounded-2xl bg-white outline outline-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-gray-50 px-5 py-4">
              <h3 className="text-sm font-bold text-slate-900">Exception center</h3>
              <span className="rounded-md bg-slate-50 px-2 py-0.75 font-mono text-xs leading-4 text-slate-500 outline outline-slate-200">
                6 open · sorted by severity
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-200 border-collapse text-left">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column.label}
                        scope="col"
                        className={`${column.className} border-b border-slate-200 px-3.5 py-2.5 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500`}
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
                        <td className={`${cellBorder} px-3.5 py-3.5 align-top`}>
                          <span
                            className={`inline-block rounded-[20px] px-2 py-0.75 text-xs font-semibold leading-4 ${row.severityClass}`}
                          >
                            {row.severity}
                          </span>
                        </td>
                        <td className={`${cellBorder} px-3.5 py-3.5 align-top`}>
                          <p className="text-sm font-bold leading-5 text-slate-900">
                            {row.exception}
                          </p>
                          <p className="mt-0.5 text-xs leading-4 text-slate-500">{row.detail}</p>
                        </td>
                        <td
                          className={`${cellBorder} px-3.5 py-3.5 align-top font-mono text-xs leading-4 text-slate-500`}
                        >
                          {row.owner}
                        </td>
                        <td
                          className={`${cellBorder} px-3.5 py-3.5 align-top font-mono text-xs leading-4 text-slate-500`}
                        >
                          {row.impact}
                        </td>
                        <td className={`${cellBorder} px-3.5 py-3.5 align-top`}>
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
        </Reveal>
      </div>
    </section>
  );
}
