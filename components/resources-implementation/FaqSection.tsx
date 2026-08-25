import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const faqs = [
  {
    question: "How long does payroll implementation take?",
    answer:
      "No universal duration — it depends on scope, systems, data, integrations, jurisdictions, readiness and contracted responsibilities.",
  },
  {
    question: "What is included in payroll migration?",
    answer:
      "Only approved data/history/artifacts needed for the target operating model, with mapping, validation and reconciliation controls.",
  },
  {
    question: "Does passing testing prove compliance?",
    answer:
      "No. Product validation does not replace legal, statutory, tax, accounting or payroll review responsibilities.",
  },
  {
    question: "Who approves launch?",
    answer:
      "Authorized decision-makers in the implementation/customer governance model, based on evidence and unresolved issues — not this page.",
  },
  {
    question: "Where do I find current setup instructions?",
    answer: "Product Documentation.",
  },
  {
    question: "How do I plan multi-country implementation?",
    answer:
      "Use Global Payroll Implementation and Migration, after checking current jurisdiction availability.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Questions about implementation.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={(index % 2) * 80}>
              <div className="h-full rounded-xl border border-slate-200 bg-white px-4 pb-4 pt-3.5">
                <p className="text-sm font-bold leading-5 text-[#0A2E4B]">{faq.question}</p>
                <p className="mt-1.5 text-xs leading-5 text-gray-600">{faq.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
