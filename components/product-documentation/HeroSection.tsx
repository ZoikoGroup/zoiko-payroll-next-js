import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { CheckCircleIcon } from "../ui/icons";

const highlights = [
  "Current product behavior",
  "Visible applicability",
  "Reviewed ownership",
  "Safe recovery",
];

export default function HeroSection() {
  return (
    <section className="bg-footer-gradient border-b border-[#DCE6EC] py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow center tone="light">
            Product documentation
          </Eyebrow>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Configure and Use Zoiko Payroll with Current Product Documentation
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Search current guidance for payroll processing, approvals, deductions and adjustments,
            employee payroll records, reporting, integrations, security, implementation and other
            approved capabilities.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {highlights.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300">
              <CheckCircleIcon className="h-3.5 w-3.5 text-brand-light" />
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
