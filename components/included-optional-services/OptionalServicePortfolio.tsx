import Reveal from "../ui/Reveal";

const services = [
  {
    image: "/o1.png",
    badge: "Optional / Contracted",
    badgeBg: "bg-[#F1EAD8]",
    badgeDot: "bg-[#9C7A1F]",
    badgeText: "text-[#9C7A1F]",
    title: "Managed Payroll Operations",
    descClass: "w-80",
    description:
      "Operational payroll administration against a defined responsibility matrix.",
  },
  {
    image: "/o2.png",
    badge: "Jurisdiction dependent",
    badgeBg: "bg-[#EDF1F4]",
    badgeDot: "bg-[#959595]",
    badgeText: "text-[#7C8CA0]",
    title: "Statutory Filing & Reporting",
    descClass: "w-72",
    description:
      "Submission or managed preparation of approved payroll filings.",
  },
  {
    image: "/o3.png",
    badge: "Jurisdiction dependent",
    badgeBg: "bg-[#EDF1F4]",
    badgeDot: "bg-[#959595]",
    badgeText: "text-[#7C8CA0]",
    title: "Remittance & Payment Execution",
    descClass: "w-64",
    description:
      "Authority remittance and employee payment orchestration where authorized.",
  },
  {
    image: "/o4.png",
    badge: "Optional / Catalog",
    badgeBg: "bg-[#E4F1FA]",
    badgeDot: "bg-[#0A78C3]",
    badgeText: "text-[#0A78C3]",
    title: "Jurisdiction & Entity Activation",
    descClass: "w-80",
    description:
      "Enable a new country or legal entity within your plan capacity.",
  },
  {
    image: "/o5.png",
    badge: "Separately scoped",
    badgeBg: "bg-[#EAE6F7]",
    badgeDot: "bg-[#5B4A9E]",
    badgeText: "text-[#5B4A9E]",
    title: "Implementation & Migration",
    descClass: "w-72",
    description:
      "Configuration, data migration, testing, cutover and hypercare.",
  },
  {
    image: "/o6.png",
    badge: "Optional / Contracted",
    badgeBg: "bg-[#F1EAD8]",
    badgeDot: "bg-[#9C7A1F]",
    badgeText: "text-[#9C7A1F]",
    title: "Custom Integration",
    descClass: "w-80",
    description:
      "Bespoke connectors, transformation and integration engineering.",
  },
];

export default function OptionalServicePortfolio() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20" id="services-portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-[#0A78C3]">
                <span aria-hidden="true">/</span>
                Optional service portfolio
              </p>
              <h2 className="mt-5 text-3xl font-extrabold leading-9 text-[#082F49]">
                Add only what your operating model<br />needs.
              </h2>
            </div>
            <div className="flex items-start justify-end pt-[65px] lg:justify-end">
              <p className="max-w-xs text-sm font-light leading-5 text-[#5B6B7A]">
                Every state resolves from the current catalog and<br/>
                coverage registry.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="w-full h-[275px] flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_1px_2px_rgba(8,47,73,0.04)] ring-1 ring-[#DCE6EC]"
              >
                <div className="relative h-28 w-full overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span
                    className={`inline-flex h-7 w-fit items-center gap-2.5 self-start rounded-[20px] px-3 ${s.badgeBg}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-[3px] ${s.badgeDot}`}
                    />
                    <span
                      className={`text-xs font-bold leading-4 ${s.badgeText}`}
                    >
                      {s.badge}
                    </span>
                  </span>
                  <h3 className="mt-4 text-sm font-extrabold leading-5 text-[#082F49]">
                    {s.title}
                  </h3>
                  <p className={`mt-2 flex-1 text-xs font-normal font-['Inter'] leading-5 text-slate-600 ${s.descClass}`}>
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}