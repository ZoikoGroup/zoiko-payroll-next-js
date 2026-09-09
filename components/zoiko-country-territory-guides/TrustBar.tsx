export default function PayrollTrustBar() {
  const features = [
    {
      icon: "/Background (74).png",
      title: "Source-backed",
      description: "Cited to primary authorities",
    },
    {
      icon: "/Background (75).png",
      title: "Review date shown",
      description: "On every guide, always visible",
    },
    {
      icon: "/Background (76).png",
      title: "Effective-dated facts",
      description: "Volatile figures carry a date",
    },
    {
      icon: "/Background (77).png",
      title: "Informational only",
      description: "Not legal or tax advice",
    },
  ];

  return (
    <section className="w-full bg-white border-y border-[#E2E8F0] font-['Inter',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-40 py-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`w-full md:w-72 px-4 md:px-7 flex items-center gap-3 ${
              index !== features.length - 1
                ? "md:border-r border-[#E2E8F0]"
                : ""
            }`}
          >
            <div className="w-12 h-12 bg-[#F1F5F9] rounded-full flex items-center justify-center shrink-0">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-[38px] h-[38px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#0A1626] text-sm font-bold leading-4">
                {feature.title}
              </span>
              <span className="text-[#64748B] text-xs font-normal">
                {feature.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}