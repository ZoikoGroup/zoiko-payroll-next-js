import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StageBadge, { type BadgeTone } from "./StageBadge";

const stages: { badge: string; tone: BadgeTone; title: string; description: string }[] = [
  {
    badge: "Foundation",
    tone: "neutral",
    title: "Calendar & ownership",
    description:
      "A repeatable payroll period with clear ownership: calendar, inputs, owner, completion records.",
  },
  {
    badge: "Structure",
    tone: "neutral",
    title: "Validate & resolve",
    description: "Validation, exception queue, change history and a growth setup checklist.",
  },
  {
    badge: "Delegation",
    tone: "warn",
    title: "Backup coverage",
    description:
      "Role separation, backup owner, review and approval scope for when the primary owner is out.",
  },
  {
    badge: "Connection",
    tone: "ok",
    title: "Approved sources",
    description:
      "Integrations, connection health, reconciliation and audit — repeatable reporting.",
  },
  {
    badge: "Expansion ready",
    tone: "neutral",
    title: "Next operating model",
    description: "Readiness assessment, implementation plan and solution routing.",
  },
];

export default function ProgressionSection() {
  return (
    <section className="bg-stone-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title="A practical progression — never a hidden maturity score"
            description={`"Ready" describes what to add next, in plain terms. It's not a rating.`}
          />
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-neutral-300 bg-neutral-300 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((stage) => (
              <div key={stage.badge} className="flex flex-col bg-white px-5 py-6">
                <div>
                  <StageBadge tone={stage.tone}>{stage.badge}</StageBadge>
                </div>
                <h3 className="mt-7 text-base font-semibold leading-6 text-slate-900">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-5 text-slate-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
