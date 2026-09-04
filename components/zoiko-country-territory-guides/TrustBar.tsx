"use client";

export default function TrustBar() {
  const items = [
    {
      title: "Source-backed",
      subtitle: "Cited to primary authorities",
      icon: (
        <div className="relative w-4 h-4 overflow-hidden">
          <div className="w-3 h-0.5 absolute left-[3px] top-[12.75px] outline outline-[1.50px] outline-offset-[-0.75px] outline-sky-600" />
          <div className="w-3 h-3.5 absolute left-[3px] top-[1.50px] outline outline-[1.50px] outline-offset-[-0.75px] outline-sky-600" />
        </div>
      ),
    },
    {
      title: "Review date shown",
      subtitle: "On every guide, always visible",
      icon: (
        <div className="relative w-4 h-4 overflow-hidden">
          <div className="w-3.5 h-3.5 absolute left-[2.25px] top-[2.25px] outline outline-[1.50px] outline-offset-[-0.75px] outline-sky-600" />
          <div className="w-0.5 h-1.5 absolute left-[9px] top-[5.25px] outline outline-[1.50px] outline-offset-[-0.75px] outline-sky-600" />
        </div>
      ),
    },
    {
      title: "Effective-dated facts",
      subtitle: "Volatile figures carry a date",
      icon: (
        <div className="relative w-4 h-4 overflow-hidden">
          <div className="w-3.5 h-3.5 absolute left-[2.25px] top-[2.25px] outline outline-[1.50px] outline-offset-[-0.75px] outline-sky-600" />
          <div className="w-2 h-2 absolute left-[5.25px] top-[3px] outline outline-[1.50px] outline-offset-[-0.75px] outline-sky-600" />
        </div>
      ),
    },
    {
      title: "Informational only",
      subtitle: "Not legal or tax advice",
      icon: (
        <div className="relative w-4 h-4 overflow-hidden">
          <div className="w-3.5 h-3.5 absolute left-[2.25px] top-[2.25px] outline outline-[1.50px] outline-offset-[-0.75px] outline-sky-600" />
          <div className="w-0 h-[3px] absolute left-[9px] top-[6px] outline outline-[1.50px] outline-offset-[-0.75px] outline-sky-600" />
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-white border-t border-b border-[#E2E8F0]">
      <div className="w-full max-w-[1440px] mx-auto pl-10 pr-6 sm:pl-20 sm:pr-12 lg:pl-40 lg:pr-24 py-6 flex justify-center items-start">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`w-72 self-stretch px-7 flex items-center gap-3 ${
              idx < items.length - 1 ? "border-r border-[#E2E8F0]" : ""
            }`}
          >
            <div className="w-9 h-9 bg-[#F1F5F9] rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#082F49] text-sm font-bold font-['Inter'] leading-4">
                {item.title}
              </span>
              <span className="text-[#4E6172] text-xs font-normal font-['Inter']">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
