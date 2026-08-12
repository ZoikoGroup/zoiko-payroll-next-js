import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const faqItems = [
  {
    question: "What happens if parallel test results don't match?",
    answer:
      "Variances above the agreed tolerance are logged and investigated stage by stage — usually traced back to a configuration rule or a data mapping — before another parallel cycle is run. Launch doesn't proceed until results clear the threshold.",
  },
  {
    question: "Can stages overlap, or do they run strictly in sequence?",
    answer:
      "Discover and Configure run sequentially, but Prepare data typically overlaps with the later part of Configure once rules are stable enough to map data against. Parallel test always starts only after Validate has cleared its exit gate.",
  },
  {
    question: "What does our team need to prepare before Discover starts?",
    answer:
      "A current list of legal entities and jurisdictions, access to your existing payroll and HRIS exports, and named owners for payroll, finance and IT. Everything else is scoped collaboratively during the stage itself.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[#F6F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center className="justify-center">
            Questions about implementation
          </Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
            Before you scope a program.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-12">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              className={`py-8 text-center ${index > 0 ? "border-t border-slate-200" : ""}`}
            >
              <h3 className="text-sm font-bold text-slate-900">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
