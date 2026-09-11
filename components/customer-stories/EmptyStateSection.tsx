import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function EmptyStateSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col items-center gap-4 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[680px] flex-col items-center gap-4">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="text-xs font-bold text-sky-600">/</span>
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Honest by design
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950">
            An honest empty state beats a fabricated one
          </h2>
          {/* Figma: "We never pad this page with fake cards or false pagination. When eligible<br/>stories are limited..." */}
          <div className="w-full max-w-[600px]">
            <p className="text-center text-base font-normal leading-7 text-gray-600">
              We never pad this page with fake cards or false pagination. When eligible
              <br />stories are limited, the page tells you clearly and offers real alternatives.
            </p>
          </div>
        </div>

        {/* Empty state card */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-1.5 rounded-2xl bg-white px-11 pb-11 pt-14 outline outline-1 outline-offset-[-1px] outline-slate-200">
          <Image
            src="/empty-state-icon.png"
            alt="Empty state icon"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <p className="w-full pt-2.5 text-center text-base font-extrabold leading-7 text-sky-950">
            No published stories currently match this filter
          </p>
          <p className="w-full text-center text-sm font-normal leading-5 text-gray-600">
            Try clearing your filters, or explore proof through these current
            authorities instead.
          </p>
        </div>

        <p className="text-center text-xs font-normal leading-5 text-gray-400">
          A withdrawn story or unavailable media always shows an explicit
          replacement state — never a broken link or silent removal.
        </p>
      </Reveal>
    </section>
  );
}
