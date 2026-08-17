import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { InfoIcon } from "../ui/icons";

const scope = ["Market: United States", "3 legal entities", "Aug 1–15, 2026"];

const stats = [
  { value: "6", label: "Runs in period" },
  { value: "2", label: "Ready for review" },
  { value: "1", label: "Needs attention" },
  { value: "1", label: "Pending approval" },
  { value: "2", label: "Completed" },
  { value: "98%", label: "Downstream reconciled" },
];

const columns = ["Run ID", "Entity / group", "Records", "Stage", "Next action"];

const runs = [
  {
    id: "run_US-Salaried-01",
    entity: "Zoiko US Inc.",
    records: "842",
    stage: "Review",
    stageClass: "bg-blue-500/25 text-blue-200 ring-1 ring-blue-400/40",
    action: "Reviewer sign-off",
  },
  {
    id: "run_US-Hourly-01",
    entity: "Zoiko US Inc.",
    records: "318",
    stage: "Blocked",
    stageClass: "bg-red-500/25 text-red-200 ring-1 ring-red-400/40",
    action: "Resolve validation",
  },
  {
    id: "run_US-Retail-01",
    entity: "Zoiko Retail LLC",
    records: "124",
    stage: "Approved",
    stageClass: "bg-emerald-500/25 text-emerald-200 ring-1 ring-emerald-400/40",
    action: "Awaiting completion",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1A33] py-14 sm:py-16">
      <img
        src="/images/single-jurisdiction/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div
        className="absolute inset-0 bg-radial-[at_75%_0%] from-blue-500/25 to-transparent to-65%"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow tone="light">Single-jurisdiction payroll</Eyebrow>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white">
              Run payroll for one market with every control visible
            </h1>
            <p className="mt-4 max-w-lg text-base leading-6 text-white/75">
              Operate payroll across entities, payroll groups and workforce in one primary market —
              structured preparation, calculation, validation, review, approval, records and
              reporting.
            </p>

            <div className="mt-6 flex max-w-lg gap-2.5 rounded-lg border border-white/15 bg-white/5 px-4 py-3">
              <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
              <p className="text-xs leading-5 text-white/60">
                Single-jurisdiction means operating-market scope, not company size or simplicity.
                Adding a second statutory payroll jurisdiction changes the operating model — that
                routes to Multi-Jurisdiction Payroll.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="#fit"
                className="flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Find your solution
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/single-jurisdiction/hero.png"
              alt="Payroll lead reviewing a run against reported figures"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111D38]">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <div className="flex flex-wrap gap-2">
                {scope.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold leading-4 text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold leading-4 text-white/80">
                Refreshed 4m ago
              </span>
            </div>

            <div className="grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#111D38] px-4 py-5 text-center">
                  <p className="text-xl font-bold leading-8 text-white">{stat.value}</p>
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
                  {runs.map((run, index) => {
                    const cellBorder = index < runs.length - 1 ? "border-b border-white/10" : "";
                    return (
                      <tr key={run.id}>
                        <td
                          className={`px-5 py-3.5 font-mono text-xs leading-4 text-white/90 ${cellBorder}`}
                        >
                          {run.id}
                        </td>
                        <td
                          className={`px-5 py-3.5 font-mono text-xs leading-4 text-white/60 ${cellBorder}`}
                        >
                          {run.entity}
                        </td>
                        <td
                          className={`px-5 py-3.5 font-mono text-xs leading-4 text-white/60 ${cellBorder}`}
                        >
                          {run.records}
                        </td>
                        <td className={`px-5 py-3 ${cellBorder}`}>
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold leading-4 ${run.stageClass}`}
                          >
                            {run.stage}
                          </span>
                        </td>
                        <td className={`px-5 py-3.5 text-xs leading-5 text-white/80 ${cellBorder}`}>
                          {run.action}
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
