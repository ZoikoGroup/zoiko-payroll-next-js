import React from "react";
import {
  Square,
  UserRound,
  PanelsTopLeft,
  CircleCheck,
  Zap,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { SectionHeading } from "./Primitives";

const stages = [
  {
    icon: Square,
    title: "Foundation",
    body: "Core payroll concepts and navigation.",
  },
  {
    icon: UserRound,
    title: "Role learning",
    body: "Modules specific to the learner's job.",
  },
  {
    icon: PanelsTopLeft,
    title: "Guided practice",
    body: "Hands-on tasks in the sandbox.",
  },
  {
    icon: CircleCheck,
    title: "Proficiency",
    body: "Assessment confirms readiness.",
  },
  {
    icon: Zap,
    title: "Go-live support",
    body: "Guidance through the first live cycle.",
  },
  {
    icon: CheckCircle2,
    title: "Reinforcement",
    body: "Follow-up to close remaining gaps.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing learning",
    body: "Kept current with every release.",
  },
] as const;

export default function LearningJourneySection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Learning journey"
          title="Learn. Practice. Prove. Operate."
        />

        <div className="relative grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 xl:gap-0">
          {/* Connector rail — only meaningful once the stages sit in one row. */}
          <span
            aria-hidden="true"
            className="absolute left-[7.14%] right-[7.14%] top-[22px] hidden h-0.5 bg-linear-to-r from-blue-600 to-blue-400 xl:block"
          />
          {stages.map(({ icon: Icon, title, body }) => (
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
