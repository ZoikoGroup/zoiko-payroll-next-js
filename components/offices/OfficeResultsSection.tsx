import React from "react";
import { SectionHeading, ActionButton } from "./Primitives";

const statusStyles = {
  published: { label: "Published", bg: "bg-[#E3F0E7]", text: "text-[#20502F]" },
  unavailable: {
    label: "Temporarily unavailable",
    bg: "bg-[#F1EAD8]",
    text: "text-[#B45309]",
  },
  moved: { label: "Moved", bg: "bg-[#E7EDFD]", text: "text-[#0A78C3]" },
} as const;

const offices = [
  {
    name: "Zoiko Payroll — London",
    location: "London, England · United Kingdom",
    status: statusStyles.published,
    facts: [
      ["Address", "167–169 Great Portland St, 5th Floor, W1W 5PF"],
      ["Hours", "Mon–Fri, 09:00–17:30 (Europe/London)"],
      ["Services", "Sales, implementation, EU support"],
    ],
    actions: ["View office", "Call", "Directions"],
  },
  {
    name: "Zoiko Payroll — Sacramento HQ",
    location: "Sacramento, CA · United States",
    status: statusStyles.published,
    facts: [
      ["Address", "1401 21st Street, Suite R, Sacramento, CA 95811"],
      ["Hours", "Mon–Fri, 08:00–18:00 (America/Los_Angeles)"],
      ["Services", "Global headquarters, sales, support"],
    ],
    actions: ["View office", "Call", "Directions"],
  },
  {
    name: "Zoiko Payroll — Singapore",
    location: "Singapore",
    status: statusStyles.unavailable,
    facts: [
      ["Notice", "Visitor access paused; approved alternative route available."],
      ["Services", "APAC implementation services"],
    ],
    actions: ["View update", "Directions unavailable"],
  },
  {
    name: "Zoiko Payroll — Amsterdam",
    location: "Amsterdam · Netherlands",
    status: statusStyles.moved,
    facts: [
      ["Notice", "This office has moved to a new approved address."],
      ["Services", "EU customer support operations"],
    ],
    actions: ["View new office"],
  },
] as const;

export default function OfficeResultsSection() {
  return (
    <section
      id="office-results"
      className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-12">
        <SectionHeading
          eyebrow="Office results"
          title="Standardized cards — synthetic example data"
          body="Every card separates identity, verified facts, lifecycle status and utility actions, and works completely without the map."
        />

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {offices.map((office) => (
            <article
              key={office.name}
              className="flex flex-col gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex flex-col">
                  <h3 className="text-base font-bold leading-6 text-[#0F172A]">
                    {office.name}
                  </h3>
                  <p className="text-xs leading-5 text-[#64748B]">
                    {office.location}
                  </p>
                </div>
                <span
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${office.status.bg} ${office.status.text}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {office.status.label}
                </span>
              </div>

              <dl className="flex flex-col gap-1.5 border-y border-[#E2E8F0] py-3">
                {office.facts.map(([term, value]) => (
                  <div key={term} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                    <dt className="min-w-20 text-sm text-[#94A3B8]">{term}</dt>
                    <dd className="text-sm leading-5 text-[#475569]">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-wrap gap-2">
                {office.actions.map((action, index) => (
                  <ActionButton
                    key={action}
                    variant={
                      action.endsWith("unavailable")
                        ? "disabled"
                        : index === 0
                          ? "primary"
                          : "secondary"
                    }
                  >
                    {action}
                  </ActionButton>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
