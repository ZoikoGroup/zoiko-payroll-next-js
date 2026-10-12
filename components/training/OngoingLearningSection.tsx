import React from "react";
import { SectionHeading, Card } from "./Primitives";

const triggers = [
  {
    title: "New payroll features",
    body: "Short updates when capability changes.",
  },
  { title: "Rule changes", body: "Refreshed guidance on updated logic." },
  { title: "Country updates", body: "Localized learning for new requirements." },
  {
    title: "Refresher learning",
    body: "Periodic reinforcement for existing roles.",
  },
  { title: "New roles", body: "Onboarding paths for new team members." },
  {
    title: "Process improvements",
    body: "Learning updated as processes evolve.",
  },
] as const;

export default function OngoingLearningSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Ongoing learning & release readiness"
          title={
            <>
              Capability keeps pace with the
              <br className="hidden sm:block" /> product.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {triggers.map((trigger) => (
            <Card key={trigger.title} className="flex flex-col gap-2 p-6">
              <h3 className="text-base font-semibold text-slate-900">
                {trigger.title}
              </h3>
              <p className="text-sm text-slate-500">{trigger.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
