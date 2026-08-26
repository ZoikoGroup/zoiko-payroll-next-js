import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const states = [
  { label: "Minor edit", tone: "bg-[#EEF2FF] text-brand-dark" },
  { label: "Material correction", tone: "bg-amber-100 text-amber-800" },
  { label: "Superseded", tone: "bg-sky-100 text-sky-800" },
  { label: "Withdrawn", tone: "bg-slate-100 text-slate-600" },
  { label: "Retracted", tone: "bg-red-100 text-red-700" },
];

export default function CorrectionsSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[820px] text-center">
          <div className="flex justify-center">
            <Eyebrow>Corrections, supersession &amp; withdrawal</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            The public record is never silently rewritten
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-7 flex flex-wrap justify-center gap-2.5">
          {states.map((state) => (
            <span
              key={state.label}
              className={`rounded-[20px] px-3.5 py-1.5 text-xs font-bold ${state.tone}`}
            >
              {state.label}
            </span>
          ))}
        </Reveal>

        <Reveal
          delay={160}
          className="mx-auto mt-6 max-w-[980px] rounded-xl border border-l-4 border-slate-200 border-l-brand bg-white px-6 py-5"
        >
          <p className="text-sm leading-6 text-brand-dark">
            <span className="font-bold">No silent rewrite:</span> materially changing a headline,
            availability claim, metric, quote, relationship, person/title attribution or legal
            statement without an appropriate correction trail is a release failure. Superseded
            announcements point to the newer authoritative record while preserving the historical
            one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
