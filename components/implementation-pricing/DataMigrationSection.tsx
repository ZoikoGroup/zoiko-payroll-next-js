"use client";

import React from "react";
import Image from "next/image";
import { Lock } from "lucide-react";

interface MigrationTier {
  tag: string;
  title: string;
  description: string;
}

const migrationTiers: MigrationTier[] = [
  {
    tag: "Often baseline",
    title: "Current-year operational data",
    description:
      "Opening balances, YTD accumulators, active worker payroll records.",
  },
  {
    tag: "Scoped by jurisdiction",
    title: "Statutory lookback",
    description:
      "Historical values required for year-end or statutory continuity.",
  },
  {
    tag: "Optional / scoped",
    title: "Extended analytical history",
    description:
      "Older payroll results for reporting or comparison where supported.",
  },
  {
    tag: "Optional / contracted",
    title: "Archive migration",
    description: "Indexed historical records retained for governed retrieval only.",
  },
];

export default function DataMigrationSection() {
  return (
    <section className="w-full bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Image + copy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative w-full h-64 sm:h-80 lg:h-[380px] rounded-2xl overflow-hidden shadow-[0px_8px_24px_0px_rgba(8,47,73,0.08)]">
            <Image
              src="/images/implementation-pricing/data-migration.png"
              alt="Secure data centre servers representing payroll data migration"
              fill

              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span className="font-bold">/</span>
              <span>Data migration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-[#07243B] leading-tight">
              Priced on effort, not file count.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Migration pricing reflects the work required to obtain, map,
              transform, validate, reconcile and govern the agreed history.
            </p>
          </div>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {migrationTiers.map((tier) => (
            <div
              key={tier.title}
              className="bg-white rounded-xl border border-slate-200 p-5 space-y-2.5"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-[#0A8FD0] font-mono">
                {tier.tag}
              </div>
              <h3 className="text-sm font-extrabold text-[#07243B]">
                {tier.title}
              </h3>
              <p className="text-xs text-slate-600 leading-5">
                {tier.description}
              </p>
            </div>
          ))}
        </div>

        {/* Data protection band */}
        <div className="bg-[#07243B] rounded-xl p-5 flex items-start gap-3.5">
          <Lock className="w-5 h-5 text-orange-300 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-sm font-bold text-white">Data protection.</div>
            <p className="text-sm text-slate-400 leading-5">
              The public pricing page never requests payroll files, employee
              names, salary values, tax identifiers, bank data or production
              exports. Detailed data assessment happens only in the authorized
              implementation/security workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
