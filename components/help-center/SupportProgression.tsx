"use client";

import Reveal from "../ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Public help",
    description: "No sign-in needed",
  },
  {
    number: "02",
    title: "Authenticated context",
    description: "Only if required",
  },
  {
    number: "03",
    title: "Minimal evidence",
    description: "Issue-specific only",
  },
  {
    number: "04",
    title: "Accountable owner",
    description: "Named, not a queue",
  },
  {
    number: "05",
    title: "Clear outcome",
    description: "Factual next step",
  },
];

export default function SupportProgression() {
  return (
    <section className="bg-[#FFFFFF] border-t border-slate-200 py-20 px-4 sm:px-8 lg:px-28">
      <div className="mx-auto max-w-[1180px] px-2 sm:px-8 flex flex-col gap-8">
        <Reveal>
          <div className="max-w-[660px] flex flex-col gap-3.5">
            <div className="relative flex items-center h-5 pl-6">
              <div className="w-4 h-0.5 absolute left-0 top-[9px] bg-[#2F6FED]" />
              <span className="text-[#2F6FED] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Support progression + authentication
              </span>
            </div>
            <h2 className="text-slate-900 text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-8 sm:leading-9 whitespace-nowrap">
              A simple step diagram — not a complicated funnel
            </h2>
            <p className="text-gray-700 text-sm font-normal font-['Inter'] leading-6">
              Sign-in appears only at the point private context is genuinely
              required. Public self-service stays usable without it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col sm:flex-row overflow-hidden w-full">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex-1 px-3 py-5 flex flex-col items-center gap-[3px] ${
                  i < steps.length - 1
                    ? "border-b sm:border-b-0 sm:border-r border-slate-200"
                    : ""
                }`}
              >
                <span className="text-[#2F6FED] text-xs font-bold font-['Inter'] leading-4">
                  {step.number}
                </span>
                <span className="pt-1 pb-[0.59px] text-slate-900 text-xs font-bold font-['Inter'] leading-5 text-center">
                  {step.title}
                </span>
                <span className="text-slate-500 text-xs font-normal font-['Inter'] leading-4 text-center">
                  {step.description}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}