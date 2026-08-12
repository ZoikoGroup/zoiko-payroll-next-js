import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { lifecycleStages } from "./lifecycle-data";

/** Stage tiles overlaid on the hero image: first two done, third active, rest upcoming. */
const heroStageTone = ["done", "done", "active", "idle", "idle", "idle"] as const;

const heroTileStyles = {
  done: { tile: "border-emerald-400/30 bg-emerald-400/10", number: "text-emerald-300" },
  active: { tile: "border-amber-400/40 bg-amber-400/20", number: "text-amber-300" },
  idle: { tile: "border-white/10 bg-white/5 opacity-70", number: "text-white/50" },
} as const;

export default function HeroSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#F4F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <Eyebrow>How Zoiko Payroll works</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-dark sm:text-5xl">
              How Zoiko Payroll works, from input to completed payroll.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600">
              One payroll run moves through six visible stages — Prepare, Calculate, Validate, Review,
              Approve, Complete — surrounded by role-based access, recorded decisions and audit history.
              Exact calculations, integrations and jurisdiction support depend on your configured scope.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <span className="bg-brand-gradient rounded-lg px-6 py-3 text-center text-sm font-semibold text-white shadow-md shadow-brand/30">
                Explore the six stages
              </span>
              <Link
                href="/book-a-demo"
                className="rounded-lg border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                Book a demo
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-2xl bg-brand-dark shadow-lg shadow-brand-dark/10">
              <img
                src="/images/how-it-works/hero.png"
                alt="Payroll administrator working through a payroll run"
                loading="lazy"
                className="h-80 w-full object-cover sm:h-96 lg:h-full"
              />
              <div
                className="absolute inset-0 bg-linear-to-r from-brand-dark/90 via-brand-dark/50 to-transparent"
                aria-hidden="true"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-brand-dark/85 to-transparent"
                aria-hidden="true"
              />

              <span className="absolute left-4 right-4 top-4 inline-flex flex-wrap items-center gap-1.5 rounded-2xl bg-brand-dark/75 px-2.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur-sm sm:left-5 sm:right-auto sm:top-5 sm:rounded-full sm:text-[11px]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                Run PR-2026-08 · Acme Group EMEA · synthetic data
              </span>

              <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 sm:inset-x-5 sm:bottom-5 sm:grid-cols-6">
                {lifecycleStages.map((stage, index) => {
                  const styles = heroTileStyles[heroStageTone[index]];
                  return (
                    <span
                      key={stage.id}
                      className={`rounded-md border px-1 py-2.5 text-center ${styles.tile}`}
                    >
                      <span className={`block text-[10px] font-semibold ${styles.number}`}>
                        {stage.number}
                      </span>
                      <span className="mt-0.5 block text-[11px] font-semibold text-white">
                        {stage.label}
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
