import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function SafeCorrectionsSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 sm:px-10 lg:px-40 flex flex-col lg:flex-row justify-center items-center gap-14">
        {/* Left Image Column */}
        <Reveal className="w-full lg:flex-1 flex justify-center">
          <div className="w-full max-w-[530px] h-96 relative rounded-[20px] overflow-hidden shadow-sm">
            <Image
              src="/mh.png"
              alt="Reviewing a correction"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Right Content Column */}
        <Reveal className="w-full lg:flex-1 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch inline-flex justify-start items-center gap-2">
            <div className="w-4 h-px bg-sky-600" />
            <div className="text-sky-600 text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest">
              SAFE CORRECTIONS
            </div>
          </div>

          <div className="self-stretch pt-[1.20px] flex flex-col justify-start items-start">
            <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
              Correct data without losing control of the change
            </h2>
          </div>

          <div className="self-stretch flex flex-col justify-start items-start pb-2">
            <p className="text-gray-500 text-base font-normal font-['Inter'] leading-6">
              Correct at source when another system is authoritative. High-impact changes need a second reviewer.
            </p>
          </div>

          {/* Correction Preview Card */}
          <div className="self-stretch bg-white rounded-2xl shadow-[0px_20px_60px_0px_rgba(8,21,44,0.18)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-center overflow-hidden mb-2">
            <div className="self-stretch px-4 py-3 bg-slate-50 border-b border-gray-100 inline-flex justify-start items-center gap-2">
              <div className="flex justify-start items-start gap-1.5">
                <div className="w-2 h-2 bg-slate-200 rounded-sm" />
                <div className="w-2 h-2 bg-slate-200 rounded-sm" />
                <div className="w-2 h-2 bg-slate-200 rounded-sm" />
              </div>
              <div className="pl-1.5 inline-flex flex-col justify-start items-start">
                <span className="text-gray-400 text-xs font-normal font-['Inter'] leading-4">
                  Correction preview
                </span>
              </div>
            </div>

            <div className="w-full px-6 py-5 grid grid-cols-2 gap-y-4">
              <div className="flex flex-col justify-start items-start gap-0.5">
                <span className="text-gray-400 text-xs font-normal font-['Inter'] uppercase leading-4">
                  Old value
                </span>
                <span className="text-slate-900 text-xs font-normal font-['Inter'] leading-5">
                  £—— (masked)
                </span>
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <span className="text-gray-400 text-xs font-normal font-['Inter'] uppercase leading-4">
                  New value
                </span>
                <span className="text-slate-900 text-xs font-normal font-['Inter'] leading-5">
                  £—— (masked)
                </span>
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <span className="text-gray-400 text-xs font-normal font-['Inter'] uppercase leading-4">
                  Effective period
                </span>
                <span className="text-slate-900 text-xs font-normal font-['Inter'] leading-5">
                  Aug 2026
                </span>
              </div>
              <div className="flex flex-col justify-start items-start gap-[3px]">
                <span className="text-gray-400 text-xs font-normal font-['Inter'] uppercase leading-4">
                  Approval
                </span>
                <div className="pl-1.5 pr-2 py-1 bg-orange-100 rounded-[100px] inline-flex justify-start items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-yellow-700 rounded-[3px]" />
                  <span className="text-yellow-700 text-xs font-semibold font-['Inter'] leading-4 tracking-tight">
                    Second reviewer required
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Notice Banner */}
          <div className="self-stretch px-4 py-3 bg-[#E7EDFD] rounded-tr-lg rounded-br-lg border-l-[3px] border-[#0A78C3] flex flex-col justify-start items-start">
            <p className="text-slate-900 text-sm font-normal font-['Inter'] leading-5">
              <span className="block sm:whitespace-nowrap">Pay-impacting corrections trigger revalidation — a stale Ready status never</span>
              <span>remains.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}