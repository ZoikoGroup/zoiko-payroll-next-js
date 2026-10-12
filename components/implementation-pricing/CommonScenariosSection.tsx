"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Scenario {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}

const scenarios: Scenario[] = [
  {
    title: "New single-entity payroll",
    description:
      "Foundation + one entity + one jurisdiction + standard configuration.",
    linkLabel: "Catalog estimate where available",
    href: "/contact",
  },
  {
    title: "Switch from legacy provider",
    description:
      "Foundation + migration + reconciliation + provider transition + parallel validation.",
    linkLabel: "Estimate or scoped quote",
    href: "/contact",
  },
  {
    title: "Add another legal entity",
    description: "Entity activation + data/configuration + testing.",
    linkLabel: "Entity activation price / quote",
    href: "/contact",
  },
  {
    title: "Add another country",
    description:
      "Jurisdiction activation + local readiness + possible provider/payment work.",
    linkLabel: "Multi-Jurisdiction Pricing",
    href: "/pricing/multi-jurisdiction",
  },
  {
    title: "Consolidate several providers",
    description:
      "Global program + connected/partner transitions + normalization + waves.",
    linkLabel: "Enterprise commercial review",
    href: "/contact",
  },
  {
    title: "M&A / acquisition",
    description: "Entity onboarding + migration + integration + phased cutover.",
    linkLabel: "Enterprise scope",
    href: "/contact",
  },
  {
    title: "Carve-out / divestiture",
    description:
      "Data separation + new entity/jurisdiction + retention + transition controls.",
    linkLabel: "Enterprise scope",
    href: "/contact",
  },
  {
    title: "Reimplement after change",
    description:
      "Configuration redesign + integrations + reconciliation + controlled cutover.",
    linkLabel: "Scoped change program",
    href: "/contact",
  },
];

export default function CommonScenariosSection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span className="font-bold">/</span>
            <span>Common implementation scenarios</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-[#07243B] leading-tight">
            Find the pattern closest to your situation.
          </h2>
        </div>

        {/* Scenario cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {scenarios.map((scenario) => (
            <div
              key={scenario.title}
              className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col gap-2.5"
            >
              <h3 className="text-sm font-extrabold text-[#07243B]">
                {scenario.title}
              </h3>
              <p className="text-xs text-slate-600 leading-4">
                {scenario.description}
              </p>
              <Link
                href={scenario.href}
                className="mt-auto pt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8FD0] hover:text-[#07243B] transition-colors"
              >
                <span>{scenario.linkLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
