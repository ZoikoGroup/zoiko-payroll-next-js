import React from "react";
import { SectionHeading } from "./Primitives";

const stages = [
  { title: "Discover", description: "Understand the objective and constraints." },
  { title: "Scope", description: "Define deliverables, timeline, and roles." },
  { title: "Deliver", description: "Specialists execute against the plan." },
  {
    title: "Review",
    description: "Validate outputs against acceptance criteria.",
  },
  { title: "Accept", description: "Formal sign-off on each deliverable." },
  { title: "Transition", description: "Hand ownership back to your team." },
] as const;

export default function DeliveryJourneySection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Service delivery journey"
          title="A structured path from discovery to transition."
        />

        <ol className="relative grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          <span
            aria-hidden="true"
            className="absolute left-[8.33%] right-[8.33%] top-[22px] hidden h-0.5 bg-blue-600 lg:block"
          />
          {stages.map((stage, index) => (
            <li
              key={stage.title}
              className="relative flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-base font-bold text-blue-600">
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
