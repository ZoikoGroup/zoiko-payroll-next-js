import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function FinalCTASection() {
  return (
    <section className="w-full py-[84px] flex flex-col justify-center items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <Reveal className="w-full max-w-[1118px] min-h-[320px] py-16 sm:py-20 relative bg-[#082F49] rounded-3xl flex flex-col justify-center items-center overflow-hidden shadow-xl">
          {/* Background Image with Figma Cyan/Navy Blue Shade */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/vc.png"
              alt="From approved inputs to pay results"
              fill
              className="object-cover object-center mix-blend-luminosity opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#082F49]/80 via-[#0B1F3A]/60 to-[#082F49]/80 pointer-events-none" />
          </div>

          <div className="relative z-10 w-full max-w-[720px] px-6 flex flex-col justify-center items-center gap-4 text-center">
            {/* 2 Lines Only Heading */}
            <h2 className="w-full max-w-[662px] text-center text-white text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-8 sm:leading-9">
              <span className="inline sm:whitespace-nowrap">From approved inputs to pay results you</span>
              <br />
              <span className="inline sm:whitespace-nowrap">can explain</span>
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-3 pt-2.5">
              <Link
                href="/book-a-demo"
                className="px-6 py-3 bg-[#0A78C3] hover:bg-sky-500 text-white text-sm font-semibold font-['Inter'] rounded-lg shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="/zoiko-payroll-inputs-validation"
                className="px-6 py-3 bg-transparent hover:bg-white/10 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/30 text-white text-sm font-semibold font-['Inter'] transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Inputs &amp; Validation
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}