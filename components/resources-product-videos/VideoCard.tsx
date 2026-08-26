import Link from "next/link";
import Reveal from "../ui/Reveal";
import { PlayIcon } from "../ui/icons";

export type Video = {
  image: string;
  alt: string;
  title: string;
  summary: string;
  duration: string;
  state: "Current" | "Review Due";
  tags: string[];
  watchHref: string;
  docsHref?: string;
};

type VideoCardProps = {
  video: Video;
  delay?: number;
};

export default function VideoCard({ video, delay = 0 }: VideoCardProps) {
  return (
    <Reveal
      delay={delay}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="relative">
        <img
          src={video.image}
          alt={video.alt}
          loading="lazy"
          className="h-44 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/5 to-brand-dark/40" />

        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-11 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <PlayIcon className="h-4 w-4 text-brand-dark" />
          </span>
        </span>

        <span
          className={`absolute left-2 top-2 rounded-[20px] px-2.5 py-1 text-[10px] font-bold leading-4 ${
            video.state === "Current"
              ? "bg-green-100 text-emerald-600"
              : "bg-orange-100 text-yellow-700"
          }`}
        >
          {video.state}
        </span>

        <span className="absolute bottom-2 right-2 rounded-[5px] bg-brand-dark/80 px-2 py-0.5 text-xs font-bold leading-4 text-white">
          {video.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm font-bold leading-6 text-brand-dark">{video.title}</p>
        <p className="mt-1 text-xs leading-5 text-slate-600">{video.summary}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[20px] border border-slate-200 bg-slate-100 px-2.5 py-1 text-[10px] leading-4 text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <Link
            href={video.watchHref}
            className="group inline-flex items-center gap-1 text-sm font-bold leading-5 text-brand transition-colors duration-200 hover:text-brand-dark"
          >
            Watch
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>

          {video.docsHref && (
            <Link
              href={video.docsHref}
              className="group inline-flex items-center gap-1 text-sm font-bold leading-5 text-brand transition-colors duration-200 hover:text-brand-dark"
            >
              Docs
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          )}
        </div>
      </div>
    </Reveal>
  );
}
