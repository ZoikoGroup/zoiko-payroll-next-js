import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

/** `detail` is split into the two lines the design sets it on. */
const problems = [
  {
    icon: "icon-clock.svg",
    problem: "A recurring item keeps applying unintentionally",
    detail: ["No end condition was set, so the deduction continues", "past when it should have stopped."],
    control: "See recurring change controls",
  },
  {
    icon: "icon-calendar.svg",
    problem: "A one-time item hits the wrong pay period",
    detail: ["Without a clear effective date, a single change lands on", "an unintended payroll run."],
    control: "See effective date controls",
  },
  {
    icon: "icon-plus.svg",
    problem: "A correction silently overwrites history",
    detail: ["The original value is lost, so no one can reconstruct what", "changed or why."],
    control: "See non-destructive corrections",
  },
  {
    icon: "icon-duplicate.svg",
    problem: "A duplicate item enters through an import",
    detail: ["The same change is applied twice because duplicates", "weren't detected before eligibility."],
    control: "See import validation",
  },
  {
    icon: "icon-check.svg",
    problem: "A change bypasses required review",
    detail: ["A material change reaches payroll without the approval its", "policy requires."],
    control: "See approval linkage",
  },
  {
    icon: "icon-globe.svg",
    problem: "Jurisdiction context is hidden",
    detail: ["A change is applied without visible entity, currency or", "jurisdiction scope."],
    control: "See multi-entity controls",
  },
];

export default function ProblemsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-slate-300 shadow-[0px_14px_34px_-18px_rgba(8,47,73,0.28)]">
              <img
                src="/images/deductions/why-change-control.png"
                alt="Payroll team reviewing ungoverned change impact on screen"
                className="h-80 w-full object-cover sm:h-96"
              />
              <span className="absolute top-4 left-4 rounded-md bg-white/95 px-2.5 py-[5px] font-mono text-xs font-medium leading-4 tracking-tight text-sky-950">
                Where issues surface first
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Why change control matters</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold leading-9 text-sky-950">
              Small payroll changes cause large downstream problems when they aren&rsquo;t governed.
            </h2>
            <p className="mt-3.5 max-w-xl text-base leading-6 text-slate-600">
              These are operational failure modes, not hypothetical risk — each one points to the
              control built to prevent it.
            </p>
          </Reveal>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, index) => (
            <Reveal key={item.problem} delay={(index % 3) * 60}>
              <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white px-4 pt-4 pb-5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-red-100">
                  <img src={`/images/deductions/${item.icon}`} alt="" aria-hidden="true" className="size-4" />
                </span>
                <h3 className="mt-3 text-sm font-bold leading-5 text-sky-950">{item.problem}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-600">
                  {item.detail[0]}
                  <br />
                  {item.detail[1]}
                </p>
                <p className="mt-auto pt-4 text-xs font-semibold leading-4 text-sky-700">
                  {item.control} →
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
