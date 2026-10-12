import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ClipboardCheck, Check, Columns3 } from "lucide-react";

const assurances = [
  { icon: ClipboardCheck, label: "Scoped, accountable delivery" },
  { icon: Check, label: "Named payroll specialists" },
  { icon: Columns3, label: "Governed project workspace" },
] as const;

const board = [
  { value: "4/6", label: "Milestones complete" },
  { value: "12", label: "Deliverables logged" },
  { value: "2", label: "Open decisions" },
  { value: "96%", label: "SOW adherence" },
  { value: "0", label: "Critical risks" },
  { value: null, badge: "In review", label: "Current phase" },
] as const;

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/professional-services/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#122c47]/75" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="flex flex-col gap-3">
          <h1 className="text-[32px] font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[63.8px]">
            Add expert capacity where payroll transformation needs it
          </h1>
          <p className="max-w-lg pt-2 text-base leading-7 text-slate-200 sm:text-lg">
            Bring in payroll, migration, integration, testing, and
            transformation specialists for complex projects that need structured
            delivery and extra expertise.
          </p>

          <div className="flex flex-col items-stretch gap-3.5 pt-5 sm:flex-row sm:items-center">
            <Link
              href="#service-portfolio"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white shadow-[0px_8px_20px_0px_rgba(37,99,235,0.16)] transition-colors hover:bg-blue-700"
            >
              Explore service areas
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center text-base font-semibold text-slate-900 transition-colors hover:border-blue-600"
            >
              Discuss an engagement
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 pt-6">
            {assurances.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-slate-300"
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-blue-400"
                  strokeWidth={1.33}
                />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Delivery board */}
        <div className="rounded-3xl border-4 border-slate-900 bg-white p-4 sm:border-8 shadow-[0px_30px_60px_-20px_rgba(15,23,42,0.08)] sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-sm bg-slate-200" />
              <span className="h-2 w-2 rounded-sm bg-slate-200" />
              <span className="h-2 w-2 rounded-sm bg-slate-200" />
            </div>
            <span className="hidden text-sm text-slate-500 sm:block">
              Engagement delivery board
            </span>
            <span className="rounded-[20px] bg-green-600/10 px-2.5 py-1 text-xs font-semibold text-green-600">
              On track
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {board.map((tile) => (
              <div
                key={tile.label}
                className="rounded-xl border border-sky-600/30 bg-sky-600/10 p-4"
              >
                {tile.value ? (
                  <span className="block text-xl font-bold text-slate-900">
                    {tile.value}
                  </span>
                ) : (
                  <span className="inline-block rounded-[20px] bg-blue-500/15 px-2.5 py-1 text-xs font-semibold text-blue-600">
                    {tile.badge}
                  </span>
                )}
                <span className="mt-1 block text-xs text-slate-500">
                  {tile.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
