import React from "react";
import Image from "next/image";
import { SectionHeading } from "./Primitives";

const waves = [
  { country: "United States", entity: "US-01", wave: 1, position: "left-[6%] top-[52%]" },
  { country: "United Kingdom", entity: "GB-01", wave: 1, position: "left-[34%] top-[26%]" },
  { country: "Germany", entity: "DE-02", wave: 2, position: "left-[52%] top-[34%]" },
  { country: "Singapore", entity: "SG-01", wave: 2, position: "left-[76%] top-[72%]" },
] as const;

export default function GlobalReachSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Global reach"
          title="Migration waves across countries and entities"
        />

        <div className="relative w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/data-migration/global-map.png"
            alt="Migration waves connecting entities across the United States, United Kingdom, Germany and Singapore"
            width={1050}
            height={445}
            className="h-auto w-full object-cover"
          />

          {/* Entity cards, positioned over the map on wide screens */}
          {waves.map((wave) => (
            <div
              key={wave.country}
              className={`absolute hidden w-44 rounded-xl bg-slate-800/70 p-3 backdrop-blur-sm lg:block ${wave.position}`}
            >
              <span className="block text-sm font-semibold text-white">
                {wave.country}
              </span>
              <dl className="mt-1 flex flex-col gap-0.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <dt>Entity</dt>
                  <dd className="text-white">{wave.entity}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Wave</dt>
                  <dd className="text-white">{wave.wave}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        {/* Same data, readable on small screens */}
        <dl className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {waves.map((wave) => (
            <div
              key={wave.country}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3"
            >
              <dt className="text-sm font-semibold text-slate-900">
                {wave.country}
              </dt>
              <dd className="text-xs text-slate-500">
                {wave.entity} · Wave {wave.wave}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
