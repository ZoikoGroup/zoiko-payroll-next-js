import React from "react";
import {
  PanelsTopLeft,
  CircleCheck,
  LineChart,
  UserRound,
  UserCog,
  Check,
  Globe,
  Bell,
  Power,
} from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const audiences = [
  {
    icon: PanelsTopLeft,
    title: "Payroll administrator",
    body: "Runs the payroll cycle end to end.",
  },
  {
    icon: CircleCheck,
    title: "Payroll manager",
    body: "Owns exceptions, approvals, and oversight.",
  },
  {
    icon: LineChart,
    title: "Finance team",
    body: "Reconciles payroll to financial records.",
  },
  {
    icon: UserRound,
    title: "HR / HRIS",
    body: "Maintains data that feeds payroll inputs.",
  },
  {
    icon: UserCog,
    title: "System administrator",
    body: "Configures roles, access, and settings.",
  },
  {
    icon: Check,
    title: "Approvers / managers",
    body: "Review and authorize payroll decisions.",
  },
  {
    icon: Globe,
    title: "Local payroll owner",
    body: "Applies country-specific requirements.",
  },
  {
    icon: Bell,
    title: "Employee self-service",
    body: "Views payslips and personal payroll data.",
  },
  {
    icon: Power,
    title: "Support team",
    body: "Helps resolve day-to-day payroll questions.",
  },
] as const;

export default function WhoNeedsTrainingSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Who needs training"
          title={
            <>
              Every role gets a learning path
              <br className="hidden sm:block" /> built for it.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="flex flex-col gap-1.5 p-5">
              <IconTile size="sm">
                <Icon className="h-5 w-5" strokeWidth={1.83} />
              </IconTile>
              <h3 className="pt-5 text-base font-semibold text-slate-900">
                {title}
              </h3>
              <p className="pb-1 text-sm text-slate-500">{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
