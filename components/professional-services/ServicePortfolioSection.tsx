import React from "react";
import Link from "next/link";
import {
  BarChart3,
  RefreshCw,
  Waypoints,
  SquareCheck,
  CircleCheck,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const services = [
  {
    icon: BarChart3,
    title: "Payroll advisory",
    description: "Expert guidance on structure, controls, and design decisions.",
  },
  {
    icon: RefreshCw,
    title: "Data migration",
    description: "Mapping, validating, and transferring payroll history safely.",
  },
  {
    icon: Waypoints,
    title: "Integration services",
    description:
      "Building and testing connections to finance and HR systems.",
  },
  {
    icon: SquareCheck,
    title: "Testing & validation",
    description: "Structured test cycles across calculations and reporting.",
  },
  {
    icon: CircleCheck,
    title: "Change enablement",
    description: "Preparing teams and roles for new payroll processes.",
  },
  {
    icon: LineChart,
    title: "Optimization",
    description: "Refining processes and controls after go-live.",
  },
] as const;

export default function ServicePortfolioSection() {
  return (
    <section
      id="service-portfolio"
      className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Service portfolio"
          title="Specialist services across the payroll lifecycle."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="flex flex-col gap-2 p-7">
              <IconTile>
                <Icon className="h-5 w-5" strokeWidth={2} />
              </IconTile>
              <h3 className="pt-2.5 text-xl font-semibold text-slate-900">
                {title}
              </h3>
              <p className="text-sm leading-6 text-slate-500">{description}</p>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Discuss scope
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.46} />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
