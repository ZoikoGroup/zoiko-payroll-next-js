import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const regions = [
  { name: "Europe", image: "/images/jurisdiction-guides/london.png" },
  { name: "Americas", image: "/images/jurisdiction-guides/seattle.png" },
  { name: "Asia Pacific", image: "/images/jurisdiction-guides/singapore.png" },
  {
    name: "Middle East & Africa",
    image: "/images/jurisdiction-guides/dubai.png",
  },
];

export default function BrowseByRegionSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Browse by region</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Deterministic discovery, no guesswork
          </h2>
          <p className="mt-3 max-w-[660px] text-base leading-6 text-gray-600">
            Photography here is supporting context, not a status cue — availability always comes
            from the current authority record, never from a map or flag.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region, index) => (
            <Reveal key={region.name} delay={index * 70}>
              <Link
                href="#guide-directory"
                className="group relative flex h-40 flex-col justify-end sm:h-48 overflow-hidden rounded-2xl border border-slate-200 p-3.5"
              >
                <img
                  src={region.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#042F2E]/5 via-[#042F2E]/30 to-[#042F2E]/80" />

                <div className="relative">
                  <p className="text-base font-bold leading-6 text-white">{region.name}</p>
                  <p className="text-xs leading-4 text-slate-300">Browse guides →</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
