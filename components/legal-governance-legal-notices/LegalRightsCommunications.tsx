import React from "react";

export default function LegalRightsCommunications() {
  const communicationTypes = [
    "Intellectual property notice",
    "Formal legal notice",
    "Privacy rights request",
    "Security disclosure",
  ];

  const actions = [
    "Print current notice",
    "Download PDF",
    "Copy citation",
  ];

  return (
    <section className="w-full bg-[#E9F0F8] px-6 py-16 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-3 lg:px-24">
        {/* Header */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4">
          {/* Label */}
          <div className="inline-flex items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0A8FD0]" />
            </div>

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0A8FD0]">
              Legal &amp; rights communications
            </div>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-center">
            <h2 className="text-center font-['Inter'] text-3xl font-extrabold leading-10 text-[#0D3554]">
              Specialist routes — never a generic contact
              <br className="hidden md:block" />
              form for formal notices.
            </h2>
          </div>
        </div>

        {/* Communication Type Pills */}
        <div className="flex w-full flex-wrap items-center justify-center gap-2.5 pt-3">
          {communicationTypes.map((type) => (
            <div
              key={type}
              className="inline-flex items-center justify-center rounded-[20px] border border-[#DCE4EC] bg-white px-4 py-2"
            >
              <span className="font-['Inter'] text-xs font-semibold leading-5 text-[#163E5C]">
                {type}
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="flex w-full flex-col items-center pt-1">
          <p className="text-center font-['Inter'] text-xs font-normal leading-5 text-[#6C8498]">
            Each communication type routes to its specialist process — a
            formal legal notice is never treated the same as a general
            inquiry.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex w-full flex-wrap items-center justify-center gap-3 pt-2">
          {actions.map((action) => (
            <button
              key={action}
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-[#DCE4EC] bg-white px-6 py-3 transition-colors hover:bg-[#F7FAFC]"
            >
              <span className="text-center font-['Inter'] text-sm font-bold leading-6 text-[#0D3554]">
                {action}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="flex w-full flex-col items-center">
          <p className="text-center font-['Inter'] text-xs font-normal leading-5 text-[#6C8498]">
            Print and download snapshots always include status, version and
            effective context — a stale source is never exported as current.
          </p>
        </div>
      </div>
    </section>
  );
}