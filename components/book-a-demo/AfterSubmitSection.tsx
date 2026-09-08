import React from "react";
import { SectionHeading } from "./Primitives";

const steps = [
  {
    number: "01",
    title: "Context review",
    description:
      "We review your company size, countries of operation, and current payroll setup the moment you submit — no back-and-forth to get started.",
  },
  {
    number: "02",
    title: "Routed to a specialist",
    description:
      "Your request reaches the payroll specialist matched to your region and team size, so the conversation starts from where you actually are.",
  },
  {
    number: "03",
    title: "Tailored demo & next steps",
    description:
      "You get a walkthrough of the parts of Zoiko Payroll relevant to your team, plus a clear plan for what setup or migration would look like.",
  },
] as const;

export default function AfterSubmitSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:gap-12">
        <SectionHeading
          eyebrow="After you submit"
          title="What happens after you request a demo"
          body="No generic sales call. Your request is reviewed against your team size and payroll footprint, then routed to someone who can speak to your setup directly."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-2.5 rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0px_12px_32px_0px_rgba(15,30,46,0.06)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-[20px] border border-slate-300 text-sm font-extrabold text-sky-700">
                {step.number}
              </span>
              <h3 className="pt-3 text-base font-extrabold text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-gray-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
