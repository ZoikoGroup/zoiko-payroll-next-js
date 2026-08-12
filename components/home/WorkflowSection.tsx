"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "./Eyebrow";
import { ClockIcon, GridIcon, CheckSquareIcon } from "../ui/icons";

const pillarIcons = {
  clock: ClockIcon,
  grid: GridIcon,
  check: CheckSquareIcon,
} as const;

const workflowPillars = [
  {
    icon: "clock" as const,
    title: "Centralized control",
    description: "Coordinate payroll activities, records, responsibilities and approval status in one operating view.",
  },
  {
    icon: "grid" as const,
    title: "Jurisdiction-aware operations",
    description: "Configure payroll processes around the requirements of each supported jurisdiction.",
  },
  {
    icon: "check" as const,
    title: "Clear accountability",
    description: "Define responsibilities, approval controls, audit history and outstanding actions.",
  },
];

const workflowSteps = [
  {
    number: "01",
    label: "Prepare",
    title: "Prepare",
    description:
      "Bring together employee, earnings, deduction, adjustment, absence, time and payroll-period information.",
    image: "/images/home/prepare.png",
  },
  {
    number: "02",
    label: "Calculate",
    title: "Calculate",
    description: "Run gross-to-net calculations across earnings, deductions, taxes and jurisdiction-specific rules.",
    image: "/images/workflow/calculate.jpg",
  },
  {
    number: "03",
    label: "Validate",
    title: "Validate",
    description: "Check calculated results against configured rules, exceptions and prior-period variances.",
    image: "/images/workflow/validate.jpg",
  },
  {
    number: "04",
    label: "Review",
    title: "Review",
    description: "Route calculated payroll to responsible reviewers with full visibility into changes and exceptions.",
    image: "/images/workflow/review.jpg",
  },
  {
    number: "05",
    label: "Approve",
    title: "Approve",
    description: "Capture recorded, role-based approval decisions before payroll can progress to completion.",
    image: "/images/workflow/approve.jpg",
  },
  {
    number: "06",
    label: "Complete",
    title: "Complete",
    description: "Finalize the pay run, release payslips and hand off reporting and reconciliation records.",
    image: "/images/workflow/complete.jpg",
  },
];

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const step = workflowSteps[activeStep];

  return (
    <section className="border-b border-[#DCE6EC] bg-[#DCE6EC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Value proposition and workflow</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            One payroll control center. Local operational precision.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Multi-jurisdiction payroll software gives organizations one controlled environment for
            managing payroll while accommodating differences in calculations, deductions,
            documentation, reporting, approvals, currencies and payroll practices across supported
            markets.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Replace disconnected spreadsheets, manual handoffs and fragmented administration with a
            structured operating environment that gives authorized teams clear visibility from first
            input to approved payroll outcome.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {workflowPillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.icon];
            return (
              <Reveal key={pillar.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-brand-dark">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14">
          <div
            className="flex overflow-hidden border-[#B9CAD5] rounded-[8px] bg-[#EAF1F6] shadow-sm ring-1 ring-slate-200"
            role="tablist"
            aria-label="Payroll workflow steps"
          >
            {workflowSteps.map((s, index) => (
              <button
                key={s.number}
                type="button"
                role="tab"
                aria-selected={activeStep === index}
                onClick={() => setActiveStep(index)}
                className={`flex-1 px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
                  activeStep === index
                    ? "bg-brand-gradient text-white shadow-md shadow-brand/30"
                    : "text-slate-500 hover:bg-slate-50 hover:text-brand-dark"
                }`}
              >
                <span className="block text-[10px] opacity-80">{s.number}</span>
                {s.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div key={step.number}>
              <h3 className="text-xl font-semibold text-brand-dark">{step.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
            <img
              key={`${step.number}-image`}
              src={step.image}
              alt={`${step.title} workflow step`}
              loading="lazy"
              className="h-auto w-full rounded-xl"
            />
          </div>
        </Reveal>

        <Reveal className="mt-10 border-t border-slate-200 pt-8">
          <ArrowLink href="/payroll-processing">See the complete payroll workflow</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
