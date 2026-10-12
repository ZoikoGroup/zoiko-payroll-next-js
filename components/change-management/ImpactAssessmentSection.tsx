import React from "react";
import { Menu, User, CreditCard, SquareCheck, Clock, Bell } from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const impacts = [
  {
    icon: Menu,
    title: "Process changes",
    description: "New steps and sequencing across the payroll cycle.",
  },
  {
    icon: User,
    title: "Role changes",
    description: "Shifted responsibilities and approval ownership.",
  },
  {
    icon: CreditCard,
    title: "System changes",
    description: "New interfaces, integrations, and access points.",
  },
  {
    icon: SquareCheck,
    title: "Policy & controls",
    description: "Updated governance, approvals, and documentation.",
  },
  {
    icon: Clock,
    title: "Data & timing",
    description: "Adjusted cutoffs, calendars, and processing windows.",
  },
  {
    icon: Bell,
    title: "Employee experience",
    description: "What changes in pay, self-service, and support.",
  },
] as const;

export default function ImpactAssessmentSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Impact assessment"
          title="Turn implementation decisions into human impact."
          body="See how payroll changes affect roles, approvals, systems, timing, and employee experience."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {impacts.map(({ icon: Icon, title, description }) => (
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
