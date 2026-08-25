import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const faqs = [
  {
    question: "Does a country payroll guide mean Zoiko Payroll supports that country?",
    answer:
      "No. Availability is a separate, current record — always check the Coverage / Directory before assuming support.",
  },
  {
    question: "How do I check current Zoiko Payroll availability for a jurisdiction?",
    answer:
      "Use the “Check current availability” link on any guide, which routes to the authoritative Coverage / Directory record.",
  },
  {
    question: "How is a Jurisdiction Guide different from Local Payroll Requirements?",
    answer:
      "The guide explains market context and terminology; Local Payroll Requirements is the authority for the currently approved requirement itself.",
  },
  {
    question: "How often are jurisdiction guides reviewed?",
    answer:
      "Each guide has its own reviewed date tied to a defined review cadence — not a universal schedule invented by the UI.",
  },
  {
    question: "What sources are used for market-specific payroll guidance?",
    answer:
      "High-risk statements map to named source references with title, publisher and date, shown transparently rather than decoratively.",
  },
  {
    question: "How are territories, states and provinces represented?",
    answer:
      "Each jurisdiction carries an explicit type — country, territory, or state/province — with its parent/region shown for disambiguation.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center>Frequently asked questions</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Questions about Jurisdiction Guides
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={(index % 2) * 70}>
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
