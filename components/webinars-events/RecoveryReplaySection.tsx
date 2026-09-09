import Reveal from "../ui/Reveal";

export default function RecoveryReplaySection() {
  return (
    <section className="w-full py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col items-center gap-5 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[680px] flex-col items-start gap-4">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="h-3.5 w-1.5 rounded-xs bg-sky-600" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Recovery &amp; replay
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950">
            Completed never automatically means a replay exists
          </h2>
        </div>

        {/* Banners */}
        <div className="flex w-full max-w-[760px] flex-col items-start gap-3 pt-2">
          {/* Rescheduled */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-orange-100 px-5 py-4">
            <p className="text-xs font-semibold leading-5 text-sky-950">
              ⚠ This session has been rescheduled. Check the updated date and
              time below.
            </p>
            <button
              type="button"
              className="flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold leading-6 text-sky-950 outline outline-1 outline-offset-[-1px] outline-slate-200 transition-colors duration-200 hover:bg-slate-50"
            >
              Review update
            </button>
          </div>

          {/* Replay pending */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-slate-100 px-5 py-4">
            <p className="text-xs font-semibold leading-5 text-sky-950">
              This session is completed. Replay availability:{" "}
              <span className="text-xs font-black leading-5 text-sky-950">
                Pending approval
              </span>
              .
            </p>
            <button
              type="button"
              className="flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold leading-6 text-sky-950 outline outline-1 outline-offset-[-1px] outline-slate-200 transition-colors duration-200 hover:bg-slate-50"
            >
              Explore alternatives
            </button>
          </div>

          {/* Waitlist */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-sky-100 px-5 py-4">
            <p className="text-xs font-semibold leading-5 text-sky-950">
              Registration is full. Join the waitlist to be notified if space
              opens.
            </p>
            <button
              type="button"
              className="flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 to-sky-700 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-transform duration-200 hover:scale-[1.02]"
            >
              <span className="text-sm font-bold leading-6 text-white">
                Join waitlist
              </span>
            </button>
          </div>
        </div>

        <p className="text-center text-xs font-normal leading-5 text-gray-400">
          Approved recordings, captions, transcripts and slides are shown only
          once confirmed available — never assumed from a completed session.
        </p>
      </Reveal>
    </section>
  );
}
