import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const waves = [
  { step: "01", title: "Global discovery", description: "Jurisdictions, entities, calendars, providers." },
  { step: "02", title: "Market readiness", description: "Coverage, requirements, roles verified." },
  { step: "03", title: "Core design", description: "Shared model, policy floor, reporting." },
  { step: "04", title: "Wave configuration", description: "Setup, calendars, controls, mappings." },
  { step: "05", title: "Data migration", description: "Mapping, cleansing, reconciliation." },
  { step: "06", title: "Parallel run", description: "Compare outputs, document variance." },
  { step: "07", title: "Go / Hold / Rollback", description: "Decision per market — no auto launch." },
  { step: "08", title: "Wave launch + hypercare", description: "Elevated monitoring and support." },
  { step: "09", title: "Global roll-up", description: "Reporting, access and governance verified." },
  { step: "10", title: "Operate / expand", description: "Review config, connectors, next market." },
];

export default function WaveSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-t-2xl bg-[#0E2340] px-8 py-10">
            <img
              src="/images/multi-jurisdiction/wave-bg.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="relative">
              <Eyebrow tone="light">Implementation by wave</Eyebrow>
              <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-tight break-words sm:text-3xl text-white">
                Market by market — never one global launch.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-6 text-white/70">
                Every wave earns its own Go / Hold / Rollback decision, evidenced at each phase.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-b-2xl border border-t-0 border-[#DCE6EC] bg-[#DCE6EC] sm:grid-cols-3 lg:grid-cols-5">
            {waves.map((wave) => (
              <div key={wave.step} className="bg-white px-4 py-5">
                <p className="font-mono text-xs leading-4 text-[#075E99]">{wave.step}</p>
                <h3 className="mt-2 text-sm font-bold leading-5 text-[#082F49]">{wave.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-[#4E6172]">{wave.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
