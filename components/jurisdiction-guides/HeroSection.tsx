import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

/**
 * Figma lays this out as 566x585 + four 435x292 frames: a full-height left
 * column, then two half-height columns. Grid fills row-major, so the order is
 * col2/row1, col3/row1, col2/row2, col3/row2.
 * The collage only assembles at lg; smaller screens use the left frame alone.
 */
const collage = [
  { src: "/images/jurisdiction-guides/london.png", className: "lg:row-span-2" },
  { src: "/images/jurisdiction-guides/singapore.png", className: "hidden lg:block" },
  { src: "/images/jurisdiction-guides/dubai.png", className: "hidden lg:block" },
  { src: "/images/jurisdiction-guides/seattle.png", className: "hidden lg:block" },
  { src: "/images/jurisdiction-guides/facade.png", className: "hidden lg:block" },
];

const results = [
  { name: "United Kingdom", meta: "Country · Europe", status: "Available", available: true },
  { name: "Germany", meta: "Country · Europe", status: "Review due", available: false },
  { name: "Ontario", meta: "Province · Canada", status: "Available", available: true },
];

const selected = [
  { label: "Reviewed", value: "Jul 2026" },
  { label: "Current availability", value: "Check Directory →" },
  { label: "Local requirements", value: "View authority →" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#042F2E] py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 grid grid-cols-1 grid-rows-1 opacity-90 lg:grid-cols-[566fr_435fr_435fr] lg:grid-rows-2">
        {collage.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt=""
            loading="lazy"
            className={`size-full object-cover ${image.className}`}
          />
        ))}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.90) 34%, rgba(8,47,73,0.30) 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">Jurisdiction Guides</Eyebrow>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Payroll jurisdiction guides with current market context.
          </h1>

          <p className="mt-5 max-w-[660px] text-base leading-6 text-slate-300">
            Explore reviewed market-specific payroll guidance while keeping current availability,
            approved local requirements and implementation scope one clear authority link away.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="#guide-directory"
              className="rounded-lg bg-brand-gradient px-5 py-3 text-center text-sm font-bold text-white shadow-[0px_8px_18px_-6px_rgba(11,76,120,0.45)] transition-all duration-200 hover:-translate-y-0.5"
            >
              Find a jurisdiction guide
            </Link>
            <Link
              href="/country-territory-directory"
              className="rounded-lg border border-white/50 px-5 py-3 text-center text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Check jurisdiction availability
            </Link>
          </div>
        </Reveal>

        <Reveal delay={140} className="relative pt-4">
          <span className="absolute left-5 top-0 z-10 rounded-[20px] bg-brand-dark px-3 py-1 text-xs font-bold leading-4 text-white shadow-[0px_8px_18px_-6px_rgba(0,0,0,0.35)]">
            Live in every guide
          </span>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_40px_80px_-20px_rgba(0,0,0,0.50)]">
            <div className="flex flex-col gap-2 border-b border-slate-200 px-4 py-4">
              <p className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Synthetic guide finder preview
              </p>
              <p className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-2.5 text-xs leading-5 text-slate-500">
                🔎 Search a jurisdiction — e.g. &quot;Germany&quot;, &quot;UK&quot;,
                &quot;Ontario&quot;
              </p>
            </div>

            <div className="px-4 py-3.5">
              {results.map((result) => (
                <div
                  key={result.name}
                  className="flex items-center justify-between gap-3 border-b border-slate-200 py-2.5 last:border-b-0"
                >
                  <div>
                    <p className="text-sm font-bold leading-5 text-[#0A2E4B]">{result.name}</p>
                    <p className="text-xs leading-4 text-slate-500">{result.meta}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-[20px] px-2 py-[3px] text-[10px] font-bold leading-4 ${
                      result.available
                        ? "bg-green-100 text-emerald-600"
                        : "bg-orange-100 text-yellow-700"
                    }`}
                  >
                    {result.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 bg-slate-100 px-4 py-3.5">
              <p className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Selected: United Kingdom
              </p>
              {selected.map((row) => (
                <div key={row.label} className="flex items-start justify-between gap-3 py-[3px]">
                  <span className="text-xs leading-5 text-gray-600">{row.label}</span>
                  <span className="text-right text-xs font-bold leading-5 text-[#0A2E4B]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
