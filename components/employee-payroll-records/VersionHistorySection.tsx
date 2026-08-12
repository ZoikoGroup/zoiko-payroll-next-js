import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { ArrowRightIcon } from "../ui/icons";

export default function VersionHistorySection() {
  return (
    <section className="border-b border-slate-200 bg-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Record detail &amp; version history</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-9 text-sky-950">
            Superseded doesn&rsquo;t mean gone.
          </h2>
          <p className="mt-3 max-w-xl text-base leading-6 text-slate-600">
            When a record is corrected, the current version is shown clearly — and the prior version
            remains available, marked as superseded, not deleted.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <div className="flex flex-col items-start gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center">
            <div className="flex-1">
              <p className="text-[10px] uppercase leading-4 text-slate-600">
                Superseded · Mar 15, 2026
              </p>
              <p className="mt-1 text-sm font-medium leading-5 text-slate-600 line-through">Version 1</p>
            </div>

            <ArrowRightIcon className="h-4 w-5 shrink-0 text-sky-700" aria-hidden="true" />

            <div className="flex-1">
              <p className="text-[10px] uppercase leading-4 text-slate-600">Current · Mar 18, 2026</p>
              <p className="mt-1 text-sm font-semibold leading-5 text-sky-950">Version 2</p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            <p className="text-xs leading-4 text-slate-600">Reason: Correction to deduction amount</p>
            <p className="text-xs leading-4 text-slate-600">Both versions remain visible in history</p>
          </div>

          <div className="mt-5 border-t border-slate-200 pt-5">
            <span className="inline-flex border-b border-slate-300 pb-0.5 text-sm font-semibold leading-5 text-sky-950">
              View full history →
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
