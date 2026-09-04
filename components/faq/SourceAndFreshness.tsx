"use client";

import Reveal from "../ui/Reveal";
import Eyebrow from "../payroll-guides/Eyebrow";

const statusBadges = [
  {
    label: "Current",
    bgColor: "bg-gray-200",
    textColor: "text-gray-600",
    description: "Reviewed and accurate as published",
  },
  {
    label: "Under review",
    bgColor: "bg-orange-100",
    textColor: "text-yellow-700",
    description: "Flagged after a linked source changed",
  },
  {
    label: "Withheld",
    bgColor: "bg-rose-200",
    textColor: "text-pink-800",
    description: "Removed from display until corrected",
  },
];

const handoffCards = [
  {
    title: "Authority link",
    description: "Current detail lives elsewhere → View current Product Documentation.",
  },
  {
    title: "Live-state handoff",
    description: "Answer cannot own live status → Check System Status.",
  },
  {
    title: "Jurisdiction handoff",
    description: "Local rules/coverage matter → Choose a jurisdiction.",
  },
  {
    title: "Commercial handoff",
    description: "Current price/contract detail needed → View Pricing / Talk to Sales.",
  },
  {
    title: "Support handoff",
    description: "Existing-customer problem → Go to Help Center.",
  },
  {
    title: "Learning handoff",
    description: "Needs procedural depth → Read the Payroll Guide.",
  },
  {
    title: "Definition handoff",
    description: "Term confusion → Open Payroll Glossary.",
  },
  {
    title: "Change handoff",
    description: "Current release/history → Review Release Notes.",
  },
];

export default function SourceAndFreshness() {
  return (
    <section className="bg-[#E9F0F8] border-t border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow className="text-[#0A8FD0]">Source & freshness</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-9">
            How answers are reviewed, corrected and<br className="hidden sm:inline" /> scoped.
          </h2>
          <p className="mt-4 max-w-[620px] text-base font-jakarta text-[#4E6172] leading-6">
            A stale or superseded answer never silently remains &quot;Current.&quot; Every FAQ record
            carries the same visible states.
          </p>
        </Reveal>

        {/* Status badges */}
        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {statusBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-3 rounded-[10px] bg-white p-4 outline outline-1 outline-offset-[-1px] outline-slate-200"
              >
                <span className={`rounded-[20px] px-3 py-1 text-xs font-bold font-jakarta leading-4 ${badge.bgColor} ${badge.textColor}`}>
                  {badge.label}
                </span>
                <span className="text-xs font-jakarta text-[#0A2E4B] leading-5">
                  {badge.description}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Answers are approved callout */}
        <Reveal delay={150}>
          <div className="mt-8 rounded-[10px] bg-[#E1EEF9] border-l-[3px] border-r border-t border-b border-[#0A8FD0] p-5">
            <p className="text-sm font-jakarta text-[#0A2E4B] leading-5">
              <span className="font-bold">Answers are approved, not generated.</span>{" "}
              Public answer text comes from editorially reviewed FAQ records. Search retrieves and ranks approved records — it never
              invents an answer.
            </p>
          </div>
        </Reveal>

        {/* Handoff cards grid */}
        <Reveal delay={200}>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {handoffCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-slate-200"
              >
                <h4 className="text-xs font-extrabold font-jakarta text-[#0A8FD0] uppercase leading-4 tracking-tight">
                  {card.title}
                </h4>
                <p className="mt-2 text-xs font-jakarta text-[#4E6172] leading-4">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}