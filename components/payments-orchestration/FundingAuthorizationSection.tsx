import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function FundingAndAuthorizationSection() {
  const items = [
    {
      title: "Funding deadline",
      description: "Date, time, timezone and consequence.",
    },
    {
      title: "Funding evidence",
      description: "Provider confirmation, ref, amount.",
    },
    {
      title: "Dual authorization",
      description: "Role, threshold, escalation.",
    },
    {
      title: "Step-up authentication",
      description: "For high-risk release or reroutes.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left Content Side */}
          <Reveal>
            <div className="flex flex-col items-start gap-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-4 bg-sky-600" />
                <span className="text-xs font-semibold uppercase leading-4 tracking-widest text-sky-600 font-['Inter']">
                  FUNDING &amp; AUTHORIZATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900 font-['Inter'] lg:leading-[44px]">
                Release passes only when every<br className="hidden sm:inline" /> gate clears
              </h2>

              <p className="text-base font-normal leading-6 text-gray-500 font-['Inter'] pb-1">
                Payroll approval is separated from payment release by design.
              </p>

              {/* Items List (2x2 Grid matching Figma) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-2 pb-1.5">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="w-full px-3.5 py-3 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-[2.75px]"
                  >
                    <div className="w-full inline-flex justify-start items-center gap-1.5">
                      <Image
                        src="/blue.png"
                        alt="check"
                        width={10}
                        height={10}
                        className="size-2.5 object-contain shrink-0"
                      />
                      <span className="text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Alert Box */}
              <div className="w-full px-4 py-2.5 bg-[#E7EDFD] rounded-r-lg border-l-[3px] border-sky-600 mt-1">
                <p className="text-slate-900 text-sm font-normal font-['Inter'] leading-5">
                  Shortfall never silently reduces a worker&apos;s payment — release blocks or conditions instead.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Image Side */}
          <Reveal delay={140}>
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-[20px] overflow-hidden shadow-sm">
              <Image
                src="/bg.png"
                alt="Funding and Authorization"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-[20px]"
              />

              {/* Floating Card: Funding Confirmed */}
              <div className="absolute right-6 top-6 bg-white rounded-[10px] shadow-[0px_6px_20px_0px_rgba(15,23,42,0.08)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between gap-3 px-3.5 py-2.5 z-10">
                <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-5">
                  Funding
                </span>
                <div className="px-2 py-0.5 bg-emerald-50 outline outline-1 outline-emerald-200/50 rounded-full inline-flex items-center gap-1.5">
                  <span className="size-1.5 bg-emerald-600 rounded-full" />
                  <span className="text-emerald-700 text-xs font-semibold font-['Inter'] leading-4 tracking-tight">
                    Confirmed
                  </span>
                </div>
              </div>

              {/* Floating Card: Authorization Pending */}
              <div className="absolute left-6 bottom-6 bg-white rounded-[10px] shadow-[0px_6px_20px_0px_rgba(15,23,42,0.08)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between gap-3 px-3.5 py-2.5 z-10">
                <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-5">
                  Authorization
                </span>
                <div className="px-2 py-0.5 bg-amber-50 outline outline-1 outline-amber-200/50 rounded-full inline-flex items-center gap-1.5">
                  <span className="size-1.5 bg-amber-500 rounded-full" />
                  <span className="text-amber-700 text-xs font-semibold font-['Inter'] leading-4 tracking-tight">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}