import Reveal from "../ui/Reveal";

const cards = [
  {
    icon: "/images/business-leaders/icons/account-circle.svg",
    title: "HR / HCM",
    description: "Healthy — last successful sync 6m ago.",
  },
  {
    icon: "/images/business-leaders/icons/credit-card.svg",
    title: "Finance / ERP Export",
    description: "Partial — 17 of 482 records affected.",
  },
  {
    icon: "/images/business-leaders/icons/schedule.svg",
    title: "Time & Attendance",
    description: "Healthy — no open incidents.",
  },
  {
    icon: "/images/business-leaders/icons/fact-check.svg",
    title: "Access Review",
    description: "Current — 6 privileged roles reviewed.",
  },
  {
    icon: "/images/business-leaders/icons/library-books.svg",
    title: "Assurance Evidence",
    description: "Reviewed 2026-06-01 — see Trust Center.",
  },
  {
    icon: "/images/business-leaders/icons/data-check.svg",
    title: "Last Recovery",
    description: "Aug 14, 22:10 UTC — attributable event.",
  },
];

export default function IntegrationHealthSecurityTrustSection() {
  return (
    <section className="bg-[#F6F8FC] py-16 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-[13px] font-bold tracking-[0.06em] text-[#2F6FED] uppercase">
            Integration Health &amp; Security / Trust
          </p>
          <h2 className="mt-2.5 text-center text-[1.8rem] leading-[1.2] font-extrabold tracking-tight text-[#08132B] lg:text-[28.5px]">
            Affected scope and owner — never raw payloads or secrets
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-11 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-[14px] border border-[#E6E9F0] bg-white p-[26px]"
              >
                <div className="flex size-[42px] items-center justify-center rounded-[10px] bg-[#E8F0FF]">
                  <img src={card.icon} alt="" className="size-6" />
                </div>
                <h3 className="mt-2.5 text-[14.7px] font-extrabold tracking-tight text-[#08132B]">
                  {card.title}
                </h3>
                <p className="mt-1 text-[13px] leading-[1.6] text-[#6B7488]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
