import Image from "next/image";
import SectionLabel from "./SectionLabel";
import StatusBadge, { type StatusType } from "./StatusBadge";

interface CountryCard {
  name: string;
  status: StatusType;
  image: string;
  desc: string;
}

const cards: CountryCard[] = [
  {
    name: "United States",
    status: "available",
    image: "/h.png",
    desc: "Effective March 2025 · Direct, self-managed.",
  },
  {
    name: "United Kingdom",
    status: "available",
    image: "/i.png",
    desc: "Effective Jan 2025 · Direct, self-managed.",
  },
  {
    name: "Germany",
    status: "limited",
    image: "/j.png",
    desc: "Select entity types · Self-managed only.",
  },
  {
    name: "Singapore",
    status: "available",
    image: "/k.png",
    desc: "Effective March 2025 · Direct, self-managed.",
  },
  {
    name: "Brazil",
    status: "partner",
    image: "/l.png",
    desc: "Delivered via approved local partner.",
  },
  {
    name: "India",
    status: "planned",
    image: "/mm.png",
    desc: "Approved future direction — not current service.",
  },
];

function CountryCard({ card }: { card: CountryCard }) {
  return (
    <div className="w-[358px] h-[340px] flex-shrink-0 bg-white rounded-2xl shadow-[0px_4px_14px_0px_rgba(10,46,71,0.05)] shadow-[0px_1px_2px_0px_rgba(10,46,71,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col items-start overflow-hidden">
      {/* Dark gradient image header */}
      <div className="w-full pt-2.5 pb-0 flex flex-col items-start">
        <div className="w-full min-h-40 bg-gradient-to-br from-sky-950 via-sky-950 to-slate-900 rounded-[10px] flex flex-col justify-center items-start overflow-hidden">
          <Image
            src={card.image}
            alt={card.name}
            width={330}
            height={206}
            className="w-full h-52 object-cover"
          />
        </div>
      </div>
      {/* Content area */}
      <div className="w-full px-5 py-5 flex flex-col items-start gap-[26px]">
        <div className="self-stretch pr-[0.01px] inline-flex justify-between items-center">
          <div className="text-lg font-bold leading-7 text-sky-950">
            {card.name}
          </div>
          <StatusBadge status={card.status} />
        </div>
        <div className="self-stretch flex flex-col items-start">
          <div className="self-stretch text-xs leading-5 text-slate-600">
            {card.desc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoverageSnapshot() {
  return (
    <section className="w-full px-8 pt-20 pb-[45px]">
      <div className="mx-auto max-w-[1180px] flex flex-col items-start gap-3.5">
        <div className="flex max-w-[858px] flex-col items-start gap-2.5 pb-[0.01px] pt-[1.62px] -ml-[13px]">
          <SectionLabel slash>Coverage Snapshot</SectionLabel>
          <div className="flex flex-col gap-0 pt-3.5 pb-[0.58px] ml-[26px]">
            <div className="text-3xl font-extrabold leading-10 text-sky-950">
              A dated snapshot — never a hard-coded country wall
            </div>
          </div>
          <div className="max-w-[600px] text-base leading-6 text-slate-600 ml-[26px]">
            Coverage snapshot — verified Aug 18, 2026, 09:12 UTC. Current and
            <br />
            Future/Planned stay in separate visual zones.
          </div>
        </div>

        {/* 6 country cards — 3x2 grid, 352x435 each */}
        <div className="w-full pt-6 pb-3.5 flex flex-wrap justify-center gap-5 -ml-[30px]">
          {cards.map((card) => (
            <CountryCard key={card.name} card={card} />
          ))}
        </div>

        <div className="flex w-full justify-center pt-6">
          <div className="whitespace-nowrap border-b border-slate-200 pb-1 text-center text-sm font-semibold leading-5 text-sky-700">
            Explore all jurisdictions in the Country and Territory Directory →
          </div>
        </div>
      </div>
    </section>
  );
}
