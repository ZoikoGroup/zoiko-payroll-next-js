import Image from "next/image";
import Reveal from "../ui/Reveal";

const scenarios = [
  {
    title: "Retroactive change",
    description: "Re-evaluates prior-period eligibility.",
  },
  {
    title: "Off-cycle / supplemental",
    description: "Isolated from the regular run.",
  },
  {
    title: "Final pay / termination",
    description: "Configured logic and cutoffs.",
  },
  {
    title: "Reversal / replacement",
    description: "Linked lineage; nothing erased.",
  },
  {
    title: "Prior-period adjustment",
    description: "Original evidence retained.",
  },
  {
    title: "Multiple assignments",
    description: "Never assumed cross-entity aggregation.",
  },
];

export default function RetroScenariosSection() {
  return (
    <section className="w-full py-[84px] flex flex-col justify-center items-center overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        {/* Header Content */}
        <Reveal className="w-full max-w-[806px] flex flex-col items-center gap-2 text-center">
          <div className="inline-flex items-center gap-2">
            <div className="w-4 h-px bg-[#0A78C3]" />
            <span className="text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest text-[#0A78C3]">
              RETRO &amp; SPECIAL SCENARIOS
            </span>
          </div>
          <h2 className="pt-px text-center text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight sm:leading-9">
            Regular, retro, supplemental and reversal — clearly distinct
          </h2>
          <p className="pb-[0.59px] text-center text-gray-500 text-base font-normal font-['Inter'] leading-6">
            Original evidence is never overwritten or erased.
          </p>
        </Reveal>

        {/* Hero Image with Gradient Overlay */}
        <Reveal delay={100} className="w-full max-w-[1116px] h-56 relative rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/nj.png"
            alt="Retro and special scenarios"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/30 to-transparent pointer-events-none" />
        </Reveal>

        {/* Scenario Cards Grid (3 columns, 2 rows) */}
        <Reveal delay={150} className="w-full max-w-[1116px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {scenarios.map((item) => (
            <div
              key={item.title}
              className="px-3.5 py-3 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-[2.75px] shadow-sm hover:shadow transition-shadow"
            >
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <Image
                  src="/blue.png"
                  alt="✓"
                  width={12}
                  height={12}
                  className="w-3 h-3 object-contain shrink-0"
                />
                <span className="text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
                  {item.title}
                </span>
              </div>
              <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-5 pl-5">
                {item.description}
              </p>
            </div>
          ))}
        </Reveal>

        {/* Notice Box */}
        <Reveal delay={200} className="w-full max-w-[700px] px-4 py-2.5 bg-[#E7EDFD] rounded-r-lg border-l-[3px] border-[#0A78C3] text-center mt-2">
          <p className="text-slate-900 text-sm font-normal font-['Inter'] leading-5">
            Closed historical results are never silently rewritten.
          </p>
        </Reveal>
      </div>
    </section>
  );
}