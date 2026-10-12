import React from "react";
import { Globe, SquareCheck, Zap, Share2 } from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const principles = [
  {
    icon: Globe,
    title: "Country-aware",
    body: "Readiness reflects the rules of each operating market.",
  },
  {
    icon: SquareCheck,
    title: "Evidence-led",
    body: "Status is confirmed with proof, not assumption.",
  },
  {
    icon: Zap,
    title: "Risk-prioritized",
    body: "Blockers surface first, ahead of minor gaps.",
  },
  {
    icon: Share2,
    title: "Implementation-connected",
    body: "Findings feed directly into the delivery plan.",
  },
] as const;

export default function ReadinessPrinciplesSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Readiness integrity principles"
          title={
            <>
              Readiness built on evidence, not
              <br className="hidden sm:block" /> estimates.
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
