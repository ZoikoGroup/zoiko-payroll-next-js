import React from "react";
import Image from "next/image";
import { Eyebrow } from "./Primitives";

/**
 * Chip positions are percentages of the photo, so the four labels keep their
 * Figma placement as the image scales.
 */
const chips = [
  { label: "Define", x: 12.7, y: 9.3 },
  { label: "Build", x: 67.8, y: 12.7 },
  { label: "Operate", x: 17.6, y: 64.4 },
  { label: "Prove", x: 67.4, y: 67.7 },
] as const;

const pillars = [
  { number: "01", title: "Define", body: "Decisions and governance are agreed." },
  {
    number: "02",
    title: "Build",
    body: "Configuration and integrations are in place.",
  },
  {
    number: "03",
    title: "Prove",
    body: "Testing evidence confirms the build works.",
  },
  {
    number: "04",
    title: "Operate",
    body: "Testing evidence confirms the build works.",
  },
] as const;

export default function WhatReadinessMeansSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200">
          <Image
            src="/images/readiness-assessment/four-pillars.webp"
            alt="A team working through payroll implementation readiness"
            width={482}
            height={418}
            className="h-auto w-full object-cover"
          />
          {/* Dashed frame tying the four chips together */}
          <span
            aria-hidden="true"
            className="absolute border-2 border-dashed border-white/60"
            style={{
              left: "26.2%",
              top: "18.1%",
              width: "46.5%",
              height: "53.6%",
            }}
          />
          {chips.map((chip) => (
            <span
              key={chip.label}
              className="absolute rounded-xl bg-white/25 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm sm:rounded-2xl sm:px-6 sm:py-3.5 sm:text-sm"
              style={{ left: `${chip.x}%`, top: `${chip.y}%` }}
            >
              {chip.label}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <Eyebrow>What readiness means</Eyebrow>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Four pillars, one connected view of readiness.
          </h2>
          <p className="text-base leading-7 text-slate-500">
            Readiness spans decisions made, systems built, evidence proven, and
            operations ready to run day one.
          </p>

          <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-3xl font-extrabold text-slate-200">
                    {pillar.number}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {pillar.title}
                  </span>
                </div>
                <p className="text-sm text-slate-500">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
