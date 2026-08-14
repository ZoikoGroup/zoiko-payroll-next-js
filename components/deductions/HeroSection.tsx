import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const tiles = [
  { label: "Needs review", value: "6" },
  { label: "Pending approval", value: "3" },
  { label: "Validation failed", value: "2" },
  { label: "Ready to apply", value: "14" },
];

const columns = ["Scope", "Type", "Amount", "Eff. date", "Status"];

const rows = [
  {
    scope: "ENT-04 · Group A",
    type: "Recurring ded.",
    amount: "−$45.00",
    amountClass: "text-red-700",
    date: "Apr 01",
    status: "Active",
    statusClass: "bg-emerald-100 text-green-700",
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
  },
  {
    scope: "ENT-04 · Group B",
    type: "Correction",
    amount: "−$18.40",
    amountClass: "text-red-700",
    date: "Feb 15",
    status: "Validation failed",
    statusClass: "bg-red-100 text-red-700",
  },
];

export default function HeroSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Deductions and adjustments</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-sky-950 sm:text-5xl">
              Control payroll deductions and adjustments with clear change history.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-6 text-slate-600">
              Create, validate, review, approve where required and preserve recurring deductions,
              one-time deductions, reimbursements, corrections and approved payroll changes — with
              effective dates, review state, payroll impact and attributable history.
            </p>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="bg-brand-gradient flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="/payroll-processing"
                className="flex min-h-11 items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-sky-950 transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Payroll Processing →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-[0px_1px_2px_0px_rgba(8,47,73,0.06)]">
              <span
                className="bg-brand-gradient absolute inset-x-0 top-0 h-[3px]"
                aria-hidden="true"
              />

              <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-4 py-2.5">
                <span className="size-2 rounded-sm bg-slate-300" aria-hidden="true" />
                <span className="size-2 rounded-sm bg-slate-300" aria-hidden="true" />
                <span className="size-2 rounded-sm bg-slate-300" aria-hidden="true" />
                <span className="pl-2 font-mono text-xs leading-4 text-slate-600">
                  deductions-workspace · march-2026
                </span>
              </div>

              <div className="flex flex-col gap-3.5 p-4">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {tiles.map((tile) => (
                    <div
                      key={tile.label}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 pt-2.5 pb-3"
                    >
                      <p className="font-mono text-xs uppercase leading-4 text-slate-600">
                        {tile.label}
                      </p>
                      <p className="mt-1 text-xl font-bold leading-8 text-sky-950">{tile.value}</p>
                    </div>
                  ))}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-lg border-collapse text-left">
                    <thead>
                      <tr className="bg-slate-100">
                        {columns.map((column) => (
                          <th
                            key={column}
                            scope="col"
                            className="border-b border-slate-200 px-3.5 py-4 font-mono text-[10px] font-medium uppercase leading-4 text-slate-600"
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => (
                        <tr key={row.scope} className={row.selected ? "bg-sky-100" : ""}>
                          <td className="border-b border-slate-200 px-3.5 py-2.5 text-xs leading-5 text-sky-950">
                            {row.scope}
                          </td>
                          <td className="border-b border-slate-200 px-3.5 py-2.5 text-xs leading-5 text-sky-950">
                            {row.type}
                          </td>
                          <td
                            className={`border-b border-slate-200 px-3.5 py-2.5 text-xs font-semibold leading-5 ${row.amountClass}`}
                          >
                            {row.amount}
                          </td>
                          <td className="border-b border-slate-200 px-3.5 py-2.5 text-xs leading-5 text-sky-950">
                            {row.date}
                          </td>
                          <td className="border-b border-slate-200 px-3.5 py-2.5">
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
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
