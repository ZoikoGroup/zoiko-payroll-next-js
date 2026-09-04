"use client";

import Reveal from "../ui/Reveal";

export default function HelpHeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-900 px-4 sm:px-8 lg:px-32 pt-14 pb-11">
      <div className="mx-auto max-w-[1180px] px-2 sm:px-8 flex flex-col items-center gap-2">
        <Reveal>
          <h1 className="text-center text-white text-3xl font-extrabold leading-10">
            Help Center
          </h1>
          <p className="text-center text-[#FFFFFFB8] text-sm leading-6 mt-[14px]">
            Resolve payroll questions and reach the right support path.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="w-full max-w-[640px] pt-5 flex flex-col gap-3">
            <div className="self-stretch p-[5px] relative bg-white rounded-[10px] flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 shadow-[0px_20px_50px_-20px_rgba(0,0,0,0.40)]">
              <div className="flex-1 px-4 py-3.5 bg-white flex flex-col justify-center items-start overflow-hidden">
                <input
                  type="text"
                  placeholder="Search a question, task name or error code…"
                  className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-500 outline-none font-['Inter']"
                />
              </div>
              <div className="px-4 py-2 sm:py-0 sm:pl-4 sm:pr-7 border-t sm:border-t-0 sm:border-l border-slate-200 flex flex-col justify-center items-start">
                <div className="py-px flex flex-col justify-start items-start">
                  <div className="text-gray-700 text-xs font-normal font-['Inter'] leading-4">
                    All areas
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="px-4 py-2.5 bg-[#2F6FED] rounded-lg flex justify-center items-center cursor-pointer transition-colors hover:bg-[#255bc4]"
              >
                <span className="text-center text-white text-sm font-semibold font-['Inter'] leading-5">
                  Search
                </span>
              </button>
            </div>
            <p className="text-center text-[#FFFFFF99] text-xs leading-5 px-2">
              ⓘ Do not enter passwords, one-time codes, bank details, employee payroll data, API keys or other secrets.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}