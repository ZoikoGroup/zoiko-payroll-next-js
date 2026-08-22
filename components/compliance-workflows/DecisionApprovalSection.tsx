import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

const roles = [
  {
    role: "Reviewer",
    title: "Assesses completeness",
    detail:
      "Checks scope, evidence and implementation context; raises unresolved questions before any decision is made.",
  },
  {
    role: "Decision maker",
    title: "Selects the outcome",
    detail:
      "Chooses from a fixed outcome set and records rationale — never an automatic or opaque model score.",
  },
  {
    role: "Approver",
    title: "Independent sign-off",
    detail:
      "Required for high-risk decisions, exceptions, change activation or closure. Restricted self-approval is never permitted.",
  },
];

const outcomes = [
  "Accept",
  "Accept with Conditions",
  "Request More Evidence",
  "Approved Exception",
  "Remediation Required",
  "Blocked",
  "Not Applicable",
];

export default function DecisionApprovalSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <img
        src="/images/compliance-workflows/decision-approval-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-cyan-950/95 via-cyan-950/90 via-60% to-cyan-950/95"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StageHeader
            stage="05"
            label="Decision & approval"
            heading="Reviewer, decision maker and approver stay separate roles"
            tone="light"
          >
            Never &quot;System approved.&quot; Every outcome carries a named role, rationale and —
            for high-risk cases — an independent approval gate.
          </StageHeader>
        </Reveal>

        <Reveal delay={80} className="mt-7">
          <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-3">
            {roles.map((item) => (
              <div
                key={item.role}
                className="rounded-[10px] bg-white/20 p-4 outline outline-1 -outline-offset-1 outline-slate-200"
              >
                <p className="font-mono text-xs uppercase tracking-wide text-sky-400">
                  {item.role}
                </p>
                <h3 className="mt-1.5 font-display text-base font-bold text-white">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-stone-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-5">
          <ul className="flex flex-wrap gap-2">
            {outcomes.map((outcome) => (
              <li
                key={outcome}
                className="rounded-[20px] bg-white/20 px-3 py-1.5 font-mono text-xs text-white outline outline-1 -outline-offset-1 outline-slate-200"
              >
                {outcome}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="mt-5">
          <div className="flex flex-col gap-4 rounded-[10px] bg-violet-100/20 p-5 outline outline-1 -outline-offset-1 outline-violet-200 sm:flex-row">
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white shadow-[0px_8px_24px_-12px_rgba(15,22,38,0.12),0px_1px_2px_0px_rgba(15,22,38,0.06)]"
              aria-hidden="true"
            >
              <img src="/images/compliance-workflows/lock.svg" alt="" className="size-4" />
            </span>
            <div>
              <h3 className="font-display text-sm font-bold text-indigo-50">
                Independent approval required — WF-2026-0409
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-zinc-300">
                Outcome: Approved Exception. Reviewer S. Goh cannot approve their own review; routed
                to a second approver before the exception activates. Compliance Workflow approval is
                separate from Payroll Approvals and does not authorize payroll completion.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
