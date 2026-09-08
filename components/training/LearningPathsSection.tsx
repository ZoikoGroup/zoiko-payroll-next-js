import React from "react";
import { SectionHeading, Card, StepRow, StatusPill } from "./Primitives";

const steps = [
  "Foundation module",
  "Role modules",
  "Local overlay",
  "Practice tasks",
  "Assessment",
] as const;

const paths = [
  {
    role: "Payroll administrator",
    completed: 3,
    status: { label: "In progress", tone: "blue" },
  },
  {
    role: "Approver / manager",
    completed: 5,
    status: { label: "Ready for production", tone: "green" },
  },
  {
    role: "Local payroll owner",
    completed: 1,
    status: { label: "Not started", tone: "amber" },
  },
] as const;

export default function LearningPathsSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Role-based learning paths"
          title={
            <>
              A personalized path for every
              <br className="hidden sm:block" /> role.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => (
            <Card key={path.role} className="flex flex-col gap-4 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                {path.role}
              </h3>
              <ul className="flex flex-col">
                {steps.map((step, index) => (
                  <StepRow
                    key={step}
                    label={step}
                    done={index < path.completed}
                    first={index === 0}
                  />
                ))}
              </ul>
              <div className="pt-1">
                <StatusPill tone={path.status.tone}>
                  {path.status.label}
                </StatusPill>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
