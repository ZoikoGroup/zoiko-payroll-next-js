"use client";

const reviewSteps = [
  "Draft",
  "Evidence complete",
  "Payroll SME review",
  "Compliance review",
  "Editorial review",
  "Approved",
  "Published",
];

const sourceHierarchy = [
  "Primary legislation, official gazette or statutory instrument.",
  "Tax, social-security, labor or payroll regulator guidance.",
  "Official standards bodies, central bank or payment authority.",
  "Recognized professional or institutional secondary sources.",
  "Commercial or competitor content — benchmark only, never authoritative.",
];

export default function GovernanceSection() {
  return (
    <section className="w-full bg-[#0F4C75] py-20">
      <div className="w-full max-w-[1440px] mx-auto pl-10 pr-6 sm:pl-14 sm:pr-4 lg:pl-28 lg:pr-11 flex justify-center items-start gap-14">
        {/* Left Column - Review Path */}
        <div className="w-[580px] flex flex-col gap-3.5">
          <div className="relative h-3.5">
            <div className="w-1.5 h-3.5 absolute left-[-1.48px] top-0 bg-[#5BA3D9] rounded-[1px]" />
            <div className="absolute left-[11px] top-0 text-[#5BA3D9] text-xs font-bold font-['Inter'] uppercase tracking-wide">
              HOW GUIDE CONTENT IS GOVERNED
            </div>
          </div>
          <h2 className="text-white text-2xl font-bold font-['Inter']">
            Evidence governs every statutory fact.
          </h2>
          <p className="text-white text-sm font-normal font-['Inter'] leading-6">
            Every guide moves through a fixed review path before publication. High-risk numeric facts
            — rates, thresholds, deadlines — cannot ship without an approved source record and
            effective period. If a rule lacks current evidence, the guide shows the explanatory
            structure without the number rather than an unverified value.
          </p>

          {/* Review Steps */}
          <div className="h-20 relative">
            <div className="flex flex-wrap gap-2 absolute top-2 left-0">
              {reviewSteps.slice(0, 4).map((step) => (
                <div
                  key={step}
                  className="h-8 px-4 py-2 bg-white/30 rounded-full outline outline-1 outline-offset-[-1px] outline-white/14 flex items-center"
                >
                  <span className="text-[#CBD5E1] text-xs font-bold font-['Inter']">
                    {step}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 absolute top-[50.60px] left-0">
              {reviewSteps.slice(4).map((step) => (
                <div
                  key={step}
                  className="h-8 px-4 py-2 bg-white/30 rounded-full outline outline-1 outline-offset-[-1px] outline-white/14 flex items-center"
                >
                  <span className="text-[#CBD5E1] text-xs font-bold font-['Inter']">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-80 h-0 origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-white/50" />

        {/* Right Column - Source Hierarchy */}
        <div className="w-[580px] pb-4 flex flex-col gap-3.5">
          <div className="relative h-3.5">
            <div className="w-1.5 h-3.5 absolute left-[-1.48px] top-0 bg-[#5BA3D9] rounded-[1px]" />
            <div className="absolute left-[11px] top-0 text-blue-300 text-xs font-bold font-['Inter'] uppercase tracking-wide">
              SOURCE HIERARCHY
            </div>
          </div>
          <h3 className="text-white text-xl font-bold font-['Inter']">
            What a guide is allowed to cite.
          </h3>
          <div className="pt-2 flex flex-col gap-3.5">
            {sourceHierarchy.map((source, idx) => (
              <div key={idx} className="inline-flex items-start gap-3.5">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[#082F49] text-xs font-bold font-['Inter']">
                    {idx + 1}
                  </span>
                </div>
                <span className="text-white text-sm font-normal font-['Inter']">
                  {source}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
