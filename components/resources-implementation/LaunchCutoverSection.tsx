import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const questions = [
  {
    question: "What should be known before launch?",
    answer:
      "Approved scope, critical validation evidence, open blockers, accepted exceptions, operational owners, support path, rollback conditions and communications.",
  },
  {
    question: "Who approves go-live?",
    answer:
      "Authorized decision-makers defined by the implementation/customer governance model — not this Resources page.",
  },
  {
    question: "Can one market launch while another is held?",
    answer:
      "Only where approved scope/wave design supports it — route to multi-market implementation authority.",
  },
];

const decisions = [
  { label: "GO", className: "bg-[#E3EFE6] text-[#3F6B54]" },
  { label: "HOLD", className: "bg-[#F3E9CC] text-[#8C6D2F]" },
  { label: "PARTIAL GO", className: "bg-blue-50 text-sky-700" },
  { label: "ROLLBACK", className: "bg-[#FBEAEA] text-[#A14842]" },
];

export default function LaunchCutoverSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Launch &amp; cutover</Eyebrow>
            <h2 className="mt-3.5 max-w-[520px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
              Plan a controlled launch — never a guaranteed one
            </h2>

            <div className="mt-6">
              {questions.map((item) => (
                <div key={item.question} className="border-b border-slate-200 py-4 first:pt-0">
                  <p className="text-sm font-bold leading-5 text-[#0A2E4B]">{item.question}</p>
                  <p className="mt-1 text-xs leading-5 text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {decisions.map((decision) => (
                <span
                  key={decision.label}
                  className={`rounded-[20px] px-3 py-1.5 text-xs font-bold leading-4 ${decision.className}`}
                >
                  {decision.label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/resources-implementation/launch-cutover.png"
              alt="A team planning a controlled launch against a wall of notes"
              loading="lazy"
              className="h-56 w-full rounded-2xl border border-slate-200 object-cover shadow-[0px_20px_44px_-22px_rgba(15,45,70,0.25)] sm:h-72 lg:h-80"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
