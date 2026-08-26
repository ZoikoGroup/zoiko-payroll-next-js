import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function DirectAnswerSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal>
          <Eyebrow>Direct answer</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            What is a Zoiko Payroll partner?
          </h2>
          <p className="mt-4 max-w-[600px] text-base leading-7 text-slate-600">
            A Zoiko Payroll partner relationship is a verified, scoped relationship between the
            approved Zoiko entity and another organization for a defined technology,
            service-delivery, commercial or ecosystem purpose. The relationship record explains what
            is covered, its current status and its limitations.
          </p>

          <div className="mt-6 rounded-xl border border-l-4 border-slate-200 border-l-brand bg-white px-6 py-5">
            <p className="text-sm leading-6 text-brand-dark">
              <span className="font-bold">Directory listing is not authority.</span> Appearing on
              this page does not authorize an organization to bind Zoiko Payroll, quote prices,
              represent product availability, process customer payroll, access customer data, make
              security/compliance claims, use marks outside approved rights, or operate in a
              jurisdiction beyond the current approved scope.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <img
            src="/images/company-partners/direct-answer.png"
            alt="A team reviewing partnership documents together"
            loading="lazy"
            className="h-64 w-full rounded-[20px] object-cover shadow-lg sm:h-80 lg:h-[380px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
