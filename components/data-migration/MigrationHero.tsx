import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const assurances = [
  "Encrypted in transit and at rest",
  "Full audit trail",
  "Reconciled to source totals",
] as const;

const badges = [
  { label: "Validation passed", className: "right-6 top-12" },
  { label: "48,204 records", className: "-right-2 top-1/2" },
  { label: "Mapping complete", className: "-left-2 bottom-24" },
  { label: "Reconciliation ready", className: "bottom-10 right-8" },
] as const;

export default function MigrationHero() {
  return (
    <section className="bg-slate-50 px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-[32px] font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[55px]">
              Move payroll data with control, traceability and confidence.
            </h1>
            <p className="text-base leading-8 text-slate-700">
              A governed migration path from your legacy HRIS and payroll
              systems into Zoiko Payroll — every record profiled, mapped,
              validated and reconciled before it goes live.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
            {/* No readiness route exists yet — placeholder until one is built. */}
            <Link
              href="#"
              className="rounded-xl bg-linear-to-r from-blue-400 via-sky-600 to-sky-950 px-8 py-3.5 text-center text-base font-semibold text-white shadow-[0px_8px_20px_-6px_rgba(37,99,235,0.55)] transition-all hover:brightness-110"
            >
              Assess migration readiness
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-center text-base font-semibold text-slate-900 transition-colors hover:border-blue-600"
            >
              Talk to an implementation specialist
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {assurances.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-slate-600"
              >
                <Check
                  className="h-4 w-4 shrink-0 text-green-600"
                  strokeWidth={2.5}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image with floating status badges */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-[0px_24px_48px_-16px_rgba(37,99,235,0.22)]">
            <Image
              src="/images/data-migration/hero.png"
              alt="A team reviewing a payroll data migration in progress"
              width={563}
              height={474}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          {badges.map((badge) => (
            <span
              key={badge.label}
              className={`absolute hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-medium text-white backdrop-blur-sm lg:block ${badge.className}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
