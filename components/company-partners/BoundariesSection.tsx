import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function BoundariesSection() {
  return (
    <section className="bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal>
          <Eyebrow>Technology, service &amp; trust boundaries</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            A relationship and a capability are separate objects.
          </h2>
          <p className="mt-4 max-w-[600px] text-base leading-7 text-slate-600">
            A technology partnership indicates only the approved relationship scope — Product
            Integrations and Documentation own whether a connector exists. A service relationship
            does not prove jurisdiction availability — Coverage owns that. A partnership never proves
            security certification applies to Zoiko Payroll.
          </p>

          <div className="mt-6 rounded-xl border border-l-4 border-slate-200 border-l-brand bg-white px-6 py-5">
            <p className="text-sm leading-6 text-brand-dark">
              <span className="font-bold">No connector inference.</span> A named technology partner
              can exist without a public integration, and a supported integration can exist without
              the organization being marketed as a partner. The relationship and product-integration
              objects stay separate.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <img
            src="/images/company-partners/trust-boundaries.png"
            alt="Two colleagues reviewing integration and trust boundaries"
            loading="lazy"
            className="h-64 w-full rounded-[20px] object-cover shadow-lg sm:h-80 lg:h-[380px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
