import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const truths = [
  {
    label: "GUIDE EDUCATION",
    description: "Terminology, operating environment and questions to investigate for a market.",
    authority: "Authority: this guide",
  },
  {
    label: "CURRENT AVAILABILITY",
    description:
      "Whether Zoiko Payroll currently supports this jurisdiction, and under what model.",
    authority: "Authority: Coverage / Directory",
  },
  {
    label: "LOCAL REQUIREMENTS",
    description: "The currently approved requirement for payroll operation in this market.",
    authority: "Authority: Local Payroll Requirements",
  },
  {
    label: "PRODUCT TRUTH",
    description: "Exact current fields, configuration and workflow behavior.",
    authority: "Authority: Product Documentation",
  },
];

export default function HowToUseSection() {
  return (
    <section className="bg-[#F9FAFB] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>How to use these guides</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Four different truths, never blurred together
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {truths.map((truth, index) => (
            <Reveal key={truth.label} delay={index * 70} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold leading-4 tracking-wide text-sky-700">
                  {truth.label}
                </p>
                <p className="mt-2 text-xs leading-5 text-gray-600">{truth.description}</p>
                <p className="mt-auto border-t border-slate-200 pt-3 text-xs leading-4 text-slate-500">
                  {truth.authority}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
