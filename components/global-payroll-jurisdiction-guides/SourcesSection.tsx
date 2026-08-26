import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const states = [
  {
    label: "Current",
    tone: "bg-slate-200 text-slate-600",
    meaning: "Reviewed and accurate as published",
  },
  {
    label: "Review due",
    tone: "bg-orange-100 text-yellow-700",
    meaning: "Flagged for scheduled review",
  },
  {
    label: "Under correction",
    tone: "bg-rose-200 text-pink-800",
    meaning: "Affected sections annotated or withheld",
  },
];

export default function SourcesSection() {
  return (
    <section className="border-t border-slate-200 bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Sources, freshness &amp; corrections</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Provenance and change history, always visible.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((state, index) => (
            <Reveal
              key={state.label}
              delay={index * 60}
              className="flex flex-wrap items-center gap-3 rounded-[10px] border border-slate-200 bg-white px-4 py-3"
            >
              <span
                className={`shrink-0 rounded-[20px] px-2.5 py-1 text-xs font-bold leading-4 ${state.tone}`}
              >
                {state.label}
              </span>
              <span className="text-xs leading-5 text-brand-dark">{state.meaning}</span>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={200}
          className="mt-6 rounded-[10px] border border-l-[3px] border-slate-200 border-l-brand bg-sky-100 px-6 py-5"
        >
          <p className="text-sm leading-6 text-brand-dark">
            <span className="font-bold">Report an issue.</span> If a guide appears out of date or
            incorrect, use the in-guide reporting link — corrections are versioned, never silently
            edited.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
