import React from "react";
import { SectionHeading, ActionButton } from "./Primitives";

const states = [
  {
    icon: "🔍",
    title: "No results for this search",
    description: "Try a different city, region or country — or clear your filters.",
    action: "Clear filters",
  },
  {
    icon: "🏢",
    title: "No public offices listed here",
    description:
      "Zoiko Payroll doesn't currently have a verified public office in this area.",
    action: "Contact Zoiko Payroll",
  },
  {
    icon: "🗺️",
    title: "Map temporarily unavailable",
    description: "Directory cards and address actions remain fully functional below.",
    action: "Browse offices",
  },
  {
    icon: "📍",
    title: "Directions couldn't open",
    description: "The verified address and copy-address utility are still available.",
    action: "Copy address",
  },
] as const;

export default function EmptyStatesSection() {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 sm:gap-12">
        <SectionHeading
          eyebrow="Empty & error states"
          title="Designed screens, not fallback text"
          body="Every state offers real context and one clear recovery action — never a fabricated office card or invented default."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {states.map((state) => (
            <div
              key={state.title}
              className="flex flex-col items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white px-6 pb-5 pt-6 text-center"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-lg"
              >
                {state.icon}
              </span>
              <h3 className="pt-1 text-base font-bold leading-6 text-[#0F172A]">
                {state.title}
              </h3>
              <p className="text-xs leading-5 text-[#64748B]">
                {state.description}
              </p>
              <div className="pt-1">
                <ActionButton variant="primary">{state.action}</ActionButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
