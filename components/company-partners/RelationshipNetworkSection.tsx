"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const categories = ["Technology", "Service delivery", "Ecosystem"];

export default function RelationshipNetworkSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[680px] text-center">
          <div className="flex justify-center">
            <Eyebrow>Verified relationship network</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Search only current, verified public relationships
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-base leading-7 text-slate-600">
            The directory activates only when enough substantive current relationships exist to
            support browsing. When no eligible records are public, this page shows curated pathway
            content instead of an empty grid or invented examples.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mx-auto mt-8 max-w-[820px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
        >
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <input
              type="text"
              placeholder="Search organization, relationship type or approved capability"
              aria-label="Search verified relationships"
              className="flex-1 rounded-[10px] border border-slate-200 px-3.5 py-3.5 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
            />
            <button
              type="button"
              className="shrink-0 rounded-lg bg-brand-gradient px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:brightness-110"
            >
              Search
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {categories.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(isActive ? null : category)}
                  className={`rounded-[20px] border px-4 py-2 text-xs font-semibold leading-5 transition-colors duration-200 ${
                    isActive
                      ? "border-brand bg-brand text-white"
                      : "border-slate-200 bg-white text-brand-dark hover:border-brand/40"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <p className="mt-5 text-xs font-bold uppercase leading-4 tracking-wide text-slate-400">
            Illustrative result card — UI pattern example only, not a real relationship
          </p>

          <div className="mt-2.5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 p-4">
            <div>
              <p className="text-sm font-extrabold leading-6 text-brand-dark">
                Example Organization
              </p>
              <p className="mt-0.5 text-xs leading-5 text-slate-400">
                Technology relationship · Payroll data exchange · Last verified Aug 2026
              </p>
            </div>
            <span className="rounded-[20px] bg-slate-200 px-2.5 py-1 text-xs font-bold leading-4 text-slate-600">
              Active
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
