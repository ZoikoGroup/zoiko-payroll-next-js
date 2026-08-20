const steps = [
  { number: "01", label: "Scope needs" },
  { number: "02", label: "Define contracts" },
  { number: "03", label: "Configure access" },
  { number: "04", label: "Validate evidence" },
  { number: "05", label: "Pilot brief" },
  { number: "06", label: "Establish cadence" },
  { number: "07", label: "Operate" },
];

export default function CrossFunctionalHandoffsSection() {
  return (
    <section className="relative overflow-hidden bg-[#082F49] py-20 sm:py-28">
      <img
        src="/images/business-leaders/cross-functional-handoffs.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,47,73,0.92) 0%, rgba(11,31,63,0.88) 60%, rgba(8,47,73,0.94) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[640px]">
          <p className="text-[13px] font-bold tracking-[0.06em] text-[#8FB4FF] uppercase">
            Cross-Functional Handoffs &amp; Implementation
          </p>
          <h2 className="mt-2 text-[1.4rem] leading-[1.2] font-extrabold tracking-tight text-white lg:text-[22.7px]">
            Ownership stays with specialists. Leaders see, not operate
          </h2>
        </div>

        <div className="mt-8 flex gap-3.5 overflow-x-auto pb-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex min-w-[156px] shrink-0 flex-col items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-[18px] pt-[17px] pb-[18px]"
            >
              <span className="text-[12px] font-bold text-[#2F6FED]">{step.number}</span>
              <span className="text-center text-[12.5px] font-semibold whitespace-nowrap text-white">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
