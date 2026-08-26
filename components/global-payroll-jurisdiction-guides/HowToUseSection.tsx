import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const cards = [
  {
    icon: "/images/global-payroll-jurisdiction-guides/icon-explains.svg",
    title: "What a guide explains",
    description:
      "Market terminology, operating environment, common questions and educational context for a jurisdiction.",
  },
  {
    icon: "/images/global-payroll-jurisdiction-guides/icon-confirms.svg",
    title: "What confirms current truth",
    description:
      "Current availability, approved local requirements and product behavior always come from their own authoritative source.",
  },
  {
    icon: "/images/global-payroll-jurisdiction-guides/icon-next.svg",
    title: "What to do next",
    description:
      "Use the authority rail on each guide to jump straight to availability, requirements or implementation guidance.",
  },
];

export default function HowToUseSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>How to use these guides</Eyebrow>
          <h2 className="mt-3.5 max-w-[630px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Education vs. availability, requirements and product truth.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 70}
              className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-brand">
                <img src={card.icon} alt="" aria-hidden="true" className="size-5" />
              </span>
              <p className="mt-5 text-base font-bold leading-6 text-brand-dark">{card.title}</p>
              <p className="mt-2.5 text-xs leading-5 text-slate-600">{card.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
