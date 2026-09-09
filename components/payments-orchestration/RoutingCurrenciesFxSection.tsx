import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function RoutingCurrenciesSection() {
  const items = [
    {
      title: "Routing dimensions",
      description: "Type, rail, provider, cutoff, calendar.",
    },
    {
      title: "Currency model",
      description: "Obligation, funding and payout currency.",
    },
    {
      title: "FX transparency",
      description: "Source, quote time, fee — never \"best rate.\"",
    },
    {
      title: "Fail closed",
      description: "Unsupported corridor blocks, doesn't guess.",
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left Image Side */}
          <Reveal>
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-[20px] overflow-hidden shadow-sm">
              <Image
                src="/gn.png"
                alt="Reviewing routing and currency configuration"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-[20px]"
              />
            </div>
          </Reveal>

          {/* Right Content Side */}
          <Reveal delay={140}>
            <div className="flex flex-col items-start gap-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-4 bg-sky-600" />
                <span className="text-xs font-semibold uppercase leading-4 tracking-widest text-sky-600 font-['Inter']">
                  ROUTING, CURRENCIES &amp; FX
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900 font-['Inter'] lg:leading-[44px]">
                Choose the supported path<br className="hidden sm:inline" /> without losing control
              </h2>

              <p className="text-base font-normal leading-6 text-gray-500 font-['Inter'] pb-1">
                Provider choice stays configuration-driven, replaceable and auditable.
              </p>

              {/* Items Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-2 pb-1.5">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="w-full px-3.5 py-3 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-[2.63px]"
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
                  Same obligation and release version never creates multiple live instructions.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}