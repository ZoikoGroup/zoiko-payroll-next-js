export default function FeaturedGuides() {
  const guides = [
    {
      code: "US",
      codeBg: "bg-[#0A78C3]",
      name: "United States",
      region: "Country · Americas",
      description:
        "Federal withholding sits alongside state-level income tax, unemployment insurance and, in some states, material local payroll rules.",
      currency: "USD",
      frequency: "Semi-monthly",
      lastReviewed: "Jul 14, 2026",
      status: "Reviewed",
      statusStyle: "bg-[#F0FDF4] text-[#166534]",
    },
    {
      code: "GB",
      codeBg: "bg-[#0284C7]",
      name: "United Kingdom",
      region: "Country · Europe",
      description:
        "PAYE income tax and National Insurance are calculated and reported in real time through the standard payroll cycle.",
      currency: "GBP",
      frequency: "Monthly",
      lastReviewed: "Jun 30, 2026",
      status: "Reviewed",
      statusStyle: "bg-[#F0FDF4] text-[#166534]",
    },
    {
      code: "DE",
      codeBg: "bg-[#1E293B]",
      name: "Germany",
      region: "Country · Europe",
      description:
        "Wage tax withholding runs alongside statutory social insurance contributions split between employer and employee.",
      currency: "EUR",
      frequency: "Monthly",
      lastReviewed: "May 22, 2026",
      status: "Update in progress",
      statusStyle: "bg-[#FEF3C7] text-[#9A3412]",
    },
    {
      code: "SG",
      codeBg: "bg-[#991B1B]",
      name: "Singapore",
      region: "Country · Asia-Pacific",
      description:
        "CPF contributions and IR8A year-end reporting are central to the local payroll and employer-reporting cycle.",
      currency: "SGD",
      frequency: "Monthly",
      lastReviewed: "Jul 02, 2026",
      status: "Reviewed",
      statusStyle: "bg-[#F0FDF4] text-[#166534]",
    },
    {
      code: "BR",
      codeBg: "bg-[#15803D]",
      name: "Brazil",
      region: "Country · Americas",
      description:
        "eSocial reporting, INSS contributions and the 13th-salary requirement materially shape the annual payroll calendar.",
      currency: "BRL",
      frequency: "Monthly",
      lastReviewed: "Apr 09, 2026",
      status: "Partial guide",
      statusStyle: "bg-[#E0F2FE] text-[#0369A1]",
    },
    {
      code: "JP",
      codeBg: "bg-[#881337]",
      name: "Japan",
      region: "Country · Asia-Pacific",
      description:
        "Resident tax and social insurance premiums are withheld monthly, with year-end adjustment reconciling annual liability.",
      currency: "JPY",
      frequency: "Monthly",
      lastReviewed: "Jun 11, 2026",
      status: "Reviewed",
      statusStyle: "bg-[#F0FDF4] text-[#166534]",
    },
  ];

  return (
    <section className="w-full bg-white py-20 font-['Inter',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:pl-40 xl:pr-24 flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="max-w-[640px] flex flex-col gap-3.5">
          {/* Eyebrow */}
          <div className="flex items-center gap-1.5 text-[#0A78C3] text-xs font-bold uppercase tracking-wide">
            <span>/</span>
            <span>FEATURED GUIDES</span>
          </div>

          {/* Heading */}
          <h2 className="text-[#0A1626] text-3xl font-bold leading-10">
            Start with commonly requested<br />jurisdictions.
          </h2>

          {/* Subtitle */}
       {/* Subtitle */}
{/* Subtitle */}
<p className="text-[#475569] text-base leading-6 font-normal">
  Editorially selected guides that meet the current content-quality threshold, refreshed as review cycles complete.
</p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1116px]">
          {guides.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-[#E2E8F0] shadow-[0px_1px_8px_rgba(8,47,73,0.05),0px_1px_2px_rgba(8,47,73,0.06)] flex flex-col justify-between gap-4 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col gap-4">
                {/* Card Top: Flag & Name */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${item.codeBg} rounded-lg flex items-center justify-center shrink-0`}
                  >
                    <span className="text-white text-xs font-bold tracking-tight">
                      {item.code}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0A1626] text-base font-bold leading-tight">
                      {item.name}
                    </span>
                    <span className="text-[#475569] text-xs font-normal">
                      {item.region}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#475569] text-sm leading-5 font-normal h-16">
                  {item.description}
                </p>

                {/* Currency & Frequency Box */}
                <div className="px-3.5 py-3 bg-[#F8FAFC] rounded-lg flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[#475569] text-xs font-normal">
                      Currency
                    </span>
                    <span className="text-[#0A1626] text-xs font-bold">
                      {item.currency}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#475569] text-xs font-normal">
                      Frequency
                    </span>
                    <span className="text-[#0A1626] text-xs font-bold">
                      {item.frequency}
                    </span>
                  </div>
                </div>

                {/* Review Date & Status Pill */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[#64748B] text-xs font-bold">
                    Last reviewed {item.lastReviewed}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-tight ${item.statusStyle}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3.5 border-t border-[#E2E8F0] flex items-center justify-between">
                <button
                  type="button"
                  className="text-[#0A1626] text-sm font-bold hover:underline"
                >
                  View payroll guide →
                </button>
                <button
                  type="button"
                  className="text-[#0A78C3] text-xs font-bold hover:underline"
                >
                  Check coverage
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}