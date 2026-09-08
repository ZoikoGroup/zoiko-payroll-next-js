import React from "react";
import { Search, Users, CalendarDays, CircleCheck } from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const reasons = [
  {
    icon: Search,
    title: "Understand impact",
    description:
      "See exactly how payroll changes touch every role and process.",
  },
  {
    icon: Users,
    title: "Engage early",
    description:
      "Bring stakeholders in from discovery, not after decisions are made.",
  },
  {
    icon: CalendarDays,
    title: "Prepare every role",
    description:
      "Give each audience the guidance suited to their responsibilities.",
  },
  {
    icon: CircleCheck,
    title: "Reinforce adoption",
    description:
      "Sustain behavior with follow-through well beyond launch day.",
  },
] as const;

export default function WhyItMattersSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Why it matters"
          title="Successful payroll transformation starts with people."
          body="Structured change management reduces confusion, aligns teams across functions, and builds confidence long before go-live."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="flex flex-col gap-5 p-7">
              <IconTile>
                <Icon className="h-5 w-5" strokeWidth={2} />
              </IconTile>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="text-sm leading-6 text-slate-500">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
