import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const faqItems = [
  {
    question: "Does this page prove Zoiko Payroll is certified or compliant?",
    answer:
      "No. Any assurance or certification statement must come from a current approved artifact with explicit scope — this page only routes to evidence that is actually published or available through an approved review process.",
  },
  {
    question: "Where can I see current Zoiko Payroll security controls?",
    answer:
      "Use Product Security and Trust for the control architecture and Product Documentation for current configuration instructions.",
  },
  {
    question: "Where can I find data residency information?",
    answer:
      "Use the current Data Residency authority when available. Residency must never be inferred from your location, payroll jurisdiction or language.",
  },
  {
    question: "How do I check current service health?",
    answer:
      "Use System Status. Business continuity resources describe preparedness and evidence, not live incident state.",
  },
  {
    question: "Can I request restricted security evidence?",
    answer:
      "Only through the approved security-review or customer review process. Access depends on scope, authorization and applicable terms — this page does not imply entitlement.",
  },
  {
    question: "Where do I report a vulnerability?",
    answer:
      "Use Responsible Disclosure when the route is current. Vulnerability reports should never go through demo, sales or ordinary support forms.",
  },
  {
    question: "Does security evidence apply to every country and entity?",
    answer:
      "Not automatically. Evidence has a defined service, product, region, date and sometimes contract scope — Global Payroll availability is a separate authority.",
  },
  {
    question: "Do existing customers need to book a demo for security help?",
    answer:
      "No. Existing customers are routed to sign-in, Documentation, Help Center, System Status and current evidence resources before any commercial pathway.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-slate-100 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2 className="mt-3.5 max-w-[560px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Questions about Security and Trust resources.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {faqItems.map((item, index) => (
            <Reveal
              key={item.question}
              delay={index * 50}
              className="h-full rounded-xl border border-slate-200 bg-white p-5"
            >
              <p className="text-sm font-bold leading-5 text-brand-dark">{item.question}</p>
              <p className="mt-2.5 text-xs leading-5 text-slate-600">{item.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
