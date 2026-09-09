import Reveal from "../ui/Reveal";

export default function AccessLegendSection() {
  const badges = [
    {
      label: "Public",
      bgClass: "bg-[#E6F4EA]",
      dotClass: "bg-[#3D9463]",
      textClass: "text-[#286343]",
    },
    {
      label: "Verified prospect",
      bgClass: "bg-[#E3F2FD]",
      dotClass: "bg-[#0A78C2]",
      textClass: "text-[#0A78C2]",
    },
    {
      label: "NDA-restricted",
      bgClass: "bg-[#FBF0E4]",
      dotClass: "bg-[#D97324]",
      textClass: "text-[#9E4F10]",
    },
    {
      label: "Customer-only",
      bgClass: "bg-[#F1F0FA]",
      dotClass: "bg-[#6C5CE7]",
      textClass: "text-[#51449B]",
    },
    {
      label: "Internal-only (never public)",
      bgClass: "bg-[#FCE8E8]",
      dotClass: "bg-[#D93838]",
      textClass: "text-[#9C2222]",
    },
  ];

  return (
    <section className="bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-3.5">
                {/* Access Classification Tag */}
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#0A78C2]">
                    /
                  </span>
                  <span className="text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide text-[#0A78C2]">
                    Access classification
                  </span>
                </div>

                {/* Title */}
                <h2 className="max-w-[640px] text-3xl font-extrabold font-['Inter'] leading-9 text-[#051B2B]">
                  Least disclosure, made explicit.
                </h2>
              </div>

              {/* Description - Thinner font */}
              <p className="max-w-[360px] text-sm font-light font-['Inter'] leading-5 text-[#4E6172]">
                The page reveals that evidence exists and how<br />
                to obtain it — without exposing sensitive<br />
                content.
              </p>
            </div>

            {/* Classification Badges */}
            <div className="flex flex-wrap items-center gap-3">
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className={`inline-flex items-center gap-2 rounded-[20px] px-3.5 py-1.5 ${badge.bgClass}`}
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-[3px] ${badge.dotClass}`}
                  />
                  <span
                    className={`whitespace-nowrap text-xs font-bold font-['Inter'] leading-5 ${badge.textClass}`}
                  >
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}