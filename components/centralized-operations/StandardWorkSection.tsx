import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const meta = [
  "Owner: L. Faber",
  "Effective: Jan 01, 2026",
  "Reason: Local statutory requirement",
];

const split = [
  {
    title: "Stays common",
    body: "Status vocabulary, shared checklists, calendar structure, reporting dimensions and integration security standards.",
  },
  {
    title: "Stays local",
    body: "Actual dates, frequencies, timezones, approval thresholds, local fields and connector ownership.",
  },
];

export default function StandardWorkSection() {
  return (
    <section className="border-t border-[#DCE6EC] bg-[#EAF1F6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Standard work &amp; local variation</Eyebrow>
          <h2 className="mt-3.5 max-w-3xl pb-4 text-2xl font-extrabold leading-8 break-words text-[#082F49] sm:text-3xl sm:leading-9">
            Standardize the language and evidence — not the local payroll rule
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-col items-stretch gap-4 rounded-xl border border-[#DCE6EC] bg-white px-5 py-4 lg:flex-row lg:items-center">
            <div className="flex-1">
              <p className="font-mono text-[10px] uppercase leading-4 text-[#4E6172]">
                Global template
              </p>
              <p className="mt-1 text-sm font-semibold leading-5 text-[#082F49]">
                Standard close checklist, 6 steps
              </p>
            </div>

            <span className="shrink-0 text-[#075E99]" aria-hidden="true">
              →
            </span>

            <div className="flex-1">
              <p className="font-mono text-[10px] uppercase leading-4 text-[#4E6172]">
                DE-Standard override
              </p>
              <p className="mt-1 text-sm font-semibold leading-5 text-[#082F49]">
                +1 local step: works council notice
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-3.5">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {meta.map((item) => (
              <span key={item} className="text-xs leading-5 text-[#4E6172]">
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-3.5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {split.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="h-full rounded-xl border border-[#DCE6EC] bg-white px-5 py-5">
                <h3 className="font-mono text-xs uppercase leading-4 tracking-wider text-[#075E99]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-[#4E6172]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
