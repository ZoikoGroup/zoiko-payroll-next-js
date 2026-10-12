import React from "react";
import { UserRound, PanelsTopLeft, CircleCheck, CheckCircle2 } from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const principles = [
  {
    icon: UserRound,
    title: "Role-based learning",
    body: "Every path is built around a specific job to do.",
  },
  {
    icon: PanelsTopLeft,
    title: "Hands-on practice",
    body: "Learners work in a safe, realistic sandbox.",
  },
  {
    icon: CircleCheck,
    title: "Measurable proficiency",
    body: "Readiness is confirmed with real evidence.",
  },
  {
    icon: CheckCircle2,
    title: "Ongoing learning",
    body: "Capability keeps pace with every release.",
  },
] as const;

export default function TrainingPrinciplesSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Training integrity principles"
          title={
            <>
              Capability built with evidence,
              <br className="hidden sm:block" /> not just attendance.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="flex flex-col gap-2 p-7">
              <IconTile>
                <Icon className="h-5 w-5" strokeWidth={1.83} />
              </IconTile>
              <h3 className="pt-2.5 text-xl font-semibold text-slate-900">
                {title}
              </h3>
              <p className="text-sm text-slate-500">{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
