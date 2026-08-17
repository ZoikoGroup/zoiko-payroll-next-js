import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = ["Category", "Direction", "Status", "Support owner"];

const rows = [
  {
    category: "HR / HCM",
    direction: "Inbound",
    status: "Connected",
    statusClass: "bg-emerald-50 text-green-600",
    owner: "payroll-ops",
  },
  {
    category: "Finance / ERP",
    direction: "Outbound",
    status: "Attention",
    statusClass: "bg-orange-100 text-yellow-700",
    owner: "finance-team",
  },
  {
    category: "Identity / SSO",
    direction: "Bidirectional",
    status: "Connected",
    statusClass: "bg-emerald-50 text-green-600",
    owner: "security",
  },
];

export default function IntegrationsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Reporting, reconciliation &amp; integrations</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-slate-900">
            Downstream connectivity, with direction and status visible
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-2xl border-collapse text-left">
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
                      <tr key={row.category}>
                        <td
                          className={`px-4 py-3.5 text-xs leading-5 text-slate-900 ${cellBorder}`}
                        >
                          {row.category}
                        </td>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {row.direction}
                        </td>
                        <td className={`px-4 py-3 ${cellBorder}`}>
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold leading-4 ${row.statusClass}`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {row.owner}
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
