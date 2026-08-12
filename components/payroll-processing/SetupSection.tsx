import Reveal from "../ui/Reveal";
import ChecklistCard from "./ChecklistCard";
import MediaSplit from "./MediaSplit";

const runScope = [
  { status: "ok" as const, label: "Pay period: Aug 1–15, 2026", meta: "confirmed" },
  { status: "ok" as const, label: "Pay date: Aug 20, 2026", meta: "confirmed" },
  { status: "ok" as const, label: "Entity: Zoiko US Inc.", meta: "confirmed" },
  { status: "ok" as const, label: "Jurisdiction: United States", meta: "confirmed" },
  { status: "ok" as const, label: "Payroll group: Salaried — Semi-monthly", meta: "confirmed" },
];

const inputReadiness = [
  { status: "ok" as const, label: "HR / workforce source", meta: "payroll-ops" },
  { status: "warn" as const, label: "Time & attendance source", meta: "it-integrations" },
  { status: "error" as const, label: "Finance mapping reference", meta: "finance-team" },
  { status: "ok" as const, label: "Currency & rate table", meta: "system" },
];

export default function SetupSection() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MediaSplit
          eyebrow={"Create & scope · Inputs & validation"}
          title="Correct setup, checked before a single calculation runs."
          description="Pay period, entity, jurisdiction and worker population are scoped first — then every input source is checked for readiness."
          media={{
            src: "/images/payroll-processing/setup.png",
            alt: "Payroll team checking input sources before a run",
            label: "Sources checked",
            value: "3 of 3",
          }}
        />

        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <ChecklistCard
              title="Run scope"
              badge="cfg-2026.07-r2"
              badgeClass="bg-slate-50 font-mono text-slate-500 outline outline-slate-200"
              rows={runScope}
            />
          </Reveal>
          <Reveal delay={80}>
            <ChecklistCard
              title="Input readiness"
              badge="3 sources"
              badgeClass="bg-slate-50 font-mono text-slate-500 outline outline-slate-200"
              rows={inputReadiness}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
