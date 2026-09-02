"use client";

import React from "react";
import Image from "next/image";
import { Monitor, Sparkles, ShieldCheck } from "lucide-react";

interface OperatingLayer {
  icon: React.ReactNode;
  title: string;
  description: string;
  topBadge?: string;
  hasSparkle?: boolean;
}

const operatingLayers: OperatingLayer[] = [
  {
    icon: <Monitor className="w-5 h-5 text-sky-400" />,
    title: "Customer systems",
    description: "Authoritative worker & employer data",
    topBadge: "Governed data and status flow",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-sky-300" />,
    title: "Zoiko Payroll",
    description: "Workflow, approvals, status, evidence",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-sky-400" />,
    title: "Approved payroll partner",
    description: "Contracted local execution",
    hasSparkle: true,
  },
];

export default function GlobalPayrollSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tag / Category Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EBF2FA] px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-[#144AAD] font-mono">
              <span>GLOBAL PAYROLL</span>
              <span className="text-slate-300">•</span>
              <span>PARTNER-SUPPORTED DELIVERY</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-[#07243B] leading-[1.15]">
              Local payroll expertise. One governed operating model.
            </h1>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Coordinate payroll in jurisdictions delivered through approved
              local or regional partners — without losing visibility, controls,
              auditability or a clear service boundary.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#explore-jurisdictions"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#4FA9DE] via-[#0A78C2] to-[#082F49] hover:bg-[#165E84] text-white text-xs sm:text-sm font-bold transition-all shadow-sm"
              >
                Explore jurisdictions
              </a>
              <a
                href="#talk-to-global-payroll"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#07243B] text-xs sm:text-sm font-bold transition-all shadow-2xs"
              >
                Talk to global payroll
              </a>
            </div>
          </div>

          {/* Right Column: Governed Model Graphic Card */}
          <div className="lg:col-span-6">
            <div className="relative w-full rounded-3xl bg-[#091527] border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden min-h-[360px] flex flex-col justify-center">
              {/* Background Tech Mesh / Circuit Decor */}
              <div className="absolute inset-0 pointer-events-none">
                <Image
                  src="/images/partner-supported/hero.png"
                  alt="Background circuit pattern"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Direct Answer Callout Card */}
        <div className="bg-[#EDF5FD] rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Column Label */}
            <div className="md:col-span-4 space-y-1">
              <div className="text-[10px] font-bold tracking-wider text-[#144AAD] uppercase font-mono">
                DIRECT ANSWER
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#07243B] leading-snug">
                What is partner-<br/>supported payroll?
              </h3>
            </div>

            {/* Right Column Content */}
            <div className="md:col-span-8">
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Partner-supported payroll is a delivery model in which an{" "}
                <strong className="text-[#07243B] font-bold">
                  approved third-party payroll provider
                </strong>{" "}
                performs defined local payroll services while{" "}
                <strong className="text-[#07243B] font-bold">
                  Zoiko Payroll provides the governed workflow
                </strong>{" "}
                — data exchange, approvals, status visibility, normalized
                results and audit evidence — included in the customer&apos;s
                configured service. Exact responsibilities vary by jurisdiction
                and contract.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
