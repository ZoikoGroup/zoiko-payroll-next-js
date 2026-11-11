import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Countdown from "./Countdown";

const ribbons = [
  { text: "BLACK FRIDAY ✦ 2026 ✦ CYBER MONDAY ✦", top: "8%", className: "bg-cyan-400 text-[#06223a]", rotate: -18 },
  { text: "ZOIKO PAYROLL ✦ MORE CONTROL ✦", top: "24%", className: "bg-blue-600/90 text-white/90", rotate: -18 },
  { text: "MORE CONTROL ✦ PAYROLL COMPLEXITY ✦", top: "40%", className: "border-y border-cyan-400/60 text-cyan-300/80", rotate: -18 },
  { text: "CYBER MONDAY ✦ BLACK FRIDAY ✦ 2026 ✦", top: "58%", className: "bg-cyan-500/25 text-cyan-200/70", rotate: -18 },
  { text: "MORE CONTROL ✦ PAYROLL COMPLEXITY ✦", top: "76%", className: "border-y border-cyan-400/30 text-slate-400/70", rotate: -18 },
];

function Ribbon({ text, top, className, rotate }: (typeof ribbons)[number]) {
  const run = Array.from({ length: 6 }, () => text).join(" ");
  return (
    <div
      aria-hidden
      className={`absolute -left-[10%] w-[130%] overflow-hidden py-1.5 ${className}`}
      style={{ top, transform: `rotate(${rotate}deg)` }}
    >
      <div className="animate-marquee flex w-max whitespace-nowrap text-sm font-extrabold tracking-[0.2em]">
        <span className="pr-6">{run}</span>
        <span className="pr-6">{run}</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061a2e] bg-[radial-gradient(ellipse_at_85%_10%,rgba(37,99,235,0.35),transparent_55%),linear-gradient(135deg,#071b30_0%,#0a2540_60%,#06324a_100%)] text-white">
      {/* faint diagonal hatching */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:repeating-linear-gradient(115deg,#fff_0_1px,transparent_1px_42px)]"
      />

      {/* ribbons + outline lettering, right half on desktop */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 lg:block">
        {ribbons.map((r) => (
          <Ribbon key={r.top} {...r} />
        ))}
        <span className="absolute -bottom-16 right-0 select-none text-[260px] font-black leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(34,211,238,0.18)]">
          BF
        </span>
      </div>

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_368px] lg:gap-20 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Black Friday 2026
          </span>

          <h1 className="mt-6 text-4xl font-extrabold uppercase leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[56px]">
            Payroll complexity.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              More control.
            </span>
          </h1>

          <p className="mt-5 max-w-[560px] text-lg leading-7 text-slate-300">
            Take control of complex payroll operations with a platform built for global organisations and local
            requirements.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#book-demo"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.55)] transition-colors hover:bg-blue-500"
            >
              Book a payroll demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-white/25 bg-white/5 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Zoiko Payroll
            </Link>
          </div>

          <p className="mt-5 inline-flex flex-wrap items-center gap-2 border-l-2 border-cyan-400 bg-white/[0.04] py-2.5 pl-4 pr-5 text-sm text-slate-300">
            <Calendar className="h-4 w-4 text-cyan-400" />
            <strong className="font-semibold text-white">27 November – 30 November 2026</strong>· Black Friday to
            Cyber Monday
          </p>
        </div>

        {/* offer card */}
        <aside className="relative border border-white/10 border-t-[3px] border-t-cyan-400 bg-[#0a1f36]/95 p-7 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur">
          <span className="inline-block rounded-sm bg-amber-400 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#1c1300]">
            Proposed · Pending approval
          </span>
          <p className="mt-3 flex items-start leading-none">
            <span className="bg-gradient-to-b from-white to-cyan-200 bg-clip-text text-[96px] font-black tracking-[-0.04em] text-transparent">
              25
            </span>
            <span className="ml-2 mt-3 text-5xl font-extrabold text-cyan-400">%</span>
            <span className="ml-2 mt-6 text-3xl font-extrabold">
              OFF<span className="text-cyan-400">*</span>
            </span>
          </p>
          <p className="mt-3 text-base leading-6 text-slate-200">
            Eligible annual platform licensing for the first 12 months.
          </p>
          <p className="mt-3 text-xs leading-5 text-slate-400">
            *For new accounts. Excludes statutory charges, payroll processing pass-through and bureau services. Terms
            apply.
          </p>
          <hr className="my-5 border-white/10" />
          <Countdown />
        </aside>
      </div>
    </section>
  );
}
