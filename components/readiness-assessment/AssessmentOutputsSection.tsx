import React from "react";
import {
  BookOpen,
  Globe,
  PanelsTopLeft,
  Share2,
  Zap,
  CircleCheck,
} from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const outputs = [
  {
    icon: BookOpen,
    title: "Executive readiness summary",
    body: "A concise, leadership-ready overview of status.",
  },
  {
    icon: Globe,
    title: "Country readiness matrix",
    body: "Status by market, entity, and payroll wave.",
  },
  {
    icon: PanelsTopLeft,
    title: "Priority action register",
    body: "Every blocker and dependency, owned and dated.",
  },
  {
    icon: Share2,
    title: "Dependency map",
    body: "How gaps in one area affect another.",
  },
  {
    icon: Zap,
    title: "Rollout recommendation",
    body: "A suggested wave sequence based on findings.",
  },
  {
    icon: CircleCheck,
    title: "Readiness review summary",
    body: "A record to revisit ahead of each gate.",
  },
] as const;

export default function AssessmentOutputsSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Assessment outputs"
          title={
            <>
              What you receive when the
              <br className="hidden sm:block" /> assessment is complete.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outputs.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="flex flex-col gap-2 p-7">
              <IconTile solid>
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
