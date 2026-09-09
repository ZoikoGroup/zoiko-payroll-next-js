const statusChips = [
  { label: "Upcoming", chipClass: "bg-sky-100 text-sky-800" },
  { label: "Live", chipClass: "bg-red-200 text-stone-700" },
  { label: "Completed", chipClass: "bg-slate-100 text-gray-400" },
  { label: "On demand", chipClass: "bg-gray-200 text-gray-600" },
  { label: "Open", chipClass: "bg-gray-200 text-gray-600" },
  { label: "Waitlist", chipClass: "bg-orange-100 text-yellow-700" },
  { label: "Closed", chipClass: "bg-slate-100 text-gray-400" },
  { label: "Not required", chipClass: "bg-slate-100 text-gray-400" },
  { label: "Invite-only", chipClass: "bg-slate-100 text-gray-400" },
];

const metaCards = [
  { label: "Source time zone", value: "CET (UTC+1)" },
  { label: "Your local time", value: "Auto-detected" },
  { label: "Accessibility", value: "Captions confirmed" },
  { label: "Replay", value: "Pending" },
  { label: "Last updated", value: "Aug 30, 2026" },
];

export default function EventStatusSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-6 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[680px] flex-col items-start gap-3.5">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="h-3.5 w-1.5 rounded-xs bg-sky-600" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Event status
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950">
            Every lifecycle state, clearly labeled
          </h2>
        </div>

        {/* Status chips */}
        <div className="flex flex-wrap items-start justify-center gap-2.5">
          {statusChips.map((chip) => (
            <span
              key={chip.label}
              className={`rounded-[20px] px-2.5 pb-[5px] pt-[3px] text-xs font-extrabold leading-4 tracking-tight ${chip.chipClass}`}
            >
              {chip.label}
            </span>
          ))}
        </div>

        {/* Meta cards */}
        <div className="flex flex-wrap items-start justify-center gap-3 pt-1">
          {metaCards.map((card) => (
            <div
              key={card.label}
              className="flex w-52 flex-col items-start gap-1 rounded-[10px] bg-white px-3.5 py-3 outline outline-1 outline-offset-[-1px] outline-slate-200"
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
