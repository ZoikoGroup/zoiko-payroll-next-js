"use client";

import Reveal from "../ui/Reveal";

const prohibitedItems = [
  "Employee payroll records",
  "Bank details",
  "Tax identifiers",
  "Pay amounts",
  "Passwords / credentials",
  "API keys",
];

const principles = [
  "Ask only what's needed",
  "Explain why",
  "Reveal upload after",
  "Validate type/size",
  "Scan / redact",
  "Communicate retention",
];

export default function SecurityPrivacy() {
  return (
    <section className="bg-white px-4 sm:px-8 lg:px-28 py-20">
      <div className="mx-auto max-w-[1180px] px-2 sm:px-8 flex flex-col gap-5">
        <Reveal>
          <div className="max-w-[660px] pb-3.5 flex flex-col gap-3.5">
            <div className="relative flex items-center h-5 pl-6">
              <div className="w-4 h-0.5 absolute left-0 top-[9px] bg-[#2F6FED]" />
              <span className="text-[#2F6FED] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Security / privacy + evidence minimization
              </span>
            </div>
            <h2 className="text-slate-900 text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-8 sm:leading-9 whitespace-nowrap">
              Minimized by design — not by policy alone.
            </h2>
          </div>
        </Reveal>

        {/* Warning callout */}
        <Reveal delay={100}>
          <div className="px-5 py-4 bg-[#FBE9E9] rounded-xl outline outline-1 outline-offset-[-1px] outline-[#F3C6C6] flex items-start gap-3.5">
            <div className="size-8 pt-1 pb-[4.91px] bg-[#C23A3A] rounded-lg flex justify-center items-center shrink-0">
              <div className="text-center justify-center text-white text-base font-bold font-['Inter'] leading-6">
                !
              </div>
            </div>
            <div className="size-full inline-flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-[#C23A3A] text-sm font-bold font-['Inter'] leading-5">
                  Never request or expose the following
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-gray-700 text-xs font-normal font-['Inter'] leading-5">
                  Security and privacy concerns route directly to Security &amp; Trust — never generic support.
                </div>
              </div>
              <div className="self-stretch pt-1.5 inline-flex justify-start items-start gap-2 flex-wrap content-start">
                {prohibitedItems.map((item) => (
                  <div
                    key={item}
                    className="self-stretch px-2.5 pt-[3px] pb-1 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#F3C6C6] inline-flex flex-col justify-start items-start"
                  >
                    <div className="justify-center text-[#C23A3A] text-xs font-normal font-['Inter'] leading-4">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Principles row */}
        <Reveal delay={200}>
          <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#E6E9F0] flex flex-col md:flex-row overflow-hidden">
            {principles.map((principle, i) => (
              <div
                key={principle}
                className={`flex-1 px-2.5 pt-3.5 pb-4 flex items-center justify-center ${
                  i < principles.length - 1 ? "border-b md:border-b-0 md:border-r border-[#E6E9F0]" : ""
                }`}
              >
                <div className="text-center justify-center text-[#3A4356] text-xs font-semibold font-['Inter'] leading-4">
                  {principle}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}