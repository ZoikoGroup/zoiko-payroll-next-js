import Image from "next/image";
import Reveal from "../ui/Reveal";

const controlItems = [
  {
    title: "Completeness",
    description: "Required fields present.",
  },
  {
    title: "Format & type",
    description: "Structurally valid values.",
  },
  {
    title: "Worker & employment",
    description: "Checked against current status.",
  },
  {
    title: "Effective date & period",
    description: "Timing aligned to the run.",
  },
  {
    title: "Cross-field consistency",
    description: "Related values agree.",
  },
  {
    title: "Payroll configuration",
    description: "Matches configured rules.",
  },
  {
    title: "Jurisdiction-aware rules",
    description: "Local context applied.",
  },
  {
    title: "Duplicate & conflict",
    description: "Flagged before advancing.",
  },
];

export default function ControlFrameworkSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-14">
            {/* Left Column: Copy, Grid Cards, Callout */}
            <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-4">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <div className="w-4 h-px bg-[#0A78C3]" />
                <span className="text-[#0A78C3] text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest">
                  CONTROL FRAMEWORK
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
                Checked in the context that<br />makes it payroll-ready
              </h2>

              {/* Subtitle */}
              <p className="max-w-xl text-gray-500 text-base font-normal font-['Inter'] leading-6">
                Deterministic rules govern readiness. AI findings are<br />
                review signals only.
              </p>

              {/* Grid of Control Cards */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {controlItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col justify-start items-start gap-1 rounded-[10px] bg-white p-3.5 outline outline-1 outline-offset-[-1px] outline-slate-200 shadow-xs"
                  >
                    <div className="inline-flex items-center gap-1.5">
                      <div className="relative w-2.5 h-2.5 flex items-center justify-center shrink-0">
                        <Image
                          src="/blue.png"
                          alt="checkmark"
                          width={10}
                          height={10}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-5 pl-4">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Callout Banner */}
              <div className="w-full rounded-tr-lg rounded-br-lg border-l-[3px] border-[#0A78C3] bg-[#E7EDFD] px-4 py-2.5">
                <p className="text-slate-900 text-sm font-normal font-['Inter'] leading-5">
                  Advancement blocks only on a genuinely unresolved dependency — not<br />every informational finding.
                </p>
              </div>
            </div>

            {/* Right Column: Image with gradient overlay */}
            <div className="w-full lg:flex-1 relative flex flex-col justify-center items-center lg:items-start">
              <div className="relative w-full max-w-[530px] h-[380px] rounded-[20px] overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/er.png"
                  alt="Reviewing validation control checks"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1F3A]/75 via-[#0A78C3]/40 to-transparent" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}