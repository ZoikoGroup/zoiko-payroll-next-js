import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stats = [
  { label: "In scope", value: "18" },
  { label: "Ready", value: "11" },
  { label: "Needs review", value: "4", valueClass: "text-amber-400" },
  { label: "Approval pending", value: "2" },
  { label: "Blocked", value: "1", valueClass: "text-red-400" },
  { label: "Completed", value: "0" },
];

const columns = ["Jurisdiction", "Currency", "Cutoff", "Stage", "Integration", "Status"];

const rows = [
  {
    jurisdiction: "US · Acme US LLC",
    currency: "USD",
    cutoff: "Apr 12",
    stage: "Approve",
    integration: "Healthy",
    status: "Ready",
    statusClass: "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40",
  },
  {
    jurisdiction: "DE · Acme DE GmbH",
    currency: "EUR",
    cutoff: "Apr 14",
    stage: "Validate",
    integration: "Degraded",
    status: "Needs review",
    statusClass: "bg-amber-500/20 text-amber-300 ring-1 ring-amber-400/40",
  },
  {
    jurisdiction: "SG · Acme APAC Pte",
    currency: "SGD",
    cutoff: "Apr 10",
    stage: "Calculate",
    integration: "Failed sync",
    status: "Blocked",
    statusClass: "bg-red-500/20 text-red-300 ring-1 ring-red-400/40",
  },
  {
    jurisdiction: "BR · Acme Brasil Ltda",
    currency: "BRL",
    cutoff: "Apr 15",
    stage: "Approve",
    integration: "Healthy",
    status: "Ready",
    statusClass: "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40",
  },
];

const proofTiles = [
  { value: "18 markets", label: "Payroll groups in scope this cycle" },
  { value: "1 blocked", label: "Never hidden inside a green rollup" },
  { value: "Per-market", label: "Currency, cutoff and owner shown explicitly" },
  { value: "Versioned", label: "Every local configuration is effective-dated" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#08192F] py-14 sm:py-16">
      <div
        className="absolute inset-0 bg-radial-[at_50%_0%] from-sky-500/20 to-transparent to-70%"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow tone="light" center>
            Multi-jurisdiction payroll
          </Eyebrow>
          <h1 className="mx-auto mt-5 max-w-4xl text-2xl font-extrabold leading-tight break-words text-white sm:text-3xl lg:text-4xl">
            Control Payroll Across Jurisdictions Without Losing{" "}
            <span className="text-sky-400">Local Precision</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-6 text-white/75">
            Coordinate payroll periods, local configurations, approvals, records, integrations and
            close status across supported markets — from one governed operating layer, not a generic
            global dashboard.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-white/45">
            Availability and service scope vary by jurisdiction, worker population, payroll
            requirement, integration and service model.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book-a-demo"
              className="flex min-h-11 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#082F49] transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href="#find-your-path"
              className="flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Find your solution
            </Link>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0E2340]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
              <h2 className="text-sm font-bold leading-6 text-white">Global Payroll Control Center</h2>
              <span className="font-mono text-xs leading-4 text-white/50">
                Acme Group · Apr 2026 close cycle
              </span>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0E2340] px-4 py-3.5">
                  <p className="font-mono text-[10px] uppercase leading-4 text-white/50">
                    {stat.label}
                  </p>
                  <p
                    className={`mt-1 text-lg font-extrabold leading-7 ${stat.valueClass ?? "text-white"}`}
                  >
                    {stat.value}
                  </p>
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
                        className="border-y border-white/10 px-5 py-2.5 font-mono text-[10px] font-medium uppercase leading-4 text-white/50"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.jurisdiction}>
                      <td className="border-b border-white/10 px-5 py-3 text-xs leading-5 text-white/90">
                        {row.jurisdiction}
                      </td>
                      <td className="border-b border-white/10 px-5 py-3 text-xs leading-5 text-white/70">
                        {row.currency}
                      </td>
                      <td className="border-b border-white/10 px-5 py-3 text-xs leading-5 text-white/70">
                        {row.cutoff}
                      </td>
                      <td className="border-b border-white/10 px-5 py-3 text-xs leading-5 text-white/70">
                        {row.stage}
                      </td>
                      <td className="border-b border-white/10 px-5 py-3 text-xs leading-5 text-white/70">
                        {row.integration}
                      </td>
                      <td className="border-b border-white/10 px-5 py-2.5">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 font-mono text-xs leading-4 ${row.statusClass}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3">
              <span className="text-xs leading-5 text-white/50">
                Freshness: refreshed 3 minutes ago
              </span>
              <span className="text-xs leading-5 text-white/50">
                Scope: 18 of 18 required jurisdictions shown
              </span>
            </div>

            <div className="grid grid-cols-1 gap-px border-t border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {proofTiles.map((tile) => (
                <div key={tile.value} className="bg-[#123055] px-5 py-5">
                  <p className="text-base font-extrabold leading-6 text-white">{tile.value}</p>
                  <p className="mt-1.5 text-xs leading-5 text-white/60">{tile.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
