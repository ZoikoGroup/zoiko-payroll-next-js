import React from "react";
import { SectionHeading } from "./Primitives";

const states = [
  {
    label: "PUBLISHED",
    badge: "bg-[#E3F0E7] text-[#20502F]",
    description: "Approved public office with full available utilities.",
    action: "View office →",
  },
  {
    label: "TEMPORARILY UNAVAILABLE",
    badge: "bg-[#F1EAD8] text-[#B45309]",
    description: "An approved notice and an alternative route are shown.",
    action: "View update →",
  },
  {
    label: "MOVED",
    badge: "bg-[#E7EDFD] text-[#0A78C3]",
    description: "Clearly routes to the new approved office record.",
    action: "View new office →",
  },
  {
    label: "CLOSED",
    badge: "text-[#0F172A]",
    description: "Never shown as active; approved alternatives are offered.",
    action: "View alternatives →",
  },
  {
    label: "WITHDRAWN",
    badge: "text-[#0F172A]",
    description: "Public record removed; approved replacement routing applies.",
    action: "View alternatives →",
  },
] as const;

export default function LifecycleStatesSection() {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-12">
        <SectionHeading
          eyebrow="Office lifecycle & recovery states"
          title="Explicit states, never hidden behind color alone"
          body="The same lifecycle state drives cards, detail pages, map pins, search and redirects — everywhere, consistently."
        />

        <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {states.map((state) => (
            <div
              key={state.label}
              className="flex flex-col items-start gap-2.5 rounded-xl border border-[#E2E8F0] bg-white px-4 py-5"
            >
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-extrabold leading-4 tracking-wide ${state.badge}`}
              >
                {state.label}
              </span>
              <p className="text-xs leading-5 text-[#64748B]">
                {state.description}
              </p>
              <button
                type="button"
                className="cursor-pointer text-xs font-bold text-[#0A78C3] underline hover:text-[#08608F]"
              >
                {state.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
