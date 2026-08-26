const requirements = ["Local calculations", "Deductions", "Payroll calendars", "Records retention", "Approvals", "Currency handling", "Filing / support", "Language support"];

const pipeline = ["Requirement", "Configuration", "Review", "Evidence", "Traceability"];

export default function LocalRequirements() {
  return (
    <section className="w-full px-32 py-20 bg-white border-t border-b border-slate-100">
      <div className="w-full max-w-[1180px] mx-auto px-8 flex flex-col items-start gap-11">
        {/* Header */}
        <div className="w-[680px] max-w-[680px] pt-[1.63px] flex flex-col items-start">
          <div className="w-96 h-5 relative">
            <div className="absolute left-[0px] top-[-1px] text-sky-700 text-xs font-bold uppercase leading-5 tracking-wide">
              / Local Requirements + Compliance Workflows
            </div>
          </div>
          <div className="pt-3.5 text-sky-950 text-4xl font-extrabold leading-10">
            Requirement → configuration → review → evidence.
          </div>
          <div className="w-[640px] max-w-[640px] text-slate-600 text-base leading-6">
            Zoiko does not offer legal advice or claim automatic compliance. It gives payroll and compliance teams a consistent, traceable way to manage local requirements.
          </div>
        </div>

        {/* Two columns */}
        <div className="w-full flex items-start gap-5">
          {/* Requirements checklist */}
          <div className="flex-1 px-6 pt-6 pb-32 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex flex-col gap-3.5">
            <div className="text-sky-950 text-lg font-bold leading-7">Local requirements tracked</div>
            <div className="flex flex-col">
              {requirements.map((r) => (
                <div key={r} className="h-10 py-2.5 border-b border-slate-100 flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 border-2 border-sky-700 rounded-sm" />
                  <span className="text-slate-600 text-sm leading-5">{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance workflow */}
          <div className="flex-1 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-100 overflow-hidden">
            <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200" />
            <div className="px-6 py-5 flex flex-col gap-3.5">
              <div className="text-sky-950 text-lg font-bold leading-7">Compliance workflow</div>
              <div className="flex flex-wrap gap-2">
                {pipeline.map((step, i) => (
                  <div key={step} className="flex items-center">
                    <div className="px-3 pt-[5px] pb-1.5 bg-slate-50 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-slate-100">
                      <span className="text-sky-950 text-xs font-bold leading-4">{step}</span>
                    </div>
                    {i < pipeline.length - 1 && (
                      <span className="text-gray-400 text-xs leading-5 mx-1">→</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-slate-600 text-xs leading-5">
                No claim of guaranteed, universal compliance — each step is documented and reviewable.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
