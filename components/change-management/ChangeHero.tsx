import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ClipboardCheck, Check, Clock } from "lucide-react";

const assurances = [
  { icon: ClipboardCheck, label: "Structured readiness reviews" },
  { icon: Check, label: "Cross-functional stakeholder plans" },
  { icon: Clock, label: "Hypercare through stabilization" },
] as const;

const chips = [
  { title: "HR", subtitle: "Operations", className: "left-0 top-6" },
  { title: "Finance", subtitle: "Teams", className: "right-0 top-24" },
  { title: "Managers", subtitle: "& Leaders", className: "-left-2 bottom-16" },
  { title: "Employees", subtitle: "Self-service", className: "right-2 bottom-8" },
] as const;

export default function ChangeHero() {
  return (
    <section className="overflow-hidden bg-radial-[at_15%_-10%] from-blue-400/20 to-blue-400/0 to-60% px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12">
        {/* Copy */}
        <div className="flex flex-col gap-6">
          <h1 className="text-[34px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[64.8px]">
            Prepare your organization for payroll change
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Payroll transformation succeeds when people, processes,
            responsibilities, and communication evolve together — not just the
            technology.
          </p>

          <div className="flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
            {/* No change-approach route exists yet — placeholder until one is built. */}
            <Link
              href="#"
              className="rounded-[10px] bg-linear-72 from-blue-400 via-sky-600 to-sky-950 px-7 py-3.5 text-center text-base font-semibold text-white shadow-[0px_8px_20px_0px_rgba(37,99,235,0.16)] transition-all hover:brightness-110"
            >
              Review change approach
            </Link>
            <Link
              href="/contact"
              className="rounded-[10px] border border-slate-200 bg-white px-7 py-3.5 text-center text-base font-semibold text-slate-900 transition-colors hover:border-blue-600"
            >
              Talk to an implementation specialist
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 pt-1">
            {assurances.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-slate-500"
              >
                <Icon className="h-4 w-4 shrink-0 text-blue-600" strokeWidth={1.33} />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Image with floating audience chips */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-[0px_20px_45px_0px_rgba(8,47,73,0.10)]">
            <Image
              src="/images/change-management/hero.webp"
              alt="A cross-functional team reviewing a payroll change plan"
              width={477}
              height={385}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          {chips.map((chip) => (
            <span
              key={chip.title}
              className={`absolute hidden flex-col rounded-lg border border-slate-200 bg-white px-4 py-2 text-center shadow-md lg:flex ${chip.className}`}
            >
              <span className="text-xs font-bold text-slate-900">
                {chip.title}
              </span>
              <span className="text-[9.55px] text-slate-500">
                {chip.subtitle}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
