import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const phases = [
  { number: "01", title: "Discovery", owner: "customer + zoiko" },
  { number: "02", title: "Data contract", owner: "zoiko" },
  { number: "03", title: "Authorization design", owner: "it-integrations" },
  { number: "04", title: "Mapping / configuration", owner: "payroll-ops" },
  { number: "05", title: "Test", owner: "customer" },
  { number: "06", title: "Parallel / controlled validation", owner: "both" },
  { number: "07", title: "Activation → Operate", owner: "zoiko support" },
];

const ownerChips = ["Customer configuration owner", "Zoiko support owner", "Third-party dependency"];

export default function ImplementationSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl bg-slate-900 p-8 sm:p-12">
            <Eyebrow tone="light">Implementation &amp; support</Eyebrow>
            <h2 className="mt-3.5 max-w-lg text-3xl font-extrabold leading-10 text-white">
              Production readiness has a named owner at every phase.
            </h2>

            <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
              <ol>
                {phases.map((phase) => (
                  <li
                    key={phase.number}
                    className="flex items-center justify-between gap-4 border-b border-white/10 py-3.5"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-xs font-bold text-blue-400">{phase.number}</span>
                      <span className="text-sm text-white">{phase.title}</span>
                    </span>
                    <span className="text-xs text-white/40">{phase.owner}</span>
                  </li>
                ))}
              </ol>

              <img
                src="/images/integrations/implementation-team.png"
                alt="Implementation team working together on an integration rollout"
                loading="lazy"
                className="h-full max-h-96 w-full rounded-xl object-cover"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {ownerChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/20 px-4 py-2.5 text-xs text-white/80"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
