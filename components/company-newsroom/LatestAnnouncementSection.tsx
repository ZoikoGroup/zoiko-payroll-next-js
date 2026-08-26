import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function LatestAnnouncementSection() {
  return (
    <section id="latest-announcement" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[820px] text-center">
          <div className="flex justify-center">
            <Eyebrow>Latest approved announcement</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            The newest published record — never engagement-optimized.
          </h2>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg lg:grid-cols-2"
        >
          <div className="bg-slate-50/60 px-6 pb-10 pt-8 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
              <span className="rounded-md bg-sky-100 px-2 py-1 text-xs font-extrabold uppercase leading-4 tracking-wide text-sky-800">
                Company
              </span>
              <span className="text-xs leading-4 text-slate-400">Published Aug 12, 2026</span>
            </div>

            <p className="mt-3 text-xl font-extrabold leading-8 text-brand-dark">
              Zoiko Payroll expands Global Payroll coverage to three additional markets.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Zoiko Payroll has extended its Global Payroll operating model to three new
              jurisdictions, with local requirement guides available at launch.
            </p>

            <span className="mt-3 inline-flex rounded-[20px] bg-[#EEF2FF] px-2 py-1 text-xs font-semibold leading-4 text-brand-dark">
              Scope: Zoiko Payroll · Global Payroll
            </span>

            <div className="mt-6">
              <Link
                href="#company-announcements"
                className="inline-flex rounded-lg bg-brand-gradient px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
              >
                Read the announcement
              </Link>
            </div>
          </div>

          <img
            src="/images/company-newsroom/latest-announcement.png"
            alt="A technology workspace with monitoring displays"
            loading="lazy"
            className="h-56 w-full object-cover sm:h-72 lg:h-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
