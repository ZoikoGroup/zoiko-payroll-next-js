import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const authorities = [
  { label: "System Status", href: "/resources/system-status" },
  { label: "Release Notes", href: "/resources/release-notes" },
  { label: "Products", href: "/product/payroll-processing" },
  { label: "Documentation", href: "/resources/documentation" },
  { label: "Trust and Security", href: "/company/trust-center" },
  { label: "Global Payroll", href: "/global-payroll" },
];

const types = [
  "Company announcement",
  "Product announcement",
  "Leadership update",
  "Partnership announcement",
  "Press release / statement",
];

export default function DirectAnswerSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/company-newsroom/direct-answer.png"
              alt="A communications team working at their desks"
              loading="lazy"
              className="h-64 w-full rounded-[20px] object-cover shadow-lg sm:h-80 lg:h-[380px]"
            />
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Direct answer</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
              What belongs in the Newsroom?
            </h2>
            <p className="mt-4 max-w-[600px] text-base leading-7 text-slate-600">
              The Zoiko Payroll Newsroom publishes approved company and product announcements. It is
              not the source for live service incidents, detailed shipped-change history, current
              product instructions, security evidence or jurisdiction availability.
            </p>

            <div className="mt-6 rounded-xl border border-l-4 border-slate-200 border-l-brand bg-white px-6 py-5">
              <p className="text-sm leading-6 text-brand-dark">
                Those questions route to{" "}
                {authorities.map((authority, index) => (
                  <span key={authority.label}>
                    <Link
                      href={authority.href}
                      className="font-bold text-brand transition-colors duration-200 hover:text-brand-dark"
                    >
                      {authority.label}
                    </Link>
                    {index < authorities.length - 2
                      ? ", "
                      : index === authorities.length - 2
                        ? " or "
                        : " authorities."}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-8">
          {types.map((type) => (
            <span
              key={type}
              className="rounded-[20px] border border-slate-200 bg-white px-4 py-2 text-xs font-semibold leading-5 text-brand-dark"
            >
              {type}
            </span>
          ))}
        </Reveal>

        <Reveal
          delay={200}
          className="mt-6 rounded-xl border border-l-4 border-slate-200 border-l-brand bg-white px-6 py-5"
        >
          <p className="text-sm leading-6 text-brand-dark">
            <span className="font-bold">Excluded by default:</span> roadmap items, internal launch
            targets, support bulletins, incident updates, vulnerability disclosures, changelog
            entries, unpublished jobs, customer-specific notifications and speculative press
            responses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
