export default function ControlBoundarySection() {
  const steps = [
    { label: "Inputs & Validation", active: false },
    { label: "Calculations", active: true },
    { label: "Approvals", active: false },
    { label: "Payments Orchestration", active: false },
    { label: "Close / Audit", active: false },
  ];

  const features = [
    {
      title: "AI is advisory only",
      description: "Explains variance, locates rules.",
    },
    {
      title: "Never authoritative",
      description: "Can't invent rates or edit components.",
    },
    {
      title: "Lineage preserved",
      description: "Actor, time, scope, config version.",
    },
    {
      title: "High-impact override",
      description: "Maker-checker approval required.",
    },
    {
      title: "Minimized exposure",
      description: "No sensitive values in logs or URLs.",
    },
    {
      title: "No unverified claims",
      description: 'No "bank-grade" or certification claims.',
    },
  ];

  return (
    <section className="w-full py-20 bg-[#F9FAFB] flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1440px] px-40 flex flex-col justify-start items-center gap-8">
        {/* Header Content */}
        <div className="w-[660px] max-w-[660px] flex flex-col justify-start items-start gap-2">
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="w-4 h-px bg-sky-600" />
            <div className="text-center text-sky-600 text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest">
              CONTROL BOUNDARY &amp; AI
            </div>
          </div>
          <div className="self-stretch pt-px flex flex-col justify-start items-center">
            <h2 className="text-center text-slate-900 text-4xl font-extrabold font-['Inter'] leading-9">
              Calculation is not payment
            </h2>
          </div>
          <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-center">
            <p className="text-center text-gray-500 text-base font-normal font-['Inter'] leading-6">
              A calculated net amount is never presented as funded, transmitted or settled.
            </p>
          </div>
        </div>

        {/* Steps Flow */}
        <div className="pt-0.5 inline-flex justify-center items-center flex-wrap content-center gap-2">
          {steps.map((step, index) => (
            <div key={index} className="inline-flex items-center gap-2">
              <div
                className={`px-4 py-2 rounded-[100px] outline outline-1 outline-offset-[-1px] inline-flex flex-col justify-start items-start ${
                  step.active
                    ? "bg-violet-100 outline-sky-600"
                    : "bg-white outline-slate-200"
                }`}
              >
                <span
                  className={`text-xs font-semibold font-['Inter'] leading-4 ${
                    step.active ? "text-sky-600" : "text-slate-900"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="inline-flex items-center justify-center">
                  <img src="grey.png" alt="arrow" className="w-2.5 h-2.5 object-contain" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content Body: Image & Feature Cards Grid (2 columns, vertically centered) */}
        <div className="w-full self-stretch inline-flex justify-center items-center gap-14">
          {/* Image Container */}
          <div className="flex-1 h-[320px] relative rounded-2xl flex flex-col justify-center items-start overflow-hidden">
            <img
              className="w-full h-full object-cover absolute inset-0 rounded-2xl"
              src="bl.png"
              alt="Control boundary and AI"
            />
          </div>

          {/* Feature List (2 Columns Grid) */}
          <div className="flex-1 grid grid-cols-2 gap-3.5 self-center">
            {features.map((item, index) => (
              <div
                key={index}
                className="px-3.5 py-3 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-center items-start gap-[2.75px]"
              >
                <div className="self-stretch inline-flex justify-start items-center gap-1.5">
                  <div className="w-3 h-4 inline-flex flex-col justify-center items-center">
                    <img src="blue.png" alt="check" className="w-2.5 h-2.5 object-contain" />
                  </div>
                  <span className="text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
                    {item.title}
                  </span>
                </div>
                <div className="self-stretch pb-[0.75px] flex flex-col justify-start items-start">
                  <span className="text-gray-500 text-xs font-normal font-['Inter'] leading-5">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}