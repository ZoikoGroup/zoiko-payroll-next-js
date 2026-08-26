import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function FinalCtaSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-2xl bg-brand-dark">
          <img
            src="/images/resources-security-trust/cta-background.png"
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(23deg, rgba(15,23,42,0.94) 0%, rgba(15,23,42,0.88) 38%, rgba(8,47,73,0.30) 100%)",
            }}
          />

          <div className="relative px-6 py-12 sm:px-10 sm:py-14">
            <Eyebrow tone="light">Ready to review payroll security with the right scope?</Eyebrow>
            <h2 className="mt-3.5 max-w-[560px] text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
              Move from public controls and evidence to the review your team actually needs.
            </h2>
            <p className="mt-4 max-w-[560px] text-sm leading-6 text-slate-300">
              Explore current Zoiko Payroll security and trust resources first. When your evaluation
              depends on customer-specific architecture, integrations, regions or restricted
              evidence, continue through the approved security-review or commercial path.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
