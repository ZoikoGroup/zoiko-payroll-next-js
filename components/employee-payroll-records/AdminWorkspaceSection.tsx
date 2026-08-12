import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = ["Employee", "Pay period", "Status", "Version", "Action"];

const rows = [
  {
    employee: "EMP-2214 · ENT-04",
    period: "Mar 2026",
    status: "Published",
    statusClass: "bg-green-100 text-green-700",
    version: "v2",
    action: "Review",
  },
  {
    employee: "EMP-1187 · ENT-01",
    period: "Mar 2026",
    status: "Ready to publish",
    statusClass: "bg-orange-100 text-yellow-700",
    version: "v1",
    action: "Publish",
  },
  {
    employee: "EMP-0932 · ENT-02",
    period: "Mar 2026",
    status: "Publication failed",
    statusClass: "bg-red-100 text-red-700",
    version: "v1",
    action: "Retry",
  },
];

export default function AdminWorkspaceSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Admin publication workspace</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-9 text-sky-950">
            Administrators always know what&rsquo;s ready, published or blocked.
          </h2>
          <p className="mt-3 max-w-xl text-base leading-6 text-slate-600">
            One workspace shows every record&rsquo;s status, version and next available action.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100">
                  {columns.map((column, index) => (
                    <th
                      key={column}
                      className={`px-4 py-3 text-xs uppercase leading-4 text-slate-600 ${
                        index === columns.length - 1 ? "text-right" : ""
                      }`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.employee} className="border-b border-slate-200 last:border-b-0">
                    <td className="px-4 py-3 text-xs leading-5 text-sky-950">{row.employee}</td>
                    <td className="px-4 py-3 text-xs leading-5 text-sky-950">{row.period}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-[5px] px-2 py-[3px] text-xs font-medium leading-4 ${row.statusClass}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs leading-5 text-sky-950">{row.version}</td>
                    <td className="px-4 py-3 text-right text-sm font-semibold leading-5 text-sky-700">
                      {row.action}
                    </td>
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
