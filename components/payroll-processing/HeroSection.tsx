import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = [
  { key: "run", label: "Run ID", className: "w-60" },
  { key: "records", label: "Records", className: "w-32" },
  { key: "stage", label: "Stage", className: "w-40" },
  { key: "exceptions", label: "Exceptions", className: "w-80" },
  { key: "approval", label: "Approval", className: "w-64" },
];

const runs = [
  {
    run: "run_2026-08-15_US-01",
    records: "1,284",
    stage: "Review",
    stageClass: "bg-blue-500/20 text-blue-300",
    exceptions: "3 open · owner: payroll-ops",
    exceptionsClass: "text-orange-300",
    approval: "Pending approver",
  },
  {
    run: "run_2026-08-15_GB-01",
    records: "612",
    stage: "Approved",
    stageClass: "bg-green-600/20 text-emerald-300",
    exceptions: "0 open",
    exceptionsClass: "text-emerald-300",
    approval: "Approved · v3",
  },
  {
    run: "run_2026-08-15_DE-01",
    records: "398",
    stage: "Blocked",
    stageClass: "bg-red-600/20 text-red-300",
    exceptions: "2 open · owner: finance-team",
    exceptionsClass: "text-red-300",
    approval: "Blocked on validation",
  },
  {
    run: "run_2026-07-31_US-01",
    records: "1,271",
    stage: "Completed",
    stageClass: "bg-indigo-600/20 text-violet-300",
    exceptions: "0 open",
    exceptionsClass: "text-white/50",
    approval: "Locked · final v2",
  },
];

const scopeChips = ["Entity: Zoiko US Inc.", "Jurisdiction: US", "Period: Aug 1–15, 2026"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 pt-10 pb-16">
      <div
        className="absolute inset-0 bg-radial-[at_85%_-10%] from-blue-500/30 to-transparent to-60%"
        aria-hidden="true"
      />
      <img
        src="/images/payroll-processing/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow tone="light">Payroll Processing</Eyebrow>
          <h1 className="mt-8 max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-[48px]">
            Run every payroll cycle from prepared inputs to an approved, final version
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-6 text-white/80">
            Control the complete payroll cycle — prepare, calculate, validate, review, approve and
            complete — with exceptions, ownership and authorization visible at every stage.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book-a-demo"
              className="flex min-h-11 w-44 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href="/product/how-it-works"
              className="flex min-h-11 items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              See the payroll workflow
            </Link>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-14">
          <div className="overflow-hidden rounded-2xl bg-slate-800 shadow-[0px_30px_80px_-20px_rgba(0,0,0,0.55)] outline outline-white/10">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-5 py-3.5">
              <div className="flex flex-wrap gap-2">
                {scopeChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-[20px] bg-white/10 px-2.5 pt-1 pb-1.5 text-xs font-semibold leading-4 text-white/80 outline outline-white/10"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <span className="rounded-[20px] bg-white/10 px-2.5 pt-1 pb-1.5 text-xs font-semibold leading-4 text-white/80 outline outline-white/10">
                Payroll group: Salaried — Semi-monthly
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-225 border-collapse text-left">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column.key}
                        scope="col"
                        className={`${column.className} border-b border-white/10 px-5 py-2.5 text-xs font-semibold uppercase leading-4 tracking-wide text-white/40`}
                      >
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {runs.map((row, index) => {
                    const cellBorder = index < runs.length - 1 ? "border-b border-white/5" : "";
                    return (
                      <tr key={row.run}>
                        <td className={`${cellBorder} px-5 py-3 font-mono text-xs leading-4 text-white/90`}>
                          {row.run}
                        </td>
                        <td className={`${cellBorder} px-5 py-3 font-mono text-xs leading-4 text-white/90`}>
                          {row.records}
                        </td>
                        <td className={`${cellBorder} px-5 pt-2.5 pb-3`}>
                          <span
                            className={`inline-block rounded-[20px] px-2.5 py-0.5 text-xs font-semibold leading-4 ${row.stageClass}`}
                          >
                            {row.stage}
                          </span>
                        </td>
                        <td
                          className={`${cellBorder} px-5 py-3 font-mono text-xs leading-4 ${row.exceptionsClass}`}
                        >
                          {row.exceptions}
                        </td>
                        <td className={`${cellBorder} px-5 py-3 font-mono text-xs leading-4 text-white/90`}>
                          {row.approval}
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
