import SectionLabel from "./SectionLabel";

const pipelineSteps = [
  { title: "Input", desc: "Name, alias, ISO code" },
  { title: "Normalize", desc: "Case, punctuation, diacritics" },
  { title: "Resolve canonical", desc: "One stable jurisdiction ID" },
  { title: "Disambiguate", desc: "If more than one match" },
  { title: "Return status", desc: "Dated, evidenced" },
];

const bullets = [
  "Every result maps to one stable jurisdiction ID",
  "Ambiguous labels require explicit user choice",
  "Conservative typo tolerance — low confidence requires confirmation",
  "Raw free-text isn't retained beyond approved analytics",
];

export default function SearchCanonicalization() {
  return (
    <section className="w-full border-t border-b border-slate-100 bg-white px-8 py-20">
      <div className="mx-auto max-w-[1180px] flex flex-col items-start gap-6">
        {/* Header */}
        <div className="max-w-[825px] flex flex-col items-start gap-2.5 pb-4 pt-[1.63px]">
          <SectionLabel slash>Search, Canonicalization + Disambiguation</SectionLabel>
          <div className="flex flex-col gap-0 pt-3.5">
            <div className="text-3xl font-extrabold       leading-10 text-sky-950">
              Identity resolution — never a guess
            </div>
          </div>
          <div className="text-base font-normal       leading-6 text-slate-600">
            The UI makes it impossible to accidentally show the wrong country&apos;s
            availability.
          </div>
        </div>

        {/* Pipeline Card */}
        <div className="flex w-full flex-wrap items-center justify-center gap-0 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)]">
          {pipelineSteps.map((step, i) => (
            <div key={step.title} className="flex items-center">
              {i > 0 && (
                <span className="px-1 text-base leading-6 text-gray-400">→</span>
              )}
              <div className="flex flex-col items-center gap-[3px] px-5 pt-2.5 pb-3">
                <div className="text-xs font-bold font-['Inter'] leading-5 text-sky-950">
                  {step.title}
                </div>
                <div className="text-center text-xs font-normal font-['Inter'] leading-4 text-gray-400">
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex w-full flex-col items-center gap-12 md:flex-row">
          {/* Explanation */}
          <div className="flex flex-1 flex-col items-start gap-2.5">
            <div className="text-lg font-bold font-['Inter'] leading-7 text-sky-950">
              No match ≠ invented status.
            </div>
            <div className="text-sm leading-5 text-slate-600">
              When a search doesn&apos;t resolve, we show suggested matches and directory
              <br />
              scope — never a guessed availability state.
            </div>
            <div className="flex flex-col gap-[5px] pl-[6px] pt-[3px]">
              {bullets.map((item) => (
                <div key={item} className="flex items-start gap-1.5 text-xs leading-5 text-slate-600">
                  <span>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disambiguation Card */}
          <div className="flex flex-1 flex-col gap-2.5 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)]">
            <div className="text-xs font-extrabold uppercase leading-4 tracking-wide text-sky-700">
              Disambiguation
            </div>
            <div className="text-sm font-bold leading-5 text-sky-950">
              Multiple matches for &quot;Georgia&quot;
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between rounded-lg bg-slate-50 px-3.5 py-2.5">
                <div className="w-28 text-xs leading-5 text-sky-950">
                  Georgia — Country
                </div>
                <div className="rounded-[20px] bg-gray-100 px-2 pb-1 pt-[3px]">
                  <span className="text-[9.5px] font-extrabold leading-4 text-gray-500">
                    Needs review
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between rounded-lg bg-slate-50 px-3.5 py-2.5">
                <div className="w-32 text-xs leading-5 text-sky-950">
                  Georgia — US State
                </div>
                <div className="rounded-[20px] bg-gray-200 px-2 pb-1 pt-[3px]">
                  <span className="text-[9.5px] font-extrabold leading-4 text-green-700">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
