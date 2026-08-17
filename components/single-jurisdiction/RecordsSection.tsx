import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = ["Period", "Document", "Version", "Status"];

const rows = [
  {
    period: "Aug 1–15",
    document: "Payslip",
    version: "Current",
    status: "Published",
    statusClass: "bg-emerald-50 text-green-600",
  },
  {
    period: "Jul 16–31",
    document: "Payslip",
    version: "Corrected",
    status: "Reissued",
    statusClass: "bg-orange-100 text-yellow-700",
  },
  {
    period: "Jul 1–15",
    document: "Payslip",
    version: "Superseded",
    status: "Archived",
    statusClass: "bg-gray-100 text-slate-500",
  },
];

const versionStates = ["Current", "Corrected", "Superseded", "Withdrawn"];

export default function RecordsSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Employee payroll records</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-slate-900">
            Completed payroll as a controlled record — not just a number
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
                      <tr key={row.period}>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {row.period}
                        </td>
                        <td
                          className={`px-4 py-3.5 text-xs leading-5 text-slate-900 ${cellBorder}`}
                        >
                          {row.document}
                        </td>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {row.version}
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

        <Reveal delay={120} className="mt-4">
          <div className="flex flex-wrap gap-2">
            {versionStates.map((state) => (
              <span
                key={state}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs leading-4 text-gray-700"
              >
                {state}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
