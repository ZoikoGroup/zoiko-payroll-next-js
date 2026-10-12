import React from "react";
import { Check } from "lucide-react";
import { Eyebrow } from "./Primitives";

const handover = [
  {
    title: "Documentation",
    description: "Configuration, decisions, and process detail.",
  },
  {
    title: "Workshops",
    description: "Live sessions to walk teams through the new process.",
  },
  {
    title: "Recorded sessions",
    description: "Reference material teams can revisit anytime.",
  },
  {
    title: "Handover pack",
    description: "A consolidated summary of the completed engagement.",
  },
  {
    title: "Ownership transfer",
    description: "Formal sign-off confirming your team is ready.",
  },
] as const;

export default function KnowledgeTransferSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <Eyebrow>Knowledge transfer & closeout</Eyebrow>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Ownership transfers back to your team.
          </h2>
          <p className="text-base leading-7 text-slate-500">
            Every engagement ends with documentation and enablement so your team
            can operate independently.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-7">
          <ul className="flex flex-col">
            {handover.map((item, index) => (
              <li
                key={item.title}
                className={`flex items-start gap-4 py-5 ${
                  index < handover.length - 1
                    ? "border-b border-slate-200"
                    : "pb-0"
                } ${index === 0 ? "pt-0" : ""}`}
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-3.5 w-3.5 text-green-600" strokeWidth={3} />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
