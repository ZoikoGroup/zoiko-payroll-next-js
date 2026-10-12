import React from "react";
import {
  Monitor,
  UserRound,
  Users,
  SquareCheck,
  CircleCheck,
  Clock,
} from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const modes = [
  {
    icon: Monitor,
    title: "Self-paced learning",
    body: "Best for foundational, flexible learning.",
  },
  {
    icon: UserRound,
    title: "Virtual instructor-led",
    body: "Best for distributed teams needing structure.",
  },
  {
    icon: Users,
    title: "Live workshops",
    body: "Best for hands-on, in-person collaboration.",
  },
  {
    icon: SquareCheck,
    title: "Guided practice",
    body: "Best for building task-level confidence.",
  },
  {
    icon: CircleCheck,
    title: "Train-the-trainer",
    body: "Best for scaling internal enablement.",
  },
  {
    icon: Clock,
    title: "Office hours",
    body: "Best for open Q&A close to go-live.",
  },
] as const;

export default function DeliveryModesSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Delivery modes"
          title={
            <>
              Learning delivered the way your
              <br className="hidden sm:block" /> teams work.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modes.map(({ icon: Icon, title, body }) => (
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
