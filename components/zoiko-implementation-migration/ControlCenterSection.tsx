export default function ImplementationControlCenter() {
  return (
    <section className="w-full bg-white py-20 border-t border-slate-100 flex justify-center items-center">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-start items-start gap-2.5">
          <div className="inline-flex items-center gap-1.5 h-5">
            <span className="text-[#0A8FD0] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
              / One program. Full control.
            </span>
          </div>
          
          <div className="pt-3.5">
            <h2 className="text-[#0A2E4B] text-3xl font-extrabold font-['Inter'] leading-10">
              Every gate, evidence and decision<br />— in one place
            </h2>
          </div>

          <div className="w-full max-w-[640px] pb-6">
            <p className="text-[#5B646B] text-base font-normal font-['Inter'] leading-6">
              The Implementation Control Center replaces spreadsheets and side-<br />
              channel approvals with one governed operating surface for every<br />
              market wave.
            </p>
          </div>

          <div className="px-5 py-2.5 bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] inline-flex justify-center items-center cursor-pointer hover:opacity-95 transition-opacity">
            <span className="text-center text-white text-sm font-bold font-['Inter'] leading-5">
              Explore the control center
            </span>
          </div>
        </div>

        {/* Right Column (2x2 Grid) */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1: Scope manifest */}
          <div className="p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-1.5 shadow-sm">
            <div className="size-9 rounded-[19px] overflow-hidden inline-flex justify-center items-center bg-sky-100">
              <img
                src="/Background (62).png"
                alt="Scope manifest"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-2 flex flex-col justify-start items-start">
              <h3 className="text-sky-950 text-base font-bold font-['Inter'] leading-6">Scope manifest</h3>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-gray-600 text-xs font-normal font-['Inter'] leading-5">
                Canonical jurisdiction, entity and<br />
                payroll-group boundaries —<br />
                versioned on every change.
              </p>
            </div>
          </div>

          {/* Card 2: Migration lineage (Dark) */}
          <div className="px-5 pt-5 pb-6 bg-sky-950 rounded-2xl flex flex-col justify-start items-start gap-1.5 shadow-sm">
            <div className="size-9 rounded-[19px] overflow-hidden inline-flex justify-center items-center bg-blue-300">
              <img
                src="/Background (63).png"
                alt="Migration lineage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-2 flex flex-col justify-start items-start">
              <h3 className="text-white text-base font-bold font-['Inter'] leading-6">Migration lineage</h3>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-slate-300 text-xs font-normal font-['Inter'] leading-5">
                Source snapshot to reconciliation,<br />
                fully traceable with versioned<br />
                mappings.
              </p>
            </div>
          </div>

          {/* Card 3: Parallel-run variance */}
          <div className="p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-1.5 shadow-sm">
            <div className="size-9 rounded-[19px] overflow-hidden inline-flex justify-center items-center bg-sky-100">
              <img
                src="/Background (64).png"
                alt="Parallel-run variance"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-2 flex flex-col justify-start items-start">
              <h3 className="text-sky-950 text-base font-bold font-['Inter'] leading-6">Parallel-run variance</h3>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-gray-600 text-xs font-normal font-['Inter'] leading-5">
                Source vs. target comparison against<br />
                approved tolerances — never a<br />
                hidden score.
              </p>
            </div>
          </div>

          {/* Card 4: Launch governance */}
          <div className="p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-1.5 shadow-sm">
            <div className="size-9 rounded-[19px] overflow-hidden inline-flex justify-center items-center bg-sky-100">
              <img
                src="/Background (65).png"
                alt="Launch governance"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-2 flex flex-col justify-start items-start">
              <h3 className="text-sky-950 text-base font-bold font-['Inter'] leading-6">Launch governance</h3>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-gray-600 text-xs font-normal font-['Inter'] leading-5">
                GO / HOLD / PARTIAL GO / ROLLBACK<br />
                — every decision signed and<br />
                attributable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}