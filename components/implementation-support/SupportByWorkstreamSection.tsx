"use client";

import React from "react";
import Image from "next/image";

interface WorkstreamCard {
  title: string;
  description: string;
}

const workstreamsData: WorkstreamCard[] = [
  {
    title: "Data Migration",
    description:
      "Mapping, data quality, YTD/opening balances, historical records and reconciliation.",
  },
  {
    title: "Integrations",
    description:
      "Diagnostics, mapping, retry/test evidence and sanitized technical context.",
  },
  {
    title: "Payroll",
    description: "Configuration, validation, calculation and variance issues.",
  },
  {
    title: "Finance",
    description: "Payments, funding and GL readiness.",
  },
  {
    title: "Security",
    description:
      "Access, role and IAM blockers — never resolved with unsafe access workarounds.",
  },
  {
    title: "Local / Jurisdiction",
    description: "Statutory configuration and local requirement readiness.",
  },
  {
    title: "Cutover",
    description:
      "Final freeze, migration, readiness and go/no-go coordination.",
  },
];

export default function SupportByWorkstreamSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Split: Title/Description Left + Hero Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span>/</span>
              <span>SUPPORT BY WORKSTREAM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-[#07243B] leading-tight">
              A contextual support path — never a generic contact form
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Every case opens already scoped to its workstream, phase and
              entity — routed to the team that owns that part of the
              implementation.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src="/images/imp-sup/1.png"
                alt="Support team standing together in an office environment"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Bottom Grid: 7 Workstream Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workstreamsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
