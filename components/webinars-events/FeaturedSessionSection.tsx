import Image from "next/image";
import Reveal from "../ui/Reveal";

const onDemandTracks = [
  {
    title: "Implementation fundamentals",
    description: "On-demand sessions covering rollout planning and readiness.",
    image: "/Background (32).png",
    alt: "Implementation fundamentals session",
  },
  {
    title: "Payroll reporting & controls",
    description: "On-demand sessions on reconciliation and audit-ready reporting.",
    image: "/Background (33).png",
    alt: "Payroll reporting and controls session",
  },
  {
    title: "Global payroll operating models",
    description: "On-demand sessions on multi-entity and multi-jurisdiction setup.",
    image: "/Background (34).png",
    alt: "Global payroll operating models session",
  },
];

export default function FeaturedSessionSection() {
  return (
    <section className="w-full py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col items-center gap-7 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[680px] flex-col items-start gap-3.5">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="h-3.5 w-1.5 rounded-xs bg-sky-600" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Featured session
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950">
            No eligible event is currently featured
          </h2>
          <p className="w-full max-w-[600px] text-center text-base font-normal leading-7 text-gray-600">
            A session is only featured once it has confirmed timing, approved
            speakers, working registration and a complete agenda. Explore
            on-demand learning while the next live session is finalized.
          </p>
        </div>

        {/* On-demand track cards */}
        <div className="flex flex-wrap items-start justify-center gap-7">
          {onDemandTracks.map((track) => (
            <article
              key={track.title}
              className="flex w-80 flex-col items-start overflow-hidden rounded-2xl bg-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 transition-shadow duration-200 hover:shadow-[0px_8px_24px_0px_rgba(10,46,75,0.10)]"
            >
              <div className="h-48 w-full bg-gradient-to-br from-slate-200 to-slate-300">
                <Image
                  src={track.image}
                  alt={track.alt}
                  width={320}
                  height={192}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-between p-5">
                <h3 className="pb-2 text-base font-bold leading-6 text-sky-950">
                  {track.title}
                </h3>
                <p className="pb-3.5 text-xs font-normal leading-5 text-gray-600">
                  {track.description}
                </p>
                <span className="h-5" />
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
