import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import RadialDiagram from "./RadialDiagram";
import { CheckCircleIcon } from "../ui/icons";

const principles = [
  { label: "Accuracy" },
  { label: "Accountability" },
  { label: "Local precision" },
  { label: "Security & privacy" },
  { label: "Evidence" },
  { label: "Independence" },
  { label: "Customer choice" },
  { label: "Improvement" },
];

const commitmentsLeft = [
  "Communicate jurisdiction availability honestly.",
  "Avoid unsupported compliance, security, country, and performance claims.",
  "Maintain controlled release and change practices.",
  "Publish material service, legal, privacy, and trust information.",
  "Give customers clear routes to assistance and status information.",
];

const commitmentsRight = [
  "Explain product and service scope clearly.",
  "Protect customer and employee information.",
  "Provide accessible product and support experiences.",
  "Support implementation through defined responsibilities and testing.",
  "Build for long-term operational reliability and interoperability.",
];

export default function PrinciplesSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Operating principles and customer commitments</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            The principles behind every payroll experience we build.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-12 flex justify-center">
          <RadialDiagram
            centerLabel={
              <span>
                Accuracy · Control
                <br />
                Trust · Local
                <br />
                Precision
              </span>
            }
            items={principles}
            radius={140}
            size={340}
            itemVariant="circle"
            centerGradient
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
          {[commitmentsLeft, commitmentsRight].map((list, listIndex) => (
            <ul key={listIndex} className="space-y-3">
              {list.map((item, index) => (
                <Reveal key={item} delay={(listIndex * 5 + index) * 40}>
                  <li className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
