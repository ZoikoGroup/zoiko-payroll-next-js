import Image from "next/image";

export default function SearchInteraction() {
  return (
    <section className="w-full px-8 md:px-32 py-16 md:py-20 bg-white">
      <div className="w-full max-w-[1180px] mx-auto px-8 flex flex-col items-start gap-10">
        {/* Header - centered */}
        <div className="w-[680px] max-w-[680px] pt-[1.63px] flex flex-col items-start gap-2">
          <div className="w-64 h-5 relative">
            <div className="absolute left-[0px] top-[-1px] text-sky-700 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
              Availability Search Interaction
            </div>
          </div>            <div className="self-stretch pt-3.5 flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-sky-950 text-4xl font-extrabold font-['Inter'] leading-10 whitespace-nowrap">Search first. No personal data required</div>
          </div>
          <div className="self-stretch pb-[0.75px] flex flex-col justify-start items-start">
            <div className="justify-center text-slate-600 text-base font-normal font-['Inter'] leading-6">Search a jurisdiction, get a resolved, dated answer, and only continue toward a<br />demo when you choose to.</div>
          </div>
        </div>

        {/* Content: Card + Image side by side */}
        <div className="w-full flex flex-col md:flex-row items-start gap-8">
          {/* Search Card */}
          <div className="w-full md:w-[620px] max-w-[620px] bg-white rounded-2xl shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-100 overflow-hidden">
            {/* Search input */}
            <div className="px-6 py-5 border-b border-slate-100">
              <div className="w-[570px] h-[50px] px-3.5 bg-[#F5F8FA] rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#2E91D1] inline-flex justify-start items-center gap-2.5">
                <Image src="/search.png" alt="search" width={20} height={20} className="w-5 h-5" />
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-sky-950 text-base font-semibold font-['Inter'] leading-6">Germany</div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="self-stretch px-6 py-5 inline-flex justify-between items-center">
              <div className="justify-center text-gray-400 text-xs font-bold font-['Inter'] leading-4 tracking-tight">Search</div>
              <div className="w-6 h-px bg-slate-200" />
              <div className="justify-center text-gray-400 text-xs font-bold font-['Inter'] leading-4 tracking-tight">Resolve</div>
              <div className="w-6 h-px bg-slate-200" />
              <div className="justify-center text-sky-700 text-xs font-bold font-['Inter'] leading-4 tracking-tight">Status</div>
              <div className="w-6 h-px bg-slate-200" />
              <div className="justify-center text-gray-400 text-xs font-bold font-['Inter'] leading-4 tracking-tight">Continue</div>
            </div>

            {/* Result */}
            <div className="px-6 py-5 bg-slate-50 flex flex-col justify-start items-start">
              <div className="self-stretch pb-3.5 inline-flex justify-between items-center">
                <div className="inline-flex justify-start items-center gap-2.5">
                  <div className="w-8 h-6 pt-[3px] pb-1 bg-slate-50 rounded-sm outline outline-1 outline-offset-[-1px] outline-slate-100 flex justify-center items-center">
                    <div className="text-center justify-center text-sky-700 text-[10px] font-extrabold font-['Inter'] leading-4">DE</div>
                  </div>
                  <div className="justify-center text-sky-950 text-base font-extrabold font-['Inter'] leading-6">Germany</div>
                </div>
                <div className="w-[148px] h-6 relative bg-orange-100 rounded-full inline-flex items-center gap-1.5 px-2.5 whitespace-nowrap">
                  <span className="text-green-600 text-lg font-bold leading-4">•</span>
                  <div className="justify-center text-yellow-800 text-base font-normal font-['Inter'] leading-6">Limited availability</div>
                </div>
              </div>

              <div className="self-stretch py-3 border-b border-slate-100 inline-flex justify-between items-start">
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-gray-400 text-sm font-normal font-['Inter'] leading-5">Scope</div>
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-sky-950 text-sm font-bold font-['Inter'] leading-5">Select entity types, self-managed only</div>
                </div>
              </div>

              <div className="self-stretch py-3 border-b border-slate-100 inline-flex justify-between items-start">
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-gray-400 text-sm font-normal font-['Inter'] leading-5">Effective date</div>
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-sky-950 text-sm font-bold font-['Inter'] leading-5">Reviewed August 2026</div>
                </div>
              </div>

              <div className="self-stretch py-3 inline-flex justify-between items-start">
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-gray-400 text-sm font-normal font-['Inter'] leading-5">Next step</div>
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-sky-700 text-sm font-bold font-['Inter'] leading-5">Discuss your operating markets →</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[445px] h-[453px] rounded-2xl overflow-hidden flex-shrink-0 -mt-[20px] pt-0 pb-[20px]">
            <Image src="/55.png" alt="Search interaction" width={445} height={453} className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
