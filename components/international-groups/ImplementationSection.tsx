import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const waves = [
  { step: "01", title: "Foundation" },
  { step: "02", title: "Pilot" },
  { step: "03", title: "Regional Wave" },
  { step: "04", title: "Complex Market Wave" },
  { step: "05", title: "Acquisition / New Entity" },
  { step: "06", title: "Stabilization" },
  { step: "07", title: "Operate" },
];

export default function ImplementationSection() {
  return (
    <section className="border-t border-[#E3E7F0] bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            wrap
            eyebrow="Security, privacy, cross-border data + implementation waves"
            title="A phased rollout that expands from pilot to full operation with validation and control at every stage"
            description="Complex or local-provider markets move only after evidence and design readiness — never as a first wave."
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          {/* Auto-width columns from xl so each wave title holds one line — equal
              columns are too narrow for the longest of the seven, and the seven
              titles together only clear the container at xl. */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-4 xl:grid-cols-[repeat(7,auto)]">
            {waves.map((wave) => (
              <div
                key={wave.step}
                className="flex flex-col items-center bg-white px-4 py-7 text-center"
              >
                <p className="font-mono text-xs leading-4 text-blue-600">{wave.step}</p>
                <h3 className="mt-4 text-sm font-bold leading-5 text-slate-900 xl:whitespace-nowrap">
                  {wave.title}
                </h3>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
