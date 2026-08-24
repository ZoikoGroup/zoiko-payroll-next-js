const stats = [
  { title: "Close readiness", badge: "On track", badgeBg: "bg-green-500/20", badgeText: "text-green-300", value: "11 / 14", desc: "Markets ready. 2 need attention, 1 blocked.", barW: "w-56", barColor: "bg-green-500" },
  { title: "Jurisdiction status", badge: "Current", badgeBg: "bg-green-500/20", badgeText: "text-green-300", value: "14", desc: "Availability, service model and effective date tracked per market.", barW: "w-full", barColor: "bg-blue-500" },
  { title: "Exceptions", badge: "3 open", badgeBg: "bg-amber-400/20", badgeText: "text-orange-300", value: "3", desc: "Owner, next action and cutoff impact recorded for each.", barW: "w-16", barColor: "bg-amber-400" },
  { title: "Approvals", badge: "On schedule", badgeBg: "bg-green-500/20", badgeText: "text-green-300", value: "92%", desc: "Required stage, authorized role and decision status.", barW: "w-64", barColor: "bg-green-500" },
  { title: "Integration health", badge: "1 degraded", badgeBg: "bg-amber-400/20", badgeText: "text-orange-300", value: "7 / 8", desc: "Connector direction, partial failures and reconciliation.", barW: "w-64", barColor: "bg-amber-400" },
  { title: "Reporting", badge: "Reconciled", badgeBg: "bg-green-500/20", badgeText: "text-green-300", value: "Aug 2026", desc: "Local outcomes plus governed consolidated views, as-of dated.", barW: "w-full", barColor: "bg-blue-500" },
];

export default function ProductProof() {
  return (
    <section className="w-full px-32 py-20 bg-white">
      <div className="w-full max-w-[1180px] mx-auto px-8 flex flex-col items-start gap-11">
        {/* Header */}
        <div className="w-[680px] max-w-[680px] pt-[1.62px] flex flex-col items-start gap-2">
          <div className="w-32 h-5 relative">
            <div className="absolute left-[0px] top-[-1px] text-sky-700 text-xs font-bold uppercase leading-5 tracking-wide">
              / Product Proof
            </div>
          </div>
          <div className="pt-3.5 text-sky-950 text-4xl font-extrabold leading-10">
            The Global Payroll Control Center
          </div>
          <div className="w-[640px] max-w-[640px] text-slate-600 text-base leading-6">
            Executive orientation and operational evidence in a single frame. All data below is synthetic, shown for illustration only.
          </div>
        </div>

        {/* Dark Dashboard */}
        <div className="w-full p-10 bg-cyan-950 rounded-[20px] flex flex-col items-start gap-7 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(at_90%_-10%,rgba(59,130,246,0.3),rgba(59,130,246,0)_60%)]" />

          {/* Top row */}
          <div className="w-full flex items-start justify-between relative z-10">
            <div className="min-w-[480px] flex flex-col gap-1.5">
              <div className="text-white text-xl font-bold leading-8">Global Payroll Control Center</div>
              <div className="w-full max-w-[480px] text-slate-300 text-sm leading-5">
                Scope, readiness, jurisdiction status, exceptions, approvals, integration health and reporting — in one governed view.
              </div>
            </div>
            <div className="px-3.5 pt-1.5 pb-2 bg-white/10 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/20">
              <span className="text-slate-300 text-xs font-bold leading-4">Scope: All entities · Aug 2026 cycle</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="w-full flex flex-col gap-1 relative z-10">
            {stats.map((s) => (
              <div key={s.title} className="w-full p-5 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-[1px] flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm font-bold leading-5">{s.title}</span>
                  <div className={`px-2 py-[3px] rounded-[20px] ${s.badgeBg}`}>
                    <span className={`text-[10px] font-extrabold leading-4 ${s.badgeText}`}>{s.badge}</span>
                  </div>
                </div>
                <div className="pt-2.5 text-white text-2xl font-extrabold leading-10">{s.value}</div>
                <div className="pb-2 text-slate-400 text-xs leading-4">{s.desc}</div>
                <div className={`h-1.5 bg-white/10 rounded-sm overflow-hidden ${s.barW === "w-full" ? "w-full" : ""}`}>
                  <div className={`h-1.5 rounded-sm ${s.barW} ${s.barColor}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
