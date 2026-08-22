import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

const record = [
  { label: "Jurisdiction", value: "Brazil" },
  { label: "Entity / group", value: "Filial Sul — Payroll Grp 3" },
  { label: "Requirement", value: "13th-salary filing v2.0" },
  { label: "Owner", value: "R. Alves" },
  { label: "Trigger", value: "Scheduled annual review" },
  { label: "Findings", value: "1 open question" },
  { label: "Decision", value: "Pending — awaiting evidence" },
  { label: "Downstream impact", value: "Global Reporting status" },
];

const evidence = [
  {
    id: "EVI-8841",
    status: "Current",
    statusClass: "text-emerald-600",
    body: "Filing confirmation · Source: Receita Federal portal · v3 · Reviewed 2026-04-02",
    link: "Linked to Decision D-2026-0413-A",
  },
  {
    id: "EVI-8842",
    status: "Review due",
    statusClass: "text-yellow-700",
    body: "Payroll register export · Source: local HRIS · v2 · Collected 2026-03-18",
    link: "Awaiting reviewer sign-off",
  },
  {
    id: "EVI-8779",
    status: "Superseded",
    statusClass: "text-gray-400",
    body: "Prior filing confirmation · v2 · Retained for history, not active",
    link: "Superseded by EVI-8841",
  },
];

export default function WorkflowRecordSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StageHeader
            stage="04"
            label="Workflow record + evidence packet"
            heading="The central object connecting requirement to decision"
            center
          >
            Every evidence item carries source, type, owner, version, freshness and confidentiality
            — and links directly to the decision it supported. Generic attachments are never treated
            as proof.
          </StageHeader>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="relative overflow-hidden rounded-[10px]">
            <img
              src="/images/compliance-workflows/evidence-packet.png"
              alt="Reviewer working through an evidence packet before a compliance decision"
              className="h-56 w-full object-cover sm:h-72"
            />
            <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent px-4 py-4 text-xs text-white">
              Every reviewed document keeps its source, version and reviewer attached.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-6">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-slate-200 bg-slate-200 lg:grid-cols-2">
            <div className="bg-white px-6 py-6">
              <h3 className="font-display text-base font-bold text-gray-900">
                <span aria-hidden="true">📄</span> Workflow Record — WF-2026-0413
              </h3>
              <dl className="mt-4">
                {record.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 py-2.5 last:border-b-0"
                  >
                    <dt className="font-mono text-xs uppercase tracking-wide text-gray-400">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-gray-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-white px-6 py-6">
              <h3 className="font-display text-base font-bold text-gray-900">
                <span aria-hidden="true">🔗</span> Evidence Packet
              </h3>
              <ul className="mt-4 space-y-3">
                {evidence.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-lg border border-slate-200 px-4 py-3.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-mono text-xs text-gray-400">{item.id}</p>
                      <p className={`text-xs font-medium ${item.statusClass}`}>{item.status}</p>
                    </div>
                    <p className="mt-1.5 text-sm leading-5 text-gray-700">{item.body}</p>
                    <p className="mt-1.5 font-mono text-xs text-blue-600">
                      <span aria-hidden="true">↳</span> {item.link}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
