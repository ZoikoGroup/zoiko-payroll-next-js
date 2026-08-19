import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const assurances = ["Role-based access", "Recorded approvals", "Clear payroll records"];

const scope = [
  "Group: Salaried — Semi-monthly",
  "Aug 1–15, 2026",
  "Version: run-v3",
  "Cutoff: Aug 13, 17:00 ET",
];

const stats = [
  { value: "842", label: "Inputs ready" },
  { value: "2", label: "Validation issues" },
  { value: "3", label: "Open exceptions" },
  { value: "1", label: "Pending review" },
  { value: "1", label: "Pending approval" },
  { value: "Not yet", label: "Completion" },
  { value: "Pending", label: "Downstream" },
];

const columns = ["Payroll group / period", "Stage", "Issue", "Owner", "Next action"];

const queue = [
  {
    group: "Salaried — Aug 1–15",
    stage: "Review",
    issue: "Variance +2.1%",
    owner: "j.alvarez",
    action: "Mark reviewed",
  },
  {
    group: "Hourly — Aug 1–15",
    stage: "Validate",
    issue: "Time source stale",
    owner: "it-integrations",
    action: "Refresh source",
  },
  {
    group: "Retail — Jul 16–31",
    stage: "Complete",
    issue: "—",
    owner: "system",
    action: "Reconciliation pending",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-radial-[at_75%_0%] from-[#123B5E] via-[#0B2545] via-55% to-[#071A2E] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow tone="light">Payroll teams</Eyebrow>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Run every pay cycle with clear ownership
            </h1>
            <p className="mt-4 max-w-lg text-base leading-6 text-slate-300">
              Bring preparation, validation, exceptions, reviews, approvals, completion and records
              into one controlled payroll operating workflow.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="#find-your-solution"
                className="flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Find your solution
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5">
              {assurances.map((assurance) => (
                <span key={assurance} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                  <span className="text-sm leading-5 text-slate-300">{assurance}</span>
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/payroll-teams/hero.png"
              alt="A payroll lead working through the current pay cycle"
              className="aspect-[517/309] w-full rounded-xl object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div className="flex flex-wrap gap-2 px-5 py-4">
              {scope.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold leading-4 text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 sm:grid-cols-4 lg:grid-cols-7">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0B2545] px-4 py-5 text-center">
                  <p className="font-mono text-lg font-bold leading-8 text-white">{stat.value}</p>
                  <p className="mt-1 text-xs leading-4 text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-3xl border-collapse text-left">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-white/10 px-5 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-white/50"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {queue.map((row, index) => {
                    const cellBorder = index < queue.length - 1 ? "border-b border-white/10" : "";
                    return (
                      <tr key={row.group}>
                        <td
                          className={`px-5 py-3.5 font-mono text-xs leading-4 text-white/90 ${cellBorder}`}
                        >
                          {row.group}
                        </td>
                        <td
                          className={`px-5 py-3.5 font-mono text-xs leading-4 text-white/60 ${cellBorder}`}
                        >
                          {row.stage}
                        </td>
                        <td
                          className={`px-5 py-3.5 font-mono text-xs leading-4 text-white/60 ${cellBorder}`}
                        >
                          {row.issue}
                        </td>
                        <td
                          className={`px-5 py-3.5 font-mono text-xs leading-4 text-white/60 ${cellBorder}`}
                        >
                          {row.owner}
                        </td>
                        <td
                          className={`px-5 py-3.5 font-mono text-xs leading-4 text-white/80 ${cellBorder}`}
                        >
                          {row.action}
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
