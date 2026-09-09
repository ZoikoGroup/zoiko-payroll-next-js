import Image from "next/image";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const coverage = [
  { label: "Live", dot: "bg-emerald-600", text: "text-emerald-700" },
  { label: "Pilot", dot: "bg-sky-500", text: "text-sky-700" },
  { label: "Contract-only", dot: "bg-slate-400", text: "text-slate-600" },
  { label: "Planned", dot: "bg-amber-500", text: "text-amber-700" },
  { label: "Unsupported", dot: "bg-red-500", text: "text-red-700" },
];

const guardrails = [
  {
    title: "Masked & tokenized",
    description: "Payment data never exposed raw.",
  },
  {
    title: "Stable idempotency",
    description: "Exactly-once business effect.",
  },
  {
    title: "Tamper-evident evidence",
    description: "Auditable beneficiary changes.",
  },
  {
    title: "Timeout ≠ resend",
    description: "Outage creates Unknown/Pending.",
  },
  {
    title: "AI is advisory only",
    description: "Never approves, reroutes or retries.",
  },
  {
    title: "Step-up authentication",
    description: "Required for high-risk actions.",
  },
];

export default function CoverageSecurityAiSection() {
  return (
    <section className="relative overflow-hidden bg-[#0F2B3E] py-20">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-7">
            {/* Header */}
            <div className="flex flex-col items-center gap-2">
              <Eyebrow tone="light" center>
                Coverage, Security &amp; AI
              </Eyebrow>
              <h2 className="pt-px text-center text-3xl sm:text-4xl font-extrabold leading-tight text-white font-['Inter']">
                Planned is never presented as live
              </h2>
              <p className="pb-[0.59px] text-center text-base font-normal leading-6 text-slate-300 font-['Inter']">
                Where Zoiko isn&apos;t the licensed executor, its role is described precisely.
              </p>
            </div>

            {/* Coverage pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1.5">
              {coverage.map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 shadow-sm"
                >
                  <span className={`size-1.5 rounded-full ${item.dot}`} />
                  <span className={`text-xs font-semibold leading-4 tracking-tight ${item.text} font-['Inter']`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Guardrail cards (3x2 Grid matching Figma) */}
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {guardrails.map((guardrail) => (
                <div
                  key={guardrail.title}
                  className="flex flex-col gap-[2.75px] rounded-[10px] bg-white/5 p-3.5 outline outline-1 outline-offset-[-1px] outline-white/10"
                >
                  <div className="flex items-center gap-1.5">
                    <Image
                      src="/blue.png"
                      alt="check"
                      width={10}
                      height={10}
                      className="size-2.5 object-contain shrink-0"
                    />
                    <span className="text-sm font-semibold leading-5 text-white font-['Inter']">
                      {guardrail.title}
                    </span>
                  </div>
                  <p className="text-xs font-normal leading-5 text-white/60 font-['Inter']">
                    {guardrail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}