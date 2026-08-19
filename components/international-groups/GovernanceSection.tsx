import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

type Permission = { label: string; granted: boolean };

const levels: {
  title: string;
  description: string;
  indent: string;
  accent: string;
  dark?: boolean;
  permissions: Permission[];
}[] = [
  {
    title: "Zoiko Holdings — Group",
    description: "Shared terminology, evidence & reporting model",
    indent: "",
    accent: "",
    dark: true,
    permissions: [
      { label: "View", granted: true },
      { label: "Prepare", granted: false },
      { label: "Approve", granted: false },
    ],
  },
  {
    title: "EMEA — Region",
    description: "Coordination, escalation, regional aggregation",
    indent: "lg:ml-9",
    accent: "border-l-[3px] border-blue-600",
    permissions: [
      { label: "View", granted: true },
      { label: "Escalate", granted: true },
      { label: "Approve", granted: false },
    ],
  },
  {
    title: "Zoiko DE GmbH — Legal Entity",
    description: "Local configuration, review, provider handoff",
    indent: "lg:ml-16",
    accent: "border-l-[3px] border-indigo-600",
    permissions: [
      { label: "View", granted: true },
      { label: "Review", granted: true },
      { label: "Approve", granted: true },
    ],
  },
  {
    title: "Salaried — Monthly — Payroll Group",
    description: "Local preparation, source totals, reconciliation",
    indent: "lg:ml-28",
    accent: "border-l-[3px] border-slate-500",
    permissions: [
      { label: "View", granted: true },
      { label: "Prepare", granted: true },
      { label: "Reconcile", granted: true },
    ],
  },
];

export default function GovernanceSection() {
  return (
    <section className="border-t border-[#E3E7F0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Group → Region → Legal Entity → Payroll Group governance"
            title="Group visibility is not group authority"
            description="Every action is scoped and role-limited to where it's shown — never inherited automatically from the level above."
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="flex flex-col gap-2.5">
            {levels.map((level) => (
              <div
                key={level.title}
                className={`flex flex-wrap items-center justify-between gap-4 rounded-xl px-4 py-3.5 ${level.indent} ${
                  level.dark
                    ? "bg-slate-900"
                    : `border border-slate-200 bg-white ${level.accent}`
                }`}
              >
                <div>
                  <h3
                    className={`text-sm font-bold leading-5 ${
                      level.dark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {level.title}
                  </h3>
                  <p
                    className={`mt-px text-xs leading-4 ${
                      level.dark ? "text-white/60" : "text-slate-500"
                    }`}
                  >
                    {level.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {level.permissions.map((permission) => (
                    <span
                      key={permission.label}
                      className={`rounded-full px-2 py-0.5 text-[0.625rem] font-semibold leading-4 ${
                        permission.granted
                          ? "bg-emerald-50 text-green-600"
                          : "bg-slate-50 text-gray-700 ring-1 ring-slate-200"
                      }`}
                    >
                      {permission.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-5">
          <p className="rounded-[10px] border border-blue-600 bg-indigo-50 px-4 py-3 text-xs leading-5 text-gray-700">
            <span aria-hidden="true">ⓘ</span> Separation principle: the Group level can{" "}
            <strong>view</strong> aggregate readiness across all entities, but only the Legal Entity
            and Payroll Group levels hold <strong>prepare, review and approve</strong> authority for
            their own scope.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
