"use client";

const regions = [
  {
    name: "Americas",
    count: 14,
    countries: ["United States", "Canada", "Brazil"],
    link: "Browse Americas guides →",
    color: "bg-sky-950",
  },
  {
    name: "Europe",
    count: 22,
    countries: ["United Kingdom", "Germany", "France"],
    link: "Browse Europe guides →",
    color: "bg-[#0F4C75]",
  },
  {
    name: "Asia-Pacific",
    count: 11,
    countries: ["Singapore", "Japan", "India"],
    link: "Browse Asia-Pacific guides →",
    color: "bg-[#0F4C75]",
  },
  {
    name: "Middle East & Africa",
    count: 6,
    countries: ["United Arab Emirates", "South Africa", "Saudi Arabia"],
    link: "Browse MEA guides →",
    color: "bg-[#0F4C75]",
  },
  {
    name: "Caribbean",
    count: 3,
    countries: ["Jamaica", "Bahamas", "Trinidad & Tobago"],
    link: "Browse Caribbean guides →",
    color: "bg-[#0F4C75]",
  },
];

export default function BrowseByRegion() {
  return (
    <section className="w-full bg-white border-t border-[#E2E8F0] py-20">
      <div className="w-full max-w-[1440px] mx-auto pl-10 pr-6 sm:pl-20 sm:pr-12 lg:pl-40 lg:pr-24 flex flex-col gap-10">
        {/* Header */}
        <div className="max-w-[640px] flex flex-col gap-3.5">
          <div className="relative h-3.5">
            <div className="w-1.5 h-3.5 absolute left-[-1.48px] top-0 bg-sky-600 rounded-[1px]" />
            <div className="absolute left-[11px] top-0 text-sky-600 text-xs font-bold font-['Inter'] uppercase tracking-wide">
              BROWSE BY REGION
            </div>
          </div>
          <h2 className="text-[#082F49] text-3xl font-bold font-['Inter'] leading-10">
            Find guides by part of the world.
          </h2>
          <p className="text-[#4E6172] text-base font-normal font-['Inter'] leading-6">
            Regional counts reflect currently published guides, not commercially supported
            <br />
            jurisdictions.
          </p>
        </div>

        {/* Region Cards */}
        <div className="w-full max-w-[1116px] flex justify-center items-start gap-4 flex-wrap">
          {regions.map((region) => (
            <div
              key={region.name}
              className="w-60 pb-5 bg-white rounded-xl shadow-[0px_1px_8px_0px_rgba(8,47,73,0.05)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.06)] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex flex-col gap-1"
            >
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div
                  className={`w-60 h-16 ${region.color} rounded-t-xl flex items-center justify-center`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-gray-100 text-base font-bold font-['Inter']">
                      {region.name}
                    </span>
                    <span className="text-sky-100/80 text-xs font-normal font-['Inter']">
                      ( {region.count} published guides )
                    </span>
                  </div>
                </div>

                {/* Countries */}
                <div className="w-60 pl-8 py-3 flex flex-col gap-1">
                  {region.countries.map((country) => (
                    <div key={country} className="pt-0.5 pb-px">
                      <span className="text-[#0F4C75] text-xs font-medium font-['Inter']">
                        {country}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div className="w-60 pt-3.5 border-t border-[#E2E8F0] flex items-center justify-center">
                  <span className="text-sky-600 text-xs font-bold font-['Inter']">
                    {region.link}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
