import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function DecisionRightsEscalationSection() {
  return (
    <section className="bg-white pb-16 sm:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Left Column (Text) */}
          <Reveal className="w-full">
            <p className="mb-2.5 text-[13px] font-bold tracking-[0.06em] text-[#2F6FED] uppercase">
              Decision Rights &amp; Escalation
            </p>
            <h2 className="text-[1.7rem] leading-[1.15] font-extrabold tracking-tight text-[#08132B] lg:text-[26.7px]">
              Acknowledge, ask, sponsor or decide
            </h2>
            <p className="mt-3.5 text-[14px] leading-[1.6] text-[#3A4356]">
              Editing payroll records always stays with specialist workflows.
              Business leaders can acknowledge, request explanation, sponsor
              an escalation, or approve a genuinely executive decision — never
              edit a record directly.
            </p>

            <div className="mt-6">
              <Link
                href="/book-a-demo"
                className="inline-flex items-center justify-center rounded-lg bg-[#068ACE] px-6 py-[13px] text-[14.5px] font-semibold text-white shadow-sm transition-all hover:bg-[#0575AE]"
              >
                Request Demo →
              </Link>
            </div>
          </Reveal>

          {/* Right Column (Image) */}
          <Reveal delay={120} className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative h-[260px] w-full overflow-hidden rounded-2xl sm:h-[320px] lg:h-[400px]">
              <img
                src="/images/business-leaders/decision-rights-escalation.png"
                alt="Executive reviewing a decision brief with a team member"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
