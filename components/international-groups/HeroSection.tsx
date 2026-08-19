import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusChip from "./StatusChip";
import { InfoIcon } from "../ui/icons";

const scope = [
  "Group: Zoiko Holdings",
  "Region: EMEA",
  "Reporting currency: USD",
  "Refreshed 8m ago",
];

const stats = [
  { value: "7 / 9", label: "Markets on track" },
  { value: "11", label: "Entities ready" },
  { value: "4", label: "Open exceptions" },
  { value: "3", label: "Pending approvals" },
  { value: "2", label: "Reconciliation items" },
  { value: "1", label: "Provider issues" },
];

const columns = ["Market / entity", "Stage", "Local owner", "Status"];

const markets = [
  {
    market: "US — Zoiko US Inc.",
    stage: "Review",
    owner: "m.chen",
    status: "On track",
    tone: "info" as const,
  },
  {
    market: "DE — Zoiko DE GmbH",
    stage: "Validate",
    owner: "l.hoffmann",
    status: "Needs attention",
    tone: "warn" as const,
  },
  {
    market: "SG — Zoiko SG Pte.",
    stage: "Complete",
    owner: "r.tan",
    status: "On track",
    tone: "ok" as const,
  },
];

export default function HeroSection() {
  return (
    <section className="bg-radial-[at_75%_0%] from-[#123B5E] via-[#0B2545] via-55% to-[#071A2E] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow tone="light">International group payroll</Eyebrow>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Coordinate payroll across markets without losing local accountability.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-6 text-slate-300">
              Bring legal entities, payroll groups, local providers, approvals and reporting into one
              governed operating view — while preserving market-specific responsibility.
            </p>

            <div className="mt-6 flex max-w-lg gap-2.5 rounded-lg border border-white/15 bg-white/5 px-4 py-3">
              <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
              <p className="text-xs leading-5 text-white/60">
                Local requirements, capabilities, service models and provider arrangements vary by
                market and contract. Current support status lives in the Jurisdiction Directory.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="/multi-jurisdiction"
                className="flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Multi-Jurisdiction Payroll
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/international-groups/hero.png"
              alt="A regional payroll owner reviewing a market run"
              className="aspect-[420/410] w-full rounded-xl object-cover"
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

            <div className="grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0B2545] px-4 py-5 text-center">
                  <p className="font-mono text-xl font-bold leading-8 text-white">{stat.value}</p>
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
                  {markets.map((market, index) => {
                    const cellBorder = index < markets.length - 1 ? "border-b border-white/10" : "";
                    return (
                      <tr key={market.market}>
                        <td
                          className={`px-5 py-3.5 font-mono text-xs leading-4 text-white/90 ${cellBorder}`}
                        >
                          {market.market}
                        </td>
                        <td
                          className={`px-5 py-3.5 font-mono text-xs leading-4 text-white/60 ${cellBorder}`}
                        >
                          {market.stage}
                        </td>
                        <td
                          className={`px-5 py-3.5 font-mono text-xs leading-4 text-white/60 ${cellBorder}`}
                        >
                          {market.owner}
                        </td>
                        <td className={`px-5 py-3 ${cellBorder}`}>
                          <StatusChip tone={market.tone}>{market.status}</StatusChip>
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
