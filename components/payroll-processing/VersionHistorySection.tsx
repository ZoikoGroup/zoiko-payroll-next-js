import Reveal from "../ui/Reveal";
import MediaSplit from "./MediaSplit";

const versions = [
  {
    title: "run-v3 — Reviewer flagged material change",
    meta: "2026-08-15 07:40 UTC · j.alvarez · reviewer",
    note: "Gross pay variance of +2.1% vs. prior period flagged for approver attention.",
    current: true,
  },
  {
    title: "run-v2 — Recalculated after correction (superseded)",
    meta: "2026-08-15 06:02 UTC · system · calc-v14",
    note: "Retroactive rate adjustment applied for 1 affected record.",
  },
  {
    title: "run-v1 — Initial calculation (superseded)",
    meta: "2026-08-14 22:11 UTC · system · calc-v13",
    note: "First calculation pass against prepared inputs.",
  },
];

export default function VersionHistorySection() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MediaSplit
          reversed
          eyebrow="Version history"
          title="Who changed what, when, and why."
          media={{
            src: "/images/payroll-processing/version-history.png",
            alt: "Payroll team reviewing documents and records together",
            label: "Versions retained",
            value: "3",
          }}
        />

        <Reveal delay={80} className="mt-11">
          <ol className="rounded-2xl border border-slate-200 bg-white px-6">
            {versions.map((version, index) => (
              <li
                key={version.title}
                className={`flex gap-3 py-5 ${
                  index < versions.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <span
                  className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                    version.current ? "bg-blue-600" : "bg-slate-400"
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-bold leading-5 text-slate-900">{version.title}</p>
                  <p className="mt-1 font-mono text-xs leading-4 text-slate-500">{version.meta}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-600">{version.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
