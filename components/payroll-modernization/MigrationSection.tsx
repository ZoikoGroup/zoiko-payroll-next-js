import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = ["Source field", "Target field", "Transform", "Owner", "State"];

const rows = [
  {
    source: "legacy.emp_id",
    target: "worker.identifier",
    transform: "1:1",
    owner: "f.nguyen",
    state: "Reconciled",
    stateClass: "bg-emerald-50 text-green-600",
  },
  {
    source: "legacy.pay_group",
    target: "payroll.group",
    transform: "reference map",
    owner: "j.alvarez",
    state: "Needs remediation",
    stateClass: "bg-orange-100 text-yellow-700",
  },
  {
    source: "legacy.hire_dt",
    target: "worker.effective_date",
    transform: "ISO-8601",
    owner: "f.nguyen",
    state: "Ready for test",
    stateClass: "bg-emerald-50 text-green-600",
  },
];

const states = [
  { label: "Not assessed" },
  { label: "Mapped" },
  { label: "Needs remediation", className: "border-yellow-700 text-yellow-700" },
  { label: "Ready for test" },
  { label: "Migrated — test" },
  { label: "Reconciled", className: "border-green-600 text-green-600" },
  { label: "Approved for production" },
  { label: "Deferred / archive only" },
];

export default function MigrationSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Data readiness &amp; migration</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            Mapping and reconciliation, made visible before cutover
          </h2>
          <p className="mt-2.5 max-w-2xl text-base leading-6 text-gray-700">
            Full migration workflow detail lives on the dedicated Payroll Migration page — this is
            the modernization-level view.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
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
                      <tr key={row.source}>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-gray-700 ${cellBorder}`}
                        >
                          {row.source}
                        </td>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-gray-700 ${cellBorder}`}
                        >
                          {row.target}
                        </td>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-gray-700 ${cellBorder}`}
                        >
                          {row.transform}
                        </td>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-gray-700 ${cellBorder}`}
                        >
                          {row.owner}
                        </td>
                        <td className={`px-4 py-2.5 ${cellBorder}`}>
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 font-mono text-xs font-bold leading-4 ${row.stateClass}`}
                          >
                            {row.state}
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

        <Reveal delay={120} className="mt-4">
          <div className="flex flex-wrap gap-2">
            {states.map((state) => (
              <span
                key={state.label}
                className={`rounded-full border bg-white px-2.5 py-1 text-xs leading-4 ${
                  state.className ?? "border-slate-200 text-gray-700"
                }`}
              >
                {state.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
