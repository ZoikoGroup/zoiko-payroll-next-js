"use client";

import Image from "next/image";
import Link from "next/link";

const productAreas = [
  "Users / employee records",
  "Payroll runs",
  "Approvals",
  "Adjustments",
  "Integrations",
  "Reporting",
  "Global Payroll",
  "Implementation",
];

const cardItems = [
  {
    title: "Resolving a validation blocker",
    image: "/c1.png",
  },
  {
    title: "Setting up an approval role",
    image: "/c2.png",
  },
  {
    title: "Reading a reconciliation report",
    image: "/c3.png",
  },
];

export default function ProductAreaBrowseSection() {
  return (
    <section className="bg-[#F4F8FB] border-t border-slate-200 py-20 px-4 sm:px-6 lg:px-32">
      <div className="mx-auto max-w-[1180px] flex flex-col justify-start items-start gap-7">
        {/* Header Section */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <div className="relative flex items-center h-5 pl-6">
            <div className="w-4 h-0.5 absolute left-0 top-[9px] bg-[#2F6FED]" />
            <span className="text-[#2F6FED] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
              Browse by product area
            </span>
          </div>
          <h2 className="text-[#08132B] text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-8 sm:leading-9 whitespace-nowrap">
            Routed to the surface you actually work with.
          </h2>
        </div>

        {/* Product Areas Grid (4 columns x 2 rows) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1.5">
          {productAreas.map((area) => (
            <Link
              key={area}
              href="#"
              className="h-12 px-4 py-3.5 bg-[#FFFFFF] rounded-[10px] border border-[#E6E9F0] flex justify-between items-center transition-all duration-200 hover:border-[#2F6FED] hover:shadow-sm group"
            >
              <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-5">
                {area}
              </span>
              <div className="relative w-2 h-5 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <Image
                  src="/arr.png"
                  alt="arrow"
                  width={8}
                  height={20}
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Image Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          {cardItems.map((card, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-sm group bg-slate-900"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/75 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-col justify-start items-start">
                <span className="text-white text-xs font-semibold font-['Inter'] leading-5">
                  {card.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}