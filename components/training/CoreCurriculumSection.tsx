import React from "react";
import {
  Search,
  Calendar,
  BarChart3,
  CircleCheck,
  CircleAlert,
  Check,
  LineChart,
  Bell,
} from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const modules = [
  {
    icon: Search,
    title: "Payroll navigation",
    body: "Finding your way around the platform.",
  },
  {
    icon: Calendar,
    title: "Payroll calendar",
    body: "Understanding cycles and cutoff dates.",
  },
  {
    icon: BarChart3,
    title: "Payroll inputs",
    body: "Earnings, deductions, and adjustments.",
  },
  {
    icon: CircleCheck,
    title: "Payroll processing",
    body: "Running a payroll cycle end to end.",
  },
  {
    icon: CircleAlert,
    title: "Exceptions & corrections",
    body: "Identifying and resolving issues.",
  },
  {
    icon: Check,
    title: "Controls & approvals",
    body: "Working within review responsibilities.",
  },
  {
    icon: LineChart,
    title: "Finance & reporting",
    body: "Reading summaries and reconciliations.",
  },
  {
    icon: Bell,
    title: "Employee self-service",
    body: "What employees can see and do.",
  },
] as const;

export default function CoreCurriculumSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Core payroll curriculum"
          title={
            <>
              The foundation every payroll role
              <br className="hidden sm:block" /> builds on.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map(({ icon: Icon, title, body }) => (
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
