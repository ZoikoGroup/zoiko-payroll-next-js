import React from "react";
import {
  UserRound,
  PanelsTopLeft,
  CircleCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "./Primitives";

const gates = [
  {
    icon: UserRound,
    title: "Mobilize",
    body: "Sponsors and governance confirmed.",
  },
  {
    icon: PanelsTopLeft,
    title: "Configure",
    body: "Rules, roles, and access are set.",
  },
  {
    icon: CircleCheck,
    title: "Validate",
    body: "Testing evidence meets acceptance criteria.",
  },
  { icon: Zap, title: "Go live", body: "Cutover authorized and executed." },
  {
    icon: CheckCircle2,
    title: "Stabilize",
    body: "Operations confirmed stable post-launch.",
  },
] as const;

export default function ImplementationGatesSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Critical implementation gates"
          title={
            <>
              Readiness checked at every
              <br className="hidden sm:block" /> stage gate.
            </>
          }
        />

        <div className="relative grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {/* Connector rail — only meaningful once the gates sit in one row. */}
          <span
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-[21px] hidden h-0.5 bg-blue-600 lg:block"
          />
          {gates.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="relative flex flex-col items-center gap-1 px-2 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600">
                <Icon className="h-5 w-5" strokeWidth={1.58} />
              </span>
              <h3 className="pt-3 text-sm font-semibold text-slate-900">
                {title}
              </h3>
              <p className="text-xs leading-5 text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
