import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusChip, { type ChipTone } from "./StatusChip";

const filters = ["Period: Aug 2026", "Entity: All (4)", "HRIS sync: On track"];

const stats = [
  { value: "128", label: "Ready changes" },
  { value: "14", label: "Needs review" },
  { value: "6", label: "Records pending" },
  { value: "3", label: "Sync exceptions" },
];

const rows: { employee: string; change: string; effective: string; status: string; tone: ChipTone }[] =
  [
    {
      employee: "E-10432 A. Rao",
      change: "Cost center",
      effective: "Aug 18",
      status: "Ready",
      tone: "ok",
    },
    {
      employee: "E-10488 J. Okafor",
      change: "Compensation input",
      effective: "Aug 20",
      status: "Needs review",
      tone: "warn",
    },
    {
      employee: "E-10501 S. Meier",
      change: "Leave return",
      effective: "Aug 16",
      status: "Late change",
      tone: "fail",
    },
  ];

const assurances = ["Role-based access", "Versioned change objects", "Audit-linked handoffs"];

export default function HeroSection() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>HR Teams</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-sky-950 sm:text-5xl">
              Keep authorized employee
              <br className="hidden sm:block" /> changes and payroll
              <br className="hidden sm:block" /> records aligned.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-6 text-gray-600">
              A controlled view of payroll-relevant changes, effective dates and record status
              — while calculation and approval stay with payroll.
            </p>

            <div className="mt-5 rounded-[10px] border border-sky-100 bg-blue-50 px-4 pb-3 pt-4">
              <p className="text-xs leading-5 text-blue-950">
                <span className="font-bold text-sky-950">Boundary:</span> HRIS remains
                authoritative for HR master data. Zoiko Payroll does not make employment
                decisions.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-lg bg-linear-71 from-blue-500 to-sky-900 px-5 py-3 text-sm font-bold text-white shadow-[0_8px_18px_-6px_rgba(11,76,120,0.45)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="#alignment-center"
                className="flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-sky-950 transition-all duration-200 hover:-translate-y-0.5"
              >
                Find your solution
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_48px_-18px_rgba(15,45,70,0.22)]">
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3.5">
                <p className="text-xs font-bold leading-5 text-sky-950">
                  HR Payroll Alignment Center
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2 py-[3px] text-xs font-bold leading-4 text-emerald-600">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />
                  Healthy
                </span>
              </div>

              <div className="flex flex-wrap gap-2 border-b border-slate-200 px-4 py-2.5">
                {filters.map((filter) => (
                  <span
                    key={filter}
                    className="rounded-md border border-slate-200 bg-slate-100 px-2 py-1 text-xs leading-4 text-slate-500"
                  >
                    {filter}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 border-b border-slate-200 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`px-4 py-3.5 ${
                      index < stats.length - 1 ? "border-slate-200 sm:border-r" : ""
                    } ${index % 2 === 0 ? "border-r border-slate-200" : ""} ${
                      index < 2 ? "border-b border-slate-200 sm:border-b-0" : ""
                    }`}
                  >
                    <p className="text-xl font-bold leading-8 text-sky-950">{stat.value}</p>
                    <p className="text-xs leading-4 text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-md border-collapse text-left">
                  <thead>
                    <tr>
                      {["Employee", "Change", "Effective", "Status"].map((column) => (
                        <th
                          key={column}
                          scope="col"
                          className="bg-slate-100 px-4 py-2 text-[0.625rem] font-bold uppercase leading-4 tracking-wide text-slate-500"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.employee}>
                        <td className="border-t border-slate-200 px-4 py-2.5 text-xs leading-4 text-sky-950">
                          {row.employee}
                        </td>
                        <td className="border-t border-slate-200 px-4 py-2.5 text-xs leading-4 text-sky-950">
                          {row.change}
                        </td>
                        <td className="border-t border-slate-200 px-4 py-2.5 text-xs leading-4 text-sky-950">
                          {row.effective}
                        </td>
                        <td className="border-t border-slate-200 px-4 py-2">
                          <StatusChip tone={row.tone}>{row.status}</StatusChip>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5">
                <p className="text-xs leading-4 text-slate-500">Refreshed 2 min ago</p>
                <p className="text-xs leading-4 text-slate-500">
                  Synthetic data — for illustration
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              {assurances.map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                  <span className="text-xs leading-5 text-slate-500">{item}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
