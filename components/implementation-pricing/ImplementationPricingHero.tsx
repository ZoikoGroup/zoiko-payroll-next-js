"use client";

import React from "react";
import Image from "next/image";
import { Lock, CheckCircle2, Clock } from "lucide-react";

interface ScopeLayer {
  step: string;
  title: string;
  description: string;
}

const scopeLayers: ScopeLayer[] = [
  {
    step: "1",
    title: "Foundation",
    description: "Governance, configuration, cutover readiness",
  },
  {
    step: "2",
    title: "Entities",
    description: "Legal-employer activation",
  },
  {
    step: "3",
    title: "Jurisdictions",
    description: "Local registrations & readiness",
  },
  {
    step: "4",
    title: "Data",
    description: "Migration & reconciliation",
  },
  {
    step: "5",
    title: "Integrations",
    description: "Connectors & testing",
  },
  {
    step: "6",
    title: "Validation",
    description: "Testing, parallel run, hypercare",
  },
];

const assurances = [
  { icon: Lock, label: "No payroll files required to estimate scope" },
  { icon: CheckCircle2, label: "No fabricated setup fees" },
  { icon: Clock, label: "Billing begins from Service Commencement Date" },
];

export default function ImplementationPricingHero() {
  return (
    <section className="w-full bg-slate-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span className="font-bold">/</span>
            <span>Implementation pricing</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#07243B] leading-[1.12]">
            Price implementation around the work required to go live with
            confidence.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
            Zoiko Payroll implementation is scoped separately from recurring
            payroll subscription billing. Your implementation price reflects the
            entities, jurisdictions, data, integrations, delivery models,
            testing and cutover support required for your approved production
            scope.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <button className="bg-gradient-to-r from-[#388FCB] to-[#134870] hover:from-[#2B7BB5] hover:to-[#0F395A] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-[0px_6px_16px_0px_rgba(17,125,197,0.28)] transition-all active:scale-[0.99] cursor-pointer">
              Build an implementation estimate
            </button>
            <button className="bg-white hover:bg-slate-100 border border-slate-200 text-[#07243B] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors cursor-pointer">
              Book a demo
            </button>
          </div>

          <ul className="space-y-3 pt-2">
            {assurances.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2.5 text-xs font-semibold text-slate-500"
              >
                <item.icon className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          <p className="text-xs text-slate-500 leading-5 max-w-lg">
            Final prices, currencies, taxes, scope assumptions and third-party
            charges are governed by the approved price catalog, quote and order
            form.
          </p>
        </div>

        {/* Right Column: Layered Scope Card */}
        <div className="bg-white rounded-2xl shadow-[0px_8px_24px_0px_rgba(8,47,73,0.08)] border border-slate-200 overflow-hidden">
          <div className="relative w-full h-40 sm:h-[170px]">
            <Image
              src="/images/implementation-pricing/hero-implementation-planning.png"
              alt="Implementation team planning a payroll rollout together"
              fill

              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 sm:p-6">
            <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider font-mono">
              Layered implementation scope
            </div>

            <ul className="mt-4">
              {scopeLayers.map((layer, idx) => (
                <li
                  key={layer.step}
                  className={`flex items-start gap-3 py-3.5 ${
                    idx !== scopeLayers.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  <span className="w-6 h-6 shrink-0 rounded-md bg-sky-100 text-[#0A8FD0] text-xs font-extrabold flex items-center justify-center">
                    {layer.step}
                  </span>
                  <span className="space-y-0.5">
                    <span className="block text-sm font-semibold text-[#07243B]">
                      {layer.title}
                    </span>
                    <span className="block text-xs text-slate-500">
                      {layer.description}
                    </span>
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
