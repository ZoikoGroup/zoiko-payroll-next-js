import React from "react";
import Image from "next/image";
import { SectionHeading } from "./Primitives";

/**
 * Pin positions as percentages of the map image, so they track it at any
 * width. The selected office (London) is highlighted in green.
 */
const pins = [
  { x: 43.5, y: 24.5, selected: true },
  { x: 39.5, y: 15.5, selected: false },
  { x: 48.0, y: 22.0, selected: false },
  { x: 53.5, y: 34.0, selected: false },
  { x: 55.8, y: 41.5, selected: false },
  { x: 46.8, y: 45.0, selected: false },
  { x: 35.0, y: 55.0, selected: false },
  { x: 64.0, y: 66.0, selected: false },
] as const;

export default function SecondaryMapSection() {
  return (
    <section className="bg-sky-950 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <SectionHeading
          dark
          eyebrow="Secondary map"
          title="A spatial confirmation layer — never the only way in"
          body="Pins resolve from the same lifecycle source as the cards above. Every office stays fully reachable if the map fails to load."
        />

        <div className="w-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
          <div className="relative">
            <Image
              src="/images/offices/world-map.webp"
              alt="Verified Zoiko Payroll offices around the world"
              width={1098}
              height={357}
              className="h-auto w-full object-cover"
            />
            {pins.map((pin) => (
              <span
                key={`${pin.x}-${pin.y}`}
                aria-hidden="true"
                className={`absolute h-3.5 w-3.5 rounded-full border-2 border-white shadow-[0px_4px_10px_0px_rgba(10,80,130,0.35)] sm:h-4 sm:w-4 ${
                  pin.selected ? "bg-[#2E9E5B]" : "bg-[#0A78C3]"
                }`}
                style={{
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#E2E8F0] px-5 py-3.5">
            <span className="text-xs text-[#64748B]">
              Selected: Zoiko Payroll — London
            </span>
            <span className="text-xs text-[#64748B]">
              Map provider status: Available
            </span>
          </div>
        </div>

        <div className="w-full max-w-3xl rounded-md border-l-4 border-l-[#0A78C3] bg-[#E7EDFD] p-4 sm:p-5">
          <p className="text-sm leading-6 text-[#334155]">
            If the map provider fails, directory cards and address actions
            remain fully functional — the map never gates access to an office.
          </p>
        </div>
      </div>
    </section>
  );
}
