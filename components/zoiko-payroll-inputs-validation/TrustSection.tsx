import Image from "next/image";
import Reveal from "../ui/Reveal";

const trustItems = [
  {
    title: "Least-privilege access",
    description: "Scoped to role and purpose.",
  },
  {
    title: "Tenant isolation",
    description: "Data stays within its tenant.",
  },
  {
    title: "Encryption & retention",
    description: "Approved controls throughout.",
  },
  {
    title: "Sensitive-value minimization",
    description: "Masked by default.",
  },
  {
    title: "Audit evidence",
    description: "Every change, actor and time.",
  },
  {
    title: "Authorized exports",
    description: "Permission and purpose retained.",
  },
];

export default function TrustSection() {
  return (
    <section className="w-full bg-white pt-20 pb-36 overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 sm:px-10 lg:px-40 flex flex-col items-center gap-8">
        {/* Header */}
        <Reveal className="w-full max-w-[820px] flex flex-col items-center gap-2.5 text-center">
          <div className="inline-flex items-center gap-2">
            <div className="w-4 h-px bg-[#0A78C3]" />
            <span className="text-[#0A78C3] text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest">
              TRUST
            </span>
          </div>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight whitespace-nowrap">
            Built for control, not just convenience
          </h2>
        </Reveal>

        {/* 3-Column Grid of Trust Cards */}
        <Reveal className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="px-3.5 py-3 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#E3E7EE] shadow-xs flex flex-col justify-start items-start gap-1"
            >
              <div className="w-full inline-flex justify-start items-center gap-1.5">
                <div className="w-2.5 h-2.5 relative flex items-center justify-center shrink-0">
                  <Image
                    src="/blue.png"
                    alt="Check"
                    width={10}
                    height={10}
                    className="object-contain"
                  />
                </div>
                <span className="text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
                  {item.title}
                </span>
              </div>
              <div className="pl-4 flex flex-col justify-start items-start">
                <p className="text-[#5B6472] text-xs font-normal font-['Inter'] leading-5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}