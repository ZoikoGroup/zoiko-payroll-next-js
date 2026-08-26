import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const faqItems = [
  {
    question: "Does watching a video prove a feature is available to me?",
    answer:
      "No. Availability, plan entitlement and jurisdiction support are governed by Product Documentation and Jurisdiction Coverage — never inferred from a recording.",
  },
  {
    question: "Why do some videos show \u201cReview Due\u201d?",
    answer:
      "Product changes can move a Current video into review. It may remain viewable, but is not featured as fully current until revalidated.",
  },
  {
    question: "Can I jump to a specific step?",
    answer:
      "Yes — every procedural video includes named chapters with timestamps, plus a searchable, chapter-linked transcript.",
  },
  {
    question: "Is demo footage real customer data?",
    answer:
      "No. Every recording uses a synthetic, demo-safe environment — no real payroll, employee, banking or identity data.",
  },
  {
    question: "What if there's no video for my task?",
    answer:
      "The finder routes you honestly to Product Documentation or Help Center rather than implying every task has a recording.",
  },
  {
    question: "Are captions and transcripts available for every video?",
    answer:
      "Every Current public video includes captions and a descriptive transcript; audio-description is added where applicable.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Questions about Product Videos.
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
              <p className="mt-2.5 text-sm leading-6 text-slate-600">{item.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
