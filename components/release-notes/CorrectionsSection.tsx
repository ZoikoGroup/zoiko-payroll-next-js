import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { AlertTriangleIcon } from "../ui/icons";

const revisions = [
  {
    revision: "Rev. 3 — Corrected",
    summary: "Applicability scope narrowed to current-tier accounts",
    date: "Aug 14, 2026",
  },
  {
    revision: "Rev. 2 — Published",
    summary: "Added reconciliation field reference table",
    date: "Aug 06, 2026",
  },
  {
    revision: "Rev. 1 — Published",
    summary: "Initial verified release note",
    date: "Aug 05, 2026",
  },
];

export default function CorrectionsSection() {
  return (
    <section className="border-t border-[#DCE6EC] bg-[#F8FAFC] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-2xl bg-brand-dark px-5 py-8 sm:px-10 sm:py-10">
          <img
            src="/images/release-notes/corrections.png"
            alt=""
            loading="lazy"
            className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-25 lg:block"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(8,47,73,0.98) 0%, rgba(8,47,73,0.85) 55%, rgba(79,169,222,0.55) 100%)",
            }}
          />

          <div className="relative max-w-[640px]">
            <Eyebrow tone="light">Known issues, corrections &amp; revision history</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-tight sm:text-3xl tracking-tight text-white">
              Historical facts are never silently rewritten.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Corrections are versioned and publicly visible. Rolled-back or withdrawn notes stay
              accessible rather than disappearing.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-6 flex items-start gap-3 rounded-2xl bg-[#FBEAEA] px-5 py-4">
          <AlertTriangleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#C23A3A]" />
          <p className="text-sm leading-6 text-slate-700">
            <span className="font-bold text-[#C23A3A]">Corrected — Aug 14, 2026.</span> The original
            applicability scope for REL-2026-109 incorrectly included Enterprise-tier accounts on
            legacy reporting. Scope has been narrowed; see revision history below.
          </p>
        </Reveal>

        <div className="mt-4 space-y-3">
          {revisions.map((revision, index) => (
            <Reveal key={revision.revision} delay={140 + index * 60}>
              <div className="flex flex-col gap-1 rounded-[10px] border border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-sm font-bold text-brand-dark sm:w-56 sm:shrink-0">
                  {revision.revision}
                </span>
                <span className="flex-1 text-sm text-slate-600">{revision.summary}</span>
                <span className="shrink-0 text-xs text-slate-400">{revision.date}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320} className="mt-4 rounded-r-lg border-l-4 border-brand bg-[#EAF3FA] px-5 py-4">
          <p className="text-sm leading-6 text-slate-700">
            Live incidents are never listed here — check{" "}
            <Link
              href="/resources/system-status"
              className="font-bold text-brand transition-colors duration-200 hover:text-brand-dark"
            >
              System Status
            </Link>{" "}
            for current service health.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
