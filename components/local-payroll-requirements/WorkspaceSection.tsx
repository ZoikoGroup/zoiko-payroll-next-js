import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const statCards = [
  { value: "42", label: "Configured", color: "text-sky-950" },
  { value: "5", label: "Needs review", color: "text-orange-700" },
  { value: "3", label: "Change detected", color: "text-orange-700" },
  { value: "2", label: "Future effective", color: "text-sky-950" },
  { value: "1", label: "Evidence stale/conflicting", color: "text-orange-700" },
  { value: "6", label: "Not applicable", color: "text-sky-950" },
  { value: "8", label: "Jurisdictions in scope", color: "text-sky-950" },
  { value: "v14", label: "Current requirement-set version", color: "text-sky-950" },
];

const filters = [
  "Jurisdiction ▾",
  "Legal entity ▾",
  "Payroll group ▾",
  "Category ▾",
  "State ▾",
  "Effective window ▾",
  "Owner ▾",
  "Evidence freshness ▾",
];

const rows = [
  {
    requirement: "Payroll calendar",
    category: "Calendar",
    appliesTo: "Germany — all entities",
    state: { label: "Configured", style: "bg-gray-200 text-gray-600 outline-neutral-300" },
    effective: "Live",
    evidence: { label: "Current", style: "bg-gray-200 text-gray-600 outline-neutral-300" },
    owner: "M. Weber",
    action: "None",
  },
  {
    requirement: "Statutory deduction table",
    category: "Calculation",
    appliesTo: "Brazil — payroll group BR-01",
    state: { label: "Needs review", style: "bg-orange-100 text-yellow-700 outline-orange-200" },
    effective: "Live",
    evidence: { label: "Review due", style: "bg-orange-100 text-yellow-700 outline-orange-200" },
    owner: "C. Alvarez",
    action: "Refresh evidence",
  },
  {
    requirement: "Payslip format update",
    category: "Documents",
    appliesTo: "France — all entities",
    state: { label: "Future effective", style: "bg-rose-200 text-pink-800 outline-rose-300" },
    effective: "Oct 2026",
    evidence: { label: "Current", style: "bg-gray-200 text-gray-600 outline-neutral-300" },
    owner: "J. Dubois",
    action: "Validate mapping",
  },
  {
    requirement: "Approval delegation",
    category: "Authority",
    appliesTo: "Japan — HQ entity",
    state: { label: "Change detected", style: "bg-orange-100 text-yellow-700 outline-orange-200" },
    effective: "Live",
    evidence: { label: "Review due", style: "bg-orange-100 text-yellow-700 outline-orange-200" },
    owner: "R. Tanaka",
    action: "Assess impact",
  },
];

export default function WorkspaceSection() {
  return (
    <section className="bg-white px-7 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Local requirements workspace</Eyebrow>
            <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-sky-950">
              The primary proof surface — a real enterprise control surface, not
              a screenshot
            </h2>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={60} className="mt-8">
          <div className="grid grid-cols-4 gap-4 lg:grid-cols-8">
            {statCards.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white p-4 outline outline-1 outline-offset-[-1px] outline-slate-200"
              >
                <span className={`block text-2xl font-extrabold leading-10 ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="block text-xs font-semibold leading-5 text-gray-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={80} className="mt-3.5">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <span
                key={f}
                className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-sky-950 outline outline-1 outline-offset-[-1px] outline-slate-200"
              >
                {f}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Table */}
        <Reveal delay={100} className="mt-5">
          <div className="overflow-x-auto rounded-xl bg-white outline outline-1 outline-offset-[-1px] outline-slate-200">
            <div className="min-w-[900px]">
              {/* Header */}
              <div className="grid grid-cols-8 bg-indigo-50">
                {["Requirement", "Category", "Applies to", "State", "Effective date", "Evidence", "Owner", "Next action"].map((h) => (
                  <div key={h} className="px-3.5 py-3">
                    <span className="text-xs font-bold uppercase tracking-wide text-sky-950">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Rows */}
              {rows.map((r, i) => (
                <div key={r.requirement} className={`grid grid-cols-8 items-center ${i > 0 ? "border-t border-slate-200" : ""}`}>
                  <div className="px-3.5 py-3.5">
                    <span className="text-xs font-bold text-sky-950">{r.requirement}</span>
                  </div>
                  <div className="px-3.5 py-3.5">
                    <span className="text-xs text-sky-950">{r.category}</span>
                  </div>
                  <div className="px-3.5 py-3.5">
                    <span className="text-xs text-sky-950">{r.appliesTo}</span>
                  </div>
                  <div className="px-3.5 py-3">
                    <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold outline outline-1 outline-offset-[-1px] ${r.state.style}`}>
                      {r.state.label}
                    </span>
                  </div>
                  <div className="px-3.5 py-3.5">
                    <span className="text-xs text-sky-950">{r.effective}</span>
                  </div>
                  <div className="px-3.5 py-3">
                    <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold outline outline-1 outline-offset-[-1px] ${r.evidence.style}`}>
                      {r.evidence.label}
                    </span>
                  </div>
                  <div className="px-3.5 py-3.5">
                    <span className="text-xs text-sky-950">{r.owner}</span>
                  </div>
                  <div className="px-3.5 py-3.5">
                    <span className="text-xs text-sky-950">{r.action}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Note */}
        <Reveal delay={120} className="mt-4">
          <div className="rounded-[10px] bg-indigo-50 p-4 outline outline-1 outline-offset-[-1px] outline-slate-200">
            <span className="text-sm font-bold text-sky-950">
              Detail drawer (per requirement):
            </span>
            <span className="text-sm text-sky-950">
              {" "}description, applicability, current configuration reference,
              source/evidence metadata, owner, approvals, version history,
              related controls, downstream impacts.{" "}
            </span>
            <span className="text-sm font-bold text-sky-950">
              Change panel:
            </span>
            <span className="text-sm text-sky-950">
              {" "}current vs. future version, activation date, validation status,
              approvers, first affected payroll cycle.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}