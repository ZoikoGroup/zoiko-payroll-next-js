import Reveal from "../ui/Reveal";

export default function QuoteSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20">
      <div className="mx-auto max-w-[1096px] px-4 sm:px-6 lg:px-0">
        <Reveal>
          <div className="flex w-full flex-col items-center gap-12 lg:h-[340px] lg:flex-row lg:gap-16">
            {/* Left Image Box: Fixed 510px x 340px */}
            <div className="h-[340px] w-full shrink-0 overflow-hidden rounded-2xl lg:w-[510px]">
              <img
                src="/600.png"
                alt="Alex Meridian, Co-Founder & CEO"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right Quote Content */}
            <div className="flex flex-1 flex-col justify-center py-5">
              <blockquote className="pb-[0.59px]">
                <p className="text-2xl font-bold leading-9 text-[#0B2A3E]">
                  <span className="text-[#1A83C8]">“</span>
                  Build the controls first. Speed without evidence just moves
                  the risk downstream.
                </p>
              </blockquote>
              <div className="mt-5 flex flex-col gap-0.5">
                <span className="text-sm font-bold text-[#0B2A3E]">
                  Alex Meridian
                </span>
                <span className="text-sm font-normal text-[#8B9AA6]">
                  Co-Founder &amp; CEO, Zoiko Payroll
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}