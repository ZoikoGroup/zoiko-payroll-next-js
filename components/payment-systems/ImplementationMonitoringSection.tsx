"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface StepCard {
  step: string;
  title: string;
  description: string;
}

const steps: StepCard[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Provider, countries, currencies, entities, volumes, funding model, roles and security.",
  },
  {
    step: "02",
    title: "Method / access",
    description:
      "Confirm API, file or host-to-host connectivity and credentials path.",
  },
  {
    step: "03",
    title: "Mapping",
    description:
      "Map fields, entities and identifiers to the target rail's requirements.",
  },
  {
    step: "04",
    title: "State contract",
    description:
      "Align lifecycle states, evidence sources and exception handling.",
  },
  {
    step: "05",
    title: "Test",
    description:
      "Positive, reject, partial-accept, timeout, duplicate, cutoff and holiday cases.",
  },
  {
    step: "06",
    title: "Reconciliation",
    description:
      "Validate matching logic against real settlement and return evidence.",
  },
  {
    step: "07",
    title: "Activation",
    description: "Controlled cutover with monitoring in place from day one.",
  },
  {
    step: "08",
    title: "Stabilization",
    description:
      "Track health signals and resolve exceptions through steady-state.",
  },
];

interface StatusPill {
  label: string;
  dotColor: string;
}

const statusPills: StatusPill[] = [
  { label: "Connected", dotColor: "bg-emerald-500" },
  { label: "Awaiting release", dotColor: "bg-amber-400" },
  { label: "Awaiting external state", dotColor: "bg-sky-400" },
  { label: "Attention needed", dotColor: "bg-rose-400" },
  { label: "Paused / Disconnected", dotColor: "bg-slate-400" },
  { label: "Stale evidence", dotColor: "bg-rose-400" },
];

const securityChecklist: string[] = [
  "Secrets never appear in public forms or analytics.",
  "Financial data lives only in secure product contexts.",
  "Public mockups use synthetic data only.",
  "Signing keys and certificates stay secure-admin only.",
];

export default function ImplementationMonitoringSection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>IMPLEMENTATION & MONITORING</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Discovery to stabilization, with evidence at every gate
          </h2>
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col space-y-3"
            >
              <span className="text-xs font-bold text-[#0A8FD0]">
                {item.step}
              </span>
              <h3 className="text-sm font-bold text-[#0F172A] leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Status Pills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {statusPills.map((pill, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl py-3 px-5 border border-slate-200/80 shadow-xs flex items-center gap-3"
            >
              <span className={`w-2 h-2 rounded-full ${pill.dotColor}`} />
              <span className="text-xs font-semibold text-[#0F172A]">
                {pill.label}
              </span>
            </div>
          ))}
        </div>

        {/* Security By Design Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/footer-integrations/29.png"
                alt="Colleagues reviewing analytics dashboard on desktop screen"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text & Checklist Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>SECURITY BY DESIGN</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] leading-tight">
              Nothing sensitive touches a public surface.
            </h3>

            {/* Checklist */}
            <ul className="space-y-3.5 pt-1">
              {securityChecklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#0A8FD0] stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-600 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
