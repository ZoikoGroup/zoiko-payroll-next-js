import Reveal from "../ui/Reveal";

const accessStates = [
  "Too early",
  "Access open",
  "Live",
  "Access problem",
  "Ended",
  "Platform outage",
];

export default function LiveEventAccessSection() {
  return (
    <section className="w-full bg-white py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col items-center gap-6 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[680px] flex-col items-start gap-4">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="h-3.5 w-1.5 rounded-xs bg-sky-600" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Live event access
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950">
            The Join button only appears when access is genuinely open
          </h2>
        </div>

        {/* Access panel */}
        <div className="flex w-full max-w-[560px] flex-col items-center gap-1.5 rounded-2xl bg-white px-9 pt-10 pb-9 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-100">
            <span className="text-lg text-sky-600">◎</span>
          </div>
          <h3 className="pt-2 text-base font-extrabold leading-7 text-sky-950">
            Access opens 15 minutes before start
          </h3>
          <p className="pb-3.5 text-center text-sm font-normal leading-5 text-gray-600">
            This session hasn&apos;t started yet — check back closer to the
            scheduled time.
          </p>
          <button
            type="button"
            className="flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold leading-6 text-sky-950 outline outline-1 outline-offset-[-1px] outline-slate-200 transition-colors duration-200 hover:bg-slate-50"
          >
            Add to calendar
          </button>
        </div>

        {/* Access state pills */}
        <div className="flex flex-wrap items-start justify-center gap-2.5">
          {accessStates.map((state) => (
            <span
              key={state}
              className="rounded-[20px] bg-white px-4 py-2 text-xs font-semibold leading-5 text-sky-950 outline outline-1 outline-offset-[-1px] outline-slate-200"
            >
              {state}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
