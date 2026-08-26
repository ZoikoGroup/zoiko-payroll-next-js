import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const columns = [
  "Metric",
  "Source value",
  "Target value",
  "Delta",
  "Reason category",
  "Status",
];

type Status = "matched" | "review" | "untested";

const rows: { cells: string[]; status: string; tone: Status }[] = [
  {
    cells: ["Gross pay total", "£412,880.00", "£412,880.00", "£0.00", "—"],
    status: "Matched",
    tone: "matched",
  },
  {
    cells: [
      "Deduction total",
      "£58,210.40",
      "£58,096.10",
      "£114.30",
      "Rounding rule difference",
    ],
    status: "Under review",
    tone: "review",
  },
  {
    cells: ["Headcount processed", "1,240", "1,240", "0", "—"],
    status: "Matched",
    tone: "matched",
  },
  {
    cells: ["Employer cost total", "£61,442.00", "Pending", "—", "Not yet tested"],
    status: "Not tested",
    tone: "untested",
  },
];

const statusTones: Record<Status, string> = {
  matched: "text-emerald-700",
  review: "text-yellow-700",
  untested: "text-yellow-700",
};

export default function ParallelTestingSection() {
  return (
    <section className="bg-[#F9FAFB] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Parallel testing &amp; variance</Eyebrow>
          <h2 className="mt-3.5 max-w-[784px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            A controlled comparison, with variance kept visible
          </h2>
          <p className="mt-4 max-w-[660px] text-base leading-6 text-gray-600">
            Zero variance may be valid, but it is never treated as proof of legal compliance. Actual
            acceptance and launch consequence belong to the implementation authority.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-100">
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-3.5 py-2.5 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.cells[0]} className="border-t border-slate-200">
                    {row.cells.map((cell, index) => (
                      <td
                        key={`${row.cells[0]}-${index}`}
                        className={`px-3.5 py-3.5 text-xs leading-5 ${
                          index === 0 ? "font-semibold text-[#0A2E4B]" : "text-gray-600"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                    <td className={`px-3.5 py-3.5 text-xs font-bold leading-5 ${statusTones[row.tone]}`}>
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-3.5 text-xs leading-5 text-slate-500">
            Synthetic example data. Tolerances must be explicit, sourced and approved for the
            context — never an arbitrary &quot;green if under 1%&quot; default.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
