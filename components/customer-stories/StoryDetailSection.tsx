import Image from "next/image";
import Reveal from "../ui/Reveal";

const journeySteps = [
  {
    title: "Challenge & customer need",
    description:
      "What prompted the search for a new payroll operating model.",
  },
  {
    title: "Approach & what changed",
    description: "The configuration and rollout approach taken.",
  },
  {
    title: "Implementation journey",
    description: "Key milestones from kickoff to go-live.",
  },
  {
    title: "Outcome evidence",
    description: "Approved, sourced results with full methodology.",
  },
  {
    title: "Lessons & considerations",
    description:
      "What the customer would tell a peer considering the same path.",
  },
];

export default function StoryDetailSection() {
  return (
    <section className="w-full bg-white py-20">
      <Reveal className="mx-auto flex max-w-[1116px] flex-col items-center gap-3.5 px-6">
        {/* Header */}
        <div className="flex max-w-[1100px] flex-col items-center gap-4">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="text-xs font-bold text-sky-600">/</span>
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Story detail experience
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950 whitespace-nowrap">
            The richest proof surface — challenge to outcome, fully sourced
          </h2>
        </div>

        <p className="text-center text-xs font-bold uppercase leading-4 tracking-wide text-gray-400">
          Illustrative structure — not a real customer story
        </p>

        {/* Banner */}
        <div className="relative min-h-56 w-full overflow-hidden rounded-3xl">
          <Image
            src="/nh.png"
            alt="Story detail page banner"
            fill
            className="object-cover"
          />
          {/* Figma: bg-linear-42 = 42deg gradient */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(42deg,rgba(15,23,42,0.90) 0%,rgba(8,47,73,0.75) 55%,rgba(2,132,199,0.40) 100%)" }} />
          <div className="relative flex max-w-[620px] flex-col items-start gap-4 p-8 md:p-12">
            <div className="flex h-5 w-full items-center gap-1.5">
              <span className="text-xs font-bold text-blue-300">/</span>
              <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-300">
                Challenge to outcome
              </span>
            </div>
            {/* Figma: "Every section of a story detail page is sourced and<br/>reviewed." */}
            <p className="text-xl font-extrabold leading-6 text-white">
              Every section of a story detail page is sourced and
              <br />reviewed.
            </p>
          </div>
        </div>

        {/* At a glance + approved quote */}
        <div className="flex w-full flex-col items-stretch justify-center gap-5 pt-3 lg:flex-row">
          {/* At a glance */}
          <div className="flex-1 rounded-xl bg-white px-4 py-4 outline outline-1 outline-offset-[-1px] outline-slate-200">
            <h3 className="pb-3 text-sm font-bold leading-6 text-sky-950">At a glance</h3>
            {[
              { label: "Organization", value: "Example Organization" },
              { label: "Scope", value: "Multi-entity, EU & UK" },
              { label: "Status", value: "Published, current", chip: "bg-emerald-100 text-emerald-800" },
              { label: "Last reviewed", value: "Aug 2026" },
            ].map((row, index, rows) => (
              <div key={row.label} className={`flex items-center justify-between gap-4 py-2.5 ${index < rows.length - 1 ? "border-b border-slate-200" : ""}`}>
                <span className="text-xs font-semibold leading-5 text-sky-950">{row.label}</span>
                {row.chip ? (
                  <span className={`rounded-[20px] px-2.5 py-1 text-xs font-extrabold leading-4 tracking-tight ${row.chip}`}>{row.value}</span>
                ) : (
                  <span className="text-xs font-normal leading-5 text-gray-400">{row.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Approved customer voice — Figma: pb-32, quote has <br/> */}
          <div className="flex flex-1 flex-col items-start gap-2.5 rounded-xl bg-white px-4 pb-32 pt-4 outline outline-1 outline-offset-[-1px] outline-slate-200">
            <h3 className="text-sm font-bold leading-6 text-sky-950">Approved customer voice</h3>
            {/* Figma: "...every published quote<br/>resolves to exact approved wording and attribution." */}
            <p className="text-base font-normal leading-6 text-sky-950">
              &quot;Illustrative quote fragment shown here — every published quote
              <br />resolves to exact approved wording and attribution.&quot;
            </p>
          </div>
        </div>

        {/* Implementation journey timeline */}
        <h3 className="pt-5 text-center text-base font-extrabold leading-7 text-sky-950">
          Implementation journey
        </h3>
        <div className="relative flex max-w-[640px] flex-col items-start pl-7 pt-1">
          <span className="absolute left-[8px] top-[11px] h-72 w-0.5 bg-slate-200" />
          {journeySteps.map((step) => (
            <div
              key={step.title}
              className="relative flex w-full flex-col items-start gap-0.5 pb-5 last:pb-0"
            >
              <h4 className="text-sm font-bold leading-5 text-sky-950">
                {step.title}
              </h4>
              <p className="text-xs font-normal leading-5 text-gray-400">
                {step.description}
              </p>
              <span className="absolute -left-7 top-[3px] flex h-4 w-4 items-center justify-center rounded-full bg-sky-600 outline outline-2 outline-offset-[-2px] outline-white shadow-[0px_0px_0px_1px_rgba(10,143,208,1.00)]" />
            </div>
          ))}
        </div>

        {/* Footer chips */}
        <div className="flex flex-wrap items-start justify-center gap-2.5 pt-3">
          <span className="rounded-[20px] bg-white px-4 py-2 text-xs font-semibold leading-5 text-sky-950 outline outline-1 outline-offset-[-1px] outline-slate-200">
            Systems &amp; integrations (where approved)
          </span>
          <span className="rounded-[20px] bg-white px-4 py-2 text-xs font-semibold leading-5 text-sky-950 outline outline-1 outline-offset-[-1px] outline-slate-200">
            Sources &amp; corrections
          </span>
        </div>
      </Reveal>
    </section>
  );
}
