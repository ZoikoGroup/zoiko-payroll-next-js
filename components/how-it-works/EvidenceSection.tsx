import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const timeline = [
  {
    time: "08 Aug · 09:14 UTC",
    event: "Prepare completed",
    actor: "Payroll Operator · P. Sharma",
  },
  {
    time: "08 Aug · 09:41 UTC",
    event: "Calculated — Run v1",
    actor: "System · config DE-2026-01",
  },
  {
    time: "08 Aug · 10:20 UTC",
    event: "Validation issue raised — negative net pay",
    actor: "Auto-flagged, owner assigned",
  },
  {
    time: "08 Aug · 15:02 UTC",
    event: "Issue resolved, recalculated — Run v3",
    actor: "Payroll Operator · P. Sharma",
  },
  {
    time: "09 Aug · 08:47 UTC",
    event: "Reviewed & accepted for approval",
    actor: "Reviewer · A. Meyer",
  },
  {
    time: "09 Aug · 14:02 UTC",
    event: "Approved — version-bound to Run v3",
    actor: "Approver · R. Novak",
  },
  {
    time: "09 Aug · 14:03 UTC",
    event: "Completed",
    actor: "Payroll Administrator",
  },
];

export default function EvidenceSection() {
  return (
    <section className="border-b border-[#EAF0F6] bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Evidence, history &amp; auditability</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              Attributable evidence, not a decorative badge.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
              Run history, input/change history, validation history, review and approval evidence — shown
              as a timeline you can inspect, not a certification claim.
            </p>
            <img
              src="/images/how-it-works/evidence.png"
              alt="Reconciling payroll records against supporting documentation"
              loading="lazy"
              className="mt-8 h-auto w-full rounded-2xl"
            />
          </Reveal>

          <Reveal delay={100}>
            <ol className="relative border-l border-slate-200 pl-6">
              {timeline.map((entry) => (
                <li key={entry.time} className="relative pb-7 last:pb-0">
                  <span
                    className="absolute -left-[30px] top-1 h-3 w-3 rounded-full border-2 border-white bg-brand"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-medium text-slate-400">{entry.time}</p>
                  <p className="mt-1 text-sm font-semibold text-brand-dark">{entry.event}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{entry.actor}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
