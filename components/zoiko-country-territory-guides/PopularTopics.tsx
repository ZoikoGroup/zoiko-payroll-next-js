import React from "react";
import Image from "next/image";

export default function PopularPayrollTopics() {
  const topics = [
    {
      title: "Payroll cycle",
      tags: ["Cutoffs", "Cadence"],
      description: "How inputs, cutoffs and pay dates flow from calculation to payday across jurisdictions.",
      linkText: "Browse cycle guidance",
      href: "#",
      image: "/v1.png",
    },
    {
      title: "Taxes & contributions",
      tags: ["Withholding", "Social insurance"],
      description: "Withholding structures and social-insurance splits between employer and employee.",
      linkText: "Browse tax guidance",
      href: "#",
      image: "/v2.png",
    },
    {
      title: "Payslips & filings",
      tags: ["Payslips", "Filings"],
      description: "Required payslip content and the statutory reports each authority expects.",
      linkText: "Browse filling guidance",
      href: "#",
      image: "/v3.png",
    },
    {
      title: "Payments",
      tags: ["Banking", "FX context"],
      description: "Local payment currencies, banking conventions and cutoff/settlement context.",
      linkText: "Browse Payment guidance",
      href: "#",
      image: "/v4.png",
    },
    {
      title: "Year-end",
      tags: ["Reconciliation", "Annual forms"],
      description: "Tax-year boundaries, annual reconciliation and employee year-end statements.",
      linkText: "Browse year end guidance",
      href: "#",
      image: "/v5.png",
    },
    {
      title: "Employer Set-up",
      tags: ["Registration", "Authorities"],
      description: "Whether local registration and authority relationships typically drive payroll.",
      linkText: "Browse set-up guidance",
      href: "#",
      image: "/v6.png",
    },
  ];

  return (
    <section className="w-full bg-white py-20 border-t border-[#E2E8F0] font-['Inter',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-40 flex flex-col gap-10">

        {/* Header */}
        <div className="max-w-[640px] flex flex-col gap-3.5">
          <div className="flex items-center gap-1.5 text-[#1D5FD6] text-xs font-bold uppercase tracking-wide">
            <span>/</span>
            <span>POPULAR PAYROLL TOPICS</span>
          </div>
          <h2 className="text-[#0E2A47] text-3xl font-bold leading-10">
            Browse guidance by payroll subject.
          </h2>
          <p className="text-[#566B80] text-base leading-6 font-normal">
            Topic landing pages exist only where meaningful, maintained content is available across guides.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#6C8AA6]/20 p-3.5 pl-3.5 pr-5 flex gap-4 hover:shadow-md transition-shadow duration-200"
            >
              {/* Image Thumbnail */}
              <div className="relative w-[105px] h-[141px] shrink-0 rounded-lg overflow-hidden bg-slate-100">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  width={105}
                  height={141}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="flex-1 flex flex-col justify-between py-0.5">
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[#0E2A47] text-base font-bold leading-6">
                    {topic.title}
                  </h3>

                  {/* ✅ Plain string + line-clamp-3 = strictly 3 lines at any width */}
                  <p className="text-black text-xs font-light leading-4 line-clamp-3">
                    {topic.description}
                  </p>

                  {/* Pill Tags */}
                  <div className="flex flex-nowrap items-center gap-1">
                    {topic.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3.5 py-0.5 bg-[#566B80] text-white text-[10px] font-normal rounded-[50px] leading-6 whitespace-nowrap shrink-0"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-2 border-t border-[#6C8AA6]/30">
                  <a
                    href={topic.href}
                    className="text-[#1D5FD6] text-xs font-normal leading-6 hover:underline inline-flex items-center gap-1"
                  >
                    <span>{topic.linkText}</span>
                    {/* ✅ Arrow reduced from w-2 h-2 to w-[5px] h-[5px] */}
                    <Image
                      src="/arr.png"
                      alt=""
                      width={5}
                      height={5}
                      className="w-[5px] h-[5px] object-contain inline-block"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}