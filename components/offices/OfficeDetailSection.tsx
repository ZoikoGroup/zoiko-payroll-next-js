import React from "react";
import { SectionHeading, ActionButton } from "./Primitives";

const details = [
  ["Address", "167–169 Great Portland Street, 5th Floor, London W1W 5PF, United Kingdom"],
  ["Time zone", "Europe/London (GMT/BST)"],
  ["Hours today", "09:00–17:30"],
  ["Accessibility", "Step-free entrance, accessible restroom — verified"],
  ["Services", "Sales, implementation services, EU customer support"],
] as const;

const actions = [
  "Copy address",
  "Call",
  "Email",
  "Directions",
  "Customer route",
] as const;

export default function OfficeDetailSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 sm:gap-12">
        <SectionHeading
          eyebrow="Office detail screen"
          title="The richest utility screen in the directory"
          body="A strong identity header, immediately visible address and actions, then modular information with progressive disclosure."
        />

        <div className="w-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0px_30px_70px_0px_rgba(10,40,65,0.14)]">
          <div className="flex items-center gap-3.5 border-b border-[#E2E8F0] bg-[#F5F8FA] px-5 py-3.5">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
              <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
              <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
            </div>
            <span className="truncate text-sm font-bold text-[#64748B]">
              Offices / United Kingdom / London
            </span>
          </div>

          <div className="flex flex-col gap-4 px-5 pb-6 pt-8 sm:px-6 sm:pt-12">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold leading-8 text-[#0F172A]">
                Zoiko Payroll — London
              </h3>
              <p className="text-base leading-6 text-[#475569]">
                London, England · United Kingdom
              </p>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#E3F0E7] px-3 py-1 text-xs font-bold text-[#20502F]">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Published
              </span>
            </div>

            <dl className="flex flex-col">
              {details.map(([term, value]) => (
                <div
                  key={term}
                  className="flex flex-col gap-1 border-b border-[#E2E8F0] py-4 last:border-b-0 sm:flex-row sm:gap-4"
                >
                  <dt className="text-xs uppercase leading-5 text-[#94A3B8] sm:w-40 sm:shrink-0">
                    {term}
                  </dt>
                  <dd className="text-sm leading-5 text-[#0F172A]">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-2">
              {actions.map((action, index) => (
                <ActionButton
                  key={action}
                  variant={index === 0 ? "primary" : "secondary"}
                >
                  {action}
                </ActionButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
