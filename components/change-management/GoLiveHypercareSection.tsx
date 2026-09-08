import React from "react";
import { SectionHeading, Card } from "./Primitives";

const phases = [
  {
    title: "Pre go-live",
    description: "Final readiness checks and communications.",
  },
  { title: "Go-live", description: "Coordinated cutover and activation." },
  { title: "Hypercare", description: "Elevated support for early issues." },
  { title: "Stabilization", description: "Transition to standard operations." },
] as const;

const supports = [
  {
    title: "Dedicated help desk",
    description: "Priority routing for payroll-specific questions.",
  },
  {
    title: "Daily issue triage",
    description: "Rapid review and resolution of open items.",
  },
  {
    title: "Leadership check-ins",
    description: "Regular status updates through stabilization.",
  },
] as const;

export default function GoLiveHypercareSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Go-live & hypercare"
          title="Support people through the most critical payroll moments."
          body="Clear cutover communication and dedicated post-launch support carry teams from launch to stable operation."
        />

        {/* Phase rail */}
        <ol className="relative grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[18px] hidden h-0.5 bg-blue-600 lg:block"
          />
          {phases.map((phase) => (
            <li
              key={phase.title}
              className="relative flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-600 bg-white">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              </span>
              <h3 className="text-base font-semibold text-slate-900">
                {phase.title}
              </h3>
              <p className="text-sm leading-5 text-slate-500">
                {phase.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Support cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supports.map((support) => (
            <Card key={support.title} className="flex flex-col gap-4 p-7">
              <h3 className="text-sm font-semibold text-slate-900">
                {support.title}
              </h3>
              <p className="text-sm leading-6 text-slate-500">
                {support.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
