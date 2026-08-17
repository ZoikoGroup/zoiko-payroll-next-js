import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import ControlList, { type ControlRow } from "./ControlList";

const review: ControlRow[] = [
  { item: "Reviewer assigned", tag: "j.alvarez" },
  { item: "Blockers open", tag: "2", state: "warn" },
  { item: "Comparison context set", tag: "vs. prior period" },
];

const approval: ControlRow[] = [
  { item: "Required role", tag: "Approver" },
  { item: "Bound to eligible version", tag: "v3", state: "error" },
  { item: "Escalation path set", tag: "configured" },
];

function Badge({ label, className }: { label: string; className: string }) {
  return (
    <span
      className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold leading-4 ${className}`}
    >
      {label}
    </span>
  );
}

export default function ReviewApprovalSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Review, approvals, deductions &amp; adjustments</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-slate-900">
            Review and approval stay visually distinct
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal>
            <ControlList
              title="Review"
              rows={review}
              badge={<Badge label="In review" className="bg-indigo-50 text-blue-600" />}
            />
          </Reveal>
          <Reveal delay={100}>
            <ControlList
              title="Approval"
              rows={approval}
              badge={<Badge label="Pending" className="bg-orange-100 text-yellow-700" />}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
