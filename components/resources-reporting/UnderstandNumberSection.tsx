import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function UnderstandNumberSection() {
  return (
    <section className="border-t border-slate-200 bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal className="overflow-hidden rounded-[20px] shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)]">
          <img
            src="/images/resources-reporting/payroll-number.png"
            alt="Colleagues reviewing a payroll report together at a shared desk"
            loading="lazy"
            className="h-64 w-full object-cover sm:h-80 lg:h-[380px]"
          />
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>Understand a payroll number</Eyebrow>
          <h2 className="mt-3.5 max-w-[500px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            The minimum context before any number is meaningful.
          </h2>

          <p className="mt-5 max-w-[510px] text-base leading-7 text-slate-600">
            Before treating a payroll figure as meaningful, check its scope, period and definition —
            which entity, jurisdiction and population it covers, and what unit or version applies.
          </p>
          <p className="mt-4 max-w-[510px] text-base leading-7 text-slate-600">
            Then confirm its source and freshness — is it current, partial or stale? — and whether
            any currency conversion is explicit rather than hidden.
          </p>

          <div className="mt-7 rounded-xl border border-l-4 border-slate-200 border-l-brand bg-white px-6 py-5">
            <p className="text-sm leading-6 text-brand-dark">
              <span className="font-bold">No false comparability.</span> Two numbers aren&apos;t
              comparable just because they share a label — always check scope, period, currency and
              source quality first.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
