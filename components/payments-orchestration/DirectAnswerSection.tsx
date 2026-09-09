export default function DirectAnswerSection() {
  return (
    <section className="w-full py-20 bg-gray-50 flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1440px] px-40 flex flex-col justify-start items-center gap-6">
        {/* Header Content */}
        <div className="w-[660px] max-w-[660px] flex flex-col justify-start items-start gap-2">
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="w-4 h-px bg-sky-600" />
            <div className="text-center text-sky-600 text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest">
              DIRECT ANSWER
            </div>
          </div>
          <div className="self-stretch pt-px flex flex-col justify-start items-center">
            <h2 className="text-center text-slate-900 text-4xl font-extrabold font-['Inter'] leading-9">
              How does payroll calculation work?
            </h2>
          </div>
          <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-center">
            <p className="text-center text-gray-500 text-base font-normal font-['Inter'] leading-6">
              Validated inputs meet effective-dated rules to produce gross-to-net, in context.
            </p>
          </div>
        </div>

        {/* Workflow Diagram */}
        <div className="w-full h-20 relative">
          {/* Step 1 */}
          <div className="px-4 py-2 left-[24.27px] top-[10px] absolute bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start">
            <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-4">
              Validated inputs
            </span>
          </div>
          <div className="absolute left-[162.97px] top-[18.50px] flex items-center justify-center">
            <img src="grey.png" alt="arrow" className="w-3.5 h-3.5 object-contain" />
          </div>

          {/* Step 2 */}
          <div className="px-4 py-2 left-[203.97px] top-[10px] absolute bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start">
            <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-4">
              Establish context
            </span>
          </div>
          <div className="absolute left-[349.38px] top-[18.50px] flex items-center justify-center">
            <img src="grey.png" alt="arrow" className="w-3.5 h-3.5 object-contain" />
          </div>

          {/* Step 3 */}
          <div className="px-4 py-2 left-[389.88px] top-[10px] absolute bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start">
            <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-4">
              Calculate earnings
            </span>
          </div>
          <div className="absolute left-[542.98px] top-[18.50px] flex items-center justify-center">
            <img src="grey.png" alt="arrow" className="w-3.5 h-3.5 object-contain" />
          </div>

          {/* Step 4 */}
          <div className="px-4 py-2 left-[583.98px] top-[10px] absolute bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start">
            <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-4">
              Statutory logic
            </span>
          </div>
          <div className="absolute left-[715px] top-[18.50px] flex items-center justify-center">
            <img src="grey.png" alt="arrow" className="w-3.5 h-3.5 object-contain" />
          </div>

          {/* Step 5 */}
          <div className="px-4 py-2 left-[753.50px] top-[10px] absolute bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start">
            <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-4">
              Deductions &amp; costs
            </span>
          </div>
          <div className="absolute left-[908.61px] top-[18.50px] flex items-center justify-center">
            <img src="grey.png" alt="arrow" className="w-3.5 h-3.5 object-contain" />
          </div>

          {/* Step 6 */}
          <div className="px-4 py-2 left-[946.61px] top-[10px] absolute bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start">
            <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-4">
              Net + accumulators
            </span>
          </div>

          {/* Branch Arrow & Reviewable Result */}
          <div className="absolute left-[464.80px] top-[56.50px] flex items-center justify-center">
            <img src="grey.png" alt="arrow" className="w-3.5 h-3.5 object-contain rotate-90" />
          </div>
          <div className="px-4 py-2 left-[504.80px] top-[48px] absolute bg-violet-100 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-sky-600 inline-flex flex-col justify-start items-start">
            <span className="text-sky-600 text-xs font-semibold font-['Inter'] leading-4">
              Reviewable result
            </span>
          </div>
        </div>

        {/* Notice Box */}
        <div className="w-[700px] max-w-[700px] px-4 py-2.5 bg-violet-100 rounded-tr-lg rounded-br-lg border-l-[3px] border-sky-600 flex flex-col justify-start items-center">
          <p className="text-center text-slate-900 text-sm font-normal font-['Inter'] leading-5">
            Only inputs eligible under readiness/approval rules are used — no double counting.
          </p>
        </div>
      </div>
    </section>
  );
}