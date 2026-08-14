import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = ["Stage", "Responsible role", "Status"];

const stages = [
  {
    stage: "Prepared",
    role: "Payroll Admin",
    status: "Complete",
    statusClass: "bg-emerald-100 text-green-700",
  },
  {
    stage: "Reviewed",
    role: "Payroll Reviewer",
    status: "Complete",
    statusClass: "bg-emerald-100 text-green-700",
  },
  {
    stage: "Approved",
    role: "Finance Approver",
    status: "Pending",
    statusClass: "bg-orange-100 text-yellow-700",
  },
];

export default function ApprovalLinkageSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Review &amp; approval linkage</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-9 text-sky-950">
            Approval is policy-driven, and
            <br />
            always visible.
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-6 text-slate-600">
            Whether review is required, the current stage and the responsible role are always shown —
            reusing Payroll Approvals semantics rather than duplicating them.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-6">
          <div className="overflow-x-auto rounded-2xl border border-slate-300">
            <table className="w-full min-w-2xl border-collapse text-left">
              <thead>
                <tr className="bg-slate-100">
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-5 py-4 font-mono text-[10px] font-medium uppercase leading-4 tracking-tight text-slate-600"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stages.map((row) => (
                  <tr key={row.stage} className="border-t border-slate-200">
                    <th scope="row" className="px-5 py-4 text-left text-sm font-normal text-sky-950">
                      {row.stage}
                    </th>
                    <td className="px-5 py-4 text-sm text-sky-950">{row.role}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-block rounded-[5px] px-2 py-[3px] font-mono text-xs font-medium leading-4 ${row.statusClass}`}
                      >
                        {row.status}
                      </span>
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
