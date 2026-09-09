import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function CtaSection() {
  return (
    <section className="w-full py-20 bg-white flex justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1024px] relative bg-[#0B1F3A] rounded-3xl overflow-hidden shadow-xl flex flex-col justify-center items-center py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
        {/* Background Image */}
        <Image
          src="/bu.png"
          alt="Payroll background"
          fill
          className="object-cover"
        />
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-[#0B1F3A]/85 pointer-events-none" />

        {/* Content */}
        <Reveal className="relative z-10 w-full flex flex-col justify-center items-center gap-6 text-center">
          <div className="self-stretch flex flex-col justify-start items-center">
            <h2 className="text-center text-white text-2xl sm:text-3xl lg:text-[32px] font-bold font-['Inter'] leading-tight">
              Start every payroll run with data you can trust
            </h2>
          </div>
          <div className="self-stretch inline-flex justify-center items-center gap-4 flex-wrap content-center">
            <button className="px-6 py-3 bg-[#0A78C3] hover:bg-[#0866a5] rounded-lg transition-colors text-white text-sm font-semibold font-['Inter'] leading-5 cursor-pointer shadow-sm">
              Book a demo
            </button>
            <button className="px-6 py-3 rounded-lg border border-white/60 hover:bg-white/10 transition-colors text-white text-sm font-semibold font-['Inter'] leading-5 cursor-pointer">
              Talk to sales →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}