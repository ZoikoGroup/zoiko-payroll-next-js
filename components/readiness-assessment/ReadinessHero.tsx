import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StatusPill, WindowBar, type ReadinessStatus } from "./Primitives";

const overview: { label: string; status: ReadinessStatus; text: string }[] = [
  { label: "Governance", status: "ready", text: "Ready to progress" },
  { label: "Payroll landscape", status: "ready", text: "Ready to progress" },
  { label: "Data readiness", status: "preparation", text: "Preparation required" },
  { label: "Compliance", status: "preparation", text: "Preparation required" },
  { label: "Integrations", status: "gap", text: "Material gap" },
  { label: "Testing & cutover", status: "unassessed", text: "Not yet assessed" },
];

export default function ReadinessHero() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <Image
        src="/images/readiness-assessment/hero-bg.webp"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      {/* Navy wash: keeps the photo readable behind white hero copy */}
      <div className="absolute inset-0 bg-[#0B2137]/70" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Copy */}
        <div className="flex flex-col gap-3.5">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-[40px] lg:text-5xl lg:leading-[59.4px]">
            Is your organization ready for global payroll implementation?
          </h1>
          <p className="max-w-[540px] pt-1.5 text-base leading-7 text-slate-300 sm:text-lg">
            Identify implementation blockers, readiness gaps, country
            dependencies, governance decisions, and operational preparation
            before implementation begins.
          </p>

          <div className="flex flex-col items-stretch gap-3.5 pt-5 sm:flex-row sm:items-center lg:flex-col lg:items-start">
            {/* Scrolls to the interactive assessment on this page; no standalone tool route exists yet. */}
            <Link
              href="#readiness-assessment"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white shadow-[0px_8px_20px_0px_rgba(37,99,235,0.16)] transition-colors hover:bg-blue-700"
            >
              Start readiness assessment
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center text-base font-semibold text-slate-900 transition-colors hover:border-blue-600"
            >
              Talk to implementation specialist
            </Link>
          </div>
        </div>

        {/* Readiness overview card */}
        <div className="flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-[0px_30px_60px_-20px_rgba(15,23,42,0.35)] sm:p-6">
          <WindowBar label="Readiness overview" />
          <ul className="flex flex-col gap-2.5">
            {overview.map((row) => (
              <li
                key={row.label}
                className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-[10px] border border-slate-200 bg-slate-50 px-3.5 py-3"
              >
                <span className="text-sm font-semibold text-slate-900">
                  {row.label}
                </span>
                <StatusPill status={row.status}>{row.text}</StatusPill>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
