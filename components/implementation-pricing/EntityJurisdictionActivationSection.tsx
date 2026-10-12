"use client";

import React from "react";
import Image from "next/image";
import { Check, Info } from "lucide-react";

const activationPoints: string[] = [
  "First production entity is part of the initial implementation foundation.",
  "Additional entity in the same jurisdiction — catalog controlled or scoped.",
  "Additional entity in a new jurisdiction routes to Multi-Jurisdiction Pricing.",
  "M&A, carve-out or divestiture scopes are enterprise contracted.",
];

interface ActivationRow {
  requirement: string;
  implication: string;
  source: string;
}

const activationRows: ActivationRow[] = [
  {
    requirement: "Technically supported jurisdiction",
    implication: "Does not alone prove commercial activatability",
    source: "Jurisdiction Directory / coverage registry",
  },
  {
    requirement: "Zoiko Payroll native model",
    implication: "Approved native activation SKU / quote",
    source: "Price catalog + coverage registry",
  },
  {
    requirement: "Connected Payroll",
    implication: "Connector/provider implementation may be separately scoped",
    source: "Provider registry + order form",
  },
  {
    requirement: "Partner-Supported Payroll",
    implication: "Partner onboarding & data exchange may be contracted",
    source: "Partner / service catalog",
  },
  {
    requirement: "Registrations not complete",
    implication: "Can be commercially ordered; go-live remains blocked",
    source: "Implementation readiness record",
  },
];

export default function EntityJurisdictionActivationSection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A] border-t border-slate-200">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Intro: copy + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span className="font-bold">/</span>
              <span>Entity &amp; jurisdiction activation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-[#07243B] leading-tight">
              Plan capacity and activation are separate economics.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A Professional or Business plan may permit multiple entities, but
              each production legal-employer scope can still require
              configuration, validation, integration and approval work before
              it&apos;s production-ready.
            </p>

            <ul className="space-y-3 pt-1">
              {activationPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-5 h-5 shrink-0 rounded-full bg-sky-100 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-[#0A8FD0] stroke-[3]" />
                  </span>
                  <span className="text-sm text-slate-600 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full h-64 sm:h-80 lg:h-[380px] rounded-2xl overflow-hidden shadow-[0px_8px_24px_0px_rgba(8,47,73,0.08)]">
            <Image
              src="/images/implementation-pricing/entity-jurisdiction-activation.png"
              alt="Illuminated globe representing multi-jurisdiction payroll activation"
              fill

              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Activation requirements — cards on mobile */}
        <div className="space-y-3 md:hidden">
          {activationRows.map((row) => (
            <div
              key={row.requirement}
              className="bg-white rounded-xl border border-slate-200 p-5 space-y-3"
            >
              <div className="text-sm font-bold text-[#07243B]">
                {row.requirement}
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Pricing implication
                </div>
                <div className="text-sm text-slate-600 leading-5">
                  {row.implication}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Canonical source
                </div>
                <div className="text-sm text-slate-600 leading-5">
                  {row.source}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activation requirements — table from md up */}
        <div className="hidden md:block">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                <th className="px-5 pb-1 font-bold w-1/4">Requirement</th>
                <th className="px-5 pb-1 font-bold">Pricing implication</th>
                <th className="px-5 pb-1 font-bold w-1/4">Canonical source</th>
              </tr>
            </thead>
            <tbody>
              {activationRows.map((row) => (
                <tr
                  key={row.requirement}
                  className="bg-white border border-slate-200"
                >
                  <td className="px-5 py-4 text-sm font-bold text-[#07243B] border-y border-l border-slate-200 rounded-l-xl align-top">
                    {row.requirement}
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600 border-y border-slate-200 align-top">
                    {row.implication}
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600 border-y border-r border-slate-200 rounded-r-xl align-top">
                    {row.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div className="bg-[#E4F1FA] rounded-xl p-5 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#0A78C3] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-sm font-bold text-[#082F49]">
              What must not trigger an entity charge:
            </div>
            <p className="text-sm text-[#4E6172] leading-5">
              A non-production test entity in an approved workspace, a
              display-label change, a plan upgrade with no new production
              entity, or routine corrections within an already-implemented
              entity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
