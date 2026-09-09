import Reveal from "../ui/Reveal";

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
    <section className="bg-[#F4F8FB] pt-10 sm:pt-14 pb-16 sm:pb-20" id="direct-answer">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
            {/* Tag */}
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-[#0A8FD0]">/</span>
              <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-wide text-[#0A8FD0]">
                Direct answer
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3.5 text-3xl font-extrabold font-['Inter'] leading-9 text-[#051B2B] sm:text-4xl sm:leading-tight">
              Nine concepts every payroll number<br />
              depends on.
            </h2>
          </div>
        </Reveal>

        {/* Description card */}
        <Reveal delay={60}>
          <div className="mx-auto mt-8 max-w-[616px] rounded-xl border-l-4 border-sky-600 bg-white p-6 sm:p-7 text-center shadow-[0px_2px_8px_0px_rgba(10,120,194,0.04)]">
            <p className="text-center text-sm font-bold font-['Plus_Jakarta_Sans'] leading-6 text-sky-950">
              Scope, definition, source, freshness, currency, variance, reconciliation, export
            </p>
            <p className="mt-0.5 text-center text-sm font-normal font-['Plus_Jakarta_Sans'] leading-6 text-sky-950">
              <span className="font-bold">and evidence.</span>{" "}
              Zoiko Payroll reporting resources explain how to interpret<br className="hidden sm:inline" />
              governed payroll outcomes without hiding any of these — and always link onward<br className="hidden sm:inline" />
              to the authority that owns current behavior.
            </p>
          </div>
        </Reveal>

        {/* Concept pills */}
        <Reveal delay={120}>
          <div className="mx-auto mt-7 flex max-w-[1000px] flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {concepts.map((concept) => (
              <span
                key={concept}
                className="inline-flex h-9 items-center justify-center rounded-[20px] border border-[#DCE6EC] bg-white px-4.5 text-xs font-semibold font-['Inter'] leading-5 text-[#051B2B] shadow-[0px_1px_2px_0px_rgba(5,27,43,0.02)] transition-colors hover:border-[#0A78C2]/50"
              >
                {concept}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
