import React from "react";
import { SectionHeading } from "./Primitives";

const stages = [
  {
    title: "Discover",
    description: "Map stakeholders, impacts, and readiness baseline.",
  },
  {
    title: "Design",
    description: "Build the communication and engagement plan.",
  },
  {
    title: "Prepare",
    description: "Equip roles with guidance ahead of go-live.",
  },
  {
    title: "Validate",
    description: "Confirm readiness across every audience.",
  },
  {
    title: "Launch",
    description: "Support the organization through cutover.",
  },
  {
    title: "Reinforce",
    description: "Sustain adoption with ongoing support.",
  },
] as const;

export default function ChangeJourneySection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="The change journey"
          title="From discovery to long-term adoption."
          body="Six structured stages carry every organization from initial scoping to sustained, confident use."
        />

        <ol className="relative grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {/* Rail behind the markers, desktop only */}
          <span
            aria-hidden="true"
            className="absolute left-[8.33%] right-[8.33%] top-[22px] hidden h-0.5 bg-linear-to-r from-blue-600 to-blue-400 lg:block"
          />
          {stages.map((stage, index) => (
            <li
              key={stage.title}
              className="relative flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-3xl border-2 border-blue-600 bg-white text-base font-bold text-blue-600">
                {index + 1}
              </span>
              <h3 className="text-base font-semibold text-slate-900">
                {stage.title}
              </h3>
              <p className="text-sm leading-5 text-slate-500">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
