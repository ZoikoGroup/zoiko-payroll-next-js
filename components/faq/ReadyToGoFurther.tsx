"use client";

import Reveal from "../ui/Reveal";
import Eyebrow from "../payroll-guides/Eyebrow";
import Link from "next/link";

const nextSteps = [
  {
    title: "Explore the product",
    description: "See how Zoiko Payroll prepares, calculates, validates, reviews, approves and completes payroll.",
    ctaLabel: "Explore Zoiko Payroll",
    ctaHref: "#",
    primary: false,
  },
  {
    title: "Review pricing",
    description: "See current published plans and pricing information.",
    ctaLabel: "View Pricing",
    ctaHref: "#",
    primary: false,
  },
  {
    title: "Discuss your requirements",
    description: "For multi-jurisdiction, enterprise, implementation or procurement requirements, speak with the team.",
    ctaLabel: "Book a demo",
    ctaHref: "#",
    primary: true,
  },
];

export default function ReadyToGoFurther() {
  return (
    <section className="bg-[#E9F0F8] border-t border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow className="text-[#0A8FD0]">Ready to go further?</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-9">
              Three distinct next steps — pick the one that<br className="hidden sm:inline" /> fits.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {nextSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-white p-8 text-center outline outline-1 outline-offset-[-1px] outline-slate-200">
                <h3 className="text-base font-bold font-jakarta text-[#0A2E4B] leading-6">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs font-jakarta text-[#4E6172] leading-5">
                  {step.description}
                </p>
                <div className="mt-6">
                  {step.primary ? (
                    <Link
                      href={step.ctaHref}
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-[#4FA9DE] to-[#155A8A] px-6 text-sm font-bold font-jakarta text-white shadow-[0px_1px_2px_rgba(10,46,75,0.06)] transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {step.ctaLabel}
                    </Link>
                  ) : (
                    <Link
                      href={step.ctaHref}
                      className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-sm font-bold font-jakarta text-[#0A2E4B] shadow-[0px_1px_2px_rgba(10,46,75,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
                    >
                      {step.ctaLabel}
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}