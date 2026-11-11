import Link from "next/link";
import { ArrowRight, ChevronDown, CircleCheck } from "lucide-react";
import { Container, Eyebrow } from "./Primitives";

const points = [
  "New accounts, eligible annual plans",
  "Applies to the first 12 months of platform licensing",
  "Valid 27 – 30 November 2026",
];

export default function OfferSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#071a2e_0%,#0b2a47_100%)] py-24 text-white sm:py-28">
      {/* diagonal stripes */}
      <span
        aria-hidden
        className="absolute -left-10 -top-16 -z-10 h-28 w-[110%] origin-top-left -rotate-[4deg] bg-cyan-400"
      />
      <span
        aria-hidden
        className="absolute -bottom-10 right-[-5%] -z-10 h-24 w-[70%] -rotate-[4deg] bg-blue-700/80"
      />

      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_524px]">
        <div>
          <Eyebrow tone="cyan">Black Friday 2026</Eyebrow>
          <h2 className="mt-5 max-w-[420px] text-3xl font-extrabold leading-[1.25] tracking-[-0.03em] sm:text-[34px]">
            A smarter payroll investment starts here.
          </h2>
          <p className="mt-2 flex items-start leading-none">
            <span className="bg-gradient-to-b from-white to-cyan-200 bg-clip-text text-[120px] font-black tracking-[-0.05em] text-transparent sm:text-[180px]">
              25
            </span>
            <span className="ml-1 mt-4 text-6xl font-extrabold text-cyan-400 sm:text-7xl">%</span>
            <span className="ml-4 mt-8 text-4xl font-extrabold sm:text-5xl">OFF</span>
          </p>
        </div>

        <div className="rounded-xl border border-white/20 bg-white/[0.06] p-8 backdrop-blur-sm">
          <span className="inline-block rounded-sm bg-amber-400 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#1c1300]">
            Proposed · Pending finance and product approval
          </span>
          <h3 className="mt-4 text-xl font-bold leading-7">
            The first 12 months of eligible annual platform licensing for new accounts.
          </h3>
          <p className="mt-4 text-[15px] leading-6 text-slate-300">
            Offer applies to eligible annual platform licensing only. Statutory charges, payroll processing pass-through
            and bureau services are excluded.
          </p>
          <ul className="mt-5 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15px] text-slate-200">
                <CircleCheck className="h-4 w-4 shrink-0 text-cyan-400" />
                {p}
              </li>
            ))}
          </ul>

          <Link
            href="#book-demo"
            className="mt-7 flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-6 py-4 text-base font-bold text-[#06223a] shadow-[0_8px_28px_rgba(34,211,238,0.35)] transition-colors hover:bg-cyan-300"
          >
            Claim Your Black Friday Offer <ArrowRight className="h-4 w-4" />
          </Link>

          <details className="group mt-6 border-t border-white/10 pt-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold [&::-webkit-details-marker]:hidden">
              Offer terms and exclusions
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[13px] leading-5 text-slate-300">
              <li>The 25% discount is proposed and remains subject to Finance and Product approval.</li>
              <li>Available to new accounts signing an eligible annual platform licence between 27 and 30 November 2026.</li>
              <li>Applies to platform licensing fees for the first 12 months only; standard pricing applies thereafter.</li>
              <li>Excludes statutory charges, payroll processing pass-through costs and bureau services.</li>
              <li>Jurisdiction availability varies; planned, limited and partner-supported jurisdictions are not fully available.</li>
            </ul>
          </details>
        </div>
      </Container>
    </section>
  );
}
