import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip, { type ChipTone } from "./StatusChip";

type Row = { label: string; value: string; state: "ok" | "warn" | "fail" };

const stateStyles: Record<Row["state"], { box: string; glyph: string }> = {
  ok: { box: "bg-emerald-50 text-green-600", glyph: "✓" },
  warn: { box: "bg-orange-100 text-yellow-700", glyph: "!" },
  fail: { box: "bg-rose-100 text-red-600", glyph: "×" },
};

const review: Row[] = [
  { label: "Bound to version", value: "run-v3", state: "ok" },
  { label: "Unresolved blockers", value: "1", state: "warn" },
  { label: "Variance basis stated", value: "vs. prior period", state: "ok" },
];

const approval: Row[] = [
  { label: "Material change since approval", value: "rate correction", state: "fail" },
  { label: "Role: Approver", value: "m.chen", state: "ok" },
  { label: "Prior decision preserved", value: "history retained", state: "ok" },
];

function DecisionCard({
  title,
  status,
  tone,
  rows,
}: {
  title: string;
  status: string;
  tone: ChipTone;
  rows: Row[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-gray-50 px-5 py-4">
        <h3 className="text-sm font-extrabold leading-6 text-slate-900">{title}</h3>
        <StatusChip tone={tone}>{status}</StatusChip>
      </div>
      <div className="px-5 py-4">
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`flex flex-wrap items-center justify-between gap-3 py-2 ${
              index < rows.length - 1 ? "border-b border-slate-200" : ""
            }`}
          >
            <span className="flex items-center gap-2.5">
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] text-xs font-bold leading-4 ${stateStyles[row.state].box}`}
                aria-hidden="true"
              >
                {stateStyles[row.state].glyph}
              </span>
              <span className="text-xs leading-5 text-slate-900">{row.label}</span>
            </span>
            <span className="font-mono text-xs leading-4 text-slate-500">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ReviewApprovalSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F6F8FC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              wrap
              eyebrow="Review + approval governance"
              title="Decisions bind to the current version — never a stale one"
            />
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/payroll-teams/review-approval.png"
              alt="A reviewer working through payroll figures"
              className="aspect-[537/209] w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <DecisionCard title="Review" status="In review" tone="info" rows={review} />
            <DecisionCard
              title="Approval"
              status="Reapproval required"
              tone="blocked"
              rows={approval}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
