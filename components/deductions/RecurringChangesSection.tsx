import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const footnotes = [
  "Effective: May 01, 2026",
  "Affects: 8 future periods",
  "Prior periods: unchanged, preserved in history",
];

export default function RecurringChangesSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Recurring changes</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold leading-9 text-sky-950">
              Future edits never rewrite what already happened.
            </h2>
            <p className="mt-3.5 max-w-xl text-base leading-6 text-slate-600">
              Editing a recurring item shows the current value, the proposed value, the effective date
              and which future periods are affected.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-2xl border border-slate-300 shadow-[0px_14px_34px_-18px_rgba(8,47,73,0.28)]">
              <img
                src="/images/deductions/recurring-changes.png"
                alt="Payroll administrator editing a recurring item on screen"
                className="h-80 w-full object-cover"
              />
              <span className="absolute top-4 left-4 rounded-md bg-white/95 px-2.5 py-[5px] font-mono text-xs font-medium leading-4 tracking-tight text-sky-950">
                Past stays untouched
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 items-center gap-6 rounded-2xl border border-slate-300 bg-white px-6 py-6 sm:grid-cols-[1fr_auto_1fr]">
            <div>
              <p className="font-mono text-[10px] uppercase leading-4 tracking-tight text-slate-600">
                Current value
              </p>
              <p className="mt-1 text-base font-semibold leading-6 text-slate-500 line-through">
                −$45.00 / month
              </p>
            </div>

            <span className="text-xl text-sky-700" aria-hidden="true">
              →
            </span>

            <div>
              <p className="font-mono text-[10px] uppercase leading-4 tracking-tight text-slate-600">
                Proposed value
              </p>
              <p className="mt-1 text-base font-semibold leading-6 text-sky-950">−$60.00 / month</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
            {footnotes.map((note) => (
              <p key={note} className="text-xs leading-5 text-slate-600">
                {note}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
