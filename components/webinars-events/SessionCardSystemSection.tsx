import Image from "next/image";
import Reveal from "../ui/Reveal";

type SessionCardProps = {
  status: string;
  title: string;
  meta: string;
  topics: string[];
  speakerInitials: string;
  speakerName: string;
  speakerRole: string;
  cta: string;
  image: string;
  imageAlt: string;
};

const STATUS_CHIP_CLASSES: Record<string, string> = {
  Upcoming: "bg-sky-100 text-sky-800",
  Open: "bg-gray-200 text-gray-600",
  Waitlist: "bg-orange-100 text-yellow-700",
  "On demand": "bg-gray-200 text-gray-600",
  Completed: "bg-slate-100 text-gray-400",
};

function SessionCard({
  status,
  title,
  meta,
  topics,
  speakerInitials,
  speakerName,
  speakerRole,
  cta,
  image,
  imageAlt,
}: SessionCardProps) {
  return (
    <article className="flex min-w-64 flex-1 flex-col items-start overflow-hidden rounded-2xl bg-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 transition-shadow duration-200 hover:shadow-[0px_8px_24px_0px_rgba(10,46,75,0.10)]">
      {/* Thumbnail + status chip */}
      <div className="relative h-36 w-full bg-gradient-to-br from-slate-200 to-slate-300">
        <Image
          src={image}
          alt={imageAlt}
          width={288}
          height={144}
          className="h-36 w-full object-cover"
        />
        <span
          className={`absolute left-[10px] top-[10px] rounded-[20px] px-2.5 py-1 text-xs font-extrabold leading-4 tracking-tight ${
            STATUS_CHIP_CLASSES[status] ?? "bg-gray-200 text-gray-600"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Body */}
      <div className="flex w-full flex-1 flex-col items-start p-4">
        <h3 className="text-sm font-bold leading-5 text-sky-950">{title}</h3>
        <p className="pt-1 pb-2.5 text-xs font-normal leading-4 text-gray-400">
          {meta}
        </p>

        {/* Topic tags */}
        <div className="flex flex-wrap items-start gap-[5px] pb-3">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-[20px] bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold leading-4 text-sky-950"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Speaker */}
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-100 pt-1.5 pb-2 text-xs font-extrabold leading-4 text-sky-800">
            {speakerInitials}
          </span>
          <span className="flex flex-col items-start">
            <span className="text-xs font-bold leading-5 text-sky-950">
              {speakerName}
            </span>
            <span className="text-xs font-normal leading-4 text-gray-400">
              {speakerRole}
            </span>
          </span>
        </div>

        {/* CTA */}
        <span className="pt-3 text-xs font-bold leading-5 text-sky-600 transition-colors duration-200 hover:text-sky-800">
          {cta} →
        </span>
      </div>
    </article>
  );
}

const cards: SessionCardProps[] = [
  {
    status: "Open",
    title: "Global payroll fundamentals",
    meta: "Sep 15, 2026 · 15:00 CET · Online",
    topics: ["Global payroll", "All audiences"],
    speakerInitials: "MW",
    speakerName: "M. Weber",
    speakerRole: "Chief Product Officer",
    cta: "Register",
    image: "/Background (35).png",
    imageAlt: "Global payroll fundamentals session",
  },
  {
    status: "Waitlist",
    title: "Implementation readiness workshop",
    meta: "Sep 22, 2026 · 10:00 CET · Online",
    topics: ["Implementation", "Admins"],
    speakerInitials: "RT",
    speakerName: "R. Tanaka",
    speakerRole: "Chief Technology Officer",
    cta: "Join waitlist",
    image: "/Background (36).png",
    imageAlt: "Implementation readiness workshop",
  },
  {
    status: "On demand",
    title: "Reporting & reconciliation deep dive",
    meta: "Recorded session · 48 min",
    topics: ["Reporting", "Finance"],
    speakerInitials: "CA",
    speakerName: "C. Alvarez",
    speakerRole: "VP, Payroll Operations",
    cta: "Watch on demand",
    image: "/Background (37).png",
    imageAlt: "Reporting and reconciliation deep dive",
  },
  {
    status: "Completed",
    title: "Security & access controls overview",
    meta: "Aug 18, 2026 · Completed",
    topics: ["Security", "IT / Admins"],
    speakerInitials: "AL",
    speakerName: "A. Lindqvist",
    speakerRole: "Head of Security",
    cta: "Review update",
    image: "/Background (38).png",
    imageAlt: "Security and access controls overview",
  },
];

export default function SessionCardSystemSection() {
  return (
    <section className="w-full py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col items-center gap-4 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[680px] flex-col items-start gap-3.5">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="h-3.5 w-1.5 rounded-xs bg-sky-600" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Session card system
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950">
            One reusable card, every lifecycle state
          </h2>
        </div>

        {/* Card grid */}
        <div className="flex flex-wrap items-stretch justify-center gap-7">
          {cards.map((card) => (
            <SessionCard key={card.title} {...card} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
