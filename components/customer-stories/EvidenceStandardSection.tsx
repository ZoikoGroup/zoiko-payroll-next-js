const legendChips = [
  { label: "Normal", chipClass: "bg-gray-200 text-gray-600" },
  { label: "Review due", chipClass: "bg-orange-100 text-yellow-700" },
  { label: "Qualified evidence", chipClass: "bg-sky-100 text-sky-800" },
  { label: "Metric suppressed", chipClass: "bg-indigo-50 text-gray-400" },
];

const standardCards = [
  { label: "Customer approval", value: "Active consent required" },
  { label: "Evidence basis", value: "Documented & sourced" },
  { label: "Last reviewed", value: "Per story" },
  { label: "Scope", value: "Customer-specific" },
];

export default function EvidenceStandardSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-4 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[900px] flex-col items-start gap-4">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="text-xs font-bold text-sky-600">/</span>
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Evidence standard
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950 whitespace-nowrap">
            Proof credibility, visible before you read a word
          </h2>
        </div>

        {/* Legend chips */}
        <div className="flex flex-wrap items-start justify-center gap-2.5 pt-2">
          {legendChips.map((chip) => (
            <span
              key={chip.label}
              className={`rounded-[20px] px-2.5 pb-[5px] pt-[3px] text-xs font-extrabold leading-4 tracking-tight ${chip.chipClass}`}
            >
              {chip.label}
            </span>
          ))}
        </div>

        {/* Standard cards */}
        <div className="flex flex-wrap items-start justify-center gap-3 pt-3">
          {standardCards.map((card) => (
            <div
              key={card.label}
              className="flex min-w-44 flex-1 flex-col items-start gap-1 rounded-[10px] bg-white px-3.5 py-3 outline outline-1 outline-offset-[-1px] outline-slate-200"
            >
              <span className="text-[10px] font-bold uppercase leading-4 tracking-wide text-gray-400">
                {card.label}
              </span>
              <span className="text-xs font-bold leading-5 text-sky-950">
                {card.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
