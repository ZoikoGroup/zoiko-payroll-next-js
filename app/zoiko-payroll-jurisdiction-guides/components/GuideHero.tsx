import Image from "next/image";

export default function GuideHero() {
  return (
    <div className="w-full bg-gradient-to-b from-[#0F2B3E] to-[#0F2B3E]">
      <div className="mx-auto w-[1116px] pt-14 pb-10 flex flex-row items-center gap-10">
        {/* Left - Content */}
        <div className="flex-1 flex flex-col items-start gap-3.5">
          {/* Label */}
          <div className="w-full h-5 relative">
            <div className="w-4 h-0.5 absolute bg-blue-600 mt-[8.29px]" />
            <div className="absolute left-[24px] top-[-1px] text-[#8FB4FF] text-xs font-bold uppercase leading-5 tracking-wide">
              Jurisdiction Guides
            </div>
          </div>

          {/* Title */}
          <div className="w-full text-white text-4xl font-extrabold leading-10">
            Payroll jurisdiction guides
            <br />
            with current market
            <br />
            context.
          </div>

          {/* Description */}
          <div className="w-[480px] pt-1 text-white/70 text-base font-normal font-['Inter'] leading-6">
            Explore reviewed market-specific payroll guidance while keeping<br />
            current availability, approved local requirements and<br />
            implementation scope one clear authority link away.
          </div>

          {/* Buttons */}
          <div className="w-full pt-2.5 flex items-start gap-3 flex-wrap">
            <div className="px-6 py-3 bg-blue-500 rounded-[30px] flex items-center">
              <span className="text-white text-sm font-semibold">Book a demo</span>
            </div>
            <div className="px-6 py-3 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-white/40 flex items-center">
              <span className="text-white text-sm font-semibold leading-6">Check jurisdiction availability</span>
            </div>
          </div>
        </div>

        {/* Right - Image with Floating Cards */}
        <div className="flex-1 relative rounded-[20px] overflow-hidden">
          <div className="w-full h-[466px] bg-gradient-to-br from-sky-900 to-sky-950 rounded-[20px] flex items-center justify-center">
            <Image
              src="/aa.png"
              alt="Jurisdiction guides illustration"
              width={540}
              height={466}
              className="w-full h-[466px] object-cover rounded-[20px]"
            />
          </div>

          {/* Floating Card 1 - Top right */}
          <div className="absolute right-[30px] top-[24px] min-w-[160px] bg-white rounded-xl px-4 pt-3 pb-3.5 flex flex-col gap-1.5 shadow-[0px_16px_40px_-14px_rgba(0,0,0,0.4)]">
            <div className="text-slate-500 text-xs leading-4">Germany Payroll Guide</div>
            <div className="text-slate-900 text-base font-bold leading-6">Reviewed Jan 2026</div>
          </div>

          {/* Floating Card 2 - Bottom right */}
          <div className="absolute right-[30px] top-[326px] min-w-[192px] bg-white rounded-xl px-4 pt-3 pb-3.5 flex flex-col gap-1.5 shadow-[0px_16px_40px_-14px_rgba(0,0,0,0.4)]">
            <div className="text-slate-500 text-xs leading-4">Current availability</div>
            <div className="text-yellow-700 text-xs font-bold leading-5">Limited — view status →</div>
          </div>
        </div>
      </div>
    </div>
  );
}
