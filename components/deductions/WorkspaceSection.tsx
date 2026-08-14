import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const headlineStats = [
  { value: "24", label: "Changes in flight today" },
  { value: "6", label: "Needs review" },
];

const filters = ["All (24)", "Needs review (6)", "Pending approval (3)", "Validation failed (2)"];

const columns = ["Scope", "Type", "Amount", "Eff. date", "Status", "Owner"];

const queue = [
  {
    scope: "ENT-04 · Group A",
    type: "Recurring ded.",
    amount: "−$45.00",
    amountClass: "text-red-700",
    date: "Apr 01",
    status: "Active",
    statusClass: "bg-emerald-100 text-green-700",
    owner: "M. Ortiz",
    selected: true,
  },
  {
    scope: "ENT-01 · Group C",
    type: "Reimbursement",
    amount: "+$210.00",
    amountClass: "text-green-700",
    date: "Mar 22",
    status: "In review",
    statusClass: "bg-orange-100 text-yellow-700",
    owner: "J. Park",
  },
  {
    scope: "ENT-02 · Group A",
    type: "One-time ded.",
    amount: "−$60.00",
    amountClass: "text-red-700",
    date: "Mar 18",
    status: "Draft",
    statusClass: "bg-slate-100 text-slate-600",
    owner: "—",
  },
  {
    scope: "ENT-04 · Group B",
    type: "Correction",
    amount: "−$18.40",
    amountClass: "text-red-700",
    date: "Feb 15",
    status: "Validation failed",
    statusClass: "bg-red-100 text-red-700",
    owner: "S. Adeyemi",
  },
  {
    scope: "ENT-03 · Group D",
    type: "Recurring ded.",
    amount: "−$120.00",
    amountClass: "text-red-700",
    date: "Mar 01",
    status: "Active",
    statusClass: "bg-emerald-100 text-green-700",
    owner: "M. Ortiz",
  },
];

const selectedChange = [
  { label: "Change ID", value: "CHG-10482" },
  { label: "Scope", value: "ENT-04 · Group A" },
  { label: "Type", value: "Recurring deduction" },
  { label: "Amount", value: "−$45.00 / period", valueClass: "text-red-700" },
  { label: "Effective date", value: "Apr 01, 2026" },
  { label: "Recurrence", value: "Monthly, no end date set" },
  { label: "Source", value: "Manual entry" },
];

export default function WorkspaceSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Deductions &amp; adjustments workspace</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-9 text-sky-950">
            One authorized workspace for every change in flight
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-6 text-slate-600">
            Search, filter by status, review the change queue and open a selected change without leaving
            the workspace. All data shown is synthetic.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <div className="flex flex-wrap items-center gap-4">
            <img
              src="/images/deductions/workspace-avatar.png"
              alt="Payroll administrator working across multiple screens"
              className="size-24 rounded-full object-cover shadow-[0px_3px_10px_0px_rgba(8,47,73,0.14)] ring-[3px] ring-white"
            />
            {headlineStats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-slate-300 pl-4">
                <p className="text-xl font-bold leading-6 text-sky-950">{stat.value}</p>
                <p className="font-mono text-xs uppercase leading-4 tracking-tight text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-6">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-300 bg-white lg:grid-cols-3">
            <div className="border-slate-200 lg:col-span-2 lg:border-r">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-100 px-4 py-3">
                <div className="flex flex-wrap gap-1.5">
                  {filters.map((filter, index) => (
                    <span
                      key={filter}
                      className={`rounded-md px-2.5 py-[5px] text-xs font-medium leading-4 ${
                        index === 0 ? "bg-sky-950 text-white" : "text-slate-600"
                      }`}
                    >
                      {filter}
                    </span>
                  ))}
                </div>
                <span className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs leading-4 text-slate-400">
                  Search scope, type or source...
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-2xl border-collapse text-left">
                  <thead>
                    <tr className="bg-slate-100">
                      {columns.map((column) => (
                        <th
                          key={column}
                          scope="col"
                          className="border-b border-slate-200 px-3.5 py-3 font-mono text-[10px] font-medium uppercase leading-4 text-slate-600"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {queue.map((row) => (
                      <tr key={row.scope} className={row.selected ? "bg-sky-100" : ""}>
                        <td className="border-b border-slate-200 px-3.5 py-3 text-xs leading-5 text-sky-950">
                          {row.scope}
                        </td>
                        <td className="border-b border-slate-200 px-3.5 py-3 text-xs leading-5 text-sky-950">
                          {row.type}
                        </td>
                        <td
                          className={`border-b border-slate-200 px-3.5 py-3 text-xs font-semibold leading-5 ${row.amountClass}`}
                        >
                          {row.amount}
                        </td>
                        <td className="border-b border-slate-200 px-3.5 py-3 text-xs leading-5 text-sky-950">
                          {row.date}
                        </td>
                        <td className="border-b border-slate-200 px-3.5 py-3">
                          <span
                            className={`inline-block rounded-[5px] px-2 py-[3px] font-mono text-xs font-medium leading-4 ${row.statusClass}`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="border-b border-slate-200 px-3.5 py-3 text-xs leading-5 text-sky-950">
                          {row.owner}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t border-slate-200 px-5 py-5 lg:border-t-0">
              <dl>
                {selectedChange.map((field) => (
                  <div key={field.label} className="pb-3.5">
                    <dt className="font-mono text-[10px] uppercase leading-4 tracking-tight text-slate-600">
                      {field.label}
                    </dt>
                    <dd
                      className={`mt-0.5 text-sm font-semibold leading-5 ${
                        field.valueClass ?? "text-sky-950"
                      }`}
                    >
                      {field.value}
                    </dd>
                  </div>
                ))}
                <div>
                  <dt className="font-mono text-[10px] uppercase leading-4 tracking-tight text-slate-600">
                    Status
                  </dt>
                  <dd className="mt-1">
                    <span className="inline-block rounded-[5px] bg-emerald-100 px-2 py-[3px] font-mono text-xs font-medium leading-4 text-green-700">
                      Active
                    </span>
                  </dd>
                </div>
              </dl>

              <p className="mt-5 border-t border-slate-200 pt-4 text-sm font-semibold leading-5 text-sky-800 underline underline-offset-4">
                View change history →
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
