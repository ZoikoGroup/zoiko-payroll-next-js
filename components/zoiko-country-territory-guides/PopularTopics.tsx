"use client";

const topics = [
  {
    title: "Payroll cycle",
    tags: ["Cutoffs", "Cadence"],
    description:
      "How inputs, cutoffs and pay dates flow from calculation to payday across jurisdictions.",
    link: "Browse cycle guidance →",
  },
  {
    title: "Taxes & contributions",
    tags: ["Withholding", "Social insurance"],
    description:
      "Withholding structures and social-insurance splits between employer and employee.",
    link: "Browse tax guidance →",
  },
  {
    title: "Payslips & filings",
    tags: ["Payslips", "Filings"],
    description:
      "Required payslip content and the statutory reports each authority expects.",
    link: "Browse filing guidance →",
  },
  {
    title: "Payments",
    tags: ["Banking", "FX context"],
    description:
      "Local payment currencies, banking conventions and cutoff/settlement context.",
    link: "Browse payment guidance →",
  },
  {
    title: "Year-end",
    tags: ["Reconciliation", "Annual forms"],
    description:
      "Tax-year boundaries, annual reconciliation and employee year-end statements.",
    link: "Browse year end guidance →",
  },
  {
    title: "Employer Set-up",
    tags: ["Registration", "Authorities"],
    description:
      "Whether local registration and authority relationships typically drive payroll.",
    link: "Browse set-up guidance →",
  },
];

export default function PopularTopics() {
  return (
    <section className="w-full bg-white border-t border-[#E2E8F0] py-20">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="w-full pl-10 pr-6 sm:pl-20 sm:pr-12 lg:pl-40 lg:pr-16 flex flex-col gap-10">
          <div className="max-w-[640px] flex flex-col gap-3.5">
            <div className="relative h-3.5">
              <div className="w-1.5 h-3.5 absolute left-[-1.48px] top-0 bg-sky-600 rounded-[1px]" />
              <div className="absolute left-[11px] top-0 text-sky-600 text-xs font-bold font-['Inter'] uppercase tracking-wide">
                POPULAR PAYROLL TOPICS
              </div>
            </div>
            <h2 className="text-[#082F49] text-3xl font-bold font-['Inter'] leading-10">
              Browse guidance by payroll subject.
            </h2>
            <p className="text-[#4E6172] text-base font-normal font-['Inter'] leading-6">
              Topic landing pages exist only where meaningful, maintained content is available across
              guides.
            </p>
          </div>
        </div>

        {/* Topic Cards */}
        <div className="w-full px-10 sm:px-20 lg:px-40 flex flex-col gap-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="w-full pl-3.5 pr-5 pt-4 pb-2.5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#EFF4F7] flex items-start gap-4"
            >
              {/* Placeholder Image */}
              <div className="w-[105px] h-[141px] rounded-lg bg-gradient-to-br from-[#E2E8F0] to-[#CBD5E1] shrink-0" />

              {/* Content */}
              <div className="w-60 flex flex-col gap-6">
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[#0F4C75] text-base font-bold font-['Inter'] leading-6">
                    {topic.title}
                  </h3>
                  <div className="inline-flex items-center gap-1">
                    {topic.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 bg-[#0F4C75] rounded-full text-white text-[10px] font-normal font-['Inter'] leading-6"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="w-52 text-black text-xs font-light font-['Inter'] leading-4">
                    {topic.description}
                  </p>
                </div>
                <div className="w-36">
                  <span className="text-[#3B82F6] text-xs font-normal font-['Inter'] leading-6">
                    {topic.link}
                  </span>
                </div>
                <div className="w-52 h-px outline outline-1 outline-offset-[-0.50px] outline-slate-500/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
