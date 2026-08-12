import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const layers = [
  { number: "01", title: "Request header", description: "Run, entity, requestor and current stage." },
  {
    number: "02",
    title: "Scope + version banner",
    description: "Exactly which payroll version is under review.",
  },
  {
    number: "03",
    title: "Readiness / blocker summary",
    description: "What's clear to proceed and what isn't, stated plainly.",
  },
  {
    number: "04",
    title: "Role-scoped payroll totals",
    description: "Only the totals this approver is permitted to see.",
  },
  {
    number: "05",
    title: "Material changes",
    description: "What changed since the last time this was reviewed.",
  },
  {
    number: "06",
    title: "Review evidence / exceptions",
    description: "Notes, exceptions and supporting evidence, gathered in one place.",
  },
  {
    number: "07",
    title: "Decision-rights & SoD status",
    description: "Confirms this approver is authorized to decide — before they can.",
  },
  {
    number: "08",
    title: "Decision actions",
    description: "Approve, Return for changes, or Request Context — never one-click.",
  },
];

export default function DecisionWorkspaceSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Decision workspace</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-9 text-sky-950">
            Opening a request moves you from queue to a focused decision
          </h2>
          <p className="mt-4 text-base leading-6 text-slate-600">
            Every layer an approver needs, in the order they need it — scope and version first, decision
            controls last.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <ol>
              {layers.map((layer, index) => (
                <li
                  key={layer.number}
                  className={`flex gap-6 py-4 ${
                    index < layers.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <span className="font-mono text-xs leading-5 text-sky-700">{layer.number}</span>
                  <span>
                    <span className="block text-sm font-bold text-sky-950">{layer.title}</span>
                    <span className="mt-1 block text-xs leading-5 text-slate-600">
                      {layer.description}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-[0px_24px_60px_-26px_rgba(8,19,43,0.32)]">
              <img
                src="/images/payroll-approvals/decision-workspace.png"
                alt="Approver reviewing evidence before a decision"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <p className="absolute bottom-3 left-3.5 rounded bg-[#2F3E4C] px-3 py-2 font-mono text-xs leading-4 text-white">
                Understand the consequence, before committing
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
