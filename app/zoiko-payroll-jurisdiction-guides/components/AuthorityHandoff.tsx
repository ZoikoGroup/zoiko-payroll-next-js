const systems = [
  {
    name: "Local Requirements",
    guideExplains: "Requirement categories & applicability",
    systemOwns: "Local Payroll Requirements",
  },
  {
    name: "Compliance",
    guideExplains: "Evidence quality & review roles",
    systemOwns: "Compliance Workflows",
  },
  {
    name: "Multi-Entity",
    guideExplains: "Jurisdiction vs. legal entity concepts",
    systemOwns: "Multi-Entity Payroll",
  },
  {
    name: "Global Reporting",
    guideExplains: "Reporting scope & metric definitions",
    systemOwns: "Global Reporting",
  },
];

export default function AuthorityHandoff() {
  return (
    <div className="w-full px-32 py-20 bg-white">
      <div className="w-full max-w-[1180px] mx-auto px-8 flex flex-col items-start gap-9">
        {/* Header */}
        <div className="w-[660px] max-w-[660px] flex flex-col items-start gap-3">
          <div className="w-full h-5 relative">
            <div className="w-4 h-0.5 absolute bg-blue-600 mt-[8.30px]" />
            <div className="absolute left-[24px] top-[-1px] text-blue-600 text-xs font-bold uppercase leading-5 tracking-wide">
              Authority handoff matrix
            </div>
          </div>
         <div className="w-[700px] text-slate-900 text-3xl font-extrabold leading-9">
  The guide explains. The authoritative system
  <br />
  owns the current state.
</div>
        </div>

        {/* System cards */}
        <div className="w-full flex items-start gap-4">
          {systems.map((sys) => (
            <div key={sys.name} className="flex-1 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col overflow-hidden">
              <div className="px-4 py-4 bg-cyan-950">
                <span className="text-white text-sm font-bold leading-5">{sys.name}</span>
              </div>
              <div className="px-4 pt-3.5 pb-6 flex flex-col gap-2.5">
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-500 text-[9.50px] font-bold uppercase leading-4 tracking-tight font-['Inter']">Guide explains</span>
                  <span className="text-slate-900 text-xs leading-4">{sys.guideExplains}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-500 text-[9.50px] font-bold uppercase leading-4 tracking-tight font-['Inter']">System owns</span>
                  <span className="text-slate-900 text-xs leading-4">{sys.systemOwns}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
