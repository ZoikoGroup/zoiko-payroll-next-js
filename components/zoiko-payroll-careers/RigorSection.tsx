import Link from "next/link";

export default function MissionSection() {
  const stats = [
    { label: "FOUNDED", value: "2019" },
    { label: "TEAM MEMBERS", value: "340+" },
    { label: "JURISDICTIONS SUPPORTED", value: "15" },
    { label: "PAYROLL PROCESSED / YR", value: "$1.2B" },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-20">
      <div className="mx-auto max-w-[1096px] px-4 sm:px-6 lg:px-0 flex flex-col gap-14">
        {/* Top Header & Intro */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Left Title */}
          <div className="max-w-[320px]">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0B2A3E]">
              Rigor isn&apos;t a buzzword
              <br />
              when it&apos;s payroll.
            </h2>
          </div>

          {/* Right Content */}
          <div className="flex max-w-[518px] flex-col items-start gap-9">
            <p className="text-base font-normal leading-7 text-[#5A6B78]">
              Payroll touches every employee, every pay cycle, in every
              <br className="hidden sm:inline" /> jurisdiction we support.
              That&apos;s why we build with structured
              <br className="hidden sm:inline" /> approvals, clear audit
              trails and local precision — not
              <br className="hidden sm:inline" /> shortcuts. Come help us build
              it right.
            </p>

            <Link
              href="#about"
              className="inline-flex items-center justify-center rounded-lg bg-[#FFFFFF] px-6 py-3 text-sm font-bold text-[#0B2A3E] ring-1 ring-inset ring-[#C7D4DD] transition-all hover:bg-[#EAF1F6]"
            >
              About us
            </Link>
          </div>
        </div>

        {/* Bottom Banner Container */}
        <div className="w-full min-h-[340px] md:h-[480px] overflow-hidden rounded-2xl bg-[#EAF1F6] flex flex-col lg:flex-row">
          {/* Left Image Section */}
          <div className="w-full lg:w-[574px] h-[260px] sm:h-[380px] md:h-[480px] shrink-0 bg-[#FFFFFF]">
            <img
              src="/700.png"
              alt="Zoiko Payroll team working"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right 4 Stats Grid Cards (Aligned to Start/Left) */}
          <div className="grid grid-cols-2 flex-1 divide-x divide-y divide-[#DCE7EE] bg-[#EAF1F6] h-auto lg:h-[480px]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-start px-8 py-6 lg:py-0 text-left"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-[#8B9AA6]">
                  {stat.label}
                </span>
                <span className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0B2A3E]">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}