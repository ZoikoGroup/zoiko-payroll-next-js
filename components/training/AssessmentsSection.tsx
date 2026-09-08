import React from "react";
import { SectionHeading, Card, StatusPill } from "./Primitives";

const evidence = [
  {
    title: "Completion",
    body: "Modules and materials engaged with.",
    status: { label: "Ready", tone: "green" },
  },
  {
    title: "Knowledge check",
    body: "Understanding of core concepts.",
    status: { label: "Ready", tone: "green" },
  },
  {
    title: "Guided task",
    body: "A supported walk-through of a real task.",
    status: { label: "Preparation required", tone: "blue" },
  },
  {
    title: "Facilitator observation",
    body: "A trainer confirms real capability.",
    status: { label: "Preparation required", tone: "blue" },
  },
  {
    title: "Role readiness sign-off",
    body: "Final confirmation before production.",
    status: { label: "Reassessment required", tone: "amber" },
  },
  {
    title: "Independent task",
    body: "Completing a task unaided.",
    status: { label: "Reassessment required", tone: "amber" },
  },
] as const;

export default function AssessmentsSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Assessments & proficiency"
          title="Proficiency evidence, not a percentage."
        />

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {evidence.map((item) => (
            <Card key={item.title} className="flex flex-col gap-2.5 p-6">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <StatusPill tone={item.status.tone}>
                  {item.status.label}
                </StatusPill>
              </div>
              <p className="text-sm text-slate-500">{item.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
