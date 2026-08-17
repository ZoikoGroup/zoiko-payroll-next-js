import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const questions = [
  { question: "How many jurisdictions?", purpose: "Sets the operating-model comparison." },
  { question: "How many legal entities?", purpose: "Informs the object-model scope." },
  { question: "What's your workforce range?", purpose: "Shapes implementation wave sizing." },
  { question: "What's your primary objective?", purpose: "Consolidation, modernization or expansion." },
];

export default function PathFinderSection() {
  return (
    <section id="find-your-path" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border border-[#DCE6EC] bg-white px-6 py-6 sm:px-8 sm:py-8">
            <Eyebrow>Find the right payroll path</Eyebrow>

            <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {questions.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-[#DCE6EC] bg-white px-4 py-3.5"
                >
                  <p className="text-sm font-bold leading-5 text-[#082F49]">{item.question}</p>
                  <p className="mt-1 text-xs leading-5 text-[#4E6172]">{item.purpose}</p>
                </div>
              ))}
            </div>

            <Link
              href="/solutions/finder"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#DCE6EC] px-5 py-3 text-sm font-semibold text-[#082F49] transition-all duration-200 hover:-translate-y-0.5"
            >
              Find your solution <span aria-hidden="true">&nbsp;→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
