import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const entities = [
  {
    title: "Jurisdiction",
    description:
      "Canonical ID, availability state reference, service model, effective scope, local owner.",
  },
  {
    title: "Entity",
    description:
      "Legal entity, employer/payroll role, jurisdiction, authority group, exclusions.",
  },
  {
    title: "Payroll group",
    description:
      "Frequency, calendar, population, currency, provider, processing model.",
  },
  {
    title: "Population",
    description:
      "Categories, count range, source system, effective date, privacy classification.",
  },
  {
    title: "Data / history",
    description:
      "Classes, history period, purpose, retention, transfer and storage handling.",
  },
  {
    title: "Change control",
    description:
      "Every material scope change creates a new version; prior approved manifests stay inspectable.",
  },
];

export default function ScopeManifestSection() {
  return (
    <section className="bg-[#E9F0F8] px-7 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-start gap-6">
            {/* Left: image card */}
            <div className="flex-1 overflow-hidden rounded-2xl bg-white shadow-[0px_1px_2px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/team.png"
                  alt="Discovery workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: text */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 h-5">
                <span className="text-[#0A8FD0] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
                  / Scope manifest + discovery / design
                </span>
              </div>
              <h2 className="pt-3.5 text-[#0A2E4B] text-3xl font-extrabold font-['Inter'] leading-10">
                The canonical boundary for the program
              </h2>
              <p className="mt-4 max-w-xl text-[#5B646B] text-base font-normal font-['Inter'] leading-6">
                Discovery resolves availability, service model, entities,
                populations, current payroll, systems, data, governance and
                constraints before design begins.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <div className="flex flex-col gap-2.5">
            {entities.map((entity) => (
              <div
                key={entity.title}
                className="rounded-[10px] bg-white px-4 py-3 outline outline-1 outline-offset-[-1px] outline-slate-200"
              >
                <h3 className="text-sm font-bold text-sky-950">
                  {entity.title}
                </h3>
                <p className="mt-0.5 text-xs leading-5 text-gray-600">
                  {entity.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}