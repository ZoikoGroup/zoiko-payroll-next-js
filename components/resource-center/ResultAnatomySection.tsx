import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StateBadge from "./StateBadge";
import {
  CardIcon,
  ChartIcon,
  CheckCircleIcon,
  ClockIcon,
  DatabaseIcon,
  GlobeIcon,
  InfoIcon,
  LockIcon,
} from "../ui/icons";

const states = [
  { state: "Current" as const, meaning: "Reviewed and accurate as published" },
  { state: "Review due" as const, meaning: "Flagged for scheduled review; not featured by default" },
  { state: "Superseded" as const, meaning: "Replacement shown first; old content de-emphasized" },
];

const handoffs = [
  {
    icon: CardIcon,
    label: "Operational behavior",
    description: "Fields, configuration, workflow → Product Documentation.",
  },
  {
    icon: InfoIcon,
    label: "Support",
    description: "Problem resolution and recovery → Help Center.",
  },
  {
    icon: CheckCircleIcon,
    label: "Shipped change",
    description: "What changed and required action → Release Notes.",
  },
  {
    icon: ClockIcon,
    label: "Service health",
    description: "Current/historical availability → System Status.",
  },
  {
    icon: GlobeIcon,
    label: "Market-specific",
    description: "Jurisdiction context → Jurisdiction Guides.",
  },
  {
    icon: DatabaseIcon,
    label: "Implementation",
    description: "Migration, testing, launch depth → Implementation.",
  },
  {
    icon: LockIcon,
    label: "Security evidence",
    description: "Controls, procurement proof → Security and Trust.",
  },
  {
    icon: ChartIcon,
    label: "Reporting depth",
    description: "Exports, reconciliation context → Reporting.",
  },
];

export default function ResultAnatomySection() {
  return (
    <section className="border-t border-slate-200 bg-[#DFEAF3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>How to read a result</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Scope, freshness and authority stay visible on every card.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <ul className="flex flex-wrap gap-4">
            {states.map((item) => (
              <li
                key={item.state}
                className="flex items-center gap-3 rounded-lg bg-white px-4 py-3.5"
              >
                <StateBadge state={item.state} />
                <span className="text-sm leading-5 text-gray-700">{item.meaning}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="mt-6">
          <p className="rounded-xl border-l-4 border-sky-600 bg-sky-50 px-5 py-4 text-sm leading-6 text-gray-700">
            <span className="font-bold text-sky-950">No opaque scores.</span> Resource Center never
            shows &quot;relevance 94%,&quot; an AI confidence score, or an inferred persona label.
            Every ranking signal is explainable.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <h3 className="text-base font-bold leading-6 text-sky-950">
            Authority handoffs used throughout Resource Center
          </h3>
          <ul className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {handoffs.map((handoff) => {
              const Icon = handoff.icon;
              return (
                <li
                  key={handoff.label}
                  className="flex gap-3.5 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100">
                    <Icon className="h-4 w-4 text-sky-600" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-extrabold uppercase leading-4 tracking-wide text-sky-600">
                      {handoff.label}
                    </span>
                    <span className="mt-1.5 block text-xs leading-4 text-gray-600">
                      {handoff.description}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
