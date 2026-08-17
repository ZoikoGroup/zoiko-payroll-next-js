import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const meta = ["Zoiko US Inc.", "USD", "cfg-2026.07-r2"];

const columns = ["Exception", "Owner", "Severity", "Required role", "Status"];

const rows = [
  {
    exception: "Missing time-source mapping",
    owner: "it-integrations",
    severity: "High",
    severityClass: "bg-rose-100 text-red-600",
    role: "Payroll Admin",
    status: "Open",
    statusClass: "bg-orange-100 text-yellow-700",
  },
  {
    exception: "Retroactive rate pending",
    owner: "hr-team",
    severity: "Medium",
    severityClass: "bg-orange-100 text-yellow-700",
    role: "Reviewer",
    status: "In review",
    statusClass: "bg-indigo-50 text-blue-600",
  },
  {
    exception: "Deduction effective-date conflict",
    owner: "payroll-ops",
    severity: "Low",
    severityClass: "bg-gray-100 text-slate-500",
    role: "Processor",
    status: "Open",
    statusClass: "bg-orange-100 text-yellow-700",
  },
];

export default function ControlCenterSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Payroll control center</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            The strongest product proof on this page.
          </h2>
          <p className="mt-2.5 max-w-2xl text-base leading-6 text-gray-700">
            Scope, run list, exception queue and approval panel — one governed view of every run in
            the market.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-gray-50 px-5 py-4">
              <h3 className="font-mono text-sm font-bold leading-6 text-slate-900">
                run_US-Hourly-01
              </h3>
              <div className="flex flex-wrap gap-2">
                {meta.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs leading-4 text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-3xl border-collapse text-left">
                <thead>
                  <tr className="bg-gray-50">
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-slate-200 px-4 py-2.5 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => {
                    const cellBorder = index < rows.length - 1 ? "border-b border-slate-200" : "";
                    return (
                      <tr key={row.exception}>
                        <td
                          className={`px-4 py-3.5 text-xs leading-5 text-slate-900 ${cellBorder}`}
                        >
                          {row.exception}
                        </td>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {row.owner}
                        </td>
                        <td className={`px-4 py-3 ${cellBorder}`}>
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold leading-4 ${row.severityClass}`}
                          >
                            {row.severity}
                          </span>
                        </td>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {row.role}
                        </td>
                        <td className={`px-4 py-3 ${cellBorder}`}>
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold leading-4 ${row.statusClass}`}
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
