import Image from "next/image";

export default function GuideHero() {
  return (
    <div className="w-full bg-gradient-to-b from-[#0F2B3E] to-[#0F2B3E]">
      <div className="mx-auto max-w-[1116px] w-full px-5 md:px-8 pt-10 md:pt-14 pb-8 md:pb-10 flex flex-col md:flex-row items-center gap-8 md:gap-10">
        {/* Left - Content */}
        <div className="flex-1 flex flex-col items-start gap-3.5">
          {/* Label */}
          <div className="w-full h-5 relative">
            <div className="w-4 h-0.5 absolute bg-[#2F6FED] mt-[8.29px]" />
            <div className="absolute left-[24px] top-[-1px] text-[#8FB4FF] text-xs font-bold uppercase leading-5 tracking-wide">
              Jurisdiction Guides
            </div>
          </div>

          {/* Title */}
          <div className="w-full text-white text-3xl md:text-4xl font-extrabold leading-tight md:leading-10">
            Payroll jurisdiction guides
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            with current market
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            context.
          </div>

          {/* Description */}
          <div className="w-full pt-1 text-white/70 text-base font-normal font-['Inter'] leading-6">
            Explore reviewed market-specific payroll guidance while keeping current availability, approved local requirements and implementation scope one clear authority link away.
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
        <div className="flex-1 w-full relative rounded-[20px] overflow-hidden">
          <div className="w-full aspect-[466/540] md:h-[466px] bg-gradient-to-br from-sky-900 to-sky-950 rounded-[20px] flex items-center justify-center">
            <Image
              src="/x1.png"
              alt="Jurisdiction guides illustration"
              width={540}
              height={466}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
