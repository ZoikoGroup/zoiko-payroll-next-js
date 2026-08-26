import Link from "next/link";
import Reveal from "../ui/Reveal";

export type Announcement = {
  image: string;
  alt: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  href: string;
};

type AnnouncementCardProps = {
  announcement: Announcement;
  delay?: number;
};

export default function AnnouncementCard({ announcement, delay = 0 }: AnnouncementCardProps) {
  return (
    <Reveal
      delay={delay}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <img
        src={announcement.image}
        alt={announcement.alt}
        loading="lazy"
        className="h-44 w-full object-cover"
      />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <span className="rounded-md bg-sky-100 px-2 py-1 text-xs font-extrabold uppercase leading-4 tracking-wide text-sky-800">
            {announcement.category}
          </span>
          <span className="shrink-0 text-xs leading-4 text-slate-400">{announcement.date}</span>
        </div>

        <p className="mt-2.5 text-base font-bold leading-6 text-brand-dark">{announcement.title}</p>
        <p className="mt-2 text-xs leading-5 text-slate-600">{announcement.summary}</p>

        <Link
          href={announcement.href}
          className="group mt-auto inline-flex items-center gap-1 pt-3.5 text-xs font-bold leading-5 text-brand transition-colors duration-200 hover:text-brand-dark"
        >
          Read announcement
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </div>
    </Reveal>
  );
}
