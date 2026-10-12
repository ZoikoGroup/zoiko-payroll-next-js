import React from "react";
import { SectionHeading } from "./Primitives";

const clauses = [
  {
    title: "Objectives",
    description: "What the engagement is meant to achieve.",
  },
  {
    title: "Deliverables",
    description: "The concrete outputs to be produced.",
  },
  { title: "Milestones", description: "Key checkpoints across the timeline." },
  {
    title: "Acceptance criteria",
    description: "How each deliverable is confirmed complete.",
  },
  {
    title: "Responsibilities",
    description: "What Zoiko and your team each own.",
  },
  {
    title: "Dependencies",
    description: "Inputs and decisions the project relies on.",
  },
] as const;

export default function StatementOfWorkSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Statement of work"
          title="Every engagement is documented before it starts."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clauses.map((clause) => (
            <div
              key={clause.title}
              className="rounded-2xl border border-blue-600/20 bg-blue-50/40 p-6"
            >
              <h3 className="text-base font-semibold text-blue-600">
                {clause.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {clause.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
