const levels = [
  { level: "Level 1", name: "Organization / Group", desc: "Top-level owner" },
  { level: "Level 2", name: "Region / Market", desc: "Where used" },
  { level: "Level 3", name: "Jurisdiction", desc: "Country / territory" },
  { level: "Level 4", name: "Legal Entity", desc: "Registered employer" },
  { level: "Level 5", name: "Payroll Group", desc: "Population + rules" },
  { level: "Level 6", name: "Payroll Cycle", desc: "Period + evidence" },
];

const features = [
  { title: "Clear ownership", desc: "Each level has a named owner and authorized role — never an ambiguous shared responsibility." },
  { title: "Versioned records", desc: "Changes at any level are versioned, timestamped and attributable to the responsible party." },
  { title: "Traceable evidence", desc: "Every payroll cycle links back up the chain to its owning entity and jurisdiction." },
];

export default function ScopeHierarchy() {
  return (
    <section className="w-[1180px] max-w-[1180px] mx-auto px-8 py-20 flex flex-col items-start gap-8">
      {/* Header */}
      <div className="w-[824px] pt-[1.63px] flex flex-col items-start gap-2">
        <div className="w-64 h-5 relative">
          <div className="absolute left-[0px] top-[-1px] text-sky-700 text-xs font-bold uppercase leading-5 tracking-wide">
            / Scope Hierarchy + Ownership
          </div>
        </div>
        <div className="pt-3.5 text-sky-950 text-4xl font-extrabold leading-10">
          One structure, from organization to payroll cycle
        </div>
        <div className="w-[640px] max-w-[640px] text-slate-600 text-base leading-6">
          Every record in Zoiko Payroll is scoped and owned along the same chain — so responsibility and evidence are always traceable.
        </div>
      </div>

      {/* Hierarchy flow */}
      <div className="w-full flex items-center gap-0 overflow-hidden">
        {levels.map((l, i) => (
          <div key={l.level} className="flex items-center">
            <div className="w-40 min-w-[160px] px-4 py-4 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex flex-col items-center gap-[3px]">
              <div className="text-sky-700 text-[10px] font-extrabold uppercase leading-4 tracking-wide">{l.level}</div>
              <div className="pt-[5px] text-sky-950 text-sm font-bold leading-5 text-center">{l.name}</div>
              <div className="text-gray-400 text-xs leading-4 text-center">{l.desc}</div>
            </div>
            {i < levels.length - 1 && (
              <div className="w-5 h-0.5 bg-slate-200 relative mx-0.5">
                <div className="absolute right-[-6px] top-[-4px] border-l-[6px] border-t-4 border-b-4 border-l-slate-200 border-t-transparent border-b-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Feature cards */}
      <div className="w-full flex items-start gap-5">
        {features.map((f) => (
          <div key={f.title} className="w-96 p-6 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex flex-col gap-2">
            <div className="w-9 h-9 bg-slate-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-100 flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-sky-700 rounded-sm" />
            </div>
            <div className="pt-1.5 text-sky-950 text-lg font-bold leading-7">{f.title}</div>
            <div className="text-slate-600 text-sm leading-5">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
