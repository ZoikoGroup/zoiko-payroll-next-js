import Link from "next/link";
import Reveal from "../ui/Reveal";

const stats = [
  { value: "6 of 9", label: "Groups ready", color: "text-[#1C8A58]" },
  { value: "2", label: "Needs attention", color: "text-[#A6650F]" },
  { value: "1", label: "Blocked", color: "text-[#C23A3A]" },
  { value: "9m", label: "Oldest evidence", color: "text-[#08132B]" },
];

export default function HeroSection() {
  return (
    <section className="bg-[#F6F8FC] pt-16 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left Column */}
          <Reveal className="w-full max-w-[558px]">
            <p className="mb-4 text-[13px] font-bold tracking-[0.06em] text-[#2F6FED] uppercase">
              Business_Leaders
            </p>

            <h1 className="text-[2.5rem] leading-[1.17] font-extrabold tracking-tight text-[#08132B] lg:text-[43px]">
              See Payroll Status Without{" "}
              <span className="text-[#068ACE]">Operational Noise</span>
            </h1>

            <p className="mt-4 text-[15.5px] leading-[1.6] text-[#3A4356]">
              Know whether payroll is on track, which material issues need
              attention, and who owns the next action — across every entity
              you&apos;re responsible for.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="inline-flex items-center justify-center rounded-lg bg-[#0397D6] px-6 py-[13px] text-[14.5px] font-semibold text-white shadow-sm transition-all hover:bg-[#0380B8]"
              >
                Book a Demo →
              </Link>
              <Link
                href="/solution"
                className="inline-flex items-center justify-center rounded-lg border border-[#E6E9F0] bg-white px-6 py-[13px] text-[14.5px] font-semibold text-[#08132B] shadow-sm transition-all hover:bg-slate-50"
              >
                Find Your Solution
              </Link>
            </div>

            <div className="mt-5 flex items-center gap-3.5">
              <div className="flex items-start">
                <div className="relative -mr-2.5 size-[38px] shrink-0 overflow-hidden rounded-full border-2 border-white">
                  <img
                    src="/images/business-leaders/customer-1.png"
                    alt="Customer"
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
                <div className="relative -mr-2.5 size-[38px] shrink-0 overflow-hidden rounded-full border-2 border-white">
                  <img
                    src="/images/business-leaders/customer-2.png"
                    alt="Customer"
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
                <div className="relative size-[38px] shrink-0 overflow-hidden rounded-full border-2 border-white">
                  <img
                    src="/images/business-leaders/customer-3.png"
                    alt="Customer"
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
              </div>
              <div className="text-[12.5px] leading-[1.4] text-[#3A4356]">
                <p>Trusted by 500+ organizations</p>
                <p>
                  <span className="text-[13px] text-[#F2A93B]">★★★★★</span>{" "}
                  4.9 (120 reviews)
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column (Image) */}
          <Reveal delay={120} className="relative mx-auto w-full max-w-[500px]">
            <div className="relative h-[260px] w-full overflow-hidden rounded-2xl sm:h-[320px] lg:h-[387px]">
              <img
                src="/images/business-leaders/hero.png"
                alt="Executive reviewing payroll status on a tablet"
                loading="lazy"
                className="size-full object-cover"
              />
              <div className="absolute right-[22px] bottom-[22px] min-w-[150px] rounded-xl bg-white px-[18px] pt-[13px] pb-[14px] shadow-[0px_16px_40px_-12px_rgba(8,19,43,0.35)]">
                <p className="text-[11px] text-[#6B7488]">Groups Ready</p>
                <p className="mt-0.5">
                  <span className="text-[17px] font-bold text-[#1C8A58]">6</span>{" "}
                  <span className="text-[12px] font-medium text-[#6B7488]">of 9</span>
                </p>
                <p className="mt-0.5 text-[10.5px] text-[#6B7488]">As of 09:40 UTC</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats Row */}
        <Reveal delay={200}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[14px] border border-[#E6E9F0] bg-white px-[22px] pt-[21px] pb-[22px] text-center"
              >
                <p className={`text-[24px] font-extrabold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="mt-1 text-[12px] text-[#6B7488]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
