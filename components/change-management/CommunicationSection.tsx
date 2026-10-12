import React from "react";
import Image from "next/image";
import { SectionHeading } from "./Primitives";

const chain = [
  "Audience",
  "Message",
  "Channel",
  "Timing",
  "Action",
  "Feedback",
] as const;

const audiences = [
  {
    image: "employees",
    title: "Employees",
    description: "What's changing and what to do.",
  },
  {
    image: "managers",
    title: "Managers",
    description: "How to guide their teams.",
  },
  {
    image: "payroll-teams",
    title: "Payroll teams",
    description: "Operational changes ahead.",
  },
  {
    image: "leadership",
    title: "Leadership",
    description: "Program status and risks.",
  },
] as const;

export default function CommunicationSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Communication architecture"
          title="The right message, from the right person, at the right payroll moment."
          body="Communications are planned around payroll events and the needs of each audience."
        />

        {/* Chain */}
        <ol className="flex flex-wrap items-center justify-center gap-3">
          {chain.map((step, index) => (
            <li key={step} className="flex items-center gap-3">
              <span className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900">
                {step}
              </span>
              {index < chain.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="hidden h-0.5 w-8 bg-slate-200 sm:block"
                />
              ) : null}
            </li>
          ))}
        </ol>

        {/* Audience cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-slate-900">
                  {audience.title}
                </h3>
                <p className="text-sm leading-5 text-slate-500">
                  {audience.description}
                </p>
              </div>
              <Image
                src={`/images/change-management/${audience.image}.webp`}
                alt=""
                width={69}
                height={87}
                className="h-[87px] w-[69px] shrink-0 rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
