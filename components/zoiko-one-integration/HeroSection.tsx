import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CheckCircleIcon } from "../ui/icons";

const points = [
  "Explicit scopes and product-specific permissions, not blanket access",
  "Connection health visible at all times — never assumed",
  "Payroll validation, approval and records stay governed by payroll",
];

const connections = [
  {
    name: "Workforce / HR",
    direction: "→ inbound",
    status: "Connected",
    statusClass: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  },
  {
    name: "Identity & Access",
    direction: "↔ shared",
    status: "Connected",
    statusClass: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  },
  {
    name: "Finance",
    direction: "← outbound",
    status: "Needs review",
    statusClass: "bg-amber-400/15 text-amber-300 border-amber-400/30",
  },
  {
    name: "Time / Operational",
    direction: "→ inbound",
    status: "Blocked",
    statusClass: "bg-red-400/15 text-red-300 border-red-400/30",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#06182D] py-16 sm:py-20">
      <span className="bg-brand-gradient absolute inset-x-0 top-0 h-[3px]" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-radial-[at_15%_0%] from-sky-500/15 to-transparent to-55%"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow tone="light">Zoiko One integration</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Connect Payroll Through Zoiko One —Without Losing{" "}
              <span className="text-sky-400">Payroll Control</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-6 text-slate-300">
              Zoiko Payroll works independently. Zoiko One is optional, and every connection is scoped,
              permissioned and visibly governed — never a silent handshake.
            </p>

            <ul className="mt-6 space-y-2.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-200">
                  <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href="/book-a-demo"
              className="mt-8 flex min-h-11 w-full max-w-60 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-sky-950 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-[3px]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-bold text-white">Zoiko One Connection Center</p>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                  <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  Live
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                {connections.map((connection) => (
                  <div
                    key={connection.name}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm text-white">
                      {connection.name}{" "}
                      <span className="font-mono text-xs text-slate-400">{connection.direction}</span>
                    </span>
                    <span
                      className={`shrink-0 rounded-md border px-2.5 py-1 text-xs font-semibold ${connection.statusClass}`}
                    >
                      {connection.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span>4 of 4 categories configured</span>
                <span>Last event 3 min ago</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
