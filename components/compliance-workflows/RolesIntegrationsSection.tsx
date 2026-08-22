import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

const roles = [
  "Local SME",
  "Compliance reviewer",
  "Global governance",
  "Decision maker",
  "Approver",
  "Legal / specialist reviewer",
  "Auditor",
];

const systems = [
  "Requirement registry",
  "Payroll configuration",
  "Document repository",
  "HRIS / HCM",
  "Finance / ERP",
  "Identity provider",
  "Ticket / support",
  "APIs / webhooks",
];

export default function RolesIntegrationsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StageHeader
            stage="08"
            label="Roles & integrations"
            heading="Human ownership and system-of-record boundaries"
            center
          >
            No single system automatically determines compliance. Each system owns one truth, and
            handoffs are explicit.
          </StageHeader>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <ul className="flex flex-wrap justify-center gap-2.5">
            {roles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm text-gray-700"
              >
                {role}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-[10px]">
              <img
                src="/images/compliance-workflows/roles-integrations.png"
                alt="Reviewer and approver discussing a workflow handoff"
                className="h-56 w-full object-cover sm:h-64"
              />
              <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent px-4 py-4 text-xs text-white">
                Handoffs between roles are explicit — never inferred from configuration alone.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {/* Sits in a half-width column from lg, so it only reaches four across at xl. */}
            <ul className="grid grid-cols-2 gap-3.5 lg:grid-cols-2 xl:grid-cols-4">
              {systems.map((system) => (
                <li
                  key={system}
                  className="flex items-center justify-center rounded-lg border border-slate-200 px-4 py-4 text-center text-sm text-gray-700"
                >
                  {system}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
