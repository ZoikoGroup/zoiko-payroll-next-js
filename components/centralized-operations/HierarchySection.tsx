import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { OrgIcon, EntityIcon, PeopleIcon, CalendarIcon } from "./icons";

const levels = [
  {
    label: "Org",
    name: "Acme Group",
    detail: "Administrative boundary",
    Icon: OrgIcon,
    iconClass: "bg-[#4E6172]",
    emphasis: false,
  },
  {
    label: "Legal entity",
    name: "Acme DE GmbH",
    detail: "Employing entity",
    Icon: EntityIcon,
    iconClass: "bg-[#2563C9]",
    emphasis: true,
  },
  {
    label: "Payroll group",
    name: "DE-Standard",
    detail: "EUR · Monthly",
    Icon: PeopleIcon,
    iconClass: "bg-[#2F7A52]",
    emphasis: true,
  },
  {
    label: "Payroll cycle",
    name: "Apr 1–15, 2026",
    detail: "Stage: Validate",
    Icon: CalendarIcon,
    iconClass: "bg-[#9C7A1F]",
    emphasis: false,
  },
];

const central = [
  "Portfolio visibility and standards",
  "Coordination and escalation framework",
  "Approval architecture and integration standards",
  "Close monitoring and reporting definitions",
];

const local = [
  "Preparation, calculation and validation",
  "Local configuration within the policy floor",
  "Required approval authority within scope",
  "System-of-record responsibility for their data",
];

export default function HierarchySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Operating hierarchy</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-8 break-words text-[#082F49] sm:text-3xl sm:leading-9">
            Central governance and local authority, coexisting by design
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {levels.map((level) => (
                <div
                  key={level.label}
                  className={`rounded-xl border px-5 py-5 text-center ${
                    level.emphasis ? "border-sky-600 bg-sky-50" : "border-[#DCE6EC] bg-white"
                  }`}
                >
                  <span
                    className={`inline-flex size-7 items-center justify-center rounded-lg text-white ${level.iconClass}`}
                  >
                    <level.Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <p className="mt-3 font-mono text-[10px] uppercase leading-4 text-[#4E6172]">
                    {level.label}
                  </p>
                  <p className="mt-1 text-sm font-bold leading-5 text-[#082F49]">{level.name}</p>
                  <p className="mt-1 text-xs leading-5 text-[#4E6172]">{level.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative h-full overflow-hidden rounded-xl">
              <img
                src="/images/centralized-operations/hierarchy.png"
                alt="Central and local payroll teams aligning on scope"
                className="h-64 w-full object-cover lg:h-full"
              />
              <span className="absolute bottom-4 left-4 rounded-md bg-[#082F49]/85 px-3 py-1.5 font-mono text-xs leading-4 text-white">
                Global standards, local authority — together
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-[#DCE6EC] border-t-[3px] border-t-[#2563C9] bg-white px-6 py-5">
              <h3 className="text-sm font-bold leading-5 text-[#082F49]">
                Central governance controls
              </h3>
              <ul className="mt-3 flex flex-col gap-1.5">
                {central.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[#4E6172]">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-[#4E6172]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-xl border border-[#DCE6EC] border-t-[3px] border-t-[#2F7A52] bg-white px-6 py-5">
              <h3 className="text-sm font-bold leading-5 text-[#082F49]">Local / entity roles retain</h3>
              <ul className="mt-3 flex flex-col gap-1.5">
                {local.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[#4E6172]">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-[#4E6172]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
