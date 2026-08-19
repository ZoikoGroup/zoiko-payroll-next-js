import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StageBadge, { type BadgeTone } from "./StageBadge";

const roles: { badge: string; tone: BadgeTone; title: string; description: string }[] = [
  {
    badge: "Owns",
    tone: "neutral",
    title: "Payroll Owner",
    description: "Owns configuration and the run — cannot bypass required approval rules.",
  },
  {
    badge: "Prepares",
    tone: "neutral",
    title: "Preparer",
    description: "Permitted inputs and assigned items only — no approval where separated.",
  },
  {
    badge: "Inspects",
    tone: "warn",
    title: "Reviewer",
    description: "Inspects results and exceptions. Review is not approval.",
  },
  {
    badge: "Authorizes",
    tone: "ok",
    title: "Approver",
    description:
      "Authorizes the current version. Material changes may require re-review. Self-approval is disabled — M. Reyes prepared this run and cannot also approve it.",
  },
];

export default function RolesSection() {
  return (
    <section className="bg-stone-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title="More people means clearer responsibility, not broader access"
            description="Precise access varies by configuration — this is a role model, not a fixed spec."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="flex flex-col gap-3.5">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="flex items-start gap-4 rounded-md border border-neutral-300 bg-white px-5 py-4"
                >
                  <div className="shrink-0 pt-1">
                    <StageBadge tone={role.tone}>{role.badge}</StageBadge>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-6 text-slate-900">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-slate-600">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/growing-businesses/roles.png"
              alt="A payroll team walking through a run together"
              className="aspect-[533/427] w-full rounded-lg object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
