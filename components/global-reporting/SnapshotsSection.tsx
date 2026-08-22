import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

const drillDown = [
  { label: "Aggregate view", value: "Available by default" },
  { label: "Requested detail", value: "Employee-level records" },
  { label: "Re-authorization", value: "User · entity · field · purpose" },
  { label: "Result", value: "Restricted — insufficient purpose", deny: true },
];

type Entry = {
  id: string;
  badge: string;
  badgeClass: string;
  dotClass: string;
  body: string;
  tags?: string[];
};

const timeline: Entry[] = [
  {
    id: "SNAP-2026-04-v2",
    badge: "Issued",
    badgeClass: "bg-emerald-50 text-emerald-700",
    dotClass: "border-emerald-600",
    body: "Generated 2026-05-02, reviewed and issued for distribution. Frozen state — used as the reference for all Apr 2026 comparisons.",
  },
  {
    id: "REV-2026-04-014",
    badge: "Revision",
    badgeClass: "bg-orange-100 text-yellow-700",
    dotClass: "border-violet-600",
    body: "Late-arriving Brazil source data received 2026-05-06. Reason: correction to source feed. Impacted: OTPC-014, 3 exports.",
    tags: ["Metric: OTPC-014", "Snapshot: v2 → v3", "Exports: 3 impacted"],
  },
  {
    id: "SNAP-2026-04-v3",
    badge: "Issued",
    badgeClass: "bg-emerald-50 text-emerald-700",
    dotClass: "border-emerald-600",
    body: "Superseding snapshot generated and issued 2026-05-06 incorporating the Brazil correction.",
  },
];

export default function SnapshotsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-16 sm:py-20">
      <img
        src="/images/global-reporting/section-6.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StageHeader
            stage="Stage 07 — Snapshots & drill-down"
            label="Snapshots, revisions, corrections + drill-down"
            heading="Issued reports are reproducible, not overwritten"
          >
            Issued snapshots are immutable. New or corrected data creates a new snapshot and a
            RevisionRecord — never a silent edit. Drill-down re-authorizes at every step.
          </StageHeader>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[10px]">
              <img
                src="/images/global-reporting/snapshots.png"
                alt="Reporting owner reviewing snapshots and drill-down records"
                className="w-full object-cover"
              />
              {/* Sits below the photo on phones, where it would otherwise overflow it,
                  and overlays the frame from sm up as designed. */}
              <dl className="bg-slate-900/90 px-4 py-3 backdrop-blur-sm sm:absolute sm:inset-x-0 sm:bottom-0 sm:bg-slate-900/75">
                <p className="text-sm font-bold text-white">Drill-down authorization</p>
                {drillDown.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-wrap items-center justify-between gap-2 border-t border-white/15 py-1.5"
                  >
                    <dt className="text-xs text-white/70">{item.label}</dt>
                    <dd
                      className={`font-mono text-xs ${item.deny ? "text-red-300" : "text-white/90"}`}
                    >
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ol>
              {timeline.map((entry, index) => (
                <li key={entry.id} className="flex gap-4 pb-4 last:pb-0">
                  {/* Marker column: dot, then a rule that runs down into the next entry. */}
                  <div className="flex flex-col items-center self-stretch" aria-hidden="true">
                    <span
                      className={`mt-4 size-3 shrink-0 rounded-full border-2 bg-white ${entry.dotClass}`}
                    />
                    {index < timeline.length - 1 ? (
                      <span className="mt-1 w-px flex-1 bg-slate-300" />
                    ) : null}
                  </div>
                  <div className="flex-1 rounded-[10px] border border-slate-200 bg-white px-4 py-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-mono text-xs text-gray-400">{entry.id}</p>
                      <span
                        className={`rounded-md px-2 py-0.5 font-mono text-xs font-semibold ${entry.badgeClass}`}
                      >
                        {entry.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-700">{entry.body}</p>
                    {entry.tags ? (
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-gray-500"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
