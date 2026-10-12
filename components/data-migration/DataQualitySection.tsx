import React from "react";
import Image from "next/image";
import { Eyebrow } from "./Primitives";

const dimensions = [
  { label: "Completeness", value: 98, tone: "good" },
  { label: "Validity", value: 96, tone: "good" },
  { label: "Consistency", value: 91, tone: "warn" },
  { label: "Duplicate detection", value: 0, tone: "clear" },
  { label: "Referential integrity", value: 99, tone: "good" },
  { label: "Timeliness", value: 87, tone: "warn" },
] as const;

const toneStyles = {
  good: "bg-green-600/10 text-green-600",
  warn: "bg-amber-500/10 text-amber-500",
  clear: "bg-neutral-500/10 text-neutral-500",
} as const;

export default function DataQualitySection() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/data-migration/data-quality-bg.png"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl lg:pr-[38%]">
        <div className="flex flex-col gap-4">
          <Eyebrow dark>Pre-migration quality</Eyebrow>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            Find data issues before they become payroll issues
          </h2>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0px_8px_24px_-8px_rgba(15,23,42,0.10)] sm:p-8">
          <ul className="flex flex-col gap-6">
            {dimensions.map((dimension) => (
              <li key={dimension.label} className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-900">
                    {dimension.label}
                  </span>
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                      toneStyles[dimension.tone]
                    }`}
                  >
                    {dimension.tone === "clear" ? "Clear" : `${dimension.value}%`}
                  </span>
                </div>
                <div className="relative h-2 w-full rounded-[99px] bg-slate-100">
                  <div
                    className={`h-2 rounded-[99px] ${
                      dimension.tone === "clear"
                        ? "bg-neutral-500/20"
                        : "bg-linear-to-r from-blue-600 to-blue-400"
                    }`}
                    style={{
                      width:
                        dimension.tone === "clear"
                          ? "100%"
                          : `${dimension.value}%`,
                    }}
                  />
                  <span
                    className={`absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                      dimension.tone === "clear"
                        ? "bg-neutral-500 shadow-[0px_0px_0px_3px_rgba(118,118,118,0.25)]"
                        : "bg-blue-600 shadow-[0px_0px_0px_3px_rgba(10,120,195,0.25)]"
                    }`}
                    style={{
                      left:
                        dimension.tone === "clear" ? "0%" : `${dimension.value}%`,
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
