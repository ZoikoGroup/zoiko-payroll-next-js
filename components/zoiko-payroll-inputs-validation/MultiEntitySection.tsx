import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function MultiEntitySection() {
  return (
    <section className="w-full py-20 bg-white inline-flex flex-col justify-start items-center overflow-hidden">
      <div className="w-full max-w-[1440px] px-6 sm:px-10 lg:px-40 inline-flex flex-col lg:flex-row justify-center items-center gap-14">
        {/* Left Image Column */}
        <Reveal className="w-full lg:flex-1 min-h-[384px] inline-flex flex-col justify-center items-start">
          <div className="self-stretch min-h-[384px] relative rounded-[20px] flex flex-col justify-center items-start overflow-hidden shadow-sm">
            <Image
              src="/gh.png"
              alt="Reviewing multi-entity validation rules"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Right Content Column */}
        <Reveal className="w-full lg:flex-1 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch inline-flex justify-start items-center gap-2">
            <div className="w-4 h-px bg-sky-600" />
            <div className="justify-center text-sky-600 text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest">
              MULTI-ENTITY &amp; JURISDICTION
            </div>
          </div>

          <div className="self-stretch pt-px flex flex-col justify-start items-start">
            <h2 className="self-stretch justify-center text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
              One discipline. Local context<br />where it matters
            </h2>
          </div>

          <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
            <p className="self-stretch justify-center text-gray-500 text-base font-normal font-['Inter'] leading-6">
              Entity, pay group, calendar and currency determine which rules apply.
            </p>
          </div>

          <div className="self-stretch pt-2.5 pb-1.5 inline-flex flex-col sm:flex-row justify-center items-stretch gap-3">
            {/* Global Layer Card */}
            <div className="flex-1 px-4 pt-5 pb-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-2.5 bg-white">
              <div className="pl-1.5 pr-2 py-1 bg-[#E7EDFD] rounded-[100px] inline-flex justify-start items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-sky-600 rounded-[3px]" />
                <span className="justify-center text-sky-600 text-xs font-semibold font-['Inter'] leading-4 tracking-tight">
                  Global layer
                </span>
              </div>
              <div className="self-stretch pb-[0.75px] flex flex-col justify-start items-start">
                <p className="self-stretch justify-center text-gray-500 text-xs font-normal font-['Inter'] leading-5">
                  Common status, provenance,<br />severity and audit semantics.
                </p>
              </div>
            </div>

            {/* Local Rules Card */}
            <div className="flex-1 px-4 pt-5 pb-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-2.5 bg-white">
              <div className="pl-1.5 pr-2 py-1 bg-[#E5F4EC] rounded-[100px] inline-flex justify-start items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#0F6B48] rounded-[3px]" />
                <span className="justify-center text-[#0F6B48] text-xs font-semibold font-['Inter'] leading-4 tracking-tight">
                  Local rules
                </span>
              </div>
              <div className="self-stretch pb-[0.75px] flex flex-col justify-start items-start">
                <p className="self-stretch justify-center text-gray-500 text-xs font-normal font-['Inter'] leading-5">
                  Effective-dated and versioned per<br />jurisdiction.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="self-stretch px-4 py-2.5 bg-[#E7EDFD] rounded-tr-lg rounded-br-lg border-l-[3px] border-sky-600 flex flex-col justify-start items-start">
            <p className="justify-center text-slate-900 text-sm font-normal font-['Inter'] leading-5">
              Currency is never silently converted, and jurisdiction is never inferred from<br />currency alone.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}