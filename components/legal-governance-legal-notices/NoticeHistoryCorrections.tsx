import React from "react";

export default function NoticeHistoryCorrections() {
  const historyItems = [
    {
      title: "Regional Notice (EU) — corrected",
      details:
        "Legal team · Jun 2025 · Outcome: Correction approved",
    },
    {
      title: "Regional Notice (EU) — superseded",
      details:
        "Legal team · Jan 2026 · Outcome: Replaced by current record",
    },
    {
      title: "Regional Notice (EU) — current record published",
      details:
        "Legal team · Jan 2026 · Outcome: Active current",
    },
  ];

  return (
    <section className="w-full bg-[#F7FAFC] px-6 py-16 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-5">
        {/* Header */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4">
          {/* Label */}
          <div className="inline-flex items-center justify-center gap-1.5">
            <div className="flex h-5 flex-col items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0A8FD0]" />
            </div>

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0A8FD0]">
              Notice history &amp; corrections
            </div>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-center">
            <h2 className="text-center font-['Inter'] text-3xl font-extrabold leading-10 text-[#0D3554]">
              No silent rewrite. Every prior record stays
              <br className="hidden md:block" />
              visible.
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative w-full max-w-[640px] pl-8 pt-2">
          {/* Vertical Line */}
          <div className="absolute left-[5px] top-3 h-40 w-0.5 bg-[#DCE4EC]" />

          {historyItems.map((item, index) => (
            <div
              key={item.title}
              className={`relative flex flex-col items-start gap-0.5 ${
                index !== historyItems.length - 1 ? "pb-4" : ""
              }`}
            >
              {/* Title */}
              <div className="w-full font-['Inter'] text-xs font-bold leading-5 text-[#0D3554]">
                {item.title}
              </div>

              {/* Details */}
              <div className="w-full font-['Inter'] text-xs font-normal leading-5 text-[#6C8498]">
                {item.details}
              </div>

              {/* Timeline Dot */}
              <div className="absolute -left-[31px] top-[3px] flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-[#0A8FD0]">
                <div className="h-3.5 w-3.5 rounded-full bg-white shadow-[0px_0px_0px_1px_rgba(10,143,208,1)]" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Description */}
        <div className="flex w-full flex-col items-center">
          <p className="max-w-[900px] text-center font-['Inter'] text-xs font-normal leading-5 text-[#6C8498]">
            Illustrative event trail. Historical records carry a prominent
            &quot;Superseded&quot; or &quot;Corrected&quot; label with a direct
            link to the current version.
          </p>
        </div>
      </div>
    </section>
  );
}