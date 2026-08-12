import Reveal from "../ui/Reveal";
import ChecklistCard from "./ChecklistCard";
import MediaSplit from "./MediaSplit";

const completedRun = [
  { status: "ok" as const, label: "Approved version", meta: "run-v2" },
  { status: "ok" as const, label: "Completed", meta: "2026-08-01 09:14 UTC" },
  { status: "ok" as const, label: "Final payroll version locked", meta: "final-v2" },
  { status: "ok" as const, label: "Downstream exports sent", meta: "3 systems" },
];

const correctionPath = [
  { status: "warn" as const, label: "Reopen requires a documented reason", meta: "required" },
  { status: "warn" as const, label: "Prior version preserved as superseded", meta: "audit" },
  { status: "ok" as const, label: "New version requires fresh review + approval", meta: "policy" },
  { status: "ok" as const, label: "Historical version remains retrievable", meta: "system" },
];

export default function CompletionSection() {
  return (
    <section className="border-t border-b border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MediaSplit
          reversed
          eyebrow={"Completion · Lock · Reopen"}
          title="What happens after approval — and how a correction is made."
          media={{
            src: "/images/payroll-processing/completion.png",
            alt: "Team wrapping up a completed payroll process",
            label: "Final version",
            value: "final-v2",
          }}
        />

        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <ChecklistCard
              title="run_2026-07-31_US-01"
              badge="Completed"
              badgeClass="bg-green-100 text-green-700"
              rows={completedRun}
            />
          </Reveal>
          <Reveal delay={80}>
            <ChecklistCard
              title="Reopen / correction path"
              badge="governed flow"
              badgeClass="bg-slate-50 font-mono text-slate-500 outline outline-slate-200"
              rows={correctionPath}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
