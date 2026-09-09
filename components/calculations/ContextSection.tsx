import Image from "next/image";
import Reveal from "../ui/Reveal";

const contextItems = [
  { label: "Worker + assignment", desc: "Employment and comp. basis." },
  {
    label: "Legal entity",
    desc: "Registrations, payment responsibility.",
  },
  {
    label: "Pay group + period",
    desc: "Frequency, cutoff, run category.",
  },
  {
    label: "Jurisdiction",
    desc: "Never inferred from currency alone.",
  },
  {
    label: "Effective date",
    desc: "Rule/rate version for the period.",
  },
  {
    label: "Currency & version",
    desc: "FX explicit; config. immutable.",
  },
];

export default function ContextSection() {
  return (
    <section className="w-full py-[84px] bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left: Image */}
          <Reveal>
            <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-[20px] overflow-hidden shadow-sm">
              <Image
                src="/nm.png"
                alt="Context and effective dating"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-[20px]"
              />
            </div>
          </Reveal>

          {/* Right: Checklist */}
          <Reveal delay={140}>
            <div className="flex flex-col items-start gap-2">
              <div className="inline-flex items-center gap-2">
                <div className="w-4 h-px bg-[#0A78C3]" />
                <span className="text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest text-[#0A78C3]">
                  CONTEXT &amp; EFFECTIVE DATING
                </span>
              </div>
              <h2 className="pt-px text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight text-slate-900">
                Apply the right rules in the right<br className="hidden sm:inline" /> context
              </h2>
              <p className="pb-1 text-base font-normal font-['Inter'] leading-6 text-gray-500">
                Worker, entity, period, jurisdiction, date and currency — all explicit.
              </p>

              {/* 2-Column Grid of 6 Cards (matching Figma) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-2 pb-1.5">
                {contextItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-[2.75px] rounded-[10px] bg-white px-3.5 py-3 outline outline-1 outline-offset-[-1px] outline-slate-200"
                  >
                    <div className="flex items-center gap-1.5">
                      <Image
                        src="/blue.png"
                        alt="check"
                        width={10}
                        height={10}
                        className="size-2.5 object-contain shrink-0"
                      />
                      <span className="text-sm font-semibold font-['Inter'] leading-5 text-slate-900">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-xs font-normal font-['Inter'] leading-5 text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Alert / Callout Box */}
              <div className="w-full rounded-r-lg border-l-[3px] border-[#0A78C3] bg-[rgba(231,237,253,1)] px-4 py-2.5 mt-1">
                <p className="text-sm font-normal font-['Inter'] leading-5 text-slate-900">
                  If mandatory logic is unavailable or ambiguous, calculation fails closed —
                  <br />
                  never a silent generic rule.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
