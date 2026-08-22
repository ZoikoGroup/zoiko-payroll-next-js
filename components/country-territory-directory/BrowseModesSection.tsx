"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusPill, { type AvailabilityState } from "./StatusPill";

const modes = ["Search", "A–Z", "Region"] as const;

const markets: { name: string; state: AvailabilityState; label: string }[] = [
  { name: "Australia", state: "available", label: "Available" },
  { name: "Austria", state: "limited", label: "Limited" },
  { name: "Bahrain", state: "partner", label: "Partner" },
  { name: "Belgium", state: "available", label: "Available" },
  { name: "Bermuda", state: "planned", label: "Planned" },
  { name: "Canada", state: "available", label: "Available" },
];

const regions = [
  {
    name: "North America",
    detail: "US, Canada and territories.",
    count: "14 markets",
    image: "/images/country-territory-directory/region-north-america.png",
    alt: "Golden Gate Bridge at sunset",
  },
  {
    name: "Europe",
    detail: "EU and non-EU markets.",
    count: "38 markets",
    image: "/images/country-territory-directory/region-europe.png",
    alt: "Historic European town street",
  },
  {
    name: "Asia Pacific",
    detail: "APAC countries and territories.",
    count: "27 markets",
    image: "/images/country-territory-directory/region-asia-pacific.png",
    alt: "Asia Pacific city skyline at dusk",
  },
];

export default function BrowseModesSection() {
  const [mode, setMode] = useState<(typeof modes)[number]>("Search");

  return (
    <section className="border-t border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <img
              src="/images/country-territory-directory/browse-modes.png"
              alt="Payroll team browsing market coverage on a laptop"
              className="w-full rounded-2xl object-cover"
            />
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Browse modes</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold leading-9 text-slate-900">
              Search, A–Z and Region — equal-access alternatives
            </h2>
            <p className="mt-3 text-sm leading-5 text-gray-700">
              Every mode uses the same canonical result component and status contract. Never sorted
              by popularity or revenue.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 py-2.5">
            <div
              role="tablist"
              aria-label="Browse mode"
              className="flex gap-1.5 rounded-[10px] border border-slate-200 bg-slate-50 p-1"
            >
              {modes.map((item) => {
                const isActive = item === mode;
                return (
                  <button
                    key={item}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setMode(item)}
                    className={`rounded-md px-4 py-2 text-xs font-semibold leading-5 transition-colors duration-200 ${
                      isActive
                        ? "bg-white text-slate-900 shadow-[0px_1px_3px_0px_rgba(8,19,43,0.10)]"
                        : "text-gray-700 hover:text-slate-900"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium leading-5 text-gray-700">
                Recently changed
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium leading-5 text-gray-700">
                Guide available
              </span>
              <span className="text-xs leading-5 text-slate-500">184 markets indexed</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-2">
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {markets.map((market) => (
              <li
                key={market.name}
                className="flex items-center justify-between gap-2 rounded-[10px] border border-slate-200 bg-white px-3.5 py-3"
              >
                <span className="text-xs font-semibold leading-5 text-slate-900">
                  {market.name}
                </span>
                <StatusPill state={market.state} label={market.label} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="mt-8">
          <h3 className="text-xs uppercase leading-5 tracking-wide text-slate-500">
            Browse by region
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <li
                key={region.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <img src={region.image} alt={region.alt} className="h-56 w-full object-cover" />
                <div className="px-5 py-4">
                  <p className="text-sm font-extrabold leading-6 text-slate-900">{region.name}</p>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">{region.detail}</p>
                  <p className="mt-3 inline-block rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-code text-xs leading-4 text-slate-500">
                    {region.count}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
