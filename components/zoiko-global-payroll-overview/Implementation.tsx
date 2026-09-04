import Image from "next/image";

const stages = [
  { num: "01", title: "Discover", desc: "Entities, jurisdictions,\ncalendars, users,\ncontrols." },
  { num: "02", title: "Design / Configure", desc: "Approved rules,\nworkflows, roles,\naccess." },
  { num: "03", title: "Prepare / Migrate", desc: "Map, validate, cleanse,\ntransfer data." },
  { num: "04", title: "Validate", desc: "Test calculations,\nrecords, access,\nreports." },
  { num: "05", title: "Parallel Run", desc: "Compare outputs with\nexisting process." },
  { num: "06", title: "Launch", desc: "Controlled cutover and\nuser activation." },
  { num: "07", title: "Stabilize / Optimize", desc: "Review outcomes and\nworkflow\nimprovements." },
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
          <div className="pt-3.5 text-sky-950 text-4xl font-extrabold leading-10 whitespace-nowrap">
            A governed roadmap, not an instant launch
          </div>
          <div className="w-[640px] max-w-[640px] text-slate-600 text-base leading-6">
            Every stage has an evidence gate. Conversion only happens after the operating model and jurisdiction availability are both clear.
          </div>
        </div>          {/* 7 stages */}
          <div className="self-stretch pt-1 inline-flex justify-center items-start gap-2.5 -ml-[55px]">
            {/* 01 Discover */}
            <div className="w-36 h-[140px] px-3 py-3.5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-100 inline-flex flex-col justify-start items-start gap-[4.90px]">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-700 text-xs font-extrabold font-['Inter'] leading-4">01</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-950 text-xs font-bold font-['Inter'] leading-4">Discover</div>
              </div>
              <div className="self-stretch pb-[3.11px] flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-gray-400 text-xs font-normal font-['Inter'] leading-4">Entities, jurisdictions,<br/>calendars, users,<br/>controls.</div>
              </div>
            </div>
            {/* 02 Design / Configure */}
            <div className="w-36 h-[140px] px-3 py-3.5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-100 inline-flex flex-col justify-start items-start gap-[4.90px]">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-700 text-xs font-extrabold font-['Inter'] leading-4">02</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-950 text-xs font-bold font-['Inter'] leading-4">Design / Configure</div>
              </div>
              <div className="self-stretch pb-[3.11px] flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-gray-400 text-xs font-normal font-['Inter'] leading-4">Approved rules,<br/>workflows, roles,<br/>access.</div>
              </div>
            </div>
            {/* 03 Prepare / Migrate */}
            <div className="w-36 h-[140px] px-3 pt-3.5 pb-7 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-100 inline-flex flex-col justify-start items-start gap-[5px]">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-700 text-xs font-extrabold font-['Inter'] leading-4">03</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-950 text-xs font-bold font-['Inter'] leading-4">Prepare / Migrate</div>
              </div>
              <div className="self-stretch pb-1 flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-gray-400 text-xs font-normal font-['Inter'] leading-4">Map, validate, cleanse,<br/>transfer data.</div>
              </div>
            </div>
            {/* 04 Validate */}
            <div className="w-36 h-[140px] px-3 py-3.5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-100 inline-flex flex-col justify-start items-start gap-[4.90px]">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-700 text-xs font-extrabold font-['Inter'] leading-4">04</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-950 text-xs font-bold font-['Inter'] leading-4">Validate</div>
              </div>
              <div className="self-stretch pb-[3.11px] flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-gray-400 text-xs font-normal font-['Inter'] leading-4">Test calculations,<br/>records, access,<br/>reports.</div>
              </div>
            </div>
            {/* 05 Parallel Run */}
            <div className="w-36 h-[140px] px-3 pt-3.5 pb-7 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-100 inline-flex flex-col justify-start items-start gap-[5px]">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-700 text-xs font-extrabold font-['Inter'] leading-4">05</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-950 text-xs font-bold font-['Inter'] leading-4">Parallel Run</div>
              </div>
              <div className="self-stretch pb-1 flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-gray-400 text-xs font-normal font-['Inter'] leading-4">Compare outputs with<br/>existing process.</div>
              </div>
            </div>
            {/* 06 Launch */}
            <div className="w-36 h-[140px] px-3 pt-3.5 pb-7 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-100 inline-flex flex-col justify-start items-start gap-[5px]">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-700 text-xs font-extrabold font-['Inter'] leading-4">06</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-950 text-xs font-bold font-['Inter'] leading-4">Launch</div>
              </div>
              <div className="self-stretch pb-1 flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-gray-400 text-xs font-normal font-['Inter'] leading-4">Controlled cutover and<br/>user activation.</div>
              </div>
            </div>
            {/* 07 Stabilize / Optimize */}
            <div className="w-36 h-[140px] px-3 py-3.5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-100 inline-flex flex-col justify-start items-start gap-[4.90px]">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-700 text-xs font-extrabold font-['Inter'] leading-4">07</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-sky-950 text-xs font-bold font-['Inter'] leading-4">Stabilize / Optimize</div>
              </div>
              <div className="self-stretch pb-[3.11px] flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-gray-400 text-xs font-normal font-['Inter'] leading-4">Review outcomes and<br/>workflow<br/>improvements.</div>
              </div>
            </div>
          </div>

        {/* Image placeholder */}
        <div className="w-full bg-white rounded-2xl shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-100 overflow-hidden">
          <div className="w-full h-56 overflow-hidden">
            <Image src="/oo.png" alt="Implementation" width={1114} height={220} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* CTA Banner */}
        <div className="w-full h-96 bg-cyan-950 rounded-3xl shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] overflow-hidden relative">
          {/* Left content panel (50%) */}
          <div className="w-1/2 h-full px-12 pt-14 pb-12 flex flex-col items-start gap-3.5 relative z-10">
            <div className="w-36 h-5 relative">
              <div className="absolute left-[0px] top-[-1px] text-blue-300 text-xs font-bold uppercase leading-5 tracking-wide">
                / Final Conversion
              </div>
            </div>
            <div className="text-white text-4xl font-extrabold leading-10">
              Bring every pay run under<br/>control
            </div>
            <div className="justify-center text-slate-300 text-base font-normal font-['Inter'] leading-6">
              Tell us where your people work, how payroll operates<br />
              today, and what your organization needs to improve. We&apos;ll<br />
              confirm jurisdiction availability before anything else.
            </div>
            <div className="w-96 h-16 pt-3.5 flex items-start gap-3.5">
              <div className="w-56 px-5 py-3 bg-[#2F6FED] rounded-[10px] shadow-[0px_6px_16px_0px_rgba(11,94,153,0.28)] flex items-center justify-center">
                <span className="text-white text-sm font-semibold">Book a demo</span>
              </div>
            </div>
          </div>
          {/* Right image panel (50%) - fills top to bottom, aligned with section edges */}
          <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
            <Image src="/bbb.png" alt="CTA" width={0} height={0} sizes="50vw" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <div className="w-1/2 h-96 left-0 top-0 absolute bg-gradient-to-r from-sky-950/60 to-sky-950/0" />
        </div>
      </div>
    </section>
  );
}
