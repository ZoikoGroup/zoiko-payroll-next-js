import Image from "next/image";

const stages = [
  {
    num: "01",
    title: "Discover",
    desc: "Entities, jurisdictions, calendars, users, controls.",
  },
  {
    num: "02",
    title: "Design / Configure",
    desc: "Approved rules, workflows, roles, access.",
  },
  {
    num: "03",
    title: "Prepare / Migrate",
    desc: "Map, validate, cleanse, transfer data.",
  },
  {
    num: "04",
    title: "Validate",
    desc: "Test calculations, records, access, reports.",
  },
  {
    num: "05",
    title: "Parallel Run",
    desc: "Compare outputs with existing process.",
  },
  {
    num: "06",
    title: "Launch",
    desc: "Controlled cutover and user activation.",
  },
  {
    num: "07",
    title: "Stabilize / Optimize",
    desc: "Review outcomes and workflow improvements.",
  },
];

export default function Implementation() {
  return (
    <section className="w-full px-32 py-20 bg-white border-t border-slate-100">
      <div className="w-full max-w-[1180px] mx-auto px-8 flex flex-col items-start gap-10">
        {/* Header */}
        <div className="w-[680px] max-w-[680px] pt-[1.63px] flex flex-col items-start">
          <div className="w-60 h-5 relative">
            <div className="absolute left-[0px] top-[-1px] text-sky-700 text-xs font-bold uppercase leading-5 tracking-wide">
              / Implementation + Migration
            </div>
          </div>
          <div className="pt-3.5 text-sky-950 text-4xl font-extrabold leading-10">
            A governed roadmap, not an instant launch
          </div>
          <div className="w-[640px] max-w-[640px] text-slate-600 text-base leading-6">
            Every stage has an evidence gate. Conversion only happens after the
            operating model and jurisdiction availability are both clear.
          </div>
        </div>

        {/* 7 stages */}
        <div className="w-full pt-1 flex items-start gap-2.5">
          {stages.map((s) => (
            <div
              key={s.num}
              className="w-36 px-3 py-3.5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-100 flex flex-col gap-[4.90px]"
            >
              <div className="text-sky-700 text-xs font-extrabold leading-4">
                {s.num}
              </div>
              <div className="text-sky-950 text-xs font-bold leading-4">
                {s.title}
              </div>
              <div className="text-gray-400 text-xs leading-4">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Image placeholder */}
        <div className="w-full bg-white rounded-2xl shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-100 overflow-hidden">
          {/* <div className="w-full h-56 bg-gradient-to-br from-slate-100 to-slate-200" /> */}
          <img
            src="/images/global-payroll/10.png"
            alt="image"
            className="w-full h-56"
          />
        </div>

        {/* CTA Banner */}
        <div className="w-full h-96 bg-cyan-950 rounded-3xl shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] overflow-hidden relative flex">
          {/* Left Content Area */}
          <div className="w-1/2 px-12 pt-14 pb-12 flex flex-col items-start gap-3.5 relative z-10">
            <div className="w-36 h-5 relative">
              <div className="absolute left-[0px] top-[-1px] text-blue-300 text-xs font-bold uppercase leading-5 tracking-wide">
                / Final Conversion
              </div>
            </div>
            <div className="text-white text-[32px] font-extrabold leading-10">
              Bring every pay run under control
            </div>
            <div className="w-96 text-slate-300 text-base leading-6">
              Tell us where your people work, how payroll operates today, and
              what your organization needs to improve. We&apos;ll confirm
              jurisdiction availability before anything else.
            </div>
            <div className="w-96 h-16 pt-3.5 flex items-start gap-3.5">
              <div className="w-56 px-5 py-3 bg-gradient-to-b from-blue-600 rounded-[10px] shadow-[0px_6px_16px_0px_rgba(11,94,153,0.28)] flex items-center justify-center cursor-pointer">
                <span className="text-white text-sm font-semibold">
                  Book a demo
                </span>
              </div>
            </div>
          </div>

          {/* Right Background Image Area */}
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <Image
              src="/images/global-payroll/11.png"
              alt="CTA"
              width={600}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
