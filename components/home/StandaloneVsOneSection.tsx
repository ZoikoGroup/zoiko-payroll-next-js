import Link from "next/link";
import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import { ArrowRightIcon } from "../ui/icons";
import Eyebrow from "./Eyebrow";

export default function StandaloneVsOneSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Standalone Zoiko Payroll and Zoiko One</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Focused when you need payroll. Connected when you need more.
          </h2>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:grid-cols-2">
          <div className="bg-white p-8">
            <Eyebrow>Standalone</Eyebrow>
            <h3 className="mt-3 text-xl font-semibold text-brand-dark">Zoiko Payroll on its own</h3>
            <div className="mt-6 space-y-2">
              <div className="h-2.5 w-3/4 rounded-full bg-slate-200" />
              <div className="h-2.5 w-1/2 rounded-full bg-slate-200" />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              Dedicated payroll product experience; independent subscription; payroll-specific
              onboarding, documentation and support; no Zoiko One subscription required.
            </p>
            <ArrowLink href="/pricing" className="mt-5">
              Choose Zoiko Payroll
            </ArrowLink>
          </div>

          <div className="bg-brand-dark p-8 text-white">
            <Eyebrow tone="light">Through Zoiko One</Eyebrow>
            <h3 className="mt-3 text-xl font-semibold text-white">Payroll, connected</h3>
            <div className="mt-6 space-y-3">
              <div className="flex gap-2">
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white">Payroll</span>
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white">HR</span>
              </div>
              <div className="h-2.5 w-2/3 rounded-full bg-white/15" />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-300">
              Unified access to multiple Zoiko products; connected data and workflows where enabled;
              broader administration and reporting; potential bundled commercial advantages.
            </p>
            <Link
              href="/company/zoiko-group"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors duration-200 hover:text-brand-light"
            >
              Explore Zoiko One
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-8 rounded-2xl border border-brand/15 bg-brand/5 p-6 text-center">
          <Eyebrow center>Approved product principle</Eyebrow>
          <p className="mt-3 text-lg font-semibold text-brand-dark">
            Separate products commercially, preserve a shared platform technically.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
