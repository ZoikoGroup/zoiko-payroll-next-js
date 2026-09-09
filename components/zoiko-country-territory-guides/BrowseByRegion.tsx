export default function BrowseByRegion() {
  const regions = [
    {
      title: "Americas",
      count: "14 published guides",
      countries: ["United States", "Canada", "Brazil"],
      linkText: "Browse Americas guides",
      linkUrl: "#",
    },
    {
      title: "Europe",
      count: "22 published guides",
      countries: ["United Kingdom", "Germany", "France"],
      linkText: "Browse Europe guides",
      linkUrl: "#",
    },
    {
      title: "Asia-Pacific",
      count: "11 published guides",
      countries: ["Singapore", "Japan", "India"],
      linkText: "Browse Asia-Pacific guides",
      linkUrl: "#",
    },
    {
      title: "Middle East & Africa",
      count: "6 published guides",
      countries: ["United Arab Emirates", "South Africa", "Saudi Arabia"],
      linkText: "Browse MEA guides",
      linkUrl: "#",
    },
    {
      title: "Caribbean",
      count: "3 published guides",
      countries: ["Jamaica", "Bahamas", "Trinidad & Tobago"],
      linkText: "Browse Caribbean guides",
      linkUrl: "#",
    },
  ];

  return (
    <section className="w-full bg-white py-20 border-t border-[#EDEFF2] font-['Inter',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:pl-40 xl:pr-24 flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="max-w-[640px] flex flex-col gap-3.5">
          {/* Eyebrow */}
          <div className="flex items-center gap-1.5 text-[#0284C7] text-xs font-bold uppercase tracking-wide">
            <span>/</span>
            <span>BROWSE BY REGION</span>
          </div>

          {/* Heading */}
          <h2 className="text-[#0A1626] text-3xl font-bold leading-10">
            Find guides by part of the world.
          </h2>

          {/* Subtitle */}
          <p className="text-[#475569] text-base leading-6 font-normal">
            Regional counts reflect currently published guides, not commercially supported<br className="hidden sm:inline" />
            jurisdictions.
          </p>
        </div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-[1116px]">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#EDEFF2] shadow-[0px_1px_8px_rgba(8,47,73,0.05),0px_1px_2px_rgba(8,47,73,0.06)] flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Header Banner */}
                <div className="bg-[#0E2A47] px-3 py-3.5 text-center flex flex-col justify-center items-center h-16 rounded-t-xl">
                  <h3 className="text-white text-base font-bold leading-tight">
                    {region.title}
                  </h3>
                  <span className="text-[rgba(229,241,251,0.8)] text-xs font-normal mt-0.5">
                    ( {region.count} )
                  </span>
                </div>

                {/* Countries List with Bullet Points */}
                <ul className="px-5 py-4 flex flex-col gap-2">
                  {region.countries.map((country, idx) => (
                    <li
                      key={idx}
                      className="text-[#0A1626] text-xs font-medium leading-tight flex items-center gap-1.5"
                    >
                      <span className="text-sm leading-none">•</span>
                      <span>{country}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Link */}
              <div className="p-3.5 border-t border-[#EDEFF2] flex items-center justify-center">
                <a
                  href={region.linkUrl}
                  className="text-[#0284C7] hover:text-[#0369A1] text-xs font-bold flex items-center gap-1 transition-colors whitespace-nowrap"
                >
                  <span>{region.linkText}</span>
                  <img
                    src="arr.png"
                    alt="Arrow"
                    className="w-2.5 h-2.5 object-contain"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}