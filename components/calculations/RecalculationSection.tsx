import Image from "next/image";
import Reveal from "../ui/Reveal";

const recalcItems = [
  { label: "Targeted", desc: "Only the affected worker/subset." },
  {
    label: "Full",
    desc: "Full population for config. changes.",
  },
  {
    label: "Idempotent",
    desc: "Reprocessing never duplicates pay.",
  },
  {
    label: "Concurrency-safe",
    desc: "Locking prevents ambiguous results.",
  },
];

export default function RecalculationSection() {
  return (
    <section className="w-full py-[84px] bg-[#F9FAFB] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left: Checklist */}
          <Reveal>
            <div className="flex flex-col items-start gap-2">
              <div className="inline-flex items-center gap-2">
                <div className="w-4 h-px bg-[#0A78C3]" />
                <span className="text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest text-[#0A78C3]">
                  RECALCULATION
                </span>
              </div>
              <h2 className="pt-px text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight text-slate-900">
                A material change never leaves<br className="hidden sm:inline" /> a stale &quot;final&quot; amount
              </h2>
              <p className="pb-1 text-base font-normal font-['Inter'] leading-6 text-gray-500">
                Targeted or full — recalculation depends on scope, not convenience.
              </p>

              {/* 2-Column Grid of 4 Cards (matching Figma) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-2 pb-1.5">
                {recalcItems.map((item) => (
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
                  Deterministic rounding applies at the defined stage — never arbitrary display rounding.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: Image */}
          <Reveal delay={140}>
            <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-[20px] overflow-hidden shadow-sm">
              <Image
                src="/vf.png"
                alt="Recalculation"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-[20px]"
              />

              {/* Stale result badge */}
              <div className="absolute right-6 top-6 z-10 flex items-center gap-2 rounded-[10px] bg-white px-3.5 py-1.5 shadow-[0px_6px_20px_0px_rgba(15,23,42,0.08)] outline outline-1 outline-offset-[-1px] outline-slate-200">
                <span className="text-xs font-semibold font-['Inter'] leading-5 text-slate-900">
                  Stale result
                </span>
                <span className="inline-flex items-center justify-center rounded-[100px] bg-orange-100 px-2 py-1">
                  <span className="size-1.5 rounded-[3px] bg-yellow-700" />
                </span>
              </div>

              {/* Recalc required badge */}
              <div className="absolute left-6 bottom-6 z-10 flex items-center gap-2 rounded-[10px] bg-white px-3.5 py-1.5 shadow-[0px_6px_20px_0px_rgba(15,23,42,0.08)] outline outline-1 outline-offset-[-1px] outline-slate-200">
                <span className="text-xs font-semibold font-['Inter'] leading-5 text-slate-900">
                  Recalc. required
                </span>
                <span className="inline-flex items-center justify-center rounded-[100px] bg-rose-100 px-2 py-1">
                  <span className="size-1.5 rounded-[3px] bg-red-700" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
