import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { PlayIcon } from "../ui/icons";

const meta = [
  { label: "Current", tone: "bg-green-100 text-emerald-600" },
  { label: "Reviewed Aug 2026", tone: "bg-slate-100 text-slate-500" },
  { label: "Payroll Approvals", tone: "bg-slate-100 text-slate-500" },
  { label: "4:12", tone: "bg-slate-100 text-slate-500" },
  { label: "Captions", tone: "bg-slate-100 text-slate-500" },
  { label: "Transcript", tone: "bg-slate-100 text-slate-500" },
  { label: "5 chapters", tone: "bg-slate-100 text-slate-500" },
];

const chapters = [
  { title: "Open the review queue", time: "0:00" },
  { title: "Check readiness and exceptions", time: "0:48" },
  { title: "Open validation context", time: "1:52" },
  { title: "Record the approval decision", time: "2:58" },
  { title: "Confirm the applied state", time: "3:41" },
];

const covers = [
  "Opening the review queue for a scoped period",
  "Reading readiness and exception counts",
  "Recording an approval decision",
  "Confirming the applied, current state",
];

export default function CanonicalWatchSection() {
  return (
    <section id="canonical-watch-page" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Canonical watch page</Eyebrow>
          <h2 className="mt-3.5 max-w-[520px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Every video follows the same trustworthy structure.
          </h2>
          <p className="mt-4 max-w-[660px] text-base leading-6 text-slate-600">
            Task-first title, verified metadata, chapters, transcript and the current authority —
            never a filmstrip with no destination.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
        >
          <p className="border-b border-slate-200 bg-slate-50 px-6 py-3.5 text-xs leading-5 text-slate-500">
            Home / Resources / Product Videos / Review and approve a payroll run
          </p>

          <div className="border-b border-slate-200 px-6 py-6">
            <p className="text-lg font-bold text-brand-dark">Review and approve a payroll run</p>
            <p className="mt-1.5 text-sm leading-6 text-slate-600">
              See where a reviewer checks the run, opens validation context, and records an approval
              decision.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {meta.map((item) => (
                <span
                  key={item.label}
                  className={`rounded-[20px] px-3 py-1.5 text-xs font-semibold leading-4 ${item.tone}`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div className="p-6">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/resources-product-videos/watch-page-player.png"
                  alt="A reviewer approving a payroll run with a colleague"
                  loading="lazy"
                  className="h-56 w-full object-cover sm:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/5 to-brand-dark/40" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
                    <PlayIcon className="h-5 w-5 text-brand-dark" />
                  </span>
                </span>
              </div>

              <p className="mt-6 text-xs font-bold uppercase leading-4 tracking-wide text-brand">
                Chapters
              </p>
              <ul className="mt-2">
                {chapters.map((chapter, index) => (
                  <li
                    key={chapter.title}
                    className="flex items-center justify-between gap-4 border-b border-dashed border-slate-200 py-2.5 last:border-b-0"
                  >
                    <span className="text-sm leading-5 text-brand-dark">
                      {index + 1}. {chapter.title}
                    </span>
                    <span className="shrink-0 text-sm font-semibold leading-5 text-slate-500">
                      {chapter.time}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs font-bold uppercase leading-4 tracking-wide text-brand">
                Transcript (excerpt)
              </p>
              <p className="mt-2 rounded-lg bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-600">
                &ldquo;…once every readiness item shows Ready, the reviewer opens the run summary.
                Any remaining exception is shown with its owner before an approval decision can be
                recorded…&rdquo;
              </p>
            </div>

            <div className="border-t border-slate-200 bg-slate-50/60 p-6 lg:border-l lg:border-t-0">
              <p className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                What this demonstration covers
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {covers.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
                    <span aria-hidden="true" className="text-slate-400">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Before you start
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Requires an approved reviewer role — verified in Product Documentation.
              </p>

              <p className="mt-6 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Current instructions
              </p>
              <Link
                href="/resources/documentation"
                className="mt-2 block rounded-lg border border-slate-200 bg-white px-4 py-3.5 transition-colors duration-200 hover:border-brand/30"
              >
                <span className="block text-sm font-bold text-brand-dark">
                  Product Documentation
                </span>
                <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                  Exact current steps, fields and states.
                </span>
              </Link>

              <p className="mt-6 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Need help
              </p>
              <Link
                href="/resources/help-center"
                className="mt-2 block rounded-lg border border-slate-200 bg-white px-4 py-3.5 transition-colors duration-200 hover:border-brand/30"
              >
                <span className="block text-sm font-bold text-brand-dark">Help Center</span>
                <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                  Troubleshooting and support routes.
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-200 px-6 py-5 sm:flex-row sm:flex-wrap">
            <Link
              href="/resources/help-center"
              className="rounded-lg border border-slate-200 px-5 py-3 text-center text-sm font-bold text-brand-dark transition-colors duration-200 hover:border-brand/30"
            >
              Report a mismatch
            </Link>
            <Link
              href="#video-library"
              className="rounded-lg border border-slate-200 px-5 py-3 text-center text-sm font-bold text-brand-dark transition-colors duration-200 hover:border-brand/30"
            >
              Related demonstrations
            </Link>
            <Link
              href="/resources/documentation"
              className="rounded-lg bg-brand-gradient px-5 py-3 text-center text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
            >
              See current documentation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
