import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const steps = [
  {
    title: "Discover",
    description: "Market scope, entities, groups, calendars and populations.",
  },
  { title: "Configure", description: "Structure, calendars, roles, policies and reporting." },
  { title: "Prepare data", description: "Mapping, validation and source ownership." },
  {
    title: "Validate & parallel test",
    description: "Scenarios, permissions, calculations and reconciliation.",
  },
  { title: "Launch & optimize", description: "Governed cutover, monitoring and change review." },
];

export default function ImplementationSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#16294D] via-[#0F2142] to-[#0B1A33] py-16 sm:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">Implementation, migration &amp; adoption</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white">
            A governed path from discovery to a stable operation
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          {/* Vertical rail below lg, horizontal rail from lg up. */}
          <div className="flex flex-col lg:grid lg:grid-cols-5">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              return (
                <div
                  key={step.title}
                  className={`relative flex gap-4 lg:block lg:gap-0 lg:pb-0 ${
                    isLast ? "" : "pb-8"
                  }`}
                >
                  {!isLast && (
                    <span
                      className="absolute top-5 bottom-0 left-2.25 w-px bg-white/25 lg:hidden"
                      aria-hidden="true"
                    />
                  )}

                  <div className="flex shrink-0 items-start lg:items-center">
                    <span
                      className="size-5 shrink-0 rounded-full border-[3px] border-blue-500 bg-white"
                      aria-hidden="true"
                    />
                    {!isLast && (
                      <span className="hidden h-px flex-1 bg-white/25 lg:block" aria-hidden="true" />
                    )}
                  </div>

                  <div className="lg:mt-4 lg:pr-6">
                    <h3 className="text-sm font-bold leading-5 text-white">{step.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-white/55">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
