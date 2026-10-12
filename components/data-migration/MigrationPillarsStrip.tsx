import React from "react";
import { Eye, Map, Shield, Anchor } from "lucide-react";
import { IconTile } from "./Primitives";

const pillars = [
  {
    icon: Eye,
    title: "Profiled",
    description: "Every source field inspected before it moves.",
  },
  {
    icon: Map,
    title: "Mapped",
    description: "Source fields resolved to approved payroll targets.",
  },
  {
    icon: Shield,
    title: "Protected",
    description: "Encrypted transfer, scoped access, full logging.",
  },
  {
    icon: Anchor,
    title: "Reconciled",
    description: "Target totals matched back to source before go-live.",
  },
] as const;

export default function MigrationPillarsStrip() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, description }, index) => (
          <div
            key={title}
            className={`flex items-start gap-5 px-6 py-9 ${
              index < pillars.length - 1 ? "lg:border-r lg:border-slate-200" : ""
            }`}
          >
            <IconTile>
              <Icon className="h-5 w-5" strokeWidth={1.65} />
            </IconTile>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-semibold text-slate-900">
                {title}
              </h3>
              <p className="text-sm leading-5 text-slate-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
