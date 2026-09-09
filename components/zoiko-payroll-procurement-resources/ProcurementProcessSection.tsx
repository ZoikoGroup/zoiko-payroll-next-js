import Reveal from "../ui/Reveal";

export default function ProcurementProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Discover",
      description: "Pricing, plans, scope",
      highlighted: false,
    },
    {
      number: 2,
      title: "Build pack",
      description: "Commercial + legal + security",
      highlighted: false,
    },
    {
      number: 3,
      title: "Due diligence",
      description: "Security, privacy, RFP",
      highlighted: false,
    },
    {
      number: 4,
      title: "Legal review",
      description: "Quote, order, DPA",
      highlighted: false,
    },
    {
      number: 5,
      title: "Onboarding",
      description: "Tax, corporate, invoicing",
      highlighted: false,
    },
    {
      number: 6,
      title: "Order & implementation",
      description: "Authorized order begins",
      highlighted: false,
    },
    {
      number: 7,
      title: "Service Commencement",
      description: "Production begins when approved",
      highlighted: true,
    },
  ];

  return (
    <section className="bg-[#EFF4F7] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#0A78C2]">/</span>
                <span className="text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide text-[#0A78C2]">
                  Procurement process
                </span>
              </div>
              <h2 className="max-w-[640px] text-3xl font-extrabold font-['Inter'] leading-9 text-[#051B2B]">
                From discovery to Service Commencement.
              </h2>
            </div>

            {/* Timeline Main Card */}
            <div className="relative flex flex-col gap-9 overflow-hidden rounded-[20px] bg-[#051B2B] p-7 sm:p-10">
              {/* Glow Accent */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#0A78C2]/20 blur-3xl" />

              {/* Timeline Steps */}
              <div className="relative grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
                {steps.map((step, idx) => (
                  <div
                    key={step.number}
                    className="relative flex flex-col items-center px-1 text-center"
                  >
                    {/* Connecting Line (Desktop) */}
                    {idx < steps.length - 1 && (
                      <div className="absolute left-[calc(50%+16px)] top-4 hidden h-[1px] w-[calc(100%-32px)] bg-white/20 lg:block" />
                    )}

                    {/* Circle Badge */}
                    <div className="relative z-10 flex size-8 items-center justify-center rounded-full">
                      <div
                        className={`flex size-full items-center justify-center rounded-full text-xs font-bold text-white ${
                          step.highlighted
                            ? "bg-[#0A78C2] shadow-[0px_0px_14px_0px_rgba(10,120,194,0.6)]"
                            : "border border-white/25 bg-white/10"
                        }`}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="mt-3 flex flex-col gap-1">
                      <h3 className="text-xs font-bold font-['Inter'] leading-4 text-white">
                        {step.title}
                      </h3>
                      <p className="text-[11px] font-light font-['Inter'] leading-4 text-[#94A3B8]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <p className="relative max-w-[760px] text-xs font-light font-['Inter'] leading-5 text-[#8595A5]">
                Procurement approval alone never activates payroll, payment or filing access. Commercial execution,<br className="hidden sm:inline" />
                implementation readiness and Service Commencement remain separate controlled states.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}