import React from "react";
import Image from "next/image";
import { SectionHeading } from "./Primitives";

const regions = [
  { name: "Americas", hours: "GMT-8 to GMT-3" },
  { name: "Europe", hours: "GMT to GMT+3" },
  { name: "APAC", hours: "GMT+5:30 to GMT+9" },
  { name: "Middle East", hours: "GMT+2 to GMT+4" },
] as const;

/**
 * Delivery markers overlaid on the map, positioned as percentages of the
 * image so they track it at every width. Coordinates transcribed from the
 * Figma frame: `primary` are the hub locations, `secondary` the smaller
 * supporting points.
 */
const markers = [
  { x: 22.4, y: 40.2, primary: true },
  { x: 51.3, y: 33.8, primary: true },
  { x: 70.0, y: 54.1, primary: true },
  { x: 80.1, y: 45.9, primary: true },
  { x: 18.7, y: 42.2, primary: false },
  { x: 25.0, y: 45.9, primary: false },
  { x: 47.7, y: 33.8, primary: false },
  { x: 54.8, y: 36.8, primary: false },
  { x: 64.9, y: 61.5, primary: false },
  { x: 74.7, y: 49.3, primary: false },
] as const;

export default function GlobalDeliverySection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Global delivery model"
          title="Regional expertise, coordinated across time zones."
        />

        <div className="relative w-full overflow-hidden rounded-2xl bg-slate-50">
          <Image
            src="/images/professional-services/global-map.webp"
            alt="Delivery regions across the Americas, Europe, APAC and the Middle East"
            width={1116}
            height={297}
            className="h-auto w-full object-cover"
          />
          {markers.map((marker) => (
            <span
              key={`${marker.x}-${marker.y}`}
              aria-hidden="true"
              className={`absolute rounded-full ${
                marker.primary
                  ? "h-2.5 w-3 bg-blue-600 sm:h-3.5 sm:w-4 lg:h-4 lg:w-5"
                  : "h-1.5 w-2 bg-blue-300 sm:h-2 sm:w-2.5 lg:h-2.5 lg:w-3"
              }`}
              style={{
                left: `${marker.x}%`,
                top: `${marker.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region) => (
            <li
              key={region.name}
              className="rounded-xl border border-slate-200 bg-white px-5 py-4"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                {region.name}
              </span>
              <span className="mt-1 block pl-3.5 text-sm text-slate-500">
                {region.hours}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
