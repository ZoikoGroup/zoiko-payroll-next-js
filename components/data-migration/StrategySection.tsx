import React from "react";
import { RefreshCw, Layers, ClipboardCheck, Archive, Server, X } from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const strategies = [
  {
    icon: RefreshCw,
    tint: "bg-sky-950/10 text-sky-950",
    title: "Migrate current",
    description: "Active records needed for the next payroll run.",
  },
  {
    icon: Layers,
    tint: "bg-blue-600/10 text-blue-600",
    title: "Migrate summarized history",
    description: "Prior periods rolled up into totals, not line detail.",
  },
  {
    icon: ClipboardCheck,
    tint: "bg-slate-900/10 text-slate-900",
    title: "Migrate selected history",
    description: "Specific periods required for audit or reporting.",
  },
  {
    icon: Archive,
    tint: "bg-yellow-400/10 text-yellow-500",
    title: "Archive securely",
    description: "Retained outside the live system under access controls.",
  },
  {
    icon: Server,
    tint: "bg-green-500/10 text-green-500",
    title: "Temporary legacy access",
    description: "Read-only access to the old system during transition.",
  },
  {
    icon: X,
    tint: "bg-red-600/10 text-red-600",
    title: "Do not migrate",
    description: "Out of scope, superseded or no longer required.",
  },
] as const;

export default function StrategySection() {
  return (
    <section className="bg-slate-100 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
        <SectionHeading
          eyebrow="Strategy"
          title="Not everything moves the same way"
          body="Each data set is assigned one of six strategies based on relevance, retention needs and risk."
        />

        <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {strategies.map(({ icon: Icon, tint, title, description }) => (
            <Card key={title} className="flex flex-col gap-4">
              <IconTile tint={tint}>
                <Icon className="h-5 w-5" strokeWidth={1.65} />
              </IconTile>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="text-sm leading-6 text-slate-600">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
