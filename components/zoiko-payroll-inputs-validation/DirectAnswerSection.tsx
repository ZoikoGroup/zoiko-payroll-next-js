import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const steps = [
  { label: "Receive", active: false },
  { label: "Normalize", active: false },
  { label: "Validate", active: false },
  { label: "Triage", active: false },
  { label: "Resolve", active: false },
  { label: "Ready for calculation", active: true },
];

export default function DirectAnswerSection() {
  return (
    <section className="bg-[#F9FAFB] pt-20 pb-[84px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-[680px] flex-col items-center gap-6">
            {/* Header */}
            <div className="flex flex-col items-center gap-2">
              <Eyebrow center>Direct Answer</Eyebrow>
              <h2 className="pt-px text-center text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900">
                What is payroll input validation ?
              </h2>
              <p className="pb-[0.59px] text-center text-base font-normal leading-6 text-gray-500">
                Checking completeness, format, timeliness and rule compatibility
                before calculation.
              </p>
            </div>

            {/* Pipeline pills - all 6 on 1 line without scrolling */}
            <div className="flex w-full flex-nowrap items-center justify-center gap-2 overflow-x-visible pt-2.5">
              {steps.map((step, idx) => (
                <div key={step.label} className="flex shrink-0 items-center gap-2">
                  <div
                    className={`rounded-full px-3.5 py-1.5 whitespace-nowrap ${
                      step.active
                        ? "bg-white outline outline-1 outline-offset-[-1px] outline-[#0A78C3]"
                        : "bg-white outline outline-1 outline-offset-[-1px] outline-[#E3E7EE]"
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold leading-4 ${
                        step.active ? "text-[#0A78C3]" : "text-slate-900"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <span className="text-xs font-normal text-gray-400">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Callout Container */}
            <div className="w-full max-w-[640px] pt-1">
              <div className="w-full rounded-tr-lg rounded-br-lg border-l-4 border-[#0A78C3] bg-[#E7EDFD] px-5 py-3 shadow-xs">
                <p className="text-sm font-normal leading-5 text-slate-900 text-center">
                  Only ready data moves forward — nothing advances until it&apos;s revalidated.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}