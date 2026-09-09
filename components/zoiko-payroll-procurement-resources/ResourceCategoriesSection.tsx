import Reveal from "../ui/Reveal";

export default function ResourceCategoriesSection() {
  const cards = [
    {
      title: "Commercial & product",
      badge: "Public",
      badgeBg: "bg-[#E6F4EA]",
      badgeDot: "bg-[#3D9463]",
      badgeText: "text-[#286343]",
      description:
        "Product overview, plans, pricing, implementation and service-model routes.",
      linkText: "View commercial resources",
      image: "h1.png",
    },
    {
      title: "Legal & contract",
      badge: "Public / gated",
      badgeBg: "bg-[#E6F4EA]",
      badgeDot: "bg-[#3D9463]",
      badgeText: "text-[#286343]",
      description:
        "Standard terms, order-form framework, DPA and confidentiality process.",
      linkText: "View legal resources",
      image: "h2.png",
    },
    {
      title: "Security & privacy",
      badge: "Gated / NDA",
      badgeBg: "bg-[#FBF0E4]",
      badgeDot: "bg-[#D97324]",
      badgeText: "text-[#9E4F10]",
      description:
        "Certifications, audit reports, questionnaires and privacy program links.",
      linkText: "Start security review",
      image: "h3.png",
    },
    {
      title: "Implementation & assurance",
      badge: "Public / contracted",
      badgeBg: "bg-[#E6F4EA]",
      badgeDot: "bg-[#3D9463]",
      badgeText: "text-[#286343]",
      description:
        "Methodology, responsibility matrix, support model and continuity overview.",
      linkText: "View implementation resources",
      image: "h4.png",
    },
    {
      title: "Supplier onboarding",
      badge: "Verified / gated",
      badgeBg: "bg-[#E3F2FD]",
      badgeDot: "bg-[#0A78C2]",
      badgeText: "text-[#0A78C2]",
      description:
        "Corporate identity, tax forms, invoicing details and insurance evidence.",
      linkText: "Start supplier onboarding",
      image: "h5.png",
    },
    {
      title: "Accessibility",
      badge: "Public / requestable",
      badgeBg: "bg-[#E6F4EA]",
      badgeDot: "bg-[#3D9463]",
      badgeText: "text-[#286343]",
      description:
        "Accessibility statement, feedback route and current evidence where approved.",
      linkText: "View accessibility resources",
      image: "h6.png",
    },
  ];

  return (
    <section className="bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#0A78C2]">/</span>
                <span className="text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide text-[#0A78C2]">
                  Resource categories
                </span>
              </div>
              <h2 className="max-w-[640px] text-3xl font-extrabold font-['Inter'] leading-9 text-[#051B2B]">
                Browse by procurement discipline.
              </h2>
            </div>

            {/* Grid of Resource Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col overflow-hidden rounded-[16px] border border-[#DCE6EC] bg-white shadow-[0px_2px_6px_0px_rgba(8,47,73,0.04)] transition-all hover:shadow-[0px_6px_16px_0px_rgba(8,47,73,0.08)]"
                >
                  <div className="h-32 w-full overflow-hidden bg-slate-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5 gap-4">
                    <div className="flex flex-col gap-2">
                      {/* Pill Badge */}
                      <div
                        className={`inline-flex w-fit items-center gap-2 rounded-[20px] px-3 py-1 ${card.badgeBg}`}
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-[3px] ${card.badgeDot}`}
                        />
                        <span
                          className={`text-xs font-bold font-['Inter'] leading-4 ${card.badgeText}`}
                        >
                          {card.badge}
                        </span>
                      </div>

                      <h3 className="pt-0.5 text-sm font-extrabold font-['Inter'] leading-5 text-[#051B2B]">
                        {card.title}
                      </h3>

                      <p className="text-xs font-normal font-['Inter'] leading-5 text-[#4E6172]">
                        {card.description}
                      </p>
                    </div>

                    {/* Action Link with arr.png */}
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1.5 text-xs font-bold font-['Inter'] leading-4 text-[#0A78C2] transition-colors hover:text-[#0867A6]"
                    >
                      <span>{card.linkText}</span>
                      <img
                        src="arr.png"
                        alt=""
                        className="h-2 w-auto shrink-0 object-contain transition-transform group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Information Banner */}
            <div className="flex items-start gap-3.5 rounded-[12px] bg-[#E8F4FA] p-4.5 border border-[#DCE6EC]/50">
              <img
                src="SVG (21).png"
                alt=""
                className="mt-0.5 size-5 shrink-0 object-contain"
              />
              <div className="flex flex-col gap-0.5">
                <h4 className="text-sm font-bold font-['Inter'] leading-5 text-[#051B2B]">
                  No duplicate commercial truth.
                </h4>
                <p className="text-xs font-normal font-['Inter'] leading-5 text-[#4E6172]">
                  Pack cards resolve live links to canonical pricing and service
                  pages instead of embedding copied plan limits or prices that can
                  drift out of date.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}