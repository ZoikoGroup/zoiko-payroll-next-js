import Reveal from "../ui/Reveal";

const badgeStyles = {
  Blocked: "bg-[#FBE9E9] text-[#C23A3A]",
  "Needs attention": "bg-[#FDF1DE] text-[#A6650F]",
};

const exceptions = [
  {
    badge: "Blocked" as const,
    title: "Germany payroll — cutoff blocker",
    description: "Unresolved validation blocker before the scheduled cutoff.",
    owner: "Owner: l.hoffmann",
    due: "Due Aug 16",
  },
  {
    badge: "Needs attention" as const,
    title: "France reconciliation — open difference",
    description: "Finance and payroll totals show an unexplained variance.",
    owner: "Owner: f.nguyen",
    due: "Due Aug 18",
  },
  {
    badge: "Needs attention" as const,
    title: "Finance export — partial failure",
    description: "17 of 482 records failed to export; retry pending.",
    owner: "Owner: it-integrations",
    due: "Due Aug 17",
  },
];

export default function MaterialExceptionsSection() {
  return (
    <section className="bg-white pb-16 sm:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Left Column (Image) */}
          <Reveal className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative h-[260px] w-full overflow-hidden rounded-2xl sm:h-[320px] lg:h-[400px]">
              <img
                src="/images/business-leaders/material-exceptions.png"
                alt="Team reviewing a material exception together"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </Reveal>

          {/* Right Column (Text) */}
          <Reveal delay={120} className="w-full">
            <p className="mb-2.5 text-[13px] font-bold tracking-[0.06em] text-[#2F6FED] uppercase">
              Material Exceptions
            </p>
            <h2 className="text-[1.65rem] leading-[1.15] font-extrabold tracking-tight text-[#08132B] lg:text-[26.4px]">
              Only what genuinely needs executive attention
            </h2>
            <p className="mt-3.5 text-[14px] leading-[1.6] text-[#3A4356]">
              Every item states what happened, why it&apos;s material, the
              rule, scope, owner, deadline and evidence freshness — never
              hundreds of unfiltered rows.
            </p>
          </Reveal>
        </div>

        {/* Exception Cards */}
        <Reveal delay={200}>
          <div className="mt-11 grid grid-cols-1 gap-[18px] sm:grid-cols-3">
            {exceptions.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-[14px] border border-[#E6E9F0] bg-white px-[22px] pt-6 pb-[22px]"
              >
                <span
                  className={`inline-flex w-fit items-center rounded-full px-[11px] py-1 text-[11px] font-bold ${badgeStyles[item.badge]}`}
                >
                  {item.badge}
                </span>

                <h3 className="mt-1.5 text-[14.2px] font-extrabold tracking-tight text-[#08132B]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-[#6B7488]">
                  {item.description}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-[#E6E9F0] pt-3">
                  <span className="text-[11.5px] text-[#6B7488]">{item.owner}</span>
                  <span className="text-[11.5px] text-[#6B7488]">{item.due}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
