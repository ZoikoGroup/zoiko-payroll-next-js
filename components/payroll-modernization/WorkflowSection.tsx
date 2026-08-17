import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

type Row = { item: string; tag: string; warn?: boolean };

const checkpoints: Row[] = [
  { item: "Prepare → Calculate", tag: "processor" },
  { item: "Validate", tag: "system + owner" },
  { item: "Review", tag: "reviewer", warn: true },
  { item: "Approve → Complete", tag: "approver" },
];

const integrations: Row[] = [
  { item: "HRIS / HCM — inbound", tag: "healthy" },
  { item: "Finance / ERP — outbound", tag: "partial failure", warn: true },
  { item: "Time & attendance — inbound", tag: "healthy" },
  { item: "Identity — bidirectional", tag: "retrying", warn: true },
];

function ControlList({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <h3 className="border-b border-slate-200 bg-gray-50 px-5 py-4 text-sm font-bold leading-5 text-slate-900">
        {title}
      </h3>
      <div className="px-5">
        {rows.map((row, index) => (
          <div
            key={row.item}
            className={`flex flex-wrap items-center justify-between gap-2 py-3.5 ${
              index < rows.length - 1 ? "border-b border-slate-200" : ""
            }`}
          >
            <span className="flex items-center gap-2.5 text-sm leading-5 text-slate-900">
              <span
                aria-hidden="true"
                className={`flex size-5 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                  row.warn ? "bg-orange-100 text-yellow-700" : "bg-emerald-100 text-green-600"
                }`}
              >
                {row.warn ? "!" : "✓"}
              </span>
              {row.item}
            </span>
            <span className="font-mono text-xs leading-4 text-slate-500">{row.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorkflowSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Workflow, approvals &amp; integrations</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            The payroll lifecycle stays intact through modernization
          </h2>
          <p className="mt-2.5 max-w-3xl text-base leading-6 text-gray-700">
            Material changes can trigger revalidation or reapproval — human authority remains
            responsible for consequential decisions.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <ControlList title="Lifecycle checkpoints" rows={checkpoints} />
          </Reveal>
          <Reveal delay={100}>
            <ControlList title="Integration health" rows={integrations} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
