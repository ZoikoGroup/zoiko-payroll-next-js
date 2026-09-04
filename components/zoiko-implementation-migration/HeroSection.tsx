import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stats = [
  { value: "18", label: "Active programs" },
  { value: "450k+", label: "Payroll records governed" },
  { value: "99.9%", label: "Gate evidence completeness" },
];

export default function HeroSection() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pb-[76px] pt-[35px]">
        {/* Radial glow */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(8,145,178,0.35)_0%,rgba(15,23,42,1)_45%,rgba(2,6,23,1)_100%)]"
          aria-hidden="true"
        />
        {/* Blue orb */}
        <div
          className="absolute right-0 top-16 h-96 w-[864px] bg-[radial-gradient(circle,rgba(56,189,248,0.2)_0%,transparent_70%)] blur-[5px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <Eyebrow tone="light">Implementation and migration</Eyebrow>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Control global payroll implementation from discovery to
                stabilization
              </h1>
              <p className="mt-6 max-w-lg text-base leading-6 text-slate-300">
                Plan markets, entities, requirements, data, integrations,<br />
                validation, parallel run and cutover through one governed<br />
                implementation program — with evidence and decision<br />
                rights visible at every gate.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <span className="rounded-[30px] bg-sky-600 px-5 py-2.5 text-center text-sm font-extrabold text-white">
                  Contact Support
                </span>
                <span className="rounded-[30px] border border-white/30 px-5 py-2.5 text-center text-sm font-bold text-white">
                  Check jurisdiction availability
                </span>
              </div>

              <div className="mt-8 flex gap-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-0.5">
                    <span className="text-2xl font-extrabold leading-10 text-blue-300">
                      {stat.value}
                    </span>
                    <span className="text-xs leading-5 text-slate-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative min-h-[460px]">
                {/* Main card */}
                <div className="flex h-[460px] items-start justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-sky-900 to-sky-950 shadow-[0px_30px_70px_rgba(0,0,0,0.45)] outline outline-1 outline-offset-[-1px] outline-white/10">
                  <div className="relative h-[460px] w-[593px] overflow-hidden bg-gradient-to-b from-sky-800/30 to-transparent">
                    <img
                      src="/ci.png"
                      alt="Implementation team reviewing payroll rollout"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating card - Wave status */}
                <div className="absolute left-[-30px] top-6 w-48 rounded-2xl bg-slate-900/90 p-4 shadow-[0px_12px_30px_rgba(0,0,0,0.35)] outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-sm">
                  <span className="block text-xs font-bold tracking-wide text-slate-400">
                    WAVE 3 OF 5
                  </span>
                  <span className="mt-1 block text-lg font-extrabold text-white">
                    Nordics · On track
                  </span>
                  <span className="mt-1.5 inline-block rounded-full bg-blue-300/20 px-2 py-[3px] text-xs font-bold text-blue-300">
                    Parallel Run
                  </span>
                </div>

                {/* Floating card - Next gate */}
                <div className="absolute right-0 bottom-8 w-44 rounded-2xl bg-slate-900/90 p-4 shadow-[0px_12px_30px_rgba(0,0,0,0.35)] outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-sm">
                  <span className="block text-xs font-bold tracking-wide text-slate-400">
                    NEXT GATE
                  </span>
                  <span className="mt-0.5 block text-lg font-extrabold text-white">
                    Launch decision
                  </span>
                  <span className="mt-1.5 inline-block rounded-full bg-blue-300/20 px-2 py-[3px] text-xs font-bold text-blue-300">
                    Awaiting approver
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}