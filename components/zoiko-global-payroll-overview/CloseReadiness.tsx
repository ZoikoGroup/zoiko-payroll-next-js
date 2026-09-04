const readinessStats = [
  { val: "11", label: "Ready", color: "text-green-700" },
  { val: "2", label: "Needs attention", color: "text-yellow-800" },
  { val: "1", label: "Blocked", color: "text-orange-800" },
  { val: "0", label: "Stale", color: "text-slate-500" },
  { val: "3", label: "Not applicable", color: "text-gray-500" },
];

const exceptions = [
  { title: "Brazil — statutory filing pending partner confirmation", owner: "M. Alves", scope: "Legal entity BR-02", cutoff: "Aug 25", action: "View evidence →", barColor: "bg-red-500" },
  { title: "Germany — variance above threshold on 4 records", owner: "K. Fischer", scope: "Payroll group DE-Salaried", cutoff: "Aug 23", action: "Resolve →", barColor: "bg-yellow-600" },
  { title: "Singapore — approver reassignment required", owner: "Payroll ops", scope: "Legal entity SG-01", cutoff: "Aug 24", action: "Reassign →", barColor: "bg-yellow-600" },
];

export default function CloseReadiness() {
  return (
    <section className="w-[1180px] max-w-[1180px] mx-auto px-8 py-20 flex flex-col items-start gap-3">
      {/* Header */}
      <div className="w-[680px] max-w-[680px] pt-[1.62px] flex flex-col items-start">
        <div className="w-64 h-5 relative">
          <div className="absolute left-[0px] top-[-1px] text-sky-700 text-xs font-bold uppercase leading-5 tracking-wide">
            / Close Readiness + Exceptions
          </div>
        </div>
        <div className="pt-3.5 text-sky-950 text-4xl font-extrabold leading-10 whitespace-nowrap">
          No hidden composite score. Just what&apos;s<br/>blocking close.
        </div>
        <div className="w-[640px] max-w-[640px] text-slate-600 text-base font-normal font-['Inter'] leading-6">
          Every jurisdiction sits in one of five readiness states. Every blocker carries an<br/>owner, scope, cutoff and next action — never just a red flag.
        </div>
      </div>

      {/* Stat cards */}
      <div className="w-full pt-8 pb-5 flex items-start gap-3">
        {readinessStats.map((s) => (
          <div key={s.label} className="w-52 p-4 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-100 flex flex-col items-center gap-1">
            <div className={`text-2xl font-extrabold leading-10 ${s.color}`}>{s.val}</div>
            <div className="text-gray-400 text-xs font-bold leading-4 text-center">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Exception rows */}
      {exceptions.map((e) => (
        <div key={e.title} className="w-[1116px] h-[80.75px] px-5 py-4 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-100 inline-flex justify-start items-center gap-4">
          <div className="self-stretch py-px flex justify-start items-start">
            <div className={`w-1.5 self-stretch ${e.barColor} rounded-sm`} />
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-sky-950 text-sm font-bold font-['Inter'] leading-5">{e.title}</div>
            </div>
            <div className="self-stretch flex items-start gap-4">
              <span className="text-gray-400 text-xs font-normal font-['Inter'] leading-5">Owner: </span><span className="text-sky-950 text-xs font-bold font-['Inter'] leading-5">{e.owner}</span>
              <span className="text-gray-400 text-xs font-normal font-['Inter'] leading-5">Scope: </span><span className="text-sky-950 text-xs font-bold font-['Inter'] leading-5">{e.scope}</span>
              <span className="text-gray-400 text-xs font-normal font-['Inter'] leading-5">Cutoff: <span className="text-sky-950 text-xs font-bold font-['Inter'] leading-5">{e.cutoff}</span></span>
            </div>
          </div>
          <div className="w-28 h-5 relative">
            <div className="w-28 left-[8px] top-[-1px] absolute justify-center text-sky-700 text-xs font-bold font-['Inter'] leading-5">{e.action}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
