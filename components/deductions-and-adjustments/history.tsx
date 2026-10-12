import React from "react";

const historyItems = [
  {
    title: "Change record created",
    meta: "System · Aug 22, 2026, 09:10",
  },
  {
    title: "Validation completed — passed",
    meta: "System · Aug 22, 2026, 09:12",
  },
  {
    title: "Effective date set",
    meta: "Payroll Ops · Aug 22, 2026, 10:05",
  },
  {
    title: "Status updated to Active",
    meta: "Payroll Ops · Aug 24, 2026, 08:30",
  },
];

export default function History() {
  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-5 px-0 lg:px-24">

        {/* Heading */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4">

          {/* Label */}
          <div className="flex h-5 items-center justify-center gap-1.5">
            <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0A8FD0]" />

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0A8FD0]">
              Effective date &amp; history
            </div>
          </div>

          {/* Title */}
          <div className="w-full text-center font-['Inter'] text-3xl font-extrabold leading-10 text-[#0A2E4B]">
            An event sequence — never described as
            <br />
            an &quot;immutable audit&quot; by default.
          </div>
        </div>

        {/* Timeline */}
        <div className="relative w-full max-w-[720px] pl-8 pt-2">

          {/* Vertical line */}
          <div
            className="
              absolute
              left-[7px]
              top-[10px]
              bottom-[10px]
              w-[2px]
              bg-[#D9E3EB]
            "
          />

          {/* Timeline items */}
          <div className="relative flex flex-col">
            {historyItems.map((item, index) => (
              <div
                key={item.title}
                className={`
                  relative flex min-h-[60px] items-start
                  ${index !== historyItems.length - 1 ? "pb-4" : ""}
                `}
              >
                {/* Timeline dot */}
                <div
                  className="
                    absolute
                    -left-[32px]
                    top-[2px]
                    z-10
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#0A8FD0]
                    bg-white
                  "
                >
                  <div className="h-2 w-2 rounded-full bg-[#0A8FD0]" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-0.5">
                  <div className="font-['Inter'] text-xs font-bold leading-5 text-[#0A2E4B]">
                    {item.title}
                  </div>

                  <div className="font-['Inter'] text-xs font-normal leading-5 text-[#7890A4]">
                    {item.meta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="w-full text-center font-['Inter'] text-xs font-normal leading-5 text-[#7890A4]">
          Illustrative sequence for this design template. Exact history retention
          and terminology follow approved Trust and Product sources.
        </div>
      </div>
    </section>
  );
}