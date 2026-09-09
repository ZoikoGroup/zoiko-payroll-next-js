import Image from "next/image";
import Reveal from "../ui/Reveal";

const provenanceItems = [
  {
    title: "Worker & employment",
    description: "Status, assignment, org context.",
  },
  {
    title: "Compensation & earnings",
    description: "Base, variable, adjustments.",
  },
  {
    title: "Time, leave & schedules",
    description: "Hours, absence, calendars.",
  },
  {
    title: "Benefits & deductions",
    description: "Elections and plan changes.",
  },
  {
    title: "Expenses & reimbursements",
    description: "Approved claims with dates.",
  },
  {
    title: "Tax & statutory inputs",
    description: "Jurisdiction-specific values.",
  },
  {
    title: "Banking / payment readiness",
    description: "Verified before disbursement.",
  },
  {
    title: "Files / APIs / integrations",
    description: "Batch and real-time intake.",
  },
];

export default function SourceProvenanceSection() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[37px]">
            {/* Left Column: Image with floating badges */}
            <div className="w-full lg:flex-1 relative flex flex-col justify-center items-center lg:items-end">
              <div className="relative w-full max-w-[530px] h-[420px] rounded-[20px] overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/ed.jpg"
                  alt="Reviewing payroll input sources"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1F3A]/75 via-[#0A78C3]/40 to-transparent" />

                {/* Top-left Badge: Source traced */}
                <div className="absolute left-5 top-6 inline-flex items-center gap-2 rounded-[10px] bg-white px-3.5 py-2 shadow-[0px_6px_20px_0px_rgba(15,23,42,0.08)] outline outline-1 outline-offset-[-1px] outline-slate-200">
                  <span className="text-xs font-semibold font-['Inter'] text-slate-900 leading-5">
                    Source traced
                  </span>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 p-1">
                    <span className="size-1.5 rounded-[3px] bg-[#0F6B48]" />
                  </span>
                </div>

                {/* Bottom-right Badge: Effective date shown */}
                <div className="absolute right-5 bottom-6 inline-flex items-center gap-2 rounded-[10px] bg-white px-3.5 py-2 shadow-[0px_6px_20px_0px_rgba(15,23,42,0.08)] outline outline-1 outline-offset-[-1px] outline-slate-200">
                  <span className="text-xs font-semibold font-['Inter'] text-slate-900 leading-5">
                    Effective date shown
                  </span>
                  <span className="inline-flex items-center rounded-full bg-violet-100 p-1">
                    <span className="size-1.5 rounded-[3px] bg-[#0A78C3]" />
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Copy, Grid Cards, Callout */}
            <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-4">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <div className="w-4 h-px bg-[#0A78C3]" />
                <span className="text-[#0A78C3] text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest">
                  SOURCE &amp; PROVENANCE
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-slate-900 text-4xl font-extrabold font-['Inter'] leading-9">
                Know what entered payroll —<br />and where it came from
              </h2>

              {/* Subtitle */}
              <p className="max-w-xl text-[#5B6472] text-base font-normal font-['Inter'] leading-6">
                Source, effective date, actor and state are traceable<br />
                where applicable.
              </p>

              {/* Grid of Provenance Cards */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {provenanceItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col justify-start items-start gap-1 rounded-[10px] bg-white p-3.5 outline outline-1 outline-offset-[-1px] outline-[#E3E7EE] shadow-xs"
                  >
                    <div className="inline-flex items-center gap-1.5">
                      <div className="relative w-3 h-3 flex items-center justify-center shrink-0">
                        <Image
                          src="/blue.png"
                          alt="checkmark"
                          width={12}
                          height={12}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[#5B6472] text-xs font-normal font-['Inter'] leading-5 pl-4.5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Callout Banner */}
              <div className="w-full rounded-tr-lg rounded-br-lg border-l-[3px] border-[#0A78C3] bg-[#E7EDFD] px-4 py-3">
                <p className="text-slate-900 text-sm font-normal font-['Inter'] leading-5">
                  Internal identifiers and sensitive production data are never exposed in the<br />public UI.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}