import React from "react";
import Image from "next/image";
import { SectionHeading } from "./Primitives";

const stakeholders = [
  {
    title: "Payroll teams",
    description: "Own new processes, controls, and calculation logic.",
  },
  {
    title: "HR operations",
    description: "Align policy, data, and employee-facing procedures.",
  },
  {
    title: "Managers",
    description: "Guide teams through approvals and changed timing.",
  },
  {
    title: "Employees",
    description: "Understand what changes in pay, access, and support.",
  },
  {
    title: "Finance",
    description: "Confirm controls, reporting, and reconciliation impact.",
  },
  {
    title: "IT & security",
    description: "Manage access, integrations, and data protection.",
  },
  {
    title: "Local payroll teams",
    description: "Adapt plans to regional rules and payroll calendars.",
  },
  {
    title: "Executive sponsors",
    description: "Champion the change and remove organizational blockers.",
  },
] as const;

export default function StakeholderEcosystemSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Stakeholder ecosystem"
          title="Every audience experiences payroll change differently."
          body="Different stakeholders require different communication, ownership, and readiness plans."
        />

        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-10 xl:grid-cols-[452px_1fr] xl:gap-14">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/change-management/stakeholder-ecosystem.webp"
              alt="The stakeholders surrounding a Zoiko Payroll rollout"
              width={453}
              height={453}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stakeholders.map((stakeholder) => (
              <div
                key={stakeholder.title}
                className="rounded-[10px] border border-slate-200 bg-white px-7 py-7"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {stakeholder.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {stakeholder.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
