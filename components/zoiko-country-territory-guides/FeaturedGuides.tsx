"use client";

const guides = [
  {
    code: "US",
    name: "United States",
    region: "Country · Americas",
    description:
      "Federal withholding sits alongside state-level income tax, unemployment insurance and, in some states, material local payroll rules.",
    currency: "USD",
    frequency: "Semi-monthly",
    reviewDate: "Last reviewed Jul 14, 2026",
    status: "Reviewed" as const,
    color: "bg-[#1B6EB5]",
  },
  {
    code: "GB",
    name: "United Kingdom",
    region: "Country · Europe",
    description:
      "PAYE income tax and National Insurance are calculated and reported in real time through the standard payroll cycle.",
    currency: "GBP",
    frequency: "Monthly",
    reviewDate: "Last reviewed Jun 30, 2026",
    status: "Reviewed" as const,
    color: "bg-[#2563EB]",
  },
  {
    code: "DE",
    name: "Germany",
    region: "Country · Europe",
    description:
      "Wage tax withholding runs alongside statutory social insurance contributions split between employer and employee.",
    currency: "EUR",
    frequency: "Monthly",
    reviewDate: "Last reviewed May 22, 2026",
    status: "Update in progress" as const,
    color: "bg-[#475569]",
  },
  {
    code: "SG",
    name: "Singapore",
    region: "Country · Asia-Pacific",
    description:
      "CPF contributions and IR8A year-end reporting are central to the local payroll and employer-reporting cycle.",
    currency: "SGD",
    frequency: "Monthly",
    reviewDate: "Last reviewed Jul 02, 2026",
    status: "Reviewed" as const,
    color: "bg-[#DC2626]",
  },
  {
    code: "BR",
    name: "Brazil",
    region: "Country · Americas",
    description:
      "eSocial reporting, INSS contributions and the 13th-salary requirement materially shape the annual payroll calendar.",
    currency: "BRL",
    frequency: "Monthly",
    reviewDate: "Last reviewed Apr 09, 2026",
    status: "Partial guide" as const,
    color: "bg-[#16A34A]",
  },
  {
    code: "JP",
    name: "Japan",
    region: "Country · Asia-Pacific",
    description:
      "Resident tax and social insurance premiums are withheld monthly, with year-end adjustment reconciling annual liability.",
    currency: "JPY",
    frequency: "Monthly",
    reviewDate: "Last reviewed Jun 11, 2026",
    status: "Reviewed" as const,
    color: "bg-[#BE123C]",
  },
];

const statusStyles: Record<string, { bg: string; text: string }> = {
  Reviewed: { bg: "bg-[#ECFDF5]", text: "text-[#047857]" },
  "Update in progress": { bg: "bg-[#FFF7ED]", text: "text-[#C2410C]" },
  "Partial guide": { bg: "bg-[#FEF9C3]", text: "text-[#A16207]" },
};

export default function FeaturedGuides() {
  return (
    <section className="w-full bg-[#F5F8FA] py-20">
      <div className="w-full max-w-[1440px] mx-auto pl-10 pr-6 sm:pl-20 sm:pr-12 lg:pl-40 lg:pr-24 flex flex-col gap-10">
        {/* Header */}
        <div className="max-w-[640px] flex flex-col gap-3.5">
          <div className="relative h-3.5">
            <div className="w-1.5 h-3.5 absolute left-[-1.48px] top-0 bg-sky-600 rounded-[1px]" />
            <div className="absolute left-[11px] top-0 text-sky-600 text-xs font-bold font-['Inter'] uppercase tracking-wide">
              FEATURED GUIDES
            </div>
          </div>
          <h2 className="text-[#082F49] text-3xl font-bold font-['Inter'] leading-10">
            Start with commonly requested
            <br />
            jurisdictions.
          </h2>
          <p className="text-[#4E6172] text-base font-normal font-['Inter'] leading-6">
            Editorially selected guides that meet the current content-quality threshold, refreshed as
            <br />
            review cycles complete.
          </p>
        </div>

        {/* Guide Cards */}
        <div className="w-full max-w-[1116px] flex flex-col gap-4">
          {guides.map((guide) => {
            const statusStyle = statusStyles[guide.status] || statusStyles.Reviewed;
            return (
              <div
                key={guide.code}
                className="w-full p-6 bg-white rounded-xl shadow-[0px_1px_8px_0px_rgba(8,47,73,0.05)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.06)] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex flex-col"
              >
                {/* Top Row */}
                <div className="pb-4">
                  <div className="inline-flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${guide.color} rounded-lg flex items-center justify-center`}
                    >
                      <span className="text-white text-xs font-bold font-['Inter'] tracking-tight">
                        {guide.code}
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#082F49] text-base font-bold font-['Inter']">
                        {guide.name}
                      </span>
                      <span className="text-[#4E6172] text-xs font-normal font-['Inter']">
                        {guide.region}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="h-20 relative mb-4">
                  <p className="absolute left-0 top-0 text-[#4E6172] text-sm font-normal font-['Inter'] leading-5 max-w-[320px]">
                    {guide.description}
                  </p>
                </div>

                {/* Currency & Frequency */}
                <div className="pb-4">
                  <div className="px-3.5 py-3 bg-[#F8FAFC] rounded-lg inline-flex items-start gap-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#4E6172] text-xs font-normal font-['Inter']">
                        Currency
                      </span>
                      <span className="text-[#082F49] text-xs font-bold font-['Inter']">
                        {guide.currency}
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#4E6172] text-xs font-normal font-['Inter']">
                        Frequency
                      </span>
                      <span className="text-[#082F49] text-xs font-bold font-['Inter']">
                        {guide.frequency}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Date & Status */}
                <div className="pb-3.5">
                  <div className="inline-flex justify-between items-center w-full">
                    <span className="text-[#64748B] text-xs font-bold font-['Inter']">
                      {guide.reviewDate}
                    </span>
                    <div
                      className={`px-2.5 py-1 ${statusStyle.bg} rounded-full`}
                    >
                      <span
                        className={`${statusStyle.text} text-xs font-bold font-['Inter'] tracking-tight`}
                      >
                        {guide.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="pt-3.5 border-t border-[#E2E8F0] flex justify-between items-center">
                  <span className="text-[#082F49] text-sm font-bold font-['Inter']">
                    View payroll guide →
                  </span>
                  <span className="text-sky-600 text-xs font-bold font-['Inter']">
                    Check coverage
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
