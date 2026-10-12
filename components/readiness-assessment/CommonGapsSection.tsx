import React from "react";
import {
  UserCog,
  CircleAlert,
  PanelsTopLeft,
  Share2,
  SquareCheck,
  UserRound,
} from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const gaps = [
  {
    icon: UserCog,
    title: "Scope still changing",
    body: "Entities or countries not yet finalized.",
  },
  {
    icon: CircleAlert,
    title: "Untrusted payroll data",
    body: "Legacy data not yet reconciled or validated.",
  },
  {
    icon: PanelsTopLeft,
    title: "Registration dependencies",
    body: "Local entity or tax registrations outstanding.",
  },
  {
    icon: Share2,
    title: "Integration ownership",
    body: "No clear owner for connected systems.",
  },
  {
    icon: SquareCheck,
    title: "Undefined testing strategy",
    body: "No agreed approach for validation coverage.",
  },
  {
    icon: UserRound,
    title: "Day-1 operating ownership",
    body: "No confirmed owner for launch-day operations.",
  },
] as const;

export default function CommonGapsSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Common readiness gaps"
          title={
            <>
              The gaps that show up most
              <br className="hidden sm:block" /> often.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gaps.map(({ icon: Icon, title, body }) => (
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
