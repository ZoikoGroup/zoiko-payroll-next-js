import React from "react";
import { Columns3, User, CircleCheck, BookOpen } from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const pillars = [
  {
    icon: Columns3,
    title: "Scoped engagements",
    description: "Clear objectives, deliverables, and boundaries from day one.",
  },
  {
    icon: User,
    title: "Expert-led delivery",
    description: "Named specialists in migration, integration, and testing.",
  },
  {
    icon: CircleCheck,
    title: "Accountable governance",
    description: "Milestones, decisions, and risk tracked in one place.",
  },
  {
    icon: BookOpen,
    title: "Knowledge transfer",
    description: "Documentation and handover so your team owns.",
  },
] as const;

export default function OverviewSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Professional services overview"
          title="Specialist delivery, built around your project."
          body="Every engagement is scoped, led by named experts, governed end to end, and closed out with a clear transfer of knowledge."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="flex flex-col gap-2 p-7">
              <IconTile>
                <Icon className="h-5 w-5" strokeWidth={2} />
              </IconTile>
              <h3 className="pt-2.5 text-xl font-semibold text-slate-900">
                {title}
              </h3>
              <p className="text-sm leading-6 text-slate-500">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
