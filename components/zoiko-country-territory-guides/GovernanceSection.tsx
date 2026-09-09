import React from "react";

export default function ContentGovernance() {
  const row1Pills = [
    "Draft",
    "Evidence complete",
    "Payroll SME review",
    "Compliance review",
  ];

  const row2Pills = ["Editorial review", "Approved", "Published"];

  const sourceHierarchy = [
    "Primary legislation, official gazette or statutory instrument.",
    "Tax, social-security, labor or payroll regulator guidance.",
    "Official standards bodies, central bank or payment authority.",
    "Recognized professional or institutional secondary sources.",
    "Commercial or competitor content — benchmark only, never authoritative.",
  ];

  return (
    <section className="w-full bg-[#082F49] bg-[url('/uu.png')] bg-cover bg-center bg-no-repeat py-20 font-['Inter',sans-serif] text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:pl-40 lg:pr-12">
        <div className="max-w-[1223px] flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
          
          {/* Left Column: How Guide Content is Governed */}
          <div className="flex-1 max-w-[580px] flex flex-col gap-3.5">
            {/* Header Tag */}
            <div className="flex items-center gap-1.5 text-[#8FC4E8] text-xs font-bold uppercase tracking-wide">
              <span>/</span>
              <span>HOW GUIDE CONTENT IS GOVERNED</span>
            </div>

            {/* Title - Single Line */}
            <h2 className="text-white text-2xl font-bold leading-tight whitespace-nowrap">
              Evidence governs every statutory fact.
            </h2>

            {/* Description with exact Figma text breaks & full rgba(255,255,255,1) white color */}
            <p className="text-white text-sm font-normal leading-6 max-w-[546px]">
              Every guide moves through a fixed review path before publication. High-risk
              <br />
              numeric facts — rates, thresholds, deadlines — cannot ship without an
              <br />
              approved source record and effective period. If a rule lacks current evidence,
              <br />
              the guide shows the explanatory structure without the number rather than an
              <br />
              unverified value.
            </p>

            {/* Status Pills */}
            <div className="flex flex-col gap-2.5 pt-2">
              <div className="flex flex-wrap items-center gap-2">
                {row1Pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 bg-white/30 rounded-full text-white text-xs font-bold whitespace-nowrap"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {row2Pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 bg-white/30 rounded-full text-white text-xs font-bold whitespace-nowrap"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-white/30 self-stretch my-1" />

          {/* Right Column: Source Hierarchy */}
          <div className="flex-1 max-w-[580px] flex flex-col gap-3.5">
            {/* Header Tag */}
            <div className="flex items-center gap-1.5 text-[#8FC4E8] text-xs font-bold uppercase tracking-wide">
              <span>/</span>
              <span>SOURCE HIERARCHY</span>
            </div>

            {/* Title */}
            <h2 className="text-white text-xl lg:text-2xl font-bold leading-tight">
              What a guide is allowed to cite.
            </h2>

            {/* Numbered List */}
            <div className="flex flex-col gap-3.5 pt-2">
              {sourceHierarchy.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <span className="w-6 h-6 shrink-0 bg-white text-[#082F49] rounded-full flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <p className="text-white text-sm font-normal leading-normal pt-0.5">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}