import React from "react";
import Image from "next/image";
import { SectionHeading } from "./Primitives";

/** The hub mark, matching shield-solid.svg from the Figma export. */
function ShieldGlyph() {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
      className="h-11 w-11"
    >
      <path
        d="M22.0001 5.5L34.8334 11V22C34.8334 30.25 29.3334 35.75 22.0001 38.5C14.6667 35.75 9.16675 30.25 9.16675 22V11L22.0001 5.5Z"
        fill="#0B1F3A"
        stroke="white"
        strokeWidth="1.83333"
      />
    </svg>
  );
}

/**
 * Pill positions are percentages of the image container, transcribed from the
 * Figma frame so the six sources stay staggered around the hub rather than
 * sitting in two even columns. `x`/`y` are the pill's centre point.
 */
const sources = [
  { label: "HRIS", x: 16.5, y: 24.4 },
  { label: "Local providers", x: 25.8, y: 60.1 },
  { label: "Legacy payroll", x: 46.1, y: 78.1 },
  { label: "CSV / API / SFTP", x: 80.3, y: 18.8 },
  { label: "Benefits platform", x: 80.3, y: 49.5 },
  { label: "ERP", x: 74.3, y: 81.7 },
] as const;

const HUB = { x: 50, y: 28.2 };

export default function SourceLandscapeSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Source landscape"
          title="Every source system, one migration hub"
        />

        <div className="relative w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/data-migration/source-landscape-bg.png"
            alt=""
            width={1422}
            height={445}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/45" />

          {/* Connector lines from the hub out to each source, desktop only */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 hidden h-full w-full lg:block"
          >
            {sources.map((source) => (
              <line
                key={source.label}
                x1={HUB.x}
                y1={HUB.y}
                x2={source.x}
                y2={source.y}
                stroke="rgba(255,255,255,0.55)"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {/* Hub */}
          <div
            className="absolute hidden h-[110px] w-[110px] items-center justify-center rounded-[28px] bg-linear-to-br from-blue-500 to-blue-800 shadow-[0px_18px_40px_-12px_rgba(37,99,235,0.65)] lg:flex"
            style={{
              left: `${HUB.x}%`,
              top: `${HUB.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <ShieldGlyph />
          </div>
          <span
            className="absolute left-1/2 hidden -translate-x-1/2 text-sm font-medium text-white lg:block"
            style={{ top: `${HUB.y + 13}%` }}
          >
            Zoiko migration hub
          </span>

          {/* Source pills */}
          {sources.map((source) => (
            <span
              key={source.label}
              className="absolute hidden w-[16%] rounded-2xl bg-white px-5 py-3 text-center text-sm font-medium text-slate-900 shadow-[0px_8px_20px_-8px_rgba(15,23,42,0.35)] lg:block"
              style={{
                left: `${source.x}%`,
                top: `${source.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {source.label}
            </span>
          ))}
        </div>

        {/* Same sources, stacked for small screens */}
        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {sources.map((source) => (
            <li
              key={source.label}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-medium text-slate-900"
            >
              {source.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
