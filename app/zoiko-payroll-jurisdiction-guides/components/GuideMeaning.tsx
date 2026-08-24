import Image from "next/image";

const guideOwns = [
  "Market-specific educational context & terminology",
  "Operating questions to ask",
  "Source references & reviewed dates",
  "Change notes & authoritative handoffs",
];

const authorityStays = [
  "Current availability — Coverage/Directory",
  "Approved requirement/version — Local Payroll Requirements",
  "Live compliance/evidence state — Compliance Workflows",
  "Entity authority — Multi-Entity Payroll",
];

const tabs = ["Education", "Current Availability", "Local Requirements", "Compliance", "Entity / Reporting", "Implementation"];

const cards = [
  {
    title: "Operating context",
    desc: "Terminology, calendar and calculation concepts by market.",
    image: "/tt.png",
  },
  {
    title: "Compliance & evidence",
    desc: "What evidence quality and review roles typically look like.",
    image: "/tt1.png",
  },
  {
    title: "Implementation readiness",
    desc: "Stakeholder, data and validation questions to prepare for.",
    image: "/tt2.png",
  },
];

export default function GuideMeaning() {
  return (
    <div className="w-[1180px] max-w-[1180px] mx-auto px-8 py-20 flex flex-col items-start gap-8">
      {/* Header */}
      <div className="w-[660px] max-w-[660px] flex flex-col items-start gap-3">
        <div className="w-full h-5 relative">
          <div className="w-4 h-0.5 absolute bg-blue-600 mt-[8.29px]" />
          <div className="absolute left-[24px] top-[-1px] text-blue-600 text-xs font-bold uppercase leading-5 tracking-wide">
            What Jurisdiction Guides means
          </div>
        </div>
        <div className="text-slate-900 text-3xl font-extrabold leading-9 whitespace-nowrap">
          A guide explains. It never becomes the record of truth
        </div>
      </div>

      {/* Two columns */}
      <div className="w-full pt-1 flex items-start gap-4">
        {/* Guide owns */}
        <div className="flex-1 p-6 bg-emerald-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-green-200 flex flex-col gap-3.5">
          <div className="text-green-600 text-sm font-extrabold leading-6">A guide owns</div>
          <div className="flex flex-col">
            {guideOwns.map((item) => (
              <div key={item} className="py-1.5 flex items-start gap-2">
                <span className="text-green-600 text-xs font-bold leading-5">✓</span>
                <span className="text-gray-700 text-xs leading-5">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Authority stays */}
        <div className="flex-1 p-6 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-3.5">
          <div className="text-slate-900 text-sm font-extrabold leading-6">Authority stays elsewhere</div>
          <div className="flex flex-col">
            {authorityStays.map((item) => (
              <div key={item} className="pt-[5px] pb-1.5 flex items-start gap-2">
                <span className="text-[#6B7488] text-xs font-mono leading-5">→</span>
                <span className="text-gray-700 text-xs leading-5">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div className="w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex overflow-hidden">
        {tabs.map((tab, i) => (
          <div
            key={tab}
            className={`w-48 px-3 pt-3.5 pb-4 flex items-center justify-center border-r border-slate-200 last:border-r-0 ${
              i === 0 ? "bg-cyan-950" : ""
            }`}
          >
            <span className={`text-xs font-semibold leading-5 ${i === 0 ? "text-white" : "text-gray-700"}`}>
              {tab}
            </span>
          </div>
        ))}
      </div>

      {/* Guide cards + See all */}
      <div className="w-full bg-slate-200 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex overflow-hidden gap-px">
        {cards.map((card) => (
          <div key={card.title} className="flex-1 bg-white flex flex-col">
            <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-slate-100">
              <Image src={card.image} alt={card.title} width={268} height={191} className="w-full h-48 object-cover" />
            </div>
            <div className="px-4 pt-5 pb-4 flex flex-col gap-3">
              <div className="pb-1.5 border-b-2 border-slate-900 inline-flex">
                <span className="text-slate-900 text-sm font-bold leading-5">{card.title}</span>
              </div>
              <div className="text-slate-500 text-xs leading-4">{card.desc}</div>
            </div>
          </div>
        ))}
        <div className="flex-1 px-5 py-36 bg-emerald-50 flex items-center justify-center">
          <span className="text-slate-900 text-sm font-bold leading-5">See all guides →</span>
        </div>
      </div>
    </div>
  );
}
