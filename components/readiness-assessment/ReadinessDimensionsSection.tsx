import React from "react";
import {
  Clock,
  Columns3,
  RefreshCw,
  SquareCheck,
  Share2,
  Lock,
  CircleCheck,
  UserCog,
} from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const dimensions = [
  {
    icon: Clock,
    title: "Strategy & governance",
    body: "Ownership, decisions, and sponsorship in place.",
  },
  {
    icon: Columns3,
    title: "Payroll landscape",
    body: "Entities, calendars, and populations mapped.",
  },
  {
    icon: RefreshCw,
    title: "Data readiness",
    body: "Payroll data validated, cleansed, and trusted.",
  },
  {
    icon: SquareCheck,
    title: "Compliance readiness",
    body: "Registrations and filings confirmed by market.",
  },
  {
    icon: Share2,
    title: "Systems & integrations",
    body: "Connections built, owned, and tested.",
  },
  {
    icon: Lock,
    title: "Security & access",
    body: "Roles, permissions, and controls defined.",
  },
  {
    icon: CircleCheck,
    title: "Testing & cutover",
    body: "Test strategy and cutover controls agreed.",
  },
  {
    icon: UserCog,
    title: "People & operations",
    body: "Day-one ownership and support are assigned.",
  },
] as const;

export default function ReadinessDimensionsSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Eight readiness dimensions"
          title={
            <>
              Everything readiness needs to
              <br className="hidden sm:block" /> cover.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dimensions.map(({ icon: Icon, title, body }) => (
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
