import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6f8]">
      <div className="relative mx-auto max-w-[1240px] px-4 py-11 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-14 lg:gap-8">
          
          {/* Left Column */}
          <Reveal className="w-full lg:max-w-[620px] flex flex-col items-start text-left">
            {/* Badge */}
            <div className="mb-[21px]">
              <span className="inline-block rounded-full bg-[#eef2ff] border border-[#dde4ff] px-[11px] py-[6px] text-[11px] font-semibold tracking-[1.54px] text-[#2049c9] uppercase">
                ENTERPRISE PAYROLL
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[34px] leading-[36px] font-bold tracking-[-1.02px] text-[#0b1220] lg:text-[46px] lg:leading-[48px]">
              Govern Payroll at Enterprise<br />
              Scale Without Losing<br />
              Local Control
            </h1>

            {/* Subtext */}
            <p className="mt-5 text-[17.5px] leading-[27.13px] text-[#4b5563]">
              Govern payroll across complex entities, regions, jurisdictions, payroll groups, approval chains, providers and connected systems from one controlled environment—without losing accountable regional and local ownership.
            </p>

            {/* Direct Answer Box */}
            <div className="mt-6 w-full rounded-[10px] bg-white border border-[#e3e7ec] border-l-[3px] border-l-[#2049c9] px-[20px] pt-[23px] pb-[18px]">
              <p className="text-[10.5px] font-bold tracking-[1.26px] text-[#6b7280] uppercase mb-1.5">
                DIRECT ANSWER
              </p>
              <p className="text-[15px] leading-[22.5px] text-[#1f2937]">
                Zoiko Payroll gives enterprise organizations a governed operating model for payroll readiness, review, approval, records, reconciliation, reporting, integrations, assurance and enterprise service coordination.
              </p>
            </div>

            {/* CTA Buttons & Link */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/book-a-demo"
                className="w-full sm:w-auto inline-flex justify-center items-center rounded-[9px] bg-[#2049c9] px-[22px] min-h-[44px] text-[15px] font-semibold text-white transition-all hover:bg-[#1a3d54]"
              >
                Book a demo
              </Link>
              <Link
                href="/solution"
                className="w-full sm:w-auto inline-flex justify-center items-center rounded-[9px] border border-[#cbd2db] bg-white px-[22px] min-h-[44px] text-[15px] font-semibold text-[#0b1220] transition-all hover:bg-slate-50"
              >
                Find your solution
              </Link>
              <Link
                href="/product/payroll-processing"
                className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2 inline-flex justify-center items-center px-1 py-2 text-[14.5px] font-semibold text-[#2049c9] transition-all hover:text-[#1a3d54]"
              >
                Explore Payroll Processing →
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 border-t border-[#e3e7ec] pt-5 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-[12.5px]">
                <span className="font-semibold text-[#0b1220]">14 entities</span>
                <span className="text-[#6b7280]"> in one scope tree</span>
              </div>
              <div className="text-[12.5px]">
                <span className="font-semibold text-[#0b1220]">22 payroll groups</span>
                <span className="text-[#6b7280]"> tracked per cycle</span>
              </div>
              <div className="text-[12.5px]">
                <span className="font-semibold text-[#0b1220]">Evidence</span>
                <span className="text-[#6b7280]"> on every material action</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column (Image) */}
          <Reveal delay={120} className="w-full mt-6 lg:mt-0">
            <img
              src="/images/enterprise-organizations/hero.png"
              alt="Enterprise Payroll Dashboard on Laptop"
              loading="lazy"
              className="w-full h-auto drop-shadow-2xl"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
