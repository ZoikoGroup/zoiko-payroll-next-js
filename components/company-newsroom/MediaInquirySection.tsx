import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function MediaInquirySection() {
  return (
    <section id="media-inquiry" className="scroll-mt-24 bg-[#F4F6F7] py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal>
          <img
            src="/images/company-newsroom/media-inquiry.png"
            alt="The Zoiko Payroll communications team"
            loading="lazy"
            className="h-64 w-full rounded-[20px] object-cover shadow-lg sm:h-80 lg:h-[380px]"
          />
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>Media inquiry</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Routed to an accountable communications team
          </h2>
          <p className="mt-4 max-w-[600px] text-base leading-7 text-slate-600">
            First name, last name, work email, outlet, role, topic and message — routed by topic,
            never to a direct executive inbox.
          </p>

          <div className="mt-6 rounded-xl border border-l-4 border-slate-200 border-l-brand bg-white px-6 py-5">
            <p className="text-sm leading-6 text-brand-dark">
              <span className="font-bold">Never submit:</span> payroll records, employee data,
              bank/tax data, credentials or private security evidence through this form. We do not
              guarantee a response time unless an approved SLA exists.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-brand-gradient px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            Open media inquiry
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
