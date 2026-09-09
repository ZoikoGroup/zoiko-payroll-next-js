import Image from "next/image";
import Reveal from "../ui/Reveal";

const ingestionItems = [
  {
    title: "Connector / API",
    description: "Schema-validated, idempotent.",
  },
  {
    title: "Secure file import",
    description: (
      <>
        Mapped, previewed, quarantined if<br />unsafe.
      </>
    ),
  },
  {
    title: "Manual input",
    description: "Authorized roles only, audit trail.",
  },
  {
    title: "Late changes",
    description: "Flagged with current/retro impact.",
  },
];

export default function IngestionSection() {
  return (
    <section className="w-full bg-[#F9FAFB] pt-20 pb-[84px] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[46px]">
          {/* Left Content Column */}
          <Reveal className="w-full lg:flex-1 flex flex-col justify-start items-start gap-3">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <div className="w-4 h-px bg-[#0A78C3]" />
              <span className="text-[#0A78C3] text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest">
                INGESTION &amp; DATA OPERATIONS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
              A controlled intake contract, not<br />an open pipe
            </h2>

            {/* Subtitle */}
            <p className="text-[#5B6472] text-base font-normal font-['Inter'] leading-6 pb-1">
              Every path — API, file or manual — is authenticated, validated and<br className="hidden sm:inline" /> traceable.
            </p>

            {/* 2x2 Grid of Ingestion Cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
              {ingestionItems.map((item, index) => (
                <div
                  key={index}
                  className="px-3.5 py-3 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#E3E7EE] shadow-xs flex flex-col justify-start items-start gap-1"
                >
                  <div className="w-full inline-flex justify-start items-center gap-1.5">
                    {/* Reduced tick size */}
                    <div className="w-2.5 h-2.5 relative flex items-center justify-center shrink-0">
                      <Image
                        src="/blue.png"
                        alt="Check"
                        width={10}
                        height={10}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
                      {item.title}
                    </span>
                  </div>
                  <div className="pl-4 flex flex-col justify-start items-start">
                    <p className="text-[#5B6472] text-xs font-normal font-['Inter'] leading-5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Notice Banner */}
            <div className="w-full px-4 py-3 bg-[#E7EDFD] rounded-tr-lg rounded-br-lg border-l-[3px] border-[#0A78C3] flex flex-col justify-start items-start mt-2">
              <p className="text-slate-900 text-sm font-normal font-['Inter'] leading-5">
                Partial failure isolates bad records — successful ones stay traceable. Retries<br />never duplicate a pay event.
              </p>
            </div>
          </Reveal>

          {/* Right Image Column with Floating Badges */}
          <Reveal className="w-full lg:flex-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-[530px] h-[400px] relative rounded-[20px] overflow-hidden shadow-sm border border-slate-200">
              <Image
                src="/vg.jpg"
                alt="Reviewing an ingestion pipeline"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1F3A]/60 to-[#0B1F3A]/20 pointer-events-none" />

              {/* Top Right Badge */}
              <div className="absolute top-6 right-6 px-3 py-2 bg-white rounded-[10px] shadow-[0px_6px_20px_0px_rgba(15,23,42,0.08)] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex items-center gap-2">
                <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-4">
                  478 accepted
                </span>
                <div className="pl-1.5 pr-2 py-1 bg-slate-200 rounded-[100px] inline-flex justify-center items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-800 rounded-[3px]" />
                </div>
              </div>

              {/* Bottom Left Badge */}
              <div className="absolute bottom-6 left-6 px-3 py-2 bg-white rounded-[10px] shadow-[0px_6px_20px_0px_rgba(15,23,42,0.08)] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex items-center gap-2">
                <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-4">
                  4 quarantined
                </span>
                <div className="pl-1.5 pr-2 py-1 bg-orange-100 rounded-[100px] inline-flex justify-center items-center">
                  <div className="w-1.5 h-1.5 bg-yellow-700 rounded-[3px]" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}