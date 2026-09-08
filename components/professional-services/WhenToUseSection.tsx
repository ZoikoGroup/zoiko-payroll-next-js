import React from "react";
import {
  Zap,
  Download,
  Waypoints,
  SquareCheck,
  CircleCheck,
  Globe,
  Clock,
  UserPlus,
} from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const moments = [
  {
    icon: Zap,
    title: "Complex transformation",
    description: "Multi-entity or multi-system payroll change.",
  },
  {
    icon: Download,
    title: "Data migration",
    description: "Moving and validating historical payroll data.",
  },
  {
    icon: Waypoints,
    title: "Integration services",
    description: "Connecting payroll to finance and HR systems.",
  },
  {
    icon: SquareCheck,
    title: "Testing & validation",
    description: "Structured test cycles before go-live.",
  },
  {
    icon: CircleCheck,
    title: "Payroll optimization",
    description: "Improving accuracy and efficiency post-launch.",
  },
  {
    icon: Globe,
    title: "Global expansion",
    description: "Adding new jurisdictions to existing operations.",
  },
  {
    icon: Clock,
    title: "Stabilization projects",
    description: "Resolving issues after a difficult go-live.",
  },
  {
    icon: UserPlus,
    title: "Internal capacity support",
    description: "Extending your team during peak workload.",
  },
] as const;

export default function WhenToUseSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-11">
        <SectionHeading
          eyebrow="When to use professional services"
          title="Bring in specialists at the moments that matter most."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map(({ icon: Icon, title, description }) => (
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
