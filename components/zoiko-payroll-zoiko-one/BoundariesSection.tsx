export default function IndependentBoundariesSection() {
  const cards = [
    { title: "Product ownership", subtitle: "Scoped to Zoiko Payroll" },
    { title: "Payroll authorization", subtitle: "Never inherited automatically" },
    { title: "Product controls", subtitle: "Validation, review, approval unaffected" },
    { title: "Support", subtitle: "Payroll-specific by default" },
    { title: "Systems of record", subtitle: "Explicit per domain" },
    { title: "Contracts / commercial terms", subtitle: "Set by Pricing/Sales authority" },
    { title: "Administration", subtitle: "Product-specific unless verified" },
    { title: "Reporting", subtitle: "Product-specific unless verified" },
    { title: "Data access", subtitle: "Scoped, never assumed" },
  ];

  const domains = [
    { name: "Payroll", role: "Zoiko Payroll" },
    { name: "Workforce", role: "HRIS / HCM" },
    { name: "Identity", role: "Identity provider" },
    { name: "Finance", role: "Finance / ERP" },
    { name: "Other domains", role: "Approved owner, per domain" },
  ];

  return (
    <section className="w-full bg-white border-t border-gray-100 py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-28 flex flex-col justify-start items-start">
        <div className="w-full max-w-[1220px] flex flex-col justify-start items-start gap-1.5">
          
          {/* Section Header */}
          <div className="self-stretch h-4 relative flex items-center">
            <span className="text-[#1483C7] text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
              / What remains independent
            </span>
          </div>

          <div className="self-stretch pt-2 flex flex-col justify-start items-start">
            <h2 className="text-[#0A3050] text-3xl font-extrabold font-['Inter'] leading-9">
              Boundaries and authority stay explicit.
            </h2>
          </div>

          <div className="w-full max-w-[640px] pt-2.5 flex flex-col justify-start items-start">
            <p className="text-gray-600 text-base font-normal font-['Inter'] leading-6">
              These remain scoped to Zoiko Payroll unless a specific connection is verified for your account.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="w-full pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full px-4 py-3.5 bg-white rounded-xl border border-slate-200 shadow-[0px_12px_32px_-14px_rgba(10,48,80,0.16)] shadow-[0px_1px_2px_0px_rgba(10,48,80,0.05)] flex flex-col justify-start items-start gap-1"
              >
                <h3 className="w-full text-[#0A3050] text-xs font-extrabold font-['Inter'] leading-5">
                  {card.title}
                </h3>
                <p className="w-full text-gray-400 text-xs font-normal font-['Inter'] leading-4">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Domain Authority Map Header */}
          <div className="self-stretch pt-7 flex flex-col justify-start items-start">
            <h3 className="text-[#0A3050] text-base font-bold font-['Inter'] leading-5">
              Domain authority map
            </h3>
          </div>

          <div className="w-full max-w-[640px] flex flex-col justify-start items-start">
            <p className="text-gray-600 text-base font-normal font-['Inter'] leading-6">
              No single &quot;source of truth&quot; icon — each domain has its own explicit owner.
            </p>
          </div>

          {/* Domain Authority Cards Grid */}
          <div className="w-full pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="w-full px-3 pt-3.5 pb-4 bg-[#0A3050] rounded-xl flex flex-col justify-start items-start gap-[5px]"
              >
                <div className="self-stretch pb-[0.75px] flex flex-col justify-start items-center">
                  <span className="text-center text-white text-xs font-extrabold font-['Inter'] leading-5">
                    {domain.name}
                  </span>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center">
                  <span className="text-center text-[#4FA3D1] text-[9.50px] font-normal font-['Inter'] uppercase leading-4 tracking-tight">
                    {domain.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="self-stretch pt-2.5 flex flex-col justify-start items-start">
            <p className="text-gray-400 text-xs font-normal font-['Inter'] leading-4">
              A connection never grants another product payroll authorization, and never bypasses payroll validation, review, approval or completion controls.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}