import Image from "next/image";
import SectionLabel from "./SectionLabel";

const statusCards = [
  {
    title: "Available",
    image: "/m.png",
    color: "bg-emerald-50",
    dot: "bg-green-700",
    textColor: "text-green-700",
    desc: <>Current service exists for<br/>documented scope.</>,
    details: ["Effective date", "Service model", "Scope & limitations", "Last verified"],
  },
  {
    title: "Limited availability",
    image: "/n.png",
    color: "bg-orange-100",
    dot: "bg-yellow-700",
    textColor: "text-yellow-700",
    desc: <>Service exists only within an explicit<br/>narrower boundary.</>,
    details: ["Limitation shown first", "Narrower scope defined"],
  },
  {
    title: "Partner-supported",
    image: "/o.png",
    color: "bg-sky-100",
    dot: "bg-sky-600",
    textColor: "text-sky-600",
    desc: <>Current service depends on an<br/>approved partner arrangement.</>,
    details: ["Delivery boundary", "Contracting/support model"],
  },
  {
    title: "Planned",
    image: "/p.png",
    color: "bg-violet-100",
    dot: "bg-violet-700",
    textColor: "text-violet-700",
    desc: <>Approved future direction — not<br/>current service.</>,
    details: ["No current-service implication", "No current-service CTA"],
  },
  {
    title: "Unavailable",
    image: "/q.png",
    color: "bg-rose-100",
    dot: "bg-red-600",
    textColor: "text-red-600",
    desc: "No current service for requested scope.",
    details: [],
  },
  {
    title: "Needs review",
    image: "/r.png",
    color: "bg-gray-100",
    dot: "bg-slate-500",
    textColor: "text-slate-500",
    desc: <>Evidence is stale, conflicting or incomplete —<br/>positive claim suppressed.</>,
    details: [],
  },
];

export default function AvailabilityStateContract() {
  return (
    <section className="w-full py-20 bg-slate-50">
      <div className="mx-auto max-w-[1180px] px-10 flex flex-col items-start gap-2.5">
        <div className="w-full pt-[1.62px] pb-[0.01px] flex flex-col items-start gap-2.5">
          <SectionLabel slash>Availability State Contract</SectionLabel>
          <div className="w-full flex flex-col gap-0 pb-[0.58px]">
            <div className="text-3xl font-extrabold leading-10 text-sky-950">
              Status is a governed contract, not a decorative badge
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="w-[588px] text-base leading-6 text-slate-600">
              Every state carries a defined meaning, a required public detail.
            </div>
          </div>
        </div>

        {/* Cards - 3x2 grid, 352x435 each */}
        <div className="w-full pt-6 pb-3.5 flex flex-wrap justify-center gap-5 -ml-[7px]">
          {statusCards.map((card) => (
            <div
              key={card.title}
              className="w-[352px] h-[435px] flex-shrink-0 bg-white rounded-2xl shadow-[0px_4px_14px_0px_rgba(10,46,71,0.05)] shadow-[0px_1px_2px_0px_rgba(10,46,71,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col items-start overflow-hidden"
            >
              <div className="w-full px-2.5 pt-2.5 pb-0 flex flex-col items-start">
                <div className="w-full bg-gradient-to-br from-sky-950 via-sky-950 to-slate-900 rounded-[10px] flex flex-col justify-center items-start overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={330}
                    height={206}
                    className="w-full h-52 object-cover"
                  />
                </div>
              </div>
              <div className="w-full px-5 py-5 flex flex-col items-start gap-2.5">
                <div
                  className={`inline-flex items-center gap-1.5 rounded-[20px] ${card.color} px-3 py-1`}
                >
                  <div className={`h-1.5 w-1.5 rounded-sm ${card.dot}`} />
                  <span
                    className={`text-xs font-bold leading-5 ${card.textColor}`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {card.title}
                  </span>
                </div>
                {card.desc && (
                  <div className="w-full pb-[0.63px] flex flex-col items-start">
                    <div className="w-full text-xs leading-5 text-slate-600">
                      {card.desc}
                    </div>
                  </div>
                )}
                {card.details.length > 0 && (
                  <div className="w-full pl-[2px] pt-0.5 pb-2 flex flex-col items-start gap-0.5">
                    {card.details.map((d) => (
                      <div key={d} className="w-full flex items-start gap-1.5 text-xs leading-4 text-gray-400">
                        <span>•</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="w-[820px] h-[72.2px] mx-auto px-5 py-4 bg-sky-100 rounded-lg flex flex-col items-start">
          <div className="text-xs leading-5 text-sky-900 text-left">
            Availability, evidence freshness and future-state planning are tracked separately —
            a market is never shown as &quot;Available&quot;
            <br />
            based on stale or conflicting evidence.
          </div>
        </div>
      </div>
    </section>
  );
}
