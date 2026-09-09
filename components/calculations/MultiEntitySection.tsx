import Image from "next/image";
import Reveal from "../ui/Reveal";

const steps = [
  "Author",
  "Review",
  "Test",
  "Approve",
  "Version",
  "Deploy",
  "Monitor",
];

export default function MultiEntitySection() {
  return (
    <section className="relative w-full py-[84px] overflow-hidden bg-[#0B1F3A]">
      {/* Background Image with Figma Blue Tone */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gf.png"
          alt="Multi-entity background"
          fill
          priority={false}
          className="object-cover object-center mix-blend-luminosity opacity-45"
        />
        <div className="absolute inset-0 bg-[#0B1F3A]/40 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="w-full max-w-[806px] flex flex-col items-center gap-2 text-center">
          <div className="inline-flex items-center gap-2">
            <div className="w-4 h-px bg-[rgba(143,176,255,1)]" />
            <span className="text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest text-[rgba(143,176,255,1)]">
              MULTI-ENTITY &amp; JURISDICTION
            </span>
          </div>
          <h2 className="pt-px text-center text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight sm:leading-[44px] text-white">
            One calculation discipline. Local rules
            <br />
            where the law requires them
          </h2>
          <p className="pb-[0.59px] text-center text-base font-normal font-['Inter'] leading-6 text-slate-300">
            No silent nearest-country or generic tax fallback — ever.
          </p>
        </Reveal>

        {/* Flow steps */}
        <Reveal delay={100} className="w-full flex flex-wrap items-center justify-center gap-y-3 pt-2">
          {steps.map((step, idx) => (
            <div key={step} className="flex items-center">
              <div className="rounded-[100px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.16)] px-4 py-2 shadow-sm">
                <span className="text-xs font-semibold font-['Inter'] leading-4 text-white whitespace-nowrap">
                  {step}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <Image
                  src="/grey.png"
                  alt="→"
                  width={14}
                  height={14}
                  className="h-3 w-3.5 object-contain shrink-0 mx-2 sm:mx-3 opacity-60"
                />
              )}
            </div>
          ))}
        </Reveal>

        {/* Callout */}
        <Reveal delay={200} className="w-full max-w-[760px] rounded-r-lg border-l-[3px] border-[#0A78C3] bg-[rgba(255,255,255,0.06)] px-4 sm:px-6 py-2.5 text-center mt-2">
          <p className="text-sm font-normal font-['Inter'] leading-5 text-indigo-100">
            Public jurisdiction and feature claims resolve only from the versioned
            coverage catalog.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
