import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

type Row = { label: string; value: string; warn?: boolean };

const delegation: Row[] = [
  { label: "Scope: Zoiko DE GmbH — Approver", value: "l.hoffmann → m.weber" },
  { label: "Window", value: "Aug 18–25" },
  { label: "Reason on file", value: "required", warn: true },
];

const continuity: Row[] = [
  { label: "Historical payroll preserved", value: "original authority" },
  { label: "New access scope mapped", value: "no re-parenting" },
  { label: "Onboarding checklist", value: "in progress" },
];

function EvidenceCard({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <h3 className="border-b border-slate-200 bg-gray-50 px-5 pt-3.5 pb-4 text-sm font-extrabold leading-6 text-slate-900">
        {title}
      </h3>
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
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] text-xs font-bold leading-4 ${
                  row.warn ? "bg-orange-100 text-yellow-700" : "bg-emerald-50 text-green-600"
                }`}
                aria-hidden="true"
              >
                {row.warn ? "!" : "✓"}
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

export default function ApprovalsSection() {
  return (
    <section className="border-t border-[#E3E7F0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              wrap
              eyebrow="Approvals, delegation + employee/record continuity"
              title="Regional escalation is not a local approval override"
            />
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/international-groups/approvals.png"
              alt="Regional and local payroll owners agreeing a handover"
              className="aspect-[529/208] w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <EvidenceCard title="Delegation" rows={delegation} />
            <EvidenceCard title="Acquisition continuity" rows={continuity} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
