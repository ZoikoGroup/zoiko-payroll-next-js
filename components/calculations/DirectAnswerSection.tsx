import Image from "next/image";
import Reveal from "../ui/Reveal";

const steps = [
  "Validated inputs",
  "Establish context",
  "Calculate earnings",
  "Statutory logic",
  "Deductions & costs",
  "Net + accumulators",
];

export default function DirectAnswerSection() {
  return (
    <section className="w-full py-20 bg-gray-50 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl flex flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        {/* Header - Middle aligned */}
        <Reveal className="w-full max-w-[660px] flex flex-col items-center gap-2 text-center">
          <div className="inline-flex items-center gap-2">
            <div className="w-4 h-px bg-[#0A78C3]" />
            <span className="text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest text-[#0A78C3]">
              DIRECT ANSWER
            </span>
          </div>
          <h2 className="pt-px text-center text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight text-slate-900">
            How does payroll calculation work?
          </h2>
          <p className="pb-[0.59px] text-center text-base font-normal font-['Inter'] leading-6 text-gray-500">
            Validated inputs meet effective-dated rules to produce gross-to-net, in context.
          </p>
        </Reveal>

        {/* Flow diagram */}
        <Reveal delay={100} className="w-full flex flex-col items-center gap-3 pt-2 pb-2">
          <div className="flex flex-wrap items-center justify-center gap-y-3">
            {steps.map((step, idx) => (
              <div key={step} className="flex items-center">
                <div className="rounded-[100px] bg-white px-4 py-2 outline outline-1 outline-offset-[-1px] outline-slate-200 shadow-sm">
                  <span className="text-xs font-semibold font-['Inter'] leading-4 text-slate-900">
                    {step}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <Image
                    src="/grey.png"
                    alt="→"
                    width={14}
                    height={14}
                    className="h-3 w-3.5 object-contain shrink-0 mx-2"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Reviewable result (second row) */}
          <div className="flex items-center gap-2 pt-1">
            <Image
              src="/grey.png"
              alt="→"
              width={14}
              height={14}
              className="h-3 w-3.5 object-contain shrink-0"
            />
            <div className="rounded-[100px] bg-[#E7EDFD] px-4 py-2 outline outline-1 outline-offset-[-1px] outline-[#0A78C3] shadow-sm">
              <span className="text-xs font-semibold font-['Inter'] leading-4 text-[#0A78C3]">
                Reviewable result
              </span>
            </div>
          </div>
        </Reveal>

        {/* Callout */}
        <Reveal delay={200} className="w-full max-w-[700px] rounded-r-lg border-l-[3px] border-[#0A78C3] bg-[#E7EDFD] px-4 py-2.5 text-center mt-2">
          <p className="text-sm font-normal font-['Inter'] leading-5 text-slate-900">
            Only inputs eligible under readiness/approval rules are used — no double counting.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
