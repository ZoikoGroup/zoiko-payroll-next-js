import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const faqItems = [
  {
    question: "What is a payroll glossary?",
    answer:
      "A structured set of definitions for payroll terminology, abbreviations and related concepts — with canonical identity, aliases, distinctions, scope and authority links.",
  },
  {
    question: "Are these definitions legal or tax advice?",
    answer:
      "No. Definitions are general terminology unless a reviewed scope says otherwise; legal, tax and statutory treatment can vary and requires the applicable authority or advisor.",
  },
  {
    question: "How do I find an abbreviation?",
    answer:
      "Search the abbreviation directly. Unique approved abbreviations resolve transparently to the canonical term; ambiguous ones show a choice.",
  },
  {
    question: "Why can a term have more than one meaning?",
    answer:
      "Some terms differ by product, jurisdiction or operating context. The glossary separates scoped meanings rather than forcing one universal definition.",
  },
  {
    question: "What if I can't find a term?",
    answer:
      "Use related suggestions, the A-Z index, topics or the Resource Center — or request editorial review of a missing definition.",
  },
  {
    question: "Does a definition show how Zoiko Payroll is configured?",
    answer:
      "No. Product Documentation is the authority for current product fields, settings, states and workflows.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[#E9F0F8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2 className="mt-6 text-2xl font-bold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Questions about the Payroll Glossary.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {faqItems.map((item) => (
              <li key={item.question} className="rounded-xl bg-white p-6">
                <p className="text-sm font-bold leading-5 text-sky-950">{item.question}</p>
                <p className="mt-3 text-sm leading-6 text-gray-600">{item.answer}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
