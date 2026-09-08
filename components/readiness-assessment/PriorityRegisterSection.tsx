import React from "react";
import { SectionHeading, StatusPill, type ReadinessStatus } from "./Primitives";

interface Action {
  badge: string;
  badgeStatus: ReadinessStatus;
  title: string;
  owner: string;
  scope: string;
  gate: string;
  gateStatus: ReadinessStatus;
}

const columns: { heading: string; actions: Action[] }[] = [
  {
    heading: "P0 · Blocker",
    actions: [
      {
        badge: "P0 Blocker",
        badgeStatus: "gap",
        title: "Confirm India entity registration",
        owner: "Legal",
        scope: "IN",
        gate: "Gate: Configure",
        gateStatus: "gap",
      },
    ],
  },
  {
    heading: "P1 · Critical dependency",
    actions: [
      {
        badge: "P1 Critical",
        badgeStatus: "p1",
        title: "Assign integration owner",
        owner: "IT",
        scope: "Global",
        gate: "Gate: Validate",
        gateStatus: "preparation",
      },
      {
        badge: "P1 Critical",
        badgeStatus: "p1",
        title: "Finalize Germany tax mapping",
        owner: "Payroll",
        scope: "DE",
        gate: "Gate: Configure",
        gateStatus: "preparation",
      },
    ],
  },
  {
    heading: "P2 · Preparation",
    actions: [
      {
        badge: "P2 Prep",
        badgeStatus: "preparation",
        title: "Reconcile legacy earnings codes",
        owner: "Payroll",
        scope: "US",
        gate: "Gate: Validate",
        gateStatus: "preparation",
      },
      {
        badge: "P2 Prep",
        badgeStatus: "preparation",
        title: "Define day-1 support model",
        owner: "HR Ops",
        scope: "Global",
        gate: "Gate: Go live",
        gateStatus: "unassessed",
      },
    ],
  },
  {
    heading: "P3 · Recommendation",
    actions: [
      {
        badge: "P3 Rec.",
        badgeStatus: "unassessed",
        title: "Review UK testing coverage",
        owner: "QA",
        scope: "UK",
        gate: "Gate: Validate",
        gateStatus: "ready",
      },
    ],
  },
];

export default function PriorityRegisterSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Priority action register"
          title={
            <>
              Every gap, owned and tracked to
              <br className="hidden sm:block" /> closure.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div
              key={column.heading}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-900">
                  {column.heading}
                </h3>
                <span className="text-sm text-slate-400">
                  {column.actions.length}
                </span>
              </div>

              {column.actions.map((action) => (
                <div
                  key={action.title}
                  className="flex flex-col items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3.5"
                >
                  <StatusPill status={action.badgeStatus}>
                    {action.badge}
                  </StatusPill>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {action.title}
                  </h4>
                  <div className="flex w-full flex-wrap justify-between gap-x-3 gap-y-1">
                    <span className="text-xs text-slate-500">
                      Owner: {action.owner}
                    </span>
                    <span className="text-xs text-slate-500">
                      {action.scope}
                    </span>
                  </div>
                  <StatusPill status={action.gateStatus}>
                    {action.gate}
                  </StatusPill>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
