import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const concepts = [
  "Scope",
  "Definition",
  "Source",
  "Freshness",
  "Currency",
  "Variance",
  "Reconciliation",
  "Export",
  "Evidence",
];

export default function DirectAnswerSection() {
  return (
    <section id="direct-answer" className="scroll-mt-24 bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center">
          <Eyebrow>Direct answer</Eyebrow>
          <h2 className="mt-3.5 max-w-[620px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Nine concepts every payroll number depends on.
          </h2>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-7 w-full max-w-[680px] rounded-xl border border-l-4 border-slate-200 border-l-brand bg-white px-6 py-6 text-left sm:px-8"
        >
          <p className="text-sm leading-6 text-brand-dark">
            <span className="font-bold">
              Scope, definition, source, freshness, currency, variance, reconciliation, export and
              evidence.
            </span>{" "}
            Zoiko Payroll reporting resources explain how to interpret governed payroll outcomes
            without hiding any of these — and always link onward to the authority that owns current
            behavior.
          </p>
        </Reveal>

        <Reveal delay={160} className="mt-8 flex flex-wrap justify-center gap-3">
          {concepts.map((concept) => (
            <span
              key={concept}
              className="rounded-[20px] border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold leading-5 text-brand-dark"
            >
              {concept}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
