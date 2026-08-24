import Image from "next/image";
import SectionLabel from "./SectionLabel";

const trustMeta = [
  { label: "Last verified", value: "Aug 18, 2026 · Registry v4.2" },
  { label: "Evidence owner", value: "Global Payroll Compliance Team" },
  { label: "Current version", value: "Coverage Registry v4.2 · Published" },
];

const faqs = [
  {
    q: 'What does "Available" actually mean?',
    a: "Current service exists for the documented scope — it does not imply every filing, payment, integration or support capability is included.",
  },
  {
    q: "Does availability include filing, payments or integrations?",
    a: "Only if that specific service dimension is separately shown as Available on the jurisdiction detail page.",
  },
  {
    q: "What is Limited availability?",
    a: "Service exists only within an explicit narrower boundary, shown before any conversion action.",
  },
  {
    q: "Does Planned mean service is available today?",
    a: "No. Planned is an approved future direction with no current-service implication or CTA.",
  },
  {
    q: "Can I compare markets?",
    a: "Yes — compare up to three jurisdictions using the same definitions and evidence date, with no ranking or scoring.",
  },
];

export default function TrustBoundaryFaqCta() {
  return (
    <section className="w-full px-8 py-16">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-16">

        {/* Trust Boundary */}
        <div className="w-full rounded-3xl bg-sky-950 px-12 py-12">
          <div className="-ml-[39px]">
            <SectionLabel color="light" slash>
              Trust Boundary
            </SectionLabel>
          </div>

          <div className="mt-3 flex flex-col gap-3.5">
            <div className="text-xl font-bold leading-8 text-white">
              Coverage reports current service availability only
            </div>

            <div className="max-w-[640px] pb-[9px] text-sm leading-[18px] text-slate-300">
              It does not replace local payroll/legal/tax advice, a jurisdiction
              guide, a contract or order form, or
              <br />
              implementation scope.
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-5 md:flex-row">
            {trustMeta.map((item) => (
              <div
                key={item.label}
                className="w-80 rounded-xl bg-white/5 p-4 outline outline-1 outline-offset-[-1px] outline-white/10"
              >
                <div className="text-sm font-bold leading-5 text-white">
                  {item.label}
                </div>

                <div className="mt-1 text-xs leading-[14px] text-slate-300">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Header + List */}
        <div className="flex flex-col items-center gap-5">
          <div className="flex max-w-[700px] flex-col items-center gap-3 text-center">
            <SectionLabel slash>
              Frequently Asked Questions
            </SectionLabel>

            <div className="text-3xl font-extrabold leading-10 text-sky-950">
              Questions about Jurisdiction Coverage
            </div>
          </div>

          {/* FAQ List */}
          <div className="flex w-full max-w-[760px] flex-col gap-0 pt-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="flex flex-col gap-1.5 border-b border-slate-100 py-4"
              >
                <div className="text-sm font-bold leading-5 text-sky-950">
                  {faq.q}
                </div>

                <div className="max-w-[760px] text-sm leading-5 text-slate-600">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="flex w-full flex-col gap-0 rounded-3xl bg-sky-950 p-12 shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)] md:flex-row md:items-center md:justify-between">

          {/* CTA Text */}
          <div className="flex max-w-[549px] flex-col justify-center gap-2.5 pt-[9px]"><div className="-ml-[21px]"><SectionLabel color="light" slash>State-Aware Next Step</SectionLabel></div>

            <div className="flex flex-col gap-0 pt-[3.19px] pb-[0.58px]">
              <div className="text-3xl font-extrabold leading-10 text-white">
                Continue with United States —
                <br />
                Available
              </div>
            </div>

            <div className="text-base leading-6 text-slate-300">
              Your selected jurisdiction determines the next step. No
              jurisdiction selected yet? Search above first.
            </div>
          </div>

          {/* CTA Image */}
          <div className="mt-8 h-[355px] w-full flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 md:mt-0 md:w-[426px]">
            <Image
              src="/xx.png"
              alt="CTA illustration"
              width={426}
              height={355}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
